/*:
 * @target MV MZ
 * @base Patcher
 * @orderAfter OptionEx
 * @orderAfter SAN_AnalogMove
 *
 * @param enterMapSe
 * @text 进入地图音效
 * @type struct<sound>
 * @default {"name":"suzu","volume":"50","pitch":"100","pan":"0"}
 *
 * @param changeMapSe
 * @text 切换地图音效
 * @type struct<sound>
 * @default {"name":"enter","volume":"60","pitch":"100","pan":"0"}
 *
 * @param bumpSe
 * @text 碰撞音效
 * @type struct<sound>
 * @default {"name":"bump","volume":"100","pitch":"100","pan":"50"}
 *
 * @param bumpSeInterval
 * @text 碰撞音效间隔（帧）
 * @type number
 * @default 30
 *
 * @param nearObstacleSe
 * @text 接近障碍物音效
 * @type struct<sound>
 * @default {"name":"face","volume":"80","pitch":"100","pan":"100"}
 *
 * @param nearObstacleDistance
 * @text 接近障碍物最大距离
 * @type number
 * @default 2
 *
 * @param nearEventSeJs
 * @text 接近事件音效（JS）
 * @desc function (this: Game_Event): { name: string; volume: number; pitch: number; pan: number } | null
 * @type note
 * @default "switch (Number(this.getSensorBalloonId())) {\n  case 11:\n    return { name: \"Cursor1\", volume: 100, pitch: 100, pan: 100 };\n  case 12:\n    return { name: \"HUKIase\", volume: 100, pitch: 100, pan: 100 };\n  case 13:\n    return { name: \"ka\", volume: 100, pitch: 100, pan: 100 };\n  case 14:\n    return { name: \"HUKIhuwa\", volume: 100, pitch: 100, pan: 100 };\n  case 15:\n    return { name: \"SISI\", volume: 100, pitch: 100, pan: 100 };\n  default:\n    return { name: \"event\", volume: 100, pitch: 100, pan: 100 };\n}"
 *
 * @param nearEventDistance
 * @text 接近事件最大距离
 * @type number
 * @default 2
 *
 * @param nearRegionEventSe
 * @text 接近区域事件音效
 * @desc 用于 YEP_RegionEvents 插件
 * @type struct<sound>
 * @default {"name":"event","volume":"100","pitch":"100","pan":"100"}
 *
 * @param nearRegionEventDistance
 * @text 接近区域事件最大距离
 * @desc 用于 YEP_RegionEvents 插件
 * @type number
 * @default 1
 *
 * @param npcMoveSe
 * @text NPC 移动音效
 * @type struct<sound>
 * @default {"name":"HUKI","volume":"100","pitch":"130","pan":"50"}
 *
 * @param npcIdleSeJs
 * @text NPC 空闲音效（JS）
 * @desc function (this: Game_Event): { name: string; volume: number; pitch: number; pan: number; interval: number } | null
 * @type note
 * @default "return null;"
 *
 * @param navigateSe
 * @text 导航音效
 * @type struct<sound>
 * @default {"name":"Starlight","volume":"50","pitch":"100","pan":"50"}
 *
 * @param navigateSeInterval
 * @text 导航音效间隔（帧）
 * @type number
 * @default 60
 *
 * @param optionGroupName
 * @text 选项组名称
 * @type string
 * @default 辅助音效设置
 *
 * @param mapSeVolumeOptionName
 * @text 地图音效音量选项名称
 * @desc 进入地图、切换地图、碰撞、NPC 移动、NPC 空闲
 * @type string
 * @default 地图音量
 *
 * @param mapSeVolumeDefaultValue
 * @text 地图音效音量默认值
 * @type number
 * @default 0
 * @min 0
 * @max 100
 *
 * @param obstacleSeVolumeOptionName
 * @text 障碍探测音效音量选项名称
 * @desc 接近障碍物
 * @type string
 * @default 障碍探测音量
 *
 * @param obstacleSeVolumeDefaultValue
 * @text 障碍探测音效音量默认值
 * @type number
 * @default 0
 * @min 0
 * @max 100
 *
 * @param eventSeVolumeOptionName
 * @text 事件探测音效音量选项名称
 * @desc 接近事件、接近区域事件
 * @type string
 * @default 事件探测音量
 *
 * @param eventSeVolumeDefaultValue
 * @text 事件探测音效音量默认值
 * @type number
 * @default 0
 * @min 0
 * @max 100
 */

