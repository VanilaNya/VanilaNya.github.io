/*:
 * @plugindesc v1.02 LiuYue_SeniorChest 高级箱子
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 * 这款插件提供了打开宝箱时出现物品界面,使箱中的物品变得可选择
 *
 *
 *
 *-------------------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 * 
 *-------------------------------------------------------------------
 *
 *
 * 
 * 
 *
 *
 *
 *
 *以下是可以使用的插件指令
 *-----------------------PluginCommand-------------------------
 *
 * ZzySCF OverlapMode x(Single/Overlap/Event)                     //这会修改打开宝箱的叠加模式
 * ZzySCF ShowMode x(Chest/YuanShen)                              //这会修改打开宝箱的窗口显示模式
 * ZzySCF IsFilterText x(true/false)                              //这会修改在打开宝箱时忽略文本
 * ZzySCF CoinIcon x                                              //金币所使用的图标,需要填写图标素材图中对应的ID值
 *
 *
 * ZzySCF CMaxCols x                                              //这会使显示模式--Chest的选项框中打开宝箱时显示的最大列数
 * ZzySCF IsCAllTake x(true/false)                                //这会使显示模式--Chest的选项框中是否包含全部拿取的命令
 * ZzySCF CAllTakeText x                                          //这会使显示模式--Chest的选项框中全部拿取命令的文本
 * ZzySCF IsCClose x(true/false)                                  //这会使显示模式--Chest的选项框中是否包含退出宝箱的命令
 * ZzySCF CCloseText x                                            //这会使显示模式--Chest的选项框中退出宝箱命令的文本
 * ZzySCF IsCAutoLine x(true/false)                               //这会使显示模式--Chest的选项框中开启关闭拿取宝箱时自动队列
 *
 *
 * ZzySCF YMaxCols x                                              //这会使显示模式--YuanShen的选项框中打开宝箱时显示的最大列数
 * ZzySCF YMaxList x                                              //这会使显示模式--YuanShen的选项框中打开宝箱时显示的最大行数
 * ZzySCF YWindowWidth x                                          //这会使显示模式--YuanShen的窗口宽度
 * ZzySCF YWindowOp x                                             //这会使显示模式--YuanShen的窗口透明度
 * ZzySCF YTakeRange x                                            //这会使显示模式--YuanShen的出现显示范围
 * ZzySCF YColor1 x                                               //这会使显示模式--YuanShen的显示底板颜色1
 * ZzySCF YColor2 x                                               //这会使显示模式--YuanShen的显示底板颜色2
 * ZzySCF YOffsetX x                                              //这会使显示模式--YuanShen的窗口偏移X,这可以是一个正负值
 * ZzySCF YOffsetY x                                              //这会使显示模式--YuanShen的窗口偏移Y,这可以是一个正负值
 * ZzySCF YFadeFrame x                                            //这会使显示模式--YuanShen的窗口出现或是消失所需要的渐变帧数时长
 * ZzySCF YDistance x                                             //这会使显示模式--YuanShen的窗口绘制道具背景的间距
 * ZzySCF YIsHorShow x(true/false)                                //这会使显示模式--YuanShen的窗口是否水平绘制道具背景的渐变色
 * ZzySCF YIsAutoOpen x(true/false)                               //这会使显示模式--YuanShen的窗口开过的宝箱再次接近时,会自动开箱
 * ZzySCF YIsLimitWindow x(true/false)                            //这会使显示模式--YuanShen的显示宝箱窗口限制在屏幕内
 *
 * ZzySCF CoinColor x                                             //这会修改打开宝箱后显示金币文本的颜色
 *
 *
 *
 *
 *
 *
 *以下是一些数据库中使用到的便签,请将他们写在 数据库->道具/武器/护甲->注释   之中
 *---------------------DataBase Note--------------------
 *
 * <ZzySCF Color: x>                                       //这会使这个道具在宝箱中打开时呈现设置的颜色,可以用#xxxxxx或rgba(x,x,x,x)的格式
 *
 *
 *
 *
 *
 *
 *以下是一些地图中事件用到的便签信息,请将他们写在  地图->事件->事件指令->注释  之中
 *---------------------Note Case--------------------
 *
 * <ZzySCF Chest>                                          //这会将本事件视为一个箱子,在打开始进入箱子界面
 *
 *
 *
 *
------------------------------------------------------------




 我叫坂本：1.02v 调整yuanshen箱子在地图边缘显示位置的问题,增加可控的额外参数
 我叫坂本：1.01v 优化,添加新的参数
 我叫坂本：1.00v 完成插件
 
------------------------------------------------------------

 * @param ---设置---
 * @default
 *
 *
 * @param OverlapMode
 * @text 相同物品重叠模式
 * @parent ---设置---
 * @type combo
 * @option Single
 * @option Overlap
 * @option Event
 * @desc 在打开宝箱时,出现相同物品的重叠模式,Single代表所有道具独立不会重叠,Overlap代表相同道具重叠,Event代表事件中设置的重叠方式
 * @default Event
 *
 *
 * @param ShowMode
 * @text 物品显示模式
 * @parent ---设置---
 * @type combo
 * @option Chest
 * @option YuanShen
 * @desc 打开宝箱后,窗口的显示模式,Chest代表窗口中存放道具,YuanShen代表游戏《原神》中宝箱物品的显示方式
 * @default Chest
 *
 *
 *
 * @param IsFilterText
 * @text 是否过滤文本
 * @parent ---设置---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 触发被视为箱子的事件时,是否会过滤所显示文本的功能
 * YES - true     NO - false
 * @default true
 *
 *
 * @param CoinIcon
 * @text 金币图标
 * @parent ---设置---
 * @type Number
 * @desc 显示金币的图标,请填写ID值
 * @default 313
 *
 *
 * @param CountNumWidth
 * @text 数字预留距离
 * @parent ---设置---
 * @type text
 * @desc 这个是物品数量的间隔距离,可以属于对应的0代表预留的数字宽度
 * @default 0000
 *
 * @param CountCoinWidth
 * @text 金币预留距离
 * @parent ---设置---
 * @type text
 * @desc 这个是金币数量的间隔距离,可以属于对应的0代表预留的数字宽度
 * @default 00000
 *
 *
 * @param ---Chest模式窗口---
 * @default
 *
 * @param CMaxCols
 * @text 每行数量
 * @parent ---Chest模式窗口---
 * @type Number
 * @min 1
 * @desc 每一行能显示的数量,默认值为2个
 * @default 2
 *
 * @param IsCAllTake
 * @text 是否拥有全部取走选项
 * @parent ---Chest模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 打开箱子后,选择窗口是否拥有全部取走的选项
 * YES - true     NO - false
 * @default true
 *
 * @param CAllTakeText
 * @text 全部取走文本
 * @parent ---Chest模式窗口---
 * @type Text
 * @desc 打开箱子后,选择窗口显示全部取走的文本内容
 * @default 全部取走
 *
 *
 * @param IsCClose
 * @text 是否拥有关闭宝箱选项
 * @parent ---Chest模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 打开箱子后,选择窗口是否拥有关闭宝箱的选项
 * YES - true     NO - false
 * @default true
 *
 * @param CCloseText
 * @text 关闭宝箱文本
 * @parent ---Chest模式窗口---
 * @type Text
 * @desc 打开箱子后,选择窗口显示全部取走的文本内容
 * @default 关闭宝箱
 *
 * @param IsCAutoLine
 * @text 是否自动队列
 * @parent ---Chest模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 再点击取出道具后,是否宝箱中所有道具都会向前移动一格
 * YES - true     NO - false
 * @default true
 *
 *
 * @param ---YuanShen模式窗口---
 * @default
 *
 * @param YMaxCols
 * @text 每行数量
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @min 1
 * @desc 每一行能显示的数量,默认值为1个
 * @default 1
 *
 * @param YMaxList
 * @text 最大行数
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @min 1
 * @desc 能同时显示的最大行数,默认值为5个
 * @default 5
 *
 * @param YWindowWidth
 * @text 窗口宽度
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @desc 显示的窗口的最大宽度,默认值为180
 * @default 280
 *
 * @param YWindowOp
 * @text 窗口透明度
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @min 0
 * @desc 显示的窗口的透明度,默认值为255
 * @default 255
 *
 *
 *
 *
 *
 *
 * @param YTakeRange
 * @text 拾取范围
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @desc 宝箱开启后,玩家在一定范围内会显示窗口,范围为正方形,默认值为1
 * @default 1
 *
 * @param YColor1
 * @text 底板颜色1
 * @parent ---YuanShen模式窗口---
 * @type text
 * @desc 这是打开宝箱后显示道具的底板颜色1,默认为rgba(0, 0, 0, 0.6)灰黑色
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param YColor2
 * @text 底板颜色2
 * @parent ---YuanShen模式窗口---
 * @type text
 * @desc 这是打开宝箱后显示道具的底板颜色1,默认为rgba(0, 0, 0, 0)黑色
 * @default rgba(0, 0, 0, 0)
 *
 *
 * @param YOffsetX
 * @text 窗口偏移X
 * @parent ---YuanShen模式窗口---
 * @type text
 * @desc 显示窗口的偏移量X,这可以是一个正负整数值
 * @default 20
 *
 * @param YOffsetY
 * @text 窗口偏移Y
 * @parent ---YuanShen模式窗口---
 * @type text
 * @desc 显示窗口的偏移量Y,这可以是一个正负整数值
 * @default -160
 *
 * @param YFadeFrame
 * @text 渐变时长
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @desc 宝箱窗口出现到显示所经过的帧数时长
 * @default 10
 *
 * @param YDistance
 * @text 矩形间距
 * @parent ---YuanShen模式窗口---
 * @type Number
 * @desc 绘制的道具背景矩形框的间距,默认值为2,代表2像素
 * @default 2
 *
 * @param YIsHorShow
 * @text 是否水平绘制
 * @parent ---YuanShen模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 显示的道具背景框垂直或是水平绘制,选择true进行水平绘制
 * YES - true     NO - false
 * @default true
 *
 *
 * @param YIsAutoOpen
 * @text 是否自动开箱
 * @parent ---YuanShen模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 开过的宝箱将会自动记录,下次接近返回时会自动打开
 * YES - true     NO - false
 * @default true
 *
 * @param YIsLimitWindow
 * @text 是否限制在屏幕中
 * @parent ---YuanShen模式窗口---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 开启限制后,宝箱显示内容将不会出屏,防止发生显示不完全的问题
 * YES - true     NO - false
 * @default true
 *
 *
 *
 * @param ---音效---
 * @default
 *
 * @param TakeSound
 * @text 取走时音效名称
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 取走宝箱中物品时，会产生的音效,填写audio/se文件夹下的音频名称
 * @default Cursor1
 *
 * @param TakeVolume
 * @text 取走时音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param TakePitch
 * @text 取走时声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param TakePan
 * @text 取走时声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 *
 * @param NoItemSound
 * @text 空物品音效名称
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 取走宝箱中物品时，会产生的音效,填写audio/se文件夹下的音频名称
 * @default Cancel1
 *
 * @param NoItemVolume
 * @text 空物品音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param NoItemPitch
 * @text 空物品声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param NoItemPan
 * @text 空物品声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 * @param ChangeItemSound
 * @text 切换选择音效名称
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 取走宝箱中物品时，会产生的音效,填写audio/se文件夹下的音频名称
 * @default Knock
 *
 * @param ChangeItemVolume
 * @text 切换选择音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param ChangeItemPitch
 * @text 切换选择声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param ChangeItemPan
 * @text 切换选择声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 * @param AllTakeSound
 * @text 全部取走音效名称
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 取走宝箱中物品时，会产生的音效,填写audio/se文件夹下的音频名称
 * @default Equip2
 *
 * @param AllTakeVolume
 * @text 全部取走音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param AllTakePitch
 * @text 全部取走声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param AllTakePan
 * @text 全部取走声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 * @param CloseSound
 * @text 关闭宝箱音效名称
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 取走宝箱中物品时，会产生的音效,填写audio/se文件夹下的音频名称
 * @default Chest2
 *
 * @param CloseVolume
 * @text 关闭宝箱音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,默认100
 * @default 100
 
 * @param ClosePitch
 * @text 关闭宝箱声调
 * @parent ---音效---
 * @type Number
 * @desc 声调,默认100
 * @default 100
 
 * @param ClosePan
 * @text 关闭宝箱声道
 * @parent ---音效---
 * @type Number
 * @desc 声道,默认0
 * @default 0
 *
 *
 *
 *
 *
 * @param ---道具设置---
 * @default
 *
 * @param CoinColor
 * @text 金币文字显示颜色
 * @parent ---音效---
 * @type text
 * @desc 打开宝箱后金币显示的颜色值,可填写#000000~#ffffff或rgba(0,0,0,0)~rgba(255,255,255,1)这两种颜色码格式,默认为白色
 * @default #ffffff
 *
 *
 */
 
