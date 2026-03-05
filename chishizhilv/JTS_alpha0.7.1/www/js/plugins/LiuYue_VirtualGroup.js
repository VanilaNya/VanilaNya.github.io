/*:
 * @plugindesc v1.01 LiuYue_VirtualGroup 虚拟血条
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 * 为战斗单位提供虚拟的属性条,包括HP,MP,TP,以及通过变量ID管理的自定义属性条
 *
 *
 *
 *---------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 *
 *---------------------------------------------------------
 *
 *
 * 注意,关于颜色码提供了两种输入格式 分别是 
 *
 *           一                #000000~#ffffff -十六进制颜色码    对应#(红)(绿)(蓝)  
 *                                                       
 *           二                rgba(0~255,0~255,0~255,0~1) -颜色格式字符串    对应 rgba(红,绿,蓝,透明度)
 *                           
 * 
 * 本插件对一个完整的血条信息分为了一下的部分
 *
 * =============================================
 *   背景图片 HP三层 MP三层 TP三层 前景图片
 * =============================================
 * 其中HP,MP,TP,这三张图片素材,存放在img/system/文件夹下,名称随意
 * 准备一张能被1x3切分的图片素材,以提供HP条,MP条,TP条
 *   
 * 条组素材三层包括:前层条,深层动态条,底层背景条
 *
 * 属性条的长度,将会是默认图片素材的宽度
 *
 * 
 *
 * =============================================
 *              自定义属性条图片   
 * =============================================
 * 准备一张能被1x3切分的图片素材,以提供给自定义的属性条,存放在img/system/文件夹下,名称随意
 *
 *
 * 
 *
 *
 *
 *
 * =============================================
 *                    公式   
 * =============================================
 * 关于公式,其实是一段js代码,其中提供了一些可以直接使用的变量名
 *
 * v[ID]              //全局变量
 * V[ID]              //全局变量
 * s[ID]              //全局开关
 * S[ID]              //全局开关
 * obj                //战斗对象(角色或是敌人)
 *
 *
 *
 *
 * 以下是可以调用的插件指令
 *---------------------Plugin Command---------------------
 *
 *
 *                      无
 *
 *
 * 以下是可以调用的脚本函数
 *---------------------Plugin Command---------------------
 *
 *
 *                      无
 *
 *
 *以下是插件用到的一些备注信息
 *---------------------Data Case--------------------
 *
 * 注意:以下的设置,属于针对目标的个性化设置,优先级高于插件参数中的设置
 *
 * 请在 数据库 - 敌人/玩家 - 备注 中添加效果 
 *
 *
 *
 * <ZzyVGF IsVGroup: x(true/false)>            //是否使用角色的整体虚拟条组,对这个角色进行单独设置,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF ShowPos: x(up/center/down)>         //角色的整体条组会在角色图片上方正中心显示还是在下方正中心显示,选up代表上方,选down代表下方,优先级高于插件参数
 *
 * <ZzyVGF Ofx: x>                             //角色的整体条组显示后的偏移位置微调X,可以输入一个正负整数,优先级高于插件参数
 * <ZzyVGF Ofy: x>                             //角色的整体条组显示后的偏移位置微调Y,可以输入一个正负整数,优先级高于插件参数
 *
 * <ZzyVGF ShowMode: x(always/select)>         //角色的血条在何时会进行显示,选择always代表角色存活期间都会显示,选择select代表角色被技能选择期间进行显示,优先级高于插件参数
 *
 * <ZzyVGF BkGroupPic: x>                      //显示角色的背景血条外框的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息,优先级高于插件参数
 * <ZzyVGF BkGroupPicX: x>                     //显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值,优先级高于插件参数
 * <ZzyVGF BkGroupPicY: x>                     //显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值,优先级高于插件参数
 * <ZzyVGF FsGroupPic: x>                      //显示角色的前景血条外框的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息,优先级高于插件参数
 * <ZzyVGF FsGroupPicX: x>                     //显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值,优先级高于插件参数
 * <ZzyVGF FsGroupPicY: x>                     //显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值,优先级高于插件参数
 * <ZzyVGF InOutFrame: x>                      //角色血条从完全透明渐入到不透明,从不透明到渐出到完全透明的帧数,默认值为30帧数,优先级高于插件参数
 *
 *
 * <ZzyVGF IsNmInfoShow: x(true/false)>        //是否显示角色名称信息,是否显示角色的名字,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF NmInfoFormat: x>                    //显示角色的名字,%1会被替换为角色的名称,%2会被替换为同名角色的后缀编号(A,B...)如果存在的话,优先级高于插件参数
 * <ZzyVGF NmInfoOfx: x>                       //显示的偏移量X,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF NmInfoOfy: x>                       //显示的偏移量Y,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF NmInfoTSize: x>                     //角色名称信息字体大小,默认值为20,优先级高于插件参数
 * <ZzyVGF NmInfoTColor: x>                    //角色名称信息字体颜色,默认值#ff44ff,优先级高于插件参数
 * <ZzyVGF NmInfoBSize: x>                     //角色名称信息字体描边宽,字体边框的宽度大小,默认值为2,优先级高于插件参数
 * <ZzyVGF NmInfoBColor: x>                    //角色名称信息字体描边颜色,字体边框的颜色,默认值#44ff44,优先级高于插件参数
 *
 *
 *--------HP条---------
 *
 * <ZzyVGF IsVHp: x(true/false)>               //是否使用角色的血条组,对这个角色进行单独设置,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF HPGroupPic: x>                      //显示角色条的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息,优先级高于插件参数
 * <ZzyVGF HPOfx: x>                           //角色的血条显示后的偏移位置微调X,可以输入一个正负整数,优先级高于插件参数
 * <ZzyVGF HPOfy: x>                           //角色的血条显示后的偏移位置微调Y,可以输入一个正负整数,优先级高于插件参数
 *
 *
 * <ZzyVGF IsHpInfoShow: x(true/false)>        //是否显示角色的具体血量,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF HpInfoMode: x(value/percent)>       //角色的血量信息以文字形式进行显示,value代表精确数值,percent代表血量百分比,优先级高于插件参数
 * <ZzyVGF HpValueInfoT: x>                    //显示血量信息的数值,%1会被替换为角色当前血量     %2会被替换为角色最大血量,优先级高于插件参数
 * <ZzyVGF HpPercentInfoT: x>                  //显示血量信息的数值,%1会被替换为当前血量与最大血量的百分比,优先级高于插件参数
 * <ZzyVGF HpInfoOfx: x>                       //显示的偏移量X,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF HpInfoOfy: x>                       //显示的偏移量Y,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF HpInfoTSize: x>                     //角色血量信息字体大小,优先级高于插件参数
 * <ZzyVGF HpInfoTColor: x>                    //角色血量信息字体颜色,可以输入两种颜色字符串,优先级高于插件参数              
 * <ZzyVGF HpInfoBSize: x>                     //角色血量信息字体描边宽,字体边框的宽度大小,优先级高于插件参数
 * <ZzyVGF HpInfoBColor: x>                    //角色血量信息字体描边颜色,字体边框的颜色,可以输入两种颜色字符串,优先级高于插件参数
 * <ZzyVGF HpInfoOriX: x1(0~2) x2>             //角色血条动态卷动 x1需要输入指定的血条类型,0代表背景血条,1代表深层血条,2代表前层血条,x2需输入滚动速度,可以是一个正负小数,优先级高于插件参数
 *
 *
 *
 *
 *--------MP条---------
 *
 * <ZzyVGF IsVMp: x(true/false)>               //是否使用角色的蓝条组,对这个角色进行单独设置,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF MPGroupPic: x>                      //显示角色条的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息,优先级高于插件参数
 * <ZzyVGF MpOfx: x>                           //角色的蓝条显示后的偏移位置微调X,可以输入一个正负整数,优先级高于插件参数
 * <ZzyVGF MpOfy: x>                           //角色的蓝条显示后的偏移位置微调Y,可以输入一个正负整数,优先级高于插件参数
 *
 *
 * <ZzyVGF IsMpInfoShow: x(true/false)>        //是否显示角色的具体蓝量,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF MpInfoMode: x(value/percent)>       //角色的蓝量信息以文字形式进行显示,value代表精确数值,percent代表蓝量百分比,优先级高于插件参数
 * <ZzyVGF MpValueInfoT: x>                    //显示蓝量信息的数值,%1会被替换为角色当前蓝量     %2会被替换为角色最大蓝量,优先级高于插件参数
 * <ZzyVGF MpPercentInfoT: x>                  //显示蓝量信息的数值,%1会被替换为当前蓝量与最大蓝量的百分比,优先级高于插件参数
 * <ZzyVGF MpInfoOfx: x>                       //显示的偏移量X,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF MpInfoOfy: x>                       //显示的偏移量Y,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF MpInfoTSize: x>                     //角色蓝量信息字体大小,优先级高于插件参数
 * <ZzyVGF MpInfoTColor: x>                    //角色蓝量信息字体颜色,可以输入两种颜色字符串,优先级高于插件参数              
 * <ZzyVGF MpInfoBSize: x>                     //角色蓝量信息字体描边宽,字体边框的宽度大小,优先级高于插件参数
 * <ZzyVGF MpInfoBColor: x>                    //角色蓝量信息字体描边颜色,字体边框的颜色,可以输入两种颜色字符串,优先级高于插件参数
 * <ZzyVGF MpInfoOriX: x1(0~2) x2>             //角色蓝量动态卷动 x1需要输入指定的蓝条类型,0代表背景蓝条,1代表深层蓝条,2代表前层蓝条,x2需输入滚动速度,可以是一个正负小数,优先级高于插件参数
 *
 *
 *
 *--------TP条---------
 *
 * <ZzyVGF IsVTp: x(true/false)>               //是否使用角色的Tp条组,对这个角色进行单独设置,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF TPGroupPic: x>                      //显示角色条的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息,优先级高于插件参数
 * <ZzyVGF TpOfx: x>                           //角色的Tp条显示后的偏移位置微调X,可以输入一个正负整数,优先级高于插件参数
 * <ZzyVGF TpOfy: x>                           //角色的Tp条显示后的偏移位置微调Y,可以输入一个正负整数,优先级高于插件参数
 *
 *
 * <ZzyVGF IsTpInfoShow: x(true/false)>        //是否显示角色的具体Tp量,优先级高于插件参数,这可以是一个公式
 * <ZzyVGF TpInfoMode: x(value/percent)>       //角色的Tp量信息以文字形式进行显示,value代表精确数值,percent代表Tp量百分比,优先级高于插件参数
 * <ZzyVGF TpValueInfoT: x>                    //显示Tp量信息的数值,%1会被替换为角色当前Tp量     %2会被替换为角色最大Tp量,优先级高于插件参数
 * <ZzyVGF TpPercentInfoT: x>                  //显示Tp量信息的数值,%1会被替换为当前Tp量与最大Tp量的百分比,优先级高于插件参数
 * <ZzyVGF TpInfoOfx: x>                       //显示的偏移量X,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF TpInfoOfy: x>                       //显示的偏移量Y,可以是一个正负整数值,默认值为0,优先级高于插件参数
 * <ZzyVGF TpInfoTSize: x>                     //角色Tp量信息字体大小,优先级高于插件参数
 * <ZzyVGF TpInfoTColor: x>                    //角色Tp量信息字体颜色,可以输入两种颜色字符串,优先级高于插件参数              
 * <ZzyVGF TpInfoBSize: x>                     //角色Tp量信息字体描边宽,字体边框的宽度大小,优先级高于插件参数
 * <ZzyVGF TpInfoBColor: x>                    //角色Tp量信息字体描边颜色,字体边框的颜色,可以输入两种颜色字符串,优先级高于插件参数
 * <ZzyVGF TpInfoOriX: x1(0~2) x2>             //角色Tp量动态卷动 x1需要输入指定的Tp条类型,0代表背景Tp条,1代表深层Tp条,2代表前层Tp条,x2需输入滚动速度,可以是一个正负小数,优先级高于插件参数
 *
 *
 *
 *
 *
 *--------自定义条---------
 *
 * <ZzyVGF CusUse: x,x...>                     //是否激活角色自定义条的功能,x需要填写参数中设置的自定义条ID值,可通过逗号进行多选,注意ID从1开始计算
 * 例: <ZzyVGF CusUse: 1>   <ZzyVGF CusUse: 1,2,3>
 *
 * <ZzyVGF CusCurVar: x1 x2>                    //设置角色指定目前自定义条的变量ID,x1需要输入自定义条ID(可通过逗号进行多选),x2需要输入变量ID
 * <ZzyVGF CusMaxVar: x1 x2>                    //设置角色指定最大自定义条的变量ID,x1需要输入自定义条ID(可通过逗号进行多选),x2需要输入变量ID
 * 例: <ZzyVGF CusCurVar: 1 3>  <ZzyVGF CusMaxVar: 4,5 1>
 * 
 *
 *----------------------------------------------------------
 *
 *
 *
 * 我叫坂本：v1.01 修复出现玩家血条存档将导致的崩溃问题,修复select模式下有概率导致血条不会隐藏的问题,添加血条卷动属性
 * 我叫坂本：v1.00 完成插件功能
 *
 *----------------------------------------------------------
 *
 *
 *
 *
 * @param ---角色虚拟条主设置---
 * @default
 *
 * @param IsVGroup
 * @parent ---角色虚拟条主设置---
 * @text 是否角色显示虚拟条组
 * @type text
 * @desc 这将设置是否会启用虚拟条组的显示功能,输入true/false,如果false则角色虚拟条全部功能失效,这可以是一个公式
 * @default true
 *
 *
 * @param ShowMode
 * @parent ---角色虚拟条主设置---
 * @text 角色条组显示模式
 * @type combo
 * @option always
 * @option select
 * @desc 角色的条组在何时会进行显示,选择always代表角色存活期间都会显示,选择select代表角色被技能选择期间进行显示
 * @default select
 *
 *
 * @param ShowPos
 * @parent ---角色虚拟条主设置---
 * @text 角色条显示位置
 * @type combo
 * @option up
 * @option center
 * @option down
 * @desc 角色的血条会在角色图片的位置,up图片正上方,center图片中心,down图片下方
 * @default up
 *
 *
 * @param Ofx
 * @parent ---角色虚拟条主设置---
 * @text 角色条偏移X
 * @type Text
 * @desc 整体条组偏移位置的微调X,可以输入一个正负整数值
 * @default 0
 *
 * @param Ofy
 * @parent ---角色虚拟条主设置---
 * @text 角色条偏移Y
 * @type Text
 * @desc 整体条组偏移位置的微调Y,可以输入一个正负整数值
 * @default -32
 *
 *
 * @param BkGroupPic
 * @parent ---角色虚拟条主设置---
 * @text 角色背景框图片
 * @type file
 * @dir img/system
 * @desc 显示角色的背景血条外框的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息
 * @default
 *
 * @param BkGroupPicX
 * @parent ---角色虚拟条主设置---
 * @text 角色背景框图片X
 * @type Text
 * @desc 显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值
 * @default 0
 *
 * @param BkGroupPicY
 * @parent ---角色虚拟条主设置---
 * @text 角色背景框图片Y
 * @type Text
 * @desc 显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值
 * @default -32
 *
 *
 * @param FsGroupPic
 * @parent ---角色虚拟条主设置---
 * @text 角色前景框图片
 * @type file
 * @dir img/system
 * @desc 显示角色的前景血条外框的图片,图片要放在img/system文件夹中,如果没有填写则显示默认的血条信息
 * @default 
 *
 * @param FsGroupPicX
 * @parent ---角色虚拟条主设置---
 * @text 角色前景框图片X
 * @type Text
 * @desc 显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值
 * @default 0
 *
 * @param FsGroupPicY
 * @parent ---角色虚拟条主设置---
 * @text 角色前景框图片Y
 * @type Text
 * @desc 显示图片的微调偏移量,这个仅对存在图片是有位置有效,可以是一个正负值
 * @default 0
 *
 * @param InOutFrame
 * @parent ---角色虚拟条主设置---
 * @text 角色条组渐入渐出帧数
 * @type number
 * @desc 角色条组从完全透明渐入到不透明,从不透明到渐出到完全透明的帧数,默认值为30帧数
 * @default 30
 *
 *
 * @param ---角色名称信息---
 * @default 
 *
 * @param IsNmInfoShow
 * @parent ---角色名称信息---
 * @text 是否显示角色名称信息
 * @type text
 * @desc 是否显示角色的名字,输入true/false,这可以是一个公式
 * @default true
 *
 * @param NmInfoFormat
 * @parent ---角色名称信息---
 * @text 角色名称格式
 * @type text
 * @desc 显示角色的名字,%1会被替换为角色的名称,%2会被替换为同名角色的后缀编号(A,B...)如果存在的话
 * @default %1%2
 *
 * @param NmInfoOfx
 * @parent ---角色名称信息---
 * @text 角色名称信息偏移X
 * @type text
 * @desc 显示的偏移量X,可以是一个正负整数值,默认值为0
 * @default 0
 *
 * @param NmInfoOfy
 * @parent ---角色名称信息---
 * @text 角色名称信息偏移Y
 * @type text
 * @desc 显示的偏移量Y,可以是一个正负整数值,默认值为0
 * @default -36
 *
 * @param NmInfoTSize
 * @parent ---角色名称信息---
 * @text 角色名称信息字体大小
 * @type number
 * @desc 字体大小
 * @default 20
 *
 * @param NmInfoTColor
 * @parent ---角色名称信息---
 * @text 角色名称信息字体颜色
 * @type text
 * @desc 字体颜色
 * @default #ffffff
 *
 * @param NmInfoBSize
 * @parent ---角色名称信息---
 * @text 角色名称信息字体描边宽
 * @type number
 * @desc 字体边框的宽度大小,默认值为4
 * @default 4
 *
 * @param NmInfoBColor
 * @parent ---角色名称信息---
 * @text 角色名称信息字体描边颜色
 * @type text
 * @desc 字体边框的颜色,默认值rgba(255,0,0,0.5)50%红
 * @default rgba(255,0,0,0.5)
 *
 *
 *
 * @param ---角色血条结构---
 * @default 
 *
 * @param HPStruct
 * @text 角色血条
 * @parent ---角色血条结构---
 * @type struct<GroupHPStruct>
 * @desc 设置角色血条的相关信息
 * @default {"---控制---":"","IsVHP":"true","---角色血条设置---":"","HPGroupPic":"","HPOfx":"0","HPOfy":"0","HPOriX3":"0","HPOriX2":"0","HPOriX1":"0","---角色血条文本---":"","IsHpInfoShow":"true","HpInfoMode":"value","HpValueInfoT":"%1/%2","HpPercentInfoT":"%1%","HpInfoOfx":"0","HpInfoOfy":"-3","HpInfoTSize":"20","HpInfoTColor":"#ffffff","HpInfoBSize":"4","HpInfoBColor":"rgba(255,0,0,0.5)"}
 *
 *
 *
 * @param ---角色蓝条结构---
 * @default 
 *
 * @param MPStruct
 * @text 角色蓝条
 * @parent ---角色蓝条结构---
 * @type struct<GroupMPStruct>
 * @desc 设置角色蓝条的相关信息
 * @default {"---控制---":"","IsVMP":"true","---角色蓝条设置---":"","MPGroupPic":"","MPOfx":"0","MPOfy":"24","MPOriX3":"0","MPOriX2":"0","MPOriX1":"0","---角色蓝条文本---":"","IsMpInfoShow":"true","MpInfoMode":"value","MpValueInfoT":"%1/%2","MpPercentInfoT":"%1%","MpInfoOfx":"0","MpInfoOfy":"-3","MpInfoTSize":"14","MpInfoTColor":"#ffffff","MpInfoBSize":"4","MpInfoBColor":"rgba(0,0,255,0.5)"}
 *
 *
 *
 * @param ---角色TP条结构---
 * @default 
 *
 * @param TPStruct
 * @text 角色TP条
 * @parent ---角色TP条结构---
 * @type struct<GroupTPStruct>
 * @desc 设置角色TP条的相关信息
 * @default {"---控制---":"","IsVTP":"true","---角色TP条设置---":"","TPGroupPic":"","TPOfx":"0","TPOfy":"40","TPOriX3":"0","TPOriX2":"0","TPOriX1":"0","---角色TP条文本---":"","IsTpInfoShow":"true","TpInfoMode":"value","TpValueInfoT":"%1/%2","TpPercentInfoT":"%1%","TpInfoOfx":"0","TpInfoOfy":"-3","TpInfoTSize":"14","TpInfoTColor":"#ffffff","TpInfoBSize":"4","TpInfoBColor":"rgba(0,255,0,0.5)"}
 *
 *
 *
 * @param ---角色自定义条结构---
 * @default 
 *
 * @param CusStructArr
 * @text 角色自定义条组
 * @parent ---角色自定义条结构---
 * @type struct<GroupCustomStruct>[]
 * @desc 设置角色所有自定义条的相关信息,设置完成后并不会主动启用,需使用数据库备注指令
 * @default []
 *
 *
 *
  * @param ---特殊设置---
 * @default
 *
 * @param DeepGroupSpeed
 * @parent ---特殊设置---
 * @text 深层血条速度百分比
 * @type text
 * @desc 这是第二层血条的动态速度,数值越大则速度越快,这可以是个小数,范围0~100,默认值10
 * @default 10
 *
 * @param DeepGroupMinDis
 * @parent ---特殊设置---
 * @text 深层血条最小距离
 * @type text
 * @desc 这是第二层血条与第一层血条最小距离视为相同,数值不易太大,这可以是个小数,默认值0.1
 * @default 0.1
 *
 *
 *
 * @param IsGroupLine
 * @parent ---特殊设置---
 * @text 是否显示默认分段
 * @type boolean
 * @on YES
 * @off NO
 * @desc 开启这个效果后,将会为条组绘制分段线,分段线将会绘制在默认条组上,如果有图片素材则不绘制
 * YES - true     NO - false
 * @default false
 *
 *
 * @param GroupLineDis
 * @parent ---特殊设置---
 * @text 分段线距离
 * @type text
 * @desc 每个分段线的间隔,单位是像素
 * @default 30
 *
 *
 *
 * @param IsOnlySVActorShow
 * @parent ---特殊设置---
 * @text 仅仅SV战斗显示玩家条组
 * @type boolean
 * @on YES
 * @off NO
 * @desc 这将会控制是否仅仅在SideView战斗模式下,玩家才会显示出条组信息的功能
 * YES - true     NO - false
 * @default true
 *
 *
 * @param ActorGroupPosUnify
 * @parent ---特殊设置---
 * @text 玩家条组位置统一
 * @type boolean
 * @on YES
 * @off NO
 * @desc 开启这个设置后,所有玩家条组位置将会默认为x0,y0位置,而不是使用SV模型默认位置为基准点
 * YES - true     NO - false
 * @default false
 *
 *
 * @param EnemyGroupPosUnify
 * @parent ---特殊设置---
 * @text 敌人条组位置统一
 * @type boolean
 * @on YES
 * @off NO
 * @desc 开启这个设置后,所有敌人条组位置将会默认为x0,y0位置,而不是使用SV模型默认位置为基准点
 * YES - true     NO - false
 * @default false
 *
 * @param OnlySingleActorShow
 * @parent ---特殊设置---
 * @text 队伍同一时间单条组显示
 * @type boolean
 * @on YES
 * @off NO
 * @desc 在我方队伍显示血条显示中,仅仅只能同时存在一个正在显示的条组,使用这个效果请将'角色条组显示模式'设置为select
 * YES - true     NO - false
 * @default false
 *
 * @param OnlySingleEnemyShow
 * @parent ---特殊设置---
 * @text 敌群同一时间单条组显示
 * @type boolean
 * @on YES
 * @off NO
 * @desc 在敌群显示血条显示中,仅仅只能同时存在一个正在显示的条组,使用这个效果请将'角色条组显示模式'设置为select
 * YES - true     NO - false
 * @default false
 *
 *
 *
 *
 *
 *
 *
 *
 */
  /* ----------------------------------------------------------------------------
 * GroupHPStruct Parameter Structure
 * ---------------------------------------------------------------------------
 */
 /*~struct~GroupHPStruct:
 *
 *
 * @param ---控制---
 * @default
 *
 * @param IsVHP
 * @parent ---控制---
 * @text 是否显示角色血条
 * @type text
 * @desc 显示条组时,是否会包含血条,输入true/false,这可以是一个公式
 * @default true
 *
 *
 * @param ---角色血条设置---
 * @default 
 *
 *
 * @param HPGroupPic
 * @parent ---角色血条设置---
 * @text 血条图片素材集
 * @type file
 * @dir img/system
 * @desc 显示角色虚拟条的素材合集,图片要放在img/system文件夹中,如果没有填写则显示默认的图片条信息
 * @default 
 *
 *
 * @param HPOfx
 * @parent ---角色血条设置---
 * @text 角色血条偏移X
 * @type Text
 * @desc 整体条组偏移位置的微调X,可以输入一个正负整数值
 * @default 0
 *
 * @param HPOfy
 * @parent ---角色血条设置---
 * @text 角色血条偏移Y
 * @type Text
 * @desc 整体条组偏移位置的微调Y,可以输入一个正负整数值
 * @default 0
 *
 *
 * @param HPOriX3
 * @parent ---角色血条设置---
 * @text 角色前血条卷动X
 * @type Text
 * @desc 条组前层条的卷动速度,是条组素材图片的第一行,可以输入一个正负小数
 * @default 0
 *
 * @param HPOriX2
 * @parent ---角色血条设置---
 * @text 角色深血条卷动X
 * @type Text
 * @desc 条组深层条的卷动速度,是条组素材图片的第二行,可以输入一个正负小数
 * @default 0
 *
 * @param HPOriX1
 * @parent ---角色血条设置---
 * @text 角色背景血条卷动X
 * @type Text
 * @desc 条组背景层条的卷动速度,是条组素材图片的第三行,可以输入一个正负小数
 * @default 0
 *
 *
 *
 *
 *

 * @param ---角色血条文本---
 * @default 
 *
 * @param IsHpInfoShow
 * @parent ---角色血条文本---
 * @text 是否显示角色血量信息
 * @type text
 * @desc 显示角色的具体血量,输入true/false,这可以是一个公式
 * @default true
 *
 * @param HpInfoMode
 * @parent ---角色血条文本---
 * @text 角色血量信息模式
 * @type combo
 * @option value
 * @option percent
 * @desc 角色的血量信息以文字形式进行显示,value代表精确数值,percent代表血量百分比
 * @default value
 *
 * @param HpValueInfoT
 * @parent ---角色血条文本---
 * @text 数值模式显示格式
 * @type text
 * @desc 显示血量信息的数值,%1会被替换为角色当前血量     %2会被替换为角色最大血量
 * @default %1/%2
 *
 * @param HpPercentInfoT
 * @parent ---角色血条文本---
 * @text 百分比模式显示格式
 * @type text
 * @desc 显示血量信息的数值,%1会被替换为当前血量与最大血量的百分比
 * @default %1%
 *
 * @param HpInfoOfx
 * @parent ---角色血条文本---
 * @text 角色血量信息偏移X
 * @type text
 * @desc 显示的偏移量X,可以是一个正负整数值,默认值为0
 * @default 0
 *
 * @param HpInfoOfy
 * @parent ---角色血条文本---
 * @text 角色血量信息偏移Y
 * @type text
 * @desc 显示的偏移量Y,可以是一个正负整数值,默认值为-3
 * @default -3
 *
 * @param HpInfoTSize
 * @parent ---角色血条文本---
 * @text 角色血量信息字体大小
 * @type number
 * @desc 字体大小,默认值为20
 * @default 20
 *
 * @param HpInfoTColor
 * @parent ---角色血条文本---
 * @text 角色血量信息字体颜色
 * @type text
 * @desc 字体颜色,默认值#ffffff白色
 * @default #ffffff
 *
 * @param HpInfoBSize
 * @parent ---角色血条文本---
 * @text 角色血量信息字体描边宽
 * @type number
 * @desc 字体边框的宽度大小,默认值为4
 * @default 4
 *
 * @param HpInfoBColor
 * @parent ---角色血条文本---
 * @text 角色血量信息字体描边颜色
 * @type text
 * @desc 字体边框的颜色,默认值rgba(255,0,0,0.5)50%红
 * @default rgba(255,0,0,0.5)
 *
 *
 *
 *
 * 
 */
  /* ----------------------------------------------------------------------------
 * GroupMPStruct Parameter Structure
 * ---------------------------------------------------------------------------
 */
 /*~struct~GroupMPStruct:
 *
 *
 * @param ---控制---
 * @default
 *
 * @param IsVMP
 * @parent ---控制---
 * @text 是否显示角色蓝条
 * @type text
 * @desc 显示条组时,是否会包含蓝条,输入true/false,这可以是一个公式
 * @default true
 *
 *
 * @param ---角色蓝条设置---
 * @default 
 *
 * @param MPGroupPic
 * @parent ---角色蓝条设置---
 * @text 蓝条图片素材集
 * @type file
 * @dir img/system
 * @desc 显示角色虚拟条的素材合集,图片要放在img/system文件夹中,如果没有填写则显示默认的图片条信息
 * @default 
 *
 * @param MPOfx
 * @parent ---角色蓝条设置---
 * @text 角色蓝条偏移X
 * @type Text
 * @desc 整体条组偏移位置的微调X,可以输入一个正负整数值
 * @default 0
 *
 * @param MPOfy
 * @parent ---角色蓝条设置---
 * @text 角色蓝条偏移Y
 * @type Text
 * @desc 整体条组偏移位置的微调Y,可以输入一个正负整数值
 * @default 24
 *
 *
 * @param MPOriX3
 * @parent ---角色蓝条设置---
 * @text 角色前蓝条卷动X
 * @type Text
 * @desc 条组前层条的卷动速度,是条组素材图片的第一行,可以输入一个正负小数
 * @default 0
 *
 * @param MPOriX2
 * @parent ---角色蓝条设置---
 * @text 角色深蓝条卷动X
 * @type Text
 * @desc 条组深层条的卷动速度,是条组素材图片的第二行,可以输入一个正负小数
 * @default 0
 *
 * @param MPOriX1
 * @parent ---角色蓝条设置---
 * @text 角色背景蓝条卷动X
 * @type Text
 * @desc 条组背景层条的卷动速度,是条组素材图片的第三行,可以输入一个正负小数
 * @default 0
 *
 *
 *
 * @param ---角色蓝条文本---
 * @default 
 *
 *
 * @param IsMpInfoShow
 * @parent ---角色蓝条文本---
 * @text 是否显示角色蓝量信息
 * @type text
 * @desc 显示角色的具体蓝量,输入true/false,这可以是一个公式
 * @default true
 *
 * @param MpInfoMode
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息模式
 * @type combo
 * @option value
 * @option percent
 * @desc 角色的蓝量信息以文字形式进行显示,value代表精确数值,percent代表蓝量百分比
 * @default value
 *
 * @param MpValueInfoT
 * @parent ---角色蓝条文本---
 * @text 数值模式显示格式
 * @type text
 * @desc 显示蓝量信息的数值,%1会被替换为角色当前蓝量     %2会被替换为角色最大蓝量
 * @default %1/%2
 *
 * @param MpPercentInfoT
 * @parent ---角色蓝条文本---
 * @text 百分比模式显示格式
 * @type text
 * @desc 显示蓝量信息的数值,%1会被替换为当前蓝量与最大蓝量的百分比
 * @default %1%
 *
 * @param MpInfoOfx
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息偏移X
 * @type text
 * @desc 显示的偏移量X,可以是一个正负整数值,默认值为0
 * @default 0
 *
 * @param MpInfoOfy
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息偏移Y
 * @type text
 * @desc 显示的偏移量Y,可以是一个正负整数值,默认值为-3
 * @default -3
 *
 * @param MpInfoTSize
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息字体大小
 * @type number
 * @desc 字体大小,默认值为14
 * @default 14
 *
 * @param MpInfoTColor
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息字体颜色
 * @type text
 * @desc 字体颜色,默认值#ffffff白色
 * @default #ffffff
 *
 * @param MpInfoBSize
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息字体描边宽
 * @type number
 * @desc 字体边框的宽度大小,默认值为4
 * @default 4
 *
 * @param MpInfoBColor
 * @parent ---角色蓝条文本---
 * @text 角色蓝量信息字体描边颜色
 * @type text
 * @desc 字体边框的颜色,默认值rgba(0,0,255,0.5)50%蓝
 * @default rgba(0,0,255,0.5)
 *
 */
 /* ----------------------------------------------------------------------------
 * GroupTPStruct Parameter Structure
 * ---------------------------------------------------------------------------
 */
 /*~struct~GroupTPStruct:
 *
 * @param ---控制---
 * @default
 *
 * @param IsVTP
 * @parent ---控制---
 * @text 是否显示角色TP条
 * @type text
 * @desc 显示条组时,是否会包含TP条,输入true/false,这可以是一个公式
 * @default true
 *
 * @param ---角色TP条设置---
 * @default 
 *
 *
 * @param TPGroupPic
 * @parent ---角色TP条设置---
 * @text TP条图片素材集
 * @type file
 * @dir img/system
 * @desc 显示角色虚拟条的素材合集,图片要放在img/system文件夹中,如果没有填写则显示默认的图片条信息
 * @default 
 *
 *
 * @param TPOfx
 * @parent ---角色TP条设置---
 * @text 角色TP条偏移X
 * @type Text
 * @desc 整体条组偏移位置的微调X,可以输入一个正负整数值
 * @default 0
 *
 * @param TPOfy
 * @parent ---角色TP条设置---
 * @text 角色TP条偏移Y
 * @type Text
 * @desc 整体条组偏移位置的微调Y,可以输入一个正负整数值
 * @default 40
 *
 *
 *
 * @param TPOriX3
 * @parent ---角色TP条设置---
 * @text 角色前TP条卷动X
 * @type Text
 * @desc 条组前层条的卷动速度,是条组素材图片的第一行,可以输入一个正负小数
 * @default 0
 *
 * @param TPOriX2
 * @parent ---角色TP条设置---
 * @text 角色深TP条卷动X
 * @type Text
 * @desc 条组深层条的卷动速度,是条组素材图片的第二行,可以输入一个正负小数
 * @default 0
 *
 * @param TPOriX1
 * @parent ---角色TP条设置---
 * @text 角色背景TP条卷动X
 * @type Text
 * @desc 条组背景层条的卷动速度,是条组素材图片的第三行,可以输入一个正负小数
 * @default 0
 *
 *
 * @param ---角色TP条文本---
 * @default 
 *
 * @param IsTpInfoShow
 * @parent ---角色Tp条文本---
 * @text 是否显示角色Tp量信息
 * @type text
 * @desc 显示角色的具体Tp量,输入true/false,这可以是一个公式
 * @default true
 *
 * @param TpInfoMode
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息模式
 * @type combo
 * @option value
 * @option percent
 * @desc 角色的Tp量信息以文字形式进行显示,value代表精确数值,percent代表Tp量百分比
 * @default value
 *
 * @param TpValueInfoT
 * @parent ---角色Tp条文本---
 * @text 数值模式显示格式
 * @type text
 * @desc 显示Tp量信息的数值,%1会被替换为角色当前Tp量     %2会被替换为角色最大Tp量
 * @default %1/%2
 *
 * @param TpPercentInfoT
 * @parent ---角色Tp条文本---
 * @text 百分比模式显示格式
 * @type text
 * @desc 显示Tp量信息的数值,%1会被替换为当前Tp量与最大Tp量的百分比
 * @default %1%
 *
 * @param TpInfoOfx
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息偏移X
 * @type text
 * @desc 显示的偏移量X,可以是一个正负整数值,默认值为0
 * @default 0
 *
 * @param TpInfoOfy
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息偏移Y
 * @type text
 * @desc 显示的偏移量Y,可以是一个正负整数值,默认值为-3
 * @default -3
 *
 * @param TpInfoTSize
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息字体大小
 * @type number
 * @desc 字体大小,默认值为14
 * @default 14
 *
 * @param TpInfoTColor
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息字体颜色
 * @type text
 * @desc 字体颜色,默认值#ffffff白色
 * @default #ffffff
 *
 * @param TpInfoBSize
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息字体描边宽
 * @type number
 * @desc 字体边框的宽度大小,默认值为4
 * @default 4
 *
 * @param TpInfoBColor
 * @parent ---角色Tp条文本---
 * @text 角色Tp量信息字体描边颜色
 * @type text
 * @desc 字体边框的颜色,默认值rgba(0,255,0,0.5)50%绿
 * @default rgba(0,255,0,0.5)
 *
 *
 *
 *
 */
 /* ----------------------------------------------------------------------------
 * GroupCustomStruct Parameter Structure
 * ---------------------------------------------------------------------------
 */
 /*~struct~GroupCustomStruct:
 *
 *
 *
 *
 * @param ---自定义条属性---
 * @default 
 *
 *
 * @param CusGroupPic
 * @parent ---自定义条属性---
 * @text 角色自定义图片集
 * @type file
 * @dir img/system
 * @desc 注意图片的规格要求为单独的,既1x3切分的条组图,图片需存放在img/system/文件夹下
 * @default
 *
 *
 *
 * @param CusCurValueVar
 * @parent ---自定义条设置---
 * @text 角色自定义数值目前变量
 * @type Variable
 * @desc 控制跟随变化的数值,需要输入变量ID值,代表这个条的目前变化数值
 * @default 0
 *
 *
 * @param CusMaxValueVar
 * @parent ---自定义条设置---
 * @text 角色自定义数值最大变量
 * @type Variable
 * @desc 控制跟随变化的数值,需要输入变量ID值,代表这个条的满数值
 * @default 0
 *
 *
 * @param ---自定义条设置---
 * @default 
 *
 *
 * @param CusOfx
 * @parent ---自定义条设置---
 * @text 角色自定义条偏移X
 * @type Text
 * @desc 整体条组偏移位置的微调X,可以输入一个正负整数值
 * @default 0
 *
 * @param CusOfy
 * @parent ---自定义条设置---
 * @text 角色自定义条偏移Y
 * @type Text
 * @desc 整体条组偏移位置的微调Y,可以输入一个正负整数值
 * @default 0
 *
 *
 * @param CusOriX3
 * @parent ---自定义条设置---
 * @text 角色前自定义条卷动X
 * @type Text
 * @desc 条组前层条的卷动速度,是条组素材图片的第一行,可以输入一个正负小数
 * @default 0
 *
 * @param CusOriX2
 * @parent ---自定义条设置---
 * @text 角色深自定义条卷动X
 * @type Text
 * @desc 条组深层条的卷动速度,是条组素材图片的第二行,可以输入一个正负小数
 * @default 0
 *
 * @param CusOriX1
 * @parent ---自定义条设置---
 * @text 角色背景自定义条卷动X
 * @type Text
 * @desc 条组背景层条的卷动速度,是条组素材图片的第三行,可以输入一个正负小数
 * @default 0
 *
 *
 * @param ---自定义条文本---
 * @default 
 *
 * @param IsCusInfoShow
 * @parent ---自定义条文本---
 * @text 是否显示角色自定义量信息
 * @type boolean
 * @desc 显示角色的具体Cus量,输入true/false,这可以是一个公式
 * @default true
 *
 * @param CusInfoMode
 * @parent ---自定义条文本---
 * @text 角色自定义量信息模式
 * @type combo
 * @option value
 * @option percent
 * @desc 角色的Cus量信息以文字形式进行显示,value代表精确数值,percent代表Cus量百分比
 * @default value
 *
 * @param CusValueInfoT
 * @parent ---自定义条文本---
 * @text 数值模式显示格式
 * @type text
 * @desc 显示Cus量信息的数值,%1会被替换为角色当前Cus量     %2会被替换为角色最大Cus量
 * @default %1/%2
 *
 * @param CusPercentInfoT
 * @parent ---自定义条文本---
 * @text 百分比模式显示格式
 * @type text
 * @desc 显示Cus量信息的数值,%1会被替换为当前Cus量与最大Cus量的百分比
 * @default %1%
 *
 * @param CusInfoOfx
 * @parent ---自定义条文本---
 * @text 角色自定义量信息偏移X
 * @type text
 * @desc 显示的偏移量X,可以是一个正负整数值,默认值为0
 * @default 0
 *
 * @param CusInfoOfy
 * @parent ---自定义条文本---
 * @text 角色自定义量信息偏移Y
 * @type text
 * @desc 显示的偏移量Y,可以是一个正负整数值,默认值为0
 * @default -3
 *
 * @param CusInfoTSize
 * @parent ---自定义条文本---
 * @text 角色自定义量信息字体大小
 * @type number
 * @desc 字体大小,默认值为20
 * @default 20
 *
 * @param CusInfoTColor
 * @parent ---自定义条文本---
 * @text 角色自定义量信息字体颜色
 * @type text
 * @desc 字体颜色,默认值#ffffff白色
 * @default #ffffff
 *
 * @param CusInfoBSize
 * @parent ---自定义条文本---
 * @text 角色自定义量信息字体描边宽
 * @type number
 * @desc 字体边框的宽度大小,默认值为4
 * @default 4
 *
 * @param CusInfoBColor
 * @parent ---自定义条文本---
 * @text 角色自定义量信息字体描边颜色
 * @type text
 * @desc 字体边框的颜色,默认值rgba(255,0,0,0.5)50%红
 * @default rgba(255,0,0,0.5)
 *
 *
 *
 *
 */






