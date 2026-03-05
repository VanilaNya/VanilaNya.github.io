//=============================================================================
// Yanfly Engine Plugins - Base Troop Events
// YEP_BaseTroopEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_BaseTroopEvents = true;

var Yanfly = Yanfly || {};
Yanfly.BTE = Yanfly.BTE || {};
Yanfly.BTE.version = 1.01

//=============================================================================
/*:
 * @plugindesc 【YEP❀实用类】敌群战斗通用事件|YEP_BaseTroopEvents.js
 * @author Yanfly Engine Plugins
 *
 * @param Base Troop ID
 * @text 敌群ID
 * @type troop
 * @desc 将此值更改为您希望所有重复出现的敌群ID
 * @default 1
 *
 * @help
 * ============================================================================
 *  ▼ 介绍 
 * ============================================================================
 * 自定义敌群事件页面，设置一个敌群事件触发所有敌群呈现一样的效果。
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

Yanfly.Parameters = PluginManager.parameters('YEP_BaseTroopEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.BaseTroopID = Number(Yanfly.Parameters['Base Troop ID']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.BTE.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.BTE.DataManager_isDatabaseLoaded.call(this)) return false;
		this.processBTEPages();
		return true;
};

DataManager.processBTEPages = function() {
	for (var n = 1; n < $dataTroops.length; n++) {
		var base_troop = $dataTroops[Yanfly.Param.BaseTroopID];
		var troop = $dataTroops[n];
		if (n !== Yanfly.Param.BaseTroopID && Yanfly.Param.BaseTroopID > 0) {
      if (troop._baseTroopEventsMade) continue;
      Yanfly.Util.extend(troop.pages, base_troop.pages);
      troop._baseTroopEventsMade = true;
		}
	}
};

//=============================================================================
// New Function
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.extend = function (mainArray, otherArray) {
    otherArray.forEach(function(i) {
      mainArray.push(i)
    }, this);
}

//=============================================================================
// End of File
//=============================================================================
