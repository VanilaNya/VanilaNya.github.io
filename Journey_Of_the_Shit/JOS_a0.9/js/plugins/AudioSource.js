//=============================================================================
// AudioSource.js
// PUBLIC DOMAIN
// ----------------------------------------------------------------------------
// 2016/10/18 BGMとBGSの音源化を、一度指定すれば自動調節としました
// 2016/10/21 音量・位相調節の距離測定単位をマス単位からドット単位に変更しました
// 2016/12/04 セーブ・ロードに対応、BGS並行演奏プラグイン(ParallelBgs.js)との連携
// 2017/01/07 アニメーションの音源化に対応、戦闘を挟んでも正常動作するようにした
// 2017/01/09 ルート設定のSE音源化もoffに設定できるようにした
// 2017/03/25 プラグインパラメータに0を指定できないバグを修正しました
// 2017/06/04 BGMとBGSの再生コマンドを連打するとノイズが発生する不具合と、オプション音量を変更した瞬間音量調節が無効になるバグを修正しました
// 2017/10/05 FootstepSound.jsとの連携
//=============================================================================

/*:
 * @plugindesc 声源位置音量系统
 * @author くらむぼん 汉化:硕明云书
 *
 * @param listener
 * @text 听众
 * @desc screen或player中选择声音 //屏幕-玩家
 * @default player
 *
 * @param decay
 * @text 音量变化倍率
 * @desc 声源和听众的距离扩大一步时的音量变化倍率（％）
 * @default 85
 *
 * @param pan
 * @text 声源变化相位
 * @desc 左声道右声道变化相位
 * @default 10
 *
 * @param cutoff
 * @text 声音的最小音量
 * @desc 允许发出声音的最小音量（％）
 * @default 1
 *
 * @help
*  在地图活动的“路线设定”内发出效果音时
*  调整音量和相位，就像从放置该事件的坐标中响起一样。
*  具体来说，“音源”和“听众”越远音量越小
*  比起“听众”，“音源”在右边的话相位会增加（=从右边听到）。
    活动命令的“SE的演奏”不自动调节。好好区分使用吧。
*  此外，还可以从目标位置听到“显示动画”的效果声音。
*
*  此外，插件命令可使背景音乐和背景音乐从特定位置响起。
*  试着与特里亚康坦先生的BGS并行演奏插件合作。
*  详细情况请看下面的“插件命令”。
*
*  另外，作为基准的音量是指定效果音（，BGM，BGS）演奏时的音量。
*  用基准音量鸣响 每次离开一步，声音就会变小。
 * 
 * 
 * 插件参数：
 * listener :  设置发送声音的“听众”
 * 　 screen　 “画面的中央格子”是听众
 * 　 player　 “玩家”成为听众。
 * decay :  音源和听众之间的距离每扩大一步，音量就会增加decay%倍。
 *          基本假设值为0到100。如果你加上100多个值
 *          越远声音越大，也可以进行稍微不可思议的演出。
 * pan :    音源向右移动「一步」的话，相位只pan变化。
 *          相反，音源向左移动一步，相位会发生-pan变化。
 * cutoff : 允许发出声音的最小音量（%）。
 *           如果计算后的音量低于此值，则强制音量为0%。
 * 
 * 
 * 插件命令：
 * audiosource listener 1
 * 将指定ID（在此情况下为1）的映射事件设为收听者。
 *（顺便说一下，如果指定0的话，就会将“本事件”作为听众）
 * 因为听者只有一个，所以屏幕中心或玩家不是听者。
 * 
 * audiosource listener reset
 * 解除地图事件的听者化，将听者返回屏幕或玩家。
 * 
 * 
 * audiosource bgm 1
 * audiosource bgs 1
 * 将当前播放的BGM/BGS的音量和相位
 * 调整以使其听起来像“从指定ID的映射事件中响起”。
 *（如果指定0，则从“此事件”开始鸣响）
 * 用于设置收音机播放歌曲的演出等。
 * 
 * 另外，在与BGS并行演奏插件协作情况下
 * ◆プラグインコマンド：PB_BGSライン変更 2
 * ◆プラグインコマンド：audiosource bgs 1
 * 按这样的顺序指定的话，可以在各自的BGS中指定音源。
 * 
 * audiosource bgm reset
 * audiosource bgs reset
 * 解除BGM/BGS的音源化，恢复到通常的演奏
 * 
 * 
 * audiosource se on
 * audiosource se off
 *“根设置”和“动画显示”会自动发出效果音
 * 调整为从角色的位置发出声音
 * 不希望调节时，用这个插件命令关闭吧。
 * 初始值为on。
 * 
 * 
 * 许可证：
 * 这个插件的使用方法没有限制。请随便。
 */

