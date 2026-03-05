//=============================================================================
// Yanfly Engine Plugins - Core Engine
// YEP_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CoreEngine = true;

var Yanfly = Yanfly || {};
Yanfly.Core = Yanfly.Core || {};
Yanfly.Core.version = 1.32;

//=============================================================================
/*:
 * @plugindesc 官方版本：v1.32 | 001核心引擎
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param --屏幕--
 * @default
 *
 * @param 屏幕宽度
 * @parent --屏幕--
 * @type number
 * @min 0
 * @desc 调整屏幕的宽度(单位：像素)
 * 默认值：816
 * @default 816
 *
 * @param 屏幕高度
 * @parent --屏幕--
 * @type number
 * @min 0
 * @desc 调整屏幕的高度(单位：像素)
 * 默认值：624
 * @default 624
 *
 * @param 战斗背景缩放调整
 * @parent --屏幕--
 * @type boolean
 * @on 做调整
 * @off 不调整
 * @desc 将战斗背景图调整到适应屏幕分辨率
 * @default true
 *
 * @param 标题缩放调整
 * @parent --屏幕--
 * @type boolean
 * @on 做调整
 * @off 不调整
 * @desc 将标题屏幕调整到适应屏幕分辨率
 * @default true
 *
 * @param Game Over缩放调整
 * @parent --屏幕--
 * @type boolean
 * @on 做调整
 * @off 不调整
 * @desc 将“GameOver”屏幕调整到适应屏幕分辨率
 * @default true
 *
 * @param 开启控制台
 * @parent --屏幕--
 * @type boolean
 * @on 开启
 * @off 不开启
 * @desc 在测试游戏时，将自动打开控制台来方便调试
 * (在测试游戏时，按F12也可手动打开控制台)
 * @default false
 *
 * @param 战斗者重定位
 * @parent --屏幕--
 * @type boolean
 * @on 重定位
 * @off 不定位
 * @desc 将战斗者重定位到适应屏幕分辨率
 * @default true
 *
 * @param 游戏字体加载计时器
 * @parent --屏幕--
 * @type number
 * @min 0
 * @desc 设置加载GameFont的时计。设置为0表示无时限
 * @default 0
 *
 * @param 更新真实缩放比例
 * @parent --屏幕--
 * @type boolean
 * @on 更新
 * @off 不更新
 * @desc 此项不用更改，不然将允许屏幕拉伸的真实缩放
 * @default false
 *
 * @param 集合清空
 * @parent --屏幕--
 * @type boolean
 * @on 清空
 * @off 不清空
 * @desc 切换场景以释放内存时，清除主要场景中存储的对象
 * @default true
 *
 * @param --金钱--
 * @desc
 *
 * @param 金钱上限
 * @parent --金钱--
 * @type number
 * @min 1
 * @desc 玩家可持有的金币上限
 * @default 1000000000
 *
 * @param 金钱字体大小
 * @parent --金钱--
 * @type number
 * @min 1
 * @desc 用于显示金钱的字体大小
 * @default 20
 *
 * @param 金钱图标
 * @parent --金钱--
 * @type number
 * @min 0
 * @desc 金钱窗口中表示金钱的图标。如果为0，则不会显示图标
 * @default 313
 *
 * @param 金钱重叠
 * @parent --金钱--
 * @desc 金钱的数字超出分配区域的内容大小时显示的内容
 * @default 超越边界
 *
 * @param --物品--
 * @desc
 *
 * @param 默认上限
 * @parent --物品--
 * @type number
 * @min 1
 * @desc 玩家可持有的物品数量上限
 * @default 99
 *
 * @param 数量文本大小
 * @parent --物品--
 * @type number
 * @min 1
 * @desc 物品数量的文本字体大小
 * @default 20
 *
 * @param --参数--
 * @default
 *
 * @param 等级上限
 * @parent --参数--
 * @type number
 * @min 1
 * @desc 调整角色的最高等级限制
 * @default 99
 *
 * @param 角色生命值上限
 * @parent --参数--
 * @type number
 * @min 1
 * @desc 调整角色的最高生命值限制
 * 默认值：9999
 * @default 9999
 *
 * @param 角色魔力值上限
 * @parent --参数--
 * @type number
 * @min 0
 * @desc 调整角色的最高魔力值限制
 * 默认值：9999
 * @default 9999
 *
 * @param 角色基础能力参数
 * @parent --参数--
 * @type number
 * @min 1
 * @desc 调整角色的最高攻、防、敏捷、幸运限制
 * 默认值：999
 * @default 999
 *
 * @param 敌人生命值上限
 * @parent --参数--
 * @type number
 * @min 1
 * @desc 调整敌人的最高生命值限制
 * 默认值：999999
 * @default 999999
 *
 * @param 敌人魔力值上限
 * @parent --参数--
 * @type number
 * @min 0
 * @desc 调整敌人的最高魔力值限制
 * 默认值：9999
 * @default 9999
 *
 * @param 敌人基础能力参数
 * @parent --参数--
 * @type number
 * @min 1
 * @desc 调整敌人的最高攻、防、敏捷、幸运限制
 * 默认值：999
 * @default 999
 *
 * @param --战斗--
 * @desc
 *
 * @param 动画速率
 * @parent --战斗--
 * @type number
 * @min 1
 * @desc 调整战斗动画的速率，数值越小速度越快
 * 默认值：4
 * @default 4
 *
 * @param 目标闪烁
 * @parent --战斗--
 * @type boolean
 * @on 开启闪烁
 * @off 不闪烁
 * @desc 敌人被选为目标时，将闪烁或变白
 * @default false
 *
 * @param 显示事件转场
 * @parent --战斗--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 战斗开始进行转场时，显示/隐藏地图上的事件
 * @default true
 *
 * @param 显示事件快照
 * @parent --战斗--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 战斗背景快照显示/隐藏事件
 * @default true
 *
 * @param --地图优化--
 * @desc
 *
 * @param 刷新更新HP
 * @parent --地图优化--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 在地图上更新HP时进行完整的角色刷新
 * @default true
 *
 * @param 刷新更新MP
 * @parent --地图优化--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 在地图上更新MP时进行完整的角色刷新
 * @default true
 *
 * @param 刷新更新TP
 * @parent --地图优化--
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 在地图上更新TP时进行完整的角色刷新
 * @default false
 *
 * @param --字体--
 * @desc
 *
 * @param 中文字体
 * @parent --字体--
 * @desc 用于中文RPG的默认字体
 * 默认：SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param 韩语字体
 * @parent --字体--
 * @desc 用于韩国RPG的默认字体
 * 默认：Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param 默认字体
 * @parent --字体--
 * @desc 用于其他所有内容的默认字体
 * 默认：GameFont
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param 字体大小
 * @parent --字体--
 * @type number
 * @min 1
 * @desc 用于窗口的默认字体大小
 * 默认：28
 * @default 28
 *
 * @param 文本对齐
 * @parent --字体--
 * @type combo
 * @option 左对齐
 * @option 居中
 * @option 右对齐
 * @desc 命令窗口的文本对齐方式
 * @default 居中
 *
 * @param --窗口--
 * @default
 *
 * @param 数字分组
 * @parent --窗口--
 * @type boolean
 * @on 分组
 * @off 不分组
 * @desc 用逗号将数字分组在一起(千，百万，十亿，兆，千兆……)
 * @default true
 *
 * @param 行高
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整窗口中使用的通用行高
 * 默认值：36
 * @default 36
 *
 * @param 图标宽度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整图标的宽度
 * 默认值：32
 * @default 32
 *
 * @param 图标高度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整图标的高度
 * 默认值：32
 * @default 32
 *
 * @param 脸图宽度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整角色的脸图宽度
 * 默认值：144
 * @default 144
 *
 * @param 脸图高度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整角色的脸图高度
 * 默认值：144
 * @default 144
 *
 * @param 窗口内边距
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整所有普通窗口的内填充边距
 * 默认值：18
 * @default 18
 *
 * @param 文本内边距
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整窗口内文本的内填充边距
 * 默认值：6
 * @default 6
 *
 * @param 窗口不透明度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 调整窗口的背景不透明度(0-255，越大越不透明)
 * 默认值：192
 * @default 192
 *
 * @param 仪表轮廓
 * @parent --窗口--
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 启用仪表(如HP条，MP条)轮廓
 * @default true
 *
 * @param 仪表高度
 * @parent --窗口--
 * @type number
 * @min 0
 * @desc 设置仪表的高度
 * @default 18
 *
 * @param 菜单TP栏
 * @parent --窗口--
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 在角色的状态菜单绘制TP栏
 * @default true
 *
 * @param --窗口颜色--
 * @default
 *
 * @param 颜色：通常
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：0
 * @default 0
 *
 * @param 颜色：系统
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：16
 * @default 16
 *
 * @param 颜色：危急
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：17
 * @default 17
 *
 * @param 颜色：死亡
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：18
 * @default 18
 *
 * @param 颜色：仪表背景
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：19
 * @default 19
 *
 * @param 颜色：血条仪表1
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：20
 * @default 20
 *
 * @param 颜色：血条仪表2
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：21
 * @default 21
 *
 * @param 颜色：蓝条仪表1
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：22
 * @default 22
 *
 * @param 颜色：蓝条仪表2
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：23
 * @default 23
 *
 * @param 颜色：魔力支付
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：23
 * @default 23
 *
 * @param 颜色：能力提升
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：24
 * @default 24
 *
 * @param 颜色：能力下降
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：25
 * @default 25
 *
 * @param 颜色：TP条仪表1
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：28
 * @default 28
 *
 * @param 颜色：TP条仪表2
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：29
 * @default 29
 *
 * @param 颜色：TP支付颜色
 * @parent --窗口颜色--
 * @type number
 * @min 0
 * @max 31
 * @desc 更改窗口的文本颜色
 * 默认值：29
 * @default 29
 *
 * @help
 *
 * 机翻版本：v0.09  完成时间：2023.09.19
 *
 * 插件官方描述：
 * 大多数Yanfly引擎脚本(插件)都需要它。
 * 还包含RPG Maker中固有的错误修复。
 *
 * ============================================================================
 * 介绍&指南
 * ============================================================================
 *
 *
 * YEP_CoreEngine - 核心引擎是为RM MV制作的
 * 该插件主要用于修复错误，并允许用户更多地控制RM MV的各种功能：
 * 如屏幕分辨率、字体、窗口颜色等
 *
 * 该插件在使用时，需要放在所有其他YEP之上
 * (已开启的插件里，功能相同的插件，下方的会覆盖上方的功能)
 * 根据自身需要调整插件参数
 *
 * ============================================================================
 * 漏洞修补
 * ============================================================================
 *
 * 该插件修复了RM MV中存在的一些错误。其中包括：
 *
 * 动画覆盖
 *   当一个技能/物品使用全屏动画同时瞄准多个敌人时，它会多次叠加，
 *   导致图像被一系列叠加效果扭曲
 *   该插件通过只在组中播放一个动画来解决这个问题
 *
 * 音频音量叠加
 *   有时，当在同一帧中播放具有精确设置的多个声音效果时（通常是由于
 *   动画），音量会相互叠加，导致它们无法播放预期音量的效果
 *   该插件会阻止在同一帧中播放完全相同设置的声音效果
 *   只允许第一个声音效果播放，使得不会将音量叠加变高
 *
 * 事件移动速度
 *   由于源代码中的一个小错误，事件的移动速度略慢于应有的速度
 *   该插件修复了这个问题，它们以正确的速度移动
 *
 * 事件移动队列
 *   如果事件通过事件命令移动，中途更改了条件，使事件执行内容转变为
 *   其他页面，将导致该事件的移动路径在其轨迹中停止
 *   该插件修复了此问题，事件的移动路线将完成
 *
 * 事件碰撞
 *   默认情况下，MV的事件不能在优先级为“在人物下方”的其他事件上移动
 *   这使得某些类型的谜题或事件很难存在
 *   此插件通过使冲突检查仅适用于优先级“与人物相同”事件来解决此问题
 *   任何优先级为“在人物下(上)方”的事件将不再与其他事件发生碰撞
 *
 * 屏幕撕裂
 *   当移动缓慢时，屏幕上的图块会撕裂。虽然它在所有系统上都不明显，
 *   但速度较慢的计算机肯定会显示撕裂
 *   该插件将解决此问题，并同步平铺，以正确跟上屏幕的相机移动
 *
 * 精灵失真
 *   由于JS奇怪的数学行为，有时带有小数点的值，会导致精灵表看起来失真
 *   该插件将去掉小数位数，并让精灵表只使用整数值正确地取出帧
 *
 * ============================================================================
 * 金钱
 * ============================================================================
 *
 * 可以使用插件命令增加或减少获得超过软件的数值限制的金币
 * 也可以在三类道具的备注中添加备注标签，使得售价超过软件的数值限制
 *
 * 插件命令(此插件命令不区分大小写)：
 *   获得金钱 1234    # 玩家队伍获得 1234 金钱，或可用：GainGold 1234
 *   失去金钱 4321    # 玩家队伍失去 4321 金钱，或可用：LoseGold 4321

 *
 * 物品，武器，护甲 备注标签(此备注标签不区分大小写)：
 *   <售价: 1234>
 *   设置此三类道具的价格，或可用<Price: 1234>
 *
 * 敌人 备注标签(此备注标签不区分大小写)：
 *   <掉落金币: 4321>
 *   设置敌人掉落的金币，或可用<Gold: 1234>、<Money: 1234>
 *
 * ============================================================================
 * 物品
 * ============================================================================
 *
 * 更改参数以反映玩家每个物品可持有的最大物品数量
 * 如果希望使单个项目具有不同的最大值，请使用以下备注标签：
 *
 * 物品，武器，护甲 备注标签(此备注标签不区分大小写)：
 *   <物品持有上限: 1234>
 *   设置物品的最大数值，或可用<max item: 1234>
 *
 * ============================================================================
 * 能力值属性
 * ============================================================================
 *
 * 即使插件提高了参数限制，在编辑器中仍然局限于RM MV的默认限制
 * 要突破它们，请使用以下备注标签来进一步控制参数的各个方面
 *
 * 角色 备注标签(此备注标签不区分大小写)：
 *   <角色初始等级: 数字>
 *   设置角色的初始等级，或可用<initial level: 数字>
 *
 *   <角色等级上限: 数字>
 *   设置角色的最大等级，或可用<max level: 数字>
 *
 * 职业技能学习 备注标签(此备注标签不区分大小写)：
 *   <技能习得等级: 数字>
 *   在'数据库-职业-要习得的技能-备注'中设置备注标签
 *   以此来设置该职业的角色可习得该技能的等级
 *   或可用<learn at level: 数字><learn level: 数字>
 *
 * 武器、护甲 备注标签(此备注标签不区分大小写)：
 * 将“能力值”替换为以下八个基本参数：
 *    最大生命，最大魔力，攻击，防御，魔攻，魔防，敏捷，幸运
 * 也可以相应的替换为
 * (可自行在本插件的DataManager.processCORENotetags1和2中增减)：
 * 最大生命
 * →HP、MHP、MAXHP、MAX HP、最大HP、最大生命值
 * 
 * 最大魔力
 * →MP、MMP、MAXMP、MAX MP、SP、MAXSP、MAX SP、最大MP、最大魔力值
 * 
 * 攻击
 * →ATK、STR、攻击力、物攻、物理攻击、物流攻击力
 * 
 * 防御
 * →DEF、防御力、物防、物理防御、物理防御力
 * 
 * 魔攻
 * →MAT、INT、SPI、魔法攻击、魔法攻击力、特攻、特殊攻击、特殊攻击力
 * 
 * 魔防
 * →MDF、RES、魔法防御、魔法防御力、特防、特殊防御、特殊防御力
 * 
 * 敏捷
 * →AGI、SPD、速度
 * 
 * 幸运
 * →LUK
 *
 *   <能力值: +数字>
 *   <能力值: -数字>
 *   设置武器或护甲使装备者增加或减少的能力值属性
 *
 * 敌人 备注标签：
 *   <能力值: 数字>
 *   设置敌人的能力值属性
 *
 *   <可获得经验: 数字>
 *   设置敌人的经验值
 *   也可以相应的替换为
 * (可自行在本插件的DataManager.processCORENotetags1和2中增减)：
 * 可获得经验
 * →EXP、XP、经验
 *
 * ============================================================================
 * 脚本调用故障保护
 * ============================================================================
 *
 * 伤害公式、脚本调用、条件分支和变量事件中的不规则代码，将不再使游戏
 * 崩溃。相反，他们将强制打开控制台窗口(仅在测试游戏期间显示错误)
 * 如果玩家不在测试游戏中，游戏将照常进行，不会显示错误
 * 如果在浏览器中玩游戏，打开控制台窗口时仍会显示错误
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.32:
 * - 已从1.24版本中恢复对屏幕抖动修复的禁用
 * 不知怎的，不知道什么时候它回来了，但现在它需要走了
 *
 * 版本 1.31:
 * - 将“Fallen Angel Olivia”的完整错误信息显示添加到核心引擎中
 * (当然是经过她的许可)
 * - 修复：混合模式和灌木丛深度导致精灵在游戏中无法正确混合的错误
 * - 在触发Tab键相关输入之前，Tab键不再需要您按两次
 *
 * 版本 1.30:
 * - 修复了音频音效叠加的错误
 * - 优化更新
 *
 * 版本 1.29:
 * - 绕过由于更新到MV 1.6.1，脚本调用或自定义疯狂模式代码段中插入错误
 * 代码时的isDevToolsOpen()错误
 *
 * 版本 1.28:
 * - 按F5重新加载游戏时，如果在重新加载之前打开了开发工具调试控制台
 * 这将关闭该控制台。因为在关闭的情况下，最终会更快地重新加载游戏
 * - 新增插件参数：刷新更新 HP、MP和TP
 *   - 选择设置在更改HP、MP或TP时进行完整演员刷新
 *   - 这是为了减少总体地图滞后
 *
 * 版本 1.27:
 * - 为RM MV 1.6.0版本更新：
 *   - 由于ES6处理 “ === ” 的方式不同，修复了：
 *   在条件分支下使用开关和独立开关进行的脚本调用检查
 *
 * 版本 1.26:
 * - 为RM MV 1.6.0版本更新：
 *   - 删除Scene_Item.update函数中的破坏性代码
 *   - '开启控制台' 参数现在发生在地图加载后或战斗开始后
 *   这是因为在1.6.0更改之后，在任何其他操作之前加载控制台，将阻止RM的
 *   其他方面正确加载
 *
 * 版本 1.25:
 * - 为RM MV 1.5.0版本更新：
 * - 更新了“标题缩放调整”和“Game Over缩放调整”以与1.5.0一起使用
 *
 * 版本 1.24:
 * - RM MV 1.3.4及以上版本现在可以防止屏幕抖动，因为Pixi4现在可以处理
 *
 * 版本 1.23:
 * - 对于RM MV 1.3.2及以上版本，“战斗背景缩放调整”插件参数现在将以
 * 不同的格式重新创建战斗背景精灵。这是因为使用平铺精灵的战斗背景缩放
 * 太不稳定，战斗背景精灵现在只是普通精灵而不是平铺精灵，这可能会导致
 * 插件与其他改变战斗背景的插件不兼容
 * - 对于RM MV 1.3.4版，Game_Actor.meetsUsableItemConditions现已更新，
 * 以返回对原始Game_BattlerBase版本的检查，以保持与其他插件的兼容性
 *
 * 版本 1.22:
 * - 添加了“显示事件转场”插件参数
 * 启用此选项将使地图上的事件在过渡期间进入战斗时不再隐藏自己
 * - 添加了“显示事件快照”插件参数
 * 启用此选项将在进入战斗时将事件显示为战斗快照的一部分
 * - 伤害公式、脚本调用、条件分支和变量事件中的不规则代码将不再使游戏
 * 崩溃，相反，它将强制打开控制台窗口，仅在测试播放期间显示错误
 *
 * 版本 1.21:
 * - 修复了前视图中缩放战斗背景无法正常工作的错误
 * - 优化更新以在所有场景中保持垃圾回收机制
 *
 * 版本 1.20:
 * - 改变了增加分辨率的功能/函数
 * - 添加了“更新真实缩放比例”插件参数
 * 现在最好不要使用此选项，如果稍后使用渲染缩放更新网格，则可以使用
 * - 为1.3.2下的版本添加了内存清除功能，以在离开地图场景时释放更多内存
 * - 添加了“集合清空”插件参数
 * 如果该选项处于启用状态，则在切换到其他场景时，将清除附加到Scene_Map
 * 和Scene_Tbattle的子对象。这可能会从其他插件添加到这些场景的各种对象
 * 释放内存(取决于如何添加)，并作为减少内存膨胀的一种方法。
 *
 * 版本 1.19:
 * - 为RM MV 1.3.2版本更新
 * - 修复如果一件装备临时添加了技能，角色无法绕过“LearnSkill”的功能
 *
 * 版本 1.18:
 * - 修复了前视图中缩放战斗背景无法正常工作的错误
 *
 * 版本 1.17:
 * - 为RM MV 1.3.0版本更新
 *
 * 版本 1.16:
 * - 修正了RM MV固有的“drawTextEx”函数的错误
 * 默认情况下，它会计算文本高度，然后在绘制文本之前重置字体设置
 * 这会使文本高度与计算的高度设置不一致
 *
 * 版本 1.15:
 * - 窗口现在设置为只有整数的宽度和高度，它们不再可能为小数
 * 这是为了减少由非整数引起的任何和所有剪裁问题
 *
 * 版本 1.14:
 * - RM MV本身的优化更新
 * 用更高效的循环替换常用函数中更内存密集的循环
 *
 * 版本 1.13:
 * - 为RM MV 1.1.0版本更新
 *
 * 版本 1.12:
 * - 修复了一个备注标签的漏洞：<LearnatLevel:x>
 * 现在，备注标签既适用于<技能习得等级: x>，也适用于<Learn Level: x>
 *
 * 版本 1.11:
 * - 修复了无论“脸图宽度”参数怎么变更，MV源代码中脸图宽度强制使用144值
 * 的问题
 * - 修正了一个不适用于敌人经验值的备注标签
 * - 更新了战斗者的重新定位，使其以排列编队进入和退出场景时不发生冲突
 *
 * 版本 1.10:
 * - 删除了通过MV的“newes tupdate”应用的MV错误修复程序
 *
 * 版本 1.09:
 * - 更改了状态图标绘制的最小显示宽度，以适应队伍编队的默认值
 *
 * 版本 1.08:
 * - 修复了MV源代码中的一个错误，该错误会更改职业并维持等级
 * 即使维持等级的功能已被删除！
 * 
 *
 * 版本 1.07:
 * - 修复了当窗口不规则缩放时，仪表槽在奇数间隔绘制的轮廓比通常更粗的
 * 问题
 *
 * 版本 1.06:
 * - 删除了事件频率错误修复，因为它现在包含在源代码中
 *
 * 版本 1.05:
 * - 在插件设置中添加了“Game Over缩放调整”参数
 *
 * 版本 1.04:
 * - 修改了缩小战斗背景位置的数学计算
 * - 修正了若一方未能脱离战斗，脱离战斗会移除的状态仍然会被移除的错误
 * *由“Emjenoeg”修复*
 *
 * 版本 1.03:
 * - 修复了一个奇怪的错误，它会在一次战斗后使规模缩小的战场发生偏移
 *
 * 版本 1.02:
 * - 修复了一个导致移动设备屏幕褪色的错误
 * - 增加了“战斗背景缩放调整”和“标题缩放调整”参数
 *
 * 版本 1.01:
 * - 修复了一个错误，即如果按钮的精灵有不同的锚点，它们将无法正确单击
 * *由“Zalerinian”修复*
 *
 * 版本 1.00:
 * - 完成插件
 */