var LiuYue = LiuYue || {};
LiuYue.LiuYue_VirtualGroup = true;//插件启动


var Zzy = Zzy || {};
Zzy.VGF = Zzy.VGF || {};
Zzy.VGF.version = 1.01;  
Zzy.Parameters = PluginManager.parameters('LiuYue_VirtualGroup');

Zzy.Param = Zzy.Param || {};



Zzy.VGF.ShowToId = function(str)
{
	switch(str)
	{
		case 'up':return 2;
		case 'center':return 1;
		case 'down':return 1;
	}
	return 0;
}

Zzy.VGF.ShowModeToId = function(str)
{
	switch(str)
	{
		case 'always':return 1;
		case 'select':return 2;
	}
	return 0;
}

Zzy.VGF.InfoModeToId = function(str)
{
	switch(str)
	{
		case 'value':return 1;
		case 'percent':return 2;
	}
	return 0;
}


//-----------------------------------------角色虚拟条主设置-----------------------------------------

Zzy.Param.VGFIsVGroup = String(Zzy.Parameters['IsVGroup']);
Zzy.Param.VGFShowPos = Zzy.VGF.ShowToId(String(Zzy.Parameters['ShowPos']));
Zzy.Param.VGFOfx = parseInt(Zzy.Parameters['Ofx']);
Zzy.Param.VGFOfy = parseInt(Zzy.Parameters['Ofy']);