var LiuYue = LiuYue || {};
LiuYue.LiuYue_SeniorChest = true;//插件启动

var Zzy = Zzy || {};
Zzy.SCF = Zzy.SCF || {};
Zzy.SCF.version = 1.02;  
Zzy.Parameters = PluginManager.parameters('LiuYue_SeniorChest');
Zzy.Param = Zzy.Param || {};
 
Zzy.Param.SCFOverlapMode = String(Zzy.Parameters['OverlapMode']);
Zzy.Param.SCFShowMode = String(Zzy.Parameters['ShowMode']);
Zzy.Param.SCFIsFilterText = eval(String(Zzy.Parameters['IsFilterText']));
Zzy.Param.SCFCoinIcon = parseInt(Zzy.Parameters['CoinIcon']);//金币图标

Zzy.Param.SCFCMaxCols = parseInt(Zzy.Parameters['CMaxCols']);//最大列数
Zzy.Param.SCFIsCAllTake = eval(String(Zzy.Parameters['IsCAllTake']));//是否拥有全部取走选项
Zzy.Param.SCFCAllTakeText = String(Zzy.Parameters['CAllTakeText']);//全部取走文本
Zzy.Param.SCFIsCClose = eval(String(Zzy.Parameters['IsCClose']));//是否拥有关闭宝箱选项
Zzy.Param.SCFCCloseText = String(Zzy.Parameters['CCloseText']);//全部取走文本
Zzy.Param.SCFIsCAutoLine = eval(String(Zzy.Parameters['IsCAutoLine']));//自动队列


Zzy.Param.SCFYMaxCols = parseInt(Zzy.Parameters['YMaxCols']);//最大列数
Zzy.Param.SCFYMaxList = parseInt(Zzy.Parameters['YMaxList']);//最大行数
Zzy.Param.SCFYWindowWidth = parseInt(Zzy.Parameters['YWindowWidth']);//窗口宽度
Zzy.Param.SCFYWindowOp = parseInt(Zzy.Parameters['YWindowOp']);//窗口透明度
Zzy.Param.SCFYTakeRange = parseInt(Zzy.Parameters['YTakeRange']);//拾取范围
Zzy.Param.SCFYColor1 = String(Zzy.Parameters['YColor1']);//底板颜色1
Zzy.Param.SCFYColor2 = String(Zzy.Parameters['YColor2']);//底板颜色2
Zzy.Param.SCFYOffsetX = Number(Zzy.Parameters['YOffsetX']);//窗口偏移X
Zzy.Param.SCFYOffsetY = Number(Zzy.Parameters['YOffsetY']);//窗口偏移Y
Zzy.Param.SCFYFadeFrame = Number(Zzy.Parameters['YFadeFrame']);//渐变帧数
Zzy.Param.SCFYDistance = parseInt(Zzy.Parameters['YDistance']);//矩形间距
Zzy.Param.SCFYIsHorShow = eval(String(Zzy.Parameters['YIsHorShow']));//是否水平绘制
Zzy.Param.SCFYIsAutoOpen = eval(String(Zzy.Parameters['YIsAutoOpen']));//自动开箱
Zzy.Param.SCFYIsLimitWindow = eval(String(Zzy.Parameters['YIsLimitWindow']));//限制屏幕




Zzy.Param.SCFCoinColor = String(Zzy.Parameters['CoinColor']);//金币颜色


Zzy.Param.SCFCountNumWidth = String(Zzy.Parameters['CountNumWidth']);//道具预留
Zzy.Param.SCFCountCoinWidth = String(Zzy.Parameters['CountCoinWidth']);//金币预留




//声音
Zzy.SCF.MakeSE = function(seName,seVolume,sePitch,sePan)
{
	if(!seName)return undefined;
	var se = {
		name:seName,
		volume:(seVolume ? seVolume : 100),
		pitch:(sePitch ? sePitch : 100),
		pan:(sePan ? sePan : 0)
	};
	return se;
}


Zzy.Param.SCFTakeSound = String(Zzy.Parameters['TakeSound']);
Zzy.Param.SCFTakeVolume = parseInt(Zzy.Parameters['TakeVolume']);
Zzy.Param.SCFTakePitch = parseInt(Zzy.Parameters['TakePitch']);
Zzy.Param.SCFTakePan = parseInt(Zzy.Parameters['TakePan']);
Zzy.Param.SCFTakeSE = Zzy.SCF.MakeSE(Zzy.Param.SCFTakeSound,Zzy.Param.SCFTakeVolume,Zzy.Param.SCFTakePitch,Zzy.Param.SCFTakePan);

Zzy.Param.SCFNoItemSound = String(Zzy.Parameters['NoItemSound']);
Zzy.Param.SCFNoItemVolume = parseInt(Zzy.Parameters['NoItemVolume']);
Zzy.Param.SCFNoItemPitch = parseInt(Zzy.Parameters['NoItemPitch']);
Zzy.Param.SCFNoItemPan = parseInt(Zzy.Parameters['NoItemPan']);
Zzy.Param.SCFNoItemSE = Zzy.SCF.MakeSE(Zzy.Param.SCFNoItemSound,Zzy.Param.SCFNoItemVolume,Zzy.Param.SCFNoItemPitch,Zzy.Param.SCFNoItemPan);

Zzy.Param.SCFAllTakeSound = String(Zzy.Parameters['AllTakeSound']);
Zzy.Param.SCFAllTakeVolume = parseInt(Zzy.Parameters['AllTakeVolume']);
Zzy.Param.SCFAllTakePitch = parseInt(Zzy.Parameters['AllTakePitch']);
Zzy.Param.SCFAllTakePan = parseInt(Zzy.Parameters['AllTakePan']);
Zzy.Param.SCFAllTakeSE = Zzy.SCF.MakeSE(Zzy.Param.SCFAllTakeSound,Zzy.Param.SCFAllTakeVolume,Zzy.Param.SCFAllTakePitch,Zzy.Param.SCFAllTakePan);

Zzy.Param.SCFCloseSound = String(Zzy.Parameters['CloseSound']);
Zzy.Param.SCFCloseVolume = parseInt(Zzy.Parameters['CloseVolume']);
Zzy.Param.SCFClosePitch = parseInt(Zzy.Parameters['ClosePitch']);
Zzy.Param.SCFClosePan = parseInt(Zzy.Parameters['ClosePan']);
Zzy.Param.SCFCloseSE = Zzy.SCF.MakeSE(Zzy.Param.SCFCloseSound,Zzy.Param.SCFCloseVolume,Zzy.Param.SCFClosePitch,Zzy.Param.SCFClosePan);

Zzy.Param.SCFChangeItemSound = String(Zzy.Parameters['ChangeItemSound']);
Zzy.Param.SCFChangeItemVolume = parseInt(Zzy.Parameters['ChangeItemVolume']);
Zzy.Param.SCFChangeItemPitch = parseInt(Zzy.Parameters['ChangeItemPitch']);
Zzy.Param.SCFChangeItemPan = parseInt(Zzy.Parameters['ChangeItemPan']);
Zzy.Param.SCFChangeItemSE = Zzy.SCF.MakeSE(Zzy.Param.SCFChangeItemSound,Zzy.Param.SCFChangeItemVolume,Zzy.Param.SCFChangeItemPitch,Zzy.Param.SCFChangeItemPan);



Zzy.Param.SCFAllSE = [];
Zzy.Param.SCFAllSE = [undefined,Zzy.Param.SCFTakeSE,Zzy.Param.SCFNoItemSE,Zzy.Param.SCFAllTakeSE,Zzy.Param.SCFCloseSE,Zzy.Param.SCFChangeItemSE];
//1.取物品
//2.没有物品
//3.全部拿走
//4.关闭宝箱
//5.切换选项

Zzy.SCF.TempCacheChest = [];//缓存箱

