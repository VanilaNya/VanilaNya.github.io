/*:
 * @target MV MZ
 * @base Patcher
 * @orderAfter CGMZ_Encyclopedia
 * @orderAfter Doka_RandomItem
 * @orderAfter DTextPicture
 * @orderAfter DuangOnekey
 * @orderAfter EnemyBook
 * @orderAfter FTKR_SkillTreeSystem
 * @orderAfter GALV_Fishing
 * @orderAfter Galv_QuestLog
 * @orderAfter ItemBook
 * @orderAfter kz_CGallery
 * @orderAfter LiuYue_GainItemTips
 * @orderAfter LiuYue_NodeItemBook
 * @orderAfter Mano_InputConfig
 * @orderAfter MOG_BattleResult
 * @orderAfter MOG_PictureGallery
 * @orderAfter MOG_SceneItem
 * @orderAfter MOG_SceneSkill
 * @orderAfter MOG_TreasureHud
 * @orderAfter MOG_TreasurePopup
 * @orderAfter OptionEx
 * @orderAfter SceneGlossary
 * @orderAfter SilvItemLog
 * @orderAfter StateHelp
 * @orderAfter TMSimpleWindow
 * @orderAfter XdRs_PCTips
 * @orderAfter YEP_ClassChangeCore
 * @orderAfter YEP_GabWindow
 * @orderAfter YEP_ItemCore
 * @orderAfter YEP_ItemSynthesis
 * @orderAfter YEP_KeyboardConfig
 * @orderAfter YEP_PartySystem
 * @orderAfter YEP_QuestJournal
 * @orderAfter YEP_RowFormation
 * @orderAfter YEP_SaveCore
 * @orderAfter YEP_SkillLearnSystem
 * @orderAfter YEP_StatAllocation
 * @orderAfter YEP_StatusMenuCore
 * @orderAfter YEP_VictoryAftermath
 * @orderAfter YEP_X_InBattleStatus
 * @orderAfter YEP_X_MessageBacklog
 *
 * @param lockedItemText
 * @text 锁定物品文本
 * @desc 用于 DuangOnekey 插件
 * @type string
 * @default 锁定
 *
 * @param trackedQuestText
 * @text 跟踪任务文本
 * @desc 用于 Galv_QuestLog 插件
 * @type string
 * @default 跟踪
 *
 * @param completedQuestText
 * @text 完成任务文本
 * @desc 用于 Galv_QuestLog 插件
 * @type string
 * @default 完成
 *
 * @param failedQuestText
 * @text 失败任务文本
 * @desc 用于 Galv_QuestLog 插件
 * @type string
 * @default 失败
 *
 * @param lockedActorText
 * @text 锁定角色文本
 * @desc 用于 YEP_PartySystem 插件
 * @type string
 * @default 锁定
 *
 * @param requiredActorText
 * @text 必需角色文本
 * @desc 用于 YEP_PartySystem 插件
 * @type string
 * @default 必需
 *
 * @param announceLeaderHp
 * @text 朗读领队 HP
 * @desc 仅应用于战斗外。战斗中总是朗读所有成员的 HP
 * @type boolean
 * @default true
 *
 * @param announceGold
 * @text 朗读金钱
 * @type boolean
 * @default true
 *
 * @param announceEnemyHp
 * @text 朗读敌人 HP
 * @desc 使用 FTKR_DisplayEnemyParameters、MOG_HPGauge 或 YEP_X_VisualHpGauge 插件时无需设置
 * @type boolean
 * @default false
 *
 * @param announceEnemyMp
 * @text 朗读敌人 MP
 * @desc 使用 FTKR_DisplayEnemyParameters 插件时无需设置
 * @type boolean
 * @default false
 *
 * @param announceEnemyTp
 * @text 朗读敌人 TP
 * @desc 使用 FTKR_DisplayEnemyParameters 插件时无需设置
 * @type boolean
 * @default false
 *
 * @param stripItemCategoryEscapes
 * @text 清除物品种类菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripSkillTypeEscapes
 * @text 清除技能类型菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripEquipCommandEscapes
 * @text 清除装备操作菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripShopCommandEscapes
 * @text 清除商店操作菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripPartyCommandEscapes
 * @text 清除队伍行动菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripActorCommandEscapes
 * @text 清除角色行动菜单控制符
 * @desc 如 \I
 * @type boolean
 * @default false
 *
 * @param stripBattleLogTextAlignTags
 * @text 清除战斗记录文本对齐标签
 * @desc 如 <LEFT>、<CENTER>、<RIGHT>
 * @type boolean
 * @default false
 *
 * @param eventToObjectId
 * @text 事件的对象 ID
 * @desc 对象列表中，对象 ID 为空的事件不展示，对象 ID 相同的相邻事件会被合并为一个而不是分别展示
 * @type struct<eventToObjectId>[]
 * @default []
 *
 * @param objectIdToName
 * @text 对象名称
 * @type struct<objectIdToName>[]
 * @default []
 *
 * @param objectListKeyCode
 * @text 对象列表键码
 * @desc 详见 https://developer.mozilla.org/docs/Web/API/KeyboardEvent/keyCode。需禁用对象列表或用其他插件管理键位映射时填 0
 * @type number
 * @default 77
 *
 * @param disableObjectListMapIds
 * @text 禁用对象列表地图 ID
 * @type number[]
 * @default []
 *
 * @param playerCoordsFormat
 * @text 玩家坐标格式
 * @desc %1：地图 ID，%2：X 坐标，%3：Y 坐标
 * @type string
 * @default 地图 #%1 坐标 %2, %3
 *
 * @param objectListItemFormat
 * @text 对象列表项格式
 * @desc %1：名称，%2：X 坐标，%3：Y 坐标
 * @type string
 * @default %1: %2, %3
 *
 * @param objectListButtonLabel
 * @text 对象列表按钮标签
 * @type string
 * @default 对象列表
 *
 * @param resetTouchModeButtonLabel
 * @text 重置触屏模式按钮标签
 * @desc 用于 SimpleTouchInput 插件
 * @type string
 * @default 无障碍触屏模式
 *
 * @param debugMode
 * @text 调试模式
 * @desc 将输出的文本显示在窗口左上方，并为部分未实现的功能输出警告
 * @type boolean
 * @default false
 *
 * @help
 *
 * 事件备注标签:
 *   <AccessibleName:名称>     # 设置事件的对象名称，其优先级低于“事件的对象 ID”参数。
 *
 * 按键名称:
 *   objectList                # 在地图场景触发时打开对象列表。
 *
 * 插件指令:
 *   CustomTextOutput 文本     # 设置自定义文本输出。留空文本以清除输出。
 */

/*~struct~eventToObjectId:
 * @param event
 * @text 事件
 * @desc 格式（优先级从高到低）：“地图 ID:事件 ID”“地图 ID:事件名称”或“事件名称”
 * @type string
 *
 * @param objectId
 * @text 对象 ID
 * @type string
 */

/*~struct~objectIdToName:
 * @param objectId
 * @text 对象 ID
 * @type string
 *
 * @param name
 * @text 名称
 * @type string
 */