Zzy.Param.VGFBkGroupPic = String(Zzy.Parameters['BkGroupPic']);
Zzy.Param.VGFBkGroupPicX = Number(Zzy.Parameters['BkGroupPicX']);
Zzy.Param.VGFBkGroupPicY = Number(Zzy.Parameters['BkGroupPicY']);

Zzy.Param.VGFFsGroupPic = String(Zzy.Parameters['FsGroupPic']);
Zzy.Param.VGFFsGroupPicX = Number(Zzy.Parameters['FsGroupPicX']);
Zzy.Param.VGFFsGroupPicY = Number(Zzy.Parameters['FsGroupPicY']);

Zzy.Param.VGFInOutFrame = parseInt(Zzy.Parameters['InOutFrame']);
Zzy.Param.VGFShowMode = Zzy.VGF.ShowModeToId(String(Zzy.Parameters['ShowMode']));


//------------------------------------角色名称信息------------------------------------


Zzy.Param.VGFIsNmInfoShow = String(Zzy.Parameters['IsNmInfoShow']);
Zzy.Param.VGFNmInfoFormat = String(Zzy.Parameters['NmInfoFormat']);
Zzy.Param.VGFNmInfoOfx = parseInt(Zzy.Parameters['NmInfoOfx']);
Zzy.Param.VGFNmInfoOfy = parseInt(Zzy.Parameters['NmInfoOfy']);
Zzy.Param.VGFNmInfoTSize = parseInt(Zzy.Parameters['NmInfoTSize']);
Zzy.Param.VGFNmInfoTColor = String(Zzy.Parameters['NmInfoTColor']);
Zzy.Param.VGFNmInfoBSize = parseInt(Zzy.Parameters['NmInfoBSize']);
Zzy.Param.VGFNmInfoBColor = String(Zzy.Parameters['NmInfoBColor']);

Zzy.Param.VGFDeepGroupSpeed = Number(Zzy.Parameters['DeepGroupSpeed']);
Zzy.Param.VGFDeepGroupMinDis = Number(Zzy.Parameters['DeepGroupMinDis']);
Zzy.Param.VGFIsGroupLine = eval(String(Zzy.Parameters['IsGroupLine']));
Zzy.Param.VGFGroupLineDis = Number(Zzy.Parameters['GroupLineDis']);
Zzy.Param.VGFIsOnlySVActorShow = eval(String(Zzy.Parameters['IsOnlySVActorShow']));
Zzy.Param.VGFActorGroupPosUnify = eval(String(Zzy.Parameters['ActorGroupPosUnify']));
Zzy.Param.VGFEnemyGroupPosUnify = eval(String(Zzy.Parameters['EnemyGroupPosUnify']));
Zzy.Param.VGFOnlySingleActorShow = eval(String(Zzy.Parameters['OnlySingleActorShow']));
Zzy.Param.VGFOnlySingleEnemyShow = eval(String(Zzy.Parameters['OnlySingleEnemyShow']));



Zzy.VGF.TranslateHPStruct = function(jsonArr)//基础属性解析
{	
	var info = {};
	info.VGFIsVHP = String(jsonArr['IsVHP']);//是否显示角色血条
	info.VGFHPGroupPic = String(jsonArr['HPGroupPic']);
	info.VGFHPOfx = parseInt(jsonArr['HPOfx']);//角色血条偏移X
	info.VGFHPOfy = parseInt(jsonArr['HPOfy']);//角色血条偏移Y
	
	info.VGFHPOriX1 = Number(jsonArr['HPOriX1']);//卷动速度
	info.VGFHPOriX2 = Number(jsonArr['HPOriX2']);
	info.VGFHPOriX3 = Number(jsonArr['HPOriX3']);
	
	info.VGFIsHpInfoShow = String(jsonArr['IsHpInfoShow']);
	info.VGFHpInfoMode = Zzy.VGF.InfoModeToId(String(jsonArr['HpInfoMode']));
	info.VGFHpValueInfoT = String(jsonArr['HpValueInfoT']);
	info.VGFHpPercentInfoT = String(jsonArr['HpPercentInfoT']);
	info.VGFHpInfoOfx = Number(jsonArr['HpInfoOfx']);
	info.VGFHpInfoOfy = Number(jsonArr['HpInfoOfy']);
	info.VGFHpInfoTSize = parseInt(jsonArr['HpInfoTSize']);
	info.VGFHpInfoTColor = String(jsonArr['HpInfoTColor']);
	info.VGFHpInfoBSize = parseInt(jsonArr['HpInfoBSize']);
	info.VGFHpInfoBColor = String(jsonArr['HpInfoBColor']);	
	return info;
}

Zzy.VGF.TranslateMPStruct = function(jsonArr)//基础属性解析
{	
	var info = {};
	info.VGFIsVMP = String(jsonArr['IsVMP']);
	info.VGFMPGroupPic = String(jsonArr['MPGroupPic']);
	info.VGFMPOfx = parseInt(jsonArr['MPOfx']);
	info.VGFMPOfy = parseInt(jsonArr['MPOfy']);

	info.VGFMPOriX1 = Number(jsonArr['MPOriX1']);//卷动速度
	info.VGFMPOriX2 = Number(jsonArr['MPOriX2']);
	info.VGFMPOriX3 = Number(jsonArr['MPOriX3']);
	
	info.VGFIsMpInfoShow = String(jsonArr['IsMpInfoShow']);
	info.VGFMpInfoMode = Zzy.VGF.InfoModeToId(String(jsonArr['MpInfoMode']));
	info.VGFMpValueInfoT = String(jsonArr['MpValueInfoT']);
	info.VGFMpPercentInfoT = String(jsonArr['MpPercentInfoT']);
	info.VGFMpInfoOfx = Number(jsonArr['MpInfoOfx']);
	info.VGFMpInfoOfy = Number(jsonArr['MpInfoOfy']);
	info.VGFMpInfoTSize = parseInt(jsonArr['MpInfoTSize']);
	info.VGFMpInfoTColor = String(jsonArr['MpInfoTColor']);
	info.VGFMpInfoBSize = parseInt(jsonArr['MpInfoBSize']);
	info.VGFMpInfoBColor = String(jsonArr['MpInfoBColor']);	
	return info;
}

Zzy.VGF.TranslateTPStruct = function(jsonArr)//基础属性解析
{	
	var info = {};
	info.VGFIsVTP = String(jsonArr['IsVTP']);
	info.VGFTPGroupPic = String(jsonArr['TPGroupPic']);
	info.VGFTPOfx = parseInt(jsonArr['TPOfx']);
	info.VGFTPOfy = parseInt(jsonArr['TPOfy']);
	
	info.VGFTPOriX1 = Number(jsonArr['TPOriX1']);//卷动速度
	info.VGFTPOriX2 = Number(jsonArr['TPOriX2']);
	info.VGFTPOriX3 = Number(jsonArr['TPOriX3']);	
	
	info.VGFIsTpInfoShow = String(jsonArr['IsTpInfoShow']);
	info.VGFTpInfoMode = Zzy.VGF.InfoModeToId(String(jsonArr['TpInfoMode']));
	info.VGFTpValueInfoT = String(jsonArr['TpValueInfoT']);
	info.VGFTpPercentInfoT = String(jsonArr['TpPercentInfoT']);
	info.VGFTpInfoOfx = Number(jsonArr['TpInfoOfx']);
	info.VGFTpInfoOfy = Number(jsonArr['TpInfoOfy']);
	info.VGFTpInfoTSize = parseInt(jsonArr['TpInfoTSize']);
	info.VGFTpInfoTColor = String(jsonArr['TpInfoTColor']);
	info.VGFTpInfoBSize = parseInt(jsonArr['TpInfoBSize']);
	info.VGFTpInfoBColor = String(jsonArr['TpInfoBColor']);	
	return info;
}



Zzy.Param.VGFBaseStructArr = [];
Zzy.Param.VGFBaseStructArr[0] = Zzy.VGF.TranslateHPStruct(JSON.parse(Zzy.Parameters['HPStruct']));
Zzy.Param.VGFBaseStructArr[1] = Zzy.VGF.TranslateMPStruct(JSON.parse(Zzy.Parameters['MPStruct']));
Zzy.Param.VGFBaseStructArr[2] = Zzy.VGF.TranslateTPStruct(JSON.parse(Zzy.Parameters['TPStruct']));


Zzy.VGF.TranslateToBaseParam = function()//转换未单独的参数转换成名称
{
	var len = Zzy.Param.VGFBaseStructArr.length;
	for(var i=0;i<len;i++)
	{
		var structArr = Zzy.Param.VGFBaseStructArr[i];
		
		for(var key in structArr)
		{
			Zzy.Param[key] = structArr[key];
		}
		
		
	}
}
Zzy.VGF.TranslateToBaseParam();

Zzy.Param.VGFCustomStructArr = JSON.parse(Zzy.Parameters['CusStructArr']);//自定义属性


Zzy.VGF.TranslateToCustomParam = function()
{
	var jsonStr = Zzy.Param.VGFCustomStructArr;
	var len = jsonStr.length;
	
	var infos = [];
	infos[0] = undefined;
	for(var i=0;i<len;i++)
	{
		var data = JSON.parse(jsonStr[i]);
		var info = {};
		info.CusGroupPic = data.CusGroupPic;
		info.CusMaxValueVar = parseInt(data.CusMaxValueVar);
		info.CusCurValueVar = parseInt(data.CusCurValueVar);
		info.CusOfx = Number(data.CusOfx);
		info.CusOfy = Number(data.CusOfy);
		
		info.CusOriX1 = Number(data.CusOriX1);//卷动速度
		info.CusOriX2 = Number(data.CusOriX2);
		info.CusOriX3 = Number(data.CusOriX3);
				
		info.IsCusInfoShow = data.IsCusInfoShow;
		info.CusInfoMode = Zzy.VGF.InfoModeToId(data.CusInfoMode);
		info.CusValueInfoT = data.CusValueInfoT;
		info.CusPercentInfoT = data.CusPercentInfoT;
		info.CusInfoOfx = Number(data.CusInfoOfx);
		info.CusInfoOfy = Number(data.CusInfoOfy);	
		info.CusInfoTSize = Number(data.CusInfoTSize);	
		info.CusInfoTColor = data.CusInfoTColor;
		info.CusInfoBSize = Number(data.CusInfoBSize);
		info.CusInfoBColor = data.CusInfoBColor;		
		infos.push(info);
	}
	return infos;
}
Zzy.Param.VGFCustomStructArr = Zzy.VGF.TranslateToCustomParam();


//默认血条
Zzy.Param.VGFHPBorderW = 2;//预留宽度
Zzy.Param.VGFHPWidth = 140;
Zzy.Param.VGFHPHeight = 15;
Zzy.Param.VGFHPLineDis = Zzy.Param.VGFGroupLineDis;//线条分段
Zzy.Param.VGFHPLineWidth = 2;
Zzy.Param.VGFHPColor = '#ffff22';
Zzy.Param.VGFHPDeepColor = '#ff2222'; 
Zzy.Param.VGFHPBdColor = '#222222';
Zzy.Param.VGFHPBkColor = '#666666';

//默认蓝条
Zzy.Param.VGFMPBorderW = 2;//预留宽度
Zzy.Param.VGFMPWidth = 140;
Zzy.Param.VGFMPHeight = 15;
Zzy.Param.VGFMPLineDis = Zzy.Param.VGFGroupLineDis;//线条分段
Zzy.Param.VGFMPLineWidth = 2;
Zzy.Param.VGFMPColor = '#9999ff';
Zzy.Param.VGFMPDeepColor = '#2222ff'; 
Zzy.Param.VGFMPBdColor = '#222222';
Zzy.Param.VGFMPBkColor = '#666666';

//默认TP条
Zzy.Param.VGFTPBorderW = 2;//预留宽度
Zzy.Param.VGFTPWidth = 140;
Zzy.Param.VGFTPHeight = 15;
Zzy.Param.VGFTPLineDis = Zzy.Param.VGFGroupLineDis;//线条分段
Zzy.Param.VGFTPLineWidth = 2;
Zzy.Param.VGFTPColor = '#99ff99';
Zzy.Param.VGFTPDeepColor = '#22ff22'; 
Zzy.Param.VGFTPBdColor = '#222222';
Zzy.Param.VGFTPBkColor = '#666666';

//自定义条
Zzy.Param.VGFCustomBorderW = 2;//预留宽度
Zzy.Param.VGFCustomWidth = 140;
Zzy.Param.VGFCustomHeight = 16;
Zzy.Param.VGFCustomLineDis = Zzy.Param.VGFGroupLineDis;//线条分段
Zzy.Param.VGFCustomLineWidth = 2;
Zzy.Param.VGFCustomColor = '#ff99ff';
Zzy.Param.VGFCustomDeepColor = '#ff22ff'; 
Zzy.Param.VGFCustomBdColor = '#222222';
Zzy.Param.VGFCustomBkColor = '#666666';