Zzy.SCF.TempSpeed1 = 16;
Zzy.SCF.TempSpeed2 = 8;
Zzy.SCF.TempSpeed3 = 4;

Zzy.SCF.TempCallInfo = undefined;//临时呼叫信息

Zzy.SCF.TempNotRepeatFrame = 3;//临时等待帧数,这是为了方式宝箱出现双次打开,因为框架特殊的机制,在未拥有指令行的事件中,触碰有概率出现执行两次start函数的情况
//通过等待帧数来避免此类情况的执行

//=================================================================
//Game_System
//=================================================================

Zzy.SCF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.SCF.Game_System_initialize.call(this);
	this.ZzySCFInitData();//初始化数据
};

Game_System.prototype.ZzySCFInitData = function()
{
	this._ZzySCFOverlapMode = Zzy.SCF.OverlapModeToID(Zzy.Param.SCFOverlapMode);
	this._ZzySCFShowMode = Zzy.SCF.ShowModeToID(Zzy.Param.SCFShowMode);
	this._ZzySCFIsFilterText = Zzy.Param.SCFIsFilterText;
	
	this._ZzySCFCoinIcon = Zzy.Param.SCFCoinIcon;
	
	this._ZzySCFCMaxCols = Zzy.Param.SCFCMaxCols;//最大列数
	this._ZzySCFIsCAllTake = Zzy.Param.SCFIsCAllTake;//是否拥有全部取走选项
	this._ZzySCFCAllTakeText = Zzy.Param.SCFCAllTakeText;//全部取走文本
	this._ZzySCFIsCClose = Zzy.Param.SCFIsCClose;//是否拥有关闭宝箱选项
	this._ZzySCFCCloseText = Zzy.Param.SCFCCloseText;//全部取走文本
	this._ZzySCFIsCAutoLine = Zzy.Param.SCFIsCAutoLine;//自动队列
	
	
	this._ZzySCFYMaxCols = Zzy.Param.SCFYMaxCols;//最大列数
	this._ZzySCFYMaxList = Zzy.Param.SCFYMaxList;//最大行数
	this._ZzySCFYWindowWidth = Zzy.Param.SCFYWindowWidth;//窗口最大宽度
	this._ZzySCFYWindowOp = Zzy.Param.SCFYWindowOp;//窗口透明度
	this._ZzySCFYTakeRange = Zzy.Param.SCFYTakeRange;//拾取范围
	this._ZzySCFYColor1 = Zzy.Param.SCFYColor1;//底板颜色1
	this._ZzySCFYColor2 = Zzy.Param.SCFYColor2;//底板颜色2
	this._ZzySCFYOffsetX = Zzy.Param.SCFYOffsetX;//窗口偏移X
	this._ZzySCFYOffsetY = Zzy.Param.SCFYOffsetY;//窗口偏移Y
	this._ZzySCFYFadeFrame = Zzy.Param.SCFYFadeFrame;//渐变帧数时长
	this._ZzySCFYDistance = Zzy.Param.SCFYDistance;//水平间距
	this._ZzySCFYIsHorShow = Zzy.Param.SCFYIsHorShow;//是否水平
	this._ZzySCFYIsAutoOpen = Zzy.Param.SCFYIsAutoOpen;//是否接近自动开箱
	this._ZzySCFYIsLimitWindow = Zzy.Param.SCFYIsLimitWindow;//限制界限

	this._ZzySCFCoinColor = Zzy.Param.SCFCoinColor;//金币颜色

	this._ZzySCFStorage = [];//库存
	
	this._ZzySCFYunChestFlag = [];//打开标记,标记着打开的宝箱事件
	this._ZzySCFYunEmptyCheck = [];//空白检测标记
	
	this._ZzySCFWaitCallInfo = undefined;
	this._ZzySCFWaitOfChest = undefined;
}

Game_System.prototype.GetZzySCFCoinColor = function()
{
	return this._ZzySCFCoinColor;
}


Game_System.prototype.IsZzySCFYunEmptyCheck = function(mapId,evId)
{
	if(!this._ZzySCFYunEmptyCheck[mapId] || !this._ZzySCFYunEmptyCheck[mapId][evId])
	{return false;}
	return true;
}

Game_System.prototype.AddZzySCFYunEmptyCheck = function(mapId,evId)
{
	if(!this._ZzySCFYunEmptyCheck[mapId])
	{this._ZzySCFYunEmptyCheck[mapId] = [];}
	this._ZzySCFYunEmptyCheck[mapId][evId] = true;
}


Game_System.prototype.GetZzySCFYunChestFlag = function(mapId)
{
	if(!this._ZzySCFYunChestFlag[mapId])
	{this._ZzySCFYunChestFlag[mapId] = [];}
	return this._ZzySCFYunChestFlag[mapId];
}


Game_System.prototype.AddYunChestFlag = function(mapId,eventId)//添加开启标记宝箱事件
{
	if(!this._ZzySCFYunChestFlag[mapId])
	{
		this._ZzySCFYunChestFlag[mapId] = [];
	}
	
	for(var i=0;i<this._ZzySCFYunChestFlag[mapId].length;i++)
	{
		if(this._ZzySCFYunChestFlag[mapId][i] === eventId)
		{return;}
	}
	
	this._ZzySCFYunChestFlag[mapId].push(eventId);
}



Game_System.prototype.GetZzySCFOverlapMode = function()
{
	return this._ZzySCFOverlapMode;
}

Game_System.prototype.GetZzySCFShowMode = function()
{
	return this._ZzySCFShowMode;
}

Game_System.prototype.GetZzySCFCMaxCols = function()
{
	return this._ZzySCFCMaxCols;
}

Game_System.prototype.GetZzySCFIsCAllTake = function()
{
	return this._ZzySCFIsCAllTake;
}

Game_System.prototype.GetZzySCFCAllTakeText = function()
{
	return this._ZzySCFCAllTakeText;
}

Game_System.prototype.GetZzySCFIsCClose = function()
{
	return this._ZzySCFIsCClose;
}

Game_System.prototype.GetZzySCFCCloseText = function()
{
	return this._ZzySCFCCloseText;
}

Game_System.prototype.GetZzySCFIsCAutoLine = function()
{
	return this._ZzySCFIsCAutoLine;
}



Game_System.prototype.ZzySCFRecordInfo = function(eventId,value,itemId,typeId)//记录道具
{
	//typeId:1 金币 2道具 3武器 4护甲
	var mapId = $gameMap.mapId();
	if(!this._ZzySCFStorage[mapId])
	{this._ZzySCFStorage[mapId] = [];}
	if(!this._ZzySCFStorage[mapId][eventId])
	{this._ZzySCFStorage[mapId][eventId] = [];}
	
	var info = {};
	info.typeId = typeId;//类型
	info.value = value;//数值
	info.itemId = itemId;//物品类型
	
	this.ZzySCFAddToStorage(mapId,eventId,info);//添加
}

Game_System.prototype.ZzySCFSetWaitCall = function(info)//设置等待呼叫
{
	if(!info)return;
	if(!this._ZzySCFStorage[info.mapId])
	{this._ZzySCFStorage[info.mapId] = [];}
	if(!this._ZzySCFStorage[info.mapId][info.evId])
	{this._ZzySCFStorage[info.mapId][info.evId] = [];}	
	this._ZzySCFWaitCallInfo = info;
	Zzy.SCF.TempCallInfo = this._ZzySCFWaitCallInfo;
}

Game_System.prototype.GetZzySCFStorage = function(mapId,evId)
{
	if(!this._ZzySCFStorage[mapId])
	{this._ZzySCFStorage[mapId] = [];}
	if(!this._ZzySCFStorage[mapId][evId])
	{this._ZzySCFStorage[mapId][evId] = [];}
	return this._ZzySCFStorage[mapId][evId];

}

Game_System.prototype.IsZzySCFStorage = function(mapId,evId)
{
	if(!this._ZzySCFStorage[mapId])return false;
	if(!this._ZzySCFStorage[mapId][evId])return false;
	
	return true;
}


Game_System.prototype.ZzySCFAddToStorage = function(mapId,eventId,info)
{
	var ev = $gameMap.event(eventId);
	
	//重叠模式 1独立的 2重叠的 3跟随事件
	switch(this.GetZzySCFOverlapMode())
	{
		case 1:
		if(info.typeId === 1)//金币
		{
			this._ZzySCFStorage[mapId][eventId].push(info);
		}
		else
		{
			var number = info.value;
			info.value = 1;
			for(var i=0;i<number;i++)
			{
				this._ZzySCFStorage[mapId][eventId].push(info);//逐个压入
			}
		}
		break;
		case 2://通过typeId遍历重复压入
			var len = this._ZzySCFStorage[mapId][eventId].length;
			var tempInfo = undefined;
			var isBeing = false;
			for(var i=0;i<len;i++)
			{
				tempInfo = this._ZzySCFStorage[mapId][eventId][i];
				//类型与ID都相同,代表重合
				if(tempInfo.typeId === info.typeId && tempInfo.itemId === info.itemId)
				{
					tempInfo.value += info.value;
					isBeing = true;
					break;
				}
			}
			if(!isBeing)
			{this._ZzySCFStorage[mapId][eventId].push(info);}//逐个压入
		break;
		case 3:
			this._ZzySCFStorage[mapId][eventId].push(info);//正常压入
		break;
	}
}


//================================================================
//Scene_Map
//================================================================
Zzy.SCF.Scene_Map_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() 
{
	Zzy.SCF.Scene_Map_initialize.call(this);
	this._ZzySCFYWindow = undefined;
};

Zzy.SCF.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() 
{
	Zzy.SCF.Scene_Map_start.call(this);
	//this.ZzySCFCreateChestWindow();
	this.ZzySCFCreateYuanWindow();
};

Scene_Map.prototype.ZzySCFCreateYuanWindow = function()
{

	//创建窗口
	this._ZzySCFYWindow = new Window_ZzySCFYuanShen();
	this.addChild(this._ZzySCFYWindow);
			
	this._ZzySCFYWindow.setHandler('ok',this.OnYuanProcessOk.bind(this));
	this._ZzySCFYWindow.setHandler('cancel',this.OnYuanProcessCancel.bind(this));	
}

Zzy.SCF.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() 
{
	Zzy.SCF.Scene_Map_update.call(this);
	
	this.updateZzySCFCallStorage();
};


