/*:
 * @plugindesc 事件在可视范围外自主移动
 * @author 康娜
 *
 *
 */

(function() {
    Game_CharacterBase.prototype.isNearTheScreen = function () {
        return true;
    };
}());