Zzy.VGF.Cache = {};
Zzy.VGF.Cache.collBitmap = {};

Zzy.VGF.SingleEnemy = undefined;
Zzy.VGF.SingleActor = undefined;



//=================================================================
//DataManager
//=================================================================
Zzy.VGF.DataManager_loadGame = DataManager.loadGame;
DataManager.loadGame = function(savefileId) //旧存档兼容
{
	var result = Zzy.VGF.DataManager_loadGame.call(this,savefileId);
	
	this.ZzyVGFInitData();

	return result;
}

DataManager.ZzyVGFInitData = function()//初始化参数
{
	if(!$gameSystem.GetIsZzyVGFLoaded())
	{
		//初始化
		$gameSystem.ZzyVGFInitData();//初始化数据
		$gameSystem.SetIsZzyVGFLoaded(true);
	}	
}




//==================================================================
//Game_System
//==================================================================

Zzy.VGF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.VGF.Game_System_initialize.call(this);
	this.ZzyVGFInitData();//初始化数据
	this._IsZzyVGFLoaded = true;//是否载入完成
	
};
	
Game_System.prototype.GetIsZzyVGFLoaded = function()
{
	if(this._IsZzyVGFLoaded === undefined)
	{this._IsZzyVGFLoaded = false;}
	return this._IsZzyVGFLoaded;
}

Game_System.prototype.SetIsZzyVGFLoaded = function(enable)
{
	this._IsZzyVGFLoaded = enable;
}

Game_System.prototype.ZzyVGFInitData = function()
{
	
	
	
}


//==================================================================
//Game_Interpreter
//==================================================================

Zzy.VGF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)//插件命令
{
	Zzy.VGF.Game_Interpreter_pluginCommand.call(this,command,args);
	if(command === 'ZzyVGF')
	{
		this.ZzyVGFCommand(args);
	}
	
}


Game_Interpreter.prototype.ZzyVGFCommand = function(args)
{
	var command = String(args[0]);
	switch(command)
	{

	}
}



//================================================================
//DataManager
//================================================================
Zzy.VGF.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function()
{
	if (!Zzy.VGF.DataManager_isDatabaseLoaded.call(this)) return false;
	
	//添加标签内容
	this.ZzyVGFLoadNoteCase1($dataEnemies);//敌人
	this.ZzyVGFLoadNoteCase1($dataActors);//角色
	return true;
}



