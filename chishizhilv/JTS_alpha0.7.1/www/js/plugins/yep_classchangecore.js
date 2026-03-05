//=============================================================================
// Yanfly Engine Plugins - Class Change Core
// YEP_ClassChangeCore.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ClassChangeCore = true;

var Yanfly = Yanfly || {};
Yanfly.CCC = Yanfly.CCC || {};
Yanfly.CCC.version = 1.13;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.13 | 006职业变更核心
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param --常规--
 * @default
 *
 * @param 职业命令
 * @parent --常规--
 * @desc 主菜单“职业”命令的文本
 * @default 职业
 *
 * @param 自动添加菜单
 * @parent --常规--
 * @type boolean
 * @on 自动添加
 * @off 不自动添加
 * @desc 自动将“职业”命令添加到主菜单
 * @default true
 *
 * @param 显示命令
 * @parent --常规--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 主菜单默认显示/隐藏“职业”命令
 * @default true
 *
 * @param 启用命令
 * @parent --常规--
 * @type boolean
 * @on 启用
 * @off 禁用
 * @desc 主菜单默认启用/禁用“职业”命令
 * @default true
 *
 * @param 自动放置命令
 * @parent --常规--
 * @type boolean
 * @on 自动
 * @off 手动
 * @desc 允许此插件决定菜单放置位置
 * @default true
 *
 * @param 默认图标
 * @parent --常规--
 * @desc 这是用于所有职业的默认图标的索引
 * @default 78
 *
 * @param 维持经验
 * @parent --常规--
 * @type boolean
 * @on 共用
 * @off 独立
 * @desc 角色的所有转职获得的总经验值共用/分开计算
 * 请参考该备注标签部分的说明：<Level Unlock Requirements>
 * @default true
 *
 * @param 未锁定职业
 * @parent --常规--
 * @desc 默认情况下未锁定，可转职的职业
 * 列出的职业的ID之间用空格隔开，默认为1到4号职业
 * @default 1 2 3 4
 *
 * @param --命令窗口--
 * @default
 *
 * @param 转职命令
 * @parent --命令窗口--
 * @desc 用于更改主职业的命令文本
 * @default 主职业
 *
 * @param 显示转职命令
 * @parent --命令窗口--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 默认显示/隐藏转职命令
 * @default true
 *
 * @param 启用转职命令
 * @parent --命令窗口--
 * @type boolean
 * @on 启用
 * @off 禁用
 * @desc 默认启用/禁用转职命令
 * @default true
 *
 * @param 显示技能学习
 * @parent --命令窗口--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 启用技能学习系统插件时，显示/隐藏“学习技能”命令
 * @default true
 *
 * @param 完成命令
 * @parent --命令窗口--
 * @desc 用于退出职业场景的命令文本
 * @default 完成
 *
 * @param 文本对齐
 * @parent --命令窗口--
 * @type combo
 * @option 左对齐
 * @option 居中
 * @option 右对齐
 * @desc 命令窗口的文本对齐方式
 * @default 居中
 *
 * @param --窗口设置--
 * @default
 *
 * @param 当前职业颜色
 * @parent --窗口设置--
 * @type number
 * @min 0
 * @max 31
 * @desc 角色当前职业的文本颜色
 * @default 17
 *
 * @param 职业等级格式
 * @parent --窗口设置--
 * @desc 职业等级的文本格式
 * @default LV %1
 *
 * @param 职业等级字体大小
 * @parent --窗口设置--
 * @type number
 * @min 1
 * @desc 职业等级文本的字体大小
 * @default 20
 *
 * @help
 *
 * 机翻版本：v0.03  完成时间：2023.10.05
 *
 * 插件官方描述：
 * 本插件创建了一个系统，玩家可以通过主菜单更改角色的职业。
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 本插件增加了玩家在战斗之外从菜单中自由更改角色职业的能力
 * 在更改职业时，可选择转职后是否保留此前获取的总经验值
 *
 * ============================================================================
 * 备注标签
 * ============================================================================
 *
 * 以下是可以与本插件一起使用的一些备注标签：
 * 
 * 角色 备注标签(本备注标签不区分大小写)：
 *
 *   <解锁可转职业: 数字> //或可用<Unlock Class: n>
 *
 *   <解锁可转职业: 数字a, 数字b, 数字c, …>
 *   //或可用<Unlock Class: a, b, c, …>
 *
 *   <解锁可转职业: 数字x到数字y> //或可用<Unlock Class: x to y>
 *
 *   除了该角色当前职业和任何全局职业外
 *   在游戏开始时解锁可转职标签备注的编号的职业
 *
 * 例1：<解锁可转职业: 6> //等同于<Unlock Class: 6>
 * 即为：拥有该备注标签的角色，将在开局时可转职为6号职业
 *
 * 例2：<解锁可转职业: 8, 10, 16, 22> //等同于<Unlock Class: 8, 10, 16, 22>
 * 即为：拥有该备注标签的角色，将在开局时可转职为8，10，16，或33号职业
 *
 * 例3：<解锁可转职业: 30到40> //等同于<Unlock Class: 30 to 40>
 * 即为：拥有该备注标签的角色，将在开局时可转职为30到40号，共11个职业
 *
 *
 *   <禁止转职主>    //或可用<禁止主职业转职>、<Cannot Change Class>
 *   禁止此角色更改主职业
 *   但仍然可以通过插件命令更改主职业
 *
 *
 *   <职业数字x角色图/角色精灵图/行走图/角色行走图: 角色精灵名 索引y>
 *   //或可用<Class x Character: 角色精灵名 y>
 *   当该角色的职业编号是数字x的职业时适用
 *   使角色的角色精灵图(行走图)变为：
 *   目录 img/characters 中图片“角色精灵名.png”中，索引指向的部分
 * 例如：<职业106行走图: Monster 1>
 * //等同于：
 *    <Class 106 Character: Monster 1>
 *    <职业106角色图: Monster 1>
 *    <职业106角色精灵图: Monster 1>
 *    <职业106行走图: Monster 1>
 *    <职业106角色行走图: Monster 1>
 * 即为：拥有该备注标签的角色，若职业是106号职业，则：
 *       其行走图变为目录img/characters中“Monster.png”里的12个史莱姆部分
 *   ！机翻君指引——角色精灵图的索引说明：
 *   ！角色精灵(characters sprite)即目录 img/characters 中的所有图片
 *   ！以Actor1.png为例，该角色精灵实际被RM等分为2行4列的8个“角色”(区域)
 *   ！这8个角色的索引从左到下、从上到下为：0到3、4到7
 *   ！每个角色又被RM分为3列、4行12个小块
 *   ！行从上到下分别为：朝下、朝右(玩家视角，下同)、朝左、朝上
 *   ！！——特别的，以“$(!$同理)”开头的png图片，将被视为1个“角色”
 *   ！！其索引为任意非负整数，但索引建议用：0
 *   ！！也被RM分为3列、4行12个小块
 *   ！！行从上到下同样为：朝下、朝右、朝左、朝上
 *
 *   <职业名角色图/角色精灵图/行走图/角色行走图: 角色精灵名 索引y>
 *   //或可用<职业名 Character: 角色精灵名 y>
 *   如果您希望使用职业名而不是职业编号，请使用上述格式
 *   当该角色的职业是对应职业名时适用
 *   使角色的角色精灵图(行走图)变为：
 *   目录 img/characters 中图片“角色精灵名.png”中，索引指向的部分
 * 例如：<影流之主行走图: !Other1 2>
 * //等同于：
 *    <影流之主 Character: !Other1 2>
 *    <影流之主角色图: !Other1 2>
 *    <影流之主角色精灵图: !Other1 2>
 *    <影流之主行走图: !Other1 2>
 *    <影流之主角色行走图: !Other1 2>
 * 即为：拥有该备注标签的角色，若职业名称是“影流之主”，则：
 *       其行走图变为目录img/characters中“!Other1.png”里的12个白色雪球部分
 *
 *
 *   ！特别地，具有同名的职业，适用职业编号最大的那一个：
 *   ！比如5号职业和21号职业都叫“影流之主”
 *   ！则只有角色为21号职业，才会生效！
 *
 *   ！！其余具有带有 职业名 的备注标签同理！！
 *
 *
 *   <职业数字x脸图/脸部精灵图: 脸部精灵名 索引y>
 *   //或可用<Class x Face: 脸部精灵名 y>
 *   当该角色的职业编号是数字x的职业时适用
 *   使角色在菜单中的脸图变为：
 *   目录 img/faces 中，脸图图片的索引指向的部分
 *   ！索引为从左到右、从上到下
 *   ！！脸图在RM MV中的索引为0到3、4到7，共8个
 * 例如：<职业107脸图: Monster 1>   //即：史莱姆
 * //等同于：
 *    <Class 107 Face: Monster 1>
 *    <职业107脸部精灵图: Monster 1>
 * 即为：拥有该备注标签的角色，若职业是107号职业，则：
 *       其脸图变成目录 img/faces 中“Monster.png”里的史莱姆形象
 *
 *   <职业名脸图/脸部精灵图: 脸部精灵名 索引>
 *   //或可用<职业名 Face: filename y>
 *   如果您希望使用职业名而不是职业编号，请使用上述格式
 *   当该角色的职业是对应职业名时适用
 *   使角色在菜单中的脸图变为：
 *   目录 img/faces 中，脸图图片的索引指向的部分
 * 例如：<影流之主脸图: Monster 0>   //即：蝙蝠
 * //等同于：
 *    <影流之主 Face: Monster 0>
 *    <影流之主脸部精灵图: Monster 0>
 * 即为：拥有该备注标签的角色，若职业名称是“影流之主”，则：
 *       其脸图变成目录 img/faces 中“Monster.png”里的蝙蝠形象
 *
 *
 *   <职业数字x战斗图/战斗精灵图/角色战斗图: 战斗图名>
 *   //或可用<Class x Battler: 战斗图名>
 *   当该角色的职业编号是数字x的职业时适用
 *   使角色战斗中的战斗精灵图(即：战斗图)变为：
 *   目录 img/sv_actors 中的战斗图名的图片
 *   ！角色战斗图只在侧视战斗系统才有战斗图，下同
 * 例如：<职业108战斗图: Actor1_4>
 * //等同于：
 *    <Class 108 Battler: Actor1_4>
 *    <职业108战斗精灵图: Actor1_4>
 *    <职业108角色战斗图: Actor1_4>
 * 即为：拥有该备注标签的角色，若职业是108号职业，，则：
 *       其脸图变成目录 img/sv_actors 中的“Actor1_4.png”的形象
 *
 *   <职业名战斗图/战斗精灵图/角色战斗图: 战斗图名>
 *   //或可用<职业名 Battler: 战斗图名>
 *   如果您希望使用职业名而不是职业编号，请使用上述格式
 *   当该角色的职业是对应职业名时适用
 *   使角色战斗中的战斗精灵图变为：
 *   目录 img/sv_actors 中的战斗图名的图片
 * 例如：<影流之主战斗图: Actor1_4>
 * //等同于：
 *    <影流之主 Battler: Actor1_4>
 *    <影流之主战斗精灵图: Actor1_4>
 *    <影流之主角色战斗图: Actor1_4>
 * 即为：拥有该备注标签的角色，若职业名称是“影流之主”，则：
 *       其脸图变成目录 img/sv_actors 中“Actor1_4.png”的形象
 *
 *
 *
 * 职业 备注标签(本备注标签不区分大小写)：
 *
 *   <图标: 索引y>      //或可用<Icon: 索引y>
 *   拥有该备注标签的职业在“转职”菜单列表中显示图标
 *   图标为“img\system”中“IconSet.png”，索引指向的部分
 *   ！索引为从左到右、从上到下
 *   ！！图标的索引在RM MV中的索引每行16个
 *   ！！第一行为0-15号，第二行16到31号，以此类推
 *   ！！每个图标高宽32像素，即每32像素高为1行
 *   提示：可在“数据库-物品/武器/护甲-图标”处点开，快速查看索引值
 * 例如：<图标: 245>      //等同于<Icon: 245>
 * 对应：“IconSet.png”中16行第6个
 *
 *
 *   <使用昵称>      //或可用<使用角色昵称>、<Use Nic>、<Use Nickname>
 *   此备注标签将使得该职业的名称变成当前职业是此职业的角色的昵称
 *   比如：
 *        111号职业名称为“拷贝”，使用了此备注
 *        111号角色名称为“路明非”昵称为“明妃”
 *         如果111号角色的职业为111号职业，则职业名从“拷贝”变为“明妃”
 *   ！注：机翻君新增：当昵称为空或纯空格时，使用职业原名
 *
 *
 *   <职业描述>        //或可用<职业帮助说明>、<Help Des>、<Help Description>
 *    描述文本第1行
 *    描述文本第2行
 *   </职业描述>      //或可用</职业帮助说明>、</Help Des>、</Help Description>
 *   此备注标签将为该职业设置相应的描述文本
 *   ！注：描述文本最多两行！
 * 例如：
 *   <职业描述>
 *    穿戴板甲
 *    力速双A，无敌的欧拉之力！
 *   </职业描述>
 *
 *
 *   <等级解锁>
 *   //或可用<等级解锁要求>、<Lv Unlk Req>、<Level Unlock Requirements>
 *        职业数字x: 等级数字y
 *        //或可用 Class 数字x: Lv 数字y、Class 数字x: Level 数字y
 *        ……
 *   </等级解锁>
 *   //或可用</等级解锁要求>、</Lv Unlk Req>、</Level Unlock Requirements>
 *   设置解锁特定转职的要求
 *   此备注标签将使得该职业需要角色为职业编号是x的职业
 *   且其职业等级达到y时解锁
 *   ！在两个开始和结束标签中可加入多个条件
 *
 * 例如：在109号职业的备注中备注如下内容：
 *   <等级解锁>
 *     职业9: 等级5
 *     职业12: 等级1
 *     职业35: 等级99
 *     职业50: 等级66
 *   </等级解锁>
 * 则要解锁109号职业，需要角色的转职页面已经解锁9号，12号，35和50号职业
 * 且相应可转职职业的等级全都满足——
 *   角色的可转职/已解锁职业：
 *     09号职业，等级达到05级或以上
 *     12号职业，等级达到01级或以上
 *     35号职业，等级达到99级或以上
 *     50号职业，等级达到66级或以上
 * 上述备注也可写为：
 *   <Lv Unlk Req>
 *     Class 9: Lv 5
 *     Class 12: Lv 1
 *     Class 35: Lv 99
 *     Class 50: Lv 66
 *   </Lv Unlk Req>
 * 或：
 *   <Level Unlock Requirements>
 *     Class 9: Level 5
 *     Class 12: Level 1
 *     Class 35: Level 99
 *     Class 50: Level 66
 *   </Level Unlock Requirements>
 *
 * 特别说明：插件参数“维持经验”
 * - 该插件参数决定了你的角色的不同转职间，是否共用经验值：
 *
 * 例子：
 *   一、各职业升级需要的总经验如下：
 *     职业-1号：总经验值=(等级 - 1) × 100
 *     职业-2号：总经验值=(等级 - 1) × 110
 *
 *   二、需要解锁职业-4号，备注为：
 *   <Level Unlock Requirements>
 *    Class 1: Level 51
 *    Class 2: Level 50
 *   </Level Unlock Requirements>
 *   三、需要解锁职业-5号，备注为：
 *   <Level Unlock Requirements>
 *    Class 1: Level 51
 *    Class 2: Level 52
 *   </Level Unlock Requirements>
 *
 *   四、假设角色A初始职业1号，初始等级51，现在角色A转职为2号职业：
 *
 *     1.不共用经验时——
 *     - 1号职业将保留角色A的初始等级的总经验值：5000点(51级)
 *     - 角色A的职业变为2号，初始经验为0，因此等级变为1
 *     - 解锁职业4/5需要把2号职业升级刷到50或更高
 *
 *     2.共用经验时——
 *     - 转职前，菜单中其余职业的等级将暂时视作和1号职业相同，因此：
 *     →可转职职业4已解锁
 *     →职业5仍然需要升级才能解锁(！1号职业只需要再升1级！)
 *     - 此时已达成解锁4号职业条件！
 *     - 1号职业将保留角色A的初始等级的总经验值：5000点(51级)
 *     - 角色A的职业变为2号，等级变为：46级(4950点，余50点等级经验)
 *     ！共用经验时，5000点经验值等效于51级的职业1，或者46级的职业2
 *     ！所以，共用经验时，升级越快的职业，解锁新转职越高效！
 *—————————————————————————————
 *   <等级解锁>
 *   //或可用<等级解锁要求>、<Lv Unlk Req>、<Level Unlock Requirements>
 *        职业名: 等级数字y
 *        //或可用 职业名: Lv 数字y、职业名: Level 数字y
 *        ……
 *   </等级解锁>
 *   //或可用</等级解锁要求>、</Lv Unlk Req>、</Level Unlock Requirements>
 *   如果您希望使用职业名而不是职业编号，请使用上述格式
 *   当该角色的职业是/有对应职业名时适用
 *   
 *
 * 例如：在666号职业的备注中备注如下内容：
 *   <等级解锁>
 *     影流之主: 等级80
 *     白金之星: 等级70
 *   </等级解锁>
 * 则要解锁666号职业，需要角色的转职页面已经解锁职业：影流之主，白金之星
 * 且相应职业的等级全都满足——
 *   角色的可转职/已解锁职业：
 *     影流之主，等级达到80级或以上
 *     白金之星，等级达到70级或以上
 * 上述备注也可写为：
 *   <Lv Unlk Req>
 *     影流之主: lv 80
 *     白金之星: lv 70
 *   </Lv Unlk Req>
 * 或：
 *   <Level Unlock Requirements>
 *     影流之主: Level 80
 *     白金之星: Level 70
 *   </Level Unlock Requirements>
 *
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 * 此插件中包含多个插件命令，可帮助您更改游戏的职业：
 *
 * 插件命令——
 *   打开职业菜单    //或可用 OpenClass
 *   - 开启职业变更场景菜单，默认为角色编号最小角色的界面
 *
 *   显示职业选项    //或可用 ShowClass
 *   隐藏职业选项    //或可用 HideClass
 *   - 主菜单显示/隐藏“职业”选项
 *
 *   启用职业选项    //或可用 EnableClass
 *   禁用职业选项    //或可用 DisableClass
 *   - “职业”选项启用/禁用
 *
 *   解锁职业 数字x 数字y    //或可用 UnlockClass 数字x 数字y
 *   - x号角色解锁可转职职业y，包括不在/不曾在队伍里的角色，下同
 *   例如：解锁职业 1 5    //或可用 UnlockClass 1 5
 *   即为：1号角色解锁可转职职业5，可转职为职业5，下同
 *
 *   移除职业 数字x 数字y    //或可用 RemoveClass 数字x 数字y
 *   - x号角色移除已解锁职业y，角色职业为y时，不可移除，下同
 *   例如：解锁职业 1 6    //或可用 RemoveClass 1 6
 *   即为：1号角色移除已解锁职业6。角色职业为6时，不移除，下同
 *
 *   全角色解锁职业 数字y    //或可用 UnlockClassAll 数字y
 *   - 所有角色解锁可转职职业y
 *   例如：全角色解锁职业 7    //或可用 RemoveClass 7
 *   即为：所有角色解锁可转职职业7
 *
 *   全角色移除职业 数字y    //或可用 RemoveClassAll 数字y
 *   - 所有角色移除可转职职业y
 *   例如：解锁职业 8    //或可用 RemoveClass 8
 *   即为：所有角色移除已解锁职业8
 *
 * 特别地，下面的两个插件命令只对使用了备注标签<禁止转职主>的角色有效：
 *   启用主转职角色 数字x    //或可用 EnablePrimaryClassChange 15
 *   禁用主转职角色 数字x    //或可用 DisablePrimaryClassChange 15
 *   - x号角色启用/禁用主职业转职功能
 *   例如：启用主职业转职角色 9    //或可用 EnablePrimaryClassChange 9
 *   即为：9号角色启用主职业转职功能
 *   例如：禁用主职业转职角色 10    //或可用 DisablePrimaryClassChange 10
 *   即为：10号角色禁用主职业转职功能
 *
 * ============================================================================
 * 主菜单管理器-定位职业命令
 * ============================================================================
 *
 * 使用主菜单管理器插件时，使用以下格式将“行”命令放置在所需位置：
 *
 *   名字: Yanfly.Param.CCCCmdName
 *   标识: class
 *   显示: $gameSystem.isShowClass()
 *   启用: $gameSystem.isEnableClass()
 *   扩展: 
 *   主要绑定: this.commandPersonal.bind(this)
 *   角色绑定: SceneManager.push(Scene_Class)
 *
 * 将上述设置填进主菜单管理器插件的参数设置中
 * 复制上述设置到你需要的地方即可
 * 同时使用插件参数完成的所有命名、启用、禁用、隐藏和显示效果
 *
 * 记住在本插件的参数中关闭“自动添加菜单”
 * 否则对应的主菜单管理器插件的设置无效
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.13:
 * - 为RPG Maker MV 1.5.0版更新
 *
 * 版本 1.12:
 * - 优化更新
 *
 * 版本 1.11:
 * - 职业增加 <Use Nickname> 备注标签
 * 在职业列表中，使用角色的昵称替代职业名
 *
 * 版本 1.10:
 * - 角色增加 <Cannot Change Class> 备注标签和两个插件命令：
 * EnablePrimaryClassChange 和 DisablePrimaryClassChange
 * - 增加 '自动添加菜单' 插件参数。
 * 这样，如果使用主菜单管理器插件手动定位命令
 * 用户就不必担心与之发生冲突
 *
 * 版本 1.09a:
 * - 优化更新
 * - 当将职业改变为一个全局解锁的职业时，角色将不再解锁这个职业
 * 这是为了保持RemoveClassAll的工作状态
 * 而不必为所有职业单独手动使用RemoveClass
 *
 * 版本 1.08:
 * - 为RPG Maker MV 1.1.0版更新
 *
 * 版本 1.07:
 * - 修复了一个错误，该错误将转职前角色的属性值数据转移到属性比较窗口
 *
 * 版本 1.06:
 * - 对“Change Actor Images”进行了更新，使角色图像的更改优先于职业图像
 * 将“Change Actor Images”设置为（None）将返回使用职业图像
 *
 * 版本 1.05:
 * - 如果使用技能学习系统和技能菜单集成，“学习技能”命令现在转到技能
 * 菜单本身以使用集成系统
 *
 * 版本 1.04:
 * - 修正了一个通过转职来复活死去的队员的错误
 *
 * 版本 1.03:
 * - 修复了复制非独立物品的错误
 * - 修复了在进入新地图之前阻止视觉外观更新的错误
 *
 * 版本 1.02a:
 * - 为用户添加了故障保护，以防止他们尝试从不存在的职业中学习技能
 *
 * 版本 1.01:
 * - 修复了当移动到另一个不在同一图像上的脸图时更改职业图像的异步问题
 *
 * 版本 1.00:
 * - 完成插件
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ClassChangeCore');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.CCCCmdName = String(Yanfly.Parameters['职业命令']);
Yanfly.Param.CCCAutoAdd = eval(String(Yanfly.Parameters['自动添加菜单']));
Yanfly.Param.CCCShowCmd = String(Yanfly.Parameters['显示命令']);
Yanfly.Param.CCCShowCmd = eval(Yanfly.Param.CCCShowCmd);
Yanfly.Param.CCCEnableCmd = String(Yanfly.Parameters['启用命令']);
Yanfly.Param.CCCEnableCmd = eval(Yanfly.Param.CCCEnableCmd);
Yanfly.Param.CCCAutoPlace = String(Yanfly.Parameters['自动放置命令']);
Yanfly.Param.CCCAutoPlace = eval(Yanfly.Param.CCCAutoPlace);
Yanfly.Icon.DefaultClass = Number(Yanfly.Parameters['默认图标']);
Yanfly.Param.CCCMaintainLv = String(Yanfly.Parameters['维持经验']);
Yanfly.Param.CCCMaintainLv = eval(Yanfly.Param.CCCMaintainLv);
Yanfly.Param.CCCUnlock = String(Yanfly.Parameters['未锁定职业']);
Yanfly.Param.CCCUnlock = Yanfly.Param.CCCUnlock.split(' ');
if (Yanfly.Param.CCCUnlock === '') Yanfly.Param.CCCUnlock = [];
for (Yanfly.i = 0; Yanfly.i < Yanfly.Param.CCCUnlock.length; ++Yanfly.i) {
  Yanfly.Param.CCCUnlock[Yanfly.i] = parseInt(Yanfly.Param.CCCUnlock[Yanfly.i]);
}

