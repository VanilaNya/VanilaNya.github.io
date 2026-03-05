//=============================================================================
// Yanfly Engine Plugins - Key Number Input
// YEP_KeyNumberInput.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_KeyNumberInput = true;

var Yanfly = Yanfly || {};
Yanfly.KeyNumberInput = Yanfly.KeyNumberInput || {};
Yanfly.KeyNumberInput.version = 1.00;

//=============================================================================
 /*:
 * @plugindesc v1.00 Allows the Input Number event to use numbers instead.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Input Number event in RPG Maker requires players to scroll through each
 * digit in order to pick the number(s) they desire. This is a slow and tedious
 * process that could be sped up by using the keyboard to directly insert the
 * wanted numbers instead. If players use keyboard numbers to insert numbers,
 * they will appear instantly in the Input Number window. Players can also opt
 * for the traditional/default scrolling method using arrow keys as well.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 */
//=============================================================================

//=============================================================================
// Input
//=============================================================================

Yanfly.KeyNumberInput.Input_clear = Input.clear;
Input.clear = function() {
  Yanfly.KeyNumberInput.Input_clear.call(this);
  if (Imported.YEP_KeyNameEntry) return;
  this._inputString = undefined;
  this._inputSpecialKeyCode = undefined;
};

Yanfly.KeyNumberInput.Input_setupEventHandlers = Input._setupEventHandlers;
Input._setupEventHandlers = function() {
  Yanfly.KeyNumberInput.Input_setupEventHandlers.call(this);
  if (Imported.YEP_KeyNameEntry) return;
  document.addEventListener('keypress', this._onKeyPress.bind(this));
};

Yanfly.KeyNumberInput.Input_onKeyDown = Input._onKeyDown;
Input._onKeyDown = function(event) {
  this._inputSpecialKeyCode = event.keyCode;
  Yanfly.KeyNumberInput.Input_onKeyDown.call(this, event);
};

Input._onKeyPress = function(event) {
  this._registerKeyInput(event);
};

Input._registerKeyInput = function(event) {
  this._inputSpecialKeyCode = event.keyCode;
  var character = String.fromCharCode(event.charCode);
  if (this._inputString === undefined) {
    
  } else {
    this._inputString += character;
  }
  this._inputString = character;
};

Yanfly.KeyNumberInput.Input_shouldPreventDefault = Input._shouldPreventDefault;
Input._shouldPreventDefault = function(keyCode) {
  if (keyCode === 8) return false;
  return Yanfly.KeyNumberInput.Input_shouldPreventDefault.call(this, keyCode);
};

Input.isSpecialCode = function(key) {
  if (key.match(/backspace/i)) return this._inputSpecialKeyCode === 8;
  if (key.match(/enter/i)) return this._inputSpecialKeyCode === 13;
  if (key.match(/escape/i)) return this._inputSpecialKeyCode === 27;
};

Input.isNumpadPressed = function() {
  return [48, 49, 50, 51, 52, 
          53, 54, 55, 56, 57].contains(this._inputSpecialKeyCode);
};

Input.isArrowPressed = function() {
  return [37, 38, 39, 40].contains(this._inputSpecialKeyCode);
};

//=============================================================================
// Window_NumberInput
//=============================================================================

Yanfly.KeyNumberInput.Window_NumberInput_processDigitChange = 
    Window_NumberInput.prototype.processDigitChange;
Window_NumberInput.prototype.processDigitChange = function() {
  if (!this.isOpenAndActive()) return;
  // Numpad
  if (Input.isNumpadPressed()) {
    this.processKeyboardDigitChange();
  // Backspace
  } else if (Input.isSpecialCode('backspace')) {
    this.processKeyboardBackspace();
  // Delete
  } else if (Input._inputSpecialKeyCode === 46) {
    this.processKeyboardDelete();
  // Home
  } else if (Input._inputSpecialKeyCode === 36) {
    this.processKeyboardHome();
  } else if (Input._inputSpecialKeyCode === 35) {
    this.processKeyboardEnd();
  } else {
    Yanfly.KeyNumberInput.Window_NumberInput_processDigitChange.call(this);
  }
};

Window_NumberInput.prototype.processCursorMove = function() {
  if (!this.isCursorMovable()) return;
  if (Input.isNumpadPressed()) {
    this.processKeyboardDigitChange();
  } else {
    Window_Selectable.prototype.processCursorMove.call(this);
  }
};

Window_NumberInput.prototype.processKeyboardDigitChange = function() {
  var place = Math.pow(10, this._maxDigits - 1 - this.index());
  var n = Math.floor(this._number / place) % 10;
  this._number -= n * place;
  this._number += Number(Input._inputString) * place;
  Input.clear();
  this.refresh();
  SoundManager.playCursor();
  this.select(Math.min(this.index() + 1, this._maxDigits - 1));
};

Window_NumberInput.prototype.processKeyboardBackspace = function() {
  var place = Math.pow(10, this._maxDigits - 1 - this.index());
  var n = Math.floor(this._number / place) % 10;
  this._number -= n * place;
  this.select(Math.max(this.index() - 1, 0));
  var place = Math.pow(10, this._maxDigits - 1 - this.index());
  var n = Math.floor(this._number / place) % 10;
  this._number -= n * place;
  Input.clear();
  this.refresh();
  SoundManager.playCursor();
};

Window_NumberInput.prototype.processKeyboardDelete = function() {
  var place = Math.pow(10, this._maxDigits - 1 - this.index());
  var n = Math.floor(this._number / place) % 10;
  var n2 = this._number % place;
  this._number -= n * place;
  this._number -= n2;
  this._number += n2 * 10;
  Input.clear();
  this.refresh();
  SoundManager.playCursor();
};

Window_NumberInput.prototype.processKeyboardHome = function() {
  Input.clear();
  SoundManager.playCursor();
  this.select(0);
};

Window_NumberInput.prototype.processKeyboardEnd = function() {
  Input.clear();
  SoundManager.playCursor();
  this.select(this._maxDigits - 1);
};

//=============================================================================
// End of File
//=============================================================================