//=============================================================================

//=============================================================================
// Parameter Variables - 插件参数变量
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CoreEngine');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.ScreenWidth  = Number(Yanfly.Parameters['屏幕宽度'] || 816);
Yanfly.Param.ScreenHeight = Number(Yanfly.Parameters['屏幕高度'] || 624);
Yanfly.Param.ScaleBattleback = String(Yanfly.Parameters['战斗背景缩放调整']);
Yanfly.Param.ScaleBattleback = eval(Yanfly.Param.ScaleBattleback);
Yanfly.Param.ScaleTitle = eval(String(Yanfly.Parameters['标题缩放调整']));
Yanfly.Param.ScaleGameOver = eval(String(Yanfly.Parameters['Game Over缩放调整']));
Yanfly.Param.OpenConsole = String(Yanfly.Parameters['开启控制台']);
Yanfly.Param.OpenConsole = eval(Yanfly.Param.OpenConsole);
Yanfly.Param.ReposBattlers = String(Yanfly.Parameters['战斗者重定位']);
Yanfly.Param.ReposBattlers = eval(Yanfly.Param.ReposBattlers);
Yanfly.Param.GameFontTimer = Number(Yanfly.Parameters['游戏字体加载计时器']);
Yanfly.Param.UpdateRealScale = String(Yanfly.Parameters['更新真实缩放比例']);
Yanfly.Param.UpdateRealScale = eval(Yanfly.Param.UpdateRealScale);
Yanfly.Param.CollectionClear = String(Yanfly.Parameters['集合清空']);
Yanfly.Param.CollectionClear = eval(Yanfly.Param.CollectionClear);

