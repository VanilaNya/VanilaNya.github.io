//=============================================================================
// Yanfly Engine Plugins - Base Parameter Control
// YEP_BaseParamControl.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_BaseParamControl = true;

var Yanfly = Yanfly || {};
Yanfly.BPC = Yanfly.BPC || {};
Yanfly.BPC.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc 官方版本：v1.04 | 004-基础8能力值控制
 * @author Yanfly Engine Plugins(YEP) | 汉化+机翻：YuukakeID
 *
 * @param -生命值上限-
 * @default
 *
 * @param 生命值上限公式
 * @parent -生命值上限-
 * @desc 决定生命值上限的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 生命值上限最大值
 * @parent -生命值上限-
 * @desc 决定生命值上限的最大值公式。默认：
 * customMax || (user.isActor() ? 9999 : 999999)
 * @default customMax || (user.isActor() ? 9999 : 999999)
 *
 * @param 生命值上限最小值
 * @parent -生命值上限-
 * @desc 决定生命值上限的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -魔力值上限-
 * @default
 *
 * @param 魔力值上限公式
 * @parent -魔力值上限-
 * @desc 决定魔力值上限的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 魔力值上限最大值
 * @parent -魔力值上限-
 * @desc 决定魔力值上限的最大值公式。默认：
 * customMax || (user.isActor() ? 9999 : 9999)
 * @default customMax || (user.isActor() ? 9999 : 9999)
 *
 * @param 魔力值上限最小值
 * @parent -魔力值上限-
 * @desc 决定魔力值上限的最小值公式。默认：
 * customMin || 0
 * @default customMin || 0
 *
 * @param -攻击力-
 * @default
 *
 * @param 攻击力公式
 * @parent -攻击力-
 * @desc 决定攻击力的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 攻击力最大值
 * @parent -攻击力-
 * @desc 决定攻击力的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 攻击力最小值
 * @parent -攻击力-
 * @desc 决定攻击力的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -防御力-
 * @default
 *
 * @param 防御力公式
 * @parent -防御力-
 * @desc 决定防御力的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 防御力最大值
 * @parent -防御力-
 * @desc 决定防御力的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 防御力最小值
 * @parent -防御力-
 * @desc 决定防御力的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -魔法攻击力-
 * @default
 *
 * @param 魔法攻击力公式
 * @parent -魔法攻击力-
 * @desc 决定魔法攻击力的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 魔法攻击力最大值
 * @parent -魔法攻击力-
 * @desc 决定魔法攻击力的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 魔法攻击力最小值
 * @parent -魔法攻击力-
 * @desc 决定魔法攻击力的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -魔法防御力-
 * @default
 *
 * @param 魔法防御力公式
 * @parent -魔法防御力-
 * @desc 决定魔法防御力的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 魔法防御力最大值
 * @parent -魔法防御力-
 * @desc 决定魔法防御力的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 魔法防御力最小值
 * @parent -魔法防御力-
 * @desc 决定魔法防御力的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -敏捷-
 * @default
 *
 * @param 敏捷公式
 * @parent -敏捷-
 * @desc 决定敏捷的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 敏捷最大值
 * @parent -敏捷-
 * @desc 决定敏捷的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 敏捷最小值
 * @parent -敏捷-
 * @desc 决定敏捷的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param -幸运-
 * @default
 *
 * @param 幸运公式
 * @parent -幸运-
 * @desc 决定幸运的公式。默认：
 * (base + plus) * paramRate * buffRate + flat
 * @default (base + plus) * paramRate * buffRate + flat
 *
 * @param 幸运最大值
 * @parent -幸运-
 * @desc 决定幸运的最大值公式。默认：
 * customMax || (user.isActor() ? 999 : 999)
 * @default customMax || (user.isActor() ? 999 : 999)
 *
 * @param 幸运最小值
 * @parent -幸运-
 * @desc 决定幸运的最小值公式。默认：
 * customMin || 1
 * @default customMin || 1
 *
 * @param 幸运影响效果
 * @parent -幸运-
 * @desc 用于影响状态成功率的公式。默认：
 * Math.max(1.0 + (user.luk - target.luk) * 0.001, 0.0)
 * @default Math.max(1.0 + (user.luk - target.luk) * 0.001, 0.0)
 *
 * @help
 *
 * 机翻版本：v0.05  完成时间：2023.10.01
 *
 * 插件官方描述：
 * 对基础参数的计算方法进行增益控制——
 * 最大HP、最大MP、攻击、防御、魔攻、魔防、敏捷、幸运
 *
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * MaxHP、MaxMP、ATK、DEF、MAT、MDF、AGI、LUK
 * 最大HP、最大MP、攻击、防御、魔攻、魔防、敏捷、幸运
 * 这些基础能力在战斗中起着非常重要的作用
 * 然而，游戏开发者对这些重要的数据几乎没有控制权
 * 而这个插件将对这些能力处理或更多其他方面提供控制
 *
 * ！注意：
 * 如果您使用了核心引擎插件YEP_CoreEngine，修改了能力上限的设置，
 * 如果该插件位于核心引擎插件之下，则覆盖核心引擎的设置值
 * (使用核心引擎插件时，推荐将核心引擎插件放在所有YEP插件之上！)
 *
 * ============================================================================
 * 指南 - 基础能力说明
 * ============================================================================
 *
 * 本节将简要概述基础能力的最重要作用
 * 如果你了解MV中基础能力的用途，可跳过；如果你不了解，可学习：
 * 
 * ---
 *
 * MHP - MaxHP
 * 最大生命值——全称：Maximum Hit Point 或 Maximum Health Point
 * 战斗者的生命值(HP)的数值，决定了战斗者处于存活状态还是死亡状态
 * 一般来说，HP值 > 0则为存活；HP值 ≤ 0则为死亡。特别地，战斗者如果有
 * 方法抵抗死亡状态，则仍然可以存活：例如默认的3号状态“不死之身”→此
 * 状态免疫“无法战斗”状态，进而使战斗者0血时不死亡
 * 当战斗者受到伤害(或被治疗)时，它通常会以HP值进行增减计算处理
 * MHP能力决定了HP值可以保有的最大值，治愈之后无法超过MHP值
 *
 * ---
 *
 * MMP - MaxMP
 * 最大魔力值——全称：Maximum Magic Point 或 Maximum Mana Point
 * - 魔力值(MP)，通常用作战斗时使用技能(skill)的前提条件和支付代价(cost)
 * 一般来说，MP值须 ≥ 使用技能所需MP且其他使用条件符合，才能使用技能
 * 使用消耗MP的技能后，MP值减少
 * MP值回复后的值无法超过MMP值
 *
 * ---
 *
 * ATK - Attack
 * 攻击力——ATtacK
 * - 默认情况下，该属性仅用于计算伤害，通常用于表示战斗者的物理攻击力
 * 在使用一般逻辑的伤害公式下，ATK值越高，物理攻击的伤害输出越高
 *
 * ---
 *
 * DEF - Defense
 * 防御力——DEFense
 * - 默认情况下，该属性仅用于计算伤害，通常用于表示战斗者的物理防御力
 * 在使用一般逻辑的伤害公式下，DEF值越高，被物理攻击受到的伤害越低
 *
 * ---
 *
 * MAT - Magic Attack
 * 魔法攻击力——Magic ATtack
 * - 默认情况下，该属性仅用于计算伤害，是区别于“物理”的另一种攻击力
 * 在使用一般逻辑的伤害公式下，MAT值越高，魔法攻击的伤害输出越高
 *
 * ---
 *
 * MDF - Magic Defense
 * 魔法防御力——Magic DeFense
 * - 默认情况下，该属性仅用于计算伤害，是区别于“物理”的另一种防御力
 * 在使用一般逻辑的伤害公式下，MDF值越高，被魔法攻击受到的伤害越低
 *
 * ---
 * 
 * AGI - Agility
 * 敏捷——AGIlity
 * - 默认情况下，该属性用于确定战斗中，角色的出手顺序
 * 在一般回合计算公式下，AGI值越高，战斗者能在回合中越早出手
 *
 * ---
 *
 * LUK - Luck
 * 幸运——LUcK
 * - 默认情况下，该属性只影响状态/增益(buff)/减益(debuff)的成功率
 * 这些状态由战斗者应用并由战斗者接收
 * 如果使用方(目标方)具有较高的LUK值，则状态/buff/debuff成功率增加(减少)
 *
 * ---
 *
 * ============================================================================
 * 指南 - 自定义公式
 * ============================================================================
 *
 * 该插件能力的公式计算的值，将以“整数值”形式输出
 * 如果结果是一个浮点值(小数)，它将被取整(四舍五入)
 * 再对能力的最大、最小值进行钳位(也可以通过插件能力计算)
 *
 * 比如：公式计算的结果是99.49(或99.50)，取99(或100)
 * 此时，假设插件能力最大值为50，最小值为49，则最终结果为50
 *
 * ！注意：如果公式计算的最小值A > 最大值，则A值同时为最小值和最大值
 * 如：最大值为50，最小值为80，公式计算的结果是99
 * 则：最终判定最小值和最大值都为80，最终结果为80
 *
 * 详情可自行查看以下部分的插件代码理解：
 *   参见：Game_BattlerBase的var minValue和var maxValue部分
 *
 * 默认情况下，公式如下：
 *     (base + plus) * paramRate * buffRate + flat
 *
 * ---
 *
 * 下面是公式各部分的解释：
 *
 * BASE：基础值
 * - 该值以多种方式确定
 * 如果是角色，则base值是数据库的职业能力曲线上当前等级对应的值
 * 如果是敌人，默认情况下，其base值等于数据库里敌人的能力值
 *
 * PLUS：提升值
 * - 该值以多种方式确定
 * 该值是通过手动增加战斗者能力值的事件或脚本调用供给战斗者的一个定值
 * 如果是角色，该值也会因战斗者装备的任何装备而变化
 * 此值可能受此插件提供的备注标签的影响
 *
 * PARAMRATE：参数比率(Parameter Rate)
 * - 对于角色和敌人，该值的确定方式相同
 * 这是一个百分率，它是通过战斗者的“特性”的所有能力的乘积计算得出的
 * 与战斗者受到的增益(buff)率无关
 * 此值可能受此插件提供的备注标签的影响
 *
 * BUFFRATE：增益比率
 * - 该值由战斗中的buff(增益)/debuff(减益)叠加决定，不论角色或敌人
 * 百分比修正(modifier)是相对于与战斗者的特定能力相关的堆栈数量计算的
 * 此值“不受”此插件提供的备注标签的影响
 *
 * FLAT：固定值
 * - 这是这个插件添加的一个新变量
 * 其目的是为能力的总值提供最终的加法修正(modifier)
 * 该值通过各种数据库对象的备注标签决定，并且只能受这些备注标签的影响
 *
 * ---
 *
 * 能力“最大值”和“最小值”也有公式，默认情况下，它们将按照以下公式工作：
 *
 *      customMax || (user.isActor() ? 9999 : 999999)
 *      //最大值为customMax，或者如果是角色，则是9999；敌人则是999999
 *      customMin || 1
 *      //最小值为customMin，或者1
 *
 * 其中，“customMax”和“customMin”是这个插件添加的新变量
 *
 * CUSTOMMAX：自定义最大值
 * - 这是此插件通过脚本调用或备注标签提供的自定义最大限制
 * 自定义最大值将检测战斗者的各个备注框
 * 如果是角色，将检测其角色数据，职业，装备，以及所受影响的状态的备注框
 * 如果是敌人，将检测其敌人数据，以及所受影响的状态的备注框
 * 最高的自定义最大值将成为战斗者的最新自定义最大值，优先于默认最大值
 * 如果没有自定义最大值，则该值将成为公式右边写入的默认最大值
 *
 * CUSTOMMIN：自定义最小值
 * - 这是此插件通过脚本调用或备注标签提供的自定义最小限制
 * 自定义最小值将检测战斗者的各个备注框
 * 如果是角色，将检测其角色数据，职业，装备，以及所受影响的状态的备注框
 * 如果是敌人，将检测其敌人数据，以及所受影响的状态的备注框
 * 最高的自定义最小值将成为战斗者的最新自定义最小值，优先于默认最小值
 * 如果没有自定义最小值，则该值将成为公式右边写入的默认最小值
 *
 * ============================================================================
 * 备注标签
 * ============================================================================
 *
 * 您可以使用以下备注标签更改基础能力值：
 *
 * 角色，职业，敌人，武器，护甲，和状态的备注标签：
 * (此备注标签不区分大小写)
 * 将“能力值”替换为以下八个基本参数：
 *    最大生命，最大魔力，攻击，防御，魔攻，魔防，敏捷，幸运
 * 也可以相应的替换为
 * (可自行在本插件的DataManager.getParamId中增减)：
 * 最大生命
 * →HP、MHP、MAXHP、MAX HP、最大HP、最大生命值
 * 
 * 最大魔力
 * →MP、MMP、MAXMP、MAX MP、SP、MAXSP、MAX SP、最大MP、最大魔力值
 * 
 * 攻击
 * →ATK、ATTACK、攻击力、物攻、物理攻击、物流攻击力
 * 
 * 防御
 * →DEF、DEFENSE、防御力、物防、物理防御、物理防御力
 * 
 * 魔攻
 * →MAT、MAGIC ATTACK、M.ATTACK、INT
 * →魔法攻击、魔法攻击力、特攻、特殊攻击、特殊攻击力
 * 
 * 魔防
 * →MDF、MAGIC DEFENSE、M.DEFENSE、RES
 * →魔法防御、魔法防御力、特防、特殊防御、特殊防御力
 * 
 * 敏捷
 * →AGI、AGILITY、SPD、速度
 * 
 * 幸运
 * →LUK、LUCK
 *   // 默认公式：(base + plus) * paramRate * buffRate + flat
 *
 *   <能力值 提升值 +数字>
 *   <能力值 提升值 -数字>
 *   使用插件默认公式时的提升值，或可用<能力值 plus: +1234>
 *
 *   <能力值 比率: 百分数>
 *   <能力值 比率: 小数>
 *   使用插件默认公式时的参数比率，写为百分比或小数
 *   或可用<能力值 rate: 百分数><能力值 rate: 小数>
 *
 *   <能力值 固定值: +数字>
 *   <能力值 固定值: -数字>
 *   使用插件默认公式时的固定值，或可用<能力值 flat: +1234>
 *
 *   <能力值 最大值: 数字>
 *   <能力值 最小值: 数字>
 *   基础能力的最大值、最小值，或可用<能力值 flat: 1234>
 *   若一个战斗者受到多个备注标签影响，则只适用其中值最大的
 *   注：假设同时存在<能力值 最小值: 1>和<能力值 最小值: 50>
 *   则将适用：<能力值 最小值: 50>
 *
 * ============================================================================
 * 疯狂模式 - 新JavaScript函数
 * ============================================================================
 *
 * 可以使用以下JavaScript函数来更改战斗者的基础能力值
 * 函数中，“battler”变量将由一个角色引用，即：
 *
 *   battler = $gameActors.actor(3);
 *   //引用数据库第三号角色
 *   -- 或者 --
 *   battler = $gameTroop.members()[2];
 *   //引用对战中敌群的2号索引敌人
 *   //(敌群中，敌人的添加顺序，从0到7，最多8个)
 *
 * 函数：
 *
 *   battler.clearParamPlus()
 *   - 清除所有基础能力的所有“plus”变量修饰符
 *
 *   battler.setMaxHp(数字)
 *   battler.setMaxMp(数字)
 *   battler.setAtk(数字)
 *   battler.setDef(数字)
 *   battler.setMat(数字)
 *   battler.setMdf(数字)
 *   battler.setAgi(数字)
 *   battler.setLuk(数字)
 *   - 设置战斗者各自的基础能力值
 *   ！注意：这将改变“提升值”变量，以尽可能适合此设置，而不考虑rate和flat
 *
 *   battler.setMaxHpPlus(数字)
 *   battler.setMaxMpPlus(数字)
 *   battler.setAtkPlus(数字)
 *   battler.setDefPlus(数字)
 *   battler.setMatPlus(数字)
 *   battler.setMdfPlus(数字)
 *   battler.setAgiPlus(数字)
 *   battler.setLukPlus(数字)
 *   - 设置战斗者各自的基础能力的“提升值”值
 *
 *   battler.addMaxHp(数字)
 *   battler.addMaxMp(数字)
 *   battler.addAtk(数字)
 *   battler.addDef(数字)
 *   battler.addMat(数字)
 *   battler.addMdf(数字)
 *   battler.addAgi(数字)
 *   battler.addLuk(数字)
 *   - 战斗者各自的基础能力的“提升值”值增加
 *
 *   battler.minusMaxHp(数字)
 *   battler.minusMaxMp(数字)
 *   battler.minusAtk(数字)
 *   battler.minusDef(数字)
 *   battler.minusMat(数字)
 *   battler.minusMdf(数字)
 *   battler.minusAgi(数字)
 *   battler.minusLuk(数字)
 *   - 战斗者各自的基础能力的“提升值”值减少
 *
 *   battler.clearCustomParamLimits();
 *   - 通过脚本调用清除设置在战斗者上的任何自定义能力限制(见下方)
 *   这不会删除通过备注标签应用在战斗者的自定义能力限制
 *
 *   battler.setCustomMaxHpMax(数字)
 *   battler.setCustomMaxMpMax(数字)
 *   battler.setCustomAtkMax(数字)
 *   battler.setCustomDefMax(数字)
 *   battler.setCustomMatMax(数字)
 *   battler.setCustomMdfMax(数字)
 *   battler.setCustomAgiMax(数字)
 *   battler.setCustomLukMax(数字)
 *   - 设置各个基础能力的最大值限制
 *   该值是根据战斗者可能拥有的任何<能力值 最大值: 数字>备注标签计算的
 *   如果有多个最大值，则使用数值最高的值作为能力最大值
 *
 *   battler.setCustomMaxHpMin(数字)
 *   battler.setCustomMaxMpMin(数字)
 *   battler.setCustomAtkMin(数字)
 *   battler.setCustomDefMin(数字)
 *   battler.setCustomMatMin(数字)
 *   battler.setCustomMdfMin(数字)
 *   battler.setCustomAgiMin(数字)
 *   battler.setCustomLukMin(数字)
 *   - 设置各个基础能力的最小值限制
 *   该值是根据战斗者可能拥有的任何<能力值 最小值: 数字>备注标签计算的
 *   如果有多个最小值，则使用数值最高的值作为能力最小值
 *
 * ============================================================================
 * 变更日志
 * ============================================================================
 *
 * 版本 1.04:
 * - 由于更新到MV 1.6.1，在脚本调用或自定义疯狂模式代码段中插入错误代码
 * 时，绕过isDevToolsOpen()错误
 * - 修复了有关LUK的脚本调用文档中的一个拼写错误
 *
 * 版本 1.03:
 * - 为RPG Maker MV 1.5.0版更新
 *
 * 版本 1.02:
 * - 增加了疯狂模式故障保险
 *
 * 版本 1.01:
 * - 修复了battler.setParam函数的一个问题
 * 该问题导致它们由于缓存问题而取值错误
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_BaseParamControl');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.BPCFormula = []
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['生命值上限公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['魔力值上限公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['攻击力公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['防御力公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['魔法攻击力公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['魔法防御力公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['敏捷公式']));
Yanfly.Param.BPCFormula.push(String(Yanfly.Parameters['幸运公式']));

Yanfly.Param.BPCMaximum = []
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['生命值上限最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['魔力值上限最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['攻击力最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['防御力最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['魔法攻击力最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['魔法防御力最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['敏捷最大值']));
Yanfly.Param.BPCMaximum.push(String(Yanfly.Parameters['幸运最大值']));

Yanfly.Param.BPCMinimum = []
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['生命值上限最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['魔力值上限最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['攻击力最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['防御力最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['魔法攻击力最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['魔法防御力最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['敏捷最小值']));
Yanfly.Param.BPCMinimum.push(String(Yanfly.Parameters['幸运最小值']));

Yanfly.Param.BPCLukEffectRate = String(Yanfly.Parameters['幸运影响效果']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.BPC.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.BPC.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_BaseParamControl) {
    this.processBPCNotetags1($dataActors);
    this.processBPCNotetags1($dataClasses);
    this.processBPCNotetags1($dataEnemies);
    this.processBPCNotetags1($dataWeapons);
    this.processBPCNotetags1($dataArmors);
    this.processBPCNotetags1($dataStates);
    Yanfly._loaded_YEP_BaseParamControl = true;
  }
  
  return true;
};

DataManager.processBPCNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.plusParams = [0, 0, 0, 0, 0, 0, 0, 0];
    obj.rateParams = [1, 1, 1, 1, 1, 1, 1, 1];
    obj.flatParams = [0, 0, 0, 0, 0, 0, 0, 0];
    obj.maxParams = [];
    obj.minParams = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(.*) (?:提升值|PLUS):[ ]*([\+\-]\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        var id = this.getParamId(text);
        if (id !== null) obj.plusParams[id] = value;
      } else if (line.match(/<(.*) (?:比率|RATE):[ ]*(\d+)([%％])>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        var id = this.getParamId(text);
        if (id !== null) obj.rateParams[id] = rate;
      } else if (line.match(/<(.*) (?:比率|RATE):[ ]*(\d+).(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        var id = this.getParamId(text);
        if (id !== null) obj.rateParams[id] = rate;
      } else if (line.match(/<(.*) (?:固定值|FLAT):[ ]*([\+\-]\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        var id = this.getParamId(text);
        if (id !== null) obj.flatParams[id] = value;
      } else if (line.match(/<(.*) (?:最大值|MAX):[ ]*(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        var id = this.getParamId(text);
        if (id !== null) obj.maxParams[id] = value;
      } else if (line.match(/<(.*) (?:最小值|MIN):[ ]*(\d+)>/i)) {
        var text = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        var id = this.getParamId(text);
        if (id !== null) obj.minParams[id] = value;
      }
    }
  }
};

DataManager.getParamId = function(string) {
    if (['HP', 'MHP', 'MAXHP', 'MAX HP', '最大HP', '最大生命', '最大生命值'].contains(string)) {
      return 0;
    } else if (['MP', 'MMP', 'MAXMP', 'MAX MP', '最大MP', '最大魔力', '最大魔力值'].contains(string)) {
      return 1;
    } else if (['ATK', 'ATTACK', '攻击', '攻击力', '物攻', '物理攻击', '物流攻击力'].contains(string)) {
      return 2;
    } else if (['DEF', 'DEFENSE', '防御', '防御力', '物防', '物理防御', '物理防御力'].contains(string)) {
      return 3;
    } else if (['MAT', 'MAGIC ATTACK', 'M.ATTACK', 'INT', '魔攻', '魔法攻击', '魔法攻击力', '特攻', '特殊攻击', '特殊攻击力'].contains(string)) {
      return 4;
    } else if (['MDF', 'MAGIC DEFENSE', 'M.DEFENSE', 'RES', '魔防', '魔法防御', '魔法防御力', '特防', '特殊防御', '特殊防御力'].contains(string)) {
      return 5;
    } else if (['AGI', 'AGILITY', 'SPD', '敏捷', '速度'].contains(string)) {
      return 6;
    } else if (['LUK', 'LUCK', '幸运'].contains(string)) {
      return 7;
    } else {
      return null;
    }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.param = function(paramId) {
  this._baseParamCache = this._baseParamCache || [];
  if (this._baseParamCache[paramId]) return this._baseParamCache[paramId];
  var base = this.paramBase(paramId);
  var plus = this.paramPlus(paramId);
  var paramRate = this.paramRate(paramId);
  var buffRate = this.paramBuffRate(paramId);
  var flat = this.paramFlat(paramId);
  var minValue = this.paramMin(paramId);
  var maxValue = Math.max(minValue, this.paramMax(paramId));
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = Yanfly.Param.BPCFormula[paramId];
  try {
    var value = eval(code);
  } catch (e) {
    var value = 0;
    Yanfly.Util.displayError(e, code, '自定义能力值公式错误');
    //Yanfly.Util.displayError(e, code, 'CUSTOM PARAM FORMULA ERROR');
  }
  value = Math.round(value.clamp(minValue, maxValue));
  this._baseParamCache[paramId] = value;
  return this._baseParamCache[paramId];
};

Game_BattlerBase.prototype.paramMax = function(paramId) {
  var customMax = this.customParamMax(paramId);
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = Yanfly.Param.BPCMaximum[paramId];
  try {
    var value = eval(code);
  } catch (e) {
    var value = 0;
    Yanfly.Util.displayError(e, code, '自定义能力值上限公式错误');
    //Yanfly.Util.displayError(e, code, 'CUSTOM PARAM MAX FORMULA ERROR');
  }
  value = Math.ceil(value);
  return value;
};

Game_BattlerBase.prototype.paramMin = function(paramId) {
  var customMin = this.customParamMin(paramId);
  var a = this;
  var user = this;
  var subject = this;
  var b = this;
  var target = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  var code = Yanfly.Param.BPCMinimum[paramId];
  try {
    var value = eval(code);
  } catch (e) {
    var value = 0;
    Yanfly.Util.displayError(e, code, '自定义能力值下限公式错误');
    //Yanfly.Util.displayError(e, code, 'CUSTOM PARAM MIN FORMULA ERROR');
  }
  value = Math.ceil(value);
  return value;
};

Yanfly.BPC.Game_BattlerBase_initMembers = 
    Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
    Yanfly.BPC.Game_BattlerBase_initMembers.call(this);
    this.clearCustomParamLimits();
};

Game_BattlerBase.prototype.clearCustomParamLimits = function() {
    this._paramLimitMin = [0,0,0,0,0,0,0,0];
    this._paramLimitMax = [0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.customParamMax = function(paramId) {
    if (!this._paramLimitMax) this.clearCustomParamLimits();
    var value = this._paramLimitMax[paramId];
    return value;
};

Game_BattlerBase.prototype.customParamMin = function(paramId) {
    if (!this._paramLimitMin) this.clearCustomParamLimits();
    var value = this._paramLimitMin[paramId];
    return value;
};

Game_BattlerBase.prototype.setParam = function(id, value) {
    this._paramPlus[id] = 0;
    this._baseParamCache = [];
    this._paramPlus[id] = value - this.param(id);
    this.refresh();
};

Game_BattlerBase.prototype.setMaxHp = function(value) {
    this.setParam(0, value);
};

Game_BattlerBase.prototype.setMaxMp = function(value) {
    this.setParam(1, value);
};

Game_BattlerBase.prototype.setAtk = function(value) {
    this.setParam(2, value);
};

Game_BattlerBase.prototype.setDef = function(value) {
    this.setParam(3, value);
};

Game_BattlerBase.prototype.setMat = function(value) {
    this.setParam(4, value);
};

Game_BattlerBase.prototype.setMdf = function(value) {
    this.setParam(5, value);
};

Game_BattlerBase.prototype.setAgi = function(value) {
    this.setParam(6, value);
};

Game_BattlerBase.prototype.setLuk = function(value) {
    this.setParam(7, value);
};

Game_BattlerBase.prototype.setParamPlus = function(id, value) {
    this._paramPlus[id] = value;
    this.refresh();
};

Game_BattlerBase.prototype.setMaxHpPlus = function(value) {
    this.setParamPlus(0, value);
};

Game_BattlerBase.prototype.setMaxMpPlus = function(value) {
    this.setParamPlus(1, value);
};

Game_BattlerBase.prototype.setAtkPlus = function(value) {
    this.setParamPlus(2, value);
};

Game_BattlerBase.prototype.setDefPlus = function(value) {
    this.setParamPlus(3, value);
};

Game_BattlerBase.prototype.setMatPlus = function(value) {
    this.setParamPlus(4, value);
};

Game_BattlerBase.prototype.setMdfPlus = function(value) {
    this.setParamPlus(5, value);
};

Game_BattlerBase.prototype.setAgiPlus = function(value) {
    this.setParamPlus(6, value);
};

Game_BattlerBase.prototype.setLukPlus = function(value) {
    this.setParamPlus(7, value);
};

Game_BattlerBase.prototype.addMaxHp = function(value) {
    this.addParam(0, value);
};

Game_BattlerBase.prototype.addMaxMp = function(value) {
    this.addParam(1, value);
};

Game_BattlerBase.prototype.addAtk = function(value) {
    this.addParam(2, value);
};

Game_BattlerBase.prototype.addDef = function(value) {
    this.addParam(3, value);
};

Game_BattlerBase.prototype.addMat = function(value) {
    this.addParam(4, value);
};

Game_BattlerBase.prototype.addMdf = function(value) {
    this.addParam(5, value);
};

Game_BattlerBase.prototype.addAgi = function(value) {
    this.addParam(6, value);
};

Game_BattlerBase.prototype.addLuk = function(value) {
    this.addParam(7, value);
};

Game_BattlerBase.prototype.minusMaxHp = function(value) {
    this.addParam(0, -value);
};

Game_BattlerBase.prototype.minusMaxMp = function(value) {
    this.addParam(1, -value);
};

Game_BattlerBase.prototype.minusAtk = function(value) {
    this.addParam(2, -value);
};

Game_BattlerBase.prototype.minusDef = function(value) {
    this.addParam(3, -value);
};

Game_BattlerBase.prototype.minusMat = function(value) {
    this.addParam(4, -value);
};

Game_BattlerBase.prototype.minusMdf = function(value) {
    this.addParam(5, -value);
};

Game_BattlerBase.prototype.minusAgi = function(value) {
    this.addParam(6, -value);
};

Game_BattlerBase.prototype.minusLuk = function(value) {
    this.addParam(7, -value);
};

Game_BattlerBase.prototype.setCustomParamLimitMax = function(id, value) {
    if (!this._paramLimitMax) this.clearCustomParamLimits();
    this._paramLimitMax[id] = value;
    this.refresh();
};

Game_BattlerBase.prototype.setCustomMaxHpMax = function(value) {
    this.setCustomParamLimitMax(0, value)
};

Game_BattlerBase.prototype.setCustomMaxMpMax = function(value) {
    this.setCustomParamLimitMax(1, value)
};

Game_BattlerBase.prototype.setCustomAtkMax = function(value) {
    this.setCustomParamLimitMax(2, value)
};

Game_BattlerBase.prototype.setCustomDefMax = function(value) {
    this.setCustomParamLimitMax(3, value)
};

Game_BattlerBase.prototype.setCustomMatMax = function(value) {
    this.setCustomParamLimitMax(4, value)
};

Game_BattlerBase.prototype.setCustomMdfMax = function(value) {
    this.setCustomParamLimitMax(5, value)
};

Game_BattlerBase.prototype.setCustomAgiMax = function(value) {
    this.setCustomParamLimitMax(6, value)
};

Game_BattlerBase.prototype.setCustomLukMax = function(value) {
    this.setCustomParamLimitMax(7, value)
};

Game_BattlerBase.prototype.setCustomParamLimitMin = function(id, value) {
    if (!this._paramLimitMin) this.clearCustomParamLimits();
    this._paramLimitMin[id] = value;
    this.refresh();
};

Game_BattlerBase.prototype.setCustomMaxHpMin = function(value) {
    this.setCustomParamLimitMin(0, value)
};

Game_BattlerBase.prototype.setCustomMaxMpMin = function(value) {
    this.setCustomParamLimitMin(1, value)
};

Game_BattlerBase.prototype.setCustomAtkMin = function(value) {
    this.setCustomParamLimitMin(2, value)
};

Game_BattlerBase.prototype.setCustomDefMin = function(value) {
    this.setCustomParamLimitMin(3, value)
};

Game_BattlerBase.prototype.setCustomMatMin = function(value) {
    this.setCustomParamLimitMin(4, value)
};

Game_BattlerBase.prototype.setCustomMdfMin = function(value) {
    this.setCustomParamLimitMin(5, value)
};

Game_BattlerBase.prototype.setCustomAgiMin = function(value) {
    this.setCustomParamLimitMin(6, value)
};

Game_BattlerBase.prototype.setCustomLukMin = function(value) {
    this.setCustomParamLimitMin(7, value)
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.BPC.Game_Battler_refresh = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
    this._baseParamCache = undefined;
    Yanfly.BPC.Game_Battler_refresh.call(this);
};

Game_Battler.prototype.paramPlus = function(paramId) {
    var value = Game_BattlerBase.prototype.paramPlus.call(this, paramId);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.plusParams) value += obj.plusParams[paramId];
    }
    return value;
};

Game_Battler.prototype.paramRate = function(paramId) {
    var rate = Game_BattlerBase.prototype.paramRate.call(this, paramId);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.rateParams) rate *= obj.rateParams[paramId];
    }
    return rate;
};

Game_Battler.prototype.paramFlat = function(paramId) {
    var value = 0;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.flatParams) value += obj.flatParams[paramId];
    }
    return value;
};

Game_Battler.prototype.customParamMax = function(paramId) {
    var value = Game_BattlerBase.prototype.customParamMax.call(this, paramId);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.maxParams && obj.maxParams[paramId]) {
        value = Math.max(value, obj.maxParams[paramId]);
      }
    }
    return value;
};