Yanfly.Param.CCCClassCmd = String(Yanfly.Parameters['转职命令']);
Yanfly.Param.CCCShowClass = String(Yanfly.Parameters['显示转职命令']);
Yanfly.Param.CCCShowClass = eval(Yanfly.Param.CCCShowClass);
Yanfly.Param.CCCEnableClass = String(Yanfly.Parameters['启用转职命令']);
Yanfly.Param.CCCEnableClass = eval(Yanfly.Param.CCCEnableClass);
Yanfly.Param.CCCShowLearn = String(Yanfly.Parameters['显示技能学习']);
Yanfly.Param.CCCShowLearn = eval(Yanfly.Param.CCCShowLearn);
Yanfly.Param.CCCFinishCmd = String(Yanfly.Parameters['完成命令']);
Yanfly.Param.CCCTextAlign = String(Yanfly.Parameters['文本对齐']);

Yanfly.Param.CCCClassColor = Number(Yanfly.Parameters['当前职业颜色']);
Yanfly.Param.CCCLvFmt = String(Yanfly.Parameters['职业等级格式']);
Yanfly.Param.CCCLvFontSize = Number(Yanfly.Parameters['职业等级字体大小']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.CCC.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.CCC.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!Yanfly._loaded_YEP_ClassChangeCore) {
      this.processCCCNotetags1($dataClasses);
      this.processCCCNotetags2($dataActors);
      this.processCCCNotetags3($dataClasses);
      Yanfly._loaded_YEP_ClassChangeCore = true;
    }
    return true;
};

