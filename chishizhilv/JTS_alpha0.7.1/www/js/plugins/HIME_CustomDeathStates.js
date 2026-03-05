/*:
-------------------------------------------------------------------------
@title Custom Death States
@author Hime @ HimeWorks
@date Nov 17, 2015
@filename HIME_CustomDeathStates.js
@url http://himeworks.com/2015/11/custom-death-states/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------
@plugindesc 附加战斗死亡状态|HIME_CustomDeathStates.js
@help 
-------------------------------------------------------------------------
== 描述 ==

汉化:硕明云书

死亡状态战斗附加功能

在战斗中，当所有敌人都应用死亡状态时，角色胜利！
当所有参与者都应用了死亡状态时，他们将游戏失败或战斗失败！

在战斗之外，如果所有Actor都应用了死亡状态，游戏就结束了。

应用了此插件的死亡状态角色不会失去所有的HP/MP，但他们
仍然会被认为是战死或战斗失败！

== 使用条款 ==

- 免费用于商业的非商业项目
- 联系插件作者用于商业用途
Video: https://youtu.be/s56kl3HIGGM

== 更新日志 ==

2015年11月17日 - 初始版本

== 用法 ==

到数据库中的状态，并在他们的备注中写下标签：

  <custom death state>
  

-------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.CustomDeathStates = 1;
TH.CustomDeathStates = TH.CustomDeathStates || {};

(function ($) {

  $.Regex = /<custom[-_ ]death[-_ ]state>/i

  $.loadCustomDeathStates = function() {
    $.customDeathStates = [];
    var state;
    var res;
    for (var i = 1, len = $dataStates.length; i < len; i++) {
      state = $dataStates[i];
      res = $.Regex.exec(state.note);
      if (res) {
        $.customDeathStates.push(i);
      }
    }
  };

  var TH_CustomDeathStates_DataManager_createGameObjects = DataManager.createGameObjects;
  DataManager.createGameObjects = function() {
    TH_CustomDeathStates_DataManager_createGameObjects.call(this);
    $.loadCustomDeathStates();
  };
  
  var TH_CustomDeathStates_GameBattlerBase_isDeathStateAffected = Game_BattlerBase.prototype.isDeathStateAffected;
  Game_BattlerBase.prototype.isDeathStateAffected = function() {
    return TH_CustomDeathStates_GameBattlerBase_isDeathStateAffected.call(this) || this.isCustomDeathStateAffected();
  };

  /* Returns true if any custom death state is applied */
  Game_BattlerBase.prototype.isCustomDeathStateAffected = function() {
    var states = $.customDeathStates;
    for (var i = 0, len = states.length; i < len; i++) {
      
      if (this.isStateAffected(states[i])) {
        return true;
      }
    }
    return false;
  };
})(TH.CustomDeathStates);