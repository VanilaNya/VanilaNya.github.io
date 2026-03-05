//=============================================================================
// MOG_TitleSplashScreen.js
//=============================================================================

/*:
 * @plugindesc 【MOG系列】标题图片徽标|MOG_TitleSplashScreen.js
 * @author Moghunter
 *
 * @param Number of Logos
 * @text 徽标数量
 * @desc 徽标数量
 * (Default = 1) 
 * @default 1
 * @type number
 *
 * @param Slash Duration
 * @text 持续时间
 * @desc 徽标的持续时间
 * (Default = 60)
 * @default 60
 * @type number
 *
 * @param Splash Fade Duration
 * @text 淡入淡出速度
 * @desc 淡入淡出速度
 * (Default = 2)
 * @default 2
 * @type number
 *
 * @param Full Screen Mode
 * @text 全屏模式
 * @desc 打开全屏模式 (true  / false)
 * (Default = false)
 * @default false
 * @type boolean
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Title Splash Screen (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * 汉化：硕明云书
 * =============================================================================
 * 在标题屏幕之前添加多个徽标。
 * 需要文件。
 *
 * Splash_编号.png
 *
 *
 * Splash_0.png
 * Splash_1.png
 * Splash_2.png
 * ...
 *
 * 将图像放在文件夹中：
 *
 * img/titles2/
 *
 * ============================================================================
 * - 新增功能（版本 1.1） 
 * ============================================================================
 * - （新） - 插件参数兼容RM1.5+
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TitleSplashScreen = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleSplashScreen');
    Moghunter.title_splash_number = Number(Moghunter.parameters['Number of Logos'] || 1);
    Moghunter.title_splash_duration = Number(Moghunter.parameters['Slash Duration'] || 60);
    Moghunter.title_splash_fade_speed = Number(Moghunter.parameters['Splash Fade Duration'] || 2);
    Moghunter.title_full_screen_mode = (Moghunter.parameters['Full Screen Mode'] || false);


//=============================================================================
// ** Scene Boot
//=============================================================================	

//==============================
// * Start
//==============================
var _alias_mog_title_splash_screen_boot_start = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function() {
	if (Moghunter.title_full_screen_mode == "true") {Graphics._requestFullScreen()};
	if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
	   SceneManager.goto(Scene_Splash_Screen);
	   return
    }
	_alias_mog_title_splash_screen_boot_start.call(this);
};


//=============================================================================
// ** Scene Splash Screen
//=============================================================================	
function Scene_Splash_Screen() {
    this.initialize.apply(this, arguments);
}
Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
Scene_Splash_Screen.prototype.constructor = Scene_Splash_Screen;

//==============================
// * Initialize
//==============================
Scene_Splash_Screen.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

//==============================
// * Create
//==============================
Scene_Splash_Screen.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	this._splash_data = [0,0, Math.max(Moghunter.title_splash_duration,1),Math.max(Moghunter.title_splash_fade_speed, 1)];
    this._splash_img = [];
	this._splash_sprite = new Sprite();
    this._splash_sprite.anchor.x = 0.5;
    this._splash_sprite.anchor.y = 0.5;
	this._splash_sprite.x = Graphics.boxWidth / 2;
	this._splash_sprite.y = Graphics.boxHeight / 2;
	this.addChild(this._splash_sprite);
	for (i = 0; i < Moghunter.title_splash_number; i++){
		this._splash_img.push(ImageManager.loadTitle2("Splash_" + i));
	};
	this.refresh_splash_screen()
};

//==============================
// * Refresh Splash Screen
//==============================
Scene_Splash_Screen.prototype.refresh_splash_screen = function() {
   if (this._splash_data[0] >= this._splash_img.length) {
	   AudioManager.stopMe();
       DataManager.setupNewGame();
       SceneManager.goto(Scene_Title);
       Window_TitleCommand.initCommandPosition();	
       return;
   };	
   this._splash_sprite.bitmap = this._splash_img[this._splash_data[0]];
   this._splash_sprite.opacity = 0;
   this._splash_data[0] += 1;
   this._splash_data[1] = this._splash_data[2];
   
};

//==============================
// * Start
//==============================
Scene_Splash_Screen.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
};

//==============================
// * Update
//==============================
Scene_Splash_Screen.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if (this._splash_data[1] <= 0) {
		this._splash_sprite.opacity -= this._splash_data[3];
	    if (Input.isTriggered("ok") || TouchInput.isTriggered()) {this._splash_data[0] = this._splash_img.length};		
		if (this._splash_sprite.opacity <= 0) {this.refresh_splash_screen()};
	}
	else {
	  this._splash_sprite.opacity += this._splash_data[3];
	  if ((Input.isTriggered("ok") || TouchInput.isTriggered()) && this._splash_sprite.opacity > 60) {
		  this._splash_data[1] = 0; this._splash_data[0] = this._splash_img.length};
	  if (this._splash_sprite.opacity >= 255) {this._splash_data[1] -= 1};
	};
};