/*~struct~sound:
 * @param name
 * @text 文件名
 * @type file
 * @dir audio/se
 *
 * @param volume
 * @text 音量
 * @type number
 * @default 100
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text 音高
 * @type number
 * @default 100
 * @min 1
 * @max 10000
 *
 * @param pan
 * @text 声像
 * @type number
 * @default 0
 * @min -100
 * @max 100
 */

self.EnvironmentalSounds = (() => {
  "use strict";

  const {
    PI,
    abs,
    atan2,
    cos,
    floor,
    hypot,
    max,
    random,
    round,
    sign,
    sin,
  } = Math;
  const lerp = (a, b, t) => a * (1 - t) + b * t;
  const isMV = Utils.RPGMAKER_NAME === "MV";
  const hasOptionEx = !!Window_Options.prototype.restoreDefaultValues;
  const hasSANAnalogMove = typeof Sanshiro !== "undefined" &&
    !!Sanshiro.AnalogMove;
  const parameters = PluginManager.parameters("EnvironmentalSounds");
  {
    const convert = (struct, converters) => {
      for (const [name, converter] of Object.entries(converters)) {
        struct[name] = converter(struct[name]);
      }
    };
    const string = (raw) => `${raw}`;
    const note = (raw) => JSON.parse(raw);
    const number = (raw) => +raw;
    const struct = (converters) => (raw) => {
      const obj = JSON.parse(raw);
      convert(obj, converters);
      return obj;
    };
    const sound = {
      name: string,
      volume: number,
      pitch: number,
      pan: number,
    };
    convert(parameters, {
      enterMapSe: struct(sound),
      changeMapSe: struct(sound),
      bumpSe: struct(sound),
      bumpSeInterval: number,
      nearObstacleSe: struct(sound),
      nearObstacleDistance: number,
      nearEventSeJs: note,
      nearEventDistance: number,
      nearRegionEventSe: struct(sound),
      nearRegionEventDistance: number,
      npcMoveSe: struct(sound),
      npcIdleSeJs: note,
      navigateSe: struct(sound),
      navigateSeInterval: number,
      optionGroupName: string,
      mapSeVolumeOptionName: string,
      mapSeVolumeDefaultValue: number,
      obstacleSeVolumeOptionName: string,
      obstacleSeVolumeDefaultValue: number,
      eventSeVolumeOptionName: string,
      eventSeVolumeDefaultValue: number,
    });
    console.debug(parameters);
  }
  parameters.nearEventSeJs = new Function(parameters.nearEventSeJs);
  parameters.npcIdleSeJs = new Function(parameters.npcIdleSeJs);

  class Audio extends WebAudio {
    constructor(url) {
      super(url);
      this._isPlaying = false;
      this._onEnd = this.stop.bind(this);
    }

    // for MV and MZ
    isPlaying() {
      return this._isPlaying;
    }

    play(loop, offset) {
      super.play(loop, offset);
      this._isPlaying = true;
    }

    stop() {
      this._isPlaying = false;
      super.stop();
    }

    _createEndTimer() {
      if (isMV) {
        const sourceNode = this._sourceNode;
        if (!sourceNode || sourceNode.loop) {
          return;
        }
        this._endTimer = sourceNode;
      } else {
        const sourceNodes = this._sourceNodes;
        if (sourceNodes.length === 0 || this._loop) {
          return;
        }
        this._endTimer = sourceNodes[sourceNodes.length - 1];
      }
      this._endTimer.addEventListener("ended", this._onEnd);
    }

    _removeEndTimer() {
      if (this._endTimer) {
        this._endTimer.removeEventListener("ended", this._onEnd);
        this._endTimer = null;
      }
    }
  }

  class SpatialAudio extends Audio {
    constructor(url) {
      super(url);
      this._azimuth = 0;
      this._distance = 0;
      this._attenuationDistance = 1;
      this._pitchNode = null;
    }

    get azimuth() {
      return this._azimuth;
    }

    set azimuth(value) {
      this._azimuth = value;
      this._updatePitch();
      this._updatePanner();
    }

    get distance() {
      return this._distance;
    }

    set distance(value) {
      this._distance = value;
      this._updatePanner();
    }

    get attenuationDistance() {
      return this._attenuationDistance;
    }

    set attenuationDistance(value) {
      this._attenuationDistance = value;
      this._updatePanner();
    }

    get pitchChange() {
      return this._pitchChange;
    }

    set pitchChange(value) {
      this._pitchChange = value;
      this._updatePitch();
    }

    setPosition(x, y) {
      this._azimuth = atan2(x, y);
      this._distance = hypot(x, y);
      this._updatePitch();
      this._updatePanner();
    }

    _createPitchNode() {
      this._pitchNode = WebAudio._context.createConstantSource();
      this._pitchNode.start();
      this._updatePitch();
    }

    _updatePitch() {
      if (this._pitchNode) {
        const pitch = this._pitchChange ** cos(this._azimuth);
        this._pitchNode.offset.value = (pitch - 1) * this._pitch;
      }
    }

    // for MV and MZ
    _updatePanner() {
      if (this._pannerNode) {
        const azimuth = this._azimuth;
        const distance = this._distance;
        const pan = lerp(round(azimuth / PI) * PI, azimuth, this._pan);
        this._pannerNode.positionX.value = sin(pan) * distance;
        this._pannerNode.positionZ.value = cos(pan) * distance;
        this._pannerNode.refDistance = this._attenuationDistance;
      }
    }

    // for MV
    _createNodes() {
      super._createNodes();
      this._createPitchNode();
    }

    _connectNodes() {
      super._connectNodes();
      if (this._sourceNode) {
        this._pitchNode.connect(this._sourceNode.playbackRate);
      }
    }

    // for MZ
    _createGainNode() {
      super._createGainNode();
      this._createPitchNode();
    }

    _createSourceNode(index) {
      super._createSourceNode(index);
      if (isMV) {
        // assume it's AudioStreaming.js
        if (index && index.sourceNode) {
          this._pitchNode.connect(index.sourceNode.playbackRate);
        }
        return;
      }
      this._pitchNode.connect(this._sourceNodes[index].playbackRate);
    }
  }

  class FixedPositionProvider {
    constructor(x, y) {
      this._x = x;
      this._y = y;
    }

    update(buffer) {
      buffer.setPosition(this._x, this._y);
    }
  }

  class AbsolutePositionProvider {
    constructor(mapId, x, y) {
      this._mapId = mapId;
      this._x = x;
      this._y = y;
    }

    update(buffer) {
      if ($gameMap && $gameMap.mapId() === this._mapId) {
        const x = $gameMap.deltaX(this._x, $gamePlayer._x);
        const y = $gameMap.deltaY(this._y, $gamePlayer._y);
        buffer.setPosition(x, y);
      }
    }
  }

  class EventPositionProvider {
    constructor(event) {
      this._event = event;
    }

    update(buffer) {
      if ($gameMap && $gameMap.mapId() === this._event._mapId) {
        const x = $gameMap.deltaX(this._event._x, $gamePlayer._x);
        const y = $gameMap.deltaY(this._event._y, $gamePlayer._y);
        buffer.setPosition(x, y);
      }
    }
  }

  class AudioChannel {
    constructor(dir) {
      this.dir = dir;
      this._buffers = [];
    }

    update() {
      this._buffers = this._buffers.filter(({ positionProvider, buffer }) => {
        if (!buffer.isPlaying()) {
          if (buffer.destroy) {
            buffer.destroy();
          }
          return false;
        }
        if (positionProvider) {
          positionProvider.update(buffer);
        }
        return true;
      });
    }

    play(audio, {
      positionProvider = null,
      attenuationDistance = 1,
      pitchChange = 0.8,
    } = {}) {
      const buffer = this.createBuffer(audio, positionProvider !== null);
      if (!buffer) {
        return;
      }
      if (positionProvider !== null) {
        positionProvider.update(buffer);
        buffer.attenuationDistance = attenuationDistance;
        buffer.pitchChange = pitchChange;
      }
      buffer.play(false);
      this._buffers.push({ positionProvider, buffer });
    }

    stopAll() {
      for (const { buffer } of this._buffers) {
        if (buffer.destroy) {
          buffer.destroy();
        } else {
          buffer.stop();
        }
      }
      this._buffers = [];
    }

    createBuffer(audio, spatial) {
      if (this.volume === 0) {
        return null;
      }
      const { name, volume = 0, pitch = 0, pan = 0 } = audio;
      if (!name) {
        return null;
      }
      const ext = AudioManager.audioFileExt();
      const url = `audio/${this.dir}${encodeURIComponent(name + ext)}`;
      const buffer = spatial ? new SpatialAudio(url) : new Audio(url);
      buffer.name = name;
      buffer.volume = (this.volume * volume) / 10000;
      buffer.pitch = pitch / 100;
      buffer.pan = pan / 100;
      return buffer;
    }
  }

  class BuiltinAudioChannel extends AudioChannel {
    constructor(dir, volumeProvider) {
      super(dir);
      this._volumeProvider = volumeProvider;
    }

    get volume() {
      return this._volumeProvider();
    }
  }

  class CustomAudioChannel extends AudioChannel {
    constructor(dir, volume) {
      super(dir);
      this.volume = volume;
    }
  }

  const builtinSeChannel = new BuiltinAudioChannel(
    "se/",
    () => AudioManager.seVolume,
  );
  const mapSeChannel = new CustomAudioChannel(
    "se/",
    parameters.mapSeVolumeDefaultValue,
  );
  const obstacleSeChannel = new CustomAudioChannel(
    "se/",
    parameters.obstacleSeVolumeDefaultValue,
  );
  const eventSeChannel = new CustomAudioChannel(
    "se/",
    parameters.eventSeVolumeDefaultValue,
  );
  Object.defineProperties(ConfigManager, {
    mapSeVolume: {
      get: () => mapSeChannel.volume,
      set: (value) => mapSeChannel.volume = value,
      configurable: true,
    },
    obstacleSeVolume: {
      get: () => obstacleSeChannel.volume,
      set: (value) => obstacleSeChannel.volume = value,
      configurable: true,
    },
    eventSeVolume: {
      get: () => eventSeChannel.volume,
      set: (value) => eventSeChannel.volume = value,
      configurable: true,
    },
  });
  const directions = [
    [0, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];
  const dir4 = [2, 4, 6, 8];

  function getCharacterBoundingBox(character) {
    if (character.getEventTriggerArea) {
      const area = character.getEventTriggerArea();
      const width = area.width - 1;
      const height = area.height - 1;
      return { x: area.x + width / 2, y: area.y + height / 2, width, height };
    }
    return { x: character.x, y: character.y, width: 0, height: 0 };
  }

  function isPlayerNearEvent(event) {
    const page = event.page();
    if (!page || !Game_Event.isInteractable(page.list)) {
      return false;
    }
    const box = getCharacterBoundingBox(event);
    const dx = $gameMap.deltaX(box.x, $gamePlayer.x);
    const dy = $gameMap.deltaY(box.y, $gamePlayer.y);
    const adx = max(abs(dx) - box.width / 2, 0);
    const ady = max(abs(dy) - box.height / 2, 0);
    return (adx === 0 || ady === 0) &&
      adx + ady <= parameters.nearEventDistance;
  }

  function setBumpDir(player, dir) {
    if (dir !== player._lastBumpDir) {
      player._bumpSeWait = 0;
    }
    if (dir !== 0 && player._bumpSeWait === 0) {
      const [dx, dy] = directions[dir];
      mapSeChannel.play(parameters.bumpSe, {
        positionProvider: new FixedPositionProvider(dx, dy),
      });
      player._bumpSeWait = parameters.bumpSeInterval;
    }
    player._lastBumpDir = dir;
  }

  function navigate(destination) {
    $gamePlayer._navigateDestination = destination;
  }

  function stopNavigation() {
    $gamePlayer._navigateDestination = undefined;
  }

  Patcher.patch(ConfigManager, "makeData", {
    postfix({ result }) {
      result.mapSeVolume = mapSeChannel.volume;
      result.obstacleSeVolume = obstacleSeChannel.volume;
      result.eventSeVolume = eventSeChannel.volume;
    },
  });

  Patcher.patch(ConfigManager, "applyData", {
    postfix({ args: [config] }) {
      mapSeChannel.volume = typeof config.mapSeVolume === "number"
        ? config.mapSeVolume
        : parameters.mapSeVolumeDefaultValue;
      obstacleSeChannel.volume = typeof config.obstacleSeVolume === "number"
        ? config.obstacleSeVolume
        : parameters.obstacleSeVolumeDefaultValue;
      eventSeChannel.volume = typeof config.eventSeVolume === "number"
        ? config.eventSeVolume
        : parameters.eventSeVolumeDefaultValue;
    },
  });

  Patcher.patch(AudioManager, "stopSe", {
    postfix() {
      builtinSeChannel.stopAll();
      mapSeChannel.stopAll();
      obstacleSeChannel.stopAll();
      eventSeChannel.stopAll();
    },
  });

  Patcher.patch(Game_Map.prototype, "setup", {
    postfix() {
      mapSeChannel.play(parameters.enterMapSe);
    },
  });

  Patcher.patch(Game_Map.prototype, "update", {
    postfix() {
      if (this.isEventRunning()) {
        for (const event of this.events()) {
          event._nearEventSePlayed = false;
        }
        return;
      }
      const events = [];
      for (const event of this.events()) {
        if (isPlayerNearEvent(event)) {
          if (!event._nearEventSePlayed) {
            events.push(event);
          }
        } else {
          event._nearEventSePlayed = false;
        }
      }
      if (events.length !== 0) {
        const event = events[floor(random() * events.length)];
        const se = parameters.nearEventSeJs.call(event);
        if (se) {
          eventSeChannel.play(se, {
            positionProvider: new EventPositionProvider(event),
          });
        }
        event._nearEventSePlayed = true;
      }
      mapSeChannel.update();
      obstacleSeChannel.update();
      eventSeChannel.update();
    },
  });

  Patcher.patch(Game_Character.prototype, "processMoveCommand", {
    prefix({ args: [command] }) {
      if (command.code === Game_Character.ROUTE_PLAY_SE) {
        const [se] = command.parameters;
        const mapId = $gameMap.mapId();
        builtinSeChannel.play({ ...se, pan: 50 }, {
          positionProvider: new AbsolutePositionProvider(mapId, this.x, this.y),
          attenuationDistance: 4,
        });
        return true;
      }
    },
  });

  Patcher.patch(Game_Player.prototype, "increaseSteps", {
    postfix() {
      const queue = [];
      for (const dir of dir4) {
        let x = this.x;
        let y = this.y;
        for (let i = 1; i <= parameters.nearObstacleDistance; i++) {
          const blocked = !this.canPass(x, y, dir);
          x = $gameMap.roundXWithDirection(x, dir);
          y = $gameMap.roundYWithDirection(y, dir);
          if (blocked) {
            const [dx, dy] = directions[dir];
            queue.push({
              channel: obstacleSeChannel,
              se: parameters.nearObstacleSe,
              positionProvider: new FixedPositionProvider(i * dx, i * dy),
            });
            break;
          }
        }
      }
      if (typeof Yanfly !== "undefined" && Yanfly.RCE) {
        for (const dir of dir4) {
          let x = this.x;
          let y = this.y;
          for (let i = 1; i <= parameters.nearRegionEventDistance; i++) {
            x = $gameMap.roundXWithDirection(x, dir);
            y = $gameMap.roundYWithDirection(y, dir);
            const regionId = $gameMap.regionId(x, y);
            if (!regionId) {
              continue;
            }
            const eventId = $gameMap.getUniqueRegionCommonEvent(regionId) ||
              Yanfly.RCE.RegionEvents[regionId];
            if (!eventId) {
              continue;
            }
            const [dx, dy] = directions[dir];
            queue.push({
              channel: eventSeChannel,
              se: parameters.nearRegionEventSe,
              positionProvider: new FixedPositionProvider(i * dx, i * dy),
            });
          }
        }
      }
      this._stepSeQueue = queue;
      for (const event of $gameMap.events()) {
        event._nearEventSePlayed = false;
      }
    },
  });

  Patcher.patch(Game_Player.prototype, "executeMove", {
    postfix({ args: [dir] }) {
      setBumpDir(this, this.isMovementSucceeded() ? 0 : dir);
    },
  });

  Patcher.patch(Game_Player.prototype, "update", {
    prefix() {
      this._bumpSeWait = this._bumpSeWait || 0;
      this._lastBumpDir = this._lastBumpDir || 0;
      if (this._bumpSeWait > 0) {
        this._bumpSeWait--;
      }
    },
    postfix() {
      const queue = this._stepSeQueue;
      if (queue && queue.length !== 0) {
        const index = floor(random() * queue.length);
        const { channel, se, positionProvider } = queue[index];
        queue[index] = queue[queue.length - 1];
        queue.pop();
        channel.play(se, { positionProvider });
      }
      if (this.canMove()) {
        if (Graphics.frameCount % parameters.navigateSeInterval === 0) {
          const destination = this._navigateDestination;
          if (destination) {
            const { mapId, eventId, x, y } = destination;
            if (mapId === $gameMap.mapId()) {
              const event = eventId ? $gameMap.event(eventId) : null;
              mapSeChannel.play(parameters.navigateSe, {
                positionProvider: event
                  ? new EventPositionProvider(event)
                  : new AbsolutePositionProvider(mapId, x, y),
                attenuationDistance: 4,
              });
            }
          }
        }
      } else {
        this._navigateDestination = undefined;
      }
    },
  });

  Patcher.patch(Game_Event.prototype, "increaseSteps", {
    postfix() {
      mapSeChannel.play(parameters.npcMoveSe, {
        positionProvider: new EventPositionProvider(this),
      });
      this._nearEventSePlayed = false;
    },
  });

  Patcher.patch(Game_Event.prototype, "update", {
    postfix() {
      if (!this.isStopping()) {
        this._idleSeWait = null;
        return;
      }
      const se = parameters.npcIdleSeJs.call(this);
      if (se) {
        this._idleSeWait = this._idleSeWait ||
          floor((random() + 0.5) * se.interval);
        if (--this._idleSeWait <= 0) {
          mapSeChannel.play(se, {
            positionProvider: new EventPositionProvider(this),
            attenuationDistance: 4,
          });
          this._idleSeWait = null;
        }
      }
    },
  });

  Patcher.patch(Game_Interpreter.prototype, "setWaitMode", {
    postfix({ args: [waitMode] }) {
      if (waitMode === "transfer") {
        mapSeChannel.play(parameters.changeMapSe);
      }
    },
  });

  class EnvironmentalSoundsOptionsWindow extends Window_Options {
    makeCommandList() {
      const mapSeVolumeOptionName = parameters.mapSeVolumeOptionName;
      if (mapSeVolumeOptionName) {
        this.addCommand(mapSeVolumeOptionName, "mapSeVolume");
      }
      const obstacleSeVolumeOptionName = parameters.obstacleSeVolumeOptionName;
      if (obstacleSeVolumeOptionName) {
        this.addCommand(obstacleSeVolumeOptionName, "obstacleSeVolume");
      }
      const eventSeVolumeOptionName = parameters.eventSeVolumeOptionName;
      if (eventSeVolumeOptionName) {
        this.addCommand(eventSeVolumeOptionName, "eventSeVolume");
      }
    }
  }

  Patcher.patch(Scene_Options.prototype, "createOptionsWindow", {
    postfix() {
      const window = this._optionsWindow;
      const subwindow = isMV
        ? new EnvironmentalSoundsOptionsWindow()
        : new EnvironmentalSoundsOptionsWindow(this.optionsWindowRect());
      subwindow.setHandler("cancel", () => {
        subwindow.openness = 0;
        subwindow.deactivate();
        window.open();
        window.activate();
      });
      if (PluginManager._scripts.includes("AltMenuScreen3")) {
        subwindow.opacity = 0;
      }
      subwindow.openness = 0;
      subwindow.deactivate();
      this.addWindow(window._environmentalSoundsOptionsWindow = subwindow);
    },
  });

  Patcher.patch(Window_Options.prototype, "addVolumeOptions", {
    postfix() {
      const optionGroupName = parameters.optionGroupName;
      if (optionGroupName) {
        this.addCommand(optionGroupName, "environmentalSounds");
      }
    },
  });

  Patcher.patch(Window_Options.prototype, "statusText", {
    prefix(ctx) {
      const [index] = ctx.args;
      switch (this.commandSymbol(index)) {
        case "environmentalSounds":
          ctx.result = "";
          return true;
      }
    },
  });

  Patcher.patch(Window_Options.prototype, "processOk", {
    prefix() {
      const index = this.index();
      switch (this.commandSymbol(index)) {
        case "environmentalSounds": {
          SoundManager.playOk();
          const subwindow = this._environmentalSoundsOptionsWindow;
          subwindow.open();
          subwindow.activate();
          this.openness = 0;
          this.deactivate();
          return true;
        }
      }
    },
  });

  Patcher.patch(Window_Options.prototype, "cursorRight", {
    prefix() {
      const index = this.index();
      switch (this.commandSymbol(index)) {
        case "environmentalSounds":
          return true;
      }
    },
  });

  Patcher.patch(Window_Options.prototype, "cursorLeft", {
    prefix() {
      const index = this.index();
      switch (this.commandSymbol(index)) {
        case "environmentalSounds":
          return true;
      }
    },
  });

  Game_Event.isInteractable = (list) =>
    list.some((cmd) => cmd.code !== 0 && cmd.code !== 108 && cmd.code !== 408);

  if (hasOptionEx) {
    Patcher.patch(Window_Options.prototype, "restoreDefaultValues", {
      postfix() {
        mapSeChannel.volume = parameters.mapSeVolumeDefaultValue;
        obstacleSeChannel.volume = parameters.obstacleSeVolumeDefaultValue;
        eventSeChannel.volume = parameters.eventSeVolumeDefaultValue;
        this._environmentalSoundsOptionsWindow.refresh();
      },
    });
  }

  if (hasSANAnalogMove) {
    const quantize = (x) => round(x * 256) / 256;

    Patcher.patch(PlayerMover.prototype, "updatePosition", {
      postfix() {
        if (!this.isInputed()) {
          return;
        }
        const inputVelocity = this._velVec;
        const moveVelocity = this._posVec.sub2(this._lasPosVec);
        const inputX = quantize(inputVelocity.x());
        const inputY = quantize(inputVelocity.y());
        const moveX = quantize(moveVelocity.x());
        const moveY = quantize(moveVelocity.y());
        const dx = moveX / inputX < 0.5 ? sign(inputX) : 0;
        const dy = moveY / inputY < 0.5 ? sign(inputY) : 0;
        setBumpDir(
          this.character(),
          dx === 0 && dy === 0 ? 0 : 5 - 3 * dy + dx,
        );
      },
    });
  }

  return {
    FixedPositionProvider,
    AbsolutePositionProvider,
    EventPositionProvider,
    mapSeChannel,
    obstacleSeChannel,
    eventSeChannel,
    navigate,
    stopNavigation,
  };
})();