DataManager.processCCCNotetags1 = function(group) {
  if (Yanfly.ClassIdRef) return;
  Yanfly.ClassIdRef = {};
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (obj.name.length <= 0) continue;
    Yanfly.ClassIdRef[obj.name.toUpperCase()] = n;
  }
};

DataManager.processCCCNotetags2 = function(group) {
  var note1a = /<(?:UNLOCK CLASS|unlock classes|解锁可转职业):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note1b = /<(?:UNLOCK CLASS|unlock classes|解锁可转职业):[ ](\d+)(?:[ ]TO[ ]|[ ]?到[ ]?)(\d+)>/i;
  var note2a = /<(?:CLASS[ ]|职业[ ]?)(\d+)[ ]?(?:[ ]CHARACTER|[ ]SPRITE|角色图|角色精灵图|行走图|角色行走图):[ ](.*)[ ](\d+)>/i;
  var note2b = /<(.*)[ ]?(?:[ ]CHARACTER|[ ]SPRITE|角色图|角色精灵图|行走图|角色行走图):[ ](.*)[ ](\d+)>/i;
  var note3a = /<(?:CLASS[ ]|职业[ ]?)(\d+)[ ]?(?:[ ]FACE|脸图|脸部精灵图):[ ](.*)[ ](\d+)>/i;
  var note3b = /<(.*)[ ]?(?:[ ]FACE|脸图|脸部精灵图):[ ](.*)[ ](\d+)>/i;
  var note4a = /<(?:CLASS[ ]|职业[ ]?)(\d+)[ ]?(?:[ ]BATTLER|战斗图|战斗精灵图|角色战斗图):[ ](.*)>/i;
  var note4b = /<(.*)[ ]?(?:[ ]BATTLER|战斗图|战斗精灵图|角色战斗图):[ ](.*)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.unlockedClasses = [];
    obj.classCharacter = {};
    obj.classFace = {};
    obj.classBattler = {};
    obj.canChangeClass = true;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1a)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.unlockedClasses = obj.unlockedClasses.concat(array);
      } else if (line.match(note1b)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.unlockedClasses = obj.unlockedClasses.concat(range);
      } else if (line.match(note2a)) {
        var classId = parseInt(RegExp.$1);
        var filename = String(RegExp.$2);
        var index = parseInt(RegExp.$3);
        obj.classCharacter[classId] = [filename, index];
      } else if (line.match(note2b)) {
        var name = String(RegExp.$1).toUpperCase();
        var filename = String(RegExp.$2);
        var index = parseInt(RegExp.$3);
        var classId = Yanfly.ClassIdRef[name];
        if (classId) obj.classCharacter[classId] = [filename, index];
      } else if (line.match(note3a)) {
        var classId = parseInt(RegExp.$1);
        var filename = String(RegExp.$2);
        var index = parseInt(RegExp.$3);
        obj.classFace[classId] = [filename, index];
      } else if (line.match(note3b)) {
        var name = String(RegExp.$1).toUpperCase();
        var filename = String(RegExp.$2);
        var index = parseInt(RegExp.$3);
        var classId = Yanfly.ClassIdRef[name];
        if (classId) obj.classFace[classId] = [filename, index];
      } else if (line.match(note4a)) {
        var classId = parseInt(RegExp.$1);
        var filename = String(RegExp.$2);
        obj.classBattler[classId] = filename;
      } else if (line.match(note4b)) {
        var name = String(RegExp.$1).toUpperCase();
        var filename = String(RegExp.$2);
        var classId = Yanfly.ClassIdRef[name];
        if (classId) obj.classBattler[classId] = filename;
      } else if (line.match(/<(?:CANNOT CHANGE CLASS|CANT CHANGE CLASS|禁止转职主|禁止主职业转职)>/i)) {
        obj.canChangeClass = false;
      }
    }
    obj.unlockedClasses = obj.unlockedClasses.filter(Yanfly.Util.onlyUnique);
  }
};