self.Accessibility = (() => {
  "use strict";

  const { abs, round, trunc } = Math;
  const queueMicrotask = (fn) => Promise.resolve().then(() => void fn());
  const isMV = Utils.RPGMAKER_NAME === "MV";
  const hasCGMZEncyclopedia = typeof CGMZ !== "undefined" &&
    !!CGMZ.Encyclopedia;
  const hasDokaRandomItem = typeof Doka_RandomItem !== "undefined";
  const hasDTextPicture = !!Game_Screen.prototype.setDTextPicture;
  const hasDuangOnekey = typeof Window_DuangShopSell !== "undefined";
  const hasEnemyBook = !!Game_System.prototype.addToEnemyBook;
  const hasFTKRSkillTreeSystem = typeof FTKR !== "undefined" && !!FTKR.STS;
  const hasGALVFishing = typeof Galv !== "undefined" && !!Galv.FISH;
  const hasGalvQuestLog = typeof Galv !== "undefined" && !!Galv.QUEST;
  const hasItemBook = !!Game_System.prototype.addToItemBook;
  const hasKZCGallery = !!ImageManager.loadGallery;
  const hasLiuYueGainItemTips = typeof Zzy !== "undefined" && !!Zzy.GIT;
  const hasLiuYueNodeItemBook = typeof Zzy !== "undefined" && !!Zzy.NIB;
  const hasManoInputConfig = typeof Mano_InputConfig !== "undefined";
  const hasMOGBattleResult = typeof BattleResult !== "undefined";
  const hasMOGPictureGallery = typeof Window_PictureList !== "undefined";
  const hasMOGSceneItem = typeof Window_ItemListM !== "undefined";
  const hasMOGSceneSkill = typeof Window_SkillListM !== "undefined";
  const hasMOGTreasureHud = typeof Treasure_Hud !== "undefined";
  const hasMOGTreasurePopup = typeof TreasureIcons !== "undefined";
  const hasOptionEx = !!Window_Options.prototype.restoreDefaultValues;
  const hasSceneGlossary = typeof Window_GlossaryList !== "undefined";
  const hasSilvItemLog = typeof Silv !== "undefined" && !!Silv.ItemLog;
  const hasStateHelp = typeof Imported !== "undefined" && !!Imported.StateHelp;
  const hasTMSimpleWindow = !!Game_Screen.prototype.showSimpleWindow;
  const hasXdRsPCTips = typeof XdRs_PCTip !== "undefined";
  const hasYEPClassChangeCore = typeof Yanfly !== "undefined" && !!Yanfly.CCC;
  const hasYEPGabWindow = typeof Yanfly !== "undefined" && !!Yanfly.Gab;
  const hasYEPItemCore = typeof Yanfly !== "undefined" && !!Yanfly.Item;
  const hasYEPItemSynthesis = typeof Yanfly !== "undefined" && !!Yanfly.IS;
  const hasYEPKeyboardConfig = typeof Yanfly !== "undefined" &&
    !!Yanfly.KeyConfig;
  const hasYEPPartySystem = typeof Yanfly !== "undefined" && !!Yanfly.Party;
  const hasYEPQuestJournal = typeof Yanfly !== "undefined" && !!Yanfly.Quest;
  const hasYEPRowFormation = typeof Yanfly !== "undefined" && !!Yanfly.Row;
  const hasYEPSaveCore = typeof Yanfly !== "undefined" && !!Yanfly.Save;
  const hasYEPSkillLearnSystem = typeof Yanfly !== "undefined" && !!Yanfly.SLS;
  const hasYEPStatAllocation = typeof Yanfly !== "undefined" &&
    !!Yanfly.StatAlc;
  const hasYEPStatusMenuCore = typeof Yanfly !== "undefined" && !!Yanfly.Status;
  const hasYEPVictoryAftermath = typeof Yanfly !== "undefined" && !!Yanfly.VA;
  const hasYEPXInBattleStatus = typeof Yanfly !== "undefined" && !!Yanfly.IBS;
  const hasYEPXMessageBacklog = typeof Yanfly !== "undefined" &&
    Yanfly.MsgBacklog;
  const parameters = PluginManager.parameters("Accessibility");
  {
    const convert = (struct, converters) => {
      for (const [name, converter] of Object.entries(converters)) {
        struct[name] = converter(struct[name]);
      }
    };
    const string = (raw) => `${raw}`;
    const number = (raw) => +raw;
    const boolean = (raw) => raw === "true";
    const array = (converter) => (raw) => {
      const arr = JSON.parse(raw);
      for (const index of arr.keys()) {
        arr[index] = converter(arr[index]);
      }
      return arr;
    };
    const struct = (converters) => (raw) => {
      const obj = JSON.parse(raw);
      convert(obj, converters);
      return obj;
    };
    const eventToObjectId = {
      event: string,
      objectId: string,
    };
    const objectIdToName = {
      objectId: string,
      name: string,
    };
    convert(parameters, {
      lockedItemText: string,
      trackedQuestText: string,
      completedQuestText: string,
      failedQuestText: string,
      lockedActorText: string,
      requiredActorText: string,
      announceLeaderHp: boolean,
      announceGold: boolean,
      announceEnemyHp: boolean,
      announceEnemyMp: boolean,
      announceEnemyTp: boolean,
      stripItemCategoryEscapes: boolean,
      stripSkillTypeEscapes: boolean,
      stripEquipCommandEscapes: boolean,
      stripShopCommandEscapes: boolean,
      stripPartyCommandEscapes: boolean,
      stripActorCommandEscapes: boolean,
      stripBattleLogTextAlignTags: boolean,
      eventToObjectId: array(struct(eventToObjectId)),
      objectIdToName: array(struct(objectIdToName)),
      objectListKeyCode: number,
      disableObjectListMapIds: array(number),
      playerCoordsFormat: string,
      objectListItemFormat: string,
      objectListButtonLabel: string,
      resetTouchModeButtonLabel: string,
      debugMode: boolean,
    });
    console.debug(parameters);
  }

  function compare(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function getObjectsData() {
    return {
      eventToObjectId: new Map(
        parameters.eventToObjectId
          .map(({ event, objectId }) => [event, objectId]),
      ),
      objectIdToName: new Map(
        parameters.objectIdToName
          .map(({ objectId, name }) => [objectId, name]),
      ),
    };
  }

  function getObjectId(data, mapId, event) {
    const eventId = event.eventId();
    const byMapIdAndEventId = data.eventToObjectId.get(`${mapId}:${eventId}`);
    if (byMapIdAndEventId !== undefined) {
      return byMapIdAndEventId;
    }
    const eventData = $dataMap.events[eventId];
    const name = eventData.name;
    const byMapIdAndName = data.eventToObjectId.get(`${mapId}:${name}`);
    if (byMapIdAndName !== undefined) {
      return byMapIdAndName;
    }
    const byName = data.eventToObjectId.get(name);
    if (byName !== undefined) {
      return byName;
    }
    const accessibleNameTag = eventData.meta.AccessibleName;
    if (typeof accessibleNameTag === "string") {
      return { name: accessibleNameTag };
    }
    if (typeof Imported !== "undefined" && Imported.Drill_EventText) {
      const controller = event._drill_ET_controller;
      if (controller && controller._drill_curText) {
        return { name: stripEscapes(controller._drill_curText) };
      }
    }
    if (typeof Moghunter !== "undefined" && Moghunter.charText_Size) {
      const { 1: text } = event._char_text;
      if (text) {
        return { name: text };
      }
    }
    if (
      typeof VisuMZ !== "undefined" && VisuMZ.EventsMoveCore &&
      $gameSystem.eventLabelsVisible()
    ) {
      const label = event._labelWindow;
      if (label && label.text) {
        return { name: stripEscapes(label.text) };
      }
    }
    return parameters.debugMode
      ? { name: `Missing object ID: ${mapId}:${eventId}:${name}` }
      : "";
  }

  function getObjectName(data, id) {
    if (typeof id !== "string") {
      return id.name;
    }
    const name = data.objectIdToName.get(id);
    if (name !== undefined) {
      return name;
    }
    return parameters.debugMode ? `Missing name: ${id}` : "";
  }

  function getObjectNameFromEvent(mapId, event) {
    const data = getObjectsData();
    const id = getObjectId(data, mapId, event);
    return id && getObjectName(data, id);
  }

  function isInteractable(list) {
    return list.some((cmd) =>
      cmd.code !== 0 && cmd.code !== 108 && cmd.code !== 408
    );
  }

  function getCharacterArea(character) {
    if (typeof KMS !== "undefined" && KMS.imported.AreaEvent) {
      return character.getEventTriggerArea();
    }
    return { x: character.x, y: character.y, width: 1, height: 1 };
  }

  const neighborOffsets = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function parsePosition(str) {
    return str.split(",").map(Number);
  }

  function stringifyPosition([x, y]) {
    return `${x},${y}`;
  }

  const textUpdateDelay = 15;
  const pendingTextUpdates = new Map();

  function setTextUnchecked(node, text) {
    node.textContent = "";
    if (text) {
      const id = setTimeout(() => {
        node.textContent = text;
        pendingTextUpdates.delete(node);
      }, textUpdateDelay);
      pendingTextUpdates.set(node, { id, text });
    }
  }

  function setTextIfChanged(node, text) {
    const pending = pendingTextUpdates.get(node);
    if (pending) {
      if (pending.text === text) {
        return;
      }
      clearTimeout(pending.id);
      pendingTextUpdates.delete(node);
    } else if (node.textContent === text) {
      return;
    }
    setTextUnchecked(node, text);
  }

  function reannounceText(node) {
    if (pendingTextUpdates.has(node)) {
      return;
    }
    setTextUnchecked(node, node.textContent);
  }

  const textEscapes =
    // deno-lint-ignore no-control-regex
    /\x1b(?:[_!.{}\\#^<>|$]|[A-Z0-9]+(?:\[\d+\])?)?/gi;
  const textEscapesWithSRDShakingText =
    // deno-lint-ignore no-control-regex
    /\x1b(?:[_!.{}\\#^<>|$]|SHAKE|WAVE|SLIDE|CIRCLE|RESETSHAKE|[A-Z0-9]+(?:\[\d+\])?)?/gi;
  const stripEscapes = (text) =>
    Window_Base.prototype.convertEscapeCharacters(text)
      .replace(textEscapes, "");
  const format = (template, ...args) =>
    template.replace(/%(\d+)/g, (_, pos) => args[Number(pos) - 1]);

  function describeUnimplementedCaseUnchecked(value) {
    return `Unimplemented: case ${JSON.stringify(value)}`;
  }

  function describeUnimplementedCase(value) {
    return parameters.debugMode
      ? describeUnimplementedCaseUnchecked(value)
      : "";
  }

  function appendUnimplementedCase(params, value) {
    if (parameters.debugMode) {
      params.push(describeUnimplementedCaseUnchecked(value));
    }
  }

  function describeObject({ name, description, count, params }) {
    let text = name;
    if (count !== undefined) {
      text += ` × ${count}`;
    }
    if (params && params.length !== 0) {
      text += ` (${params.join(", ")})`;
    }
    if (description) {
      text += `: ${stripEscapes(description)}`;
    }
    return text;
  }

  function getItemCountIfNeeded(window, item) {
    if (window.needsNumber()) {
      const count = $gameParty.numItems(item);
      if (count !== 1) {
        return count;
      }
    }
    return undefined;
  }

  function getSkillCostParams(actor, skill) {
    const params = [];
    if (typeof Yanfly !== "undefined" && Yanfly.SCD) {
      const warmup = actor.warmup(skill.id);
      if (warmup > 0) {
        params.push(format(Yanfly.Param.WUFmt, warmup));
      }
      const cooldown = actor.cooldown(skill.id);
      if (cooldown > 0) {
        params.push(format(Yanfly.Param.CDFmt, cooldown));
      }
    }
    const tpCost = actor.skillTpCost(skill);
    if (tpCost > 0) {
      params.push(`${tpCost} ${TextManager.tpA}`);
    }
    const mpCost = actor.skillMpCost(skill);
    if (mpCost > 0) {
      params.push(`${mpCost} ${TextManager.mpA}`);
    }
    return params;
  }

  const internals = {
    appendBattlerHp(params, battler) {
      params.push(`${TextManager.hpA} ${battler.hp} / ${battler.mhp}`);
    },
    appendBattlerMp(params, battler) {
      params.push(`${TextManager.mpA} ${battler.mp} / ${battler.mmp}`);
    },
    appendBattlerTp(params, battler) {
      params.push(`${TextManager.tpA} ${battler.tp}`);
    },
    appendBattlerStates(params, battler) {
      for (const state of battler.states()) {
        if (state.iconIndex > 0) {
          params.push(state.name);
        }
      }
    },
    appendBattlerBuffs(params, battler) {
      for (let i = 0; i < 8; i++) {
        const value = battler.buff(i);
        if (value) {
          let text = `${value < 0 ? "−" : "+"}${TextManager.param(i)}`;
          const amount = abs(value);
          if (amount > 1) {
            text += ` × ${amount}`;
          }
          params.push(text);
        }
      }
    },
    appendBattlerParams(params, battler) {
      for (let i = 2; i < 8; i++) {
        params.push(`${TextManager.param(i)} ${battler.param(i)}`);
      }
    },
    appendActorStatus(params, actor) {
      internals.appendActorName(params, actor);
      internals.appendActorClass(params, actor);
      internals.appendActorLevel(params, actor);
      internals.appendBattlerStates(params, actor);
      internals.appendBattlerBuffs(params, actor);
      internals.appendBattlerHp(params, actor);
      internals.appendBattlerMp(params, actor);
      if (
        (!isMV && $dataSystem.optDisplayTp) ||
        (typeof Yanfly !== "undefined" && Yanfly.Core &&
          Yanfly.Param.MenuTpGauge === "true")
      ) {
        internals.appendBattlerTp(params, actor);
      }
    },
    appendActorName(params, actor) {
      params.push(actor.name());
    },
    appendActorClass(params, actor) {
      params.push(actor.currentClass().name);
    },
    appendActorNickname(params, actor) {
      params.push(actor.nickname());
    },
    appendActorLevel(params, actor) {
      params.push(`${TextManager.levelA} ${actor.level}`);
    },
    appendActorExp(params, actor) {
      params.push(
        `${format(TextManager.expTotal, TextManager.exp)} ${
          actor.isMaxLevel() ? "-" : actor.currentExp()
        }`,
        `${format(TextManager.expNext, TextManager.level)} ${
          actor.isMaxLevel() ? "-" : actor.nextRequiredExp()
        }`,
      );
    },
    appendActorEquips(params, actor) {
      for (const item of actor.equips()) {
        if (item) {
          params.push(item.name);
        }
      }
    },
    appendActorRestrictions(params, actor) {
      if (actor._locked) {
        params.push(parameters.lockedActorText);
      }
      if (actor._required) {
        params.push(parameters.requiredActorText);
      }
    },
    appendActorProfile(params, actor) {
      const profile = actor.profile();
      if (profile) {
        params.push(stripEscapes(profile));
      }
    },
    describeBattleActor(actor) {
      const params = [];
      internals.appendActorName(params, actor);
      internals.appendBattlerStates(params, actor);
      internals.appendBattlerBuffs(params, actor);
      internals.appendBattlerHp(params, actor);
      internals.appendBattlerMp(params, actor);
      if ($dataSystem.optDisplayTp) {
        internals.appendBattlerTp(params, actor);
      }
      return params.join(", ");
    },
    describeBattleEnemy(enemy) {
      if (typeof Yanfly !== "undefined" && Yanfly.Sel) {
        switch (enemy) {
          case "ALL ALLIES":
            return Yanfly.Param.SelectAllAllies;
          case "ALL ENEMIES":
            return Yanfly.Param.SelectAllFoes;
        }
      }
      const hasFtkrDep = typeof FTKR !== "undefined" && !!FTKR.DEP;
      const params = [enemy.name()];
      internals.appendBattlerStates(params, enemy);
      internals.appendBattlerBuffs(params, enemy);
      if (
        parameters.announceEnemyHp || (hasFtkrDep && FTKR.DEP.enemyHp) ||
        (typeof Moghunter !== "undefined" &&
          Moghunter.hpgauge_enemies === "true") ||
        (typeof Yanfly !== "undefined" && Yanfly.VHG &&
          $gameSystem.showHpGaugeEnemy(enemy.enemyId()))
      ) {
        internals.appendBattlerHp(params, enemy);
      }
      if (parameters.announceEnemyMp || (hasFtkrDep && FTKR.DEP.enemyMp)) {
        internals.appendBattlerMp(params, enemy);
      }
      if (parameters.announceEnemyTp || (hasFtkrDep && FTKR.DEP.enemyTp)) {
        internals.appendBattlerTp(params, enemy);
      }
      return params.join(", ");
    },
  };
  let hpNode;
  let goldNode;
  let mapNameNode;
  let hintNode;
  let objectNameNode;
  let mapPopupNode;
  let popupNode;
  let gabNode;
  let messageNode;
  let battleLogNode;
  let battleStatusNode;
  let notesNode;
  let choiceNode;
  let customMessageNode;
  const simpleWindowNodes = [];

  function clearGlobalState() {
    setTextIfChanged(hpNode, "");
    setTextIfChanged(goldNode, "");
    setTextIfChanged(mapNameNode, "");
    setTextIfChanged(hintNode, "");
  }

  function clearSceneState() {
    setTextIfChanged(objectNameNode, "");
    setTextIfChanged(mapPopupNode, "");
    setTextIfChanged(popupNode, "");
    setTextIfChanged(gabNode, "");
    setTextIfChanged(messageNode, "");
    setTextIfChanged(battleLogNode, "");
    setTextIfChanged(battleStatusNode, "");
    setTextIfChanged(notesNode, "");
    setTextIfChanged(choiceNode, "");
    setTextIfChanged(customMessageNode, "");
  }

  if (parameters.objectListKeyCode) {
    Input.keyMapper[parameters.objectListKeyCode] = "objectList";
  }

  class ObjectListScene extends Scene_MenuBase {
    helpAreaHeight() {
      return 0;
    }

    create() {
      super.create();
      const width = 320;
      const split = Window_Base.prototype.fittingHeight(1);
      this.createPlayerCoordsWindow(width, split);
      this.createObjectListWindow(width, split);
    }

    createPlayerCoordsWindow(width, split) {
      const top = isMV ? 0 : this.mainAreaTop();
      const rect = new Rectangle(0, top, width, split);
      const window = new PlayerCoordsWindow(rect);
      this.addWindow(this._playerCoordsWindow = window);
    }

    createObjectListWindow(width, split) {
      const top = isMV ? 0 : this.mainAreaTop();
      const bottom = isMV ? Graphics.boxHeight : this.mainAreaHeight();
      const rect = new Rectangle(0, top + split, width, bottom - split);
      const window = new ObjectListWindow(rect);
      window.setHandler("ok", () => {
        if (typeof EnvironmentalSounds !== "undefined") {
          const object = window.item();
          const destination = {
            mapId: $gameMap.mapId(),
            eventId: null,
            x: object.x,
            y: object.y,
          };
          if (object.events.length === 1) {
            destination.eventId = object.events[0];
          }
          EnvironmentalSounds.navigate(destination);
        }
        this.popScene();
      });
      window.setHandler("cancel", () => {
        if (typeof EnvironmentalSounds !== "undefined") {
          EnvironmentalSounds.stopNavigation();
        }
        this.popScene();
      });
      this.addWindow(this._objectListWindow = window);
    }

    start() {
      super.start();
      this._playerCoordsWindow.refresh();
      this._objectListWindow.refresh();
      this._objectListWindow.select(0);
      this._objectListWindow.activate();
    }
  }

  class PlayerCoordsWindow extends Window_Base {
    initialize(rect) {
      if (isMV) {
        super.initialize(rect.x, rect.y, rect.width, rect.height);
      } else {
        super.initialize(rect);
      }
    }

    refresh() {
      let rect;
      if (isMV) {
        rect = new Rectangle(0, 0, this.contents.width, this.contents.height);
        rect.pad(-this.textPadding(), 0);
      } else {
        rect = this.baseTextRect();
      }
      const text = format(
        parameters.playerCoordsFormat,
        $gameMap.mapId(),
        $gamePlayer.x,
        $gamePlayer.y,
      );
      this.contents.clear();
      this.drawText(text, rect.x, rect.y, rect.width);
      setTextIfChanged(notesNode, text);
    }
  }

  class ObjectListWindow extends Window_Selectable {
    initialize(rect) {
      this._objects = [];
      if (isMV) {
        super.initialize(rect.x, rect.y, rect.width, rect.height);
      } else {
        super.initialize(rect);
      }
    }

    maxItems() {
      return this._objects.length;
    }

    item() {
      return this._objects[this.index()];
    }

    isCurrentItemEnabled() {
      return this.item() && typeof EnvironmentalSounds !== "undefined";
    }

    drawItem(index) {
      const object = this._objects[index];
      if (!object) {
        return;
      }
      const rect = isMV
        ? this.itemRectForText(index)
        : this.itemLineRect(index);
      const text = format(
        parameters.objectListItemFormat,
        object.name,
        object.x,
        object.y,
      );
      this.drawText(text, rect.x, rect.y, rect.width);
    }

    describeItem(index) {
      const object = this._objects[index];
      if (!object) {
        return "";
      }
      return format(
        parameters.objectListItemFormat,
        object.name,
        object.x,
        object.y,
      );
    }

    refresh() {
      const data = getObjectsData();
      const mapId = $gameMap.mapId();
      const map = new Map();
      for (const event of $gameMap.events()) {
        const page = event.page();
        if (!(page && isInteractable(page.list))) {
          continue;
        }
        const id = getObjectId(data, mapId, event);
        if (!id) {
          continue;
        }
        const object = {
          id,
          events: new Set([event.eventId()]),
          positions: new Set(),
        };
        const area = getCharacterArea(event);
        for (let dx = 0; dx < area.width; dx++) {
          for (let dy = 0; dy < area.height; dy++) {
            object.positions.add(stringifyPosition([area.x + dx, area.y + dy]));
          }
        }
        const neighbors = new Set();
        for (const position of object.positions) {
          const [x, y] = parsePosition(position);
          for (const [dx, dy] of neighborOffsets) {
            neighbors.add(stringifyPosition([x + dx, y + dy]));
          }
        }
        for (const neighbor of neighbors) {
          const tile = map.get(neighbor);
          if (!tile) {
            continue;
          }
          for (const other of tile) {
            if (other.id === object.id) {
              for (const event of other.events) {
                object.events.add(event);
              }
              for (const pos of other.positions) {
                object.positions.add(pos);
                map.get(pos).delete(other);
              }
            }
          }
        }
        for (const position of object.positions) {
          let tile = map.get(position);
          if (!tile) {
            map.set(position, tile = new Set());
          }
          tile.add(object);
        }
      }
      const objectSet = new Set();
      for (const tile of map.values()) {
        for (const object of tile) {
          objectSet.add(object);
        }
      }
      const objects = Array.from(objectSet, (object) => {
        const name = getObjectName(data, object.id);
        const events = Array.from(object.events);
        let count = 0;
        let sumX = 0;
        let sumY = 0;
        for (const position of object.positions) {
          const [x, y] = parsePosition(position);
          count++;
          sumX += x;
          sumY += y;
        }
        const x = round(sumX / count);
        const y = round(sumY / count);
        return { name, events, x, y };
      });
      this._objects = objects.sort((a, b) =>
        compare(a.name, b.name) || a.x - b.x || a.y - b.y
      );
      super.refresh();
    }
  }

  function tryShowObjectList() {
    if (
      !$gameMap.isEventRunning() &&
      !parameters.disableObjectListMapIds.includes($gameMap.mapId())
    ) {
      SoundManager.playOk();
      SceneManager.push(ObjectListScene);
    }
  }

  Patcher.patch(Graphics, "_createAllElements", {
    postfix() {
      hpNode = document.createElement("div");
      goldNode = document.createElement("div");
      mapNameNode = document.createElement("div");
      hintNode = document.createElement("div");
      objectNameNode = document.createElement("div");
      mapPopupNode = document.createElement("div");
      popupNode = document.createElement("div");
      gabNode = document.createElement("div");
      messageNode = document.createElement("div");
      battleLogNode = document.createElement("div");
      battleStatusNode = document.createElement("div");
      notesNode = document.createElement("div");
      choiceNode = document.createElement("div");
      customMessageNode = document.createElement("div");
      if (hasTMSimpleWindow) {
        const maxSimpleWindows = +(
          PluginManager.parameters("TMSimpleWindow").maxSimpleWindows || 8
        );
        for (let i = 0; i < maxSimpleWindows; i++) {
          simpleWindowNodes.push(document.createElement("div"));
        }
      }
      const liveRegion = document.createElement("div");
      liveRegion.style.whiteSpace = "pre-wrap";
      liveRegion.style.color = "white";
      liveRegion.style.textShadow = "0px 0px 4px black";
      liveRegion.setAttribute("aria-live", "polite");
      liveRegion.append(
        hpNode,
        goldNode,
        mapNameNode,
        hintNode,
        objectNameNode,
        mapPopupNode,
        popupNode,
        gabNode,
        messageNode,
        battleLogNode,
        battleStatusNode,
        notesNode,
        choiceNode,
        customMessageNode,
      );
      for (const node of simpleWindowNodes) {
        liveRegion.append(node);
      }
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.top = "8px";
      container.style.left = "8px";
      if (parameters.debugMode) {
        container.style.zIndex = 1000;
      } else {
        container.style.clipPath = "inset(50%)";
      }
      if (parameters.objectListButtonLabel) {
        const objectListButton = document.createElement("button");
        objectListButton.append(parameters.objectListButtonLabel);
        objectListButton.onclick = () => {
          if (SceneManager._scene instanceof Scene_Map) {
            tryShowObjectList();
          }
        };
        container.append(objectListButton, document.createElement("br"));
      }
      if (
        "simpleTouchInput" in ConfigManager &&
        parameters.resetTouchModeButtonLabel
      ) {
        const resetTouchModeButton = document.createElement("button");
        resetTouchModeButton.append(parameters.resetTouchModeButtonLabel);
        resetTouchModeButton.onclick = () => {
          const scene = SceneManager._scene;
          if (scene instanceof Scene_Options) {
            scene._optionsWindow.changeValue("simpleTouchInput", true);
          } else {
            ConfigManager.simpleTouchInput = true;
            ConfigManager.save();
          }
        };
        container.append(resetTouchModeButton, document.createElement("br"));
      }
      container.append(liveRegion);
      document.body.append(container);
    },
  });

  for (
    const key of isMV
      ? ["_createFPSMeter", "_createModeBox", "_createFontLoader"]
      : ["_createFPSCounter"]
  ) {
    Patcher.patch(Graphics, key, {
      postfix() {
        document.body.lastChild.setAttribute("aria-hidden", "true");
      },
    });
  }

  if (isMV) {
    // for debugging; TODO remove
    Patcher.patch(Graphics, "_createVideo", {
      postfix() {
        for (
          const name of [
            "abort",
            "canplay",
            "canplaythrough",
            "durationchange",
            "emptied",
            "ended",
            "error",
            "loadeddata",
            "loadedmetadata",
            "loadstart",
            "pause",
            "play",
            "playing",
            "ratechange",
            "resize",
            "seeked",
            "seeking",
            "stalled",
            "suspend",
            "volumechange",
            "waiting",
          ]
        ) {
          this._video.addEventListener(name, () => {
            console.warn(Date.now(), name);
          });
        }
      },
    });
  }

  function getStartableEvent(x, y, triggers, normal) {
    for (const event of $gameMap.eventsXy(x, y)) {
      if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
        const page = event.page();
        if (page && page.list.length > 1) {
          return event;
        }
      }
    }
    return null;
  }

  function getButtonActionEvent() {
    if ($gameMap.isEventRunning() || !$gamePlayer.canStartLocalEvents()) {
      return null;
    }
    let x = $gamePlayer.x;
    let y = $gamePlayer.y;
    {
      const event = getStartableEvent(x, y, [0], false);
      if (event) {
        return event;
      }
    }
    const direction = $gamePlayer.direction();
    {
      x = $gameMap.roundXWithDirection(x, direction);
      y = $gameMap.roundYWithDirection(y, direction);
      const event = getStartableEvent(x, y, [0, 1, 2], true);
      if (event) {
        return event;
      }
    }
    if ($gameMap.isCounter(x, y)) {
      x = $gameMap.roundXWithDirection(x, direction);
      y = $gameMap.roundYWithDirection(y, direction);
      const event = getStartableEvent(x, y, [0, 1, 2], true);
      if (event) {
        return event;
      }
    }
    return null;
  }

  Patcher.patch(Game_Map.prototype, "update", {
    postfix() {
      if (parameters.announceLeaderHp) {
        const actor = $gameParty.leader();
        setTextIfChanged(
          hpNode,
          actor ? `${TextManager.hpA || "HP"} ${actor.hp} / ${actor.mhp}` : "",
        );
      } else {
        setTextIfChanged(hpNode, "");
      }
      if (parameters.announceGold) {
        setTextIfChanged(
          goldNode,
          `${$gameParty.gold()} ${TextManager.currencyUnit}`,
        );
      } else {
        setTextIfChanged(goldNode, "");
      }
      const event = getButtonActionEvent();
      setTextIfChanged(
        objectNameNode,
        event && isInteractable(event.list())
          ? getObjectNameFromEvent(this.mapId(), event)
          : "",
      );
      if (Input.isTriggered("objectList")) {
        tryShowObjectList();
      }
    },
  });

  Patcher.patch(Game_Interpreter.prototype, "pluginCommand", {
    postfix({ args: [command, args] }) {
      switch (command) {
        case "CustomTextOutput":
          setTextIfChanged(customMessageNode, stripEscapes(args.join(" ")));
          break;
      }
    },
  });

  Patcher.patch(Scene_Base.prototype, "terminate", {
    postfix() {
      clearSceneState();
    },
  });

  Patcher.patch(Scene_Title.prototype, "start", {
    postfix() {
      clearGlobalState();
    },
  });

  Patcher.patch(Scene_Map.prototype, "callMenu", {
    postfix() {
      reannounceText(hpNode);
      reannounceText(goldNode);
    },
  });

  Patcher.patch(Window_Selectable.prototype, "deactivate", {
    prefix() {
      if (!this.active) {
        return;
      }
      if (parameters.debugMode) {
        console.debug(`${this.constructor.name}: deactivate`);
      }
      setTextIfChanged(choiceNode, "");
    },
  });

  Patcher.patch(Window_Selectable.prototype, "select", {
    postfix() {
      queueMicrotask(() => {
        if (!this.active) {
          return;
        }
        const text = this.describeCurrentItem();
        if (parameters.debugMode) {
          console.debug(`${this.constructor.name}: select ${text}`);
        }
        setTextIfChanged(choiceNode, text);
      });
    },
  });

  Patcher.patch(Window_Selectable.prototype, "refresh", {
    postfix() {
      queueMicrotask(() => {
        if (!this.active) {
          return;
        }
        const text = this.describeCurrentItem();
        if (parameters.debugMode) {
          console.debug(`${this.constructor.name}: refresh ${text}`);
        }
        setTextIfChanged(choiceNode, text);
      });
    },
  });

  Patcher.patch(Window_Selectable.prototype, "redrawItem", {
    postfix({ args: [index] }) {
      queueMicrotask(() => {
        if (!(this.active && index === this.index())) {
          return;
        }
        const text = this.describeCurrentItem();
        if (parameters.debugMode) {
          console.debug(`${this.constructor.name}: redraw ${text}`);
        }
        setTextIfChanged(choiceNode, text);
      });
    },
  });

  Patcher.patch(Window_ShopNumber.prototype, "refresh", {
    postfix() {
      queueMicrotask(() => {
        if (!this.active) {
          return;
        }
        const text = this.describeCurrentItem();
        if (parameters.debugMode) {
          console.debug(`${this.constructor.name}: refresh ${text}`);
        }
        setTextIfChanged(choiceNode, text);
      });
    },
  });

  Patcher.patch(Window_NameInput.prototype, "updateCursor", {
    postfix() {
      queueMicrotask(() => {
        if (!this.active) {
          return;
        }
        const text = this.describeCurrentItem();
        if (parameters.debugMode) {
          console.debug(`${this.constructor.name}: updateCursor ${text}`);
        }
        setTextIfChanged(choiceNode, text);
      });
    },
  });

  Patcher.patch(Window_Message.prototype, "startMessage", {
    postfix() {
      const state = this._textState;
      const name = isMV
        ? typeof Yanfly !== "undefined" && Yanfly.nameWindow &&
            (Yanfly.nameWindow.isOpening() || Yanfly.nameWindow.isOpen())
          ? stripEscapes(Yanfly.nameWindow._text)
          : $gameMessage.messagehasname
          ? $gameMessage._texts[0] || ""
          : ""
        : stripEscapes($gameMessage.speakerName());
      let text = state.text.replace(
        typeof SRD !== "undefined" && SRD.ShakingText
          ? textEscapesWithSRDShakingText
          : textEscapes,
        "",
      );
      if (name) {
        text = `${name}: ${text}`;
      }
      setTextIfChanged(messageNode, text);
    },
  });

  Patcher.patch(Window_Message.prototype, "terminateMessage", {
    postfix() {
      setTextIfChanged(messageNode, "");
    },
  });

  Patcher.patch(Window_ScrollText.prototype, "startMessage", {
    postfix() {
      setTextIfChanged(messageNode, stripEscapes(this._text));
    },
  });

  Patcher.patch(Window_ScrollText.prototype, "terminateMessage", {
    postfix() {
      setTextIfChanged(messageNode, "");
    },
  });

  Patcher.patch(Window_MapName.prototype, "refresh", {
    postfix() {
      const mapName = $gameMap.displayName();
      setTextIfChanged(mapNameNode, mapName);
    },
  });

  Patcher.patch(Window_BattleLog.prototype, "refresh", {
    postfix() {
      const lines = this._lines;
      const count = lines.length;
      if (count === 0) {
        setTextIfChanged(battleLogNode, "");
        return;
      }
      let text = stripEscapes(lines[count - 1]);
      if (typeof Yanfly !== "undefined" && Yanfly.BEC) {
        text = text.replace(/<(?:CENTER|SIMPLE)>/, "");
      }
      if (parameters.stripBattleLogTextAlignTags) {
        text = text.replace(/<(?:LEFT|CENTER|RIGHT)>/gi, "");
      }
      setTextIfChanged(battleLogNode, text);
    },
  });

  Patcher.patch(Scene_Battle.prototype, "updateBattleProcess", {
    postfix() {
      const actor = BattleManager.actor();
      setTextIfChanged(
        battleStatusNode,
        actor ? internals.describeBattleActor(actor) : "",
      );
    },
  });

  Window_Selectable.prototype.describeCurrentItem = function () {
    const length = this.maxItems();
    const index = this.index();
    if (index < 0 || index >= length) {
      return "";
    }
    if (this.cursorAll()) {
      const items = [];
      for (let i = 0; i < length; i++) {
        items.push(this.describeItem(i));
      }
      return items.join("\n");
    }
    return this.describeItem(index);
  };

  Window_Selectable.prototype.describeItem = function () {
    return parameters.debugMode
      ? `Unimplemented: ${this.constructor.name}.prototype.describeItem`
      : "";
  };

  Window_Command.prototype.describeItem = function (index) {
    return this.commandName(index);
  };

  Window_MenuStatus.prototype.describeItem = function (index) {
    const actor = $gameParty.members()[index];
    const params = [];
    internals.appendActorStatus(params, actor);
    return params.join(", ");
  };

  if (parameters.stripItemCategoryEscapes) {
    Window_ItemCategory.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  Window_ItemList.prototype.describeItem = function (index) {
    const item = this._data[index];
    if (!item) {
      return "";
    }
    const name = item.name;
    const description = item.description;
    const count = getItemCountIfNeeded(this, item);
    const params = [];
    if (
      hasYEPItemCore && typeof Window_ItemStatus !== "undefined" &&
      this._statusWindow instanceof Window_ItemStatus
    ) {
      const appendNumber = (name, value) => {
        if (value) {
          params.push(`${name} ${value < 0 ? "−" : "+"}${abs(value)}`);
        }
      };
      const appendPercentage = (name, value) => {
        if (value) {
          params.push(
            `${name} ${value < 0 ? "−" : "+"}${abs(trunc(value * 100))}%`,
          );
        }
      };
      const appendList = (name, list) => {
        if (list.length !== 0) {
          params.push(`${name} ${list.join(", ")}`);
        }
      };
      if (DataManager.isWeapon(item) || DataManager.isArmor(item)) {
        for (let i = 0; i < 8; i++) {
          appendNumber(TextManager.param(i), item.params[i]);
        }
      } else if (DataManager.isItem(item)) {
        let recoverMaxHp = 0;
        let recoverHp = 0;
        let recoverMaxMp = 0;
        let recoverMp = 0;
        const addStates = [];
        const removeStates = [];
        const addBuffs = [];
        const removeBuffs = [];
        for (const effect of item.effects) {
          switch (effect.code) {
            case Game_Action.EFFECT_RECOVER_HP:
              recoverMaxHp += effect.value1;
              recoverHp += effect.value2;
              break;
            case Game_Action.EFFECT_RECOVER_MP:
              recoverMaxMp += effect.value1;
              recoverMp += effect.value2;
              break;
            case Game_Action.EFFECT_ADD_STATE: {
              const state = $dataStates[effect.dataId];
              if (state) {
                addStates.push(state.name);
              }
              break;
            }
            case Game_Action.EFFECT_REMOVE_STATE: {
              const state = $dataStates[effect.dataId];
              if (state) {
                removeStates.push(state.name);
              }
              break;
            }
            case Game_Action.EFFECT_ADD_BUFF:
              addBuffs.push(`+${TextManager.param(effect.dataId)}`);
              break;
            case Game_Action.EFFECT_ADD_DEBUFF:
              addBuffs.push(`−${TextManager.param(effect.dataId)}`);
              break;
            case Game_Action.EFFECT_REMOVE_BUFF:
              removeBuffs.push(`+${TextManager.param(effect.dataId)}`);
              break;
            case Game_Action.EFFECT_REMOVE_DEBUFF:
              removeBuffs.push(`−${TextManager.param(effect.dataId)}`);
              break;
          }
        }
        const fmt = Yanfly.Param.ItemRecoverFmt;
        appendPercentage(format(fmt, TextManager.param(0)), recoverMaxHp);
        appendNumber(format(fmt, TextManager.hp), recoverHp);
        appendPercentage(format(fmt, TextManager.param(1)), recoverMaxMp);
        appendNumber(format(fmt, TextManager.mp), recoverMp);
        appendList(Yanfly.Param.ItemAddState, addStates);
        appendList(Yanfly.Param.ItemRemoveState, removeStates);
        appendList(Yanfly.Param.ItemAddBuff, addBuffs);
        appendList(Yanfly.Param.ItemRemoveBuff, removeBuffs);
      }
    }
    return describeObject({ name, description, count, params });
  };

  if (parameters.stripSkillTypeEscapes) {
    Window_SkillType.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  Window_SkillList.prototype.describeItem = function (index) {
    const skill = this._data[index];
    if (!skill) {
      return "";
    }
    const name = skill.name;
    const description = skill.description;
    const params = getSkillCostParams(this._actor, skill);
    return describeObject({ name, description, params });
  };

  if (parameters.stripEquipCommandEscapes) {
    Window_EquipCommand.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  Window_EquipSlot.prototype.describeItem = function (index) {
    const actor = this._actor;
    if (!actor) {
      return "";
    }
    let text = isMV ? this.slotName(index) : this.actorSlotName(actor, index);
    const item = actor.equips()[index];
    if (item) {
      text += `: ${item.name}`;
    } else if (typeof Yanfly !== "undefined" && Yanfly.Equip) {
      text += `: ${Yanfly.Param.EquipEmptyText}`;
    }
    return text;
  };

  Window_EquipItem.prototype.describeItem = function (index) {
    const params = [];
    const statusWindow = this._statusWindow;
    if (statusWindow) {
      const actor = statusWindow._actor;
      const tempActor = statusWindow._tempActor;
      if (actor && tempActor) {
        for (let i = 2; i < 8; i++) {
          const value = actor.param(i);
          const newValue = tempActor.param(i);
          if (value !== newValue) {
            params.push(`${TextManager.param(i)} ${value} → ${newValue}`);
          }
        }
      }
    }
    const item = this._data[index];
    if (!item) {
      if (typeof Yanfly !== "undefined" && Yanfly.Equip) {
        let text = Yanfly.Param.EquipRemoveText;
        if (params.length !== 0) {
          text += ` (${params.join(", ")})`;
        }
        return text;
      }
      return params.join(", ");
    }
    const name = item.name;
    const description = item.description;
    const count = getItemCountIfNeeded(this, item);
    return describeObject({ name, description, count, params });
  };

  Window_Status.prototype.describeCurrentItem = function () {
    const actor = this._actor;
    if (!actor) {
      return "";
    }
    const params = [];
    internals.appendActorName(params, actor);
    internals.appendActorClass(params, actor);
    internals.appendActorNickname(params, actor);
    internals.appendActorLevel(params, actor);
    internals.appendBattlerStates(params, actor);
    internals.appendBattlerBuffs(params, actor);
    internals.appendBattlerHp(params, actor);
    internals.appendBattlerMp(params, actor);
    if (!isMV && $dataSystem.optDisplayTp) {
      internals.appendBattlerTp(params, actor);
    }
    internals.appendActorExp(params, actor);
    internals.appendBattlerParams(params, actor);
    internals.appendActorEquips(params, actor);
    internals.appendActorProfile(params, actor);
    return params.join(", ");
  };

  Window_Options.prototype.describeItem = function (index) {
    return `${this.commandName(index)} ${this.statusText(index)}`;
  };

  Window_SavefileList.prototype.describeItem = function (index) {
    const id = isMV ? index + 1 : this.indexToSavefileId(index);
    const info = isMV
      ? DataManager.loadSavefileInfo(id)
      : DataManager.savefileInfo(id);
    const name = id === 0
      ? TextManager.autosave
      : typeof Zzy !== "undefined" && Zzy.ASF &&
          $gameSystem.getZzyASFIsSetUp() &&
          $gameSystem.getZzyASFSaveText() &&
          id === $gameSystem.getZzyASFAutoSaveId()
      ? $gameSystem.getZzyASFSaveText()
      : id <= 3 && PluginManager._scripts.includes("PY_AutoSave")
      ? `${PluginManager.parameters("PY_AutoSave")["存档文本"]}`
      : `${TextManager.file} ${id}`;
    const params = [];
    if (hasYEPSaveCore) {
      if (Yanfly.Param.SaveInfoTitle && info && info.title) {
        params.push(info.title);
      }
      if (DataManager.isThisGameFile(id)) {
        const originalLength = params.length;
        try {
          const file = JsonEx.parse(StorageManager.load(id));
          const maxActors = file.party.maxBattleMembers();
          for (let i = 0; i < maxActors; i++) {
            const actor = file.actors._data[file.party._actors[i]];
            if (actor) {
              if (
                Yanfly.Param.SaveInfoPartyType !== 0 ||
                Yanfly.Param.SaveInfoActorName
              ) {
                params.push(actor._name);
              }
              if (Yanfly.Param.SaveInfoActorLv) {
                params.push(stripEscapes(format(
                  Yanfly.Param.SaveInfoActorLvFmt,
                  TextManager.levelA,
                  TextManager.level,
                  actor.level,
                )));
              }
            }
          }
          for (
            const type of [
              ...Yanfly.Param.SaveInfoDataCol1,
              ...Yanfly.Param.SaveInfoDataCol2,
              ...Yanfly.Param.SaveInfoDataCol3,
              ...Yanfly.Param.SaveInfoDataCol4,
            ]
          ) {
            const match =
              /^\s*(?:(LOCATION)|(PLAYTIME)|(SAVE COUNT)|(GOLD COUNT))\s*$|VARIABLE (\d+)|.*TEXT:(.*)/i
                .exec(type);
            if (!match) {
              continue;
            }
            if (match[1]) {
              const mapName = (
                Yanfly.Param.SaveMapDisplayName
                  ? file.map.locationDisplayName
                  : ""
              ) || $dataMapInfos[file.map._mapId].name;
              params.push(`${Yanfly.Param.SaveVocabLocation} ${mapName}`);
              continue;
            }
            if (match[2]) {
              if (info) {
                const { playtime } = info;
                if (playtime) {
                  params.push(`${Yanfly.Param.SaveVocabPlaytime} ${playtime}`);
                }
              }
              continue;
            }
            if (match[3]) {
              const saveCount = file.system._saveCount;
              params.push(`${Yanfly.Param.SaveVocabSaveCount} ${saveCount}`);
              continue;
            }
            if (match[4]) {
              const gold = file.party._gold;
              params.push(format(
                Yanfly.Param.SaveVocabGoldCount
                  ? `${Yanfly.Param.SaveVocabGoldCount} %2`
                  : "%2 %1",
                TextManager.currencyUnit,
                gold,
              ));
              continue;
            }
            if (match[5]) {
              const id = Number(match[5]);
              const rawName = $dataSystem.variables[id];
              const name = stripEscapes(rawName.replace(/<<.*?>>/, ""));
              const value = file.variables._data[id] || 0;
              params.push(`${name} ${value}`);
              continue;
            }
            if (match[6]) {
              params.push(stripEscapes(match[6]));
              continue;
            }
          }
        } catch (e) {
          console.error(e);
          params.length = originalLength;
          params.push(Yanfly.Param.SaveInfoInvalid);
        }
      } else {
        params.push(
          info ? Yanfly.Param.SaveInfoInvalid : Yanfly.Param.SaveInfoEmpty,
        );
      }
    } else if (info) {
      const { title, characters, playtime } = info;
      if (title) {
        params.push(title);
      }
      if (playtime) {
        params.push(playtime);
      }
      if (characters && (!isMV || DataManager.isThisGameFile(id))) {
        for (const [characterName, characterIndex] of characters) {
          const actor = $dataActors.find((actor) =>
            actor && actor.name &&
            actor.characterName === characterName &&
            actor.characterIndex === characterIndex
          );
          if (actor) {
            params.push(actor.name);
          }
        }
      }
    }
    return describeObject({ name, params });
  };

  if (parameters.stripShopCommandEscapes) {
    Window_ShopCommand.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  Window_ShopBuy.prototype.describeItem = function (index) {
    const item = this._data[index];
    if (!item) {
      return "";
    }
    const name = item.name;
    const description = item.description;
    const params = [];
    let hasCustomCurrency = false;
    if (typeof Yanfly !== "undefined" && Yanfly.MC) {
      if (item.itemBuyPrices) {
        for (const itemId of item.itemBuyPrices) {
          const currency = $dataItems[itemId];
          if (!currency) {
            continue;
          }
          const amount = item.itemBuyPrice[itemId];
          params.push(`${currency.name} × ${amount}`);
          hasCustomCurrency = true;
        }
      }
      if (item.weaponBuyPrices) {
        for (const weaponId of item.weaponBuyPrices) {
          const currency = $dataWeapons[weaponId];
          if (!currency) {
            continue;
          }
          const amount = item.weaponBuyPrice[weaponId];
          params.push(`${currency.name} × ${amount}`);
          hasCustomCurrency = true;
        }
      }
      if (item.armorBuyPrices) {
        for (const armorId of item.armorBuyPrices) {
          const currency = $dataArmors[armorId];
          if (!currency) {
            continue;
          }
          const amount = item.armorBuyPrice[armorId];
          params.push(`${currency.name} × ${amount}`);
          hasCustomCurrency = true;
        }
      }
      if (item.variableBuyPrices) {
        for (const variableId of item.variableBuyPrices) {
          const name = $dataSystem.variables[variableId] || "";
          const unit = name.replace(/\\I\[\d+]/gi, "").replace(/<<.*?>>/gi, "");
          const amount = item.variableBuyPrice[variableId];
          params.push(`${amount} ${unit}`);
          hasCustomCurrency = true;
        }
      }
    }
    const price = this.price(item);
    if (price > 0 || !hasCustomCurrency) {
      params.push(`${price} ${TextManager.currencyUnit}`);
    }
    params.push(`${TextManager.possession} ${$gameParty.numItems(item)}`);
    const paramId = DataManager.isWeapon(item)
      ? 2
      : DataManager.isArmor(item)
      ? 3
      : null;
    if (paramId !== null) {
      const equipType = item.etypeId;
      for (const actor of $gameParty.members()) {
        if (!actor.canEquip(item)) {
          continue;
        }
        const slots = actor.equipSlots();
        const equips = actor.equips();
        let worstEquip = null;
        let worstParam = Infinity;
        for (let i = 0, len = slots.length; i < len; i++) {
          if (slots[i] !== equipType) {
            continue;
          }
          const equip = equips[i];
          if (!equip) {
            continue;
          }
          const param = equip.params[paramId];
          if (param < worstParam) {
            worstEquip = equip;
            worstParam = param;
          }
        }
        const equipName = worstEquip ? worstEquip.name : "";
        const value = worstEquip ? worstParam : 0;
        const newValue = item.params[paramId];
        const change = newValue - value;
        params.push(
          `${actor.name()} ${equipName}${change < 0 ? "−" : "+"}${abs(change)}`,
        );
      }
    }
    return describeObject({ name, description, params });
  };

  Window_ShopNumber.prototype.describeCurrentItem = function () {
    const item = this._item;
    const name = item.name;
    const count = this._number;
    const params = [`${this._price * count} ${TextManager.currencyUnit}`];
    return describeObject({ name, count, params });
  };

  Window_NameInput.prototype.describeItem = function (index) {
    return this.table()[this._page][index];
  };

  Window_ChoiceList.prototype.describeItem = function (index) {
    return stripEscapes(this.commandName(index));
  };

  Window_NumberInput.prototype.describeItem = function (index) {
    return this._number.padZero(this._maxDigits).charAt(index);
  };

  if (parameters.stripPartyCommandEscapes) {
    Window_PartyCommand.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  if (parameters.stripActorCommandEscapes) {
    Window_ActorCommand.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  Window_BattleStatus.prototype.describeItem = function (index) {
    const actor = $gameParty.battleMembers()[index];
    return internals.describeBattleActor(actor);
  };

  function getSpecialTarget() {
    if (
      !(typeof Yanfly !== "undefined" && Yanfly.BEC &&
        Yanfly.Param.BECSelectHelp)
    ) {
      return null;
    }
    const action = BattleManager.inputtingAction();
    if (!action) {
      return null;
    }
    const item = action.item();
    if (!item) {
      return null;
    }
    switch (item.scope) {
      case 2:
        return format(Yanfly.Param.BECHelpAllTx, Yanfly.Param.BECHelpEnemiesTx);
      case 3:
        return format(
          Yanfly.Param.BECHelpRandTx,
          Yanfly.Param.BECHelpEnemyTx,
          1,
        );
      case 4:
        return format(
          Yanfly.Param.BECHelpRandTx,
          Yanfly.Param.BECHelpEnemiesTx,
          2,
        );
      case 5:
        return format(
          Yanfly.Param.BECHelpRandTx,
          Yanfly.Param.BECHelpEnemiesTx,
          3,
        );
      case 6:
        return format(
          Yanfly.Param.BECHelpRandTx,
          Yanfly.Param.BECHelpEnemiesTx,
          4,
        );
      case 8:
      case 10:
        return format(Yanfly.Param.BECHelpAllTx, Yanfly.Param.BECHelpAlliesTx);
      case 11:
        return Yanfly.Param.BECHelpUserTx;
      default:
        return null;
    }
  }

  Window_BattleActor.prototype.describeItem = function (index) {
    const specialTarget = getSpecialTarget();
    if (specialTarget !== null) {
      return specialTarget;
    }
    const actor = $gameParty.battleMembers()[index];
    return internals.describeBattleActor(actor);
  };

  Window_BattleEnemy.prototype.describeItem = function (index) {
    const specialTarget = getSpecialTarget();
    if (specialTarget !== null) {
      return specialTarget;
    }
    const enemy = this._enemies[index];
    return internals.describeBattleEnemy(enemy);
  };

  Window_DebugRange.prototype.describeItem = function (index) {
    let type = "S";
    if (index >= this._maxSwitches) {
      type = "V";
      index -= this._maxSwitches;
    }
    index *= 10;
    return `${type} [${index + 1}-${index + 10}]`;
  };

  Window_DebugEdit.prototype.describeItem = function (index) {
    index += this._topId;
    return `${index}: ${this.itemName(index)} ${this.itemStatus(index)}`;
  };

  if (hasCGMZEncyclopedia) {
    const getPercentCompletion = (symbol) => {
      const total = $cgmz.getEncyclopediaEntries(symbol);
      const discovered = $cgmz.getEncyclopediaDiscovered(symbol);
      return (discovered / total * 100).toFixed(CGMZ.Encyclopedia.DecimalSpots);
    };

    Patcher.patch(CGMZ_Window_EncyclopediaTotals.prototype, "refresh", {
      postfix() {
        const params = [
          `${this._name}${getPercentCompletion(this._symbol)}%`,
          `${CGMZ.Encyclopedia.TotalText}${getPercentCompletion("total")}%`,
        ];
        setTextIfChanged(notesNode, params.join(", "));
      },
    });

    Patcher.patch(CGMZ_Window_EncyclopediaDisplay.prototype, "activate", {
      postfix() {
        queueMicrotask(() => {
          if (!this.active) {
            return;
          }
          const data = this._data;
          const params = [];
          if (data._discovered) {
            switch (this._symbol) {
              case "bestiary":
                appendUnimplementedCase(params, "bestiary");
                break;
              case "items": {
                const item = $dataItems[data._id];
                const effectTracker = this.populateEffectTracker(item.effects);
                for (const section of CGMZ.Encyclopedia.ItemDisplayInfo) {
                  switch (section) {
                    case "Name":
                      params.push(stripEscapes(item.name));
                      break;
                    case "Price":
                      appendUnimplementedCase(params, "Price");
                      break;
                    case "Key Item":
                      appendUnimplementedCase(params, "Key Item");
                      break;
                    case "Possession":
                      appendUnimplementedCase(params, "Possession");
                      break;
                    case "Success Rate":
                      appendUnimplementedCase(params, "Success Rate");
                      break;
                    case "Consumable":
                      appendUnimplementedCase(params, "Consumable");
                      break;
                    case "TP Gain":
                      appendUnimplementedCase(params, "TP Gain");
                      break;
                    case "Effects":
                      appendUnimplementedCase(params, "Effects");
                      break;
                    case "Description": {
                      const description = item.description;
                      params.push(
                        CGMZ.Encyclopedia.DescriptionText +
                          stripEscapes(description),
                      );
                      break;
                    }
                    case "Note": {
                      const notes = item.meta.cgmzdesc;
                      if (notes) {
                        params.push(
                          CGMZ.Encyclopedia.NoteText + stripEscapes(notes),
                        );
                      }
                      break;
                    }
                    case "Info Header":
                      params.push(CGMZ.Encyclopedia.ItemInfoHeaderText);
                      break;
                    case "Effect Header":
                      if (this.hasEffects(effectTracker)) {
                        params.push(CGMZ.Encyclopedia.ItemEffectHeaderText);
                      }
                      break;
                    case "Note Header":
                      if (item.meta.cgmzdesc) {
                        params.push(CGMZ.Encyclopedia.ItemNoteHeaderText);
                      }
                      break;
                    case "Description Header":
                      params.push(CGMZ.Encyclopedia.ItemDescriptionHeaderText);
                      break;
                  }
                }
                break;
              }
              case "armors":
                appendUnimplementedCase(params, "armors");
                break;
              case "weapons":
                appendUnimplementedCase(params, "weapons");
                break;
              case "skills":
                appendUnimplementedCase(params, "skills");
                break;
              case "states":
                appendUnimplementedCase(params, "states");
                break;
              case "actors":
                appendUnimplementedCase(params, "actors");
                break;
              default:
                for (const section of CGMZ.Encyclopedia.CustomDisplayInfo) {
                  switch (section) {
                    case "Name": {
                      const name = data._displayName || data._name;
                      params.push(stripEscapes(name));
                      break;
                    }
                    case "Description": {
                      const description = data._description
                        .replace(/\\cgmzencdescimg\[\d+\]/g, "");
                      params.push(
                        CGMZ.Encyclopedia.DescriptionText +
                          stripEscapes(description),
                      );
                      break;
                    }
                    case "Sketch Header":
                      if (data._sketch.length !== 0) {
                        params.push(CGMZ.Encyclopedia.CustomSketchHeaderText);
                      }
                      break;
                    case "Description Header":
                      if (data._description) {
                        params.push(
                          CGMZ.Encyclopedia.CustomDescriptionHeaderText,
                        );
                      }
                      break;
                  }
                }
            }
          } else {
            params.push(CGMZ.Encyclopedia.UnknownEntryDisplay);
          }
          setTextIfChanged(choiceNode, params.join(", "));
        });
      },
    });

    Patcher.patch(CGMZ_Window_EncyclopediaDisplay.prototype, "deactivate", {
      postfix() {
        setTextIfChanged(choiceNode, "");
      },
    });

    // TODO remove when the bug is fixed upstream
    CGMZ_Window_EncyclopediaTotals.prototype.setItem = function (data) {
      if (this._symbol === data.symbol && this._name === data.ext) {
        return;
      }
      this._symbol = data.symbol;
      this._name = data.ext;
      this.refresh();
    };

    CGMZ_Window_EncyclopediaCategory.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };

    CGMZ_Window_EncyclopediaList.prototype.describeItem = function (index) {
      const data = this._data[index];
      let text = data._discovered
        ? this.getItemName(this._symbol, data._id)
        : CGMZ.Encyclopedia.UnknownEntry;
      if (CGMZ.Encyclopedia.NumberEntries) {
        text = `${index + 1}. ${text}`;
      }
      if (CGMZ.Encyclopedia.ListWindowEnableTextCodes) {
        text = stripEscapes(text);
      }
      return text;
    };
  }

  if (hasDokaRandomItem) {
    delete Window_RandomItemList.prototype.update;

    Window_RandomItemList.prototype.maxItems = function () {
      const list = Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1];
      return list.length;
    };

    Window_RandomItemList.prototype.describeItem = function (index) {
      const list = Doka_RandomItem.lists[Doka_RandomItem.listIndex - 1];
      const total = list.reduce((acc, { rate }) => acc + (rate || 0), 0);
      const { object: item, num: count, rate: weight } = list[index];
      let text = Doka_RandomItem.parameters.null_description;
      if (item) {
        text = item.name;
        if (count !== 1) {
          text += ` × ${count}`;
        }
      }
      const percentage = (weight / total * 100)
        .toFixed(Doka_RandomItem.parameters.fixed);
      return `${text}: ${percentage}%`;
    };
  }

  if (hasDTextPicture) {
    Patcher.patch(Game_Screen.prototype, "setDTextPicture", {
      postfix() {
        const text = this.dTextValue.replace(textEscapes, "");
        setTextIfChanged(hintNode, text);
      },
    });
  }

  if (hasDuangOnekey) {
    Window_DuangShopSell.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (!item) {
        return "";
      }
      const price = round(item.price / Duang.sale_price_rate);
      const name = item.name;
      const description = item.description;
      const params = [];
      if (item.tab === "tab") {
        params.push(parameters.lockedItemText);
      }
      params.push(`${price} ${TextManager.currencyUnit}`);
      return describeObject({ name, description, params });
    };
  }

  if (hasEnemyBook) {
    const enemyBookParameters = PluginManager.parameters("EnemyBook");
    const unknownData = `${enemyBookParameters["Unknown Data"] || "??????"}`;

    Patcher.findClass(Window_Selectable, "Window_EnemyBookIndex", (C) => {
      C.prototype.describeItem = function (index) {
        const enemy = this._list[index];
        if (!$gameSystem.isInEnemyBook(enemy)) {
          return unknownData;
        }
        const name = enemy.name;
        const description = [
          enemy.meta.desc1,
          enemy.meta.desc2,
          enemy.meta.desc3,
          enemy.meta.desc4,
        ].join("\n").trim();
        const params = [];
        for (let i = 0; i < 8; i++) {
          params.push(`${TextManager.param(i)} ${enemy.params[i]}`);
        }
        if (enemy.exp > 0) {
          params.push(`${enemy.exp} ${TextManager.expA}`);
        }
        if (enemy.gold > 0) {
          params.push(`${enemy.gold} ${TextManager.currencyUnit}`);
        }
        return describeObject({ name, description, params });
      };
    });
  }

  if (hasFTKRSkillTreeSystem) {
    Window_TreeType.prototype.describeItem = function (index) {
      const item = $dataWeapons[this._data[index]];
      return item ? item.name : "";
    };
  }

  if (hasGALVFishing) {
    Patcher.patch(Galv.FISH, "addRecords", {
      postfix({ args: [fishId, length, weight] }) {
        const params = [
          Galv.FISH.fish[fishId].customText ||
          `${Galv.FISH.caughtText} ${Galv.FISH.fishName(fishId)}`,
          `${Galv.FISH.txtLength} ${length}`,
          `${Galv.FISH.txtWeight} ${weight}`,
        ];
        setTextIfChanged(choiceNode, params.join("\n"));
      },
    });

    Patcher.patch(Scene_FishRecords.prototype, "start", {
      postfix() {
        const caughtFishes = Object.keys($gameSystem.fishing.caught).length;
        const params = [
          `${Galv.FISH.rTypes} ${caughtFishes} / ${Galv.FISH.fishTotal}`,
          `${Galv.FISH.rTotal} ${Galv.FISH.totalCaught()}`,
        ];
        const recordId = $gameSystem.fishing.recordFish.id;
        if (recordId !== 0) {
          params.push(`${Galv.FISH.rFish} ${Galv.FISH.fishName(recordId)}`);
        }
        setTextIfChanged(notesNode, params.join(", "));
      },
    });

    Window_FishRecordList.prototype.describeItem = function (index) {
      const item = this._data[index];
      const name = Galv.FISH.fishName(item.id);
      if (!name) {
        return "";
      }
      const params = [
        `${Galv.FISH.rFishNumber} ${item.amount}`,
        `${Galv.FISH.rFishLength} ${item.length}`,
        `${Galv.FISH.rFishWeight} ${item.weight}`,
      ];
      return describeObject({ name, params });
    };
  }

  if (hasGalvQuestLog) {
    Window_QuestList.prototype.describeItem = function (index) {
      const item = this.item(index);
      if (!item) {
        return;
      }
      if (item.categoryTitle !== undefined) {
        const category = Galv.QUEST.categories[item.categoryTitle];
        return `${category.name} (${item.count})`;
      }
      const params = [];
      if (item._id === $gameSystem._quests.tracked) {
        params.push(parameters.trackedQuestText);
      }
      switch (item._status) {
        case 1:
          params.push(parameters.completedQuestText);
          break;
        case 2:
          params.push(parameters.failedQuestText);
          break;
      }
      params.push(`${Galv.QUEST.txtDiff} ${item.difficulty()}`);
      const lines = [Galv.QUEST.txtDesc];
      const description = item.desc();
      for (const line of description) {
        lines.push(stripEscapes(line));
      }
      if (item.hasResolution()) {
        for (const line of item.resoTxtArray()) {
          lines.push(stripEscapes(line));
        }
      }
      const objectives = item.objectives();
      if (objectives.length !== 0) {
        lines.push(Galv.QUEST.txtObj);
        for (const [index, objective] of objectives.entries()) {
          const status = item._objectives[index] || 0;
          if (status >= 0) {
            let text = stripEscapes(objective);
            switch (status) {
              case 1:
                text += ` (${parameters.completedQuestText})`;
                break;
              case 2:
                text += ` (${parameters.failedQuestText})`;
                break;
            }
            lines.push(text);
          }
        }
      }
      return `${item.name()} (${params.join(", ")}): ${lines.join("\n")}`;
    };
  }

  if (hasItemBook) {
    const itemBookParameters = PluginManager.parameters("ItemBook");
    const unknownData = `${itemBookParameters["Unknown Data"] || "??????"}`;
    const priceText = `${itemBookParameters["Price Text"] || "Price"}`;
    const equipText = `${itemBookParameters["Equip Text"] || "Equip"}`;
    const typeText = `${itemBookParameters["Type Text"] || "Type"}`;

    Patcher.findClass(Window_Selectable, "Window_ItemBookIndex", (C) => {
      C.prototype.describeItem = function (index) {
        const item = this._list[index];
        if (!$gameSystem.isInItemBook(item)) {
          return unknownData;
        }
        const name = item.name;
        const description = item.description;
        const params = [];
        if (item.price > 0) {
          params.push(`${priceText} ${item.price}`);
        }
        if (DataManager.isWeapon(item) || DataManager.isArmor(item)) {
          params.push(
            `${equipText} ${$dataSystem.equipTypes[item.etypeId]}`,
            `${typeText} ${
              DataManager.isWeapon(item)
                ? $dataSystem.weaponTypes[item.wtypeId]
                : $dataSystem.armorTypes[item.atypeId]
            }`,
          );
          for (let i = 2; i < 8; i++) {
            params.push(`${TextManager.param(i)} ${item.params[i]}`);
          }
        }
        return describeObject({ name, description, params });
      };
    });
  }

  if (hasKZCGallery) {
    const kzCGalleryParameters = PluginManager.parameters("kz_CGallery");
    const cgText = JSON.parse(kzCGalleryParameters["CG Text"] || "[]");

    Patcher.findClass(Window_Selectable, "Window_PictureList", (C) => {
      if (C === self.Window_PictureList) {
        return;
      }
      C.prototype.describeItem = function (index) {
        const data = this._data[index];
        return data && data[0] ? cgText[index] || "" : "???";
      };
    });
  }

  if (hasLiuYueGainItemTips) {
    Patcher.patch(Window_ZzyGITTips.prototype, "close", {
      postfix() {
        setTextIfChanged(popupNode, "");
      },
    });

    Patcher.patch(Window_ZzyGITTips.prototype, "Refresh", {
      postfix() {
        const text = this._list
          .map((info) => {
            const left = this.showNameText(info).replace(/\\ZTC<.*?>/g, "");
            const right = this.showNumberText(info);
            return `${stripEscapes(left)} ${right}`;
          })
          .join("\n");
        setTextIfChanged(popupNode, text);
      },
    });
  }

  if (hasLiuYueNodeItemBook) {
    Window_ZzyNIBSelect.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (!item) {
        return "";
      }
      const params = [item.name];
      if (item.ZzyNIB.describe.length !== 0) {
        params.push(item.ZzyNIB.describe.map(stripEscapes).join("\n"));
      }
      if (item.ZzyNIB.prompt.length !== 0) {
        params.push(item.ZzyNIB.prompt.map(stripEscapes).join("\n"));
      }
      return params.join(", ");
    };
  }

  if (hasManoInputConfig) {
    Patcher.findClass(Window_Selectable, "Window_InputSymbolListBase", (C) => {
      C.prototype.describeItem = function (index) {
        const item = this.symbolObject(index);
        if (!item) {
          return "";
        }
        return item.name();
      };
    });

    Patcher.findClass(Window_Selectable, "Window_GamepadConfig_V8", (C) => {
      C.prototype.describeItem = function (index) {
        const item = this.itemAt(index);
        if (!item) {
          return "";
        }
        return `${item.leftText()}${item.rigthText()}`;
      };
    });

    Patcher.findClass(Window_Selectable, "Window_KeyConfig_MA", (C) => {
      C.prototype.describeItem = function (index) {
        const item = this.item(index);
        if (!item) {
          return "";
        }
        if ("_char" in item) {
          const key = this.symbolObjectFromKeyNumber(item.keycord);
          return key ? `${item.char} - ${key.displayKeyName()}` : item.char;
        }
        if ("_mtext" in item) {
          return item.char;
        }
        return "";
      };
    });
  }

  if (hasMOGBattleResult) {
    Patcher.patch(Scene_Battle.prototype, "updateBResult", {
      postfix() {
        let text = "";
        const sprite = this._bresult;
        switch (sprite._phase) {
          case 1: {
            const exp = $gameTemp._bResult[1];
            text = `${TextManager.exp} ${exp}`;
            break;
          }
          case 2: {
            const gold = $gameTemp._bResult[2];
            text = `${TextManager.currencyUnit} ${gold}`;
            break;
          }
          case 3: {
            const items = $gameTemp._bResult[3];
            text = items.map((item) => item.name).join(", ");
            break;
          }
          case 4: {
            const actor = sprite._actor;
            if (!actor) {
              break;
            }
            const skills = $gameTemp._bResult[4];
            const params = [];
            const appendValue = (name, value, newValue) => {
              if (value !== newValue) {
                params.push(`${name} ${value} → ${newValue}`);
              }
            };
            internals.appendActorName(params, actor);
            appendValue(
              TextManager.level,
              sprite._actopar[0],
              actor.level,
            );
            for (let i = 0; i < 8; i++) {
              appendValue(
                TextManager.param(i),
                sprite._actopar[i + 1],
                actor.param(i),
              );
            }
            for (const skill of skills) {
              params.push(skill.name);
            }
            text = params.join(", ");
            break;
          }
        }
        setTextIfChanged(choiceNode, text);
      },
    });
  }

  if (hasMOGPictureGallery) {
    Patcher.patch(Window_PictureComp.prototype, "refresh", {
      postfix() {
        const unlocked = this._data_comp.length;
        const total = this._data.length;
        const percentage = trunc(unlocked / total * 100);
        setTextIfChanged(
          notesNode,
          `${this._comp_word} ${percentage}% (${unlocked}/${total})`,
        );
      },
    });

    Window_PictureList.prototype.describeItem = function (index) {
      const data = this._data[index];
      if (!data) {
        return "";
      }
      const [unlocked] = data;
      return unlocked
        ? Moghunter.picturegallery_number_for_filename === "true"
          ? Moghunter.picgl_data[index]
          : `${Moghunter.picturegallery_number_word} ${index + 1}`
        : Moghunter.picturegallery_locked_word;
    };
  }

  if (hasMOGSceneItem) {
    Patcher.patch(Window_ItemListM.prototype, "setCategory", {
      postfix() {
        let name = "";
        switch (this._category) {
          case "item":
            name = TextManager.item;
            break;
          case "weapon":
            name = TextManager.weapon;
            break;
          case "armor":
            name = TextManager.armor;
            break;
          case "keyItem":
            name = TextManager.keyItem;
            break;
        }
        setTextIfChanged(notesNode, name);
      },
    });

    Window_ItemListM.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (!item) {
        return "";
      }
      const name = item.name;
      const description = item.description;
      const count = getItemCountIfNeeded(this, item);
      return describeObject({ name, description, count });
    };
  }

  if (hasMOGSceneSkill) {
    Window_SkillListM.prototype.describeItem = function (index) {
      const skill = this._data[index];
      if (!skill) {
        return "";
      }
      const name = skill.name;
      const description = skill.description;
      const params = getSkillCostParams(this._actor, skill);
      return describeObject({ name, description, params });
    };
  }

  if (hasMOGTreasureHud) {
    Patcher.patch(Treasure_Hud.prototype, "refresh", {
      postfix() {
        const { 1: item, 2: amount, doNotAnnounce } = $gameTemp._thud_data;
        if (doNotAnnounce || !item) {
          return;
        }
        setTextIfChanged(
          popupNode,
          item === "gold"
            ? `${amount} ${TextManager.currencyUnit}`
            : `${item.name} × ${amount}`,
        );
      },
    });

    Patcher.patch(Treasure_Hud.prototype, "update", {
      prefix() {
        if (!$gameTemp._thud_sprite[0]) {
          setTextIfChanged(popupNode, "");
        }
      },
    });
  }

  if (hasMOGTreasurePopup) {
    Spriteset_Map.prototype.updateTreasureIcons = function () {
      if ($gameSystem._trspupData.length !== 0) {
        const text = $gameSystem._trspupData
          .map(([item, amount]) =>
            item
              ? `${item.name} × ${amount}`
              : `${amount} ${TextManager.currencyUnit}`
          )
          .join("\n");
        setTextIfChanged(mapPopupNode, text);
        this.refreshTreasureIcons();
      }
      this._treasureIcons = this._treasureIcons.filter((icon) => {
        if (icon.opacity === 0 && icon._wait[1] <= 0) {
          icon.destroy();
          return false;
        }
        return true;
      });
      if (this._treasureIcons.length === 0) {
        setTextIfChanged(mapPopupNode, "");
      }
    };

    if (hasMOGTreasureHud) {
      let lastHudData;
      let lastPopupCount;

      for (const key of ["command125", "command126"]) {
        Patcher.patch(Game_Interpreter.prototype, key, {
          prefix() {
            lastHudData = $gameTemp._thud_data;
            lastPopupCount = $gameSystem._trspupData.length;
          },
          postfix() {
            if (
              lastHudData !== $gameTemp._thud_data &&
              lastPopupCount !== $gameSystem._trspupData.length
            ) {
              $gameTemp._thud_data.doNotAnnounce = true;
            }
            lastHudData = undefined;
            lastPopupCount = undefined;
          },
        });
      }
    }
  }

  if (hasOptionEx) {
    Patcher.patch(Window_Options.prototype, "select", {
      postfix() {
        queueMicrotask(() => {
          if (!this.active) {
            return;
          }
          const text = this.describeCurrentItem();
          if (parameters.debugMode) {
            console.debug(`${this.constructor.name}: select ${text}`);
          }
          setTextIfChanged(choiceNode, text);
        });
      },
    });
  }

  if (hasSceneGlossary) {
    Window_GlossaryList.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (!item) {
        return "";
      }
      const name = item.name;
      const description = this._glossaryWindow.getDescription();
      const count = getItemCountIfNeeded(this, item);
      return describeObject({ name, description, count });
    };
  }

  if (hasSilvItemLog) {
    const pendingLines = [];

    Patcher.patch(Queue_LSize.prototype, "queue", {
      postfix({ args: [data] }) {
        pendingLines.push(`${data.t1}${data.t2}`);
      },
    });

    Patcher.findClass(Window_Base, "Window_ItemLog", (C) => {
      Patcher.patch(C.prototype, "update", {
        postfix() {
          if (pendingLines.length !== 0) {
            setTextIfChanged(popupNode, pendingLines.join("\n"));
            pendingLines.length = 0;
          }
        },
      });

      Patcher.patch(C.prototype, "onFullyFadedOut", {
        postfix() {
          setTextIfChanged(popupNode, "");
        },
      });
    });
  }

  if (hasStateHelp) {
    Patcher.findClass(Window_Selectable, "Window_StateHelp", (C) => {
      C.prototype.describeItem = function (index) {
        const battler = BattleManager.allBattleMembers()[index];
        if (!battler) {
          return "";
        }
        const name = battler.name();
        const states = battler.addedShowStates();
        const stateIndex = this._subIndex;
        if (stateIndex < states.length) {
          const description = DataManager.getStateHelp(states[stateIndex]);
          return `${name}: ${stripEscapes(description)}`;
        }
        const buffs = battler.addedShowBuffs();
        const buffIndex = stateIndex - states.length;
        if (buffIndex < buffs.length) {
          const description = DataManager.getBuffHelp(buffs[buffIndex]);
          return `${name}: ${stripEscapes(description)}`;
        }
        return name;
      };
    });
  }

  if (hasTMSimpleWindow) {
    Patcher.findClass(Window_Base, "Window_Simple", (C) => {
      Patcher.patch(C.prototype, "refresh", {
        postfix() {
          const id = this._id;
          const node = simpleWindowNodes[id - 1];
          if (!node) {
            return;
          }
          const data = $gameScreen.simpleWindow(id);
          setTextIfChanged(node, stripEscapes(data.text.replace(/\\n/g, "\n")));
        },
      });
    });
  }

  if (hasXdRsPCTips) {
    Patcher.patch(Spriteset_Map.prototype, "updatePcTips", {
      prefix() {
        const tips = [];
        for (const tip of $gameTemp.pcTips()) {
          if (!tip._announced) {
            tips.push(tip);
            tip._announced = true;
          }
        }
        if (tips.length !== 0) {
          const text = tips
            .map(({ item, num: amount }) => {
              const name = item
                ? item.name
                : XdRsData.PCTips.wordGold || TextManager.currencyUnit;
              return `${name} ${amount < 0 ? "−" : "+"}${abs(amount)}`;
            })
            .join("\n");
          setTextIfChanged(popupNode, text);
        }
      },
      postfix() {
        if (!this._pcTips || this._pcTips.length === 0) {
          setTextIfChanged(popupNode, "");
        }
      },
    });
  }

  if (hasYEPClassChangeCore) {
    Window_ClassList.prototype.describeItem = function (index) {
      const cls = $dataClasses[this._data[index]];
      if (!cls) {
        return;
      }
      const actor = this._actor;
      const name = cls.useNickname ? actor.nickname() : cls.name;
      const description = cls.description;
      const params = [format(Yanfly.Param.CCCLvFmt, actor.classLevel(cls.id))];
      return describeObject({ name, description, params });
    };
  }

  if (hasYEPGabWindow) {
    const guessActorByPicture = (type, name, index) => {
      const allActors = $gameParty.allMembers();
      switch (type) {
        case "character":
          return allActors.find((actor) =>
            actor.characterName() === name && actor.characterIndex() === index
          );
        case "face":
          return allActors.find((actor) =>
            actor.faceName() === name && actor.faceIndex() === index
          );
        default:
          return undefined;
      }
    };

    Patcher.patch(Window_Gab.prototype, "updateFadeOut", {
      postfix() {
        if (this.contentsOpacity === 0 && this._gabQueue.length === 0) {
          setTextIfChanged(gabNode, "");
        }
      },
    });

    Patcher.patch(Window_Gab.prototype, "processNewGabData", {
      postfix() {
        const actor = guessActorByPicture(
          this._graphicType,
          this._graphicName,
          this._graphicIndex,
        );
        let text = stripEscapes(this._text);
        if (actor) {
          const name = actor.nickname() || actor.name();
          if (name) {
            text = `${name}: ${text}`;
          }
        }
        setTextIfChanged(gabNode, text);
      },
    });
  }

  if (hasYEPItemCore) {
    if (typeof Window_ItemActionCommand !== "undefined") {
      Window_ItemActionCommand.prototype.describeItem = function (index) {
        return stripEscapes(this.commandName(index));
      };
    }
  }

  if (hasYEPItemSynthesis) {
    const mask = (text, mask) =>
      mask.length === 1 ? mask.repeat(text.length) : mask;
    const shouldMask = (item) =>
      Yanfly.Param.ISMaskUnknown === "true" && !$gameSystem.hasSynthed(item);
    const maskName = (item) =>
      item.maskName || mask(item.name, Yanfly.Param.ISMaskText);

    Patcher.patch(Window_SynthesisStatus.prototype, "refresh", {
      postfix() {
        const params = [];
        const appendValue = (name, unlocked, total) => {
          const percentage = trunc(unlocked / total * 100);
          params.push(`${name} ${percentage}% (${unlocked}/${total})`);
        };
        appendValue(
          Yanfly.Param.ISColRecipes,
          $gameSystem.totalRecipes(),
          Yanfly.IS.SynthesisRecipeCount,
        );
        appendValue(
          Yanfly.Param.ISCraftedItems,
          $gameSystem.synthedItems().length,
          Yanfly.IS.SynthesisItemTotal,
        );
        appendValue(
          Yanfly.Param.ISCraftedWeapons,
          $gameSystem.synthedWeapons().length,
          Yanfly.IS.SynthesisWeaponTotal,
        );
        appendValue(
          Yanfly.Param.ISCraftedArmors,
          $gameSystem.synthedArmors().length,
          Yanfly.IS.SynthesisArmorTotal,
        );
        setTextIfChanged(notesNode, params.join(", "));
      },
    });

    Patcher.patch(Window_SynthesisNumber.prototype, "refresh", {
      postfix() {
        queueMicrotask(() => {
          if (!this.active) {
            return;
          }
          const text = this.describeCurrentItem();
          if (parameters.debugMode) {
            console.debug(`${this.constructor.name}: refresh ${text}`);
          }
          setTextIfChanged(choiceNode, text);
        });
      },
    });

    Window_SynthesisList.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (!item) {
        return "";
      }
      const mask = shouldMask(item);
      const name = mask ? maskName(item) : item.name;
      const description = mask ? Yanfly.Param.ISMaskHelpText : item.description;
      const params = [];
      if (item.synthCost > 0) {
        params.push(`${item.synthCost} ${TextManager.currencyUnit}`);
      }
      for (const index of item.synthIngredients.keys()) {
        const ingredient = DataManager.getSynthesisIngredient(item, index);
        if (ingredient) {
          const possessed = $gameParty.numItems(ingredient);
          const required = DataManager.getSynthesisQuantity(item, index);
          params.push(`${ingredient.name} × ${required}/${possessed}`);
        }
      }
      return describeObject({ name, description, params });
    };

    Window_SynthesisNumber.prototype.describeCurrentItem = function () {
      const item = this._item;
      const name = shouldMask(item) ? maskName(item) : item.name;
      const count = this._number;
      const params = [];
      if (item.synthCost > 0) {
        params.push(`${item.synthCost * count} ${TextManager.currencyUnit}`);
      }
      for (const index of item.synthIngredients.keys()) {
        const ingredient = DataManager.getSynthesisIngredient(item, index);
        if (ingredient) {
          const possessed = $gameParty.numItems(ingredient);
          const required = DataManager.getSynthesisQuantity(item, index);
          params.push(`${ingredient.name} × ${required * count}/${possessed}`);
        }
      }
      return describeObject({ name, count, params });
    };
  }

  if (hasYEPKeyboardConfig) {
    Window_KeyConfig.prototype.describeItem = function (index) {
      switch (this.commandSymbol(index)) {
        case "default":
          return Yanfly.Param.KeyConfigDefaultTx;
        case "wasd":
          return Yanfly.Param.KeyConfigWasdTx;
        case "cancel":
          return Yanfly.Param.KeyConfigFinishTx;
        case "key": {
          const name = this.visualName(index);
          const keyCode = Window_KeyConfig._refId[this.commandName(index)];
          const action = Input.keyMapper[keyCode];
          return action ? `${name} - ${this.actionKey(action)}` : name;
        }
      }
    };
  }

  if (hasYEPPartySystem) {
    Window_PartySelect.prototype.describeItem = function (index) {
      const actor = $gameActors.actor(this._data[index]);
      if (!actor) {
        return Yanfly.Param.PartyEmptyText;
      }
      const params = [];
      internals.appendActorName(params, actor);
      internals.appendActorRestrictions(params, actor);
      return params.join(", ");
    };

    Window_PartyList.prototype.describeItem = function (index) {
      const actor = $gameActors.actor(this._data[index]);
      if (!actor) {
        return Yanfly.Param.PartyCommand2;
      }
      const params = [];
      internals.appendActorStatus(params, actor);
      internals.appendBattlerParams(params, actor);
      internals.appendActorEquips(params, actor);
      internals.appendActorRestrictions(params, actor);
      return params.join(", ");
    };
  }

  if (hasYEPQuestJournal) {
    Patcher.patch(Window_QuestData.prototype, "select", {
      postfix() {
        queueMicrotask(() => {
          if (!this.active) {
            return;
          }
          const text = this.describeCurrentItem();
          if (parameters.debugMode) {
            console.debug(`${this.constructor.name}: select ${text}`);
          }
          setTextIfChanged(choiceNode, text);
        });
      },
    });

    Window_QuestData.prototype.describeCurrentItem = function () {
      const quest = $dataQuests[this._questId];
      return quest
        ? stripEscapes(format(
          Window_QuestData._questDataFmt,
          quest.name,
          quest.difficulty,
          quest.from,
          quest.location,
          this.getQuestDescription(),
          this.getQuestObjectives(false),
          this.getQuestRewards(false),
          this.getQuestSubtext(),
        ))
        : "";
    };

    Window_QuestCategories.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };

    Window_QuestList.prototype.describeItem = function (index) {
      return stripEscapes(this.commandName(index));
    };
  }

  if (hasYEPRowFormation) {
    Window_RowFormation.prototype.describeItem = function (index) {
      const actor = $gameParty.members()[index];
      const params = [];
      internals.appendActorName(params, actor);
      internals.appendActorClass(params, actor);
      const text = Yanfly.Row.Help[actor.row()];
      return `${params.join(", ")}: ${stripEscapes(text)}`;
    };
  }

  if (hasYEPSaveCore) {
    Patcher.patch(Window_SaveConfirm.prototype, "activate", {
      postfix() {
        if (this._text) {
          setTextIfChanged(notesNode, stripEscapes(this._text));
        }
      },
    });

    Patcher.patch(Window_SaveConfirm.prototype, "deactivate", {
      postfix() {
        setTextIfChanged(notesNode, "");
      },
    });
  }

  if (hasYEPSkillLearnSystem) {
    Patcher.patch(Window_SkillLearnConfirm.prototype, "activate", {
      postfix() {
        if (this._text) {
          setTextIfChanged(notesNode, stripEscapes(this._text));
        }
      },
    });

    Patcher.patch(Window_SkillLearnConfirm.prototype, "deactivate", {
      postfix() {
        setTextIfChanged(notesNode, "");
      },
    });

    Window_SkillLearn.prototype.describeItem = function (index) {
      const skill = this._data[index];
      if (!skill) {
        return "";
      }
      const actor = this._actor;
      const name = skill.name;
      const description = skill.description;
      const params = actor.isLearnedSkillRaw(skill.id)
        ? [Yanfly.Param.SLSLearnText]
        : getSkillCostParams(actor, skill);
      const goldCost = skill.learnCostGold;
      if (goldCost > 0) {
        params.push(`${goldCost} ${TextManager.currencyUnit}`);
      }
      if (Yanfly.JP) {
        const jpCost = skill.learnCostJp + actor.customLearnSkillJpCost(skill);
        if (jpCost > 0) {
          params.push(`${jpCost} ${Yanfly.Param.Jp}`);
        }
      }
      for (const type of skill.learnCost) {
        const match = /(?:ITEM (\d+)|WEAPON (\d+)|ARMOR (\d+)): (\d+)/i
          .exec(type);
        if (!match) {
          continue;
        }
        const item = match[1]
          ? $dataItems[Number(match[1])]
          : match[2]
          ? $dataWeapons[Number(match[2])]
          : match[3]
          ? $dataArmors[Number(match[3])]
          : null;
        if (!item) {
          continue;
        }
        const possessed = $gameParty.numItems(item);
        const required = Number(match[4]);
        params.push(`${item.name} × ${possessed}/${required}`);
      }
      if (skill.learnCustomText) {
        params.push(stripEscapes(skill.learnCustomText));
      }
      return describeObject({ name, description, params });
    };
  }

  if (hasYEPStatAllocation) {
    Patcher.patch(Window_AllocationRevert.prototype, "activate", {
      postfix() {
        setTextIfChanged(
          notesNode,
          stripEscapes(Yanfly.Param.StatAlcRevConfirmText),
        );
      },
    });

    Patcher.patch(Window_AllocationRevert.prototype, "deactivate", {
      postfix() {
        setTextIfChanged(notesNode, "");
      },
    });

    Window_AllocationList.prototype.describeItem = function () {
      return parameters.debugMode
        ? "TODO: Window_AllocationList.prototype.describeItem"
        : "";
    };
  }

  if (hasYEPStatusMenuCore) {
    Patcher.patch(Scene_Status.prototype, "setCommandWindowHandlers", {
      postfix() {
        const activateInfoWindow = () => {
          const infoWindow = this._infoWindow;
          infoWindow.activate();
          infoWindow.deselect();
        };
        const commandWindow = this._commandWindow;
        commandWindow.setHandler("general", activateInfoWindow);
        commandWindow.setHandler("parameters", activateInfoWindow);
        commandWindow.setHandler("elements", activateInfoWindow);
        commandWindow.setHandler("states", activateInfoWindow);
        commandWindow.setHandler("attributes", activateInfoWindow);
      },
    });

    Patcher.patch(Window_StatusInfo.prototype, "maxItems", {
      prefix(ctx) {
        switch (this._symbol) {
          case "general":
          case "parameters":
          case "elements":
          case "states":
          case "attributes":
            ctx.result = 0;
            return true;
        }
      },
    });

    Window_Selectable.prototype.maxItems = function () {
      return 0;
    };

    Window_StatusInfo.prototype.describeCurrentItem = function () {
      const actor = this._actor;
      switch (this._symbol) {
        case "general": {
          const params = [];
          internals.appendActorStatus(params, actor);
          internals.appendActorExp(params, actor);
          internals.appendBattlerParams(params, actor);
          internals.appendActorProfile(params, actor);
          return params.join(", ");
        }
        case "parameters": {
          const params = [];
          internals.appendBattlerParams(params, actor);
          return params.join(", ");
        }
        case "elements": {
          const params = [];
          for (const column of this.elementArray()) {
            for (let id of column) {
              if (!id) {
                continue;
              }
              id = Number(id);
              const name = $dataSystem.elements[id];
              const percentage = (actor.elementRate(id) * 100)
                .toFixed(Yanfly.Param.StatusEleDec);
              params.push(`${stripEscapes(name)} ${percentage}%`);
            }
          }
          return params.join(", ");
        }
        case "states": {
          const params = [];
          for (const column of this.stateArray()) {
            for (let id of column) {
              if (!id) {
                continue;
              }
              id = Number(id);
              const name = $dataStates[id].name;
              const percentage =
                (actor.isStateResist(id) ? 0 : actor.stateRate(id) * 100)
                  .toFixed(Yanfly.Param.StatusStatesDec);
              params.push(`${name} ${percentage}%`);
            }
          }
          return params.join(", ");
        }
        case "attributes": {
          const params = [];
          for (const column of this.attributesArray()) {
            for (const attr of column) {
              if (!attr) {
                continue;
              }
              let name;
              let value;
              switch (attr.toLowerCase()) {
                case "hit":
                  name = Yanfly.Param.StatusAttr_hit;
                  value = actor.hit;
                  break;
                case "eva":
                  name = Yanfly.Param.StatusAttr_eva;
                  value = actor.eva;
                  break;
                case "cri":
                  name = Yanfly.Param.StatusAttr_cri;
                  value = actor.cri;
                  break;
                case "cev":
                  name = Yanfly.Param.StatusAttr_cev;
                  value = actor.cev;
                  break;
                case "mev":
                  name = Yanfly.Param.StatusAttr_mev;
                  value = actor.mev;
                  break;
                case "mrf":
                  name = Yanfly.Param.StatusAttr_mrf;
                  value = actor.mrf;
                  break;
                case "cnt":
                  name = Yanfly.Param.StatusAttr_cnt;
                  value = actor.cnt;
                  break;
                case "hrg":
                  name = Yanfly.Param.StatusAttr_hrg;
                  value = actor.hrg;
                  break;
                case "mrg":
                  name = Yanfly.Param.StatusAttr_mrg;
                  value = actor.mrg;
                  break;
                case "trg":
                  name = Yanfly.Param.StatusAttr_trg;
                  value = actor.trg;
                  break;
                case "tgr":
                  name = Yanfly.Param.StatusAttr_tgr;
                  value = actor.tgr;
                  break;
                case "grd":
                  name = Yanfly.Param.StatusAttr_grd;
                  value = actor.grd;
                  break;
                case "rec":
                  name = Yanfly.Param.StatusAttr_rec;
                  value = actor.rec;
                  break;
                case "pha":
                  name = Yanfly.Param.StatusAttr_pha;
                  value = actor.pha;
                  break;
                case "mcr":
                  name = Yanfly.Param.StatusAttr_mcr;
                  value = actor.mcr;
                  break;
                case "tcr":
                  name = Yanfly.Param.StatusAttr_tcr;
                  value = actor.tcr;
                  break;
                case "pdr":
                  name = Yanfly.Param.StatusAttr_pdr;
                  value = actor.pdr;
                  break;
                case "mdr":
                  name = Yanfly.Param.StatusAttr_mdr;
                  value = actor.mdr;
                  break;
                case "fdr":
                  name = Yanfly.Param.StatusAttr_fdr;
                  value = actor.fdr;
                  break;
                case "exr":
                  name = Yanfly.Param.StatusAttr_exr;
                  value = actor.exr;
                  break;
                case "dcr":
                  name = Yanfly.Param.StatusAttr_dcr;
                  value = 1.5 + actor.criticalMultiplierBonus();
                  break;
                default:
                  continue;
              }
              const percentage = (value * 100)
                .toFixed(Yanfly.Param.StatusAttrDec);
              params.push(`${stripEscapes(name)} ${percentage}%`);
            }
          }
          return params.join(", ");
        }
        case "profile": {
          const index = this.index();
          const profile = actor.profileStatusText();
          return index >= 0 && index < profile.length
            ? stripEscapes(profile[index])
            : "";
        }
        default:
          return describeUnimplementedCase(this._symbol);
      }
    };
  }

  if (hasYEPVictoryAftermath) {
    Patcher.patch(Window_VictoryExp.prototype, "open", {
      postfix() {
        const text = $gameParty.battleMembers()
          .map((actor) => {
            const params = [];
            internals.appendActorName(params, actor);
            internals.appendActorLevel(params, actor);
            const level = actor._preVictoryLv;
            const currentExp = actor.currentExp();
            const nextLevelExp = actor.expForLevel(level + 1);
            const gainedExp = actor._expGained;
            params.push(
              `${Yanfly.Param.VAGainedExp} ${
                format(Yanfly.Param.VAGainedExpfmt, gainedExp)
              }`,
              level === actor.maxLevel()
                ? Yanfly.Param.VAMaxLv
                : currentExp >= nextLevelExp
                ? Yanfly.Param.VALevelUp
                : `${format(TextManager.expNext, TextManager.level)} ${
                  nextLevelExp - currentExp
                }`,
            );
            return params.join(", ");
          })
          .join("\n");
        setTextIfChanged(choiceNode, text);
      },
    });
  }

  if (hasYEPXInBattleStatus) {
    Patcher.patch(Window_InBattleStateList.prototype, "setBattler", {
      postfix() {
        const actor = this._battler;
        const params = [];
        internals.appendActorStatus(params, actor);
        internals.appendBattlerParams(params, actor);
        setTextIfChanged(notesNode, params.join(", "));
      },
    });

    Patcher.patch(Window_InBattleStateList.prototype, "deactivate", {
      postfix() {
        setTextIfChanged(notesNode, "");
      },
    });

    Window_InBattleStateList.prototype.describeItem = function (index) {
      const item = this._data[index];
      if (item === null) {
        return `${Yanfly.Param.IBSHealthyText}: ${Yanfly.Param.IBSHealthyHelp}`;
      }
      if (typeof item === "string") {
        const match = /BUFF (\d+)/i.exec(item);
        if (!match) {
          return "";
        }
        const id = Number(match[1]);
        const actor = this._battler;
        const value = actor._buffs[id];
        const rate = trunc(actor.paramBuffRate(id) * 100);
        const turns = actor._buffTurns[id];
        return value > 0
          ? `${Yanfly.Param.IBSBuffText[id]}: ${
            format(Yanfly.Param.IBSBuffHelp[id], rate, abs(value), turns)
          }`
          : `${Yanfly.Param.IBSDebuffText[id]}: ${
            format(Yanfly.Param.IBSDebuffHelp[id], rate, abs(value), turns)
          }`;
      }
      return `${item.name}: ${stripEscapes(item.description)}`;
    };
  }

  if (hasYEPXMessageBacklog) {
    Window_MessageBacklog.prototype.describeCurrentItem = function () {
      const top = this.topRow();
      const bottom = this.bottomRow();
      // let last = this._lastVisible;
      // if (last && top === last.top && bottom === last.bottom) {
      //   last = undefined;
      // }
      const lines = [];
      for (let i = top; i <= bottom; i++) {
        // if (last && i >= last.top && i <= last.bottom) {
        //   continue;
        // }
        switch (this.commandSymbol(i)) {
          case "text":
            lines.push(stripEscapes(this.commandName(i)));
            break;
          case "linebreak":
            lines.push("");
            break;
        }
      }
      // this._lastVisible = { top, bottom };
      return lines.join("\n");
    };
  }

  return { stripEscapes, describeObject, internals };
})();
