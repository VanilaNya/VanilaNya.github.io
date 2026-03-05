//=============================================================================
// MrTS_DifferentHpMpTpColorsAndNames.js
//=============================================================================

var Imported = Imported || {};
Imported.MrTS_DifferentHpMpTpColorsAndNames = true;

/*:
* @plugindesc MrTS不同HpMpTp颜色与名称[v1.1]
* @author Mr. Trivel
* 
* @help 

  更改 HP、MP 和 TP 的颜色与名称

* --------------------------------------------------------------------------------
* 使用条款
* --------------------------------------------------------------------------------
* 不要移除插件头部信息或声称此插件由你编写
  在项目中使用此插件时，请注明作者 Mr. Trivel
  商业和非商业项目均可免费使用
* --------------------------------------------------------------------------------
* 版本 1.1
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* 角色 / 职业标签
* --------------------------------------------------------------------------------
* 要为角色 / 职业设置颜色，请在备注字段中使用以下标签（颜色使用十六进制值）
* （如果职业和角色有相同标签，职业标签优先）：
<HPName: 名称> - 设置 HP 的显示名称
<MPName: 名称> - 设置 MP 的显示名称
<TPName: 名称> - 设置 TP 的显示名称
<HPColor: #颜色1, #颜色2> - 设置 HP 计量条的渐变色
<MPColor: #颜色1, #颜色2> - 设置 MP 计量条的渐变色
<TPColor: #颜色1, #颜色2> - 设置 TP 计量条的渐变色

示例:
<HPName: 生命值>
<MPName: 魔法值>
<TPName: 怒气值>
<HPColor: #23b94d, #60e021>
<MPColor: #D02E2E, #ED5757>
<TPColor: #e29a00, #f8f4b2>


经典风格（适合传统 RPG）
HP（生命感）：#e74c3c, #c0392b（深红到暗红）
MP（魔力感）：#3498db, #2980b9（亮蓝到深蓝）
TP（能量感）：#f39c12, #d35400（亮橙到深橙）
柔和风格（适合治愈系游戏）
HP：#2ecc71, #27ae60（亮绿到深绿）
MP：#9b59b6, #8e44ad（亮紫到深紫）
TP：#1abc9c, #16a085（青绿到深青）
鲜明风格（适合动作类游戏）
HP：#ff5252, #ff1744（亮红到艳红）
MP：#00b8d4, #0097a7（亮青到深青）
TP：#ffeb3b, #fdd835（亮黄到深黄）
暗黑风格（适合哥特 / 硬核游戏）
HP：#880e4f, #4a148c（深红紫到深紫）
MP：#212121, #424242（近黑到深灰）
TP：#ff6e40, #dd2c00（橙红到猩红）
奇幻风格（适合魔法主题）
HP：#7cb342, #558b2f（橄榄绿到深绿）
MP：#ba68c8, #9c27b0（粉紫到深紫）
TP：#03a9f4, #0288d1（亮天蓝到深海蓝）



* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* 版本
* --------------------------------------------------------------------------------
* 1.1 - Moved color setting up to Database.
*     - Added gauge colors to Classes.
* 1.0 - Release
*/