(function() {
	'use strict';
	var parameters = PluginManager.parameters('AudioSource');
	var listener = parameters['listener'];
	var decay = toNumber(parameters['decay'], 85).clamp(0, Infinity);
	var pan = toNumber(parameters['pan'], 10);
	var cutoff = toNumber(parameters['cutoff'], 1).clamp(0, 100);

	//効果音の音量調節（マップイベントのルート設定から鳴らした時のみ）
	var _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
	Game_Character.prototype.processMoveCommand = function(command) {
		if (command.code === Game_Character.ROUTE_PLAY_SE) playAdjustSe(command.parameters[0], this);
		else _Game_Character_processMoveCommand.apply(this, arguments);
	};

	//アニメーション中の効果音を音量調節
	Sprite_Animation.prototype.processTimingData = function(timing) {
		var duration = timing.flashDuration * this._rate;
		switch (timing.flashScope) {
			case 1:
			this.startFlash(timing.flashColor, duration);
			break;
			case 2:
			this.startScreenFlash(timing.flashColor, duration);
			break;
			case 3:
			this.startHiding(duration);
			break;
		}
		if (!this._duplicated && timing.se) {
			playAdjustSe(timing.se, this._target && this._target._character);
		}
	};

	//戦闘終了直後、BGMとBGSの音量が初期値に戻っているので再度設定する
	//fadeInがcancelされてしまいそうだが、実際はfadeInの処理の方が遅延するのでうまくいく
	var _BattleManager_replayBgmAndBgs = BattleManager.replayBgmAndBgs;
	BattleManager.replayBgmAndBgs = function() {
		_BattleManager_replayBgmAndBgs.apply(this, arguments);
		AudioManager.updateAudioSource();
	};

	//BGM、BGSの音量調節（毎フレーム）
	AudioManager.updateAudioSource = function() {
		updateParameters(this._currentBgm, $gameMap.event($gameSystem._bgmSource), true);
		if ($gameSystem._bgsSources) {
			if (!this.iterateAllBgs) return delete $gameSystem._bgsSources;
			this.iterateAllBgs(function() {
				updateParameters(this._currentBgs, $gameMap.event($gameSystem._bgsSources[this.getBgsLineIndex()]));
			}.bind(this));
		}
		else updateParameters(this._currentBgs, $gameMap.event($gameSystem._bgsSource));
	};

	//BGM、BGSの音量が自動調節されている場合はイベントコマンドからのAudioBufferの調節を無効にする
	//（同一フレームに複数回の音量変化が含まれるとノイズが発生するため）
	var _AudioManager_updateBgmParameters = AudioManager.updateBgmParameters;
	AudioManager.updateBgmParameters = function(bgm) {
		if ($gameMap && $gameMap.event($gameSystem._bgmSource)) return;
		_AudioManager_updateBgmParameters.apply(this, arguments);
	};

	var _AudioManager_updateBgsParameters = AudioManager.updateBgsParameters;
	AudioManager.updateBgsParameters = function(bgs) {
		if ($gameMap && $gameSystem) {
			if ($gameSystem._bgsSources && this.getBgsLineIndex) {
				if ($gameMap.event($gameSystem._bgsSources[this.getBgsLineIndex()])) return;
			} else {
				if ($gameMap.event($gameSystem._bgsSource)) return;
			}
		}
		_AudioManager_updateBgsParameters.apply(this, arguments);
	};

	//BGM、BGSのオプション側の音量を変えた時にちゃんと音量調節されるようにする
	var _AudioManager_bgmVolume = Object.getOwnPropertyDescriptor(AudioManager, 'bgmVolume');
	Object.defineProperty(AudioManager, 'bgmVolume', {
		get: function() {
			return _AudioManager_bgmVolume.get.call(this);
		},
		set: function(value) {
			_AudioManager_bgmVolume.set.call(this, value);
			if ($gameMap && $gameSystem) this.updateAudioSource();
		},
		configurable: true
	});

	var _AudioManager_bgsVolume = Object.getOwnPropertyDescriptor(AudioManager, 'bgsVolume');
	Object.defineProperty(AudioManager, 'bgsVolume', {
		get: function() {
			return _AudioManager_bgsVolume.get.call(this);
		},
		set: function(value) {
			_AudioManager_bgsVolume.set.call(this, value);
			if ($gameMap && $gameSystem) this.updateAudioSource();
		},
		configurable: true
	});

	var _Game_Map_update = Game_Map.prototype.update;
	Game_Map.prototype.update = function(sceneActive) {
		_Game_Map_update.apply(this, arguments);
		AudioManager.updateAudioSource();
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.apply(this, arguments);
		if (command.toLowerCase() === 'audiosource') {
			var eventId = +args[1] === 0 ? this._eventId : +args[1];
			switch (args[0].toLowerCase()) {
				case 'listener':
					$gameSystem._listenerEvent = eventId;
					break;
				case 'bgm':
					$gameSystem._bgmSource = eventId;
					break;
				case 'bgs':
					if ($gameSystem.getBgsLine) {
						$gameSystem._bgsSources = $gameSystem._bgsSources || [];
						$gameSystem._bgsSources[$gameSystem.getBgsLine()] = eventId;
					}
					else $gameSystem._bgsSource = eventId;
					break;
				case 'se':
					$gameSystem._seSourceOff = args[1].toLowerCase() === 'off';
					break;
				default:
					break;
			}
		}
	};

	function toNumber(str, def) {
		return isNaN(str) ? def : +(str || def);
	}

	//BGMとBGSの音量と位相を調節する
	function updateParameters(audio, source, isBgm) {
		if (audio && source) {
			var lastVolume = audio.volume;
			var lastPan = audio.pan;
			adjust(audio, source);
			if (audio.volume < cutoff) audio.volume = 0;
			var buffer = AudioManager[isBgm ? '_bgmBuffer' : '_bgsBuffer'];
			if (buffer && buffer._gainNode) buffer._gainNode.gain.cancelScheduledValues(0);
			AudioManager.updateBufferParameters(buffer, AudioManager[isBgm ? '_bgmVolume' : '_bgsVolume'], audio);
			audio.volume = lastVolume;
			audio.pan = lastPan;
		}
	}

	//SEの音量と位相を調節して再生する
	function playAdjustSe(se, source) {
		if (source && !$gameSystem._seSourceOff) {
			var lastVolume = se.volume;
			var lastPan = se.pan;
			adjust(se, source);
			if (se.volume >= cutoff) AudioManager.playSe(se);
			se.volume = lastVolume;
			se.pan = lastPan;
		}
		else AudioManager.playSe(se);
	}

	//実際に音量調節を担当する関数。第一引数にオーディオデータ、第二引数に音源キャラクターを指定する
	function adjust(audio, source) {
		if (!source) throw new Error('audiosourceエラー：音源となるイベントが存在しません');
		var listenerX, listenerY, listenerEvent = $gameMap.event($gameSystem._listenerEvent);
		if (listenerEvent) {
			listenerX = listenerEvent._realX;
			listenerY = listenerEvent._realY;
		} else {
			switch (listener.toLowerCase()) {
				case 'screen':
					listenerX = $gameMap.displayX() + $gamePlayer.centerX();
					listenerY = $gameMap.displayY() + $gamePlayer.centerY();
					break;
				case 'player':
					listenerX = $gamePlayer._realX;
					listenerY = $gamePlayer._realY;
					break;
				default:
					throw new Error('audiosourceエラー：listenerパラメータはscreenかplayerにしてください');
					break;
			}
		}
		var dx = $gameMap.deltaX(source._realX, listenerX);
		var dy = $gameMap.deltaY(source._realY, listenerY);
		var d = Math.sqrt(dx * dx + dy * dy);
		if (d > 1) audio.volume *= Math.pow(decay / 100, d - 1);
		audio.pan = (dx * pan).clamp(-100, 100);
	}

	//連携用の口
	AudioManager.playAdjustSe = playAdjustSe;
})();