DataManager.processCCCNotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.iconIndex = Yanfly.Icon.DefaultClass;
    obj.useNickname = false;
    obj.description = '';
    var descMode = false;
    obj.levelUnlockRequirements = {};
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:ICON|图标):[ ](\d+)>/i)) {
        obj.iconIndex = parseInt(RegExp.$1);
      } else if (line.match(/<(?:HELP DESCRIPTION|Help Des|职业描述|职业帮助说明)>/i)) {
        descMode = true;
      } else if (line.match(/<\/(?:HELP DESCRIPTION|Help Des|职业描述|职业帮助说明)>/i)) {
        descMode = false;
      } else if (descMode) {
        obj.description += line + '\n';
      } else if (line.match(/<(?:USE NICKNAME|USE NIC|使用昵称|使用角色昵称)>/i)) {
        obj.useNickname = true;
      } else if (line.match(/<(?:LEVEL UNLOCK REQUIREMENTS|Lv Unlk Req|等级解锁|等级解锁要求)>/i)) {
        evalMode = 'level unlock requirements';
      } else if (line.match(/<\/(?:LEVEL UNLOCK REQUIREMENTS|Lv Unlk Req|等级解锁|等级解锁要求)>/i)) {
        evalMode = 'none';                                                            //(?:)
      } else if (evalMode === 'level unlock requirements') {
        if (line.match(/(?:CLASS[ ]|职业[ ]?)(\d+):[ ](?:LEVEL[ ]|Lv[ ]?|职业[ ]?)(\d+)/i)) {
          var classId = parseInt(RegExp.$1);
          var level = parseInt(RegExp.$2);
          obj.levelUnlockRequirements[classId] = level;
        } else if (line.match(/(.*):[ ](?:LEVEL[ ]|Lv[ ]?|职业[ ]?)(\d+)/i)) {
          var name = String(RegExp.$1).toUpperCase();
          var level = parseInt(RegExp.$2);
          var classId = Yanfly.ClassIdRef[name];
          if (classId) obj.levelUnlockRequirements[classId] = level;
        }
      }
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.CCC.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.CCC.Game_System_initialize.call(this);
    this.initClasses();
};

