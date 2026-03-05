//=============================================================================
// VanillaNya_SimulateTerminalScroll.js
//=============================================================================

/*:
 * @plugindesc 模拟终端滚动
 * @author VanillaNya
 *
 * @help 这个插件会模拟终端的滚动，当输入不足最大行数时会在后方补充空行，当超出最大行数时会删除前方的行以塞入新的内容。
 * 应当搭配Drill_up的'Drill_DialogOperator'，初始插件应当使用Drill_up的'Drill_CoreOfString'
 * 如果你不使用'Drill_DialogOperator'调整对话框高度，原版4行高的对话框根本没有终端的效果。如果你用这个插件的输出做别的事情，当我没说
 * 本作者的默认方案依赖Drill_up'Drill_CoreOfString'
 * 
 * 本插件只管合并和输出，不会把输出自动覆盖回字符串，其他操作在"字符串最终处理"参数里完成，你可以填代码进这个eval里
 * 如果想要使用控制字符，你需要用'\\'代替'\'(这被称为转义)
 * 在需要的时候你得手动清空字符串来清空过去的输出，在默认方案中可以这样
 * $gameStrings.setValue(1, '');
 * 
 * 这是展开的使用
 * const newTerminalContent = "hello world";
 * const displayContent = processTerminalOutput(newTerminalContent);
 * $gameMessage.add(displayContent);
 * 
 * 这是简化后的使用
 * $gameMessage.add(processTerminalOutput("hello world"));
 * 
 * 提示：你可以使用$gameMessage.add();来创建一个游戏对话框
 * 
 * @param 最大行数变量
 * @desc 必填，游戏变量，用于最大行数判断
 * 默认：20
 * 这意味着会使用20号变量的值判断
 * @default 20
 * 
 * @param 最大行数绑定Drill_DialogOperator
 * @type boolean
 * @desc 将最大行数绑定至Drill_DialogOperator的对话框高度(true/false)
 * 启用后插件参数最大行数变量失效
 * 默认：false
 * @default false
 * 
 * @param 启用自动前后缀
 * @type boolean
 * @desc 是否在输入前后自动添加"\\>"和"\\<"" (true/false)
 * 默认:true
 * @default true
 * 
 * @param 字符串
 * @desc 必填，插件会将其作为终端历史输出并和输入拼接
 * 默认：$gameStrings.value(1)
 * 这代表Drill_CoreOfString的1号字符串，如果你不使用它的话，你得改改此插件，自己声明一个
 * @default $gameStrings.value(1)
 * 
 * @param 字符串最终处理
 * @desc 填入JS，你想在最后做些什么？
 * 这段代码会在拼接处理完毕后执行
 * @default 
 */


// 插件参数初始化
var VN = VN || {};
VN.parameters = PluginManager.parameters('VanillaNya_SimulateTerminalScroll');


VN.VN_maxLines = Number(VN.parameters['最大行数变量'] || 20); // 存储行数变量ID
VN.VN_maxLinesBindDDO = String(VN.parameters['最大行数绑定Drill_DialogOperator'] || "true") === "false";
VN.VN_stringParam = String(VN.parameters['字符串'] || "$gameStrings.value(1)"); // 字符串存储位置
VN.VN_enablePrefix = String(VN.parameters['启用自动前后缀'] || "false") === "true";
VN.VN_stringCode = VN.parameters['字符串最终处理']  // 存储时的回调逻辑
    ? String(VN.parameters['字符串最终处理']) 
    : '$gameStrings.setValue(1, combined.join("\\n"))';


var DrillUp = DrillUp || {};
//==============================
// * 提示信息 - 报错 - 缺少基础插件(来自Drill_up)
//			
//			说明：	此函数只提供提示信息，不校验真实的插件关系。
//==============================
if( !Imported.Drill_DialogOperator && VN.VN_maxLinesBindDDO ){
    VN.VN_maxLinesBindDDO = false;
    console.error("VanillaNya_SimulateTerminalScroll的插件参数依赖Drill_DialogOperator.js，你都没安装依赖让我读取个锤子！");
    alert("VanillaNya_SimulateTerminalScroll的插件参数依赖Drill_DialogOperator.js，你都没安装依赖让我读取个锤子！");
}



// 获取当前存储的字符串内容（受Drill_CoreOfString插件支持）
function getGameString() {
    try {
        return typeof eval(VN.VN_stringParam) === 'string' ? eval(VN.VN_stringParam) : '';
    } catch (e) {
        return ''; // 异常时返回空字符串
    }
}

// 核心处理函数：管理终端内容滚动
function processTerminalOutput(newInput) {


    // 阶段1：准备数据
    const history = getGameString().split('\n').filter(line => line.trim() !== ''); // 有效历史记录
    let newLines = newInput.split('\n').filter(line => line !== ''); // 有效新内容

    // 新增前缀后缀处理
    let tempLines = newInput.split('\n');
    if (VN.VN_enablePrefix) {
        tempLines = tempLines.map(line => `\\>${line}\\<`);
    }
    newLines = tempLines.filter(line => line !== '');
    
    // 阶段2：合并内容
    let combined = history.concat(newLines);
    if (VN.VN_maxLinesBindDDO) {
        var maxLines = $gameSystem._drill_DOp_curStyle['height_rowCount'] // 从绑定的Drill插件获取最大行数
    } else {
        var maxLines = $gameVariables.value(VN.VN_maxLines); // 从变量获取最大行数
    }
    
    
    // 阶段3：内容截断
    combined = combined.slice(-maxLines); // 保留最近N条
    
    // 阶段4：显示处理
    const displayContent = [...combined]; // 显示副本
    $gameMessage.newPage();
    
    // 阶段5：持久化存储
    try {
        // 通过动态函数执行存储逻辑（配合插件参数设置）
        new Function('combined', $gameStrings.setValue(1, combined.join('\\n')))(combined);
    } catch (e) {
        console.error('[存储异常]', e); // 存储失败时记录错误
    }
    
    if (typeof VN.VN_stringCode === 'string' && VN.VN_stringCode.trim() !== '') {
        try {
          eval(VN.VN_stringCode);
        } catch (error) {
          console.log('VN_STS炸了！你填的什么代码在插件参数里？！↙')
          console.info(VN.VN_stringCode)
          console.error('Vanilla_SimulateTerminalScroll报错:', error);
        }
      }

    return displayContent.join('\n'); // 返回处理后的显示文本
}