//-----------------------------------------------------------------------------
//  Galv's Load Common Event
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  Galv_LoadCommonEvent.js
//-----------------------------------------------------------------------------
//  2017-01-23 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_LoadCommonEvent = true;

var Galv = Galv || {};              // Galv's main object
Galv.LCE = Galv.LCE || {};          // Galv's stuff


//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.0) 读取存档时运行公共事件 
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Load Save File Event
 * @text 读取存档事件 
 * @desc 读取存档后运行的公共事件ID。 
 * @default 0
 *
 * @help
 *   Galv's Load Common Event
 * ----------------------------------------------------------------------------
 * 这是一个简单的插件，可以设置一个每次读取存档
 * 时运行的公共事件。 
 *
 * 插件设置“读取存档事件”可用于设置要运行的公共事件id。 
 * 
 */



//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {

Galv.LCE.cEventId = PluginManager.parameters('Galv_LoadCommonEvent')["Load Save File Event"];

// SCENE LOAD

Galv.LCE.Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function() {
	if (Galv.LCE.cEventId) $gameTemp.reserveCommonEvent(Galv.LCE.cEventId); // run common event
	Galv.LCE.Scene_Load_onLoadSuccess.call(this);
};


})();