Yanfly.Param.MaxGold = String(Yanfly.Parameters['金钱上限']);
Yanfly.Param.GoldFontSize = Number(Yanfly.Parameters['金钱字体大小']);
Yanfly.Icon.Gold = Number(Yanfly.Parameters['金钱图标']);
Yanfly.Param.GoldOverlap = String(Yanfly.Parameters['金钱重叠']);

Yanfly.Param.MaxItem = Number(Yanfly.Parameters['默认上限']);
Yanfly.Param.ItemQuantitySize = Number(Yanfly.Parameters['数量文本大小']);

Yanfly.Param.MaxLevel = Number(Yanfly.Parameters['等级上限']);
Yanfly.Param.EnemyMaxHp = Number(Yanfly.Parameters['敌人生命值上限']);
Yanfly.Param.EnemyMaxMp = Number(Yanfly.Parameters['敌人魔力值上限']);
Yanfly.Param.EnemyParam = Number(Yanfly.Parameters['敌人基础能力参数']);
Yanfly.Param.ActorMaxHp = Number(Yanfly.Parameters['角色生命值上限']);
Yanfly.Param.ActorMaxMp = Number(Yanfly.Parameters['角色魔力值上限']);
Yanfly.Param.ActorParam = Number(Yanfly.Parameters['角色基础能力参数']);

Yanfly.Param.AnimationRate = Number(Yanfly.Parameters['动画速率']);
Yanfly.Param.FlashTarget = eval(String(Yanfly.Parameters['目标闪烁']));
Yanfly.Param.ShowEvTrans = String(Yanfly.Parameters['显示事件转场']);
Yanfly.Param.ShowEvTrans = eval(Yanfly.Param.ShowEvTrans);
Yanfly.Param.ShowEvSnap = String(Yanfly.Parameters['显示事件快照']);
Yanfly.Param.ShowEvSnap = eval(Yanfly.Param.ShowEvSnap);

