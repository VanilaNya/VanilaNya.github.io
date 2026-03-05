//=============================================================================
// Yanfly Engine Plugins - Instant Cast
// YEP_InstantCast.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_InstantCast = true;

var Yanfly = Yanfly || {};
Yanfly.Instant = Yanfly.Instant || {};
Yanfly.Instant.version = 1.12;

//=============================================================================
 /*:
 * @plugindesc YEP即时施法系统[v1.12]
 * @author Yanfly Engine Plugins
 *
 * @param Instant Icon
 * @text 即时图标
 * @type number
 * @min 0
 * @desc 用此图标叠加标记即时施法技能
 如果不希望使用图标，请设为 0
 * @default 0
 *
 * @help
 * ============================================================================
 * 插件描述
 * ============================================================================
 *
   允许技能 / 物品在战斗菜单中被选中后立即施法
   当一个行动具有即时施法属性时，该行动会立即被使用，无需等待回合开始
   只有当即时施法是第一个被选中的行动时才会生效，后续行动不会
 *
 * ============================================================================
 * 备注标签
 * ============================================================================
 *
 * 技能和物品备注标签:
 *   <Instant>
 *   <Instant Cast>
 
这两个备注标签功能相同  
当角色将此行动选为第一个行动时，会立即施法
当敌人使用时，这将使敌人进行后续行动而不消耗敌人的回合
 *
 
 * 角色、职业、敌人、武器、 护甲 和状态备注标签：
<Instant Skill: x>
<Instant Skill: x, x, x>
<Instant Skill: x to y>

这会使技能 x 对角色、职业、敌人，或在装备武器或护甲时，
或在应用状态时具有即时施法属性
如果使用 'x to y'，它将应用于从 x 到 y 的所有技能
 *
 *   <Instant Item: x>
 *   <Instant Item: x, x, x>
 *   <Instant Item: x to y>
 
这会使物品 x 对角色、职业、敌人，或在装备武器或护甲时
或在应用状态时具有即时施法属性。
如果使用 'x to y'，它将应用于从 x 到 y 的所有物品
 *
 *   <Cancel Instant Skill: x>
 *   <Cancel Instant Skill: x, x, x>
 *   <Cancel Instant Skill: x to y>
 
这会使技能 x 无法被即时施法。如果角色、职业、敌人、装备或
状态具有此备注标签，它将优先于所有其他可能影响即时施法的属性
如果使用 'x to y'，则它将应用于从 x 到 y 的所有技能
 *
 *   <Cancel Instant Item: x>
 *   <Cancel Instant Item: x, x, x>
 *   <Cancel Instant item: x to y>
 
这会使物品 x 无法被即时施法。如果角色、职业、敌人、装备或状态
具有此备注标签，它将优先于所有其他可能影响即时施法的属性
如果使用 'x to y'，则它将应用于从 x 到 y 的所有物品
 *
 * ============================================================================
 * 疯狂模式 - 条件即时施法
 * ============================================================================
 *
 * 如果你希望一个行动是否为即时施法是动态的，可以使用以下备注标签设置：
 *
 * 技能和物品备注标签：
<Instant Eval>
code
</Instant Eval>

代码可以是任何内容。但是，你需要定义变量 'instant' 为 true 或 false。'instant = true'
 表示该行动将被即时施法，而 'instant = false' 表示该行动不会
 如果变量 'instant' 没有结论，它将像正常情况一样通过其他修饰符来确定即时属性

注意：这将优先于 <Cancel Instant> 备注标签
这是唯一的例外，因为它可以以这种方式起到自己的 <Cancel Instant> 的作用

 * 示例：
<Instant Eval>
if (user.atk >= 300) instant = true;
</Instant Eval>
 *
在上面的示例中，如果用户的 攻击力 值等于或大于 300
则具有此备注标签的行动将被视为具有即时施法属性
 *
// 1. 基于生命值（HP）判定
<Instant Eval>
if (user.hp <= user.mhp * 0.5) instant = true;
</Instant Eval>
// 当前HP小于等于最大血量的50%时即时施法


// 2. 基于魔力值（MP）判定
<Instant Eval>
if (user.mp >= 50) instant = true;
</Instant Eval>
// 当前MP大于等于50时即时施法



// 3. 基于防御力（DEF）判定
<Instant Eval>
if (user.def >= 200) instant = true;
</Instant Eval>
// 防御力大于等于200时即时施法

// 4. 基于魔法防御（MDF）判定
<Instant Eval>
if (user.mdf >= 150) instant = true;
</Instant Eval>
// 魔法防御大于等于150时即时施法

// 5. 基于敏捷度（AGI）判定
<Instant Eval>
if (user.agi >= 180) instant = true;
</Instant Eval>
// 敏捷度大于等于180时即时施法

// 6. 基于幸运值（LUK）判定
<Instant Eval>
if (user.luk >= 100) instant = true;
</Instant Eval>
// 幸运值大于等于100时即时施法

// 7. 基于属性组合判定
<Instant Eval>
if (user.atk >= 250 && user.agi >= 150) instant = true;
</Instant Eval>
// 攻击力>=250且敏捷度>=150时即时施法

// 8. 基于当前状态判定（结合状态ID）
<Instant Eval>
if (user.isStateAffected(5)) instant = true;
</Instant Eval>
// 拥有状态ID为5的 buff 时即时施法

// 9. 基于等级（LEVEL）判定
<Instant Eval>
if (user.level >= 50) instant = true;
</Instant Eval>
// 角色等级大于等于50级时即时施法

// 10. 基于剩余TP（技能点，部分系统）判定
<Instant Eval>
if (user.tp >= 80) instant = true;
</Instant Eval>
// TP大于等于80时即时施法（需插件支持TP系统）

 
 
 
 
 * ============================================================================
 * 即时施法优先级设置
 * ============================================================================
 *
由于现在有很多属性可以决定一个技能或物品是否具有即时施法属性，以下是优先级顺序：
 *
即时评估备注标签
如果技能 / 物品的 <Instant Eval> 备注标签指定 'instant = true' 或 'instant = false'，则该设置将优先于其他所有设置

取消即时施法备注标签
如果有属性会取消角色、职业、敌人、武器、 护甲 或状态上的即时施法，这将优先于除即时评估备注标签所规定的任何内容之外的所有内容

授予即时技能 / 物品的备注标签
角色、职业、敌人、武器、 护甲 和状态的备注标签授予技能和物品即时施法属性，其优先级高于除列表中上面所示的之外的所有内容

固有的即时施法属性
如果未使用或应用上述任何内容，则技能或物品是否具有即时施法属性将由其备注框中是否有 <Instant Cast> 来决定
 *
 * ============================================================================
 * 更新日志
 * ============================================================================
 *
版本 1.12：
由于更新到 MV 1.6.1，当在脚本调用或自定义疯狂模式代码段中插入错误代码时，绕过 isDevToolsOpen () 错误。
版本 1.11：
为 RPG Maker MV 版本 1.5.0 更新。
版本 1.10：
为未来的插件进行兼容性更新。
版本 1.09：
添加了疯狂模式故障保护。
版本 1.08：
为 RPG Maker MV 版本 1.1.0 更新。
版本 1.07b：
优化以更好地适应基于滴答的战斗系统。
修复了如果用户使用即时行动使自己狂暴，用户仍然能够输入行动的错误。
为那些使用独立物品然后稍后添加此插件的人添加了故障保护。效果不会追溯应用。
版本 1.06c：
修复了即时施法技能使对手战斗者强制行动错误结束的错误。感谢 DoubleX 提供的修复。
在使用即时行动时添加了更一致的窗口刷新。
即时图标现在在战斗外显示。
版本 1.05：
添加了一个故障保护，以保持一个行动一旦开始使用，它将保持其当前的即时或非即时状态，直到行动完成，以防止技能在行动中途从即时变为非即时或反之的不一致性。
版本 1.04：
修复了如果在跳转到标签的公共事件后使用即时行动会导致游戏锁定的错误。
版本 1.03：
修复了强制行动锁定战斗的错误。
版本 1.02：
修复了强制行动后的公共事件导致中断的错误。
版本 1.01：
与 ChangeWeaponOnBattle.js 的兼容性更新。
版本 1.00：
完成插件！
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_InstantCast');
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Icon.Instant = Number(Yanfly.Parameters['Instant Icon']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Instant.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Instant.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_InstantCast) {
  	DataManager.processInstantNotetags1($dataSkills);
    DataManager.processInstantNotetags1($dataItems);
    DataManager.processInstantNotetags2($dataActors);
    DataManager.processInstantNotetags2($dataClasses);
    DataManager.processInstantNotetags2($dataEnemies);
    DataManager.processInstantNotetags2($dataWeapons);
    DataManager.processInstantNotetags2($dataArmors);
    DataManager.processInstantNotetags2($dataStates);
    Yanfly._loaded_YEP_InstantCast = true;
  }
	return true;
};

DataManager.processInstantNotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.instantCast = false;
    obj.instantEval = '';
    var evalMode = 'none';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:INSTANT|instant cast)>/i)) {
				obj.instantCast = true;
			} else if (line.match(/<(?:INSTANT EVAL)>/i)) {
        evalMode = 'instant';
      } else if (line.match(/<\/(?:INSTANT EVAL)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'instant') {
        obj.instantEval = obj.instantEval + line + '\n';
      }
		}
	}
};

DataManager.processInstantNotetags2 = function(group) {
  var note1 = /<(?:INSTANT SKILL):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:INSTANT SKILL):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note3 = /<(?:INSTANT ITEM):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note4 = /<(?:INSTANT ITEM):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note5 = /<(?:CANCEL INSTANT SKILL):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note6 = /<(?:CANCEL INSTANT SKILL):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  var note7 = /<(?:CANCEL INSTANT ITEM):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note8 = /<(?:CANCEL INSTANT ITEM):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.instantSkill = [];
    obj.instantItem = [];
    obj.cancelInstantSkill = [];
    obj.cancelInstantItem = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.instantSkill = obj.instantSkill.concat(array);
			} else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.instantSkill = obj.instantSkill.concat(range);
			} else if (line.match(note3)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.instantItem = obj.instantItem.concat(array);
			} else if (line.match(note4)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.instantItem = obj.instantItem.concat(range);
			} else if (line.match(note5)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.cancelInstantSkill = obj.cancelInstantSkill.concat(array);
			} else if (line.match(note6)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.cancelInstantSkill = obj.cancelInstantSkill.concat(range);
			} else if (line.match(note7)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.cancelInstantItem = obj.cancelInstantItem.concat(array);
			} else if (line.match(note8)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.cancelInstantItem = obj.cancelInstantItem.concat(range);
			}
		}
	}
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Instant.BattleManager_isInputting = BattleManager.isInputting;
BattleManager.isInputting = function() {
    if (this._instantCasting) return false;
    return Yanfly.Instant.BattleManager_isInputting.call(this);
};

BattleManager.performInstantCast = function() {
    if (Imported.YEP_BattleEngineCore) {
      this.stopAllSelection();
      this.resetSelection();
    }
    this._subject = BattleManager.actor();
    this._instantCasting = true;
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._ignoreTurnOrderFirstIndex = true;
    }
    this.startAction();
};

Yanfly.Instant.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    this._startedInstantCasting = true;
    Yanfly.Instant.BattleManager_startAction.call(this);
};

Yanfly.Instant.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
    if (this._instantCasting) {
      this.endActorInstantCast();
    } else {
      this.endEnemyInstantCastAction();
      Yanfly.Instant.BattleManager_endAction.call(this);
    }
    this._startedInstantCasting = false;
};

BattleManager.endActorInstantCast = function() {
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._ignoreTurnOrderFirstIndex = false;
    }
    var user = this._subject;
    if (Imported.YEP_BattleEngineCore) {
      if (this._processingForcedAction) this._phase = this._preForcePhase;
      this._processingForcedAction = false;
    }
    if (this.updateEventMain()) return;
    Yanfly.Instant.BattleManager_endAction.call(this);
    this._subject = user;
    this._instantCasting = undefined;
    user.makeActions();
    if (this.checkBattleEnd()) return;
    this._phase = 'input';
    if (user.canMove() && user.canInput()) {
      user.endInstantCast();
    } else {
      user.makeActions();
      this.selectNextCommand();
    }
    this.refreshStatus();
    if (Imported.YEP_BattleEngineCore && BattleManager.isDTB()) {
      this._subject = undefined;
    }
};

BattleManager.endEnemyInstantCastAction = function() {
    var battler = this._subject;
    if (!battler) return;
    if (battler.isActor()) return;
    var action = this._action;
    if (!action) return;
    var item = action.item();
    if (!item) return;
    if (battler.isInstantCast(item)) this.addInstantCastAction(battler);
};

BattleManager.addInstantCastAction = function(battler) {
    if (Imported.YEP_X_BattleSysATB && this.isATB()) return;
    if (Imported.YEP_X_BattleSysCTB && this.isCTB()) return;
    var action = new Game_Action(battler);
    battler._actions.push(action);
    battler.makeActions();
    this.makeActionOrders();
};

if (Imported.YEP_BattleEngineCore) {

Yanfly.Instant.BattleManager_savePreForceActionSettings =
    BattleManager.savePreForceActionSettings;
BattleManager.savePreForceActionSettings = function() {
    Yanfly.Instant.BattleManager_savePreForceActionSettings.call(this);
    this._instantCasting = false;
};

Yanfly.Instant.BattleManager_setPreForceActionSettings =
BattleManager.setPreForceActionSettings;
BattleManager.setPreForceActionSettings = function() {
    var settings =
      Yanfly.Instant.BattleManager_setPreForceActionSettings.call(this);
    settings['instantCasting'] = this._instantCasting;
    return settings;
};

Yanfly.Instant.BattleManager_resetPreForceActionSettings =
BattleManager.resetPreForceActionSettings;
BattleManager.resetPreForceActionSettings = function(settings) {
    Yanfly.Instant.BattleManager_resetPreForceActionSettings.call(this,
      settings);
    this._instantCasting = settings['instantCasting'];
};

} // Imported.YEP_BattleEngineCore

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.isInstantCast = function(item) {
    if (!item) return false;
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (this.checkInstantCast(state, item)) return true;
    }
    return item.instantCast;
};

Game_Battler.prototype.performInstantEval = function(item) {
    var instant = undefined;
    var skill = item;
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = item.instantEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CUSTOM INSTANT CAST ERROR');
    }
    return instant;
};

Game_Battler.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (this.checkCancelInstantCast(state, item)) return true;
    }
    return false;
};

Game_Battler.prototype.checkInstantCast = function(obj, item) {
    var id = item.id;
    if (!obj) return false;
    if (DataManager.isSkill(item)) {
      if (!obj.instantSkill) return false;
      if (obj.instantSkill.contains(id)) return true;
    } else if (DataManager.isItem(item)) {
      if (!obj.instantItem) return false;
      if (obj.instantItem.contains(id)) return true;
    }
    return false;
};

Game_Battler.prototype.checkCancelInstantCast = function(obj, item) {
    var id = item.id;
    if (!obj) return false;
    if (DataManager.isSkill(item)) {
      if (!obj.cancelInstantSkill) return false;
      if (obj.cancelInstantSkill.contains(id)) return true;
    } else if (DataManager.isItem(item)) {
      if (!obj.cancelInstantItem) return false;
      if (obj.cancelInstantItem.contains(id)) return true;
    }
    return false;
};

Yanfly.Instant.Game_Battler_onRestrict = Game_Battler.prototype.onRestrict;
Game_Battler.prototype.onRestrict = function() {
    var instant = false;
    if ($gameParty.inBattle()) {
      if (BattleManager._subject === this && BattleManager._instantCasting) {
        instant = true;
        var currentAction = this.currentAction();
      }
    }
    Yanfly.Instant.Game_Battler_onRestrict.call(this);
    if (instant) {
      this.setAction(0, currentAction);
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.endInstantCast = function() {
    if (Imported.YEP_BattleEngineCore) {
      this.spriteStepForward();
      $gameParty.requestMotionRefresh();
      this.requestMotion('walk');
    } else {
      this.setActionState('inputting');
    }
};

Game_Actor.prototype.isInstantCast = function(item) {
    if (!item) return false;
    if ($gameParty.inBattle() && BattleManager._startedInstantCasting) {
      return BattleManager._instantCasting;
    }
    if (item.instantEval.length > 0) {
      var outcome = this.performInstantEval(item);
      if (outcome === true || outcome === false) return outcome;
    }
    if (this.isCancelInstantCast(item)) return false;
    if (this.checkInstantCast(this.actor(), item)) return true;
    if (this.checkInstantCast(this.currentClass(), item)) return true;
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (this.checkInstantCast(equip, item)) return true;
    }
    return Game_Battler.prototype.isInstantCast.call(this, item);
};

Game_Actor.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    if (this.checkCancelInstantCast(this.actor(), item)) return true;
    if (this.checkCancelInstantCast(this.currentClass(), item)) return true;
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (this.checkCancelInstantCast(equip, item)) return true;
    }
    return Game_Battler.prototype.isCancelInstantCast.call(this, item);
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.isInstantCast = function(item) {
    if (!item) return false;
    if (item.instantEval.length > 0) {
      var outcome = this.performInstantEval(item);
      if (outcome === true || outcome === false) return outcome;
    }
    if (this.isCancelInstantCast(item)) return false;
    if (this.checkInstantCast(this.enemy(), item)) return true;
    return Game_Battler.prototype.isInstantCast.call(this, item);
};

Game_Enemy.prototype.isCancelInstantCast = function(item) {
    if (!item) return false;
    if (this.checkCancelInstantCast(this.enemy(), item)) return true;
    return Game_Battler.prototype.isCancelInstantCast.call(this, item);
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.Instant.Scene_Battle_selectNextCommand =
    Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() {
    if (this.isInstantCast()) {
      this.instantCastStart();
      BattleManager.performInstantCast();
    } else {
      Yanfly.Instant.Scene_Battle_selectNextCommand.call(this);
    }
};

Scene_Battle.prototype.instantCastStart = function() {
    this._enemyWindow.hide();
    this._actorWindow.hide();
    this._skillWindow.hide();
    this._itemWindow.hide();
};

Scene_Battle.prototype.isInstantCast = function() {
    var actor = BattleManager.actor();
    if (!actor) return false;
    var action = BattleManager.inputtingAction();
    if (!action) return false;
    if (action !== actor.action(0)) return false;
    var item = action.item();
    return actor.isInstantCast(item);
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.Instant.Window_Base_drawItemName =
    Window_Base.prototype.drawItemName;
Window_Base.prototype.drawItemName = function(item, wx, wy, ww) {
    Yanfly.Instant.Window_Base_drawItemName.call(this, item, wx, wy, ww)
    ww = ww || 312;
    this.drawInstantIcon(item, wx, wy, ww);
};

Window_Base.prototype.drawInstantIcon = function(item, wx, wy, ww) {
    var icon = Yanfly.Icon.Instant;
    if (icon <= 0) return;
    if (!item) return;
    if (!DataManager.isItem(item) && !DataManager.isSkill(item)) return;
    var actor = this._actor;
    if (!actor) return;
    if (!actor.isInstantCast(item)) return;
    this.drawIcon(icon, wx + 2, wy + 2);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

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
// End of File
//=============================================================================