Game_System.prototype.initClasses = function() {
    this._showClass = Yanfly.Param.CCCShowCmd;
    this._enableClass = Yanfly.Param.CCCEnableCmd;
    this._showClassChange = Yanfly.Param.CCCShowClass;
    this._enableClassChange = Yanfly.Param.CCCEnableClass;
};

Game_System.prototype.isShowClass = function() {
    if (this._showClass === undefined) this.initClasses();
    return this._showClass;
};

Game_System.prototype.isEnableClass = function() {
    if (this._enableClass === undefined) this.initClasses();
    return this._enableClass;
};

Game_System.prototype.isShowClassEnabled = function() {
    if (this._showClassChange === undefined) this.initClasses();
    return this._showClassChange;
};

Game_System.prototype.isEnableClassEnabled = function() {
    if (this._enableClassChange === undefined) this.initClasses();
    return this._enableClassChange;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.CCC.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    Yanfly.CCC.Game_Actor_setup.call(this, actorId);
    this.initClasses();
};

Game_Actor.prototype.initClasses = function() {
    if (!this.actor().unlockedClasses) return;
    this._unlockedClasses = this.actor().unlockedClasses.slice();
    this.unlockClass(this._classId);
    this._unlockedClasses.sort(function(a, b) { return a - b });
};

Yanfly.CCC.Game_Actor_turnEndOnMap = Game_Actor.prototype.turnEndOnMap;
Game_Actor.prototype.turnEndOnMap = function() {
    $gameTemp._noUpdateUnlockedSkills = true;
    Yanfly.CCC.Game_Actor_turnEndOnMap.call(this);
    $gameTemp._noUpdateUnlockedSkills = undefined;
};

Yanfly.CCC.Game_Actor_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
    this.updateUnlockedClassSkills();
    Yanfly.CCC.Game_Actor_refresh.call(this);
};

Game_Actor.prototype.unlockedClasses = function() {
    if (this._unlockedClasses === undefined) this.initClasses();
    this.checkLevelUnlockedClasses();
    var classes = this._unlockedClasses.sort(function(a, b) { return a - b });
    classes = classes.concat($gameParty.unlockedClasses());
    return classes.filter(Yanfly.Util.onlyUnique);
};

Game_Actor.prototype.unlockClass = function(classId) {
    if (this._unlockedClasses === undefined) this.initClasses();
    if (this._unlockedClasses.contains(classId)) return;
    this._unlockedClasses.push(classId);
    this._unlockedClasses.sort(function(a, b) { return a - b });
    this.refresh();
};

Game_Actor.prototype.removeClass = function(classId) {
    if (this._unlockedClasses === undefined) this.initClasses();
    if (!this._unlockedClasses.contains(classId)) return;
    if (classId === this._classId) return;
    var index = this._unlockedClasses.indexOf(classId);
    if (index >= 0) this._unlockedClasses.splice(index, 1);
    this.refresh();
};

Yanfly.CCC.Game_Actor_changeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function(classId, keepExp) {
    keepExp = Yanfly.Param.CCCMaintainLv;
    if (keepExp) {
      this._exp[classId] = this._exp[this._classId];
      keepExp = false;
    }
    Yanfly.CCC.Game_Actor_changeClass.call(this, classId, keepExp);
    //this.updateLearnedSkills(classId);
    if (!$gameParty.unlockedClasses().contains(classId)) {
      this.unlockClass(classId);
    }
    $gamePlayer.refresh();
};

Game_Actor.prototype.updateUnlockedClassSkills = function() {
    if ($gameTemp._noUpdateUnlockedSkills) return;
    if ($gameParty.inBattle()) return;
    var unlocked = this.unlockedClasses();
    var length = unlocked.length;
    for (var i = 0; i < length; ++i) {
      var classId = unlocked[i];
      this.updateLearnedSkills(classId);
    }
};

Game_Actor.prototype.updateLearnedSkills = function(classId) {
    if (!$dataClasses[classId]) return;
    $dataClasses[classId].learnings.forEach(function(learning) {
        if (this.classLevel(classId) >= learning.level) {
          this.learnSkill(learning.skillId);
        }
    }, this);
};

Game_Actor.prototype.classLevel = function(classId) {
    if (Yanfly.Param.CCCMaintainLv) return this.level;
    if (this._exp[classId] === undefined) this._exp[classId] = 0;
    var level = 1;
    for (;;) {
      if (level >= this.maxLevel()) break;
      if (this.expForLevel(level + 1) > this._exp[classId]) break;
      level++;
    }
    return level;
};

Yanfly.CCC.Game_Actor_setCharacterImage =
    Game_Actor.prototype.setCharacterImage;
Game_Actor.prototype.setCharacterImage = function(name, index) {
    if (name !== '') {
      this._priorityCharacterName = name;
      this._priorityCharacterIndex = index;
    } else {
      this._priorityCharacterName = undefined;
      this._priorityCharacterIndex = undefined;
      Yanfly.CCC.Game_Actor_setCharacterImage.call(this, name, index);
    }
};

Yanfly.CCC.Game_Actor_characterName = Game_Actor.prototype.characterName;
Game_Actor.prototype.characterName = function() {
    if (this._priorityCharacterName !== undefined) {
      return this._priorityCharacterName;
    }
    if (this.actor().classCharacter) {
      if (this.actor().classCharacter[this._classId] !== undefined) {
        return this.actor().classCharacter[this._classId][0];
      }
    }
    return Yanfly.CCC.Game_Actor_characterName.call(this);
};

Yanfly.CCC.Game_Actor_characterIndex = Game_Actor.prototype.characterIndex;
Game_Actor.prototype.characterIndex = function() {
    if (this._priorityCharacterIndex !== undefined) {
      return this._priorityCharacterIndex;
    }
    if (this.actor().classCharacter) {
      if (this.actor().classCharacter[this._classId] !== undefined) {
        return this.actor().classCharacter[this._classId][1];
      }
    }
    return Yanfly.CCC.Game_Actor_characterIndex.call(this);
};