Yanfly.Param.RefreshUpdateHp = String(Yanfly.Parameters['刷新更新HP']);
Yanfly.Param.RefreshUpdateHp = eval(Yanfly.Param.RefreshUpdateHp);
Yanfly.Param.RefreshUpdateMp = String(Yanfly.Parameters['刷新更新MP']);
Yanfly.Param.RefreshUpdateMp = eval(Yanfly.Param.RefreshUpdateMp);
Yanfly.Param.RefreshUpdateTp = String(Yanfly.Parameters['刷新更新TP']);
Yanfly.Param.RefreshUpdateTp = eval(Yanfly.Param.RefreshUpdateTp);

Yanfly.Param.ChineseFont = String(Yanfly.Parameters['中文字体']);
Yanfly.Param.KoreanFont = String(Yanfly.Parameters['韩语字体']);
Yanfly.Param.DefaultFont = String(Yanfly.Parameters['默认字体']);
Yanfly.Param.FontSize = Number(Yanfly.Parameters['字体大小']);
Yanfly.Param.TextAlign = String(Yanfly.Parameters['文本对齐']);

Yanfly.Param.DigitGroup = eval(String(Yanfly.Parameters['数字分组']));
Yanfly.Param.LineHeight = Number(Yanfly.Parameters['行高']);
Yanfly.Param.IconWidth = Number(Yanfly.Parameters['图标宽度'] || 32);;
Yanfly.Param.IconHeight = Number(Yanfly.Parameters['图标高度'] || 32);;
Yanfly.Param.FaceWidth = Number(Yanfly.Parameters['脸图宽度'] || 144);
Yanfly.Param.FaceHeight = Number(Yanfly.Parameters['脸图高度'] || 144);
Yanfly.Param.WindowPadding = Number(Yanfly.Parameters['窗口内边距']);
Yanfly.Param.TextPadding = Number(Yanfly.Parameters['文本内边距']);
Yanfly.Param.WindowOpacity = Number(Yanfly.Parameters['窗口不透明度']);
Yanfly.Param.GaugeOutline = eval(String(Yanfly.Parameters['仪表轮廓']));
Yanfly.Param.GaugeHeight = Number(Yanfly.Parameters['仪表高度']);
Yanfly.Param.MenuTpGauge = eval(String(Yanfly.Parameters['菜单TP栏']));

Yanfly.Param.ColorNormal = Number(Yanfly.Parameters['颜色：通常']);
Yanfly.Param.ColorSystem = Number(Yanfly.Parameters['颜色：系统']);
Yanfly.Param.ColorCrisis = Number(Yanfly.Parameters['颜色：危急']);
Yanfly.Param.ColorDeath = Number(Yanfly.Parameters['颜色：死亡']);
Yanfly.Param.ColorGaugeBack = Number(Yanfly.Parameters['颜色：仪表背景']);
Yanfly.Param.ColorHpGauge1 = Number(Yanfly.Parameters['颜色：血条仪表1']);
Yanfly.Param.ColorHpGauge2 = Number(Yanfly.Parameters['颜色：血条仪表2']);
Yanfly.Param.ColorMpGauge1 = Number(Yanfly.Parameters['颜色：蓝条仪表1']);
Yanfly.Param.ColorMpGauge2 = Number(Yanfly.Parameters['颜色：蓝条仪表2']);
Yanfly.Param.ColorMpCost = Number(Yanfly.Parameters['颜色：魔力支付']);
Yanfly.Param.ColorPowerUp = Number(Yanfly.Parameters['颜色：能力提升']);
Yanfly.Param.ColorPowerDown = Number(Yanfly.Parameters['颜色：能力下降']);
Yanfly.Param.ColorTpGauge1 = Number(Yanfly.Parameters['颜色：TP条仪表1']);
Yanfly.Param.ColorTpGauge2 = Number(Yanfly.Parameters['颜色：TP条仪表2']);
Yanfly.Param.ColorTpCost = Number(Yanfly.Parameters['颜色：TP支付颜色']);

//=============================================================================
// Bitmap - 位图
//=============================================================================

Yanfly.Core.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
  Yanfly.Core.Bitmap_initialize.call(this, width, height);
  this.fontFace = Yanfly.Param.DefaultFont;
};

Yanfly.Core.Bitmap_blt = Bitmap.prototype.blt;
Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    sw = Math.floor(sw);
    sh = Math.floor(sh);
    dx = Math.floor(dx);
    dy = Math.floor(dy);
    dw = Math.floor(dw);
    dh = Math.floor(dh);
    Yanfly.Core.Bitmap_blt.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
};

Yanfly.Core.Bitmap_fillRect = Bitmap.prototype.fillRect;
Bitmap.prototype.fillRect = function(x, y, w, h, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    w = Math.floor(w);
    h = Math.floor(h);
    Yanfly.Core.Bitmap_fillRect.call(this, x, y, w, h, c);
};

Yanfly.Core.Bitmap_gradientFillRect = Bitmap.prototype.gradientFillRect;
Bitmap.prototype.gradientFillRect = function(x, y, w, h, c1, c2, ve) {
    Yanfly.Core.Bitmap_gradientFillRect.call(this, x, y, w, h, c1, c2, ve);
};

Yanfly.Core.Bitmap_drawCircle = Bitmap.prototype.drawCircle;
Bitmap.prototype.drawCircle = function(x, y, r, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    Yanfly.Core.Bitmap_drawCircle.call(this, x, y, r, c);
};

Yanfly.Core.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, mW, l, align) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (mW < 0) mW = 0;
    mW = Math.floor(mW);
    l = Math.floor(l);
    Yanfly.Core.Bitmap_drawText.call(this, text, x, y, mW, l, align);
};

//=============================================================================
// Graphics - 图样
//=============================================================================

if (Yanfly.Param.UpdateRealScale) {

Graphics._updateRealScale = function() {
  if (this._stretchEnabled) {
    var h = window.innerWidth / this._width;
    var v = window.innerHeight / this._height;
    this._realScale = Math.min(h, v);
    if (this._realScale >= 3) this._realScale = 3;
    else if (this._realScale >= 2) this._realScale = 2;
    else if (this._realScale >= 1.5) this._realScale = 1.5;
    else if (this._realScale >= 1) this._realScale = 1;
    else this._realScale = 0.5;
  } else {
    this._realScale = this._scale;
  }
};

}; // Yanfly.Param.UpdateRealScale

Graphics.printFullError = function(name, message, stack) {
  stack = this.processErrorStackMessage(stack);
  if (this._errorPrinter) {
    this._errorPrinter.innerHTML =
      this._makeFullErrorHtml(name, message, stack);
  }
  this._applyCanvasFilter();
  this._clearUpperCanvas();
};

Graphics._makeFullErrorHtml = function(name, message, stack) {
  var text = '';
  for (var i = 2; i < stack.length; ++i) {
    text += '<font color=white>' + stack[i] + '</font><br>';
  }
  return ('<font color="yellow"><b>' + stack[0] + '</b></font><br>' +
    '<font color="yellow"><b>' + stack[1] + '</b></font><br>' + text);
};

Graphics.processErrorStackMessage = function(stack)  {
  var data = stack.split(/(?:\r\n|\r|\n)/);
  data.unshift('游戏遇到错误。请反馈此错误。<br>');
  //data.unshift('Game has encountered a bug. Please report it.<br>');
  for (var i = 1; i < data.length; ++i) {
    data[i] = data[i].replace(/[\(](.*[\/])/, '(');
  }
  data.push('<br><font color="yellow"><b>按F5重启游戏。' +
    '</b></font><br>');
  /*data.push('<br><font color="yellow"><b>Press F5 to restart the game.' +
    '</b></font><br>');*/
  return data;
};

Yanfly.Core.Graphics_updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
  Yanfly.Core.Graphics_updateErrorPrinter.call(this);
  this._errorPrinter.height = this._height * 0.5;
  this._errorPrinter.style.textAlign = 'left';
  this._centerElement(this._errorPrinter);
};

SceneManager.catchException = function(e) {
  if (e instanceof Error) {
    Graphics.printFullError(e.name, e.message, e.stack);
    console.error(e.stack);
  } else {
    Graphics.printError('未知错误', e);
    //Graphics.printError('UnknownError', e);
  }
  AudioManager.stopAll();
  this.stop();
};

//=============================================================================
// Input - 输入
//=============================================================================

Yanfly.Core.Input_shouldPreventDefault = Input._shouldPreventDefault;
Input._shouldPreventDefault = function(keyCode) {
  if (keyCode === 9) return true;
  return Yanfly.Core.Input_shouldPreventDefault.call(this, keyCode);
};

//=============================================================================
// Sprite - 精灵
//=============================================================================

Yanfly.Core.Sprite_updateTransform = Sprite.prototype.updateTransform;
Sprite.prototype.updateTransform = function() {
  Yanfly.Core.Sprite_updateTransform.call(this);
  this.worldTransform.tx = Math.floor(this.worldTransform.tx);
  this.worldTransform.ty = Math.floor(this.worldTransform.ty);
};

//=============================================================================
// ScreenSprite - 屏幕精灵
//=============================================================================