Scene_Map.prototype.updateZzySCFCallStorage = function()//刷新是否需要呼叫
{
	if(!$gameSystem._ZzySCFWaitCallInfo)return;
	if($gameMessage.isBusy())return;	//判断:$gameMessage窗口结束
	
	this.ZzySCFCallStorageWindow();//呼叫
	$gameSystem._ZzySCFWaitCallInfo = undefined;
}

Scene_Map.prototype.ZzySCFCallStorageWindow = function()
{
	var mapId = $gameSystem._ZzySCFWaitCallInfo.mapId;
	var evId = $gameSystem._ZzySCFWaitCallInfo.evId;
	//Call窗口
	// if(this._ZzySCFChestWindow)
	// {
		// this._ZzySCFChestWindow.CallOpen();//呼叫打开
	// }

	var ev = $gameMap.event(evId);
	
	Zzy.SCF.TempCallInfo = $gameSystem._ZzySCFWaitCallInfo;
	switch($gameSystem.GetZzySCFShowMode(ev))
	{
		case 1:this.CallZzySCFChestWindow();break;
		case 2:this.CallZzySCFYuanShenWindow();break;
	}
	
}

Scene_Map.prototype.CallZzySCFChestWindow = function()
{
	SceneManager.push(Scene_ZzySCFChest);//压入场景
}

Scene_Map.prototype.CallZzySCFYuanShenWindow = function()
{
	this._ZzySCFYWindow.reClick();//点击
	this._ZzySCFYWindow.refreshList();
	this._ZzySCFYWindow.refresh();
	
	$gameSystem.AddYunChestFlag(this._ZzySCFYWindow.mapId,this._ZzySCFYWindow.evId);//压入到遍历箱中
	
}



Scene_Map.prototype.OnYuanProcessOk = function()
{
	if(this._ZzySCFYWindow && this._ZzySCFYWindow.active && this._ZzySCFYWindow.visible)
	{
		this._ZzySCFYWindow.OnProcessOk();
	}
}


Scene_Map.prototype.OnYuanProcessCancel = function()//取消
{
	if(this._ZzySCFYWindow && this._ZzySCFYWindow.visible)
	{
		this._ZzySCFYWindow.froceClose = true;//强制关闭
		this._ZzySCFYWindow.closeEvId = Zzy.SCF.TempCallInfo ? Zzy.SCF.TempCallInfo.evId : 0;
	}
}


Zzy.SCF.Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
Scene_Map.prototype.isMenuCalled = function() 
{
	if(this._ZzySCFYWindow && this._ZzySCFYWindow.visible)
	{return false;}
	
	

	return Zzy.SCF.Scene_Map_isMenuCalled.call(this);
};


Zzy.SCF.Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() 
{
	if(this._ZzySCFYWindow)
	{
		if(this._ZzySCFYWindow.visible && this._ZzySCFYWindow.isTouchedInsideFrame())
		{
			return;
		}
	}
	
	Zzy.SCF.Scene_Map_processMapTouch.call(this);
};




//================================================================
//Scene_ZzySCFChest
//================================================================

function Scene_ZzySCFChest() 
{
    this.initialize.apply(this, arguments);
}

Scene_ZzySCFChest.prototype = Object.create(Scene_MenuBase.prototype);
Scene_ZzySCFChest.prototype.constructor = Scene_ZzySCFChest;

Scene_ZzySCFChest.prototype.initialize = function() 
{
    Scene_MenuBase.prototype.initialize.call(this);

};
Scene_ZzySCFChest.prototype.CreateChestWindow = function()
{
	this._HelpWindow = new Window_ZzySCFHelp();
	this._ChestWindow = new Window_ZzySCFChest();
	this._SelectWindow = new Window_ZzySCFSelect();

	this.addChild(this._HelpWindow);
	this.addChild(this._ChestWindow);
	this.addChild(this._SelectWindow);
	
	this.initPosition();//初始化位置
	
	
	this._HelpWindow.CallOpen();//呼叫打开	
	this._ChestWindow.CallOpen();//呼叫打开
	this._SelectWindow.CallOpen();//呼叫打开
	
	
	this._HelpWindow.BindChestWindow(this._ChestWindow);
	
    //this._ChestWindow.setHandler('cancel', this.popScene.bind(this));	
	this._ChestWindow.setHandler('ok',this.OnChestProcessOk.bind(this));
	this._ChestWindow.setHandler('cancel',this.OnChestProcessCancel.bind(this));
	
	this._SelectWindow.setHandler('ok',this.OnSelectProcessOk.bind(this));	
	
}

Scene_ZzySCFChest.prototype.OnChestProcessOk = function()//按下Chest窗口
{
	if(this._ChestWindow.active)
	{
		//可以取出元素
		this._ChestWindow.OnProcessOk();
	}
	this._ChestWindow.activate();
}

Scene_ZzySCFChest.prototype.OnChestProcessCancel = function()
{
	if(this._ChestWindow.active)
	{
		if(this._ChestWindow._index >= 0)
		{
			this._ChestWindow.deselect();
		}
		else
		{
			this.popScene();//退出
		}	
	}
}


Scene_ZzySCFChest.prototype.OnSelectProcessOk = function()
{
	if(this._SelectWindow.active)
	{
		this._SelectWindow.OnProcessOk();
	}
	this._SelectWindow.activate();
}

Scene_ZzySCFChest.prototype.initPosition = function()
{
	this._ChestWindow.y = this._HelpWindow.height;
	
	
	this._SelectWindow.y = Graphics.boxHeight-this._SelectWindow.height;
	this._SelectWindow.startY = this._SelectWindow.y;
	
	this._ChestWindow.height = Graphics.boxHeight-this._HelpWindow.height-this._SelectWindow.height;
}

Scene_ZzySCFChest.prototype.create = function() 
{
    Scene_MenuBase.prototype.create.call(this);
	this.CreateChestWindow();//创造相关窗口
};

Scene_ZzySCFChest.prototype.AllTakeChest = function()
{
	this._ChestWindow.TakeAll();
}




//================================================================
//Window_ZzySCFChestBase
//================================================================
//窗口基类
function Window_ZzySCFChestBase() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzySCFChestBase.prototype = Object.create(Window_Selectable.prototype);
Window_ZzySCFChestBase.prototype.constructor = Window_ZzySCFChestBase;

Window_ZzySCFChestBase.prototype.initialize = function(x,y,w,h) 
{
	x = x ? x : 0;
	y = y ? y : 0;
	w = w ? w : Graphics.boxWidth;
	h = h ? h : Graphics.boxHeight;
	
    Window_Selectable.prototype.initialize.call(this,x,y,w,h);
	this.evId = 0;
	this.mapId = 0;
	this.initWindow();
};

Window_ZzySCFChestBase.prototype.initWindow = function()
{
	this.Hide();
}


Window_ZzySCFChestBase.prototype.Hide = function()
{
	this.visible = false;
	this.opacity = 0;	
}

Window_ZzySCFChestBase.prototype.Show = function()
{
	this.visible = true;
	this.opacity = 255;	
}

Window_ZzySCFChestBase.prototype.CallOpen = function()
{

}

Window_ZzySCFChestBase.prototype.OnProcessOk = function()
{
	
}


//================================================================
//Window_ZzySCFChest
//================================================================
//一般模式窗口
function Window_ZzySCFChest() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzySCFChest.prototype = Object.create(Window_ZzySCFChestBase.prototype);
Window_ZzySCFChest.prototype.constructor = Window_ZzySCFChest;

Window_ZzySCFChest.prototype.initialize = function() 
{
	this.evId = 0;
	this.mapId = 0;
	this._list = [];	
	
    Window_ZzySCFChestBase.prototype.initialize.call(this);

	this.refreshList();
	this.refresh();

	this.select(0);
	this.activate();
};

Window_ZzySCFChest.prototype.CallOpen = function()
{
	Window_ZzySCFChestBase.prototype.CallOpen.call(this);
	
	this.Show();
	this.open();//呼叫打开
}


Window_ZzySCFChest.prototype.updateOpen = function() 
{
    if (this._opening) {
        this.openness += Zzy.SCF.TempSpeed1;
        if (this.isOpen()) 
		{
            this._opening = false;
        }
    }
};

Window_ZzySCFChest.prototype.updateClose = function() 
{
    if (this._closing) {
        this.openness -= Zzy.SCF.TempSpeed1;
        if (this.isClosed()) 
		{
            this._closing = false;
			this.Hide();//执行隐藏
        }
    }
};


Window_ZzySCFChest.prototype.open = function() 
{
	this.openness = 0;
    this._opening = true;
    this._closing = false;
};

Window_ZzySCFChest.prototype.close = function() 
{
	this.openness = 255;
    this._closing = true;
    this._opening = false;
};

Window_ZzySCFChest.prototype.refreshList = function()//刷新List
{
	this.evId = Zzy.SCF.TempCallInfo.evId;
	this.mapId = Zzy.SCF.TempCallInfo.mapId;
	
	//获取list
	this._list = $gameSystem.GetZzySCFStorage(this.mapId,this.evId);

}

Window_ZzySCFChest.prototype.maxItems = function()
{
	//如果其中道具数不足时,将会填充为额外的空道具槽
	var minItems = this.maxPageRows() * this.maxCols();
	return this._list.length > minItems ? this._list.length : minItems;
}

Window_ZzySCFChest.prototype.maxCols = function()
{
	return $gameSystem._ZzySCFCMaxCols;
}

Window_ZzySCFChest.prototype.drawItem = function(index)
{
	var info = this._list[index];
	if(info)
	{	
		var rect = this.itemRectForText(index);
		var align = this.itemTextAlign();
		this.resetTextColor();
		this.changePaintOpacity(true);
		
		var item = undefined;
		this.resetTextColor();
		
		switch(info.typeId)
		{
			case 1://金币
				item = {};
				item.iconIndex = $gameSystem._ZzySCFCoinIcon;
				item.name = this.currencyUnit();
				item.isCoin = true;
				this.changeTextColor($gameSystem.GetZzySCFCoinColor());
			break;
			case 2:item = $dataItems[info.itemId];
				this.setZzySCFItemColor(item);
			break;
			case 3:item = $dataWeapons[info.itemId];
				this.setZzySCFItemColor(item);
			break;
			case 4:item = $dataArmors[info.itemId];
				this.setZzySCFItemColor(item);
			break;
		}
		
		
		if(item)
		{
			var numberWidth = 0;
			if(item.isCoin)
			{
				numberWidth = this.coinWidth();
			}
			else
			{
				numberWidth = this.numberWidth();
			}
			
			
			
			this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
			this.drawItemNumber(info, rect.x, rect.y, rect.width);
		}

	}

}