DataManager.ZzyVGFLoadNoteCase1 = function(objArr)//加载标签
{
  for (var i = 1; i < objArr.length; i++) 
  {
    var obj = objArr[i];
	
    var noteData = obj.note.split(/[\r\n]+/);
	
	obj.zzyVGF = {};

	for(var j=0;j<noteData.length;j++)
	{
		var lineStr = noteData[j];
		
		if(lineStr.match(/<ZZYVGF ISVGROUP:[ ](.*)>/i))
		{
			var enable = String(RegExp.$1);
			obj.zzyVGF['IsVGroup'] = enable;
		}
		else if(lineStr.match(/<ZZYVGF SHOWPOS:[ ](.*)>/i))
		{
			var modeId = Zzy.VGF.ShowToId(String(RegExp.$1));
			obj.zzyVGF['ShowPos'] = modeId;
		}		
		else if(lineStr.match(/<ZZYVGF OFX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['Ofx'] = v;
		}
		else if(lineStr.match(/<ZZYVGF OFY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['Ofy'] = v;
		}			
		else if(lineStr.match(/<ZZYVGF BKGROUPPIC:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['BkGroupPic'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF BKGROUPPICX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['BkGroupPicX'] = v;
		}
		else if(lineStr.match(/<ZZYVGF BKGROUPPICY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['BkGroupPicY'] = v;
		}
		else if(lineStr.match(/<ZZYVGF FSGROUPPIC:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['FsGroupPic'] = v;
		}	
		else if(lineStr.match(/<ZZYVGF FSGROUPPICX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['FsGroupPicX'] = v;
		}
		else if(lineStr.match(/<ZZYVGF FSGROUPPICY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['FsGroupPicY'] = v;
		}
		else if(lineStr.match(/<ZZYVGF INOUTFRAME:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['InOutFrame'] = v;
		}
		else if(lineStr.match(/<ZZYVGF DEEPHPSPEED:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['DeepHPSpeed'] = v;
		}
		else if(lineStr.match(/<ZZYVGF DEEPMINVALUE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['DeepMinValue'] = v;
		}
		else if(lineStr.match(/<ZZYVGF SHOWMODE:[ ](.*)>/i))
		{
			var v = Zzy.VGF.ShowModeToId(String(RegExp.$1));
			obj.zzyVGF['ShowMode'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF ISNMINFOSHOW:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['IsNmInfoShow'] = v;
		}
		else if(lineStr.match(/<ZZYVGF NMINFOFORMAT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['NmInfoFormat'] = v;
		}
		else if(lineStr.match(/<ZZYVGF NMINFOOFX:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['NmInfoOfx'] = v;
		}
		else if(lineStr.match(/<ZZYVGF NMINFOOFY:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['NmInfoOfy'] = v;
		}
		else if(lineStr.match(/<ZZYVGF NMINFOTSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['NmInfoTSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF NMINFOTCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['NmInfoTColor'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF NMINFOBSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['NmInfoBSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF NMINFOBCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['NmInfoBColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF ISVHP:[ ](.*)>/i))
		{
			var enable = String(RegExp.$1);
			obj.zzyVGF['IsVHP'] = enable;
		}
		else if(lineStr.match(/<ZZYVGF HPGROUPPIC:[ ](.*)>/i))
		{
			var pic = String(RegExp.$1);
			obj.zzyVGF['HPGroupPic'] = pic;
		}		
		else if(lineStr.match(/<ZZYVGF HPOFX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['HPOfx'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPOFY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['HPOfy'] = v;
		}			
		else if(lineStr.match(/<ZZYVGF ISHPINFOSHOW:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['IsHpInfoShow'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPINFOMODE:[ ](.*)>/i))
		{
			var v = Zzy.VGF.InfoModeToId(String(RegExp.$1));
			obj.zzyVGF['HpInfoMode'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPVALUEINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['HpValueInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPPERCENTINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['HpPercentInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPINFOOFX:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['HpInfoOfx'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF HPINFOOFY:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['HpInfoOfy'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF HPINFOTSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['HpInfoTSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF HPINFOTCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['HpInfoTColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPINFOBSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['HpInfoBSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF HPINFOBCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['HpInfoBColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF HPINFOORIX:[ ](.*)[ ](.*)>/i))
		{
			var index = parseInt(RegExp.$1)+1;
			var v = Number(RegExp.$2);
			obj.zzyVGF['HPOriX' + index] = v;
		}
		else if(lineStr.match(/<ZZYVGF ISVMP:[ ](.*)>/i))
		{
			var enable = String(RegExp.$1);
			obj.zzyVGF['IsVMP'] = enable;
		}
		else if(lineStr.match(/<ZZYVGF MPGROUPPIC:[ ](.*)>/i))
		{
			var pic = String(RegExp.$1);
			obj.zzyVGF['MPGroupPic'] = pic;
		}			
		else if(lineStr.match(/<ZZYVGF MPOFX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['MPOfx'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPOFY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['MPOfy'] = v;
		}			
		else if(lineStr.match(/<ZZYVGF ISMPINFOSHOW:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['IsMpInfoShow'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPINFOMODE:[ ](.*)>/i))
		{
			var v = Zzy.VGF.InfoModeToId(String(RegExp.$1));
			obj.zzyVGF['MpInfoMode'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPVALUEINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['MpValueInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPPERCENTINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['MpPercentInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPINFOOFX:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['MpInfoOfx'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF MPINFOOFY:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['MpInfoOfy'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF MPINFOTSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['MpInfoTSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF MPINFOTCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['MpInfoTColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPINFOBSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['MpInfoBSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF MPINFOBCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['MpInfoBColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF MPINFOORIX:[ ](.*)>/i))
		{
			var index = parseInt(RegExp.$1)+1;
			var v = Number(RegExp.$2);
			obj.zzyVGF['MPOriX' + index] = v;
		}	
		else if(lineStr.match(/<ZZYVGF ISVTP:[ ](.*)>/i))
		{
			var enable = String(RegExp.$1);
			obj.zzyVGF['IsVTP'] = enable;
		}
		else if(lineStr.match(/<ZZYVGF TPGROUPPIC:[ ](.*)>/i))
		{
			var pic = String(RegExp.$1);
			obj.zzyVGF['TPGroupPic'] = pic;
		}			
		else if(lineStr.match(/<ZZYVGF TPOFX:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['TPOfx'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPOFY:[ ](.*)>/i))
		{
			var v = parseInt(RegExp.$1);
			obj.zzyVGF['TPOfy'] = v;
		}			
		else if(lineStr.match(/<ZZYVGF ISTPINFOSHOW:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['IsTpInfoShow'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPINFOMODE:[ ](.*)>/i))
		{
			var v = Zzy.VGF.InfoModeToId(String(RegExp.$1));
			obj.zzyVGF['TpInfoMode'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPVALUEINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['TpValueInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPPERCENTINFOT:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['TpPercentInfoT'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPINFOOFX:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['TpInfoOfx'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF TPINFOOFY:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['TpInfoOfy'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF TPINFOTSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['TpInfoTSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF TPINFOTCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['TpInfoTColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPINFOBSIZE:[ ](.*)>/i))
		{
			var v = Number(RegExp.$1);
			obj.zzyVGF['TpInfoBSize'] = v;
		}		
		else if(lineStr.match(/<ZZYVGF TPINFOBCOLOR:[ ](.*)>/i))
		{
			var v = String(RegExp.$1);
			obj.zzyVGF['TpInfoBColor'] = v;
		}
		else if(lineStr.match(/<ZZYVGF TPINFOORIX:[ ](.*)>/i))
		{
			var index = parseInt(RegExp.$1)+1;
			var v = Number(RegExp.$2);
			obj.zzyVGF['TPOriX' + index] = v;
		}	
		else if(lineStr.match(/<ZZYVGF CUSUSE:[ ](.*)>/i))
		{
			var idStr = String(RegExp.$1);
			var idArr = Zzy.VGF.StrToIDArr(idStr);
			obj.zzyVGF['CusUseArr'] = idArr;
		}
		else if(lineStr.match(/<ZZYVGF CUSCURVAR:[ ](.*)[ ](.*)>/i))
		{
			var idStr = String(RegExp.$1);
			var varId = parseInt(RegExp.$2);
			var idArr = Zzy.VGF.StrToIDArr(idStr);
			
			if(!obj.zzyVGF['CusCurVarArr']){obj.zzyVGF['CusCurVarArr'] = [];}
			
			var len = idArr.length;
			for(var k=0;k<len;k++)
			{
				obj.zzyVGF['CusCurVarArr'][idArr[k]] = varId;
			}
		}
		else if(lineStr.match(/<ZZYVGF CUSMAXVAR:[ ](.*)[ ](.*)>/i))
		{
			var idStr = String(RegExp.$1);
			var varId = parseInt(RegExp.$2);
			var idArr = Zzy.VGF.StrToIDArr(idStr);
			
			if(!obj.zzyVGF['CusMaxVarArr']){obj.zzyVGF['CusMaxVarArr'] = [];}
			
			var len = idArr.length;
			for(var k=0;k<len;k++)
			{
				obj.zzyVGF['CusMaxVarArr'][idArr[k]] = varId;
			}
		}		
		
	}
  }
}




//=============================================================================
// BattleManager
//=============================================================================
Zzy.VGF.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result)
{
	Zzy.VGF.BattleManager_endBattle.call(this,result);
	
	//清理所有的玩家位图信息,防止存档是导致崩溃
	var actorArr = $gameParty.battleMembers();
	var len = actorArr.length;
	for(var i=0;i<len;i++)
	{
		var actor = actorArr[i];
		if(!actor)continue;
		actor.setZzyVGFBattlerSpr(undefined);
		
	}
	
	
}





//=============================================================================
// Game_Battler
//=============================================================================
Zzy.VGF.Game_Battler_initialize = Game_Battler.prototype.initialize;
Game_Battler.prototype.initialize = function() 
{
	Zzy.VGF.Game_Battler_initialize.call(this);
	this._ZzyVGFSpr = undefined;
};

Game_Battler.prototype.setZzyVGFBattlerSpr = function(spr)
{
	this._ZzyVGFSpr = spr;
}

Game_Battler.prototype.GetZzyVGFSpr = function()
{
	return this._ZzyVGFSpr;
}

Game_Battler.prototype.GetZzyVGFSprX = function()
{
	if(!this._ZzyVGFSpr)return 0;
	var x = this._ZzyVGFSpr.x - this._ZzyVGFSpr.width * this._ZzyVGFSpr.anchor.x + this._ZzyVGFSpr.width/2;
	return x;
}


Game_Battler.prototype.GetZzyVGFData = function()
{
	if(this.isEnemy())
	{
		var id = this.enemyId();
		return $dataEnemies[id];
	}
	else if(this.isActor())
	{
		var id = this.actorId();
		return $dataActors[id];
	}
	return undefined;
}


Game_Battler.prototype.GetVGFShowPos = function()
{
	var ev = this.GetZzyVGFData();
	if(ev && ev.zzyVGF.ShowPos !== undefined)
	{
		return ev.zzyVGF.ShowPos;
	}
	return Zzy.Param.VGFShowPos;
}


Game_Battler.prototype.GetZzyVGFSprY = function()
{
	if(!this._ZzyVGFSpr)return 0;
	var posIndex = this.GetVGFShowPos();
	
	var cy = this._ZzyVGFSpr.y - this._ZzyVGFSpr.height * posIndex/2;
	
	return cy;
}



//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.GetZzyVGFSprX = function()
{
	if(Zzy.Param.VGFActorGroupPosUnify)return 0;
	return Game_Battler.prototype.GetZzyVGFSprX.call(this);
}


Game_Actor.prototype.GetZzyVGFSprY = function()
{
	if(Zzy.Param.VGFActorGroupPosUnify)return 0;
	return Game_Battler.prototype.GetZzyVGFSprY.call(this);
}


//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.GetZzyVGFSprX = function()
{
	if(Zzy.Param.VGFEnemyGroupPosUnify)return 0;
	return Game_Battler.prototype.GetZzyVGFSprX.call(this);
}


Game_Enemy.prototype.GetZzyVGFSprY = function()
{
	if(Zzy.Param.VGFEnemyGroupPosUnify)return 0;
	return Game_Battler.prototype.GetZzyVGFSprY.call(this);
}



//此处仿造YEP虚拟血条
//=============================================================================
// Sprite_Battler
//=============================================================================


Zzy.VGF.Sprite_Battler_initialize = Sprite_Battler.prototype.initialize;
Sprite_Battler.prototype.initialize = function(battler) 
{
	Zzy.VGF.Sprite_Battler_initialize.call(this,battler);
	
	this.isZzyVGFBeing = false;
};


Zzy.VGF.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() 
{
    Zzy.VGF.Sprite_Battler_update.call(this);
	this.updateZzyVGFSingleShow();
	this.updateZzyVGFShow();//全部显示
    this.CreateZzyVGFVGroupWindow();
};


Sprite_Battler.prototype.updateZzyVGFSingleShow = function()//独立显示-虚函数
{
	
}

Sprite_Battler.prototype.updateZzyVGFShow = function()
{
	if(!this._ZzyVGFWindow)return;
	
	if(this.IsNeedZzyVGFShow())//判断是否需要显示
	{
		this.ZzyVGFFadeIn();//显示
	}
	else
	{
		this.ZzyVGFFadeOut();//隐藏
	}
}








Sprite_Battler.prototype.GetZzyVGFData = function()
{
	if(this._battler)
	{
		if(this._battler.isEnemy())
		{
			var id = this._battler.enemyId();
			return $dataEnemies[id];
		}
		else if(this._battler.isActor())
		{
			var id = this._battler.actorId();
			return $dataActors[id];
		}
	}
	return undefined;
}


Sprite_Battler.prototype.CreateZzyVGFVGroupWindow = function() //创造虚拟血条
{
	if(this._ZzyVGFWindowBeing)return;	
	if (!this._battler) return;
	var isEnemy = true;

	if(this._battler.isEnemy())//如果是敌人
	{
		if(!this.JudgZzyVGFEnemyShow())return;
		
		isEnemy = true;
	}
	else if(this._battler.isActor())//如果是玩家
	{
		if(!this.JudgZzyVGFActorShow())return;
		
		isEnemy = false;
	}
	else{return;}

	
	this._ZzyVGFWindowBeing = true;
	
	if(isEnemy)
	{
		this._ZzyVGFWindow = new Window_ZzyVGFEnemyVGroup(this._battler);
	}
	else
	{
		 this._ZzyVGFWindow = new Window_ZzyVGFActorVGroup(this._battler);
	}
	
    //this._ZzyVGFWindow.setBattler(this._battler);
	this._battler.setZzyVGFBattlerSpr(this);//自身设置过去
    this.parent.parent.addChild(this._ZzyVGFWindow);
};

Sprite_Battler.prototype.JudgZzyVGFEnemyShow = function()//判断敌人是否显示条组
{
	if(!Zzy.VGF.EvalFormula(Zzy.VGF.GetIsVGroup(this._battler),this._battler))return false;//不显示
	
	return true;
}

Sprite_Battler.prototype.JudgZzyVGFActorShow = function()//判断玩家是否显示条组
{
	if(!Zzy.VGF.EvalFormula(Zzy.VGF.GetIsVGroup(this._battler),this._battler))return false;//不显示
	//控制是否仅仅在SV模式下显示
	if(Zzy.Param.VGFIsOnlySVActorShow && !$gameSystem.isSideView())return false;
 
	return true;
}


Zzy.VGF.Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function(battler) 
{
    Zzy.VGF.Sprite_Battler_setBattler.call(this, battler);
    if (this._ZzyVGFWindow) {this._ZzyVGFWindow.setBattler(battler);}
};


Sprite_Battler.prototype.IsZzyVGFNeedRefresh = function()
{
	if(this._ZzyVGFWindow) return this._ZzyVGFWindow.IsNeedRefresh();
	return false;
}


Sprite_Battler.prototype.ZzyVGFFadeIn = function()
{
	this._ZzyVGFWindow.ExeFadeIn();
}

Sprite_Battler.prototype.ZzyVGFFadeOut = function()
{
	this._ZzyVGFWindow.ExeFadeOut();
}





Sprite_Battler.prototype.IsNeedZzyVGFShow = function()//血条显示
{
	if(this._battler)
	{
		var modeId = Zzy.VGF.GetShowMode(this._battler);
		if(this._battler.isEnemy())
		{
			switch(modeId)
			{
				case 1:
					if(!this._battler.isDead())return true;//如果没有死亡则显示
				break;
				
				case 2:
					if(this.IsZzyVGFNeedRefresh())return true;
					if(this._battler.isSelected())return true;
					//asd
				break;
			}		
		}
		else if(this._battler.isActor())
		{
			switch(modeId)
			{
				case 1://总是显示
					return true;
				break;
				
				case 2://被选中或是被攻击受伤时显示,数值变化时
					if(this.IsZzyVGFNeedRefresh())return true;
					if(this.IsZzyVGFActorSelect())return true;//被选中
					if(this._battler.isSelected())return true;
				break;
			}
		}
		
		
	}
	return false;
}

Sprite_Battler.prototype.IsZzyVGFActorSelect = function()
{
	return false;
}



//=============================================================================
// Sprite_Actor
//=============================================================================

Sprite_Actor.prototype.ZzyVGFFadeIn = function()
{
	if(Zzy.Param.VGFOnlySingleActorShow)
	{
		if(Zzy.VGF.SingleActor === undefined){Zzy.VGF.SingleActor = this._ZzyVGFWindow;}
		else if(Zzy.VGF.SingleActor !== this._ZzyVGFWindow){return;}
	}	
	
	Sprite_Battler.prototype.ZzyVGFFadeIn.call(this);
}

Sprite_Actor.prototype.ZzyVGFFadeOut = function()
{
	Sprite_Battler.prototype.ZzyVGFFadeOut.call(this);
}

Sprite_Actor.prototype.updateZzyVGFSingleShow = function()
{
	if(!Zzy.Param.VGFOnlySingleActorShow)return;
	if(Zzy.VGF.SingleActor)
	{
		if(Zzy.VGF.SingleActor.FadeOutComp())
		{Zzy.VGF.SingleActor = undefined;}
	}
}


//=============================================================================
// Sprite_Enemy
//=============================================================================

Sprite_Enemy.prototype.ZzyVGFFadeIn = function()
{
	if(Zzy.Param.VGFOnlySingleEnemyShow)
	{	
		if(Zzy.VGF.SingleEnemy === undefined){Zzy.VGF.SingleEnemy = this._ZzyVGFWindow;}
		else if(Zzy.VGF.SingleEnemy !== this._ZzyVGFWindow){return;}	
	}
	
	Sprite_Battler.prototype.ZzyVGFFadeIn.call(this);
}

Sprite_Enemy.prototype.ZzyVGFFadeOut = function()
{
	
	Sprite_Battler.prototype.ZzyVGFFadeOut.call(this);
}

Sprite_Enemy.prototype.updateZzyVGFSingleShow = function()
{
	if(!Zzy.Param.VGFOnlySingleEnemyShow)return;
	if(Zzy.VGF.SingleEnemy)
	{
		if(Zzy.VGF.SingleEnemy.FadeOutComp())
		{Zzy.VGF.SingleEnemy = undefined;}
	}
}



//=============================================================================
// Window_ZzyVGFVGroup
//=============================================================================
function Window_ZzyVGFVGroup() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyVGFVGroup.prototype = Object.create(Window_Base.prototype);
Window_ZzyVGFVGroup.prototype.constructor = Window_ZzyVGFVGroup;

Window_ZzyVGFVGroup.prototype.initialize = function(battler) 
{
	this._cusIdArr = [];//自定义属性条
	this._cusSprArr = [];//自定义条组
	
	Window_Base.prototype.initialize.call(this, 0, 0, 0, 0);
	
	this._battler = battler;

	this.posX = Zzy.VGF.GetOfx(this._battler);
	this.posY = Zzy.VGF.GetOfy(this._battler);

	this.CreateGroup();//hp组合条

    this.opacity = 0;
	this.visible = true;//开局关闭

	this._frame = Zzy.VGF.GetInOutFrame(this._battler);
	this._fadein = false;
	this._fadeout = false;
	this._cframe = 0;	
	
};

Window_ZzyVGFVGroup.prototype.setBattler = function(battler) {
    if (this._battler === battler) return;
    this._battler = battler;
};



Window_ZzyVGFVGroup.prototype.update = function()
{
	Window_Base.prototype.update.call(this);
	this.updateFade();//更新透明度变化
	
}

Window_ZzyVGFVGroup.prototype.updateFade = function()
{
	if(this._fadein)
	{
		var isRef = false;
		if(this._cframe < this._frame)
		{
			this._cframe++;
		}
		
	}
	else if(this._fadeout)
	{
		if(this._cframe > 0)
		{
			this._cframe--;
		}
	}
	
	var rate = this._cframe / this._frame;
	var opRate = 255 * rate;
	
	this._bkSpr.opacity = opRate;
	
	if(this.IsHaveHp())
	{
		this._hpBottomSpr.opacity = opRate;
		this._hpDeepSpr.opacity = opRate;
		this._hpSpr.opacity = opRate;
		if(this._isHpInfoShow)this._valueHpTextSpr.opacity = opRate;
	}
	
	if(this.IsHaveMp())
	{
		this._mpBottomSpr.opacity = opRate;
		this._mpDeepSpr.opacity = opRate;
		this._mpSpr.opacity = opRate;	
		if(this._isMpInfoShow)this._valueMpTextSpr.opacity = opRate;		
	}

	if(this.IsHaveTp())
	{
		this._tpBottomSpr.opacity = opRate;
		this._tpDeepSpr.opacity = opRate;
		this._tpSpr.opacity = opRate;	
		if(this._isTpInfoShow)this._valueTpTextSpr.opacity = opRate;		
	}

	//自定义条组配置属性
	var cLen = this._cusSprArr.length;
	for(var i=0;i<cLen;i++)
	{
		var cSpr = this._cusSprArr[i];
		cSpr.spr.opacity = opRate;
		cSpr.bottomSpr.opacity = opRate;
		cSpr.deepSpr.opacity = opRate;
		
		if(cSpr.textSpr)cSpr.textSpr.opacity = opRate;
	}
	

	
	this._fsSpr.opacity = opRate;
	
	if(this.IsNameShow())
	{
		this._nameTextSpr.opacity = opRate;
	}


}


Window_ZzyVGFVGroup.prototype.CreateGroup = function()
{
	this._isHpShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetVGFIsVHP(this._battler),this._battler);
	this._isMpShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetVGFIsVMP(this._battler),this._battler);
	this._isTpShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetVGFIsVTP(this._battler),this._battler);
	this._isNameShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetIsNmInfoShow(this._battler),this._battler);
	
	this._isHpInfoShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetIsHpInfoShow(this._battler),this._battler);
	this._isMpInfoShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetIsMpInfoShow(this._battler),this._battler);
	this._isTpInfoShow = Zzy.VGF.EvalFormula(Zzy.VGF.GetIsTpInfoShow(this._battler),this._battler);
	

	this._cusIdArr = [];//自定义属性条
	this._cusSprArr = [];//自定义条组	
	
	//图片部分
	this._bkSpr = this.CreateBkSpr();
	this._bkSpr.SetBitmap(Zzy.VGF.GetBkGroupPic(this._battler));
	
	if(this._isHpShow)
	{
		//-------血条条组-------
		this._hpBottomSpr = this.CreateHpDeepSpr();
		this._hpBottomSpr.BindObject(this._battler,0,0);
		this._hpDeepSpr = this.CreateHpDeepSpr();
		this._hpDeepSpr.BindObject(this._battler,1,0);
		this._hpSpr = this.CreateHpSpr();
		this._hpSpr.BindObject(this._battler,2,0);		
	}
	
	if(this._isMpShow)
	{
		//-------蓝条条组-------
		this._mpBottomSpr = this.CreateMpDeepSpr();
		this._mpBottomSpr.BindObject(this._battler,0,1);
		this._mpDeepSpr = this.CreateMpDeepSpr();
		this._mpDeepSpr.BindObject(this._battler,1,1);
		this._mpSpr = this.CreateMpSpr();
		this._mpSpr.BindObject(this._battler,2,1);
	}	
	
	if(this._isTpShow)
	{
		//-------TP条条组-------
		this._tpBottomSpr = this.CreateTpDeepSpr();
		this._tpBottomSpr.BindObject(this._battler,0,2);
		this._tpDeepSpr = this.CreateTpDeepSpr();
		this._tpDeepSpr.BindObject(this._battler,1,2);
		this._tpSpr = this.CreateTpSpr();
		this._tpSpr.BindObject(this._battler,2,2);			
	}
	
	
	//自定义条组部分
	this._cusIdArr = Zzy.VGF.GetCusCurUse(this._battler);
	var cLen = this._cusIdArr.length;
	for(var i=0;i<cLen;i++)
	{
		var id = this._cusIdArr[i];
		
		var info = Zzy.Param.VGFCustomStructArr[id];
		if(info)
		{
			this.MakeAddCreateCusInfo(info,id);
		}
	}

	
	this._fsSpr = this.CreateFsSpr();
	this._fsSpr.SetBitmap(Zzy.VGF.GetFsGroupPic(this._battler));

	
	//名称文本
	if(this._isNameShow)
	{
		this._nameTextSpr = this.CreateNameTextSpr();
		this._nameTextSpr.AutoSetText();	
	}

	
	if(this._isHpShow && this._isHpInfoShow)
	{
		this._valueHpTextSpr = this.CreateValueHpTextSpr();
		this._valueHpTextSpr.AutoSetText();
	}
	
	if(this._isMpShow && this._isMpInfoShow)
	{
		this._valueMpTextSpr = this.CreateValueMpTextSpr();
		this._valueMpTextSpr.AutoSetText();
	}
	
	if(this._isTpShow && this._isTpInfoShow)
	{
		this._valueTpTextSpr = this.CreateValueTpTextSpr();
		this._valueTpTextSpr.AutoSetText();	
	}
	
	//自定义文本部分
	var len2 = this._cusSprArr.length;
	for(var i=0;i<len2;i++)
	{
		var cSpr = this._cusSprArr[i];//获取图片组
		var info = cSpr.spr.cusInfo;
		
		if(Zzy.VGF.EvalFormula(info.IsCusInfoShow))
		{
			var tSpr = this.CreateValueCusTextSpr(info);
			this._cusSprArr[i].textSpr = tSpr;
			this._cusSprArr[i].textSpr.AutoSetText();			
		}
	}
	
}

Window_ZzyVGFVGroup.prototype.MakeAddCreateCusInfo = function(info,id)
{
	var aCusGroupArr = [];//单个自定义条组
	
	var mInfo = {};
	for(key in info)
	{
		mInfo[key] = info[key];
	}

	mInfo['CusCurValueVar'] = Zzy.VGF.GetCusCurVar(this._battler,id);   //修改变量ID监控
	mInfo['CusMaxValueVar'] = Zzy.VGF.GetCusMaxVar(this._battler,id);   //修改变量ID监控


	aCusGroupArr.bottomSpr = this.CreateCusSpr(mInfo);//自定义
	aCusGroupArr.bottomSpr.BindObject(this._battler,0,0);
	
	aCusGroupArr.deepSpr = this.CreateCusSpr(mInfo);//自定义
	aCusGroupArr.deepSpr.BindObject(this._battler,1,0);
	
	aCusGroupArr.spr = this.CreateCusSpr(mInfo);//自定义
	aCusGroupArr.spr.BindObject(this._battler,2,0);	

	aCusGroupArr.id = id;//存储ID变量值

	this._cusSprArr.push(aCusGroupArr);
}



Window_ZzyVGFVGroup.prototype.CreateValueCusTextSpr = function(mInfo)
{
	var spr = new Sprite_ZzyVGFValueTextCustom(this,mInfo);
	this.addChild(spr);
	return spr;	
}


Window_ZzyVGFVGroup.prototype.CreateCusSpr = function(mInfo)
{
	var spr = new Sprite_ZzyVGFGroup_Custom(this,mInfo);
	this.addChild(spr);	
	return spr;	
}


Window_ZzyVGFVGroup.prototype.IsHaveHp = function()
{
	return this._isHpShow;
}

Window_ZzyVGFVGroup.prototype.IsHaveMp = function()
{
	return this._isMpShow;
}

Window_ZzyVGFVGroup.prototype.IsHaveTp = function()
{
	return this._isTpShow;
}

Window_ZzyVGFVGroup.prototype.IsNameShow = function()
{
	return this._isNameShow;
}

Window_ZzyVGFVGroup.prototype.CreateValueHpTextSpr = function()
{
	var spr = new Sprite_ZzyVGFValueTextHp(this);
	this.addChild(spr);
	return spr;
}

Window_ZzyVGFVGroup.prototype.CreateValueMpTextSpr = function()
{
	var spr = new Sprite_ZzyVGFValueTextMp(this);
	this.addChild(spr);
	return spr;
}

Window_ZzyVGFVGroup.prototype.CreateValueTpTextSpr = function()
{
	var spr = new Sprite_ZzyVGFValueTextTp(this);
	this.addChild(spr);
	return spr;
}



Window_ZzyVGFVGroup.prototype.CreateNameTextSpr = function()//创建名称文本
{
	var spr = new Sprite_ZzyVGFNameText(this);
	this.addChild(spr);
	return spr;
}


Window_ZzyVGFVGroup.prototype.CreateFsSpr = function()
{
	var spr = new Sprite_ZzyVGFPic(this);
	this.addChild(spr);	
	return spr;		
}



Window_ZzyVGFVGroup.prototype.CreateBkSpr = function()
{
	var spr = new Sprite_ZzyVGFPic(this);
	this.addChild(spr);	
	return spr;
}



Window_ZzyVGFVGroup.prototype.CreateHpDeepSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Hp(this);
	this.addChild(spr);	
	return spr;	
}
Window_ZzyVGFVGroup.prototype.CreateHpSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Hp(this);
	this.addChild(spr);	
	return spr;		
}


Window_ZzyVGFVGroup.prototype.CreateMpDeepSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Mp(this);
	this.addChild(spr);	
	return spr;	
}
Window_ZzyVGFVGroup.prototype.CreateMpSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Mp(this);
	this.addChild(spr);	
	return spr;		
}


Window_ZzyVGFVGroup.prototype.CreateTpDeepSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Tp(this);
	this.addChild(spr);	
	return spr;	
}
Window_ZzyVGFVGroup.prototype.CreateTpSpr = function()
{
	var spr = new Sprite_ZzyVGFGroup_Tp(this);
	this.addChild(spr);	
	return spr;		
}






Window_ZzyVGFVGroup.prototype.standardPadding = function() 
{
    return 0;
};

Window_ZzyVGFVGroup.prototype.textPadding = function() 
{
    return 0;
};


Window_ZzyVGFVGroup.prototype.ExeFadeIn = function()
{
	this._fadein = true;
	this._fadeout = false;
}

Window_ZzyVGFVGroup.prototype.ExeFadeOut = function()
{
	this._fadeout = true;
	this._fadein = false;
}


Window_ZzyVGFVGroup.prototype.IsNeedRefresh = function()//数值发生变化时,必须进行显示
{
	var battler = this._battler;
	if(this.IsHaveHp() && !isNaN(this._hpDeepSpr.cw) && this._hpDeepSpr.cw !== this._hpDeepSpr.deepCw){return true;}
	if(this.IsHaveMp() && !isNaN(this._mpDeepSpr.cw) && this._mpDeepSpr.cw !== this._mpDeepSpr.deepCw){return true;}
	if(this.IsHaveTp() && !isNaN(this._tpDeepSpr.cw) && this._tpDeepSpr.cw !== this._tpDeepSpr.deepCw){return true;}
	
	var cLen = this._cusSprArr.length;
	

	for(var i=0;i<cLen;i++)
	{
		var group = this._cusSprArr[i];
		if(group.deepSpr.cw !== group.deepSpr.deepCw)return true;
	}
	
	return false;
}


Window_ZzyVGFVGroup.prototype.FadeInComp = function()//进入完成
{
	return this._cframe >= this._frame;
}

Window_ZzyVGFVGroup.prototype.FadeOutComp = function()//离开完成
{
	return this._cframe <= 0;
}







//=============================================================================
// Window_ZzyVGFEnemyVGroup
//=============================================================================
function Window_ZzyVGFEnemyVGroup() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyVGFEnemyVGroup.prototype = Object.create(Window_ZzyVGFVGroup.prototype);
Window_ZzyVGFEnemyVGroup.prototype.constructor = Window_ZzyVGFEnemyVGroup;

Window_ZzyVGFEnemyVGroup.prototype.initialize = function(battler) 
{
	Window_ZzyVGFVGroup.prototype.initialize.call(this,battler);
}




//=============================================================================
// Window_ZzyVGFActorVGroup
//=============================================================================
function Window_ZzyVGFActorVGroup() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyVGFActorVGroup.prototype = Object.create(Window_ZzyVGFVGroup.prototype);
Window_ZzyVGFActorVGroup.prototype.constructor = Window_ZzyVGFActorVGroup;

Window_ZzyVGFActorVGroup.prototype.initialize = function(battler) 
{
	Window_ZzyVGFVGroup.prototype.initialize.call(this,battler);
}






//==========================================================================
//Sprite_ZzyVGFBase
//==========================================================================
function Sprite_ZzyVGFBase() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFBase.prototype = Object.create(Sprite.prototype);
Sprite_ZzyVGFBase.prototype.constructor = Sprite_ZzyVGFBase;

Sprite_ZzyVGFBase.prototype.initialize = function(pointer)//血条对象
{
	Sprite.prototype.initialize.call(this);
	
	this.myParent = pointer;
	this.obj = pointer._battler;
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;	

	
}

Sprite_ZzyVGFBase.prototype.ScreenX = function()
{
	return this.myParent.posX + this.obj.GetZzyVGFSprX();
}

Sprite_ZzyVGFBase.prototype.ScreenY = function()
{
	return this.myParent.posY + this.obj.GetZzyVGFSprY();
}


Sprite_ZzyVGFBase.prototype.update = function()
{
	Sprite.prototype.update.call(this);
	
	this.updatePos();
}

Sprite_ZzyVGFBase.prototype.updatePos = function()
{
	this.x = this.ScreenX();
	this.y = this.ScreenY();
}




//==========================================================================
//Sprite_ZzyVGFText
//==========================================================================
function Sprite_ZzyVGFText() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFText.prototype = Object.create(Sprite_ZzyVGFBase.prototype);
Sprite_ZzyVGFText.prototype.constructor = Sprite_ZzyVGFText;

Sprite_ZzyVGFText.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFBase.prototype.initialize.call(this,pointer);
	this.textInfo = {};

	this.CreaterBitmap();//创造bitmap
}

Sprite_ZzyVGFText.prototype.CreaterBitmap = function()
{
	this.fSize = this.GetBitmapTSize();//Zzy.VGF.GetHpInfoTSize(this.obj);
	this.bSize = this.GetBitmapBSize();//Zzy.VGF.GetHpInfoBSize(this.obj);
	this.bitmap = new Bitmap(Graphics.boxWidth,this.fSize+this.bSize*2);
	
	this.SetBitmapConfig();//设置配置
}

Sprite_ZzyVGFText.prototype.SetText = function(text)//设置文本
{
	this.bitmap.clear();//清空
	
	var obj = this.myParent._battler;
	this.bitmap.fontSize = this.textInfo.fontSize;
	this.bitmap.textColor = this.textInfo.textColor;
	this.bitmap.outlineWidth = this.textInfo.outlineWidth;
	this.bitmap.outlineColor = this.textInfo.outlineColor;
	this.bitmap.drawText(text,0,this.bSize,this.bitmap.width,this.bitmap.height,'center');
}


Sprite_ZzyVGFText.prototype.GetBitmapTSize = function()
{
	return 0;
}

Sprite_ZzyVGFText.prototype.GetBitmapBSize = function()
{
	return 0;
}


Sprite_ZzyVGFText.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = 28;
	this.textInfo.textColor = '#ffffff';
	this.textInfo.outlineWidth = 1;
	this.textInfo.outlineColor = 'rgba(0,0,0,0.5)';
}


//==========================================================================
//Sprite_ZzyVGFNameText
//==========================================================================
//设置名称文本
function Sprite_ZzyVGFNameText() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFNameText.prototype = Object.create(Sprite_ZzyVGFText.prototype);
Sprite_ZzyVGFNameText.prototype.constructor = Sprite_ZzyVGFNameText;

Sprite_ZzyVGFNameText.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFText.prototype.initialize.call(this,pointer);
	
	this.nmOfx = Zzy.VGF.GetNmInfoOfx(this.obj);
	this.nmOfy = Zzy.VGF.GetNmInfoOfy(this.obj);
}


Sprite_ZzyVGFNameText.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFBase.prototype.ScreenX.call(this);
	sx += this.nmOfx;
	return sx;
}

Sprite_ZzyVGFNameText.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFBase.prototype.ScreenY.call(this);
	sy += this.nmOfy;
	return sy;
}


Sprite_ZzyVGFNameText.prototype.AutoSetText = function()
{
	var text = '';
	var fText = Zzy.VGF.GetNmInfoFormat(this.obj);


	var name = '';
	var letter = '';
	if(this.obj.isEnemy())
	{
		var id = this.obj.enemyId();
		name = $dataEnemies[id].name;
		letter = this.obj._letter ? this.obj._letter : '';
	}
	else
	{
		var id = this.obj.actorId();
		name = $dataActors[id].name;		
	}
	
	text = fText.format(name,letter);

	this.SetText(text);
}

Sprite_ZzyVGFNameText.prototype.GetBitmapTSize = function()
{
	return Zzy.VGF.GetNmInfoTSize(this.obj);
}

Sprite_ZzyVGFNameText.prototype.GetBitmapBSize = function()
{
	return Zzy.VGF.GetNmInfoBSize(this.obj);
}

Sprite_ZzyVGFNameText.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = Zzy.VGF.GetNmInfoTSize(this.obj);
	this.textInfo.textColor = Zzy.VGF.GetNmInfoTColor(this.obj);
	this.textInfo.outlineWidth = Zzy.VGF.GetNmInfoBSize(this.obj);
	this.textInfo.outlineColor = Zzy.VGF.GetNmInfoBColor(this.obj);
}




//==========================================================================
//Sprite_ZzyVGFValueText
//==========================================================================
//设置数值文本
function Sprite_ZzyVGFValueText() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFValueText.prototype = Object.create(Sprite_ZzyVGFText.prototype);
Sprite_ZzyVGFValueText.prototype.constructor = Sprite_ZzyVGFValueText;

Sprite_ZzyVGFValueText.prototype.initialize = function(pointer)//血条信息
{
	Sprite_ZzyVGFText.prototype.initialize.call(this,pointer);
	
	this.vOfx = this.GetInfoOfx();//Zzy.VGF.GetHpInfoOfx(this.obj);
	this.vOfy = this.GetInfoOfy();//Zzy.VGF.GetHpInfoOfy(this.obj);
	this.modeId = this.GetInfoMode();//Zzy.VGF.GetHpInfoMode(this.obj);
	this.fText1 = this.GetFText1();//Zzy.VGF.GetHpValueInfoT(this.obj);
	this.fText2 = this.GetFText2();//Zzy.VGF.GetHpPercentInfoT(this.obj);
	this.prevCValue = this.GetCValue();//比较数值
}

Sprite_ZzyVGFValueText.prototype.GetInfoMode = function()
{
	return 1;
}

Sprite_ZzyVGFValueText.prototype.GetFText1 = function()
{
	return '';
}

Sprite_ZzyVGFValueText.prototype.GetFText2 = function()
{
	return '';
}


Sprite_ZzyVGFValueText.prototype.GetInfoOfx = function()
{
	return 0;
}
Sprite_ZzyVGFValueText.prototype.GetInfoOfy = function()
{
	return 0;
}

Sprite_ZzyVGFValueText.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFBase.prototype.ScreenX.call(this);
	sx += this.vOfx;
	return sx;
}

Sprite_ZzyVGFValueText.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFBase.prototype.ScreenY.call(this);
	sy += this.vOfy;
	return sy;
}

Sprite_ZzyVGFValueText.prototype.update = function()
{
	Sprite_ZzyVGFText.prototype.update.call(this);
	
	this.updateValueText();
	
}

Sprite_ZzyVGFValueText.prototype.updateValueText = function()
{
	var tempV = this.GetCValue();
	if(this.prevCValue !== tempV)
	{
		this.prevCValue = tempV;
		this.AutoSetText();//自动刷新
	}
}

Sprite_ZzyVGFValueText.prototype.AutoSetText = function()
{
	var text = '';

	var fText = '';

	var cValue = this.GetCValue();
	var mValue = this.GetMValue();
	switch(this.modeId)
	{
		case 1:
			text = this.fText1.format(cValue,mValue);
		break;
		
		case 2:
			var rate = cValue * 100 / mValue;
			rate = rate.toFixed(2);//保留两位小数
			text = this.fText2.format(rate);
		break;
	}
	this.SetText(text);
}


Sprite_ZzyVGFValueText.prototype.GetCValue = function()
{return 0;}

Sprite_ZzyVGFValueText.prototype.GetMValue = function()
{return 1;}



//==========================================================================
//Sprite_ZzyVGFValueTextHp
//==========================================================================
//设置数值文本
function Sprite_ZzyVGFValueTextHp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFValueTextHp.prototype = Object.create(Sprite_ZzyVGFValueText.prototype);
Sprite_ZzyVGFValueTextHp.prototype.constructor = Sprite_ZzyVGFValueTextHp;

Sprite_ZzyVGFValueTextHp.prototype.initialize = function(pointer)//血条信息
{
	Sprite_ZzyVGFValueText.prototype.initialize.call(this,pointer);
}

Sprite_ZzyVGFValueTextHp.prototype.GetInfoOfx = function()
{return Zzy.VGF.GetHpInfoOfx(this.obj)+Zzy.VGF.GetHPOfx(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.GetInfoOfy = function()
{return Zzy.VGF.GetHpInfoOfy(this.obj)+Zzy.VGF.GetHPOfy(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.GetCValue = function()
{return this.obj.hp;}

Sprite_ZzyVGFValueTextHp.prototype.GetMValue = function()
{return this.obj.mhp;}

Sprite_ZzyVGFValueTextHp.prototype.GetBitmapTSize = function()
{return Zzy.VGF.GetHpInfoTSize(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.GetBitmapBSize = function()
{return Zzy.VGF.GetHpInfoBSize(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = Zzy.VGF.GetHpInfoTSize(this.obj);
	this.textInfo.textColor = Zzy.VGF.GetHpInfoTColor(this.obj);
	this.textInfo.outlineWidth = Zzy.VGF.GetHpInfoBSize(this.obj);
	this.textInfo.outlineColor = Zzy.VGF.GetHpInfoBColor(this.obj);
}

Sprite_ZzyVGFValueTextHp.prototype.GetFText1 = function()
{return Zzy.VGF.GetHpValueInfoT(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.GetFText2 = function()
{return Zzy.VGF.GetHpPercentInfoT(this.obj);}

Sprite_ZzyVGFValueTextHp.prototype.GetInfoMode = function()
{return Zzy.VGF.GetHpInfoMode(this.obj);}



//==========================================================================
//Sprite_ZzyVGFValueTextMp
//==========================================================================
//设置数值文本
function Sprite_ZzyVGFValueTextMp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFValueTextMp.prototype = Object.create(Sprite_ZzyVGFValueText.prototype);
Sprite_ZzyVGFValueTextMp.prototype.constructor = Sprite_ZzyVGFValueTextMp;

Sprite_ZzyVGFValueTextMp.prototype.initialize = function(pointer)//血条信息
{
	Sprite_ZzyVGFValueText.prototype.initialize.call(this,pointer);
}

Sprite_ZzyVGFValueTextMp.prototype.GetInfoOfx = function()
{return Zzy.VGF.GetMpInfoOfx(this.obj)+Zzy.VGF.GetMPOfx(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.GetInfoOfy = function()
{return Zzy.VGF.GetMpInfoOfy(this.obj)+Zzy.VGF.GetMPOfy(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.GetCValue = function()
{return this.obj.mp;}

Sprite_ZzyVGFValueTextMp.prototype.GetMValue = function()
{return this.obj.mmp;}

Sprite_ZzyVGFValueTextMp.prototype.GetBitmapTSize = function()
{return Zzy.VGF.GetMpInfoTSize(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.GetBitmapBSize = function()
{return Zzy.VGF.GetMpInfoBSize(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = Zzy.VGF.GetMpInfoTSize(this.obj);
	this.textInfo.textColor = Zzy.VGF.GetMpInfoTColor(this.obj);
	this.textInfo.outlineWidth = Zzy.VGF.GetMpInfoBSize(this.obj);
	this.textInfo.outlineColor = Zzy.VGF.GetMpInfoBColor(this.obj);
}

Sprite_ZzyVGFValueTextMp.prototype.GetFText1 = function()
{return Zzy.VGF.GetMpValueInfoT(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.GetFText2 = function()
{return Zzy.VGF.GetMpPercentInfoT(this.obj);}

Sprite_ZzyVGFValueTextMp.prototype.GetInfoMode = function()
{return Zzy.VGF.GetMpInfoMode(this.obj);}



//==========================================================================
//Sprite_ZzyVGFValueTextTp
//==========================================================================
//设置数值文本
function Sprite_ZzyVGFValueTextTp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFValueTextTp.prototype = Object.create(Sprite_ZzyVGFValueText.prototype);
Sprite_ZzyVGFValueTextTp.prototype.constructor = Sprite_ZzyVGFValueTextTp;

Sprite_ZzyVGFValueTextTp.prototype.initialize = function(pointer)//血条信息
{
	Sprite_ZzyVGFValueText.prototype.initialize.call(this,pointer);
}

Sprite_ZzyVGFValueTextTp.prototype.GetInfoOfx = function()
{return Zzy.VGF.GetTpInfoOfx(this.obj)+Zzy.VGF.GetTPOfx(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.GetInfoOfy = function()
{return Zzy.VGF.GetTpInfoOfy(this.obj)+Zzy.VGF.GetTPOfy(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.GetCValue = function()
{return this.obj.tp;}

Sprite_ZzyVGFValueTextTp.prototype.GetMValue = function()
{return this.obj.maxTp();}

Sprite_ZzyVGFValueTextTp.prototype.GetBitmapTSize = function()
{return Zzy.VGF.GetTpInfoTSize(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.GetBitmapBSize = function()
{return Zzy.VGF.GetTpInfoBSize(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = Zzy.VGF.GetTpInfoTSize(this.obj);
	this.textInfo.textColor = Zzy.VGF.GetTpInfoTColor(this.obj);
	this.textInfo.outlineWidth = Zzy.VGF.GetTpInfoBSize(this.obj);
	this.textInfo.outlineColor = Zzy.VGF.GetTpInfoBColor(this.obj);
	
}

Sprite_ZzyVGFValueTextTp.prototype.GetFText1 = function()
{return Zzy.VGF.GetTpValueInfoT(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.GetFText2 = function()
{return Zzy.VGF.GetTpPercentInfoT(this.obj);}

Sprite_ZzyVGFValueTextTp.prototype.GetInfoMode = function()
{return Zzy.VGF.GetTpInfoMode(this.obj);}



//==========================================================================
//Sprite_ZzyVGFValueTextCustom
//==========================================================================
function Sprite_ZzyVGFValueTextCustom() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFValueTextCustom.prototype = Object.create(Sprite_ZzyVGFValueText.prototype);
Sprite_ZzyVGFValueTextCustom.prototype.constructor = Sprite_ZzyVGFValueTextCustom;

Sprite_ZzyVGFValueTextCustom.prototype.initialize = function(pointer,mInfo)//血条信息
{
	this.cusInfo = mInfo;
	Sprite_ZzyVGFValueText.prototype.initialize.call(this,pointer);
}

Sprite_ZzyVGFValueTextCustom.prototype.GetInfoOfx = function()
{return Zzy.VGF.GetTpInfoOfx(this.obj)+this.cusInfo.CusInfoOfx+this.cusInfo.CusOfx;}

Sprite_ZzyVGFValueTextCustom.prototype.GetInfoOfy = function()
{return Zzy.VGF.GetTpInfoOfy(this.obj)+this.cusInfo.CusInfoOfy+this.cusInfo.CusOfy;}

Sprite_ZzyVGFValueTextCustom.prototype.GetCValue = function()
{return $gameVariables.value(this.cusInfo.CusCurValueVar);}

Sprite_ZzyVGFValueTextCustom.prototype.GetMValue = function()
{return $gameVariables.value(this.cusInfo.CusMaxValueVar);}

Sprite_ZzyVGFValueTextCustom.prototype.GetBitmapTSize = function()
{return this.cusInfo.CusInfoTSize;}

Sprite_ZzyVGFValueTextCustom.prototype.GetBitmapBSize = function()
{return this.cusInfo.CusInfoBSize;}

Sprite_ZzyVGFValueTextCustom.prototype.SetBitmapConfig = function()
{
	this.textInfo = {};
	this.textInfo.fontSize = this.cusInfo.CusInfoTSize;
	this.textInfo.textColor = this.cusInfo.CusInfoTColor;
	this.textInfo.outlineWidth = this.cusInfo.CusInfoBSize;
	this.textInfo.outlineColor = this.cusInfo.CusInfoBColor;
	
}

Sprite_ZzyVGFValueTextCustom.prototype.GetFText1 = function()
{return this.cusInfo.CusValueInfoT;}

Sprite_ZzyVGFValueTextCustom.prototype.GetFText2 = function()
{return this.cusInfo.CusPercentInfoT;}

Sprite_ZzyVGFValueTextCustom.prototype.GetInfoMode = function()
{return this.cusInfo.CusInfoMode;}





//==========================================================================
//Sprite_ZzyVGFPic
//==========================================================================
function Sprite_ZzyVGFPic() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFPic.prototype = Object.create(Sprite_ZzyVGFBase.prototype);
Sprite_ZzyVGFPic.prototype.constructor = Sprite_ZzyVGFPic;

Sprite_ZzyVGFPic.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFBase.prototype.initialize.call(this,pointer);
	this.isUsePic = false;
	
}

Sprite_ZzyVGFPic.prototype.SetBitmap = function(name)//设置bitmap
{
	if(name)
	{
		this.isUsePic = true;
		this.bitmap = ImageManager.loadSystem(name);
	}
	else
	{
		this.isUsePic = false;
	}	
}

Sprite_ZzyVGFPic.prototype.IsUsePic = function()
{
	return this.isUsePic;
}


Sprite_ZzyVGFPic.prototype.update = function()
{
	Sprite_ZzyVGFBase.prototype.update.call(this);
	
	this.updatePos();
}

Sprite_ZzyVGFPic.prototype.updatePos = function()
{
	this.x = this.ScreenX();
	this.y = this.ScreenY();
}

Sprite_ZzyVGFPic.prototype.ScreenX = function()
{
	return this.myParent.posX + this.myParent._battler.GetZzyVGFSprX();
}

Sprite_ZzyVGFPic.prototype.ScreenY = function()
{
	return this.myParent.posY + this.myParent._battler.GetZzyVGFSprY();
}



//==========================================================================
//Sprite_ZzyVGFGroup
//==========================================================================
function Sprite_ZzyVGFGroup() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFGroup.prototype = Object.create(TilingSprite.prototype);
Sprite_ZzyVGFGroup.prototype.constructor = Sprite_ZzyVGFGroup;

Sprite_ZzyVGFGroup.prototype.initialize = function(pointer)//血条对象
{
	TilingSprite.prototype.initialize.call(this);
	
	this.myParent = pointer;
	this.anchor.x = 0;
	this.anchor.y = 0;	

	this.isUsePic = false;
	
	this.obj = undefined;
	this.flag = undefined;
	
	this.info = {};//信息
	
	this.autoCheck = false;
	this.isRefresh = true;//刷新请求
	
	this.collBitmap = undefined;
	this.bitmapArr = [];//存放数组
	this.exeReady = true;//执行完成准备
	
	this.groupWidth = 0;
	this.groupHeight = 0;

	this.defofX = 0;
	this.defofY = 0;
	
	
	this.oriSpeedX = 0;
	
	
}

Sprite_ZzyVGFGroup.prototype.ResetInfo = function(obj,flag,type)
{
	this.anchor.x = 0;
	this.anchor.y = 0;
	this.oriSpeedX = 0;
	this.BindObject(obj,flag,type);
}

Sprite_ZzyVGFGroup.prototype.SetBitmap = function()
{
	if(this.info.picName)
	{
		this.isUsePic = true;
		this.collBitmap = ImageManager.loadSystem(this.info.picName);
	}
	else
	{
		this.isUsePic = false;
		this.DefaultBitmap();//默认
		this.SetLineBitmap();//设置分段
	}
	
}



Sprite_ZzyVGFGroup.prototype.BindObject = function(obj,flag,type)
{
	//绑定对象并进行监视 
	//obj-对象  
	//flag 0:背景血条 1:深度动态 2:跟随血条
	//type 0:hp 1:mp 2:tp
	
	this.obj = obj;
	this.flag = flag;
	this.type = type;
	
	this.autoCheck = true;//自动检测

	this.MakeInfo();
	this.SetBitmap();//设置位图
}

Sprite_ZzyVGFGroup.prototype.MakeInfo = function()//制作信息
{
	var info = {};
	
	info.isActor = this.obj.isActor();
	info.inoutFrame = Zzy.VGF.GetInOutFrame(this.obj);
	
	info.picName = this.GetPicName();//Zzy.VGF.GetGroupPic(this.obj);
	this.info = info;
}

Sprite_ZzyVGFGroup.prototype.GetPicName = function()
{
	return undefined;
}

	

Sprite_ZzyVGFGroup.prototype.update = function()
{
	TilingSprite.prototype.update.call(this);
	
	if(!this.autoCheck)return;
	if(!this.IsCollPicReady())return;
	
	this.updateValue();//更新数值信息
	this.updateDraw();//更新绘制
	
	this.updateOrigin();//刷新中心点
	
}



Sprite_ZzyVGFGroup.prototype.ScreenX = function()
{
	return this.myParent.posX + this.obj.GetZzyVGFSprX() - this.bitmap.width/2;
}

Sprite_ZzyVGFGroup.prototype.ScreenY = function()
{
	return this.myParent.posY + this.obj.GetZzyVGFSprY() - this.bitmap.height/2;
}


Sprite_ZzyVGFGroup.prototype.IsCollPicReady = function()
{
	if(!this.isUsePic)return true;
	if(!this.exeReady)return true;
	
	if(this.collBitmap && this.collBitmap.width && this.collBitmap.height)
	{
		//进行切割
		var name = this.info.picName;
		this.bitmapArr = Zzy.VGF.CollBitmapToSplit(name,this.collBitmap,1,3);		
		this.AutoPicBitmap();//设置外形图片
		this.exeReady = false;
		return true;
	}
	
	return false;
}


Sprite_ZzyVGFGroup.prototype.updateValue = function()//更新位置信息
{
	var w = this.groupWidth;
	var h = this.groupHeight;
	
	var cValue = this.GetCValue();
	var mValue = this.GetMValue();
	

	this.rateV = Math.max(0,Math.min(1,cValue / mValue));
	this.cw = this.rateV * w;
	if(this.flag === 1)//深度血条
	{
		this.deepCw = Zzy.VGF.startToEndOfPer(
		this.deepCw,
		this.cw,
		Zzy.Param.VGFDeepGroupSpeed,
		Zzy.Param.VGFDeepGroupMinDis);	
	}
}


Sprite_ZzyVGFGroup.prototype.needRefresh = function()
{
	
}

Sprite_ZzyVGFGroup.prototype.IsActor = function()
{
	return this.info.isActor;
}

Sprite_ZzyVGFGroup.prototype.IsEnemy = function()
{
	return !this.info.isActor;
}

Sprite_ZzyVGFGroup.prototype.DefaultBitmap = function()
{
	
}

Sprite_ZzyVGFGroup.prototype.updateDraw = function()
{
	var w = this.groupWidth;
	var h = this.groupHeight;	
	var ew = Zzy.Param.VGFHPBorderW;	
	var ew2 = ew*2;
	
	
	var sx = this.ScreenX();
	var sy = this.ScreenY();

	switch(this.flag)
	{
		case 0:this.move(sx,sy,w,h);break;
		case 1:this.move(sx,sy,this.deepCw,h);break;
		case 2:this.move(sx,sy,this.cw,h);break;
	}	
}


Sprite_ZzyVGFGroup.prototype.updateOrigin = function()
{
	this.origin.x += this.GetOriginOfx();//计算偏移量
}


Sprite_ZzyVGFGroup.prototype.GetOriginOfx = function()
{
	return 0;
}


Sprite_ZzyVGFGroup.prototype.FlagToIndex = function(flag)
{
	switch(flag)
	{
		case 0:return 2;
		case 1:return 1;
		case 2:return 0;
	}
	return undefined;
}


Sprite_ZzyVGFGroup.prototype.AutoPicBitmap = function()
{
	var index = this.FlagToIndex(this.flag);
	this.bitmap = this.bitmapArr[index];
	
	this.groupWidth = this.bitmap.width;
	this.groupHeight = this.bitmap.height;		
}


Sprite_ZzyVGFGroup.prototype.GetMValue = function()
{
	return 1;
}

Sprite_ZzyVGFGroup.prototype.GetCValue = function()
{
	return 0;
}


Sprite_ZzyVGFGroup.prototype.SetLineBitmap = function()//设置条纹
{
	return;//不设置条纹
}



//==========================================================================
//Sprite_ZzyVGFGroup_Hp
//==========================================================================
function Sprite_ZzyVGFGroup_Hp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFGroup_Hp.prototype = Object.create(Sprite_ZzyVGFGroup.prototype);
Sprite_ZzyVGFGroup_Hp.prototype.constructor = Sprite_ZzyVGFGroup_Hp;

Sprite_ZzyVGFGroup_Hp.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFGroup.prototype.initialize.call(this,pointer);
}


Sprite_ZzyVGFGroup_Hp.prototype.DefaultBitmap = function()
{
	var colorArr = [Zzy.Param.VGFHPBdColor,Zzy.Param.VGFHPBkColor,Zzy.Param.VGFHPDeepColor,Zzy.Param.VGFHPColor];
	
	var w = Zzy.Param.VGFHPWidth;
	var h = Zzy.Param.VGFHPHeight;
	var ew = Zzy.Param.VGFHPBorderW;
	var w2 = w-ew*2;
	var h2 = h-ew*2;
	this.bitmap = new Bitmap(w,h);
	switch(this.flag)
	{
		case 0:this.bitmap.fillRect(0,0,w,h,colorArr[0]);this.bitmap.fillRect(ew,ew,w2,h2,colorArr[1]);break;
		case 1:this.bitmap.fillRect(ew,ew,w2,h2,colorArr[2]);break;
		case 2:this.bitmap.gradientFillRect(ew,ew,w2,h2,colorArr[2],colorArr[3]);break;
	}
	this.groupWidth = w;
	this.groupHeight = h;
}

Sprite_ZzyVGFGroup_Hp.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFGroup.prototype.ScreenX.call(this);
	sx += Zzy.VGF.GetHPOfx(this.obj);
	return sx;
}

Sprite_ZzyVGFGroup_Hp.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFGroup.prototype.ScreenY.call(this);
	sy += Zzy.VGF.GetHPOfy(this.obj);
	return sy;
}

Sprite_ZzyVGFGroup_Hp.prototype.GetCValue = function()
{return this.obj.hp;}


Sprite_ZzyVGFGroup_Hp.prototype.GetMValue = function()
{return this.obj.mhp;}



Sprite_ZzyVGFGroup_Hp.prototype.SetLineBitmap = function()//设置条纹
{
	if(!Zzy.Param.VGFIsGroupLine)return;
	var w = Zzy.Param.VGFHPWidth;
	var h = Zzy.Param.VGFHPHeight;
	var dis = Zzy.Param.VGFHPLineDis;
	var lWidth = Zzy.Param.VGFHPLineWidth;
	var color = Zzy.Param.VGFHPBdColor;
	for(var d=0;d<=w;d+=dis)
	{this.bitmap.fillRect(d,0,lWidth,h,color);}
}

Sprite_ZzyVGFGroup_Hp.prototype.GetPicName = function()
{return Zzy.VGF.GetHPGroupPic(this.obj);}



Sprite_ZzyVGFGroup_Hp.prototype.GetOriginOfx = function()
{
	return Zzy.VGF.GetHpOriX(this.obj,this.flag);
}



//==========================================================================
//Sprite_ZzyVGFGroup_Mp
//==========================================================================
function Sprite_ZzyVGFGroup_Mp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFGroup_Mp.prototype = Object.create(Sprite_ZzyVGFGroup.prototype);
Sprite_ZzyVGFGroup_Mp.prototype.constructor = Sprite_ZzyVGFGroup_Mp;

Sprite_ZzyVGFGroup_Mp.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFGroup.prototype.initialize.call(this,pointer);

}

Sprite_ZzyVGFGroup_Mp.prototype.DefaultBitmap = function()
{
	var colorArr = [Zzy.Param.VGFMPBdColor,Zzy.Param.VGFMPBkColor,Zzy.Param.VGFMPDeepColor,Zzy.Param.VGFMPColor];
	
	var w = Zzy.Param.VGFMPWidth;
	var h = Zzy.Param.VGFMPHeight;
	var ew = Zzy.Param.VGFMPBorderW;
	var w2 = w-ew*2;
	var h2 = h-ew*2;
	this.bitmap = new Bitmap(w,h);
	switch(this.flag)
	{
		case 0:this.bitmap.fillRect(0,0,w,h,colorArr[0]);this.bitmap.fillRect(ew,ew,w2,h2,colorArr[1]);break;
		case 1:this.bitmap.fillRect(ew,ew,w2,h2,colorArr[2]);break;
		case 2:this.bitmap.gradientFillRect(ew,ew,w2,h2,colorArr[2],colorArr[3]);break;
	}
	
	this.groupWidth = w;
	this.groupHeight = h;
}

Sprite_ZzyVGFGroup_Mp.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFGroup.prototype.ScreenX.call(this);
	sx += Zzy.VGF.GetMPOfx(this.obj);
	return sx;
}

Sprite_ZzyVGFGroup_Mp.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFGroup.prototype.ScreenY.call(this);
	sy += Zzy.VGF.GetMPOfy(this.obj);
	return sy;
}

Sprite_ZzyVGFGroup_Mp.prototype.GetCValue = function()
{return this.obj.mp;}


Sprite_ZzyVGFGroup_Mp.prototype.GetMValue = function()
{return this.obj.mmp;}


Sprite_ZzyVGFGroup_Mp.prototype.SetLineBitmap = function()//设置条纹
{
	if(!Zzy.Param.VGFIsGroupLine)return;
	var w = Zzy.Param.VGFMPWidth;
	var h = Zzy.Param.VGFMPHeight;
	var dis = Zzy.Param.VGFMPLineDis;
	var lWidth = Zzy.Param.VGFMPLineWidth;
	var color = Zzy.Param.VGFMPBdColor;
	for(var d=0;d<=w;d+=dis)
	{this.bitmap.fillRect(d,0,lWidth,h,color);}
}

Sprite_ZzyVGFGroup_Mp.prototype.GetPicName = function()
{return Zzy.VGF.GetMPGroupPic(this.obj);}

Sprite_ZzyVGFGroup_Mp.prototype.GetOriginOfx = function()
{
	return Zzy.VGF.GetMpOriX(this.obj,this.flag);
}






//==========================================================================
//Sprite_ZzyVGFGroup_Tp
//==========================================================================
function Sprite_ZzyVGFGroup_Tp() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFGroup_Tp.prototype = Object.create(Sprite_ZzyVGFGroup.prototype);
Sprite_ZzyVGFGroup_Tp.prototype.constructor = Sprite_ZzyVGFGroup_Tp;

Sprite_ZzyVGFGroup_Tp.prototype.initialize = function(pointer)//血条对象
{
	Sprite_ZzyVGFGroup.prototype.initialize.call(this,pointer);

}


Sprite_ZzyVGFGroup_Tp.prototype.DefaultBitmap = function()
{
	var colorArr = [Zzy.Param.VGFTPBdColor,Zzy.Param.VGFTPBkColor,Zzy.Param.VGFTPDeepColor,Zzy.Param.VGFTPColor];
	
	
	var w = Zzy.Param.VGFTPWidth;
	var h = Zzy.Param.VGFTPHeight;
	var ew = Zzy.Param.VGFTPBorderW;
	var w2 = w-ew*2;
	var h2 = h-ew*2;
	this.bitmap = new Bitmap(w,h);
	switch(this.flag)
	{
		case 0:this.bitmap.fillRect(0,0,w,h,colorArr[0]);this.bitmap.fillRect(ew,ew,w2,h2,colorArr[1]);break;
		case 1:this.bitmap.fillRect(ew,ew,w2,h2,colorArr[2]);break;
		case 2:this.bitmap.gradientFillRect(ew,ew,w2,h2,colorArr[2],colorArr[3]);break;
	}
	this.groupWidth = w;
	this.groupHeight = h;
}

Sprite_ZzyVGFGroup_Tp.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFGroup.prototype.ScreenX.call(this);
	sx += Zzy.VGF.GetTPOfx(this.obj);
	return sx;
}

Sprite_ZzyVGFGroup_Tp.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFGroup.prototype.ScreenY.call(this);
	sy += Zzy.VGF.GetTPOfy(this.obj);
	return sy;
}

Sprite_ZzyVGFGroup_Tp.prototype.GetCValue = function()
{return this.obj.tp;}


Sprite_ZzyVGFGroup_Tp.prototype.GetMValue = function()
{return this.obj.maxTp();}


Sprite_ZzyVGFGroup_Tp.prototype.SetLineBitmap = function()//设置条纹
{
	if(!Zzy.Param.VGFIsGroupLine)return;
	var w = Zzy.Param.VGFTPWidth;
	var h = Zzy.Param.VGFTPHeight;
	var dis = Zzy.Param.VGFTPLineDis;
	var lWidth = Zzy.Param.VGFTPLineWidth;
	var color = Zzy.Param.VGFTPBdColor;
	for(var d=0;d<=w;d+=dis)
	{this.bitmap.fillRect(d,0,lWidth,h,color);}
}

Sprite_ZzyVGFGroup_Tp.prototype.GetPicName = function()
{return Zzy.VGF.GetTPGroupPic(this.obj);}

Sprite_ZzyVGFGroup_Tp.prototype.GetOriginOfx = function()
{
	return Zzy.VGF.GetTpOriX(this.obj,this.flag);
}




//==========================================================================
//Sprite_ZzyVGFGroup_Custom
//==========================================================================
function Sprite_ZzyVGFGroup_Custom() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyVGFGroup_Custom.prototype = Object.create(Sprite_ZzyVGFGroup.prototype);
Sprite_ZzyVGFGroup_Custom.prototype.constructor = Sprite_ZzyVGFGroup_Custom;

Sprite_ZzyVGFGroup_Custom.prototype.initialize = function(pointer,mInfo)//对象
{
	this.cusInfo = mInfo;//储存属性变量

	Sprite_ZzyVGFGroup.prototype.initialize.call(this,pointer);
}



Sprite_ZzyVGFGroup_Custom.prototype.DefaultBitmap = function()
{
	var colorArr = [Zzy.Param.VGFCustomBdColor,Zzy.Param.VGFCustomBkColor,Zzy.Param.VGFCustomDeepColor,Zzy.Param.VGFCustomColor];
	
	
	var w = Zzy.Param.VGFCustomWidth;
	var h = Zzy.Param.VGFCustomHeight;
	var ew = Zzy.Param.VGFCustomBorderW;
	var w2 = w-ew*2;
	var h2 = h-ew*2;
	this.bitmap = new Bitmap(w,h);
	switch(this.flag)
	{
		case 0:this.bitmap.fillRect(0,0,w,h,colorArr[0]);this.bitmap.fillRect(ew,ew,w2,h2,colorArr[1]);break;
		case 1:this.bitmap.fillRect(ew,ew,w2,h2,colorArr[2]);break;
		case 2:this.bitmap.gradientFillRect(ew,ew,w2,h2,colorArr[2],colorArr[3]);break;
	}
	this.groupWidth = w;
	this.groupHeight = h;
}

Sprite_ZzyVGFGroup_Custom.prototype.ScreenX = function()
{
	var sx = Sprite_ZzyVGFGroup.prototype.ScreenX.call(this);
	sx += this.cusInfo.CusOfx;
	return sx;
}

Sprite_ZzyVGFGroup_Custom.prototype.ScreenY = function()
{
	var sy = Sprite_ZzyVGFGroup.prototype.ScreenY.call(this);
	sy += this.cusInfo.CusOfy;
	return sy;
}



Sprite_ZzyVGFGroup_Custom.prototype.GetCValue = function()
{return $gameVariables.value(this.cusInfo.CusCurValueVar);}

Sprite_ZzyVGFGroup_Custom.prototype.GetMValue = function()
{return $gameVariables.value(this.cusInfo.CusMaxValueVar);}

Sprite_ZzyVGFGroup_Custom.prototype.SetLineBitmap = function()//设置条纹
{
	if(!Zzy.Param.VGFIsGroupLine)return;
	var w = Zzy.Param.VGFCWidth;
	var h = Zzy.Param.VGFCustomHeight;
	var dis = Zzy.Param.VGFCustomLineDis;
	var lWidth = Zzy.Param.VGFCustomLineWidth;
	var color = Zzy.Param.VGFCustomBdColor;
	for(var d=0;d<=w;d+=dis)
	{this.bitmap.fillRect(d,0,lWidth,h,color);}
}

Sprite_ZzyVGFGroup_Custom.prototype.GetPicName = function()
{return this.cusInfo.CusGroupPic;}


Sprite_ZzyVGFGroup_Custom.prototype.GetOriginOfx = function()
{
	return this.cusInfo['CusOriX'+(this.flag+1)];
}




//-----------------------------------------------Zzy.VGF.Function-----------------------------------------------------------

Zzy.VGF.CoptyBitmap = function(disBitmap,srcBitmap)
{
	disBitmap.blt(srcBitmap,0,0,srcBitmap.width,srcBitmap.height,0,0,disBitmap.width,disBitmap.height);
}

Zzy.VGF.FileNameFindXTo2Arr = function(fileName)//转换
{
	//开始拆分
	var tempArr = fileName.split('_');
	var strArr = tempArr[tempArr.length-1].split('x');
	var intArr = [];
	for(var i=0;i<strArr.length;i++)
	{
		intArr[i] = parseInt(strArr[i]);
	}
	
	return intArr;
}

Zzy.VGF.SplitPictureToArr1 = function(fileName,collBitmap)//通过_?x?的格式,将图片拆分成一个一维数组
{
	var lenArr = Zzy.VGF.FileNameFindXTo2Arr(fileName);
	var bitmapArr = [];
	
	var listSize = collBitmap.width / lenArr[0];	
	var lineSize = collBitmap.height / lenArr[1];

	for(var i=0;i<lenArr[1];i++)
	{
		for(var j=0;j<lenArr[0];j++)
		{
			var bitBitmap = new Bitmap(listSize,lineSize);
			bitBitmap.blt(collBitmap,j*listSize,i*lineSize,listSize,lineSize,0,0);
			bitmapArr[i*lenArr[0]+j] = bitBitmap;
		}
	}
	return bitmapArr;	
}

Zzy.VGF.DistanceToPer = function(s1,s2,per,min)
{
	if(s1 === s2)return s1;
	
	var r = 0;
	if(s1 < s2)
	{
		r = s2 - (s2-s1) * per;
	}
	else if(s1 > s2)
	{
		r = s2 + (s1-s2) * per;
	}
	if(Math.abs(r-s1) <= min)
	{r = s1;}
	return r;
}


Zzy.VGF.startToEndOfPer = function(start,end,per,min)//开始到结束的比例
{
	if(start === undefined)return end;
	if(start === end)return end;
	if((Math.abs(end - start)) < min)return end;
	
	var distance = (end-start)*per*0.01;
	return distance + start;
}











Zzy.VGF.GetData = function(battler)
{
	if(battler.isEnemy())
	{
		var id = battler.enemyId();
		return $dataEnemies[id];
	}
	return $dataActors[battler.actorId()];
}

Zzy.VGF.GetShowMode = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);

	if(ev && ev.zzyVGF && ev.zzyVGF.ShowMode !== undefined)
	{
		return ev.zzyVGF.ShowMode;
	}
	return Zzy.Param.VGFShowMode;
}

Zzy.VGF.GetIsVGroup = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);

	if(ev && ev.zzyVGF && ev.zzyVGF.IsVGroup !== undefined)
	{
		return ev.zzyVGF.IsVGroup;
	}
	return Zzy.Param.VGFIsVGroup;
}


Zzy.VGF.GetInOutFrame = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.InOutFrame !== undefined)
	{
		return ev.zzyVGF.InOutFrame;
	}
	return Zzy.Param.VGFInOutFrame;	
}

Zzy.VGF.GetNmInfoOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.NmInfoOfx !== undefined)
	{
		return ev.zzyVGF.NmInfoOfx;
	}
	return Zzy.Param.VGFNmInfoOfx;
}

Zzy.VGF.GetNmInfoOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.NmInfoOfy !== undefined)
	{
		return ev.zzyVGF.NmInfoOfy;
	}
	return Zzy.Param.VGFNmInfoOfy;
}


Zzy.VGF.GetHpOriX = function(battler,index)
{
	var ev = Zzy.VGF.GetData(battler);
	index += 1;//对应名称
	var key = 'HPOriX'+index;
	
	if(ev && ev.zzyVGF)
	{
		var value = ev.zzyVGF[key];
		if(value !== undefined)return value;
	}
	
	return Zzy.Param['VGF'+key];
	

	// switch(index)
	// {
		// case 0:if(ev && ev.zzyVGF &&  ev.zzyVGF.HPOriX1 !== undefined)return ev.zzyVGF.HPOriX1;
		// return Zzy.Param.VGFHPOriX1;
		
		// case 1:if(ev && ev.zzyVGF &&  ev.zzyVGF.HPOriX2 !== undefined)return ev.zzyVGF.HPOriX2;
		// return Zzy.Param.VGFHPOriX2;	
		
		// case 2:if(ev && ev.zzyVGF &&  ev.zzyVGF.HPOriX3 !== undefined)return ev.zzyVGF.HPOriX3;
		// return Zzy.Param.VGFHPOriX3;			
	// }
	// return 0;
}

Zzy.VGF.GetMpOriX = function(battler,index)
{
	var ev = Zzy.VGF.GetData(battler);
	index += 1;//对应名称
	var key = 'MPOriX'+index;
	
	if(ev && ev.zzyVGF)
	{
		var value = ev.zzyVGF[key];
		if(value !== undefined)return value;
	}
	
	return Zzy.Param['VGF'+key];	
	
}

Zzy.VGF.GetTpOriX = function(battler,index)
{
	var ev = Zzy.VGF.GetData(battler);
	index += 1;//对应名称
	var key = 'TPOriX'+index;
	
	if(ev && ev.zzyVGF)
	{
		var value = ev.zzyVGF[key];
		if(value !== undefined)return value;
	}
	
	return Zzy.Param['VGF'+key];		
}


Zzy.VGF.GetHpInfoOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoOfx !== undefined)
	{
		return ev.zzyVGF.HpInfoOfx;
	}
	return Zzy.Param.VGFHpInfoOfx;
}

Zzy.VGF.GetHpInfoOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoOfy !== undefined)
	{
		return ev.zzyVGF.HpInfoOfy;
	}
	return Zzy.Param.VGFHpInfoOfy;
}

Zzy.VGF.GetHpInfoTSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoTSize !== undefined)
	{
		return ev.zzyVGF.HpInfoTSize;
	}
	return Zzy.Param.VGFHpInfoTSize;
}

Zzy.VGF.GetHpInfoBSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoBSize !== undefined)
	{
		return ev.zzyVGF.HpInfoBSize;
	}
	return Zzy.Param.VGFHpInfoBSize;
}

Zzy.VGF.GetHpInfoTColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoTColor !== undefined)
	{
		return ev.zzyVGF.HpInfoTColor;
	}
	return Zzy.Param.VGFHpInfoTColor;
}

Zzy.VGF.GetHpInfoBColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoBColor !== undefined)
	{
		return ev.zzyVGF.HpInfoBColor;
	}
	return Zzy.Param.VGFHpInfoBColor;
}




Zzy.VGF.GetMpInfoOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoOfx !== undefined)
	{
		return ev.zzyVGF.MpInfoOfx;
	}
	return Zzy.Param.VGFMpInfoOfx;
}

Zzy.VGF.GetMpInfoOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoOfy !== undefined)
	{
		return ev.zzyVGF.MpInfoOfy;
	}
	return Zzy.Param.VGFMpInfoOfy;
}

Zzy.VGF.GetMpInfoTSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoTSize !== undefined)
	{
		return ev.zzyVGF.MpInfoTSize;
	}
	return Zzy.Param.VGFMpInfoTSize;
}

Zzy.VGF.GetMpInfoBSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoBSize !== undefined)
	{
		return ev.zzyVGF.MpInfoBSize;
	}
	return Zzy.Param.VGFMpInfoBSize;
}

Zzy.VGF.GetMpInfoTColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoTColor !== undefined)
	{
		return ev.zzyVGF.MpInfoTColor;
	}
	return Zzy.Param.VGFMpInfoTColor;
}

Zzy.VGF.GetMpInfoBColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoBColor !== undefined)
	{
		return ev.zzyVGF.MpInfoBColor;
	}
	return Zzy.Param.VGFMpInfoBColor;
}






Zzy.VGF.GetTpInfoOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoOfx !== undefined)
	{
		return ev.zzyVGF.TpInfoOfx;
	}
	return Zzy.Param.VGFTpInfoOfx;
}

Zzy.VGF.GetTpInfoOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoOfy !== undefined)
	{
		return ev.zzyVGF.TpInfoOfy;
	}
	return Zzy.Param.VGFTpInfoOfy;
}

Zzy.VGF.GetTpInfoTSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoTSize !== undefined)
	{
		return ev.zzyVGF.TpInfoTSize;
	}
	return Zzy.Param.VGFTpInfoTSize;
}