Yanfly.CCC.Game_Actor_setFaceImage = Game_Actor.prototype.setFaceImage;
Game_Actor.prototype.setFaceImage = function(name, index) {
    if (name !== '') {
      this._priorityFaceName = name;
      this._priorityFaceIndex = index;
    } else {
      this._priorityFaceName = undefined;
      this._priorityFaceIndex = undefined;
      Yanfly.CCC.Game_Actor_setFaceImage.call(this, name, index);
    }
};

Yanfly.CCC.Game_Actor_faceName = Game_Actor.prototype.faceName;
Game_Actor.prototype.faceName = function() {
    if (this._priorityFaceName !== undefined) {
      return this._priorityFaceName;
    }
    if (this.actor().classFace) {
      if (this.actor().classFace[this._classId] !== undefined) {
        return this.actor().classFace[this._classId][0];
      }
    }
    return Yanfly.CCC.Game_Actor_faceName.call(this);
};

Yanfly.CCC.Game_Actor_faceIndex = Game_Actor.prototype.faceIndex;
Game_Actor.prototype.faceIndex = function() {
    if (this._priorityFaceIndex !== undefined) {
      return this._priorityFaceIndex;
    }
    if (this.actor().classFace) {
      if (this.actor().classFace[this._classId] !== undefined) {
        return this.actor().classFace[this._classId][1];
      }
    }
    return Yanfly.CCC.Game_Actor_faceIndex.call(this);
};

Yanfly.CCC.Game_Actor_setBattlerImage = Game_Actor.prototype.setBattlerImage;
Game_Actor.prototype.setBattlerImage = function(name) {
    if (name !== '') {
      this._priorityBattlerName = name;
    } else {
      this._priorityBattlerName = undefined;
      Yanfly.CCC.Game_Actor_setBattlerImage.call(this, name);
    }
};

Yanfly.CCC.Game_Actor_battlerName = Game_Actor.prototype.battlerName;
Game_Actor.prototype.battlerName = function() {
    if (this._priorityBattlerName !== undefined) {
      return this._priorityBattlerName;
    }
    if (this.actor().classBattler) {
      if (this.actor().classBattler[this._classId] !== undefined) {
        return this.actor().classBattler[this._classId];
      }
    }
    return Yanfly.CCC.Game_Actor_battlerName.call(this);
};

Game_Actor.prototype.checkLevelUnlockedClasses = function() {
    for (var i = 0; i < $dataClasses.length; ++i) {
      var item = $dataClasses[i];
      if (!item) continue;
      if (this._unlockedClasses.contains(item.id)) continue;
      if (Yanfly.Util.isEmptyObj(item.levelUnlockRequirements)) continue;
      if (!this.classUnlockLevelRequirementsMet(item)) continue;
      this.unlockClass(item.id);
    }
};

Game_Actor.prototype.classUnlockLevelRequirementsMet = function(item) {
    var classId;
    for (classId in item.levelUnlockRequirements) {
      var level = item.levelUnlockRequirements[classId];
      if (this.classLevel(classId) < level) return false;
    }
    return true;
};

Yanfly.CCC.Game_Actor_releaseUnequippableItems =
    Game_Actor.prototype.releaseUnequippableItems;
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
    if (Yanfly.CCC.PreventReleaseItem) return;
    Yanfly.CCC.Game_Actor_releaseUnequippableItems.call(this, forcing);
};

Game_Actor.prototype.canChangeClass = function() {
    if (this._canChangeClass) return this._canChangeClass;
    this._canChangeClass = this.actor().canChangeClass;
    return this._canChangeClass;
};

Game_Actor.prototype.setCanChangeClass = function(value) {
    this._canChangeClass = value;
};

//=============================================================================
// Game_Party
//=============================================================================

Yanfly.CCC.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
    Yanfly.CCC.Game_Party_initialize.call(this);
    this.initClasses();
};

Game_Party.prototype.initClasses = function() {
    this._unlockedClasses = Yanfly.Param.CCCUnlock.slice();
    this._unlockedClasses.sort(function(a, b) { return a - b });
};

Game_Party.prototype.unlockedClasses = function() {
    if (this._unlockedClasses === undefined) this.initClasses();
    var classes = this._unlockedClasses.sort(function(a, b) { return a - b });
    return classes.filter(Yanfly.Util.onlyUnique);
};

Game_Party.prototype.unlockClass = function(classId) {
    if (this._unlockedClasses === undefined) this.initClasses();
    if (this._unlockedClasses.contains(classId)) return;
    this._unlockedClasses.push(classId);
    this._unlockedClasses.sort(function(a, b) { return a - b });
};

Game_Party.prototype.removeClass = function(classId) {
    if (this._unlockedClasses === undefined) this.initClasses();
    if (!this._unlockedClasses.contains(classId)) return;
    if (classId === this._classId) return;
    var index = this._unlockedClasses.indexOf(classId);
    if (index >= 0) this._unlockedClasses.splice(index, 1);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.CCC.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.CCC.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'OpenClass' || command === '打开职业菜单') {
      this.gotoSceneClass();
    } else if (command === 'ShowClass' || command === '显示职业选项') {
      $gameSystem._showClass = true;
    } else if (command === 'HideClass' || command === '隐藏职业选项') {
      $gameSystem._showClass = false;
    } else if (command === 'EnableClass' || command === '启用职业选项') {
      $gameSystem._enableClass = true;
    } else if (command === 'DisableClass' || command === '禁用职业选项') {
      $gameSystem._enableClass = false;
    } else if (command === 'UnlockClass' || command === '解锁职业') {
      this.unlockClass(args);
    } else if (command === 'RemoveClass' || command === '移除职业') {
      this.removeClass(args);
    } else if (command === 'UnlockClassAll' || command === '全角色解锁职业') {
      this.unlockClassAll(args);
    } else if (command === 'RemoveClassAll' || command === '全角色移除职业') {
      this.removeClassAll(args);
    } else if (command === 'EnablePrimaryClassChange' || command === '启用主转职角色') {
      this.setPrimaryClassChange(args, true);
    } else if (command === 'DisablePrimaryClassChange' || command === '禁用主转职角色') {
      this.setPrimaryClassChange(args, false);
    }
};

Game_Interpreter.prototype.gotoSceneClass = function() {
    if (!$gameParty.inBattle()) {
      SceneManager.push(Scene_Class);
    }
    return true;
};

Game_Interpreter.prototype.unlockClass = function(args) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    var classId = parseInt(args[1]);
    if (!$dataClasses[classId]) return;
    actor.unlockClass(classId);
};

Game_Interpreter.prototype.removeClass = function(args) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    var classId = parseInt(args[1]);
    if (!$dataClasses[classId]) return;
    actor.removeClass(classId);
};

Game_Interpreter.prototype.unlockClassAll = function(args) {
    var classId = parseInt(args[0]);
    if (!$dataClasses[classId]) return;
    $gameParty.unlockClass(classId);
};

Game_Interpreter.prototype.removeClassAll = function(args) {
    var classId = parseInt(args[0]);
    if (!$dataClasses[classId]) return;
    $gameParty.removeClass(classId);
};

Game_Interpreter.prototype.setPrimaryClassChange = function(args, enable) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    actor.setCanChangeClass(enable);
};

//=============================================================================
// Window_Base
//=============================================================================

Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
  width = width || 168;
  this.resetTextColor();
  var text = actor.currentClass().name;
  if (actor.currentClass().useNickname) {
    text = actor.nickname();
  }
  this.drawText(text, x, y, width);
};

//=============================================================================
// Window_SkillStatus
//=============================================================================