Game_Battler.prototype.customParamMin = function(paramId) {
    var value = Game_BattlerBase.prototype.customParamMin.call(this, paramId);
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.minParams && obj.minParams[paramId]) {
        value = Math.max(value, obj.minParams[paramId]);
      }
    }
    return value;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.BPC.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    Yanfly.BPC.Game_Actor_setup.call(this, actorId);
    this.clearCustomParamLimits();
};

Game_Actor.prototype.paramPlus = function(paramId) {
    var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    value += this.actor().plusParams[paramId];
    value += this.currentClass().plusParams[paramId];
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (!obj) continue;
      value += obj.params[paramId];
      if (obj.plusParams) value += obj.plusParams[paramId];
    }
    return value;
};

Game_Actor.prototype.paramRate = function(paramId) {
    var rate = Game_Battler.prototype.paramRate.call(this, paramId);
    rate *= this.actor().rateParams[paramId];
    rate *= this.currentClass().rateParams[paramId];
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.rateParams) rate *= obj.rateParams[paramId];
    }
    return rate;
};

Game_Actor.prototype.paramFlat = function(paramId) {
    var value = Game_Battler.prototype.paramFlat.call(this, paramId);
    value += this.actor().flatParams[paramId];
    value += this.currentClass().flatParams[paramId];
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.flatParams) value += obj.flatParams[paramId];
    }
    return value;
};

