/*:
 * @target MZ
 * @author Aerosys
 * @plugindesc [Tier 1] [Version 1.0.1] [MV & MZ]
 *
 * @help
 * 
 * ----------------------------------------------------------------------------
 * 介绍
 * ---------------------------------------------------------------------------- 

  MK物品精细化限制
 
  主要功能是对游戏中的物品使用和消耗进行精细化限制
  通过备注标签实现多种条件下的物品使用规则控制
  
  1、限制物品使用权限
     禁止角色使用任何物品或指定 ID 的物品（可通过角色、职业、状态、装备设置）
     限制物品只能被特定角色 / 职业使用，或禁止特定角色 / 职业使用（可在物品本身设置）
	 
  2、限制物品消耗权限
     禁止角色消耗任何物品或指定 ID 的物品（可通过角色、职业、状态、装备设置）
     限制物品只能被特定角色 / 职业消耗，或禁止特定角色 / 职业消耗（可在物品本身设置）
	 
  3 、自动隐藏菜单选项
     当角色被设置为 “无法使用任何物品” 时，战斗中该角色的回合会自动隐藏 “物品” 菜单选项
 

 * ----------------------------------------------------------------------------
 * Rules
 * ----------------------------------------------------------------------------
 * 
 * 1. This Plugin is free of charge and can be used in any kind of game.
 * 
 * 2. You may not redistribute this Plugin or claim it as your own.
 *    
 *    a) Exception: You may redistribute this plugin as part of your game when
 *       releasing it.
 *    b) Exception: You may send this plugin to another person when you hire
 *       them for personal modifications.
 * 
 * 3. You may modify this plugin's source code for your needs but cannot
 *    redistribute your modifications.
 * 
 * 4. You may create plugins based on this (e.g. addon or extension) for your
 *    needs but you cannot redistribute them.
 * 
 * 
 * ----------------------------------------------------------------------------
 * 备注标签
 * ----------------------------------------------------------------------------
 * 
<Cannot use Items>
可应用于角色、职业、状态和装备
角色将无法使用游戏中的任何物品
战斗菜单在该角色回合时会自动隐藏 “物品” 选项

 * 
<Cannot use Items: 1, 2, 3>
以逗号分隔的物品 ID 列表
可应用于角色、职业、状态和装备
角色将无法使用指定 ID 的物品

 * 
<Not usable by Actor: 1, 2, 3>
以逗号分隔的角色 ID 列表
可应用于物品
该物品无法被指定 ID 的角色使用
 * 
 
<Not usable by Class: 1, 2, 3>
以逗号分隔的职业 ID 列表
可应用于物品
该物品无法被拥有指定职业的角色使用
 * 
 
<Only usable by Actor: 1, 2, 3>
以逗号分隔的角色 ID 列表
可应用于物品
该物品仅限指定 ID 的角色使用
 * 
 
<Only usable by Class: 1, 2, 3>
以逗号分隔的职业 ID 列表
可应用于物品
该物品仅限拥有指定职业的角色使用
 * 
 
<Cannot consume Items>
可应用于角色、职业、状态和装备
角色将无法消耗游戏中的任何物品


<Cannot use Items: 1, 2, 3>
以逗号分隔的物品 ID 列表
可应用于角色、职业、状态和装备
角色将无法消耗指定 ID 的物品

 * 
<Not consumable by Actor: 1, 2, 3>
以逗号分隔的角色 ID 列表
可应用于物品
该物品无法被指定 ID 的角色消耗

 * 
<Not consumable by Class: 1, 2, 3>
以逗号分隔的职业 ID 列表
可应用于物品
该物品无法被拥有指定职业的角色消耗

 * 
<Only consumable by Actor: 1, 2, 3>
以逗号分隔的角色 ID 列表
可应用于物品
该物品仅限指定 ID 的角色消耗
 * 
 
<Only consumable by Class: 1, 2, 3>
以逗号分隔的职业 ID 列表
可应用于物品
该物品仅限拥有指定职业的角色消耗
 * 
 * 
 * 
 * NEED SUPPORT?
 * Contact me: mail<at>aerosys.blog
 * 
 * @endofhelp
 * 
 */