Window_ZzySCFChest.prototype.setZzySCFItemColor = function(item)
{
	if(!item.zzySCF || !item.zzySCF.color)
	{this.resetTextColor();}
	else
	{this.changeTextColor(item.zzySCF.color);}
}



Window_ZzySCFChest.prototype.drawItemName = function(item, x, y, width) 
{
    width = width || 312;
    if (item) 
	{
        var iconBoxWidth = Window_Base._iconWidth + 4;   
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ZzySCFChest.prototype.drawItemNumber = function(info, x, y, width) 
{
    if (this.needsNumber()) 
	{
		if(info.typeId === 1)
		{
			this.drawText('x', x, y, width - this.textWidth(Zzy.Param.SCFCountCoinWidth), 'right');
		}
		else
		{
			this.drawText('x', x, y, width - this.textWidth(Zzy.Param.SCFCountNumWidth), 'right');
		}
       
        this.drawText(String(info.value), x, y, width, 'right');
    }
};

Window_ZzySCFChest.prototype.needsNumber = function() 
{
    return true;
};

Window_ZzySCFChest.prototype.numberWidth = function() 
{
    return this.textWidth(Zzy.Param.SCFCountNumWidth);
};

Window_ZzySCFChest.prototype.coinWidth = function()
{
	return this.textWidth(Zzy.Param.SCFCountCoinWidth);
}


Window_ZzySCFChest.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

Window_ZzySCFChest.prototype.itemTextAlign = function() 
{
    return 'left';
};

Window_ZzySCFChest.prototype.drawAllItems = function() 
{
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) 
	{
		
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_ZzySCFChest.prototype.OnProcessOk = function()
{
	//双击取出道具
	
	
	var index = this.index();
	var info = this._list[index];

	if(info)
	{
		this.GetListInfo(index);
		
		var value = info.value;//数量
		var id = info.itemId;
		
		if($gameSystem._ZzySCFIsCAutoLine)
		{
			//向前遍历
			
			var tList = $gameSystem.GetZzySCFStorage(this.mapId,this.evId);
			var len = tList.length;
			
			for(var i=index;i<len-1;i++)
			{
				tList[i] = tList[i+1];
			}
			tList[len-1] = undefined;
		}
		else
		{
			$gameSystem._ZzySCFStorage[this.mapId][this.evId][index] = undefined;
		}
		this.refreshList();//刷新list
		this.refresh();
		return true;
	}
	return false;
}


Window_ZzySCFChest.prototype.TakeAll = function()
{
	for(var i=0;i<this._list.length;i++)
	{
		this.GetListInfo(i);//取出所有道具
		$gameSystem._ZzySCFStorage[this.mapId][this.evId][i] = undefined;
	}
	this.refreshList();//刷新list
	this.refresh()	
}

Window_ZzySCFChest.prototype.GetListInfo = function(index)
{
		var info = this._list[index];
	
		if(info)
		{
			var value = info.value;//数量
			var id = info.itemId;			
			
			switch(info.typeId)
			{
				case 1:$gameParty.gainGold(value);break;
				case 2:
				var item = $dataItems[id];
				$gameParty.gainItem(item,value);
				break;
				case 3:
				var weapon = $dataWeapons[id];
				$gameParty.gainItem(item,value);
				break;
				case 4:
				var armor = $dataArmors[id];
				$gameParty.gainItem(item,value);
				break;
			}				
		}	
}

Window_ZzySCFChest.prototype.processOk = function() 
{
    if (this.itemCan()) 
	{
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } 
	else 
	{
        this.playBuzzerSound();
    }
};


Window_ZzySCFChest.prototype.processCancel = function() 
{
	this.playCancelSound();
    this.updateInputData();
    this.callCancelHandler();
};

Window_ZzySCFChest.prototype.playCancelSound = function()
{
	SoundManager.playCancel();
}

Window_ZzySCFChest.prototype.playOkSound = function() 
{
	if(!Zzy.SCF.PlaySE(1))
	{SoundManager.playOk();}	
};

Window_ZzySCFChest.prototype.playBuzzerSound = function() 
{
	if(!Zzy.SCF.PlaySE(2))
    {SoundManager.playBuzzer();}
};


Window_ZzySCFChest.prototype.itemCan = function()
{
	return !!this._list[this.index()];
}


Window_ZzySCFChest.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this.index() !== lastIndex) {
            this.playSelectSound();
        }
    }
};


Window_ZzySCFChest.prototype.playSelectSound = function()
{
	if(!Zzy.SCF.PlaySE(5))
	{SoundManager.playCursor();}		
}

Window_ZzySCFChest.prototype.onTouch = function(triggered)
{
    var lastIndex = this.index();
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (hitIndex === this.index()) {
            if (triggered && this.isTouchOkEnabled()) {
                this.processOk();
            }
        } else if (this.isCursorMovable()) {
            this.select(hitIndex);
        }
    } else if (this._stayCount >= 10) {
        if (y < this.padding) {
            this.cursorUp();
        } else if (y >= this.height - this.padding) {
            this.cursorDown();
        }
    }
    if (this.index() !== lastIndex) {
        this.playSelectSound();
    }
};




//================================================================
//Window_ZzySCFHelp
//================================================================

function Window_ZzySCFHelp() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzySCFHelp.prototype = Object.create(Window_Help.prototype);
Window_ZzySCFHelp.prototype.constructor = Window_ZzySCFHelp;

Window_ZzySCFHelp.prototype.initialize = function() 
{
    Window_Help.prototype.initialize.call(this);
	this.movePos = 0;
	this._ChestWindow = undefined;
	this.isRefresh = true;
	this.srcIndex = undefined;
};

Window_ZzySCFHelp.prototype.CallOpen = function()
{
	//位移过程
	this.Show();
	this.open();//呼叫打开	
	
}


Window_ZzySCFHelp.prototype.BindChestWindow = function(pointer)
{
	this._ChestWindow = pointer;
	this.srcIndex = this._ChestWindow._index;
	
}

Window_ZzySCFHelp.prototype.updateOpen = function() 
{
    if (this._opening) 
	{
        this.movePos += Zzy.SCF.TempSpeed2;
        if(this.movePos >= 0)
		{
			this.movePos = 0;
            this._opening = false;
        }
		this.y = this.movePos;
    }
};

Window_ZzySCFHelp.prototype.updateClose = function() 
{
    if (this._closing) 
	{
        this.movePos -= Zzy.SCF.TempSpeed2;
        if(this.movePos <= -this.height)
		{
			this.movePos = -this.height;
            this._closing = false;
			this.Hide();//执行隐藏
        }
		this.y = this.movePos;
    }
};


Window_ZzySCFHelp.prototype.open = function() 
{
	this.movePos = -this.height;
    this._opening = true;
    this._closing = false;
};

Window_ZzySCFHelp.prototype.close = function() 
{
	this.movePos = 0;
    this._closing = true;
    this._opening = false;
};

Window_ZzySCFHelp.prototype.Hide = function()
{
	this.visible = false;
	this.opacity = 0;
}

Window_ZzySCFHelp.prototype.Show = function()
{
	this.visible = true;
	this.opacity = 255;	
}

Window_ZzySCFHelp.prototype.update = function()
{
	if(this._ChestWindow._index !== this.srcIndex)
	{
		this.srcIndex = this._ChestWindow._index;
		this.isRefresh = true;
	}

	if(this.isRefresh)
	{
		this.setInfo(this._ChestWindow._list[this.srcIndex]);
		this.isRefresh = false;
	}
	
}


Window_ZzySCFHelp.prototype.setInfo = function(info)
{
	if(!info)
	{this.setText('');}
	else
	{
		var item = undefined;
		switch(info.typeId)
		{
			case 2:item = $dataItems[info.itemId];break;
			case 3:item = $dataWeapons[info.itemId];break;
			case 4:item = $dataArmors[info.itemId];break;
			default:
		}
		
		this.setText(item ? item.description : '');
	}
}






//================================================================
//Window_ZzySCFSelect
//================================================================

function Window_ZzySCFSelect() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzySCFSelect.prototype = Object.create(Window_Selectable.prototype);
Window_ZzySCFSelect.prototype.constructor = Window_ZzySCFSelect;

Window_ZzySCFSelect.prototype.initialize = function() 
{
	var height = this.GetHeight();
	this._list = [];//存放数组
    Window_Selectable.prototype.initialize.call(this,0,0,Graphics.boxWidth,height);
	this.startY = 0;
	this.movePos = 0;
	
	this.setList();
	this.refresh();
	this.activate();//设置为活跃
};

Window_ZzySCFSelect.prototype.GetHeight = function()
{
	return this.getCount() ? this.fittingHeight(1) : 0;
}

Window_ZzySCFSelect.prototype.CallOpen = function()
{
	//位移过程
	this.Show();
	this.open();//呼叫打开	
	
}

Window_ZzySCFSelect.prototype.updateOpen = function() 
{
    if (this._opening) 
	{
        this.movePos -= Zzy.SCF.TempSpeed3;
        if(this.movePos <= 0)
		{
			this.movePos = 0;
            this._opening = false;
			this.refresh();
        }
		this.y = this.startY+this.movePos;
    }
};

Window_ZzySCFSelect.prototype.updateClose = function() 
{
    if (this._closing) 
	{
        this.movePos += Zzy.SCF.TempSpeed3;
        if(this.movePos >= this.height)
		{
			this.movePos = this.height;
            this._closing = false;
			this.Hide();//执行隐藏
        }
		this.y = this.startY+this.movePos;
    }
};

Window_ZzySCFSelect.prototype.open = function() 
{
	this.movePos = this.height;
    this._opening = true;
    this._closing = false;
};

Window_ZzySCFSelect.prototype.close = function() 
{
	this.movePos = 0;
    this._closing = true;
    this._opening = false;
};

Window_ZzySCFSelect.prototype.Hide = function()
{
	this.visible = false;
	this.opacity = 0;
}

Window_ZzySCFSelect.prototype.Show = function()
{
	this.visible = true;
	this.opacity = 255;	
}

Window_ZzySCFSelect.prototype.maxCols = function()
{
	return this.getCount();
}

