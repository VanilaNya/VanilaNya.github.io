//=============================================================================
// Yanfly Engine Plugins - Auto Switch
// YEP_AutoSwitch.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_AutoSwitches = true;

var Yanfly = Yanfly || {};
Yanfly.AutoSwitch = Yanfly.AutoSwitch || {};
Yanfly.AutoSwitch.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc 【YEP❀实用类】测试开关系统|YEP_AutoSwitch.js
 * @author Yanfly Engine Plugins 
 *
 * @param Battle Switch
 * @text 战斗开关
 * @type switch
 * @desc 当玩家在战斗中时，此开关将始终打开
 * @default 0
 *
 * @param Battle Test Switch
 * @text 数据库战斗开关
 * @type switch
 * @desc 此开关仅在通过访问战斗时打开
 * 数据库的作战测试选项。
 * @default 0
 *
 *
 * @param Debug Switch
 * @text ♥调试开关
 * @type switch
 * @desc 在测试游戏和战斗期间，此开关将始终打开
 * 测试，否则始终关闭。
 * @default 0
 *
 * @param Mobile Switch
 * @text 手机设备开关
 * @type switch
 * @desc 在任何移动设备上播放时，此开关将始终打开
 * 设备，否则始终关闭。
 * @default 0
 *
 * @param Mobile Chrome Switch
 * @text 谷歌浏览器开关
 * @type switch
 * @desc 该开关将打开或关闭，具体取决于是否播放
 * 移动Chrome浏览器。
 * @default 0
 *
 * @param Mobile Safari Switch
 * @text 苹果浏览器开关
 * @type switch
 * @desc 该开关将打开或关闭，具体取决于是否播放
 * 移动Safari浏览器。
 * @default 0
 *
 * @param Non-Local Switch
 * @text 手机或浏览器开关
 * @type switch
 * @desc 当在手机或
 * 浏览器，否则始终关闭。
 * @default 0
 *
 * @help
 * ============================================================================
 *  ▼ 介绍 
 * ============================================================================
 *  此插件允许您设置始终启用或始终基于各种条件的禁用。
 *  通过游戏设置，确定游戏是否通过调试模式运行或
 *  在特定类型的浏览器上启用。
 * ============================================================================
 *  ▼ 版本：v1.01
 * ============================================================================
 *
 *  Version 1.01:
 *  - 为RPG Maker MV 1.5.0版更新
 *
 *  Version 1.00:
 *  - 插件已完成！
 * ============================================================================
 *  YEP官网：http://yanfly.moe/yep
 *  插件作者：Yanfly
 *  汉化插件：云书 
 *  使用条款：除非另有说明，否则 Yanfly 
 *  制作的任何原始材料均可免费用于免费和商业 RPG Maker 游戏。
 *  要求你在你的游戏致谢名单中提供“Yanfly”或“Yanfly Engine”。
 *  使用条款：http://www.yanfly.moe/wiki/Category:Yanfly_Engine_Plugins#Terms_of_Use
 *  声明：仅用于汉化参考，如发布游戏到官网下载原版插件。
 */
//=============================================================================

//=============================================================================
// 参数变量
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_AutoSwitches');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.AutoSwitches = {
  battle: Number(Yanfly.Parameters['Battle Switch']),
  btest: Number(Yanfly.Parameters['Battle Test Switch']),
  dash: Number(Yanfly.Parameters['Dash Switch']),
  debug: Number(Yanfly.Parameters['Debug Switch']),
  mobile: Number(Yanfly.Parameters['Mobile Switch']),
  mobileChrome: Number(Yanfly.Parameters['Mobile Chrome Switch']),
  mobileSafari: Number(Yanfly.Parameters['Mobile Safari Switch']),
  nonLocal: Number(Yanfly.Parameters['Non-Local Switch'])
};

//=============================================================================
// Utils
//=============================================================================

Utils.isMobileChrome = function() {
    var agent = navigator.userAgent;
    return agent.match(/Chrome/);
};

//=============================================================================
// Game_Switches
//=============================================================================

Yanfly.AutoSwitch.Game_Switches_value = Game_Switches.prototype.value;
Game_Switches.prototype.value = function(switchId) {
  if (switchId === Yanfly.Param.AutoSwitches.battle) {
    return this.battleAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.btest) {
    return this.dashAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.dash) {
    return this.dashAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.debug) {
    return this.debugAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.mobile) {
    return this.mobileAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.mobileChrome) {
    return this.mobileChromeAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.mobileSafari) {
    return this.mobileSafariAutoSwitch();
  } else if (switchId === Yanfly.Param.AutoSwitches.nonLocal) {
    return this.nonLocalAutoSwitch();
  } else {
    return Yanfly.AutoSwitch.Game_Switches_value.call(this, switchId);
  }
};

Game_Switches.prototype.battleAutoSwitch = function() {
  return $gameParty.inBattle();
};

Game_Switches.prototype.battleTestAutoSwitch = function() {
  return BattleManager.isBattleTest();
};

Game_Switches.prototype.dashAutoSwitch = function() {
  return $gamePlayer.isDashing();
};

Game_Switches.prototype.debugAutoSwitch = function() {
  return Utils.isNwjs() && Utils.isOptionValid('test');
};

Game_Switches.prototype.mobileAutoSwitch = function() {
  return Utils.isMobileDevice();
};

Game_Switches.prototype.mobileChromeAutoSwitch = function() {
  return Utils.isMobileChrome();
};

Game_Switches.prototype.mobileSafariAutoSwitch = function() {
  return Utils.isMobileSafari();
};

Game_Switches.prototype.nonLocalAutoSwitch = function() {
  return !Utils.isNwjs();
};

//=============================================================================
// End of File
//=============================================================================