Yanfly.Core.ScreenSprite_initialize = ScreenSprite.prototype.initialize;
ScreenSprite.prototype.initialize = function() {
  Yanfly.Core.ScreenSprite_initialize.call(this);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0') return;
  this.scale.x = Graphics.boxWidth * 10;
  this.scale.y = Graphics.boxHeight * 10;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.x = 0;
  this.y = 0;
};

//=============================================================================
// Window - 窗口
//=============================================================================

Yanfly.Core.Window_refreshAllParts = Window.prototype._refreshAllParts;
Window.prototype._refreshAllParts = function() {
  this._roundWhUp();
  Yanfly.Core.Window_refreshAllParts.call(this);
};

Window.prototype._roundWhUp = function() {
  this._width = Math.ceil(this._width);
  this._height = Math.ceil(this._height);
};

//=============================================================================
// DataManager - 数据管理器
//=============================================================================

Yanfly.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_CoreEngine) {
    this.processCORENotetags1($dataItems);
    this.processCORENotetags1($dataWeapons);
    this.processCORENotetags1($dataArmors);
    this.processCORENotetags2($dataEnemies);
    this.processCORENotetags3($dataActors);
    this.processCORENotetags4($dataClasses);
    Yanfly._loaded_YEP_CoreEngine = true;
  }
  return true;
};

DataManager.processCORENotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxItem = Yanfly.Param.MaxItem;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      //if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
      if (line.match(/<(?:售价|PRICE):[ ]*(\d+)>/i)) {
        obj.price = parseInt(RegExp.$1);
      //} else if (line.match(/<(?:MAX ITEM):[ ](\d+)>/i)) {
      } else if (line.match(/<(?:物品持有上限|MAX ITEM):[ ]*(\d+)>/i)) {
        obj.maxItem = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(.*):[ ]*([\+\-]\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MHP':
          case 'MAXHP':
          case 'MAX HP':
          case '最大HP':
          case '最大生命':
          case '最大生命值':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MMP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
          case '最大MP':
          case '最大魔力':
          case '最大魔力值':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
          case '攻击':
          case '攻击力':
          case '物攻':
          case '物理攻击':
          case '物流攻击力':
            obj.params[2] = value;
            break;
          case 'DEF':
          case '防御':
          case '防御力':
          case '物防':
          case '物理防御':
          case '物理防御力':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT':
          case 'SPI':
          case '魔攻':
          case '魔法攻击':
          case '魔法攻击力':
          case '特攻':
          case '特殊攻击':
          case '特殊攻击力':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
          case '魔防':
          case '魔法防御':
          case '魔法防御力':
          case '特防':
          case '特殊防御':
          case '特殊防御力':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
          case '敏捷':
          case '速度':
            obj.params[6] = value;
            break;
          case 'LUK':
          case '幸运':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
          case '经验':
          case '可获得经验':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      //if (line.match(/<(?:GOLD):[ ](\d+)>/i)) {
      if (line.match(/<(?:掉落金币|GOLD|MONEY):[ ]*(\d+)>/i)) {
        obj.gold = parseInt(RegExp.$1);
      } else if (line.match(/<(.*):[ ]*(\d+)>/i)) {
        var stat = RegExp.$1;
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MHP':
          case 'MAXHP':
          case 'MAX HP':
          case '最大HP':
          case '最大生命':
          case '最大生命值':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MMP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
          case '最大MP':
          case '最大魔力':
          case '最大魔力值':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
          case '攻击':
          case '攻击力':
          case '物攻':
          case '物理攻击':
          case '物流攻击力':
            obj.params[2] = value;
            break;
          case 'DEF':
          case '防御':
          case '防御力':
          case '物防':
          case '物理防御':
          case '物理防御力':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT':
          case 'SPI':
          case '魔攻':
          case '魔法攻击':
          case '魔法攻击力':
          case '特攻':
          case '特殊攻击':
          case '特殊攻击力':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
          case '魔防':
          case '魔法防御':
          case '魔法防御力':
          case '特防':
          case '特殊防御':
          case '特殊防御力':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
          case '敏捷':
          case '速度':
            obj.params[6] = value;
            break;
          case 'LUK':
          case '幸运':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
          case '经验':
          case '可获得经验':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxLevel = Yanfly.Param.MaxLevel;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      //if (line.match(/<(?:MAX LEVEL):[ ](\d+)>/i)) {
      if (line.match(/<(?:角色等级上限|MAX LEVEL):[ ]*(\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
        if (obj.maxLevel < 1) obj.maxLevel = 1;
      //} else if (line.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)) {
      } else if (line.match(/<(?:角色初始等级|INITIAL LEVEL):[ ]*(\d+)>/i)) {
        obj.initialLevel = parseInt(RegExp.$1);
        if (obj.initialLevel < 1) obj.initialLevel = 1;
      }
    }
  }
};

DataManager.processCORENotetags4 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.learnings.forEach(function(learning) {
      //if (learning.note.match(/<(?:LEARN LEVEL|LEARN AT LEVEL):[ ](\d+)>/i)) {
      if (learning.note.match(/<(?:技能习得等级|LEARN LEVEL|LEARN AT LEVEL):[ ]*(\d+)>/i)) {
        learning.level = parseInt(RegExp.$1);
        if (learning.level < 1) obj.maxLevel = 1;
      }
    }, this);
  }
};

//=============================================================================
// AudioManager Stacking Volume Bug Fix - 音频管理器叠加音量错误修复
//=============================================================================

Yanfly.Core.AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function(se) {
    this._frameSe = this._frameSe || [];
    if (this.uniqueCheckSe(se)) {
      Yanfly.Core.AudioManager_playSe.call(this, se);
      this._frameSe.push(se);
    }
};

AudioManager.uniqueCheckSe = function(se1) {
    if (this._frameSe.contains(se1)) return false;
    return true;
};

AudioManager.clearUniqueCheckSe = function() {
    this._frameSe = [];
};

Yanfly.Core.SceneManager_updateInputData = SceneManager.updateInputData;
SceneManager.updateInputData = function() {
    Yanfly.Core.SceneManager_updateInputData.call(this);
    AudioManager.clearUniqueCheckSe();
};

//=============================================================================
// SceneManager - 场景管理器
//=============================================================================

SceneManager._screenWidth  = Yanfly.Param.ScreenWidth;
SceneManager._screenHeight = Yanfly.Param.ScreenHeight;
SceneManager._boxWidth     = Yanfly.Param.ScreenWidth;
SceneManager._boxHeight    = Yanfly.Param.ScreenHeight

Yanfly.Core.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
  Yanfly.Core.SceneManager_run.call(this, sceneClass);
  Yanfly.updateResolution();
  if (!Utils.isNwjs()) return;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Yanfly.Param.OpenConsole) Yanfly.openConsole();
};

Yanfly.updateResolution = function() {
  var resizeWidth = Yanfly.Param.ScreenWidth - window.innerWidth;
  var resizeHeight = Yanfly.Param.ScreenHeight - window.innerHeight;
  if (!Imported.ScreenResolution) {
    window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
    window.resizeBy(resizeWidth, resizeHeight);
  }
};

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var _debugWindow = require('nw.gui').Window.get().showDevTools();
    if (_debugWindow) _debugWindow.moveTo(0, 0);
    window.focus();
  }
};

Yanfly.Core.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
  if (!event.ctrlKey && !event.altKey && event.keyCode === 116) {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
      var win = require('nw.gui').Window.get();
      win.closeDevTools();
    }
  }
  Yanfly.Core.SceneManager_onKeyDown.call(this, event);
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (!Yanfly.Param.OpenConsole) return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var win = require('nw.gui').Window.get();
    win.showDevTools();
    setTimeout(this.focusWindow.bind(this, win), 500);
  }
};

Yanfly.focusWindow = function(win) {
  win.focus();
};

Yanfly.Core.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
  Yanfly.Core.Scene_Map_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

Yanfly.Core.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
  Yanfly.Core.Scene_Battle_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

}; // 1.6.0

//=============================================================================
// BattleManager - 战斗管理器
//=============================================================================

Yanfly.Core.BattleManager_displayStartMessages =
    BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
  Yanfly.Core.BattleManager_displayStartMessages.call(this);
  $gameTroop.members().forEach(function(enemy) {
      enemy.recoverAll();
  });
};

BattleManager.processEscape = function() {
  $gameParty.performEscape();
  SoundManager.playEscape();
  var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
  if (success) {
      $gameParty.removeBattleStates();
      this.displayEscapeSuccessMessage();
      this._escaped = true;
      this.processAbort();
  } else {
      this.displayEscapeFailureMessage();
      this._escapeRatio += 0.1;
      $gameParty.clearActions();
      this.startTurn();
  }
  return success;
};

//=============================================================================
// Game_BattlerBase - 战斗基础
//=============================================================================

Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return Yanfly.Param.EnemyMaxHp;
    } else if (paramId === 1) {
        return Yanfly.Param.EnemyMaxMp;
    } else {
        return Yanfly.Param.EnemyParam;
    }
};

Yanfly.Core.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;

Game_BattlerBase.prototype.mapRegenUpdateCheck = function(type) {
  if ($gameParty.inBattle()) return true;
  if (type === 'hp') {
    return Yanfly.Param.RefreshUpdateHp;
  } else if (type === 'mp') {
    return Yanfly.Param.RefreshUpdateMp;
  } else if (type === 'tp') {
    return Yanfly.Param.RefreshUpdateTp;
  }
};