Yanfly.CCC.Window_SkillStatus_refresh =
    Window_SkillStatus.prototype.refresh;
Window_SkillStatus.prototype.refresh = function() {
    if (this._actor) {
      var bitmap = ImageManager.loadFace(this._actor.faceName());
      if (bitmap.width <= 0) {
        return setTimeout(this.refresh.bind(this), 5);
      }
    }
    Yanfly.CCC.Window_SkillStatus_refresh.call(this);
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Yanfly.CCC.Window_MenuCommand_addOriginalCommands =
    Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    Yanfly.CCC.Window_MenuCommand_addOriginalCommands.call(this);
    if (Yanfly.Param.CCCAutoAdd) this.addClassCommand();
};

Window_MenuCommand.prototype.addClassCommand = function() {
    if (!Yanfly.Param.CCCAutoPlace) return;
    if (!$gameSystem.isShowClass()) return;
    if (this.findSymbol('class') > -1) return;
    var text = Yanfly.Param.CCCCmdName;
    var enabled = $gameSystem.isEnableClass();
    this.addCommand(text, 'class', enabled);
};

//=============================================================================
// Window_ClassCommand
//=============================================================================

function Window_ClassCommand() {
    this.initialize.apply(this, arguments);
}

Window_ClassCommand.prototype = Object.create(Window_Command.prototype);
Window_ClassCommand.prototype.constructor = Window_ClassCommand;

Window_ClassCommand.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
};

Window_ClassCommand.prototype.windowWidth = function() {
    return 240;
};

Window_ClassCommand.prototype.numVisibleRows = function() {
    return 4;
};
/*
 原本↓↓↓↓
 Window_ClassCommand.prototype.itemTextAlign = function() {
     return Yanfly.Param.CCCTextAlign;
 };
*/

//机翻君自改↓↓↓↓
Window_Command.prototype.itemTextAlign = function() {
    if (Yanfly.Param.CCCTextAlign == '左对齐') {
        return 'left';
    }
    else if (Yanfly.Param.CCCTextAlign == '右对齐') {
        return 'right';
    }
    else
        return 'center';
};

Window_ClassCommand.prototype.makeCommandList = function() {
    this.addClassCommand();
    this.addSkillLearnCommand();
    this.addCustomCommand();
    this.addFinishCommand();
};

Window_ClassCommand.prototype.addClassCommand = function() {
    if (!$gameSystem.isShowClassEnabled()) return;
    var enabled = this.isClassEnabled();
    this.addCommand(Yanfly.Param.CCCClassCmd, 'class', enabled);
};

Window_ClassCommand.prototype.isClassEnabled = function() {
    var actor = SceneManager._scene.actor();
    if (actor && !actor.canChangeClass()) return false;
    return $gameSystem.isEnableClassEnabled();
};

Window_ClassCommand.prototype.addSkillLearnCommand = function() {
    if (!Imported.YEP_SkillLearnSystem) return;
    if (!Yanfly.Param.CCCShowLearn) return;
    var name = Yanfly.Param.SLSCommand;
    if (Yanfly.Param.SLSIntegrate) name = TextManager.skill;
    var enabled = $gameSystem.isEnableLearnSkill();
    this.addCommand(name, 'learnSkill', enabled);
};

Window_ClassCommand.prototype.addCustomCommand = function() {
};

Window_ClassCommand.prototype.addFinishCommand = function() {
    this.addCommand(Yanfly.Param.CCCFinishCmd, 'cancel', true);
};

//=============================================================================
// Window_ClassList
//=============================================================================

function Window_ClassList() {
    this.initialize.apply(this, arguments);
}

Window_ClassList.prototype = Object.create(Window_Selectable.prototype);
Window_ClassList.prototype.constructor = Window_ClassList;

Window_ClassList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._data = [];
};

Window_ClassList.prototype.setActor = function(actor) {
    if (this._actor === actor) return;
    this._actor = actor;
    this.refresh();
    this.resetScroll();
};

Window_ClassList.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
};

Window_ClassList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

Window_ClassList.prototype.item = function() {
    return this._data && this.index() >= 0 ? this._data[this.index()] : null;
};

Window_ClassList.prototype.makeItemList = function() {
    if (this._actor) {
        var data = this._actor.unlockedClasses().slice();
    } else {
        var data = [];
    }
    this._data = [];
    for (var i = 0; i < data.length; ++i) {
      var classId = data[i];
      if ($dataClasses[classId] && !this._data.contains(classId)) {
        this._data.push(classId);
      }
    }
    this._data.sort(function(a, b) { return a - b });
};

Window_ClassList.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};

Window_ClassList.prototype.isEnabled = function(item) {
    return true;
};

Window_ClassList.prototype.drawItem = function(index) {
    var item = $dataClasses[this._data[index]];
    if (!item) return;
    var rect = this.itemRect(index);
    this.changePaintOpacity(this.isEnabled(this._data[index]));
    this.drawClassName(item, rect.x, rect.y, rect.width);
    var rect = this.itemRectForText(index);
    this.drawClassLevel(item, rect.x, rect.y, rect.width);
    this.changePaintOpacity(true);
};

Window_ClassList.prototype.drawClassName = function(item, x, y, width) {
    this.resetFontSettings();
    var iconBoxWidth = Window_Base._iconWidth + 4;
    this.changeClassNameColor(item);
    this.drawIcon(item.iconIndex, x + 2, y + 2);
    var text = item.name;
    if (this._actor && item.useNickname) {
      text = this._actor.nickname(); //text赋值为当前角色昵称
      //机翻君新增↓↓↓↓↓↓
      if (text.match(/^[ ]*$/)) text = item.name;
      //判断text是否为纯空格或空
      //是则text赋值为该职业的原本名称
    }
    this.drawText(text, x + iconBoxWidth, y, width - iconBoxWidth);
};

Window_ClassList.prototype.changeClassNameColor = function(item) {
    if (item === this._actor.currentClass()) {
      this.changeTextColor(this.textColor(Yanfly.Param.CCCClassColor));
    } else {
      this.changeTextColor(this.normalColor());
    }
};

Window_ClassList.prototype.drawClassLevel = function(item, x, y, width) {
    var level = Yanfly.Util.toGroup(this._actor.classLevel(item.id));
    var fmt = Yanfly.Param.CCCLvFmt;
    var text = fmt.format(level);
    this.resetFontSettings();
    this.changeTextColor(this.normalColor());
    this.contents.fontSize = Yanfly.Param.CCCLvFontSize;
    this.drawText(text, x, y, width, 'right');
};

Window_ClassList.prototype.updateHelp = function() {
    this.setHelpWindowItem($dataClasses[this.item()]);
    this.updateCompare();
};

Window_ClassList.prototype.updateCompare = function() {
    if (this._actor && this.item() && this._statusWindow) {
      var actor = JsonEx.makeDeepCopy(this._actor);
      if (this.isEnabled(this.item())) {
        Yanfly.CCC.PreventReleaseItem = true;
        actor.changeClass(this.item(), false);
        Yanfly.CCC.PreventReleaseItem = undefined;
      }
      this._statusWindow.setTempActor(actor);
    }
};

Window_ClassList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

Window_ClassList.prototype.selectLast = function() {
    this._index = this._data.indexOf(this._actor._classId);
    this.select(this._index);
};

Window_ClassList.prototype.playOkSound = function() {
    if (SceneManager._scene instanceof Scene_Class) return;
    Window_Selectable.prototype.playOkSound.call(this);
};

//=============================================================================
// Window_StatCompare
//=============================================================================

function Window_StatCompare() {
    this.initialize.apply(this, arguments);
}

Window_StatCompare.prototype = Object.create(Window_Base.prototype);
Window_StatCompare.prototype.constructor = Window_StatCompare;