Window_ZzySCFSelect.prototype.getCount = function()//指令数值
{
	var ev = $gameMap.event(Zzy.SCF.TempCallInfo.evId);
	var count = 0;
	count += $gameSystem.GetZzySCFIsCAllTake(ev) ? 1 : 0;
	count += $gameSystem.GetZzySCFIsCClose(ev) ? 1 : 0;
	return count;	
}

Window_ZzySCFSelect.prototype.setList = function()//设置列表
{
	this._list = [];
	var ev = $gameMap.event(Zzy.SCF.TempCallInfo.evId);
	if($gameSystem.GetZzySCFIsCAllTake(ev))
	{
		var info = {};
		info.text = $gameSystem.GetZzySCFCAllTakeText(ev);//显示文本
		info.commandId = 1;
		this._list.push(info);
	}
	if($gameSystem.GetZzySCFIsCClose(ev))
	{
		var info = {};
		info.text = $gameSystem.GetZzySCFCCloseText(ev);
		info.commandId = 2;
		this._list.push(info);
	}
}

Window_ZzySCFSelect.prototype.drawItem = function(index)
{
	var rect = this.itemRectForText(index);
	var align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(true);
	this.drawText(this._list[index].text, rect.x, rect.y, rect.width, align);
}

Window_ZzySCFSelect.prototype.itemTextAlign = function() {
    return 'center';
};

Window_ZzySCFSelect.prototype.drawAllItems = function() 
{
    var topIndex = this.topIndex();
	
	
    for (var i = 0; i < this.maxPageItems(); i++) 
	{
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_ZzySCFSelect.prototype.maxItems = function() 
{
    return this.getCount();
};

Window_ZzySCFSelect.prototype.processCursorMove = function()
{
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
};





Window_ZzySCFSelect.prototype.processHandling = function() //跳过键盘响应
{
    if (this.isOpenAndActive()) 
	{

    }
};


Window_ZzySCFSelect.prototype.processOk = function() 
{
    if (this.itemCan()) 
	{
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } 
	else 
	{
        this.playBuzzerSound();
    }
};

Window_ZzySCFSelect.prototype.playCancelSound = function()
{
	SoundManager.playCancel();
}

Window_ZzySCFSelect.prototype.playOkSound = function() 
{
	var info = this._list[this._index];
	
	if(!info)
	{
		SoundManager.playOk();
		return;
	}
	switch(info.commandId)
	{
		case 1:
			if(!Zzy.SCF.PlaySE(3))
			{SoundManager.playOk();}
		case 2:
			if(!Zzy.SCF.PlaySE(4))
			{SoundManager.playOk();}
	}
	
    
};

Window_ZzySCFSelect.prototype.playBuzzerSound = function() 
{
    SoundManager.playBuzzer();
};

Window_ZzySCFSelect.prototype.itemCan = function()
{
	return !!this._list[this.index()];
}

Window_ZzySCFSelect.prototype.OnProcessOk = function()
{
	var index = this.index();
	var info = this._list[index];
	
	if(info)
	{
		switch(info.commandId)
		{
			case 1://全部拿走
			this.AllTakeProcess();
			break;
			
			case 2://关闭宝箱
			this.PopScene();//退出
			break;
		}		
		
	}
}


Window_ZzySCFSelect.prototype.PopScene = function()
{
	if(SceneManager._scene instanceof Scene_ZzySCFChest)
	{
		SceneManager._scene.popScene();//退出
	}
	
}

Window_ZzySCFSelect.prototype.AllTakeProcess = function()//全部拿取
{
	if(SceneManager._scene instanceof Scene_ZzySCFChest)
	{
		SceneManager._scene.AllTakeChest();//
	}
	
	
}

//================================================================
//Window_ZzySCFYuanShen
//================================================================
//原神模式窗口
function Window_ZzySCFYuanShen() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzySCFYuanShen.prototype = Object.create(Window_ZzySCFChestBase.prototype);
Window_ZzySCFYuanShen.prototype.constructor = Window_ZzySCFYuanShen;

Window_ZzySCFYuanShen.prototype.initialize = function() 
{
	var w = this.getWidth();
	var h = this.getHeight();
    Window_ZzySCFChestBase.prototype.initialize.call(this,-w,-h,w,h);

	//缓入缓出
	this.fadeIn = false;
	this.fadeOut = false;
	
	this.froceClose = false;//强制关闭
	this.closeEvId = 0;//强制关闭时的ID
	this.emptyClear = false;//空白检测,优化效率

	this.CfadeFrame = 0;

	this._list = [];
	this.InitData();
	
	//设置选择点,开启活跃
	this.select(0);
	this.activate();
	this.visible = false;
};

Window_ZzySCFYuanShen.prototype.InitData = function()
{
	//设置透明度和出现
	this.opacity = $gameSystem._ZzySCFYWindowOp;
	this.visible = true;
	this.froceClose = false;
}

Window_ZzySCFYuanShen.prototype.getWidth = function()
{
	return $gameSystem._ZzySCFYWindowWidth;
	
}

Window_ZzySCFYuanShen.prototype.getHeight = function()
{
	var num = $gameSystem._ZzySCFYMaxList;
	num = num ? num : 1;
	return this.fittingHeight(num);
}

Window_ZzySCFYuanShen.prototype.update = function()
{
	if($gameSystem.GetZzySCFShowMode() !== 2)return;
	Window_ZzySCFChestBase.prototype.update.call(this);

	this.updateAutoSelect();//刷新自动选择目标
	this.updatePosition();//刷新窗口位置
	this.updateDyn();//刷新动态

}

Window_ZzySCFYuanShen.prototype.updateAutoSelect = function()
{
	if(!$gameSystem._ZzySCFYIsAutoOpen)return;
	if(this.visible)return;
	
	
	var mapId = $gameMap.mapId();
	var aList = $gameSystem.GetZzySCFYunChestFlag(mapId);
	
	for(var i=0;i<aList.length;i++)
	{
		var info = {mapId:mapId,evId:aList[i]};
		
		if(this.froceClose && this.closeEvId === info.evId)//同一个忽略
		{return;}
		
		if(this.CheckChestRange(info))//判断是否在范围中
		{
			Zzy.SCF.TempCallInfo = info;
			
			this.select(0);
			this.refreshList();
			this.refresh();
			return;
		}
	}

}


Window_ZzySCFYuanShen.prototype.updateDyn = function()
{
	if(this.CheckChestEmpty())//如果为空则不会显示
	{this.ExeClose();}
	else
	{
		if(this.CheckChestRange())//检测是否在范围中,确认是否显示
		{
			if(this.froceClose)
			{this.ExeClose();}	
			else
			{this.ExeOpen();}
		}
		else
		{
			this.froceClose = false;
			this.ExeClose();
		}		
	}
	
}

Window_ZzySCFYuanShen.prototype.CheckChestEmpty = function()
{
	if(!Zzy.SCF.TempCallInfo)return false;
	return $gameSystem.IsZzySCFYunEmptyCheck(Zzy.SCF.TempCallInfo.mapId,Zzy.SCF.TempCallInfo.evId);
}



Window_ZzySCFYuanShen.prototype.ExeOpen = function()
{
	this.fadeIn = true;
	this.fadeOut = false;	
		this.visible = true;
		if(this.CfadeFrame < $gameSystem._ZzySCFYFadeFrame)
		{this.CfadeFrame++;}
		else
		{this.CfadeFrame = $gameSystem._ZzySCFYFadeFrame;}
		//this.opacity = $gameSystem._ZzySCFYWindowOp * this.CfadeFrame / $gameSystem._ZzySCFYFadeFrame;
		this.alpha = this.CfadeFrame / $gameSystem._ZzySCFYFadeFrame;
		
	this.emptyClear = true;//等待检测
}

Window_ZzySCFYuanShen.prototype.ExeClose = function()
{
		this.fadeIn = false;
		this.fadeOut = true;	
		if(this.CfadeFrame > 0)
		{this.CfadeFrame--;}
		else
		{
			this.CfadeFrame = 0;
			this.visible = false;
			//关闭后此处需要进行空白检测
			if(this.emptyClear)
			{
				this.emptyClear = false;
				var isEmpty = true;
				//进行检测
				var info = $gameSystem.GetZzySCFStorage(Zzy.SCF.TempCallInfo.mapId,Zzy.SCF.TempCallInfo.evId);
				for(var i=0;i<info.length;i++)
				{
					if(info[i])
					{
						isEmpty = false;
						break;
					}
				}
				if(isEmpty)
				{
					$gameSystem.AddZzySCFYunEmptyCheck(Zzy.SCF.TempCallInfo.mapId,Zzy.SCF.TempCallInfo.evId);//加入空白
				}
			}
			
			
		}
		//this.opacity = $gameSystem._ZzySCFYWindowOp * this.CfadeFrame / $gameSystem._ZzySCFYFadeFrame;
		this.alpha = this.CfadeFrame / $gameSystem._ZzySCFYFadeFrame;
}

Window_ZzySCFYuanShen.prototype.updatePosition = function()
{
	
	if(!Zzy.SCF.TempCallInfo)return;
	if($gameMap.mapId() !== Zzy.SCF.TempCallInfo.mapId)return;
	
	var ev = $gameMap.event(Zzy.SCF.TempCallInfo.evId);
	if(ev)
	{
		this.x = ev.screenX() + $gameSystem._ZzySCFYOffsetX;
		this.y = ev.screenY() + $gameSystem._ZzySCFYOffsetY;
		
		
		if($gameSystem._ZzySCFYIsLimitWindow)//限制边界
		{
			var tw = this.x+this.width;
			var th = this.y+this.height;
			
			if(tw > Graphics.boxWidth)
			{this.x -= (tw-Graphics.boxWidth);}
			else if(this.x < 0)
			{this.x = 0;}
		
			if(th > Graphics.boxHeight)
			{this.y -= (th-Graphics.boxHeight);}
			else if(this.y < 0)
			{this.y = 0;}
		}
	}

}

Window_ZzySCFYuanShen.prototype.CheckChestRange = function(info)//检测范围
{
	var tempInfo = undefined;
	if(!info)
	{tempInfo = Zzy.SCF.TempCallInfo;}
	else
	{tempInfo = info;}
	
	if(!tempInfo)return false;
	if($gameMap.mapId() !== tempInfo.mapId)return false;
	
	var ev = $gameMap.event(tempInfo.evId);
	if(!ev)return false;
	
	if(Math.abs(ev.x - $gamePlayer.x) <= $gameSystem._ZzySCFYTakeRange && 
	Math.abs(ev.y - $gamePlayer.y) <= $gameSystem._ZzySCFYTakeRange)
	{
		//判断宝箱内道具成品数
		var storage = $gameSystem.GetZzySCFStorage(tempInfo.mapId,tempInfo.evId);
		if(!storage || !storage.length)return false;

		return true;
	}
	return false;
	
}


Window_ZzySCFYuanShen.prototype.itemTextAlign = function() 
{
    return 'center';
};

Window_ZzySCFYuanShen.prototype.drawAllItems = function() 
{
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) 
	{
        var index = topIndex + i;
        if (index < this.maxItems()) 
		{
            this.drawItem(index);
        }
    }
};

Window_ZzySCFYuanShen.prototype.drawItem = function(index)
{
	var info = this._list[index];
	if(info)
	{	
		var rect = this.itemRectForText(index);
		var align = this.itemTextAlign();

		this.changePaintOpacity(true);
		
		var item = undefined;
		this.resetTextColor();
		switch(info.typeId)
		{
			case 1://金币
				item = {};
				item.iconIndex = $gameSystem._ZzySCFCoinIcon;
				item.name = this.currencyUnit();
				item.isCoin = true;
				this.changeTextColor($gameSystem.GetZzySCFCoinColor());
			break;
			case 2:item = $dataItems[info.itemId];
			this.setZzySCFItemColor(item);
			break;
			case 3:item = $dataWeapons[info.itemId];
			this.setZzySCFItemColor(item);
			break;
			case 4:item = $dataArmors[info.itemId];
			this.setZzySCFItemColor(item);
			break;
		}
		
		
		if(item)
		{
			//透明度
			this.drawItemBk(rect,index);//绘制底色框	
			
			var numberWidth = 0;
			if(item.isCoin)
			{
				numberWidth = this.coinWidth();
			}
			else
			{
				numberWidth = this.numberWidth();
			}			
			
			this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
			this.drawItemNumber(info, rect.x, rect.y, rect.width);
		}

	}

}

Window_ZzySCFYuanShen.prototype.setZzySCFItemColor = function(item)
{
	if(!item.zzySCF || !item.zzySCF.color)
	{this.resetTextColor();}
	else
	{this.changeTextColor(item.zzySCF.color);}
}


Window_ZzySCFYuanShen.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ZzySCFYuanShen.prototype.drawItemBk = function(rect,index)
{
	
	var dis = $gameSystem._ZzySCFYDistance;
	var nRect = {x:rect.x+dis,y:rect.y+dis,width:rect.width-dis*2,height:rect.height-dis*2};
	var Rect1 = {};
	var Rect2 = {};
	
	var c1 = $gameSystem._ZzySCFYColor1;
	var c2 = $gameSystem._ZzySCFYColor2;
	
	var isVer = $gameSystem._ZzySCFYIsHorShow ? false : true;
	
	if(isVer)
	{
		Rect1 = {x:nRect.x,y:nRect.y,width:nRect.width,height:nRect.height/2};
		Rect2 = {x:nRect.x,y:nRect.y+nRect.height/2,width:nRect.width,height:nRect.height/2};			
	}
	else
	{
		Rect1 = {x:nRect.x,y:nRect.y,width:nRect.width/2,height:nRect.height};
		Rect2 = {x:nRect.x+nRect.width/2,y:nRect.y,width:nRect.width/2,height:nRect.height};		
	}
	
	this.contents.gradientFillRect(Rect1.x,Rect1.y,Rect1.width,Rect1.height,c2,c1,isVer);
	this.contents.gradientFillRect(Rect2.x,Rect2.y,Rect2.width,Rect2.height,c1,c2,isVer);
}




Window_ZzySCFYuanShen.prototype.maxItems = function() //最大数值
{
    return this._list ? this._list.length : 0;
};


Window_ZzySCFYuanShen.prototype.reClick = function()
{
	this.froceClose = false;
	this.select(0);
}


Window_ZzySCFYuanShen.prototype.refreshList = function()//刷新List
{
	this.evId = Zzy.SCF.TempCallInfo.evId;
	this.mapId = Zzy.SCF.TempCallInfo.mapId;
	//获取list
	this._list = $gameSystem.GetZzySCFStorage(this.mapId,this.evId);

}

Window_ZzySCFYuanShen.prototype.drawItemNumber = function(info, x, y, width) 
{
    if (this.needsNumber()) 
	{
        this.drawText(String(info.value), x, y, width, 'right');
    }
};

Window_ZzySCFYuanShen.prototype.needsNumber = function() 
{
    return true;
};

Window_ZzySCFYuanShen.prototype.numberWidth = function() 
{
    return this.textWidth(Zzy.Param.SCFCountNumWidth);
};

Window_ZzySCFYuanShen.prototype.coinWidth = function()
{
	return this.textWidth(Zzy.Param.SCFCountCoinWidth);
}


Window_ZzySCFYuanShen.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

Window_ZzySCFYuanShen.prototype.processCursorMove = function() 
{
    if (this.isCursorMovable()) 
	{
        var lastIndex = this.index();

        if (this.index() !== lastIndex) 
		{
			this.playSelectSound();
        }
    }
};

Window_ZzySCFYuanShen.prototype.onTouch = function(triggered)
{
    var lastIndex = this.index();
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (hitIndex === this.index()) {
            if (triggered && this.isTouchOkEnabled()) {
                this.processOk();
            }
        } else if (this.isCursorMovable()) {
            this.select(hitIndex);
        }
    } else if (this._stayCount >= 10) {
        if (y < this.padding) {
            this.cursorUp();
        } else if (y >= this.height - this.padding) {
            this.cursorDown();
        }
    }
    if (this.index() !== lastIndex) {
        this.playSelectSound();
    }
};