var MK = MK || { };


(function() {

const hasNotetag = (object, notetag) => object && object.meta && object.meta[notetag];

const notetagIncludes = (object, notetag, number) => (
    object &&
    object.meta &&
    typeof object.meta[notetag] == 'string' &&
    object.meta[notetag].split(',').map(Number).includes(number)
)

const notetagIsTrue = (object, notetag) => object && object.meta && object.meta[notetag] === true;


// =====================================================================================
// Item Restrictions (User)
// =====================================================================================

function checkActorCannotUseItem(actor, item) {
    return (
        !actor.traitObjects().some(object => notetagIncludes(object, 'Cannot use Items', item.id)) &&
        !actor.traitObjects().some(object => notetagIsTrue(object, 'Cannot use Items'))
    );
}

function checkItemCannotBeUsedBy(actor, item) {
    return (
        !notetagIncludes(item, 'Not usable by Actor', actor.actorId()) && (
            !actor.currentClass() ||
            !notetagIncludes(item, 'Not usable by Class', actor.currentClass().id)
        )
    );
}

function checkItemCanOnlyBeUsedBy(actor, item) {
    return (
        !hasNotetag(item, 'Only usable by Actor') ||
        notetagIncludes(item, 'Only usable by Actor', actor.actorId())
    ) && (
        !hasNotetag(item, 'Only usable by Class') ||
        !actor.currentClass() ||
        notetagIncludes(item, 'Only usable by Class', actor.currentClass().id)
    );
}

const alias_GameBattlerBase_canUse = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function(item) {
    return (
        alias_GameBattlerBase_canUse.call(this, item) && (
            !DataManager.isItem(item) || (
                checkActorCannotUseItem(this, item) &&
                checkItemCannotBeUsedBy(this, item) &&
                checkItemCanOnlyBeUsedBy(this, item)
            )
        )
    );
}


// =====================================================================================
// Item Restrictions (Consumer)
// =====================================================================================

function checkActorCannotConsumeItem(actor, item) {
    return (
        !actor.traitObjects().some(object => notetagIsTrue(object, 'Cannot consume Items')) &&
        !actor.traitObjects().some(object => notetagIncludes(object, 'Cannot consume Items', item.id))
    );
}

function checkItemCannotBeConsumedBy(actor, item) {
    return (
        !notetagIncludes(item, 'Not consumable by Actor', actor.actorId()) && (
            !actor.currentClass() ||
            !notetagIncludes(item, 'Not consumable by Class', actor.currentClass().id)
        )
    );
}

function checkItemCanOnlyBeConsumedBy(actor, item) {
    return (
        !hasNotetag(item, 'Only consumable by Actor') ||
        notetagIncludes(item, 'Only consumable by Actor', actor.actorId())
    ) && (
        !hasNotetag(item, 'Only consumable by Class') ||
        !actor.currentClass() ||
        notetagIncludes(item, 'Only consumable by Class', actor.currentClass().id)
    );
}

const alias_GameAction_testApply = Game_Action.prototype.testApply;
Game_Action.prototype.testApply = function(target) {
    return (
        alias_GameAction_testApply.call(this, target) && (
            !DataManager.isItem(this.item()) || (
                checkActorCannotConsumeItem(target, this.item()) &&
                checkItemCannotBeConsumedBy(target, this.item()) &&
                checkItemCanOnlyBeConsumedBy(target, this.item())
            )
        )
    );
}


// Remove [Use Items] Command
const alias_WindowActorCommand_addItemCommand = Window_ActorCommand.prototype.addItemCommand;
Window_ActorCommand.prototype.addItemCommand = function() {
    if (this._actor.canUseAnyItem()) {
        alias_WindowActorCommand_addItemCommand.call(this);
    }
}

Game_BattlerBase.prototype.canUseAnyItem = function() {
    return !this.traitObjects().some(object => notetagIsTrue(object, 'Cannot use Items'));
}


})();