Game_Actor.prototype.paramMax = function(paramId) {
    return Game_Battler.prototype.paramMax.call(this, paramId);
};

Game_Actor.prototype.customParamMax = function(paramId) {
    var value = Game_Battler.prototype.customParamMax.call(this, paramId);
    if (this.actor().maxParams[paramId]) {
      value = Math.max(value, this.actor().maxParams[paramId]);
    }
    if (this.currentClass().maxParams[paramId]) {
      value = Math.max(value, this.currentClass().maxParams[paramId]);
    }
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.maxParams && obj.maxParams[paramId]) {
        value = Math.max(value, obj.maxParams[paramId]);
      }
    }
    return value;
};

Game_Actor.prototype.customParamMin = function(paramId) {
    var value = Game_Battler.prototype.customParamMin.call(this, paramId);
    if (this.actor().minParams[paramId]) {
      value = Math.max(value, this.actor().minParams[paramId]);
    }
    if (this.currentClass().minParams[paramId]) {
      value = Math.max(value, this.currentClass().minParams[paramId]);
    }
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.minParams && obj.minParams[paramId]) {
        value = Math.max(value, obj.minParams[paramId]);
      }
    }
    return value;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.paramPlus = function(paramId) {
    var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    value += this.enemy().plusParams[paramId];
    return value;
};

