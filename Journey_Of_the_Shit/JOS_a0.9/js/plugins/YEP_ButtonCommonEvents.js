//=============================================================================
// Yanfly Engine Plugins - Button Common Events
// YEP_ButtonCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ButtonCommonEvents = true;

var Yanfly = Yanfly || {};
Yanfly.BCE = Yanfly.BCE || {};
Yanfly.BCE.version = 1.02

//=============================================================================
 /*:
 * @plugindesc 【YEP❀实用类】自定义按键触发公共事件|YEP_ButtonCommonEvents.js
 * @author Yanfly Engine Plugins
 *
 * @param ---Top Row---
 * @text ---首行---
 * @default
 *
 * @param Key ~
 * @text 按键 ~
 * @parent ---Top Row---
 * @type common_event
 * @desc 按下此按钮时要调用的常见事件。
 * 如果不希望调用公共事件，请设置为0。
 * @default 0
 *
 * @param Key 1
 * @text 按键 1
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 2
 * @text 按键 2
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 3
 * @text 按键 3
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 4
 * @text 按键 4
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 5
 * @text 按键 5
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 6
 * @text 按键 6
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 7
 * @text 按键 7
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 8
 * @text 按键 8
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 9
 * @text 按键 9
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key 0
 * @text 按键 0
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key -
 * @text 按键 -
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key =
 * @text 按键 =
 * @parent ---Top Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---2nd Row---
 * @text ---第2行---
 * @default
 *
 * @param Key Q (PageUp)
 * @text 按键 Q (PageUp)
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key W (PageDown)
 * @text 按键 W (PageDown)
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key E
 * @text 按键 E
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key R
 * @text 按键 R
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key T
 * @text 按键 T
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Y
 * @text 按键 Y
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key U
 * @text 按键 U
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key I
 * @text 按键 I
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key O
 * @text 按键 O
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key P
 * @text 按键 P
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key [
 * @text 按键 [
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ]
 * @text 按键 ]
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key \
 * @text 按键 \
 * @parent ---2nd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---3rd Row---
 * @text ---第3行---
 * @default
 *
 * @param Key A
 * @text 按键 A
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key S
 * @text 按键 S
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key D
 * @text 按键 D
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key F
 * @text 按键 F
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key G
 * @text 按键 G
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key H
 * @text 按键 H
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key J
 * @text 按键 J
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key K
 * @text 按键 K
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key L
 * @text 按键 L
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ;
 * @text 按键 ;
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key "
 * @text 按键 "
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Enter (OK)
 * @text 按键 Enter (OK)
 * @parent ---3rd Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---4th Row---
 * @text ---第4行---
 * @default
 *
 * @param Key Shift (Dash)
 * @text 按键 Shift (Dash)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Z (OK)
 * @text 按键 Z (OK)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key X (Cancel)
 * @text 按键 X (Cancel)
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key C
 * @text 按键 C
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key V
 * @text 按键 V
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key B
 * @text 按键 B
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key N
 * @text 按键 N
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key M
 * @text 按键 M
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key ,
 * @text 按键 ,
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key .
 * @text 按键 .
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key /
 * @text 按键 /
 * @parent ---4th Row---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---Misc---
 * @text ---其他---
 * @default
 *
 * @param Key Space (OK)
 * @text 按键 Space (OK)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Left (Left)
 * @text 按键 左
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Up (Up)
 * @text 按键 上
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Right (Right)
 * @text 按键 右
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Down (Down)
 * @text 按键 下
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Insert (Cancel)
 * @text 按键 Insert (Cancel)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Delete
 * @text 按键 Delete
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Home
 * @text 按键 Home
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key End
 * @text 按键 End
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Page Up (PageUp)
 * @text 按键 Page Up (PageUp)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key Page Down (PageDown)
 * @text 按键 Page Down (PageDown)
 * @parent ---Misc---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param ---NumPad---
 * @text ---小键盘---
 * @default
 *
 * @param Key NumPad 0 (Cancel)
 * @text 按键 0
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 1
 * @text 按键 1
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 2 (Down)
 * @text 按键 2
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 3
 * @text 按键 3
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 4 (Left)
 * @text 按键 4
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 5
 * @text 按键 5
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 6 (Right)
 * @text 按键 6
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 7
 * @text 按键 7
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 8 (Up)
 * @text 按键 8
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad 9
 * @text 按键 9
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad .
 * @text 按键 .
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad +
 * @text 按键 +
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad -
 * @text 按键 -
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad *
 * @text 按键 *
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @param Key NumPad /
 * @text 按键 /
 * @parent ---NumPad---
 * @type common_event
 * @desc The common event to call when this button is pressed.
 * Set to 0 if you don't wish for a common event to call.
 * @default 0
 *
 * @help
 * ============================================================================
 *  ▼ 介绍 
 * ============================================================================
 * 此插件允许您将公共事件绑定到键盘。
 * ============================================================================
 *  ▼ 说明
 * ============================================================================
 *
 * 以下是已分配了公用事件的按键列表： 
 *
 * 按键分配：
 *   - Q         - 分配给PageUp
 *   - W         - 分配给PageDown
 *   - Shift     - 分配给Dash
 *   - Z         - 分配给OK
 *   - X         - 分配给Cancel
 *   - Space     - 分配给OK
 *   - Left      - 分配给左
 *   - Up        - 分配给up
 *   - Right     - 分配给右
 *   - Down      - 分配给down
 *   - Insert    - 分配给Cancel
 *   - Page Up   - 分配给PageUp
 *   - Page Down - 分配给PageDown
 *   - Numpad 0  - 分配给Cancel
 *   - Numpad 2  - 分配给down
 *   - Numpad 4  - 分配给left
 *   - Numpad 6  - 分配给right
 *   - Numpad 8  - 分配给up
 * 这仅适用于而玩家在场地地图中在菜单或战斗中将恢复以前的本机功能。
 *
 * ============================================================================
 * 兼容性问题
 * ============================================================================
 *
 * 此插件很可能与任何
 * 改变键击或通过不同的方式使用键击。
 * 这将包括为RPG Maker提供的KeyboardConfig.js
 * 由Yanfly引擎插件制作的MV插件包。此插件的修订版
 * KeyboardConfig.js是在Yanfly.moe上制作的，供您选择！确保您
 * 具有YEP_KeyboardConfig.js版本1.01，以使其兼容
 * 此插件必须放置在YEP_KeyboardConfig.js之上，以便
 * 两个插件一起工作。
*
 * ============================================================================
 * 插件命令
 * ============================================================================
 *
 *   RevertButton Ok
 *   RevertButton Cancel
 *   RevertButton Dash
 *   RevertButton PageUp
 *   RevertButton PageDown
 *   RevertButton Left
 *   RevertButton Up
 *   RevertButton Right
 *   RevertButton Down
 *   RevertButton All
 * 原始按钮，并解除绑定到它们的常见事件的绑定。如果“全部”
 * 功能恢复，则所有受影响的按钮将恢复到原始功能。
 *
 *   SwitchButton Ok
 *   SwitchButton Cancel
 *   SwitchButton Dash
 *   SwitchButton PageUp
 *   SwitchButton PageDown
 *   SwitchButton Left
 *   SwitchButton Up
 *   SwitchButton Right
 *   SwitchButton Down
 *   SwitchButton All
 * 使用原始函数切换所有键以使用公共事件绑定
 * 而不是其原始版本。如果切换了“全部”功能，
 * 如果存在，则所有受影响的按钮将切换到公共事件绑定
 *
 *   TriggerButton Ok
 *   TriggerButton Cancel
 *   TriggerButton Dash
 *   TriggerButton PageUp
 *   TriggerButton PageDown
 *   TriggerButton Left
 *   TriggerButton Up
 *   TriggerButton Right
 *   TriggerButton Down
 * 这将使游戏模拟触发
 * 即使有一个公共事件绑定到
 * 原始功能的所有键。
 *
 * ============================================================================
 *  ▼ 版本：v1.01
 * ============================================================================
 *
 * Version 1.02:
 * - 为RPG Maker MV 1.5.0版更新。
 *
 * Version 1.01:
 * -将按钮从触发更改为重复，以便常见事件可以
 * 在被压下的同时连续运行。
 *
 * Version 1.00:
 * - 发布!
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
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ButtonCommonEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.BCEList = {
      tilde: Number(Yanfly.Parameters['Key ~']),
          1: Number(Yanfly.Parameters['Key 1']),
          2: Number(Yanfly.Parameters['Key 2']),
          3: Number(Yanfly.Parameters['Key 3']),
          4: Number(Yanfly.Parameters['Key 4']),
          5: Number(Yanfly.Parameters['Key 5']),
          6: Number(Yanfly.Parameters['Key 6']),
          7: Number(Yanfly.Parameters['Key 7']),
          8: Number(Yanfly.Parameters['Key 8']),
          9: Number(Yanfly.Parameters['Key 9']),
          0: Number(Yanfly.Parameters['Key 0']),
      minus: Number(Yanfly.Parameters['Key -']),
      equal: Number(Yanfly.Parameters['Key =']),

          q: Number(Yanfly.Parameters['Key Q (PageUp)']),
          w: Number(Yanfly.Parameters['Key W (PageDown)']),
          e: Number(Yanfly.Parameters['Key E']),
          r: Number(Yanfly.Parameters['Key R']),
          t: Number(Yanfly.Parameters['Key T']),
          y: Number(Yanfly.Parameters['Key Y']),
          u: Number(Yanfly.Parameters['Key U']),
          i: Number(Yanfly.Parameters['Key I']),
          o: Number(Yanfly.Parameters['Key O']),
          p: Number(Yanfly.Parameters['Key P']),
  foreBrack: Number(Yanfly.Parameters['Key [']),
  backBrack: Number(Yanfly.Parameters['Key ]']),
  backSlash: Number(Yanfly.Parameters['Key \\']),

          a: Number(Yanfly.Parameters['Key A']),
          s: Number(Yanfly.Parameters['Key S']),
          d: Number(Yanfly.Parameters['Key D']),
          f: Number(Yanfly.Parameters['Key F']),
          g: Number(Yanfly.Parameters['Key G']),
          h: Number(Yanfly.Parameters['Key H']),
          j: Number(Yanfly.Parameters['Key J']),
          k: Number(Yanfly.Parameters['Key K']),
          l: Number(Yanfly.Parameters['Key L']),
  semicolon: Number(Yanfly.Parameters['Key ;']),
      quote: Number(Yanfly.Parameters['Key "']),
      enter: Number(Yanfly.Parameters['Key Enter (OK)']),

   keyShift: Number(Yanfly.Parameters['Key Shift (Dash)']),
          z: Number(Yanfly.Parameters['Key Z (OK)']),
          x: Number(Yanfly.Parameters['Key X (Cancel)']),
          c: Number(Yanfly.Parameters['Key C']),
          v: Number(Yanfly.Parameters['Key V']),
          b: Number(Yanfly.Parameters['Key B']),
          n: Number(Yanfly.Parameters['Key N']),
          m: Number(Yanfly.Parameters['Key M']),
      comma: Number(Yanfly.Parameters['Key ,']),
     period: Number(Yanfly.Parameters['Key .']),
  foreSlash: Number(Yanfly.Parameters['Key /']),

      space: Number(Yanfly.Parameters['Key Space (OK)']),
    dirLeft: Number(Yanfly.Parameters['Key Left (Left)']),
      dirUp: Number(Yanfly.Parameters['Key Up (Up)']),
   dirRight: Number(Yanfly.Parameters['Key Right (Right)']),
    dirDown: Number(Yanfly.Parameters['Key Down (Down)']),
        ins: Number(Yanfly.Parameters['Key Insert (Cancel)']),
        del: Number(Yanfly.Parameters['Key Delete']),
       home: Number(Yanfly.Parameters['Key Home']),
        end: Number(Yanfly.Parameters['Key End']),
     pageUp: Number(Yanfly.Parameters['Key Page Up (PageUp)']),
   pageDown: Number(Yanfly.Parameters['Key Page Down (PageDown)']),

       num0: Number(Yanfly.Parameters['Key NumPad 0 (Cancel)']),
       num1: Number(Yanfly.Parameters['Key NumPad 1']),
       num2: Number(Yanfly.Parameters['Key NumPad 2 (Down)']),
       num3: Number(Yanfly.Parameters['Key NumPad 3']),
       num4: Number(Yanfly.Parameters['Key NumPad 4 (Left)']),
       num5: Number(Yanfly.Parameters['Key NumPad 5']),
       num6: Number(Yanfly.Parameters['Key NumPad 6 (Right)']),
       num7: Number(Yanfly.Parameters['Key NumPad 7']),
       num8: Number(Yanfly.Parameters['Key NumPad 8 (Up)']),
       num9: Number(Yanfly.Parameters['Key NumPad 9']),
  numPeriod: Number(Yanfly.Parameters['Key NumPad .']),
    numPlus: Number(Yanfly.Parameters['Key NumPad +']),
   numMinus: Number(Yanfly.Parameters['Key NumPad -']),
   numTimes: Number(Yanfly.Parameters['Key NumPad *']),
  numDivide: Number(Yanfly.Parameters['Key NumPad /'])
};
Yanfly.Param.Variables = String(Yanfly.Parameters['Variables']);

//=============================================================================
// Input Key Mapper
//=============================================================================

if (Yanfly.Param.BCEList['tilde'] !== 0) Input.keyMapper[192]     = 'tilde';
if (Yanfly.Param.BCEList['1'] !== 0) Input.keyMapper[49]          = '1';
if (Yanfly.Param.BCEList['2'] !== 0) Input.keyMapper[50]          = '2';
if (Yanfly.Param.BCEList['3'] !== 0) Input.keyMapper[51]          = '3';
if (Yanfly.Param.BCEList['4'] !== 0) Input.keyMapper[52]          = '4';
if (Yanfly.Param.BCEList['5'] !== 0) Input.keyMapper[53]          = '5';
if (Yanfly.Param.BCEList['6'] !== 0) Input.keyMapper[54]          = '6';
if (Yanfly.Param.BCEList['7'] !== 0) Input.keyMapper[55]          = '7';
if (Yanfly.Param.BCEList['8'] !== 0) Input.keyMapper[56]          = '8';
if (Yanfly.Param.BCEList['9'] !== 0) Input.keyMapper[57]          = '9';
if (Yanfly.Param.BCEList['0'] !== 0) Input.keyMapper[48]          = '0';
if (Yanfly.Param.BCEList['minus'] !== 0) Input.keyMapper[189]     = 'minus';
if (Yanfly.Param.BCEList['equal'] !== 0) Input.keyMapper[187]     = 'equal';

if (Yanfly.Param.BCEList['q'] !== 0) Input.keyMapper[81]          = 'q';
if (Yanfly.Param.BCEList['w'] !== 0) Input.keyMapper[87]          = 'w';
if (Yanfly.Param.BCEList['e'] !== 0) Input.keyMapper[69]          = 'e';
if (Yanfly.Param.BCEList['r'] !== 0) Input.keyMapper[82]          = 'r';
if (Yanfly.Param.BCEList['t'] !== 0) Input.keyMapper[84]          = 't';
if (Yanfly.Param.BCEList['y'] !== 0) Input.keyMapper[89]          = 'y';
if (Yanfly.Param.BCEList['u'] !== 0) Input.keyMapper[85]          = 'u';
if (Yanfly.Param.BCEList['i'] !== 0) Input.keyMapper[73]          = 'i';
if (Yanfly.Param.BCEList['o'] !== 0) Input.keyMapper[79]          = 'o';
if (Yanfly.Param.BCEList['p'] !== 0) Input.keyMapper[80]          = 'p';
if (Yanfly.Param.BCEList['foreBrack'] !== 0) Input.keyMapper[219] = 'foreBrack';
if (Yanfly.Param.BCEList['backBrack'] !== 0) Input.keyMapper[221] = 'backBrack';
if (Yanfly.Param.BCEList['backSlash'] !== 0) Input.keyMapper[220] = 'backSlash';

if (Yanfly.Param.BCEList['a'] !== 0) Input.keyMapper[65]          = 'a';
if (Yanfly.Param.BCEList['s'] !== 0) Input.keyMapper[83]          = 's';
if (Yanfly.Param.BCEList['d'] !== 0) Input.keyMapper[68]          = 'd';
if (Yanfly.Param.BCEList['f'] !== 0) Input.keyMapper[70]          = 'f';
if (Yanfly.Param.BCEList['g'] !== 0) Input.keyMapper[71]          = 'g';
if (Yanfly.Param.BCEList['h'] !== 0) Input.keyMapper[72]          = 'h';
if (Yanfly.Param.BCEList['j'] !== 0) Input.keyMapper[74]          = 'j';
if (Yanfly.Param.BCEList['k'] !== 0) Input.keyMapper[75]          = 'k';
if (Yanfly.Param.BCEList['l'] !== 0) Input.keyMapper[76]          = 'l';
if (Yanfly.Param.BCEList['semicolon'] !== 0) Input.keyMapper[186] = 'semicolon';
if (Yanfly.Param.BCEList['quote'] !== 0) Input.keyMapper[222]     = 'quote';
if (Yanfly.Param.BCEList['enter'] !== 0) Input.keyMapper[13]      = 'enter';

if (Yanfly.Param.BCEList['keyShift'] !== 0) Input.keyMapper[16]   = 'keyShift';
if (Yanfly.Param.BCEList['z'] !== 0) Input.keyMapper[90]          = 'z';
if (Yanfly.Param.BCEList['x'] !== 0) Input.keyMapper[88]          = 'x';
if (Yanfly.Param.BCEList['c'] !== 0) Input.keyMapper[67]          = 'c';
if (Yanfly.Param.BCEList['v'] !== 0) Input.keyMapper[86]          = 'v';
if (Yanfly.Param.BCEList['b'] !== 0) Input.keyMapper[66]          = 'b';
if (Yanfly.Param.BCEList['n'] !== 0) Input.keyMapper[78]          = 'n';
if (Yanfly.Param.BCEList['m'] !== 0) Input.keyMapper[77]          = 'm';
if (Yanfly.Param.BCEList['comma'] !== 0) Input.keyMapper[188]     = 'comma';
if (Yanfly.Param.BCEList['period'] !== 0) Input.keyMapper[190]    = 'period';
if (Yanfly.Param.BCEList['foreSlash'] !== 0) Input.keyMapper[191] = 'foreSlash';

if (Yanfly.Param.BCEList['space'] !== 0) Input.keyMapper[32]     = 'space';
if (Yanfly.Param.BCEList['dirLeft'] !== 0) Input.keyMapper[37]   = 'dirLeft';
if (Yanfly.Param.BCEList['dirUp'] !== 0) Input.keyMapper[38]     = 'dirUp';
if (Yanfly.Param.BCEList['dirRight'] !== 0) Input.keyMapper[39]  = 'dirRight';
if (Yanfly.Param.BCEList['dirDown'] !== 0) Input.keyMapper[40]   = 'dirDown';
if (Yanfly.Param.BCEList['ins'] !== 0) Input.keyMapper[45]       = 'ins';
if (Yanfly.Param.BCEList['del'] !== 0)Input.keyMapper[46]        = 'del';
if (Yanfly.Param.BCEList['home'] !== 0)Input.keyMapper[36]       = 'home';
if (Yanfly.Param.BCEList['end'] !== 0)Input.keyMapper[35]        = 'end';
if (Yanfly.Param.BCEList['pageUp'] !== 0) Input.keyMapper[33]    = 'pageUp';
if (Yanfly.Param.BCEList['pageDown'] !== 0) Input.keyMapper[34]  = 'pageDown';

if (Yanfly.Param.BCEList['num0'] !== 0) Input.keyMapper[96]      = 'num0';
if (Yanfly.Param.BCEList['num1'] !== 0)Input.keyMapper[97]       = 'num1';
if (Yanfly.Param.BCEList['num2'] !== 0) Input.keyMapper[98]      = 'num2';
if (Yanfly.Param.BCEList['num3'] !== 0)Input.keyMapper[99]       = 'num3';
if (Yanfly.Param.BCEList['num4'] !== 0) Input.keyMapper[100]     = 'num4';
if (Yanfly.Param.BCEList['num5'] !== 0)Input.keyMapper[101]      = 'num5';
if (Yanfly.Param.BCEList['num6'] !== 0) Input.keyMapper[102]     = 'num6';
if (Yanfly.Param.BCEList['num7'] !== 0)Input.keyMapper[103]      = 'num7';
if (Yanfly.Param.BCEList['num8'] !== 0) Input.keyMapper[104]     = 'num8';
if (Yanfly.Param.BCEList['num9'] !== 0)Input.keyMapper[105]      = 'num9';
if (Yanfly.Param.BCEList['numPeriod'] !== 0)Input.keyMapper[110] = 'numPeriod';
if (Yanfly.Param.BCEList['numPlus'] !== 0)Input.keyMapper[107]   = 'numPlus';
if (Yanfly.Param.BCEList['numMinus'] !== 0)Input.keyMapper[109]  = 'numMinus';
if (Yanfly.Param.BCEList['numTimes'] !== 0)Input.keyMapper[106]  = 'numTimes';
if (Yanfly.Param.BCEList['numDivide'] !== 0)Input.keyMapper[111] = 'numDivide';

//=============================================================================
// Input
//=============================================================================

Input._revertButton = function(button) {
  if (button === 'OK') {
    this.keyMapper[13] = 'ok';
    this.keyMapper[32] = 'ok';
    this.keyMapper[90] = 'ok';
  } else if (button === 'CANCEL') {
    this.keyMapper[45] = 'escape';
    this.keyMapper[88] = 'escape';
    this.keyMapper[96] = 'escape';
  } else if (button === 'DASH') {
    this.keyMapper[16] = 'shift';
  } else if (button === 'PAGEUP') {
    this.keyMapper[33] = 'pageup';
    this.keyMapper[81] = 'pageup';
  } else if (button === 'PAGEDOWN') {
    this.keyMapper[34] = 'pagedown';
    this.keyMapper[87] = 'pagedown';
  } else if (button === 'LEFT') {
    this.keyMapper[37] = 'left';
    this.keyMapper[100] = 'left';
  } else if (button === 'UP') {
    this.keyMapper[38] = 'up';
    this.keyMapper[104] = 'up';
  } else if (button === 'RIGHT') {
    this.keyMapper[39] = 'right';
    this.keyMapper[102] = 'right';
  } else if (button === 'DOWN') {
    this.keyMapper[40] = 'down';
    this.keyMapper[98] = 'down';
  } else if (button === 'ALL') {
    this.keyMapper[13] = 'ok';
    this.keyMapper[32] = 'ok';
    this.keyMapper[90] = 'ok';
    this.keyMapper[45] = 'escape';
    this.keyMapper[88] = 'escape';
    this.keyMapper[96] = 'escape';
    this.keyMapper[16] = 'shift';
    this.keyMapper[33] = 'pageup';
    this.keyMapper[81] = 'pageup';
    this.keyMapper[34] = 'pagedown';
    this.keyMapper[87] = 'pagedown';
    this.keyMapper[37] = 'left';
    this.keyMapper[100] = 'left';
    this.keyMapper[38] = 'up';
    this.keyMapper[104] = 'up';
    this.keyMapper[39] = 'right';
    this.keyMapper[102] = 'right';
    this.keyMapper[40] = 'down';
    this.keyMapper[98] = 'down';
  }
}

Input._switchButton = function(button) {
  if (button === 'OK') {
    if (Yanfly.Param.BCEList['enter'] !== 0) this.keyMapper[13] = 'enter';
    if (Yanfly.Param.BCEList['space'] !== 0) this.keyMapper[32] = 'space';
    if (Yanfly.Param.BCEList['z'] !== 0) this.keyMapper[90] = 'z';
  } else if (button === 'CANCEL') {
    if (Yanfly.Param.BCEList['ins'] !== 0) this.keyMapper[45] = 'ins';
    if (Yanfly.Param.BCEList['x'] !== 0) this.keyMapper[88] = 'x';
    if (Yanfly.Param.BCEList['num0'] !== 0) this.keyMapper[96] = 'num0';
  } else if (button === 'DASH') {
    if (Yanfly.Param.BCEList['keyShift'] !== 0) this.keyMapper[16] = 'keyShift';
  } else if (button === 'PAGEUP') {
    if (Yanfly.Param.BCEList['pageUp'] !== 0) this.keyMapper[33] = 'pageUp';
    if (Yanfly.Param.BCEList['q'] !== 0) this.keyMapper[81] = 'q';
  } else if (button === 'PAGEDOWN') {
    if (Yanfly.Param.BCEList['pageDown'] !== 0) this.keyMapper[34] = 'pageDown';
    if (Yanfly.Param.BCEList['w'] !== 0) this.keyMapper[87] = 'w';
  } else if (button === 'LEFT') {
    if (Yanfly.Param.BCEList['dirLeft'] !== 0) this.keyMapper[37] = 'dirLeft';
    if (Yanfly.Param.BCEList['num4'] !== 0) this.keyMapper[100] = 'num4';
  } else if (button === 'UP') {
    if (Yanfly.Param.BCEList['dirUp'] !== 0) this.keyMapper[38] = 'dirUp';
    if (Yanfly.Param.BCEList['num8'] !== 0) this.keyMapper[104] = 'num8';
  } else if (button === 'RIGHT') {
    if (Yanfly.Param.BCEList['dirRight'] !== 0) this.keyMapper[39] = 'dirRight';
    if (Yanfly.Param.BCEList['num6'] !== 0) this.keyMapper[102] = 'num6';
  } else if (button === 'DOWN') {
    if (Yanfly.Param.BCEList['dirDown'] !== 0) this.keyMapper[40] = 'dirDown';
    if (Yanfly.Param.BCEList['num2'] !== 0) this.keyMapper[98] = 'num2';
  } else if (button === 'ALL') {
    if (Yanfly.Param.BCEList['enter'] !== 0) this.keyMapper[13] = 'enter';
    if (Yanfly.Param.BCEList['space'] !== 0) this.keyMapper[32] = 'space';
    if (Yanfly.Param.BCEList['z'] !== 0) this.keyMapper[90] = 'z';
    if (Yanfly.Param.BCEList['ins'] !== 0) this.keyMapper[45] = 'ins';
    if (Yanfly.Param.BCEList['x'] !== 0) this.keyMapper[88] = 'x';
    if (Yanfly.Param.BCEList['num0'] !== 0) this.keyMapper[96] = 'num0';
    if (Yanfly.Param.BCEList['keyShift'] !== 0) this.keyMapper[16] = 'keyShift';
    if (Yanfly.Param.BCEList['pageUp'] !== 0) this.keyMapper[33] = 'pageUp';
    if (Yanfly.Param.BCEList['q'] !== 0) this.keyMapper[81] = 'q';
    if (Yanfly.Param.BCEList['pageDown'] !== 0) this.keyMapper[34] = 'pageDown';
    if (Yanfly.Param.BCEList['w'] !== 0) this.keyMapper[87] = 'w';
    if (Yanfly.Param.BCEList['dirLeft'] !== 0) this.keyMapper[37] = 'dirLeft';
    if (Yanfly.Param.BCEList['num4'] !== 0) this.keyMapper[100] = 'num4';
    if (Yanfly.Param.BCEList['dirUp'] !== 0) this.keyMapper[38] = 'dirUp';
    if (Yanfly.Param.BCEList['num8'] !== 0) this.keyMapper[104] = 'num8';
    if (Yanfly.Param.BCEList['dirRight'] !== 0) this.keyMapper[39] = 'dirRight';
    if (Yanfly.Param.BCEList['num6'] !== 0) this.keyMapper[102] = 'num6';
    if (Yanfly.Param.BCEList['dirDown'] !== 0) this.keyMapper[40] = 'dirDown';
    if (Yanfly.Param.BCEList['num2'] !== 0) this.keyMapper[98] = 'num2';
  }
};

//=============================================================================
// Scene_Base
//=============================================================================

Yanfly.BCE.Scene_Base_start = Scene_Base.prototype.start;
Scene_Base.prototype.start = function() {
    Yanfly.BCE.Scene_Base_start.call(this);
    Input._revertButton('ALL');
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.BCE.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
    Yanfly.BCE.Scene_Map_start.call(this);
    Input._switchButton('ALL');
};

Yanfly.BCE.Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
    Yanfly.BCE.Scene_Map_updateScene.call(this);
    if (SceneManager.isSceneChanging()) return;
    if ($gameMap.isEventRunning()) return;
    this.updateButtonEvents();
};

Scene_Map.prototype.updateButtonEvents = function() {
    for (var key in Yanfly.Param.BCEList) {
      var eventId = Yanfly.Param.BCEList[key];
      if (eventId <= 0) continue;
      if (!Input.isRepeated(key)) continue;
      $gameTemp.reserveCommonEvent(eventId);
      break;
    }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.BCE.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.BCE.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'RevertButton') this.revertButton(args);
  if (command === 'SwitchButton') this.switchButton(args);
  if (command === 'TriggerButton') this.triggerButton(args);
};

Game_Interpreter.prototype.revertButton = function(args) {
  if (!args) return;
  var button = args[0].toUpperCase();
  Input._revertButton(button);
};

Game_Interpreter.prototype.switchButton = function(args) {
  if (!args) return;
  var button = args[0].toUpperCase();
  Input._switchButton(button);
};

Game_Interpreter.prototype.triggerButton = function(args) {
  if (!args) return;
  var button = args[0].toLowerCase();
  if (button === 'cancel') button = 'escape';
  if (button === 'dash') button = 'shift';
  Input._latestButton = button;
  Input._pressedTime = 0;
};

//=============================================================================
// End of File
//=============================================================================