Game_BattlerBase.prototype.setHp = function(hp) {
  if (this._hp === hp) return;
  this._hp = hp;
  if (this.mapRegenUpdateCheck('hp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setMp = function(mp) {
  if (this._mp === mp) return;
  this._mp = mp;
  if (this.mapRegenUpdateCheck('mp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setTp = function(tp) {
  if (this._tp === tp) return;
  this._tp = tp;
  if (this.mapRegenUpdateCheck('tp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

//=============================================================================
// Game_Battler - 战斗
//=============================================================================

Game_Battler.prototype.onTurnEnd = function() {
  this.clearResult();
  this.regenerateAll();
  this.updateStateTurns();
  this.updateBuffTurns();
  this.removeStatesAuto(2);
};

//=============================================================================
// Game_Actor - 角色
//=============================================================================

Yanfly.Core.Game_Actor_isMaxLevel = Game_Actor.prototype.isMaxLevel;
Game_Actor.prototype.isMaxLevel = function() {
    if (this.maxLevel() === 0) return false;
    return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
};

Game_Actor.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
      return Yanfly.Param.ActorMaxHp;
  } else if (paramId === 1) {
      return Yanfly.Param.ActorMaxMp;
  } else {
      return Yanfly.Param.ActorParam;
  }
};

Yanfly.Core.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    if (this.level > 99) {
      var i = this.currentClass().params[paramId][99];
      var j = this.currentClass().params[paramId][98];
      i += (i - j) * (this.level - 99);
      return i;
    }
    return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
};

Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this._exp[this._classId];
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

Game_Actor.prototype.learnSkill = function(skillId) {
    if (!this._skills.contains(skillId)) {
        this._skills.push(skillId);
        this._skills.sort(function(a, b) {
            return a - b;
        });
    }
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') {

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
  if($gameParty.inBattle() && !BattleManager.canEscape() &&
  this.testEscape(item)){
    return false;
  }
  return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4'

//=============================================================================
// Game_Party - 队伍
//=============================================================================

Game_Party.prototype.maxGold = function() {
    return eval(Yanfly.Param.MaxGold);
};

Game_Party.prototype.maxItems = function(item) {
    if (!item) return 1;
    return item.maxItem;
};

Game_Party.prototype.onPlayerWalk = function() {
    var group = this.members();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var actor = group[i];
      if (actor) actor.onPlayerWalk();
    }
};

//=============================================================================
// Game_Map - 地图
//=============================================================================

Yanfly.isPreventScreenJittering = function() {
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0') return true;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') return false;
  return true;
};

if (Yanfly.isPreventScreenJittering()) {

Game_Map.prototype.displayX = function() {
    return parseFloat(Math.floor(this._displayX *
      this.tileWidth())) / this.tileWidth();
};

Game_Map.prototype.displayY = function() {
    return parseFloat(Math.floor(this._displayY *
      this.tileHeight())) / this.tileHeight();
};

}; // Yanfly.isPreventScreenJittering

Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
        return x - this.displayX() + $dataMap.width;
    } else {
        return x - this.displayX();
    }
};

Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
        return y - this.displayY() + $dataMap.height;
    } else {
        return y - this.displayY();
    }
};

Game_Map.prototype.updateEvents = function() {
    var group = this.events();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
    var group = this._commonEvents;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
};

Game_Map.prototype.updateVehicles = function() {
    var group = this._vehicles;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var vehicle = group[i];
      if (vehicle) vehicle.update();
    }
};

//=============================================================================
// Game_Character - 角色(NPC，事件等)
//=============================================================================

Game_Character.prototype.queueMoveRoute = function(moveRoute) {
    this._originalMoveRoute = moveRoute;
    this._originalMoveRouteIndex = 0;
};

Yanfly.Core.Game_Event_setMoveRoute =
    Game_Event.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    if (!this._moveRouteForcing) {
        Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
    } else {
        this.queueMoveRoute(moveRoute);
    }
};

Yanfly.Core.Game_Character_processMoveCommand =
  Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function(command) {
  var gc = Game_Character;
  var params = command.parameters;
  switch (command.code) {
  case gc.ROUTE_SCRIPT:
    try {
      eval(params[0]);
    } catch (e) {
      Yanfly.Util.displayError(e, params[0], '移动路线脚本错误');
      //Yanfly.Util.displayError(e, params[0], 'MOVE ROUTE SCRIPT ERROR');
    }
    return;
    break;
  }
  return Yanfly.Core.Game_Character_processMoveCommand.call(this, command);
};

//=============================================================================
// Game_Event - 事件
//=============================================================================

Game_Event.prototype.isCollidedWithEvents = function(x, y) {
  var events = $gameMap.eventsXyNt(x, y).filter(function(ev) {
    return ev.isNormalPriority();
  });
  if (events.length <= 0) return false;
  return this.isNormalPriority();
};

//=============================================================================
// Game_Screen - 场景
//=============================================================================

Game_Screen.prototype.updatePictures = function() {
    var group = this._pictures;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var picture = group[i];
      if (picture) picture.update();
    }
};

//=============================================================================
// Game_Action - 动作
//=============================================================================

Yanfly.Core.Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_LEARN_SKILL:
      return target.isActor() && !target._skills.contains(effect.dataId);
    default:
      return Yanfly.Core.Game_Action_testItemEffect.call(this, target, effect);
    }
};

Game_Action.prototype.evalDamageFormula = function(target) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var v = $gameVariables._data;
  var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
  try {
    var value = Math.max(eval(item.damage.formula), 0) * sign;
    if (isNaN(value)) value = 0;
    return value;
  } catch (e) {
    Yanfly.Util.displayError(e, item.damage.formula, '伤害公式错误');
    //Yanfly.Util.displayError(e, item.damage.formula, 'DAMAGE FORMULA ERROR');
    return 0;
  }
};

//=============================================================================
// Game_Interpreter - 解释程序
//=============================================================================

// Conditional Branch - 条件分支
Yanfly.Core.Game_Interpreter_command111 =
  Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function() {
  var result = false;
  switch (this._params[0]) {
  case 0: // Switch - 开关
    if (this._params[2] === 0) {
      result = $gameSwitches.value(this._params[1]);
    } else {
      result = !$gameSwitches.value(this._params[1]);
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 2: // Self Switch - 独立开关
    if (this._eventId > 0) {
      var key = [this._mapId, this._eventId, this._params[1]];
      if (this._params[2] === 0) {
        result = $gameSelfSwitches.value(key);
      } else {
        result = !$gameSelfSwitches.value(key);
      }
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 12:  // Script - 脚本
    var code = this._params[1];
    try {
      result = !!eval(code);
    } catch (e) {
      result = false;
      Yanfly.Util.displayError(e, code, '条件分支脚本错误');
      //Yanfly.Util.displayError(e, code, 'CONDITIONAL BRANCH SCRIPT ERROR');
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  }
  return Yanfly.Core.Game_Interpreter_command111.call(this);
};

// Control Variables - 控制变量
Yanfly.Core.Game_Interpreter_command122 =
  Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function() {
  switch (this._params[3]) {
  case 4:  // Script
    var value = 0;
    var code = this._params[4];
    try {
      value = eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, '变量操作脚本错误');
      //Yanfly.Util.displayError(e, code, 'CONTROL VARIABLE SCRIPT ERROR');
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
      this.operateVariable(i, this._params[2], value);
    }
    return true;
    break;
  }
  return Yanfly.Core.Game_Interpreter_command122.call(this);
};

// Script - 脚本
Game_Interpreter.prototype.command355 = function() {
  var script = this.currentCommand().parameters[0] + '\n';
  while (this.nextEventCode() === 655) {
    this._index++;
    script += this.currentCommand().parameters[0] + '\n';
  }
  try {
    eval(script);
  } catch (e) {
    Yanfly.Util.displayError(e, script, '脚本调用错误');
    //Yanfly.Util.displayError(e, script, 'SCRIPT CALL ERROR');
  }
  return true;
};

Yanfly.Core.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Core.Game_Interpreter_pluginCommand.call(this, command, args);
    //if (command.match(/^GAINGOLD$/i) || command === '获得金钱') {
    if (command.match(/^GAINGOLD$|^获得金钱$/i)) {
    	if (typeof args[0] === 'number') {
    		$gameParty.gainGold(parseInt(args[0]));
    	} /*else {
    		console.log('插件命令' +'“' + command + ' ' + args[0] + '”错误！\n\n请检查该插件命令格式是否正确！');
    	}*/
    }
    if (command.match(/^LOSEGOLD$|^失去金钱$/i)) {
    	if (typeof args[0] === 'number') {
    		$gameParty.loseGold(parseInt(args[0]));
    	} /*else {
    		console.log('插件命令' +'“' + command + ' ' + args[0] + '”错误！\n\n请检查该插件命令格式是否正确！');
    	}*/
    }
    /*
    if (command === 'GainGold') {
        $gameParty.gainGold(parseInt(args[0]));
    }
    if (command === 'LoseGold') {
        $gameParty.loseGold(parseInt(args[0]));
    }
    */
};

//=============================================================================
// Scene_Base - 场景基础
//=============================================================================

Scene_Base.prototype.clearChildren = function() {
  while (this.children.length > 0) {
    this.removeChild(this.children[0]);
  }
};

if (Yanfly.Param.CollectionClear) {

Yanfly.Core.Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
  Yanfly.Core.Scene_Base_terminate.call(this);
  if (this._bypassFirstClear) return;
  this.clearChildren();
};

Yanfly.Core.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Title_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Map_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Battle_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Options_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Load_terminate = Scene_Load.prototype.terminate;
Scene_Load.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Load_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Gameover_terminate = Scene_Gameover.prototype.terminate;
Scene_Gameover.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Gameover_terminate.call(this);
  this.clearChildren();
};

}; // Yanfly.Param.CollectionClear