Zzy.VGF.GetTpInfoBSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoBSize !== undefined)
	{
		return ev.zzyVGF.TpInfoBSize;
	}
	return Zzy.Param.VGFTpInfoBSize;
}

Zzy.VGF.GetTpInfoTColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoTColor !== undefined)
	{
		return ev.zzyVGF.TpInfoTColor;
	}
	return Zzy.Param.VGFTpInfoTColor;
}

Zzy.VGF.GetTpInfoBColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoBColor !== undefined)
	{
		return ev.zzyVGF.TpInfoBColor;
	}
	return Zzy.Param.VGFTpInfoBColor;
}






Zzy.VGF.GetNmInfoTSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.NmInfoTSize !== undefined)
	{
		return ev.zzyVGF.NmInfoTSize;
	}
	return Zzy.Param.VGFNmInfoTSize;
}

Zzy.VGF.GetNmInfoBSize = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.NmInfoBSize !== undefined)
	{
		return ev.zzyVGF.NmInfoBSize;
	}
	return Zzy.Param.VGFNmInfoBSize;
}

Zzy.VGF.GetNmInfoTColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.NmInfoTColor !== undefined)
	{
		return ev.zzyVGF.NmInfoTColor;
	}
	return Zzy.Param.VGFNmInfoTColor;
}