Game_Enemy.prototype.paramRate = function(paramId) {
    var rate = Game_Battler.prototype.paramRate.call(this, paramId);
    rate *= this.enemy().rateParams[paramId];
    return rate;
};

Game_Enemy.prototype.paramFlat = function(paramId) {
    var value = Game_Battler.prototype.paramFlat.call(this, paramId);
    value += this.enemy().flatParams[paramId];
    return value;
};

Game_Enemy.prototype.customParamMax = function(paramId) {
    var value = Game_Battler.prototype.customParamMax.call(this, paramId);
    if (this.enemy().maxParams[paramId]) {
      value = Math.max(value, this.enemy().maxParams[paramId]);
    }
    return value;
};

Game_Enemy.prototype.customParamMin = function(paramId) {
    var value = Game_Battler.prototype.customParamMin.call(this, paramId);
    if (this.enemy().minParams[paramId]) {
      value = Math.max(value, this.enemy().minParams[paramId]);
    }
    return value;
};

//=============================================================================
// Game_Action
//=============================================================================

Game_Action.prototype.lukEffectRate = function(target) {
    var item = this.item();
    var skill = this.item();
    var a = this.subject();
    var user = this.subject();
    var subject = this.subject();
    var b = target;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    return eval(Yanfly.Param.BPCLukEffectRate);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