//=============================================================================
// Scene_Boot - 引导场景
//=============================================================================

Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else if (Yanfly.Param.GameFontTimer <= 0) {
    return false;
  } else {
    var elapsed = Date.now() - this._startDate;
    if (elapsed >= Yanfly.Param.GameFontTimer) {
      throw new Error('无法加载GameFont');
      //throw new Error('Failed to load GameFont');
    } else {
      return false;
    }
  }
};

//=============================================================================
// Scene_Item 物品场景
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Scene_Item.prototype.update = function() {
  Scene_ItemBase.prototype.update.call(this);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0"

//=============================================================================
// Scene_Title - 标题场景
//=============================================================================

Yanfly.Core.Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
  Yanfly.Core.Scene_Title_start.call(this);
  if (Yanfly.Param.ScaleTitle) this.rescaleTitle();
};

Scene_Title.prototype.rescaleTitle = function() {
  this.rescaleTitleSprite(this._backSprite1);
  this.rescaleTitleSprite(this._backSprite2);
};

Scene_Title.prototype.rescaleTitleSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
    return setTimeout(this.rescaleTitleSprite.bind(this, sprite), 5);
  }
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Scene_Map - 地图场景
//=============================================================================

if (Yanfly.Param.ShowEvTrans) {

Scene_Map.prototype.startEncounterEffect = function() {
  this._encounterEffectDuration = this.encounterEffectSpeed();
};

}; // Yanfly.Param.ShowEvTrans

Yanfly.Core.Scene_Map_snapForBattleBackground =
  Scene_Map.prototype.snapForBattleBackground;
Scene_Map.prototype.snapForBattleBackground = function() {
  if (!Yanfly.Param.ShowEvSnap) this._spriteset.hideCharacters();
  Yanfly.Core.Scene_Map_snapForBattleBackground.call(this);
  if (Yanfly.Param.ShowEvTrans) this._spriteset.showCharacters();
};

//=============================================================================
// Scene_Gameover - Game Over场景
//=============================================================================

Yanfly.Core.Scene_Gameover_start = Scene_Gameover.prototype.start;
Scene_Gameover.prototype.start = function() {
    Yanfly.Core.Scene_Gameover_start.call(this);
    if (Yanfly.Param.ScaleGameOver) this.rescaleBackground();
};

Scene_Gameover.prototype.rescaleBackground = function() {
    this.rescaleImageSprite(this._backSprite);
};

Scene_Gameover.prototype.rescaleImageSprite = function(sprite) {
    if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
      return setTimeout(this.rescaleImageSprite.bind(this, sprite), 5);
    }
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var ratioX = width / sprite.bitmap.width;
    var ratioY = height / sprite.bitmap.height;
    if (ratioX > 1.0) sprite.scale.x = ratioX;
    if (ratioY > 1.0) sprite.scale.y = ratioY;
    this.centerSprite(sprite);
};

Scene_Gameover.prototype.centerSprite = function(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
};

//=============================================================================
// Sprite_Animation - 动画精灵
//=============================================================================

Sprite_Animation.prototype.setupRate = function() {
  this._rate = Yanfly.Param.AnimationRate;
};

//=============================================================================
// Sprite_Battler - 战斗者精灵
//=============================================================================

if (!Yanfly.Param.FlashTarget) {

Yanfly.Core.Sprite_Battler_updateSelectionEffect =
    Sprite_Battler.prototype.updateSelectionEffect;
Sprite_Battler.prototype.updateSelectionEffect = function() {
    if (this._battler.isActor()) {
      Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this);
    } else {
      if (this._battler.isSelected()) this.startEffect('whiten');
    }
};

}; // Yanfly.Param.FlashTarget

//=============================================================================
// Sprite_Actor - 角色精灵
//=============================================================================

if (Yanfly.Param.ReposBattlers) {
  Yanfly.Core.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
  Sprite_Actor.prototype.setActorHome = function(index) {
      Yanfly.Core.Sprite_Actor_setActorHome.call(this, index);
      this._homeX += Graphics.boxWidth - 816;
      this._homeY += Graphics.boxHeight - 624;
  };
};

Sprite_Actor.prototype.retreat = function() {
    this.startMove(1200, 0, 120);
};

//=============================================================================
// Sprite_Enemy - 敌人精灵
//=============================================================================

if (Yanfly.Param.ReposBattlers) {

Yanfly.Core.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    Yanfly.Core.Sprite_Enemy_setBattler.call(this, battler);
    if (!this._enemy._alteredScreenY) {
      this._homeY += Math.floor((Graphics.boxHeight - 624) / 2);
      this._enemy._screenY = this._homeY;
      this._enemy._alteredScreenY = true;
    }
    if ($gameSystem.isSideView()) return;
    if (!this._enemy._alteredScreenX) {
      this._homeX += (Graphics.boxWidth - 816) / 2;
      this._enemy._screenX = this._homeX;
      this._enemy._alteredScreenX = true;
    }
};

}; // Yanfly.Param.ReposBattlers

//=============================================================================
// Sprite_StateIcon - 状态图标
//=============================================================================

Sprite_StateIcon._iconWidth  = Yanfly.Param.IconWidth;
Sprite_StateIcon._iconHeight = Yanfly.Param.IconHeight;

//=============================================================================
// Sprite_Button - 按键
//=============================================================================

Sprite_Button.prototype.isButtonTouched = function() {
    var x = this.canvasToLocalX(TouchInput.x) + (this.anchor.x * this.width);
    var y = this.canvasToLocalY(TouchInput.y) + (this.anchor.y * this.height);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

//=============================================================================
// Sprite_Battleback - 战斗背景
//=============================================================================

function Sprite_Battleback() {
    this.initialize.apply(this, arguments);
}

Sprite_Battleback.prototype = Object.create(Sprite.prototype);
Sprite_Battleback.prototype.constructor = Sprite_Battleback;

Sprite_Battleback.prototype.initialize = function(bitmapName, type) {
  Sprite.prototype.initialize.call(this);
  this._bitmapName = bitmapName;
  this._battlebackType = type;
  this.createBitmap();
};

Sprite_Battleback.prototype.createBitmap = function() {
  if (this._bitmapName === '') {
    this.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
  } else {
    if (this._battlebackType === 1) {
      this.bitmap = ImageManager.loadBattleback1(this._bitmapName);
    } else {
      this.bitmap = ImageManager.loadBattleback2(this._bitmapName);
    }
    this.scaleSprite();
  }
};

Sprite_Battleback.prototype.scaleSprite = function() {
  if (this.bitmap.width <= 0) return setTimeout(this.scaleSprite.bind(this), 5);
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  if (this.bitmap.width < width) {
    this.scale.x = width / this.bitmap.width;
  }
  if (this.bitmap.height < height) {
    this.scale.y = height / this.bitmap.height;
  }
  this.anchor.x = 0.5;
  this.x = Graphics.boxWidth / 2;
  if ($gameSystem.isSideView()) {
    this.anchor.y = 1;
    this.y = Graphics.boxHeight;
  } else {
    this.anchor.y = 0.5;
    this.y = Graphics.boxHeight / 2;
  }
};

//=============================================================================
// Sprite_Character - 角色(NPC等，非Actor)
//=============================================================================

Yanfly.Core.Sprite_Character_updateHalfBodySprites =
  Sprite_Character.prototype.updateHalfBodySprites;
Sprite_Character.prototype.updateHalfBodySprites = function() {
  Yanfly.Core.Sprite_Character_updateHalfBodySprites.call(this);
  if (this._bushDepth > 0) {
    this._upperBody.blendMode = this.blendMode;
    this._lowerBody.blendMode = this.blendMode;
  }
};

//=============================================================================
// Spriteset_Map 地图精灵设定
//=============================================================================

Spriteset_Map.prototype.hideCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.hide();
  }
};

Spriteset_Map.prototype.showCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.show();
  }
};

//=============================================================================
// Spriteset_Battle - 战斗精灵设定
//=============================================================================

