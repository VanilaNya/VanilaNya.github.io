//=============================================================================
// ChoiceList2.js
//=============================================================================
// [Update History]
// 2022.May.24 Ver1.0.0 First Release
// 2023.Nov.20 Ver1.1.0 Introduce back quote notation

/*:
 * @target MV MZ
 * @plugindesc [Ver1.1.0]窗口选项约束
 * @author Sasuke KANNAZUKI
 *
 * @param Closed Text
 * @text 不可选择文本
 * @desc 当文本包含后引号且选项不可选择时的字符串。
 * @type string
 * @default ??????
 *
 * @help
 * 此插件不提供插件命令。
 * 此插件运行于RPG Maker MV(1.6.0版本以上) 和 MZ.
 *
 * 此插件允许为选项列表中的每个选项设置约束，
 * 其约束为开关。如果指定的开关为OFF，则玩家无法
 * 选择该选项。
 *
===================================================
   快速入门：
   在选项后面添加符号 ~1  表示1号开关开启才可以选择
                      `1  表示1号开关关闭时显示????
===================================================

 * 如果要将约束设置为一个选项，并且其约束为
 * 开关#15处于ON状态，请按如下方式写下：
 *
 * Yes~15
 *
 * In this case, display 'Yes', and cannot select if Switch #15 is false.
 * If neither ~ (=tilda) nor `(=back quote) in the choice,
 * it's selectable any case.
 *
 * [Advanced Option] (Since Ver1.1.0)
 * It can display different string when the choice isn't selectable,
 * and the string is set at plugin parameters.
 *
 * Yes`12
 *
 * In this case, if switch #12 if OFF, the choice isn't selectable and
 * the string is replaced to the string (ex.??????)
 * (Note: You can input `(back quote) by Shift + ＠ .)
 *
 * It's also able to set special text when the choice isn't selectable.
 * Write down back quote and alternate text as follows:
 *
 * Yes`19`I hope yes but...
 *
 * In this case, if switch #19 if OFF,
 * the choice string is "I hope yes but...".
 *
 * [License]
   插件遵循MIT许可证，可自由使用
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @target MV MZ
 * @plugindesc [Ver1.1.0]「選択肢の表示」の選択肢に選択可否の制約を導入します。
 * @author 神無月サスケ
 *
 * @param Closed Text
 * @text 選択不可時テキスト
 * @desc はい`1 のようなバッククォート付き選択肢が選択不可の時の際の文字列
 * @type string
 * @default ？？？
 *
 * @help
 * このプラグインには、プラグインコマンドはありません。
 * このプラグインは、RPGツクールMV(Ver1.6.0以降)およびMZに対応しています。
 *
 * このプラグインは、「選択肢の表示」の選択肢に、選択可否の制約を導入します。
 * 具体的には、特定のスイッチがONの時だけ選択可能になる選択肢が作れます。
 *
 * ■概要
 * スイッチ15番がONの時だけ選択可能になる選択肢は、
 * 以下のように ~(チルダ)を使って記述します。
 * 
 * はい~15
 *
 * この場合、選択肢は「はい」と表示され、スイッチ15番がOFFの時は選択不可です。
  *
 * ~ (=チルダ)や`(バッククォート)をつけない選択肢は、通常表示となります。
 *
 * ■拡張機能 (Ver1.1.0～)
 * 選択不可能の時、プラグインパラメータで指定された文字列を表示する際は、
 * チルダの代わりにバッククォート(`)を使います。
 * (バッククォートは、Shift + ＠ で入力できます)
 *
 * はい`12
 *
 * この場合、スイッチ12番がOFFの時、選択肢名が「？？？」など
 * 設定された値に置き換えられます。
 *
 * 任意の文字列に置き換えたい場合は、変数IDの後にバッククォートを置き、
 * 代替文字列を書きます。
 *
 * はい`19`はいと言えない
 *
 * この場合、スイッチ19番がOFFの時は「はいと言えない」に置き換えられます。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(() => {
  const pluginName = "ChoiceList2";

  //
  // process parameters
  //
  const parameters = PluginManager.parameters(pluginName);
  const closedText = parameters['Closed Text'] || '??????';

  //
  // replace ChoiceList window
  //
  const isMZ = () => "ColorManager" in window;

  if (isMZ()) { // MZ
    Scene_Message.prototype.createChoiceListWindow = function() {
      this._choiceListWindow = new Window_ChoiceList2();
      this.addWindow(this._choiceListWindow);
    };
  } else { // MV
    const _Window_Message_createSubWindows =
     Window_Message.prototype.createSubWindows;
    Window_Message.prototype.createSubWindows = function() {
      _Window_Message_createSubWindows.call(this);
      this._choiceWindow = new Window_ChoiceList2(this);
    };
  }

  // ------------------------------------------------------------------
  // define CoiceList2 class
  // ------------------------------------------------------------------
  function Window_ChoiceList2() {
    this.initialize.apply(this, arguments);
  }

  Window_ChoiceList2.prototype = Object.create(Window_ChoiceList.prototype);
  Window_ChoiceList2.prototype.constructor = Window_ChoiceList2;

  //
  // define regular expression
  //
  const choiceRE = /^(.+)([\~\`])([0-9]+)(?:\`(.*))?$/;

  const choiceString = text => {
    const res = choiceRE.exec(text);
    if (res && res[2] === "`" && !$gameSwitches.value(+res[3])) {
      return res[4] ? res[4] : closedText;
    }
    return res ? res[1] : text;
  };

  //
  // judge whether each command to enable or not
  //
  Window_ChoiceList2.prototype.commandName = function(index) {
    return choiceString(this._list[index].name);
  };

  Window_ChoiceList2.prototype.isEnabled = function(index) {
    if (index >= 0) {
      const res = choiceRE.exec(this._list[index].name);
      if (res) {
        return $gameSwitches.value(+res[3]);
      }
      return true;
    }
    return false;
  };

  Window_ChoiceList2.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.index());
  };

  //
  // display choices
  //
  Window_ChoiceList2.prototype.textSizeEx = function(text) {
    text = choiceString(text);
    return Window_ChoiceList.prototype.textSizeEx.call(this, text);
  };

  Window_ChoiceList2.prototype.drawItem = function(index) {
    this.changePaintOpacity(this.isEnabled(index));
    Window_ChoiceList.prototype.drawItem.call(this, index);
    this.changePaintOpacity(true);
  };

})();
  