Window_ZzySCFYuanShen.prototype.playSelectSound = function()
{
	if(!Zzy.SCF.PlaySE(5))
	{SoundManager.playCursor();}		
}


Window_ZzySCFYuanShen.prototype.processTouch = function() 
{
	if(!this.visible)return;
    if (this.isOpenAndActive()) 
	{
		if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) 
	    {
            this._touching = true;
            this.onTouch(true);
        } else if (TouchInput.isCancelled()) {
            if (this.isCancelEnabled()) {
                this.processCancel();
            }
        }
        if (this._touching) {
            if (TouchInput.isPressed()) {
                this.onTouch(false);
            } else {
                this._touching = false;
            }
        }
    } else {
        this._touching = false;
    }
};


Window_ZzySCFYuanShen.prototype.itemCan = function()
{
	return !!this._list[this.index()];
}


Window_ZzySCFYuanShen.prototype.processOk = function() 
{
	if(!this.visible)return;
    if (this.itemCan()) 
	{
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } 
	else 
	{
        this.playBuzzerSound();
    }
};


Window_ZzySCFYuanShen.prototype.processCancel = function() 
{
	this.playCancelSound();
    this.updateInputData();
    this.callCancelHandler();
};

Window_ZzySCFYuanShen.prototype.playCancelSound = function()
{
	SoundManager.playCancel();
}

Window_ZzySCFYuanShen.prototype.playOkSound = function() 
{
	if(!Zzy.SCF.PlaySE(1))
	{SoundManager.playOk();}	
};

Window_ZzySCFYuanShen.prototype.playBuzzerSound = function() 
{
	if(!Zzy.SCF.PlaySE(2))
    {SoundManager.playBuzzer();}
};

Window_ZzySCFYuanShen.prototype.OnProcessOk = function()
{
	//双击取出道具
	var index = this.index();
	var info = this._list[index];
	if(info)
	{
		this.GetListInfo(index);
		
		var value = info.value;//数量
		var id = info.itemId;
		
		if($gameSystem._ZzySCFIsCAutoLine)
		{
			//向前遍历
			
			var tList = $gameSystem.GetZzySCFStorage(this.mapId,this.evId);
			var len = tList.length;
			
			for(var i=index;i<len-1;i++)
			{
				tList[i] = tList[i+1];
			}
			tList[len-1] = undefined;
		}
		else
		{
			$gameSystem._ZzySCFStorage[this.mapId][this.evId][index] = undefined;
		}
		this.refreshList();//刷新list
		this.refresh();
		return true;
	}
	return false;
}

Window_ZzySCFYuanShen.prototype.GetListInfo = function(index)
{
		var info = this._list[index];
	
		if(info)
		{
			var value = info.value;//数量
			var id = info.itemId;			
			
			switch(info.typeId)
			{
				case 1:$gameParty.gainGold(value);break;
				case 2:
				var item = $dataItems[id];
				$gameParty.gainItem(item,value);
				break;
				case 3:
				var weapon = $dataWeapons[id];
				$gameParty.gainItem(item,value);
				break;
				case 4:
				var armor = $dataArmors[id];
				$gameParty.gainItem(item,value);
				break;
			}				
		}	
}





//================================================================
//DataManager
//================================================================
Zzy.SCF.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function()
{
	if (!Zzy.SCF.DataManager_isDatabaseLoaded.call(this)) return false;
	
	//添加标签内容
	this.ZzySCFLoadNoteCase1($dataItems);//物品
	this.ZzySCFLoadNoteCase1($dataArmors);//护甲
	this.ZzySCFLoadNoteCase1($dataWeapons);//武器
	return true;
}


//================================================================
//DataManager
//================================================================

DataManager.ZzySCFLoadNoteCase1 = function(objArr)
{
  for (var i = 1; i < objArr.length; i++) 
  {
    var obj = objArr[i];
    var noteData = obj.note.split(/[\r\n]+/);
	
	obj.zzySCF = obj.zzySCF || {};
	
	for(var j=0;j<noteData.length;j++)
	{
		var lineStr = noteData[j];
		
		if(lineStr.match(/<ZZYSCF COLOR:[ ](.*)>/i))//显示颜色
		{
			var color = String(RegExp.$1);
			obj.zzySCF['color'] = color;
		}
	}
  }	
}




//================================================================
//Game_Interpreter
//================================================================
Zzy.SCF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Zzy.SCF.Game_Interpreter_pluginCommand.call(this,command,args);
	if(command === 'ZzySCF')
	{
		this.ZzySCFCommand(args);
	}
	
}