if (Yanfly.Param.ScaleBattleback) {

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.2') {

// Rewriting the battlebacks
Spriteset_Battle.prototype.createBattleback = function() {
  this._back1Sprite = new Sprite_Battleback(this.battleback1Name(), 1);
  this._back2Sprite = new Sprite_Battleback(this.battleback2Name(), 2);
  this._battleField.addChild(this._back1Sprite);
  this._battleField.addChild(this._back2Sprite);
};

// No more updateBattleback
Spriteset_Battle.prototype.updateBattleback = function() {
};

} else { // Version 1.3.0 and below
  
Yanfly.Core.Spriteset_Battle_locateBattleback =
    Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
  var sprite1 = this._back1Sprite;
  var sprite2 = this._back2Sprite;
  if (sprite1.bitmap.width <= 0) return;
  if (sprite2.bitmap.width <= 0) return;
  if (this._rescaledBattlebackSprite) return;
  this._rescaledBattlebackSprite = true;
  Yanfly.Core.Spriteset_Battle_locateBattleback.call(this);
  var height = this._battleField.height;
  sprite1.origin.y = sprite1.x + sprite1.bitmap.height - height;
  sprite2.origin.y = sprite1.y + sprite2.bitmap.height - height;
  this.rescaleBattlebacks();
};

Spriteset_Battle.prototype.rescaleBattlebacks = function() {
  this.rescaleBattlebackSprite(this._back1Sprite);
  this.rescaleBattlebackSprite(this._back2Sprite);
};

Spriteset_Battle.prototype.rescaleBattlebackSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) {
    sprite.scale.x = ratioX;
    sprite.anchor.x = 0.5;
    sprite.x = width / 2;
  }
  if (ratioY > 1.0) {
    sprite.scale.y = ratioY;
    sprite.origin.y = 0;
    sprite.y = 0;
  }
};

} // Version 1.3.0 and below

} // Yanfly.Param.ScaleBattleback

//=============================================================================
// Window_Base - 窗口基础
//=============================================================================

Window_Base._iconWidth   = Yanfly.Param.IconWidth;
Window_Base._iconHeight  = Yanfly.Param.IconHeight;
Window_Base._faceWidth   = Yanfly.Param.FaceWidth;
Window_Base._faceHeight  = Yanfly.Param.FaceHeight;

Window_Base.prototype.lineHeight = function() {
  return Yanfly.Param.LineHeight;
};

Window_Base.prototype.drawTextEx = function(text, x, y) {
  if (text) {
    this.resetFontSettings();
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
    return Yanfly.Param.ChineseFont;
    } else if ($gameSystem.isKorean()) {
    return Yanfly.Param.KoreanFont;
    } else {
    return Yanfly.Param.DefaultFont;
    }
};

Window_Base.prototype.standardFontSize = function() {
    return Yanfly.Param.FontSize;
};

Window_Base.prototype.standardPadding = function() {
    return Yanfly.Param.WindowPadding;
};

Window_Base.prototype.textPadding = function() {
    return Yanfly.Param.TextPadding;
};

Window_Base.prototype.standardBackOpacity = function() {
    return Yanfly.Param.WindowOpacity;
};

Window_Base.prototype.normalColor = function() {
  return this.textColor(Yanfly.Param.ColorNormal);
};
Window_Base.prototype.systemColor = function() {
    return this.textColor(Yanfly.Param.ColorSystem);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(Yanfly.Param.ColorCrisis);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(Yanfly.Param.ColorDeath);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(Yanfly.Param.ColorGaugeBack);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge1);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge2);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorMpCost);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerUp);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerDown);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge2);
};

Window_Base.prototype.tpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorTpCost);
};

Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  var color3 = this.gaugeBackColor();
  var fillW = Math.floor(dw * rate).clamp(0, dw);
  var gaugeH = this.gaugeHeight();
  var gaugeY = dy + this.lineHeight() - gaugeH - 2;
  if (Yanfly.Param.GaugeOutline) {
    color3.paintOpacity = this.translucentOpacity();
    this.contents.fillRect(dx, gaugeY - 1, dw, gaugeH, color3);
    fillW = Math.max(fillW - 2, 0);
    gaugeH -= 2;
    dx += 1;
  } else {
    var fillW = Math.floor(dw * rate);
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
  }
  this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.gaugeHeight = function() {
    return Yanfly.Param.GaugeHeight;
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    var dw1 = this.textWidth(TextManager.levelA);
    this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
    var level = Yanfly.Util.toGroup(actor.level);
    var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth(Yanfly.Util.toGroup(max));
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x3, y, valueWidth,
          'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(Yanfly.Util.toGroup(max), x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x1, y, valueWidth,
          'right');
    }
};

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(Yanfly.Util.toGroup(actor.tp), x + width - 64, y, 64,
      'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var xpad = Window_Base._faceWidth + (2 * Yanfly.Param.TextPadding);
    var x2 = x + xpad;
    var width2 = Math.max(180, width - xpad - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    if (Yanfly.Param.MenuTpGauge) {
      this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    }
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) {
    this.resetTextColor();
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

Window_Base.prototype.usingGoldIcon = function(unit) {
    if (unit !== TextManager.currencyUnit) return false;
    return Yanfly.Icon.Gold > 0;
};

//=============================================================================
// Window_Command - 窗口命令
//=============================================================================

/*
Window_Command.prototype.itemTextAlign = function() {
    return Yanfly.Param.TextAlign;
};
*/
Window_Command.prototype.itemTextAlign = function() {
    if (Yanfly.Param.TextAlign == '左对齐') {
        return 'left';
    }
    else if (Yanfly.Param.TextAlign == '右对齐') {
        return 'right';
    }
    else
        return 'center';
};


//=============================================================================
// Window_MenuStatus - 菜单状态
//=============================================================================

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    var fw = Window_Base._faceWidth;
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
    var x = rect.x + xpad;
    if (!Yanfly.Param.MenuTpGauge) {
      var y = Math.floor(rect.y + rect.height / 2 - this.lineHeight() * 1.5);
    } else {
      var y = Math.floor(rect.y);
    }
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

//=============================================================================
// Window_ItemList - 物品列表
//=============================================================================

Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('\u00d70,000');
};

Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
    var numItems = Yanfly.Util.toGroup($gameParty.numItems(item));
    this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

//=============================================================================
// Window_SkillStatus - 技能状态
//=============================================================================

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        if (!Yanfly.Param.MenuTpGauge) {
          var y = h / 2 - this.lineHeight() * 1.5;
        } else {
          var y = 0;
        }
        var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
        var width = w - xpad - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, Window_Base._faceWidth, h);
        this.drawActorSimpleStatus(this._actor, xpad, y, width);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillTpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillMpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    }
};

//=============================================================================
// Window_EquipStatus - 装备状态
//=============================================================================

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, 48, 'right');
};

//=============================================================================
// Window_SkillType - 技能类型
//=============================================================================

Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

//=============================================================================
// Window_ActorCommand - 角色变量
//=============================================================================

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b){return a-b});
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

//=============================================================================
// Window_Status 状态
//=============================================================================

Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      var y2 = y + lineHeight * i;
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.param(paramId), x, y2, 160);
      this.resetTextColor();
      var actorParam = Yanfly.Util.toGroup(this._actor.param(paramId));
      var dw = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i + 2)));
      this.drawText(actorParam, x + 160, y2, dw, 'right');
    }
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    } else {
      value1 = Yanfly.Util.toGroup(value1);
      value2 = Yanfly.Util.toGroup(value2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

//=============================================================================
// Window_ShopBuy - 商店购买窗口
//=============================================================================

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    var itemPrice = Yanfly.Util.toGroup(this.price(item));
    this.drawText(itemPrice, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(true);
    this.resetFontSettings();
};

//=============================================================================
// Window_ShopNumber - 商店数字
//=============================================================================

Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    var itemNumber = Yanfly.Util.toGroup(this._number);
    this.drawText(itemNumber, x, y, width, 'right');
};

//=============================================================================
// Window_NameEdit - 名字编辑
//=============================================================================

Window_NameEdit.prototype.faceWidth = function() {
    return Window_Base._faceWidth;
};

//=============================================================================
// Window_BattleStatus - 战斗状态
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return this.width / 2 + this.standardPadding();
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var minIconArea = Window_Base._iconWidth * 2;
    var nameLength = this.textWidth('0') * 16 + 6;
    var iconWidth = Math.max(rect.width - nameLength, minIconArea);
    var nameWidth = rect.width - iconWidth;
    this.drawActorName(actor, rect.x + 0, rect.y, nameWidth);
    this.drawActorIcons(actor, rect.x + nameWidth, rect.y, iconWidth);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 30;
    var hpW = Math.floor(parseInt(totalArea * 108 / 300));
    var otW = Math.floor(parseInt(totalArea * 96 / 300));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15, rect.y, otW);
    this.drawActorTp(actor, rect.x + hpW + otW + 30, rect.y, otW);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 15;
    var hpW = Math.floor(parseInt(totalArea * 201 / 315));
    var otW = Math.floor(parseInt(totalArea * 114 / 315));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15,  rect.y, otW);
};

//=============================================================================
// Window_BattleLog - 战斗日志
//=============================================================================

Window_BattleLog.prototype.showNormalAnimation = function(targets,
animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
      if (animation.position === 3) {
        targets.forEach(function(target) {
            target.startAnimation(animationId, mirror, 0);
        });
      } else {
          var delay = this.animationBaseDelay();
          var nextDelay = this.animationNextDelay();
          targets.forEach(function(target) {
              target.startAnimation(animationId, mirror, delay);
              delay += nextDelay;
          });
      }
    }
};

//=============================================================================
// New Function - 新功能/函数
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0') {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal === 'string') return inVal;
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

} else {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal !== 'string') { inVal = String(inVal); }
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};


} // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0'



Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// 文件末
//=============================================================================