Window_StatCompare.prototype.initialize = function(wx, wy, ww, wh) {
    Window_Base.prototype.initialize.call(this, wx, wy, ww, wh);
    this._actor = null;
    this._tempActor = null;
    this.refresh();
};

Window_StatCompare.prototype.createWidths = function() {
    this._paramNameWidth = 0;
    this._paramValueWidth = 0;
    this._arrowWidth = this.textWidth('\u2192' + ' ');
    var buffer = this.textWidth(' ');
    for (var i = 0; i < 8; ++i) {
      var value1 = this.textWidth(TextManager.param(i));
      var value2 = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i)));
      this._paramNameWidth = Math.max(value1, this._paramNameWidth);
      this._paramValueWidth = Math.max(value2, this._paramValueWidth);
    }
    this._bonusValueWidth = this._paramValueWidth;
    this._bonusValueWidth += this.textWidth('(+)') + buffer;
    this._paramNameWidth += buffer;
    this._paramValueWidth;
    if (this._paramNameWidth + this._paramValueWidth * 2 + this._arrowWidth +
      this._bonusValueWidth > this.contents.width) this._bonusValueWidth = 0;
};

Window_StatCompare.prototype.setActor = function(actor) {
    if (this._actor === actor) return;
    this._actor = actor;
    this.createWidths();
    this.refresh();
};

Window_StatCompare.prototype.refresh = function() {
    this.contents.clear();
    if (!this._actor) return;
    for (var i = 0; i < 8; ++i) {
        this.drawItem(0, this.lineHeight() * i, i);
    }
};

Window_StatCompare.prototype.setTempActor = function(tempActor) {
    if (this._tempActor === tempActor) return;
    this._tempActor = tempActor;
    this.refresh();
};

Window_StatCompare.prototype.drawItem = function(x, y, paramId) {
    this.drawDarkRect(x, y, this.contents.width, this.lineHeight());
    this.drawParamName(y, paramId);
    this.drawCurrentParam(y, paramId);
    this.drawRightArrow(y);
    if (!this._tempActor) return;
    this.drawNewParam(y, paramId);
    this.drawParamDifference(y, paramId);
};

Window_StatCompare.prototype.drawDarkRect = function(dx, dy, dw, dh) {
    var color = this.gaugeBackColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
    this.changePaintOpacity(true);
};

Window_StatCompare.prototype.drawParamName = function(y, paramId) {
    var x = this.textPadding();
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(paramId), x, y, this._paramNameWidth);
};

Window_StatCompare.prototype.drawCurrentParam = function(y, paramId) {
    var x = this.contents.width - this.textPadding();
    x -= this._paramValueWidth * 2 + this._arrowWidth + this._bonusValueWidth;
    this.resetTextColor();
    var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawRightArrow = function(y) {
    var x = this.contents.width - this.textPadding();
    x -= this._paramValueWidth + this._arrowWidth + this._bonusValueWidth;
    var dw = this.textWidth('\u2192' + ' ');
    this.changeTextColor(this.systemColor());
    this.drawText('\u2192', x, y, dw, 'center');
};

Window_StatCompare.prototype.drawNewParam = function(y, paramId) {
    var x = this.contents.width - this.textPadding();
    x -= this._paramValueWidth + this._bonusValueWidth;
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawParamDifference = function(y, paramId) {
    var x = this.contents.width - this.textPadding();
    x -= this._bonusValueWidth;
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    if (diffvalue === 0) return;
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    var text = Yanfly.Util.toGroup(diffvalue);
    if (diffvalue > 0) {
      text = ' (+' + text + ')';
    } else {
      text = ' (' + text + ')';
    }
    this.drawText(text, x, y, this._bonusValueWidth, 'left');
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.CCC.Scene_Menu_createCommandWindow =
    Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    Yanfly.CCC.Scene_Menu_createCommandWindow.call(this);
    this._commandWindow.setHandler('class', this.commandPersonal.bind(this));
};

Yanfly.CCC.Scene_Menu_onPersonalOk = Scene_Menu.prototype.onPersonalOk;
Scene_Menu.prototype.onPersonalOk = function() {
    if (this._commandWindow.currentSymbol() === 'class') {
      SceneManager.push(Scene_Class);
    } else {
      Yanfly.CCC.Scene_Menu_onPersonalOk.call(this);
    }
};

//=============================================================================
// Scene_Class
//=============================================================================

function Scene_Class() {
    this.initialize.apply(this, arguments);
}

Scene_Class.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Class.prototype.constructor = Scene_Class;

Scene_Class.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Class.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCommandWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.createCompareWindow();
    this.refreshActor();
};

Scene_Class.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_ClassCommand();
    var win = this._commandWindow;
    win.y = this._helpWindow.height;
    win.setHandler('class', this.commandClass.bind(this));
    win.setHandler('learnSkill', this.commandLearnSkill.bind(this));
    win.setHandler('cancel', this.popScene.bind(this));
    win.setHandler('pagedown', this.nextActor.bind(this));
    win.setHandler('pageup', this.previousActor.bind(this));
    this.addWindow(win);
};

Scene_Class.prototype.createStatusWindow = function() {
    var wx = this._commandWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._commandWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
    this.addWindow(this._statusWindow);
};

Scene_Class.prototype.createItemWindow = function() {
    var wx = 0;
    var wy = this._statusWindow.y + this._statusWindow.height;
    var ww = Graphics.boxWidth / 2;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ClassList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

Scene_Class.prototype.createCompareWindow = function() {
    var wx = this._itemWindow.width;
    var wy = this._itemWindow.y;
    var ww = Graphics.boxWidth - wx;
    var wh = Graphics.boxHeight - wy;
    this._compareWindow = new Window_StatCompare(wx, wy, ww, wh);
    this._itemWindow.setStatusWindow(this._compareWindow);
    this.addWindow(this._compareWindow);
};

Scene_Class.prototype.refreshActor = function() {
    var actor = this.actor();
    this._commandWindow.refresh();
    this._statusWindow.setActor(actor);
    this._itemWindow.setActor(actor);
    this._compareWindow.setActor(actor);
};

Scene_Class.prototype.refreshWindows = function() {
    this._commandWindow.refresh();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
    this._compareWindow.refresh();
};

Scene_Class.prototype.commandClass = function() {
    this._itemWindow.activate();
    this._itemWindow.refresh();
    this._itemWindow.selectLast();
};

Scene_Class.prototype.commandLearnSkill = function() {
    if (Yanfly.Param.SLSIntegrate) {
      SceneManager.push(Scene_Skill);
    } else {
      SceneManager.push(Scene_LearnSkill);
    }
};

Scene_Class.prototype.onItemOk = function() {
    SoundManager.playEquip();
    var classId = this._itemWindow.item();
    var hpRate = this.actor().hp / this.actor().mhp;
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    this.actor().changeClass(classId, Yanfly.Param.CCCMaintainLv);
    var max = this.actor().isDead() ? 0 : 1;
    var hpAmount = Math.max(max, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
    this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._itemWindow.activate();
    this.refreshWindows();
};

Scene_Class.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    this._commandWindow.activate();
    this._helpWindow.setItem(null);
    this._itemWindow.refresh();
    this._compareWindow.setTempActor(null);
};

Scene_Class.prototype.onActorChange = function() {
    this.refreshActor();
    this._commandWindow.activate();
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {
    Yanfly.Util.toGroup = function(inVal) {
        return inVal;
    }
};

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

Yanfly.Util.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
};

Yanfly.Util.isEmptyObj = function(obj) {
    var key;
    for (key in obj) {
      return false;
    }
    return true;
};

//=============================================================================
// 文件末
//=============================================================================