Game_Interpreter.prototype.ZzySCFCommand = function(args)
{
	var command = String(args[0]);

	switch(command)
	{
		case 'OverlapMode':
		var mode = Zzy.SCF.OverlapModeToID(String(args[1]));
		$gameSystem._ZzySCFOverlapMode = mode;
		break;	
		
		case 'ShowMode':
		var mode = Zzy.SCF.ShowModeToID(String(args[1]));
		$gameSystem._ZzySCFShowMode = mode;
		break;
		
		case 'IsFilterText':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFIsFilterText = enable;
		break;
		
		case 'CoinIcon':
		var iconIndex = parseInt(args[1]);
		$gameSystem._ZzySCFCoinIcon = iconIndex;
		break;
		
		case 'CMaxCols':
		var cols = parseInt(args[1]);
		$gameSystem._ZzySCFCMaxCols = cols;
		break;
		
		case 'IsCAllTake':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFIsCAllTake = enable;
		break;
		
		case 'CAllTakeText':
		var tText = String(args[1]);
		$gameSystem._ZzySCFCAllTakeText = tText;
		break;
		
		case 'IsCClose':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFIsCClose = enable;
		break;
		
		case 'CCloseText':
		var tText = String(args[1]);
		$gameSystem._ZzySCFCCloseText = tText;
		break;
		
		case 'IsCAutoLine':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFIsCAutoLine = enable;
		break;
		
		case 'YMaxCols':
		var cols = parseInt(args[1]);
		$gameSystem._ZzySCFYMaxCols = cols;
		break;
		
		case 'YMaxList':
		var list = parseInt(args[1]);
		$gameSystem._ZzySCFYMaxList = list;
		break;
		
		case 'YWindowWidth':
		var width = parseInt(args[1]);
		$gameSystem._ZzySCFYWindowWidth = width;
		break;
		
		case 'YWindowOp':
		var op = parseInt(args[1]);
		$gameSystem._ZzySCFYWindowOp = op;
		break;
		
		case 'YTakeRange':
		var range = parseInt(args[1]);
		$gameSystem._ZzySCFYTakeRange = range;
		break;
		
		case 'YColor1':
		var color = String(args[1]);
		$gameSystem._ZzySCFYColor1 = color;
		break;
		
		case 'YColor2':
		var color = String(args[1]);
		$gameSystem._ZzySCFYColor2 = color;
		break;
		
		case 'YOffsetX':
		var ofx = Number(args[1]);
		$gameSystem._ZzySCFYOffsetX = ofx;
		break;
		
		case 'YOffsetY':
		var ofy = Number(args[1]);
		$gameSystem._ZzySCFYOffsetY = ofy;
		break;

		case 'YFadeFrame':
		var fFrame = parseInt(args[1]);
		$gameSystem._ZzySCFYFadeFrame = fFrame;
		break;
		
		case 'YDistance':
		var dis = parseInt(args[1]);
		$gameSystem._ZzySCFYDistance = dis;
		break;
		
		case 'YIsHorShow':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFYIsHorShow = enable;
		break;
		
		case 'YIsAutoOpen':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFYIsAutoOpen = enable;
		break;
		
		case 'YIsLimitWindow':
		var enable = eval(String(args[1]));
		$gameSystem._ZzySCFYIsLimitWindow = enable;		
		break;

		case 'CoinColor':
		var color = String(args[1]);
		$gameSystem._ZzySCFCoinColor = color;
		break;
	}
}

Zzy.SCF.Game_Interpreter_update = Game_Interpreter.prototype.update;
Game_Interpreter.prototype.update = function() 
{
	if(this.eventId())
	{
		var ev = $gameMap.event(this.eventId());
		if(ev && ev.ZzySCFIsChest())//代表是箱子
		{
			this._ZzySCFIsChestMode = true;//开启箱子模式
			this._ZzySCFWaitCall = true;
		}
	}
	
	Zzy.SCF.Game_Interpreter_update.call(this);
	
	var isFirst = false;
	if(this._ZzySCFWaitCall && !this.isRunning())//做呼叫准备
	{
		this._ZzySCFWaitCall = false;
		$gameSystem.ZzySCFSetWaitCall(this.ZzySCFCallStorageInfo());
		isFirst = true;
	}
	this._ZzySCFIsChestMode = false;//关闭宝箱收集模式
	
	if(!isFirst)
	{	
		if($gameSystem._ZzySCFWaitOfChest && !this.isRunning())
		{
			$gameSystem.ZzySCFSetWaitCall($gameSystem._ZzySCFWaitOfChest);
			$gameSystem._ZzySCFWaitOfChest = undefined;
		}		
	}

	
};





Game_Interpreter.prototype.ZzySCFCallStorageInfo = function()//制作呼叫仓库数据信息
{
	var info = {};
	info.evId = this.eventId();
	info.mapId = $gameMap.mapId();
	

	return info;
}



//呼叫金币函数
Zzy.SCF.Game_Interpreter_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function() 
{
	if(this._ZzySCFIsChestMode)
	{
		var value = this.operateValue(this._params[0], this._params[1], this._params[2]);
		if(value >= 0)
		{
			$gameSystem.ZzySCFRecordInfo(this.eventId(),value,0,1);
			return true;
		}
	}
	return Zzy.SCF.Game_Interpreter_command125.call(this);

};


//呼叫道具函数
Zzy.SCF.Game_Interpreter_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function() 
{


	if(this._ZzySCFIsChestMode)
	{
		var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
		if(value >= 0)
		{
			$gameSystem.ZzySCFRecordInfo(this.eventId(),value,this._params[0],2);
			return true;
		}	
	}
	
	return Zzy.SCF.Game_Interpreter_command126.call(this);

};

//呼叫武器函数
Zzy.SCF.Game_Interpreter_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function() 
{
	if(this._ZzySCFIsChestMode)
	{
		var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
		if(value >= 0)
		{
			$gameSystem.ZzySCFRecordInfo(this.eventId(),value,this._params[0],3);
			return true;
		}
	}
	return Zzy.SCF.Game_Interpreter_command127.call(this);

};

//呼叫护甲函数
Zzy.SCF.Game_Interpreter_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function() 
{
	if(this._ZzySCFIsChestMode)
	{
		var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
		if(value >= 0)
		{
			$gameSystem.ZzySCFRecordInfo(this.eventId(),value,this._params[0],4);	
			return true;
		}
	}
	return Zzy.SCF.Game_Interpreter_command128.call(this);

};

//呼叫文本函数
Zzy.SCF.Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
Game_Interpreter.prototype.command101 = function()
{
	if($gameSystem._ZzySCFIsFilterText && this._ZzySCFIsChestMode)//是否忽略脚本
	{
		return true;
	}
	
	return Zzy.SCF.Game_Interpreter_command101.call(this);
}


//============================================================================================
//Game_Event
//============================================================================================

Zzy.SCF.Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() //加载事件信息
{
	Zzy.SCF.Game_Event_setupPage.call(this);
	this.ZzySCFInitData();//调用初始化数据
}
	
	

Game_Event.prototype.ZzySCFInitData = function()
{
	if (!this.page()) return;

  var list = this.list();
  var len = list.length;

	this.zzySCF = {};
	
  for (var i = 0; i < len; ++i) 
  {
    var ev = list[i];
	
	
    if ([108, 408].contains(ev.code)) 
	{
		
      if(ev.parameters[0].match(/<ZZYSCF[ ]CHEST>/i))//设置为箱子
	  {
		 this.zzySCF.IsChest = true;
	  }  
	  
    }
  }	

}
Zzy.SCF.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) 
{
	Zzy.SCF.Game_Event_initialize.call(this,mapId,eventId);
	this._ZzySCFNotRepeat = 0;

};



Zzy.SCF.Game_Event_start = Game_Event.prototype.start;
Game_Event.prototype.start = function()//玩家产生触碰时
{
	Zzy.SCF.Game_Event_start.call(this);
	
	
	if($gameSystem.IsZzySCFStorage($gameMap.mapId(),this.eventId()) && this._ZzySCFNotRepeat <= 0)
	{
		$gameSystem._ZzySCFWaitOfChest = {mapId:$gameMap.mapId(),evId:this.eventId()};	
		this._ZzySCFNotRepeat = Zzy.SCF.TempNotRepeatFrame;//忽略三帧
	}
}

Zzy.SCF.Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function()
{
	Zzy.SCF.Game_Event_update.call(this);
	this.updateZzySCFNotRepeat();
	
}
Game_Event.prototype.updateZzySCFNotRepeat = function()
{
	if(!this._ZzySCFNotRepeat)return;
	
	if(this._ZzySCFNotRepeat > 0){this._ZzySCFNotRepeat--;}
	else{this._ZzySCFNotRepeat = 0;}
}




Game_Event.prototype.MakeZzySCFInfo = function()
{
	var info = {};
	info.mapId = $gameMap.mapId();
	info.evId = this.eventId();
	return info;
}



Game_Event.prototype.ZzySCFIsChest = function()
{
	if(!this.zzySCF || !this.zzySCF.IsChest)return false;
	return true;
}

Game_Event.prototype.ZzySCFExeChestCommand = function()
{
	
	
	
}

//============================================================================================
//Game_Interpreter
//============================================================================================
Zzy.SCF.Game_Interpreter_initialize = Game_Interpreter.prototype.initialize;
Game_Interpreter.prototype.initialize = function(depth) 
{
	Zzy.SCF.Game_Interpreter_initialize.call(this,depth);
	this._ZzySCFEventId = 0;//使用事件ID
	
};



//------------------------------Zzy.SCF.Function-------------------------------

Zzy.SCF.OverlapModeToID = function(str)
{
	switch(str)
	{
		case 'Single':return 1;
		case 'Overlap':return 2;	
		case 'Event':return 3;
	}
	console.log('Error:来自LiuYue_SeniorChest,检查叠加模式填写是否正确');return;
	return 1;
}

Zzy.SCF.ShowModeToID = function(str)
{
	switch(str)
	{
		case 'Chest':return 1;
		case 'YuanShen':return 2;	
	}
	console.log('Error:来自LiuYue_SeniorChest,检查显示模式填写是否正确');return;
	return 1;
}

Zzy.SCF.PlaySE = function(soundID)//播放声音
{
	var se = Zzy.Param.SCFAllSE[soundID];
	if(se && se.name)
	{
		AudioManager.playSe(se);
		return true;
	}
	return false;
}