Zzy.VGF.GetNmInfoBColor = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.NmInfoBColor !== undefined)
	{
		return ev.zzyVGF.NmInfoBColor;
	}
	return Zzy.Param.VGFNmInfoBColor;
}

Zzy.VGF.GetBkGroupPic = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.BkGroupPic !== undefined)
	{
		return ev.zzyVGF.BkGroupPic;
	}
	return Zzy.Param.VGFBkGroupPic;
}

Zzy.VGF.GetBkGroupPicX = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.BkGroupPicX !== undefined)
	{
		return ev.zzyVGF.BkGroupPicX;
	}
	return Zzy.Param.VGFBkGroupPicX;
}

Zzy.VGF.GetBkGroupPicY = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.BkGroupPicY !== undefined)
	{
		return ev.zzyVGF.BkGroupPicY;
	}
	return Zzy.Param.VGFBkGroupPicY;
}


Zzy.VGF.GetHPGroupPic = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HPGroupPic !== undefined)
	{
		return ev.zzyVGF.HPGroupPic;
	}
	return Zzy.Param.VGFHPGroupPic;
}


Zzy.VGF.GetMPGroupPic = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MPGroupPic !== undefined)
	{
		return ev.zzyVGF.MPGroupPic;
	}
	return Zzy.Param.VGFMPGroupPic;
}


