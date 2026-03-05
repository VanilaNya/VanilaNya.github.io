//=============================================================================
// Yanfly Engine Plugins - Dash Toggle
// YEP_DashToggle.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_DashToggle = true;

var Yanfly = Yanfly || {};
Yanfly.Dash = Yanfly.Dash || {};
Yanfly.Dash.version = 1.03

//=============================================================================
 /*:
 * @plugindesc 【YEP❀实用类】跑步禁用系统|YEP_DashToggle.js
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * ▼ 介绍
 * ============================================================================
 * 打开和关闭快速切换奔跑功能，可以把禁用奔跑附加在武器或者职业等方面。
 * ============================================================================
 * ▼ 备注标签
 * ============================================================================
 *
 * 您可以使用这些注释标签添加禁用，如果领先者
 * 有一不能冲特质，那么就不能冲
 *
 * 角色、职业、武器、盔甲和状态备注：
 *
 *   <Disable Dashing>
 * 如果领先具有此备注标签的特征，则玩家
 * 当那个角色处于领先地位时，不能冲刺。
 *
 * ============================================================================
 * ▼ 插件命令
 * ============================================================================
 *
 * 您可以使用这些插件命令来启用或禁用游戏中的冲刺！
 *
 * 插件命令
 *
 *   EnableDashing
 *   -使玩家能够冲刺。然而，这不会
 *   在地图中的优先级完全禁用了快速移动。
 *
 *   DisableDashing
 *   -禁止玩家冲刺
 *
 *   ToggleDashing
 *   -这将启用/禁用刷新。这在地图中不占优先地位
 *   这完全禁止了短跑。
 *
 * ============================================================================
 * ▼ 更新
 * ============================================================================
 *
 * Version 1.03:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.02:
 * - Added a failsafe to prevent crashes if there are no members in the party.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.00:
 * - Finished Plugin!
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
// DataManager
//=============================================================================

Yanfly.Dash.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Dash.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_DashToggle) {
    this.processDashNotetags1($dataActors);
    this.processDashNotetags1($dataClasses);
    this.processDashNotetags1($dataWeapons);
    this.processDashNotetags1($dataArmors);
    this.processDashNotetags1($dataStates);
    Yanfly._loaded_YEP_DashToggle = true;
  }
  return true;
};

DataManager.processDashNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.disableDashing = false;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:DISABLE DASHING|DISABLE DASH)>/i)) {
        obj.disableDashing = true;
      }
    }
  }
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Dash.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.Dash.Game_System_initialize.call(this);
    this.initDashToggle();
};

Game_System.prototype.initDashToggle = function() {
    this._disableDashing = false;
};

Game_System.prototype.isDashDisabled = function() {
    if (this._disableDashing === undefined) this.initDashToggle();
    return this._disableDashing;
};

Game_System.prototype.setDashDisabled = function(value) {
    if (this._disableDashing === undefined) this.initDashToggle();
    this._disableDashing = value;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Dash.Game_Actor_refresh = Game_Actor.prototype.refresh;
Game_Actor.prototype.refresh = function() {
    this._disableDashing = undefined;
    Yanfly.Dash.Game_Actor_refresh.call(this);
};

Game_Actor.prototype.isDashDisabled = function() {
    if (this._disableDashing !== undefined) return this._disableDashing;
    if (this.actor().disableDashing) {
      this._disableDashing = true;
      return this._disableDashing;
    }
    if (this.currentClass().disableDashing) {
      this._disableDashing = true;
      return this._disableDashing;
    }
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.disableDashing) {
        this._disableDashing = true;
        return this._disableDashing;
      }
    }
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.disableDashing) {
        this._disableDashing = true;
        return this._disableDashing;
      }
    }
    this._disableDashing = false;
    return this._disableDashing;
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.Dash.Game_Map_isDashDisabled = Game_Map.prototype.isDashDisabled;
Game_Map.prototype.isDashDisabled = function() {
    if ($gameSystem.isDashDisabled()) return true;
    if ($gameParty.members()[0]) {
      if ($gameParty.members()[0].isDashDisabled()) return true;
    }
    return Yanfly.Dash.Game_Map_isDashDisabled.call(this);
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Dash.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.Dash.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'EnableDashing') {
    $gameSystem.setDashDisabled(false);
  } else if (command === 'DisableDashing') {
    $gameSystem.setDashDisabled(true);
  } else if (command === 'ToggleDashing') {
    $gameSystem.setDashDisabled(!$gameSystem.isDashDisabled());
  }
};

//=============================================================================
// End of File
//=============================================================================