(function() {
	Window_Base.prototype.setHpGaugeColors = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var aData = actor.actor();
		var cData = actor.currentClass();
		var colors = null;

		if (cData.meta.HPColor)
			colors = cData.meta.HPColor.split(',');
		else if (aData.meta.HPColor)
			colors = aData.meta.HPColor.split(',');
		else
			colors = [this.textColor(20), this.textColor(21)];

		for (var i = 0; i < colors.length; i++) {
			if (colors[i][0] === ' ') colors[i] = colors[i].slice(1);
		}
		
		this._hpGaugeColors = colors;
	};

	Window_Base.prototype.setMpGaugeColors = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var aData = actor.actor();
		var cData = actor.currentClass();
		var colors = null;

		if (cData.meta.MPColor)
			colors = cData.meta.MPColor.split(',');
		else if (aData.meta.MPColor)
			colors = aData.meta.MPColor.split(',');
		else
			colors = [this.textColor(22), this.textColor(23)];

		for (var i = 0; i < colors.length; i++) {
			if (colors[i][0] === ' ') colors[i] = colors[i].slice(1);
		}
		
		this._mpGaugeColors = colors;
	};

	Window_Base.prototype.setTpGaugeColors = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var aData = actor.actor();
		var cData = actor.currentClass();
		var colors = null;

		if (cData.meta.TPColor)
			colors = cData.meta.TPColor.split(',');
		else if (aData.meta.TPColor)
			colors = aData.meta.TPColor.split(',');
		else
			colors = [this.textColor(28), this.textColor(29)];

		for (var i = 0; i < colors.length; i++) {
			if (colors[i][0] === ' ') colors[i] = colors[i].slice(1);
		}
		
		this._tpGaugeColors = colors;
	};

	var _WindowBase_hpGaugeColor1 = Window_Base.prototype.hpGaugeColor1;
	Window_Base.prototype.hpGaugeColor1 = function() {
		if (this._hpGaugeColors) return this._hpGaugeColors[0];
		return _WindowBase_hpGaugeColor1.call(this);
	};

	var _WindowBase_hpGaugeColor2 = Window_Base.prototype.hpGaugeColor2;
	Window_Base.prototype.hpGaugeColor2 = function() {
		if (this._hpGaugeColors) return this._hpGaugeColors[1];
		return _WindowBase_hpGaugeColor2.call(this);
	};

	var _WindowBase_mpGaugeColor1 = Window_Base.prototype.mpGaugeColor1;
	Window_Base.prototype.mpGaugeColor1 = function() {
		if (this._mpGaugeColors) return this._mpGaugeColors[0];
		return _WindowBase_mpGaugeColor1.call(this);
	};

	var _WindowBase_mpGaugeColor2 = Window_Base.prototype.mpGaugeColor2;
	Window_Base.prototype.mpGaugeColor2 = function() {
		if (this._mpGaugeColors) return this._mpGaugeColors[1];
		return _WindowBase_mpGaugeColor2.call(this);
	};

	var _WindowBase_tpGaugeColor1 = Window_Base.prototype.tpGaugeColor1;
	Window_Base.prototype.tpGaugeColor1 = function() {
		if (this._tpGaugeColors) return this._tpGaugeColors[0];
		return _WindowBase_tpGaugeColor1.call(this);
	};

	var _WindowBase_tpGaugeColor2 = Window_Base.prototype.tpGaugeColor2;
	Window_Base.prototype.tpGaugeColor2 = function() {
		if (this._tpGaugeColors) return this._tpGaugeColors[1];
		return _WindowBase_tpGaugeColor2.call(this);
	};

	var _WindowBase_drawActorHp = Window_Base.prototype.drawActorHp;
	Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
		this.setHpGaugeColors(actor.actorId());
		$gameSystem.setActorHpName(actor.actorId());
		_WindowBase_drawActorHp.call(this, actor, x, y, width);
	};

	var _WindowBase_drawActorMp = Window_Base.prototype.drawActorMp;
	Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
		this.setMpGaugeColors(actor.actorId());
		$gameSystem.setActorMpName(actor.actorId());
		_WindowBase_drawActorMp.call(this, actor, x, y, width);
	};

	var _WindowBase_drawActorTp = Window_Base.prototype.drawActorTp;
	Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
		this.setTpGaugeColors(actor.actorId());
		$gameSystem.setActorTpName(actor.actorId());
		_WindowBase_drawActorTp.call(this, actor, x, y, width);
	};

	Object.defineProperties(TextManager, {
	    chpA             : TextManager.getter('basic', 3),
	    cmpA             : TextManager.getter('basic', 5),
	    ctpA             : TextManager.getter('basic', 7),
	});

	Object.defineProperty(TextManager, 'hp', {
	    get: function() { return $gameSystem.getActorHpName(); },
	    configurable: true
	});

	Object.defineProperty(TextManager, 'hpA', {
	    get: function() { return $gameSystem.getActorHpName(); },
	    configurable: true
	});

	Object.defineProperty(TextManager, 'mp', {
	    get: function() { return $gameSystem.getActorMpName(); },
	    configurable: true
	});

	Object.defineProperty(TextManager, 'mpA', {
	    get: function() { return $gameSystem.getActorMpName(); },
	    configurable: true
	});

	Object.defineProperty(TextManager, 'tp', {
	    get: function() { return $gameSystem.getActorTpName(); },
	    configurable: true
	});

	Object.defineProperty(TextManager, 'tpA', {
	    get: function() { return $gameSystem.getActorTpName(); },
	    configurable: true
	});

	Game_System.prototype.getActorHpName = function() {
		if (this._actorHpName) return this._actorHpName;
		return TextManager.chpA;
	};

	Game_System.prototype.getActorMpName = function() {
		if (this._actorMpName) return this._actorMpName;
		return TextManager.cmpA;
	};

	Game_System.prototype.getActorTpName = function() {
		if (this._actorTpName) return this._actorTpName;
		return TextManager.ctpA;
	};

	Game_System.prototype.setActorHpName = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var name = undefined;

		if (actor.currentClass().meta.HPName)
			name = actor.currentClass().meta.HPName;
		if (actor.actor().meta.HPName)
			name = actor.actor().meta.HPName;

		if (name && name[0] === ' ') name = name.slice(1);
		this._actorHpName = name;
	};

	Game_System.prototype.setActorMpName = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var name = undefined;

		if (actor.currentClass().meta.MPName)
			name = actor.currentClass().meta.MPName;
		if (actor.actor().meta.MPName)
			name = actor.actor().meta.MPName;

		if (name && name[0] === ' ') name = name.slice(1);
		this._actorMpName = name;
	};

	Game_System.prototype.setActorTpName = function(actorId) {
		var actor = $gameActors.actor(actorId);
		var name = undefined;

		if (actor.currentClass().meta.TPName)
			name = actor.currentClass().meta.TPName;
		if (actor.actor().meta.TPName)
			name = actor.actor().meta.TPName;

		if (name && name[0] === ' ') name = name.slice(1);
		this._actorTpName = name;
	};
})();