Zzy.VGF.GetTPGroupPic = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TPGroupPic !== undefined)
	{
		return ev.zzyVGF.TPGroupPic;
	}
	return Zzy.Param.VGFTPGroupPic;
}



Zzy.VGF.GetFsGroupPic = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.FsGroupPic !== undefined)
	{
		return ev.zzyVGF.FsGroupPic;
	}
	return Zzy.Param.VGFFsGroupPic;
}

Zzy.VGF.GetFsGroupPicX = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.FsGroupPicX !== undefined)
	{
		return ev.zzyVGF.FsGroupPicX;
	}
	return Zzy.Param.VGFFsGroupPicX;
}

Zzy.VGF.GetFsGroupPicY = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.FsGroupPicY !== undefined)
	{
		return ev.zzyVGF.FsGroupPicY;
	}
	return Zzy.Param.VGFFsGroupPicY;
}



Zzy.VGF.GetOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.Ofx !== undefined)
	{
		return ev.zzyVGF.Ofx;
	}
	return Zzy.Param.VGFOfx;
}


Zzy.VGF.GetOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.Ofy !== undefined)
	{
		return ev.zzyVGF.Ofy;
	}
	return Zzy.Param.VGFOfy;
}


Zzy.VGF.GetIsNmInfoShow = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.IsNmInfoShow !== undefined)
	{
		return ev.zzyVGF.IsNmInfoShow;
	}
	return Zzy.Param.VGFIsNmInfoShow;
}

Zzy.VGF.GetNmInfoFormat = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.NmInfoFormat !== undefined)
	{
		return ev.zzyVGF.NmInfoFormat;
	}
	
	return Zzy.Param.VGFNmInfoFormat;
}


//------------------------------------------------------

Zzy.VGF.GetVGFIsVHP = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.IsVHP !== undefined)
	{
		return ev.zzyVGF.IsVHP;
	}
	return Zzy.Param.VGFIsVHP;	
}

Zzy.VGF.GetHPOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.HPOfx !== undefined)
	{
		return ev.zzyVGF.HPOfx;
	}
	return Zzy.Param.VGFHPOfx;
}

Zzy.VGF.GetHPOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.HPOfy !== undefined)
	{
		return ev.zzyVGF.HPOfy;
	}
	return Zzy.Param.VGFHPOfy;
}

Zzy.VGF.GetIsHpInfoShow = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.IsHpInfoShow !== undefined)
	{
		return ev.zzyVGF.IsHpInfoShow;
	}
	return Zzy.Param.VGFIsHpInfoShow;
}

Zzy.VGF.GetHpInfoMode = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpInfoMode !== undefined)
	{
		return ev.zzyVGF.HpInfoMode;
	}
	return Zzy.Param.VGFHpInfoMode;
}

Zzy.VGF.GetHpValueInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpValueInfoT !== undefined)
	{
		return ev.zzyVGF.HpValueInfoT;
	}
	return Zzy.Param.VGFHpValueInfoT;
}

Zzy.VGF.GetHpPercentInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.HpPercentInfoT !== undefined)
	{
		return ev.zzyVGF.HpPercentInfoT;
	}
	return Zzy.Param.VGFHpPercentInfoT;
}


//------------------------------------------------------

Zzy.VGF.GetVGFIsVMP = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.IsVMP !== undefined)
	{
		return ev.zzyVGF.IsVMP;
	}
	return Zzy.Param.VGFIsVMP;	
}

Zzy.VGF.GetMPOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.MPOfx !== undefined)
	{
		return ev.zzyVGF.MPOfx;
	}
	return Zzy.Param.VGFMPOfx;
}

Zzy.VGF.GetMPOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.MPOfy !== undefined)
	{
		return ev.zzyVGF.MPOfy;
	}
	return Zzy.Param.VGFMPOfy;
}

Zzy.VGF.GetIsMpInfoShow = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.IsMpInfoShow !== undefined)
	{
		return ev.zzyVGF.IsMpInfoShow;
	}
	return Zzy.Param.VGFIsMpInfoShow;
}

Zzy.VGF.GetMpInfoMode = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpInfoMode !== undefined)
	{
		return ev.zzyVGF.MpInfoMode;
	}
	return Zzy.Param.VGFMpInfoMode;
}

Zzy.VGF.GetMpValueInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpValueInfoT !== undefined)
	{
		return ev.zzyVGF.MpValueInfoT;
	}
	return Zzy.Param.VGFMpValueInfoT;
}

Zzy.VGF.GetMpPercentInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.MpPercentInfoT !== undefined)
	{
		return ev.zzyVGF.MpPercentInfoT;
	}
	return Zzy.Param.VGFMpPercentInfoT;
}



//------------------------------------------------------

Zzy.VGF.GetVGFIsVTP = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.IsVTP !== undefined)
	{
		return ev.zzyVGF.IsVTP;
	}
	return Zzy.Param.VGFIsVTP;	
}

Zzy.VGF.GetTPOfx = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.TPOfx !== undefined)
	{
		return ev.zzyVGF.TPOfx;
	}
	return Zzy.Param.VGFTPOfx;
}

Zzy.VGF.GetTPOfy = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.TPOfy !== undefined)
	{
		return ev.zzyVGF.TPOfy;
	}
	return Zzy.Param.VGFTPOfy;
}


Zzy.VGF.GetIsTpInfoShow = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.IsTpInfoShow !== undefined)
	{
		return ev.zzyVGF.IsTpInfoShow;
	}
	return Zzy.Param.VGFIsTpInfoShow;
}

Zzy.VGF.GetTpInfoMode = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpInfoMode !== undefined)
	{
		return ev.zzyVGF.TpInfoMode;
	}
	return Zzy.Param.VGFTpInfoMode;
}

Zzy.VGF.GetTpValueInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpValueInfoT !== undefined)
	{
		return ev.zzyVGF.TpValueInfoT;
	}
	return Zzy.Param.VGFTpValueInfoT;
}

Zzy.VGF.GetTpPercentInfoT = function(battler)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.TpPercentInfoT !== undefined)
	{
		return ev.zzyVGF.TpPercentInfoT;
	}
	return Zzy.Param.VGFTpPercentInfoT;
}




//------------------------------------------------------


Zzy.VGF.StrToIDArr = function(str)
{
	var strArr = str.split(',');
	var len = strArr.length;
	var idArr = [];
	for(var i=0;i<len;i++)
	{
		idArr[i] = parseInt(strArr[i]);
	}
	return idArr;
}


Zzy.VGF.GetCusCurVar = function(battler,ID)
{
	
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.CusCurVarArr !== undefined && ev.zzyVGF.CusCurVarArr[ID] !== undefined)
	{return ev.zzyVGF.CusCurVarArr[ID];}
	
	if(Zzy.Param.VGFCustomStructArr[ID])
	{return Zzy.Param.VGFCustomStructArr[ID].CusCurValueVar;}

	return 0;
}


Zzy.VGF.GetCusMaxVar = function(battler,ID)
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF && ev.zzyVGF.CusMaxVarArr !== undefined && ev.zzyVGF.CusMaxVarArr[ID] !== undefined)
	{return ev.zzyVGF.CusMaxVarArr[ID];}
	
	if(Zzy.Param.VGFCustomStructArr[ID])
	{return Zzy.Param.VGFCustomStructArr[ID].CusMaxValueVar;}

	return 0;
}


Zzy.VGF.IsCusCurUse = function(battler,ID)     //判断是否使用了这个自定义条
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.CusUseArr !== undefined)
	{
		var arr = ev.zzyVGF.CusUseArr;
		if(arr.contains(ID))
		{
			return true;
		}
	}
	return false;	
}

Zzy.VGF.GetCusCurUse = function(battler)        //判断使用的自定义条
{
	var ev = Zzy.VGF.GetData(battler);
	if(ev && ev.zzyVGF &&  ev.zzyVGF.CusUseArr !== undefined)
	{
		return ev.zzyVGF.CusUseArr;
	}
	return [];
}






Zzy.VGF.CollBitmapToSplit = function(name,collBitmap,list,line)//通过_?x?的格式,将图片拆分成一个一维数组
{
	if(Zzy.VGF.Cache.collBitmap[name])
	{return Zzy.VGF.Cache.collBitmap[name];}
	
	//缓存信息减少计算次数
	list = list ? list : 1;
	line = line ? line : 1;
	
	var lenArr = undefined;
	var bitmapArr = [];
	
	var listSize = collBitmap.width / list;	
	var lineSize = collBitmap.height / line;
	
	for(var i=0;i<line;i++)
	{
		for(var j=0;j<list;j++)
		{
			var bitBitmap = new Bitmap(listSize,lineSize);
			bitBitmap.blt(collBitmap,j*listSize,i*lineSize,listSize,lineSize,0,0);
			bitmapArr[i*list+j] = bitBitmap;
		}
	}
	
	Zzy.VGF.Cache.collBitmap[name] = bitmapArr;
	
	return bitmapArr;	
}


Zzy.VGF.EvalFormula = function(formula,o) 
{
    var v = $gameVariables._data;
    var s = $gameSwitches._data;
	var V = v;
	var S = s;
	var obj = o;
	return eval(formula);
};



