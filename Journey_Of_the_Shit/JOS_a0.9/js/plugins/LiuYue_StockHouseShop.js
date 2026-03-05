/*:
 * @plugindesc v1.06 StockHouseShop 库存商店
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 这个插件可以实现商店物品拥有购买上限
 *
 * RPGMaker中几乎所有的商店物品都是可以无限制购买的,这很不河里
 * 这个插件可以通过插件指令来实现对商店物品的管理
 *
 * 注意:这个插件支持YEP_ShopMenuCore插件,如果要实现与YEP_ShopMenuCore插件更好的兼容性
 * 请将本插件放置在YEP_ShopMenuCore插件之下
 *
 * 注意:这个插件支持YEP_X_MoreCurrencies插件,如果要实现与YEP_X_MoreCurrencies插件更好的兼容性
 * 请将本插件放置在YEP_X_MoreCurrencies插件之下
 *
 * 提示: YEP系列 YEP_ShopMenuCore , YEP_X_MoreCurrencies , YEP_X_CondShopPrices , YEP_X_HideShowShopItems
 * 相关插件,如果有,最好将其放在这四个插件之下,获得更好的兼容性
 *
 *
 *
 *
 *
 *---------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 * 
 *---------------------------------------------------------
 * 插件命令 (命令较多)
 *=================================================================
 *----------Command Plugin----------------
 * 
 * ZzySHSOpen x
 * - 这将打开编号为x的仓库,并进入商城状态(该指令无法在战斗中触发)
 *
 *
 *
 * ZzySHSOnlySell x y(true/false)
 * - 这将为编号为x的仓库,确认打开属性,(true支持买和卖 , false只支持买)
 *
 * 例: ZzySHSOnlySell 1 true   //设置1号仓库只支持卖商品
 *
 *
 *
 * ZSAddGood StockId Type ID Price MaxCount Cycle CurrentCount IsCycling CyclePerRand CycleFlatRand CycleMultiple AddGoodCount AddGoodPerRand AddGoodFlatRand
 * 
 * 例: ZSAddGood 1 Item 1 50 20 0 20 0 0 0 0 0 0 0 //给仓库1添加每瓶售价50元,上限50瓶的药水,没有上货时间,默认有20瓶
 * `也可以这样写
 *    ZSAddGood 1 Item 1 50 20 0 20 //给仓库1添加每瓶售价50元,上限50瓶的药水,没有上货时间,默认有20瓶
 * CurrentCount以后的参数都可以不填入以获取默认值
 *
 * 例: ZSAddGood 2 Item 2 500 10 1200 5 true 10 200 1.2 1 0 2
 * -给仓库2添加每瓶500元,上限10瓶的魔法药水,1200帧加浮动进行上货,1.2是增加上货频率,每次上货 1 +浮动正负2的药水
 *
 * 以下是所有参数的介绍
 * StockId : 仓库ID 这将决定你想要添加的是哪个仓库中,必须填写
 * Type : 类型 确定你商品的类型,对应数据库中的(Item/Weapon/Armor)三种类型中的一种,必须填写,分别是物品,武器,护甲
 * ID : ID 对应数据库中对应Type的ID值,必须填写
 * Price : 价格 这会决定你设定的商品的价格 如果填入0,或是不填写,则会代表使用数据库中原本的价格
 * MaxCount : 最大数量 这会决定进入仓库时能购买的这类商品的最大数量上限,如果不填写,则默认为无限
 * Cycle : 上货周期 这会在游戏中进行计时,单位为帧数,到达时间后会进行补货,如果不填写,则默认值为0
 * CurrentCount : 商品数量 目前的商品数量,这个值如果超过最大数量会被保持最大数量,如果填入0也会设置为最大数量
 * IsCycling : 是否开启上货周期 这可以控制上货周期,关闭后货物就不会再补充填入(true/false)如果填0,默认为false
 * CyclePerRand : 周期百分比扰乱 在每一次上货后 会随机下一次周期时间百分比范围 如果填0 则不启用 
 * CycleFlatRand : 周期帧数扰乱 在每一次上货后 会随机下一次周期时间帧数范围 如果填0 则不启用 
 * CycleMultiple : 上货时间倍率(如填入1.5上货周期每帧-1.5)如果值越大 代表上货速度越快 如果填0 默认值为1
 * AddGoodCount : 每次上货的数量 到达周期后 商品会增加的数量 如果填0 默认值为1
 * AddGoodPerRand : 每次上货的数量随机百分比 与周期一样,在百分比的范围内浮动每次上货量 如果填0 则不启用
 * AddGoodFlatRand : 每次上货的数量随机固定数值 与周期一样,在百分比的范围内浮动每次上货量 如果填0 则不启用
 * 
 * 注意参数从Cycle上货周期之后 都可以不填入,会使用默认值
 * 
 *
 *
 *
 * ZSSubGood StockId Type ID
 * -这将会从你的商品文档中删除这个商品(如果有的话)的所有信息,以下是参数介绍
 * StockId : 仓库ID
 * Type : 商品类型
 * ID : 商品ID
 * 例:ZSSubGood 1 Item 1    //删除1号仓库中道具1这件商品
 *
 *
 *
 *
 * ZSResetGood StockId Type ID Price MaxCount Cycle CurrentCount IsCycling CyclePerRand CycleFlatRand CycleMultiple AddGoodCount AddGoodPerRand AddGoodFlatRand
 * -这将重置某个商品的参数信息,参数与ZSAddGood一致,用法与ZSAddGood一致,如果没有这个商品,则会添加这个商品
 * 例:ZSResetGood 1 Item 1 1000 10 6000 10 true 0 0 0 0 0 0
 * 或者 ZSResetGood 1 Item 1 1000 10 6000 10 true
 * //将仓库1中药水价格改为1000 上限10瓶 6000帧上1瓶
 *
 *
 *
 * ZSAdd Count StockId Type ID x
 * - 这将增加指定库中指定商品的个数,如果没有这个商品则忽略,添加商品个数不会超过最大数量上限
 * 例:ZSAdd Count 1 Item 2 10    //添加1号库中10瓶魔法药水
 *
 *
 * 
 * ZSAdd MaxCount StockId Type ID x
 * - 这将增加指定库中指定商品的最大个数,如果没有这个商品则忽略
 *
 *
 * 
 * ZSAdd Price StockId Type ID x
 * - 这将增加指定库中指定商品的价格
 *
 *
 * 
 * ZSSub Count StockId Type ID x
 * - 这将减少指定库中指定商品的个数,如果没有这个商品则忽略,减少商品个数不会小于0
 *
 *
 * 
 * ZSSub MaxCount StockId Type ID x
 * - 这将减少指定库中指定商品最大个数,如果没有这个商品则忽略,减少商品最大个数不会小于0
 *
 *
 * 
 * ZSSub Price StockId Type ID x
 * - 这将减少指定库中指定商品价格,如果没有这个商品则忽略,减少商品价格不会小于0
 *
 *
 * 
 * ZSSet Count StockId Type ID x
 * - 这将设置指定库中指定商品的个数,如果没有这个商品则忽略,商品个数不会超过最大数量上限
 *
 *
 * 
 * ZSSet MaxCount StockId Type ID x
 * - 这将设置指定库中指定商品的最大个数,如果没有这个商品则忽略,设置最大个数低于商品个数后,商品个数会下降
 *
 *
 * 
 * ZSSet Price StockId Type ID x
 * - 这将设置指定库中指定商品价格,如果没有这个商品则忽略,这个价格可以设置为0
 *
 *
 * 
 * ZSSet Cycle StockId Type ID x
 * - 这将设置指定库中指定商品的上货周期
 *
 *
 * 
 * ZSSet IsCycling StockId Type ID x(true/false)
 * - 这将设置指定库中指定商品是否开启进货周期
 * 
 *
 * 
 * ZSSet CyclePerRand StockId Type ID x(0~100)
 * - 这将设置指定库中指定商品的百分比随机周期 填写范围可以是(0~100)代表百分比
 * 
 *
 *
 * ZSSet CycleFlatRand StockId Type ID x
 * - 这将设置指定库中指定商品的平坦随机周期
 * 
 *
 *
 * ZSSet CycleMultiple StockId Type ID x
 * - 这将设置指定库中指定商品的周期运行倍率
 * 
 *
 *
 * ZSSet AddGoodCount StockId Type ID x
 * - 这将设置指定库中指定商品的每次上货数量
 * 
 *
 *
 * ZSSet AddGoodPerRand StockId Type ID x
 * - 这将设置指定库中指定商品的每次上货数量浮动百分比 填写范围可以是(0~100)代表百分比
 * 
 *
 *
 * ZSSet AddGoodFlatRand StockId Type ID x
 * - 这将设置指定库中指定商品的每次上货数量浮动数值 浮动后的结果不会小于等于0
 * 
 *
 *
 * ZSAdd AllCount x
 * ZSSub AllCount x
 * - 这将上调/下调所有库中所有商品的数量 数量不会低于0 或者高于最大数量
 *
 *
 *
 * ZSAdd AllMaxCount x
 * ZSSub AllMaxCount x
 * - 这将上调/下调所有库中所有商品的最大数量 最大数量不会低于0
 *
 *
 *
 * ZSAdd AllPrice x
 * ZSSub AllPrice x
 * - 这将上调/下调所有库中所有商品的价格 价格不会小于0
 * 
 *
 *
 * ZSSet RecoveryAllCount
 * - 这将恢复所有库中所有商品的数量到最大数量
 * 
 *
 *
 * ZSSet ClearAllCount
 * - 这将清空所有库中所有商品的数量到0
 * 
 *
 *
 * ZSSet YESCyclingAll
 * - 这将让所有库中所有商品的周期都开始活跃
 * 
 *
 *
 * ZSSet NOCyclingAll
 * - 这将让所有库中所有商品的周期都进行暂停
 * 
 * 
 *
 *
 *
 *---------------------------Script Function--------------------------------------
 *
 *
 * 添加商品(仓库编号,类型,道具ID,价格,最大数量,上货周期,目前商品数量,是否活跃上货周期,周期百分比随机,周期帧数扰乱,上货时间倍率,每次上货的数量,每次上货的数量随机百分比,每次上货的数量随机百分比)
 * 1.仓库编号:              仓库ID 这将决定你想要添加的是哪个仓库中,必须填写
 * 2.类型:                  确定你商品的类型,对应数据库中的('Item'/'Weapon'/'Armor')三种类型中的一种,必须填写,分别是物品,武器,护甲
 * 3.道具ID:                对应数据库中对应Type的ID值,必须填写
 * 4.价格:                  这会决定你设定的商品的价格 如果填入0,或是不填写,则会代表使用数据库中原本的价格
 * 5.最大数量:              最大数量 这会决定进入仓库时能购买的这类商品的最大数量上限,如果不填写,则默认为无限
 * 6.上货周期:              这会在游戏中进行计时,单位为帧数,到达时间后会进行补货,如果不填写,则默认值为0
 * 7.目前商品数量:          商品数量 目前的商品数量,这个值如果超过最大数量会被保持最大数量,如果填入0也会设置为最大数量
 * 8.开启上货周期:          这可以控制上货周期,关闭后货物就不会再补充填入(true/false)如果填0,默认为false
 * 9.周期百分比扰乱:        在每一次上货后 会随机下一次周期时间百分比范围 如果填0 则不启用 
 * 10.周期帧数扰乱:         在每一次上货后 会随机下一次周期时间帧数范围 如果填0 则不启用 
 * 11.上货时间倍率:         (如填入1.5上货周期每帧-1.5)如果值越大 代表上货速度越快 如果填0 默认值为1
 * 12.上货数量:             到达周期后 商品会增加的数量 如果填0 默认值为1
 * 13.上货数量随机百分比:   与周期一样,在百分比的范围内浮动每次上货量 如果填0 则不启用
 * 14.上货数量随机固定数值: 与周期一样,在百分比的范围内浮动每次上货量 如果填0 则不启用
 *
 *
 *
 *
 *
 *
 * Zzy.SHS.Open(stockId)                           
 * -打开ID号仓库
 *
 * Zzy.SHS.OnlySell(stockId,flag)                  
 * -这将为编号为ID的仓库,flag确认打开属性,(true支持买和卖 , false只支持买)
 *
 * Zzy.SHS.AddGoodAll(stockId,type,ID,Price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand)
 * -设置增加一个商品的属性
 *
 * Zzy.SHS.SubGood(stockId,type,ID)                
 * -这将会从你的商品文档中删除这个商品(如果有的话)的所有信息
 *
 * Zzy.SHS.ResetGood(stockId,type,ID,Price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand)
 * -重置一个商品的属性
 *
 * Zzy.SHS.AddCount(stockId,type,ID,count)         
 * -这将增加指定库中指定商品的个数,如果没有这个商品则忽略,添加商品个数不会超过最大数量上限
 *
 * Zzy.SHS.AddMaxCount(stockId,type,ID,count)      
 * -这将减少指定库中指定商品最大个数,如果没有这个商品则忽略,减少商品最大个数不会小于0
 *
 * Zzy.SHS.AddPrice(stockId,type,ID,count)         
 * -这将增加指定库中指定商品的价格
 *
 * Zzy.SHS.SubCount(stockId,type,ID,count)         
 * -这将减少指定库中指定商品的个数,如果没有这个商品则忽略,减少商品个数不会小于0
 *
 * Zzy.SHS.SubMaxCount(stockId,type,ID,count)      
 * -这将减少指定库中指定商品最大个数,如果没有这个商品则忽略,减少商品最大个数不会小于0
 *
 * Zzy.SHS.SubPrice(stockId,type,ID,count)         
 * -这将减少指定库中指定商品价格,如果没有这个商品则忽略,减少商品价格不会小于0
 *
 * Zzy.SHS.SetCount(stockId,type,ID,count)         
 * -这将设置指定库中指定商品的个数,如果没有这个商品则忽略,商品个数不会超过最大数量上限
 *
 * Zzy.SHS.SetMaxCount(stockId,type,ID,count)      
 * -这将设置指定库中指定商品的最大个数,如果没有这个商品则忽略,设置最大个数低于商品个数后,商品个数会下降
 *
 * Zzy.SHS.SetPrice(stockId,type,ID,count)         
 * -这将设置指定库中指定商品价格,如果没有这个商品则忽略,这个价格可以设置为0
 *
 * Zzy.SHS.SetCycle(stockId,type,ID,count)         
 * -这将设置指定库中指定商品的上货周期
 *
 * Zzy.SHS.SetIsCycling(stockId,type,ID,flag)      
 * -这将设置指定库中指定商品是否开启进货周期
 *
 * Zzy.SHS.SetCyclePerRand(stockId,type,ID,per)    
 * -这将设置指定库中指定商品的百分比随机周期 填写范围可以是(0~100)代表百分比
 *
 * Zzy.SHS.SetCycleFlatRand(stockId,type,ID,cFrame)
 * -这将设置指定库中指定商品的平坦随机周期
 *
 * Zzy.SHS.SetCycleMultiple(stockId,type,ID,rate)  
 * -这将设置指定库中指定商品的周期运行倍率
 *
 * Zzy.SHS.SetAddGoodCount(stockId,type,ID,count)  
 * -这将设置指定库中指定商品的每次上货数量
 *
 * Zzy.SHS.SetAddGoodPerRand(stockId,type,ID,per)  
 * -这将设置指定库中指定商品的每次上货数量浮动百分比 填写范围可以是(0~100)代表百分比
 *
 * Zzy.SHS.SetAddGoodFlatRand(stockId,type,ID,count)
 * -这将设置指定库中指定商品的每次上货数量浮动数值 浮动后的结果不会小于等于0
 *
 * Zzy.SHS.AddAllCount(count)                      
 * -这将上调所有库中所有商品的数量 数量不会低于0 或者高于最大数量
 *
 * Zzy.SHS.SubAllCount(count)                      
 * -这将下调所有库中所有商品的数量 数量不会低于0 或者高于最大数量
 *
 * Zzy.SHS.AddAllMaxCount(count)                   
 * -这将上调所有库中所有商品的最大数量 最大数量不会低于0
 *
 * Zzy.SHS.SubAllMaxCount(count)                   
 * -这将下调所有库中所有商品的最大数量 最大数量不会低于0
 *
 * Zzy.SHS.AddAllPrice(price)                      
 * -这将上调所有库中所有商品的价格 价格不会小于0
 *
 * Zzy.SHS.SubAllPrice(price)                      
 * -这将下调所有库中所有商品的价格 价格不会小于0
 *
 * Zzy.SHS.SetRecoveryAllCount()                   
 * -这将恢复所有库中所有商品的数量到最大数量
 *
 * Zzy.SHS.SetClearAllCount()                      
 * -这将清空所有库中所有商品的数量到0
 *
 * Zzy.SHS.SetYESCyclingAll()                      
 * -这将让所有库中所有商品的周期都开始活跃
 *
 * Zzy.SHS.SetNOCyclingAll()                       
 * -这将让所有库中所有商品的周期都进行暂停
 *
 *
 *
 *
 *
 *
 * 
 *============================================================================
 
 
 
 我叫坂本：v1.06 因错误文本导致的崩溃,修正部分逻辑错误bug
 我叫坂本：v1.05 修复目前个数显示非数字的bug,拓展脚本方法
 我叫坂本：v1.04 添加与旧存档兼容,添加更多的参数控制
 我叫坂本：v1.03 兼容其他插件
 我叫坂本：v1.02 修复打开普通商店时导致崩溃的bug
 我叫坂本：v1.01 添加全局控制指令 完成与YEP_ShopMenuCore以及子插件的兼容
 我叫坂本：v1.00 完成插件功能


 
 *============================================================================
 * @param ---设置---
 * @default
 *
 * @param SaleInfiniteText
 * @text 无限文本
 * @parent ---设置---
 * @type text
 * @desc 这个商品购买无上限的标记
 * @default ∞/∞
 *
 * @param SaleEmptyText
 * @text 售空文本
 * @parent ---设置---
 * @type text
 * @desc 这是物品销售空之后显示的文本内容
 * @default ---已售空---
 *
 * @param SaleEmptyColor
 * @parent ---设置---
 * @text 售空文本颜色
 * @type number
 * @min 0
 * @max 31
 * @desc 显示'已售空'字样颜色,请使用system文件夹中的色彩表,默认10,红色
 * @default 10
 *
 * @param SaleEmptyBkColor
 * @parent ---设置---
 * @text 售空文本底色
 * @type number
 * @min 0
 * @max 31
 * @desc 显示商品的字样颜色,请使用system文件夹中的色彩表,默认7,灰黑色
 * @default 7
 *
 *
 * @param CountFormat
 * @parent ---设置---
 * @text 数量显示格式
 * @type text
 * @desc 显示拥有商品数量以及最大数量上限的格式,其中%1代表目前数量,%2代表最大数量,%3代表商品价格
 * @default %3 %1/%2
 *
 *
 *
 * @param InfinFormat
 * @parent ---设置---
 * @text 无限文本显示格式
 * @type text
 * @desc 显示拥有商品数量无限时文本的格式,其中%1会被替换为参数设置中的'无限文本'的内容,%2代表商品价格
 * @default %2 %1
 *
 *
 *
 *
 * @param ---商店脚本---
 * @default
 *
 * @param SetStock
 * @text 设置库存
 * @parent ---商店脚本---
 * @type note
 * @desc 
 * @default "//输入脚本\nZzy.SHS.AddGood(1,'Item',1,500,20,1200);//在仓库1中添加价格500的药水20个,20秒上货周期\nZzy.SHS.SetLastGood(1,10,true,0,200,1,2,0,0);//在仓库1中设置目前有10个药水,可以上货,上货浮动1000~1400帧,周期1倍,每次上2个药水\n添加商品(2,'Weapon',1,500,1,3000,0,true,0,0,1,1,0,0);//在仓库2中设置'剑'\n添加商品(3,'Item',1,0,365,60,0,true);//在仓库3中设置365瓶药水,每60帧增加1瓶\n"
 *
*/


var Imported = Imported || {};

var LiuYue = LiuYue || {};
LiuYue.LiuYue_StockHouseShop = true;//插件启动

var Zzy = Zzy || {};
Zzy.SHS = Zzy.SHS || {};
Zzy.SHS.version = 1.06;  
Zzy.Parameters = PluginManager.parameters('LiuYue_StockHouseShop');
Zzy.Param = Zzy.Param || {};
Zzy.Param.SetStockScript = new Function(JSON.parse(Zzy.Parameters['SetStock']) + '\nreturn true;');//脚本
Zzy.Param.SHSSaleInfiniteText = String(Zzy.Parameters['SaleInfiniteText']); //无限大文本
Zzy.Param.SHSSaleEmptyText = String(Zzy.Parameters['SaleEmptyText']); //售空文本
Zzy.Param.SHSSaleEmptyColor = parseInt(Zzy.Parameters['SaleEmptyColor']);//售空文本颜色
Zzy.Param.SHSSaleEmptyBkColor = parseInt(Zzy.Parameters['SaleEmptyBkColor']);//售空文本背景颜色

Zzy.Param.SHSCountFormat = String(Zzy.Parameters['CountFormat']); //数量显示格式
Zzy.Param.SHSInfinFormat = String(Zzy.Parameters['InfinFormat']); //无限文本格式



Zzy.SHS.YEPShopMenuCorePlugin = false;
Zzy.SHS.YEPXMoreCurrenciesPlugin = false;

if(Imported.YEP_ShopMenuCore)//前置插件检测
{
	Zzy.SHS.YEPShopMenuCorePlugin = true;
}

if(Imported.YEP_X_MoreCurrencies)
{
	Zzy.SHS.YEPXMoreCurrenciesPlugin = true;
}



Zzy.Param.StockHouseArr = [];//库存



//临时变量
Zzy.SHS.tempCompleteScript = false;
Zzy.SHS.tempSceneShopGoods = [];//临时缓存商品列表
Zzy.SHS.tempGood = undefined;//临时商品内容
Zzy.SHS.tempPassTime = 0;//经过时长
Zzy.SHS.tempIsStockShop = false;//打开的是否为仓库商店的判断


Zzy.SHS.AddGood = function(StockId,Type,ID,Price,MaxCount,Cycle)//添加商品
{
	//Type:商品类型,可以填入 item/weapon/armor
	//ID:商品ID,需要参考数据库中ID编号
	//Price:商品价格,如果填入0代表启用商品原有价格
	//MaxCount:商品默认数量上限,商品能存放的数量
	//Cycle:商品的进货周期,帧数为单位,商品不足最大数量上限时,会进入上货周期,填0会不启用周期效果

	var stock = Zzy.SHS.GetStockHouse(StockId);//获取库存商店
	
	
	var tempGood = Zzy.SHS.CreateGood(Type,ID,Price,MaxCount,Cycle);
	stock.goods.push(tempGood);//在指定ID的库存中存储商品
}




Zzy.SHS.SetLastGood = function(StockId,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand)//设置额外的参数
{
	//CurrentCount:商品剩余数量
	//IsCycling:是否开启上货周期
	//CyclePerRand:上货周期百分比随机性
	//CycleFlatRand:上货周期平坦随机性
	//CycleMultiple:上货周期倍速
	//AddGoodCount:每次上的货物
	//AddGoodPerRand:每次上的货物百分比随机性
	//AddGoodFlatRand:每次上货的平坦随机性
	
	var stock = Zzy.SHS.GetStockHouse(StockId);//获取库存商店
	
	//获取库存的最后一个商品
	
	var len = stock.goods.length;
	if(!len)return;
	var tempGood = stock.goods[len-1];
	tempGood._CurrentCount = CurrentCount ? CurrentCount : tempGood._MaxCount;
	tempGood._CurrentCount = Math.max(0,Math.min(tempGood._CurrentCount,tempGood._MaxCount));
	
	tempGood._IsCycling = IsCycling ? true : false;
	tempGood._CyclePerRand = CyclePerRand ? CyclePerRand : 0;
	tempGood._CycleFlatRand = CycleFlatRand ? CycleFlatRand : 0;
	tempGood._CycleMultiple = CycleMultiple ? CycleMultiple : 1;
	tempGood._AddGoodCount = AddGoodCount ? AddGoodCount : 1;
	tempGood._AddGoodPerRand = AddGoodPerRand ? AddGoodPerRand : 0;
	tempGood._AddGoodFlatRand = AddGoodFlatRand ? AddGoodFlatRand : 0;
}


Zzy.SHS.IsRepeatGood = function(StockId,Type,ID)//判断是否重复商品
{
	var stock = Zzy.SHS.GetStockHouse(StockId);//获取库存商店
	
	//遍历所有的商品进行对比
	
	var goods = stock.goods;
	var goodsLen = goods.length;
	for(var i=0;i<goodsLen;i++)
	{
		var good = goods[i];
		//对商品ID进行校验
		if(good._ID === ID && good._Type === Type)return true;
	}
	return false;
}


Zzy.SHS.CreateGood = function(Type,ID,Price,MaxCount,Cycle)
{
	//基本参数
	var good = {};
	good._Type = Type;
	good._ID = ID;
	good._Price = Price ? Price : 0;
	good._MaxCount = MaxCount ? MaxCount : 0;
	good._Cycle = Cycle ? Cycle : 0;
	
	//其他参数
	good._CurrentCount = MaxCount;//目前商品数量
	good._IsCycling = true;//是否执行周期上货
	
	good._CyclePerRand = 0;//周期扰乱百分比
	good._CycleFlatRand = 0;//周期扰乱值平坦值
	good._CycleMultiple = 1;//周期倍数,每次进行的周期速度
	
	good._AddGoodCount = 1;//每次上货数量
	good._AddGoodPerRand = 0;//上货周期扰乱百分比
	good._AddGoodFlatRand = 0;//上货周期扰乱平坦值
	
	return good;
}

Zzy.SHS.GetStockHouse = function(StockID)//获取指定ID库存的全部货物信息
{
	if(!Zzy.Param.StockHouseArr[StockID])
	{
		Zzy.Param.StockHouseArr[StockID] = {};
		var stock = Zzy.Param.StockHouseArr[StockID];
		
		stock.isOnlySell = false;//是否只支持出售
		stock.goods = [];//商品列表
	}
	return Zzy.Param.StockHouseArr[StockID];
}


var 添加商品 = function(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand)
{
	Zzy.SHS.AddGood(StockId,Type,ID,Price,MaxCount,Cycle);
	Zzy.SHS.SetLastGood(StockId,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand);
}


//=================================================================
//Game_Interpreter
//=================================================================

Zzy.SHS.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Zzy.SHS.Game_Interpreter_pluginCommand.call(this,command,args);

	if(command === 'ZzySHSOpen')
	{
		var StockId = parseInt(args[0]);
		
		Zzy.SHS.Open(StockId);
	}
	else if(command === 'ZzySHSOnlySell')
	{
		var StockId = parseInt(args[0]);
		var isOnlySell = eval(String(args[1]));

		
		Zzy.SHS.OnlySell(StockId,isOnlySell);
	}
	else if(command === 'ZSAddGood')
	{
		var StockId = parseInt(args[0]);
		var Type = String(args[1]);
		var ID = parseInt(args[2]);
		var Price = parseInt(args[3]);
		var MaxCount = parseInt(args[4]);
		var Cycle = parseInt(args[5]);
		var CurrentCount = parseInt(args[6]);
		var IsCycling = eval(String(args[7]));
		var CyclePerRand = Number(args[8]);
		var CycleFlatRand = parseInt(args[9]);
		var CycleMultiple = Number(args[10]);
		var AddGoodCount = parseInt(args[11]);
		var AddGoodPerRand = Number(args[12]);
		var AddGoodFlatRand = parseInt(args[13]);
		
		
		Zzy.SHS.AddGoodAll(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand);
		
	}
	else if(command === 'ZSSubGood')
	{
		var StockId = parseInt(args[0]);
		var Type = String(args[1]);
		var ID = parseInt(args[2]);
		
		Zzy.SHS.SubGood(StockId,Type,ID);
	}
	else if(command === 'ZSResetGood')
	{
		var StockId = parseInt(args[0]);
		var Type = String(args[1]);
		var ID = parseInt(args[2]);
		var Price = parseInt(args[3]);
		var MaxCount = parseInt(args[4]);
		var Cycle = parseInt(args[5]);
		var CurrentCount = parseInt(args[6]);
		var IsCycling = eval(String(args[7]));
		var CyclePerRand = Number(args[8]);
		var CycleFlatRand = parseInt(args[9]);
		var CycleMultiple = Number(args[10]);
		var AddGoodCount = parseInt(args[11]);
		var AddGoodPerRand = Number(args[12]);
		var AddGoodFlatRand = parseInt(args[13]);

		Zzy.SHS.ResetGood(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand);
		
	}
	else if(command === 'ZSAdd')
	{this.ZzySHSAddFun(args);}
	else if(command === 'ZSSub')
	{this.ZzySHSSubFun(args);}
	else if(command === 'ZSSet')
	{this.ZzySHSSetFun(args);}

}

Game_Interpreter.prototype.ZzySHSAddFun = function(args)
{
	var str = String(args[0]);
	var StockId = parseInt(args[1]);
	var Type = String(args[2]);
	var ID = parseInt(args[3]);
	var xVal = parseInt(args[4]);
	
	
	switch(str)
	{
		case 'Count':  //StockId Type ID x

		Zzy.SHS.AddCount(StockId,Type,ID,xVal);
		break;
		
		case 'MaxCount':

		Zzy.SHS.AddMaxCount(StockId,Type,ID,xVal);
		break;
		
		case 'Price':

		Zzy.SHS.AddPrice(StockId,Type,ID,xVal);
		break;
		
		case 'AllCount':
		xVal = parseInt(args[1]);

		Zzy.SHS.AddAllCount(xVal);
		break;
		
		case 'AllMaxCount':
		xVal = parseInt(args[1]);
		
		Zzy.SHS.AddAllMaxCount(xVal);
		break;
		
		case 'AllPrice':
		xVal = parseInt(args[1]);

		Zzy.SHS.AddAllPrice(xVal);
		break;
	}
}

Game_Interpreter.prototype.ZzySHSSubFun = function(args)
{
	var str = String(args[0]);
	var StockId = parseInt(args[1]);
	var Type = String(args[2]);
	var ID = parseInt(args[3]);
	var xVal = parseInt(args[4]);
	
	
	
	switch(str)
	{
		case 'Count':
		
		Zzy.SHS.SubCount(StockId,Type,ID,xVal);
		break;
		
		case 'MaxCount':
		
		Zzy.SHS.SubMaxCount(StockId,Type,ID,xVal);
		break;
		
		case 'Price':

		Zzy.SHS.SubPrice(StockId,Type,ID,xVal);
		break;
		
		case 'AllCount':
		xVal = parseInt(args[1]);
		
		Zzy.SHS.SubAllCount(xVal);
		break;
		
		case 'AllMaxCount':
		xVal = parseInt(args[1]);
	
		Zzy.SHS.SubAllMaxCount(xVal);
		break;
		
		case 'AllPrice':
		xVal = parseInt(args[1]);

		Zzy.SHS.SubAllPrice(xVal);
		break;
	}	
}
Game_Interpreter.prototype.ZzySHSSetFun = function(args)
{
	var str = String(args[0]);
	var StockId = parseInt(args[1]);
	var Type = String(args[2]);
	var ID = parseInt(args[3]);
	var xVal = parseInt(args[4]);
	
	
	switch(str)
	{
		case 'Count':

		Zzy.SHS.SetCount(StockId,Type,ID,xVal);
		break;
		
		case 'MaxCount':

		Zzy.SHS.SetMaxCount(StockId,Type,ID,xVal);
		break;
		
		case 'Price':
		
		Zzy.SHS.SetPrice(StockId,Type,ID,xVal);
		break;		
		
		case 'Cycle':

		Zzy.SHS.SetCycle(StockId,Type,ID,xVal);
		break;
		
		case 'IsCycling':
		xVal = eval(String(args[4]));

		Zzy.SHS.SetIsCycling(StockId,Type,ID,xVal);
		break;
		
		case 'CyclePerRand':
		
		Zzy.SHS.SetCyclePerRand(StockId,Type,ID,xVal);
		break;
		
		case 'CycleFlatRand':
		
		Zzy.SHS.SetCycleFlatRand(StockId,Type,ID,xVal);
		break;
		
		case 'CycleMultiple':
		xVal = Number(args[4]);

		Zzy.SHS.SetCycleMultiple(StockId,Type,ID,xVal);
		break;
		
		case 'AddGoodCount':
		
		Zzy.SHS.SetAddGoodCount(StockId,Type,ID,xVal);
		break;
		
		case 'AddGoodPerRand':

		Zzy.SHS.SetAddGoodPerRand(StockId,Type,ID,xVal);
		break;
		
		case 'AddGoodFlatRand':

		Zzy.SHS.SetAddGoodFlatRand(StockId,Type,ID,xVal);
		break;
		
		case 'RecoveryAllCount'://恢复所有

		Zzy.SHS.SetRecoveryAllCount();
		break;
		
		case 'ClearAllCount'://清除所有

		Zzy.SHS.SetClearAllCount();
		break;
		
		case 'YESCyclingAll':

		Zzy.SHS.SetYESCyclingAll();
		break;
		
		case 'NOCyclingAll':

		Zzy.SHS.SetNOCyclingAll();
		break;
		
	}
}


//=================================================================
//DataManager
//=================================================================
Zzy.SHS.DataManager_loadGame = DataManager.loadGame;
DataManager.loadGame = function(savefileId) //旧存档兼容
{
	var result = Zzy.SHS.DataManager_loadGame.call(this,savefileId);
	
	this.ZzySHSInitData();

	return result;
}

DataManager.ZzySHSInitData = function()//初始化参数
{
	if(!$gameSystem.GetIsZzySHSLoaded())
	{
		$gameSystem.InitZzySHSData();//兼容初始化
		$gameSystem.SetIsZzySHSLoaded(true);
	}	
}



//=================================================================
//Game_System
//=================================================================


Zzy.SHS.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.SHS.Game_System_initialize.call(this);
	
	this.InitZzySHSData();
	this._IsZzySHSLoaded = true;//是否载入完成

};

Game_System.prototype.GetIsZzySHSLoaded = function()
{
	if(this._IsZzySHSLoaded === undefined)
	{this._IsZzySHSLoaded = false;}
	return this._IsZzySHSLoaded;
}

Game_System.prototype.SetIsZzySHSLoaded = function(enable)
{
	this._IsZzySHSLoaded = enable;
}


Game_System.prototype.InitZzySHSData = function()
{
	if(!Zzy.SHS.tempCompleteScript)//确保脚本只会调用一次
	{
		this.ZzySHSCallScript();//调用脚本
		Zzy.SHS.tempCompleteScript = true;
	}
	this.ZzySHSReadStockData();//加载库存信息
	this.ZzySHSInitData();//加载初始化数据	
}


Game_System.prototype.ZzySHSInitData = function()
{
	this.ZzySHSLastTime = Graphics.frameCount;//记录上次时间
	this.ZzySHSPassTime = 0;//经过时间
}


Game_System.prototype.ZzySHSRecordTime = function()//记录时间
{
	this.ZzySHSPassTime = Graphics.frameCount - this.ZzySHSLastTime;
	this.ZzySHSLastTime = Graphics.frameCount;
	return this.ZzySHSPassTime;//获取经过事件
}



Game_System.prototype.ZzySHSCallScript = function()
{
	Zzy.Param.SetStockScript();//执行添加库存的脚本
}

Game_System.prototype.ZzySHSReadStockData = function()
{
	this.ZzySHSStockHouseArr = [];//所有的仓库信息
	
	//对数据进行读取
	var stockArr = Zzy.Param.StockHouseArr;
	var stockLen = stockArr.length;
	
	for(var i=0;i<stockLen;i++)
	{
		if(stockArr[i])
		{
			var goods = stockArr[i].goods;//获取商品列
			var goodsLen = goods.length;
			for(var j=0;j<goodsLen;j++)
			{
				
				if(goods[j])
				{
					var good = goods[j];//获取商品信息
					this.ZzySHSSaveGood(i,good);
				}
			}
		}
	}
}

Game_System.prototype.getZzySHSStockHouse = function(StockId)
{
	if(!this.ZzySHSStockHouseArr[StockId])
	{
		this.ZzySHSStockHouseArr[StockId] = {};
		this.ZzySHSStockHouseArr[StockId].goods = [];//商品列表
		this.ZzySHSStockHouseArr[StockId].isOnlySell = false;//是否仅售卖
		this.ZzySHSStockHouseArr[StockId].openCount = 0;//仓库被打开的次数
	}
	return this.ZzySHSStockHouseArr[StockId];
}

Game_System.prototype.getZzySHSgood = function(StockId,Type,ID)//获取某个库中的一个商品
{
	//如果没有返回空
	var stock = this.getZzySHSStockHouse(StockId);
	
	var goods = stock.goods;
	var goodsLen = goods.length;
	
	for(var i=0;i<goodsLen;i++)
	{
		var good = goods[i];
		
		if(good._Type === Type && good._ID === ID)
		{
			return good;
		}
	}
	return undefined;
}

Game_System.prototype.ZzySHSModifyAllParam = function(Param,Mode,Value)//添加所有库中所有商品数量
{

	var len = this.ZzySHSStockHouseArr.length;
	
	for(var i=0;i<len;i++)
	{
		if(!this.ZzySHSStockHouseArr[i])continue;
		
		var stock = this.getZzySHSStockHouse(i);
		var goods = stock.goods;
		if(!goods || goods.length === 0)continue;
		
		var len2 = goods.length;
		for(var j=0;j<len2;j++)
		{
			var good = goods[j];
			switch(Mode)
			{
				//超级九宫格
				case 1:
					switch(Param)
					{
						case 1:this.ZzySHSAddCount(good,Value);break;
						case 2:this.ZzySHSSubCount(good,Value);break;
					}
				break;
					
				case 2:
					switch(Param)
					{
						case 1:this.ZzySHSAddMaxCount(good,Value);break;
						case 2:this.ZzySHSSubMaxCount(good,Value);break;
					}
				break;
				
				case 3:
					switch(Param)
					{
						case 1:this.ZzySHSAddPrice(good,Value);break;
						case 2:this.ZzySHSSubPrice(good,Value);break;
					}
				break;
			}
		}
	}
}
Game_System.prototype.ZzySHSAddCount = function(good,Count)//添加商品数量
{
	good._CurrentCount += Count;
	good._CurrentCount = good._CurrentCount > good._MaxCount ? good._MaxCount : good._CurrentCount;
}

Game_System.prototype.ZzySHSSubCount = function(good,Count)
{
	good._CurrentCount -= Count;
	good._CurrentCount = good._CurrentCount < 0 ? 0 : good._CurrentCount;
}

Game_System.prototype.ZzySHSAddMaxCount = function(good,Count)//添加最大商品数量
{
	good._MaxCount += Count;
}

Game_System.prototype.ZzySHSSubMaxCount = function(good,Count)
{
	good._MaxCount -= Count;
	good._MaxCount = good._MaxCount < 0 ? 0 : good._MaxCount;
	
	good._CurrentCount = Math.min(good._CurrentCount,good._MaxCount);
}

Game_System.prototype.ZzySHSAddPrice = function(good,Count)//添加最大商品数量
{
	good._Price += Count;
}

Game_System.prototype.ZzySHSSubPrice = function(good,Count)
{
	good._Price -= Count;
	good._Price = good._Price < 0 ? 0 : good._Price;
}

Game_System.prototype.ZzySHSAddGood = function(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand)
{
	var stock = this.getZzySHSStockHouse(StockId);
	var goods = stock.goods;
	
	var good = this.ZzySHSTheSetGood(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand);
	goods.push(good);//压入数据
}


Game_System.prototype.ZzySHSSubGood = function(StockId,Type,ID)
{
	var stock = this.getZzySHSStockHouse(StockId);
	var good = this.getZzySHSgood(StockId,Type,ID);
	good = undefined;
}

Game_System.prototype.ZzySHSSetGood = function(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand)
{
	var stock = this.getZzySHSStockHouse(StockId);//asd
	var goods = stock.goods;
	var len = goods.length;
	
	
	var goodT = this.ZzySHSTheSetGood(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand);
	
	for(var i=0;i<len;i++)
	{
		var good = goods[i];
		if(!good)continue;
		
		//asd
		if(good._Type === Type && good._ID === ID)
		{
			//满足条件替换
			
			goods[i] = goodT;
			return;
		}
	}
	
	goods.push(goodT);
	

}



Game_System.prototype.ZzySHSTheSetGood = function(StockId,Type,ID,Price,MaxCount,Cycle,CurrentCount,IsCycling,CyclePerRand,CycleFlatRand,CycleMultiple,AddGoodCount,AddGoodPerRand,AddGoodFlatRand)
{
	var good = {};
	good._Type = Type;
	good._ID = ID;
	good._Price = Price;
	good._MaxCount = MaxCount ? MaxCount : 0;
	good._Cycle = Cycle ? Cycle : 0;
	//asd
	good._CurrentCount = CurrentCount ? CurrentCount : good._MaxCount;//目前商品数量
	good._IsCycling = IsCycling ? true : false;//是否执行周期上货
	good._CyclePerRand = CyclePerRand ? CyclePerRand : 0;//周期扰乱百分比
	good._CycleFlatRand = CycleFlatRand ? CycleFlatRand : 0;//周期扰乱值平坦值
	good._CycleMultiple = CycleMultiple ? CycleMultiple : 1;//周期倍数,每次进行的周期速度
	good._AddGoodCount = AddGoodCount ? AddGoodCount : 1;//每次上货数量
	good._AddGoodPerRand = AddGoodPerRand ? AddGoodPerRand : 0;//上货周期扰乱百分比
	good._AddGoodFlatRand = AddGoodFlatRand ? AddGoodFlatRand : 0;//上货周期扰乱平坦值
	good._RealCycle = 0;//真实周期
	good._CRealCycle = 0;//真实周期记录
	good._RealAddCount = 0;//真实每次上货数量
	good._OnShelfTotalCount = 0;//上货的总数量	
	
	return good;
}




Game_System.prototype.ZzySHSSaveGood = function(StockId,good)//存储信息
{
	if(!this.ZzySHSIsBeingData(good)){return;}//判断是否是数据库中存在的商品
	
	var stock = this.getZzySHSStockHouse(StockId);
	
	//stock.goods.push(good);//压入数据
	var lastIndex = stock.goods.length;
	stock.goods[lastIndex] = {};
	stock.goods[lastIndex]._Type = good._Type;
	stock.goods[lastIndex]._ID = good._ID;
	stock.goods[lastIndex]._Price = good._Price;
	stock.goods[lastIndex]._MaxCount = good._MaxCount;
	stock.goods[lastIndex]._Cycle = good._Cycle;
	
	stock.goods[lastIndex]._CurrentCount = good._CurrentCount;//目前商品数量
	stock.goods[lastIndex]._IsCycling = good._IsCycling;//是否执行周期上货
	stock.goods[lastIndex]._CyclePerRand = good._CyclePerRand;//周期扰乱百分比
	stock.goods[lastIndex]._CycleFlatRand = good._CycleFlatRand;//周期扰乱值平坦值
	stock.goods[lastIndex]._CycleMultiple = good._CycleMultiple;//周期倍数,每次进行的周期速度
	stock.goods[lastIndex]._AddGoodCount = good._AddGoodCount;//每次上货数量
	stock.goods[lastIndex]._AddGoodPerRand = good._AddGoodPerRand;//上货周期扰乱百分比
	stock.goods[lastIndex]._AddGoodFlatRand = good._AddGoodFlatRand;//上货周期扰乱平坦值
	
	//临时记录数据
	stock.goods[lastIndex]._RealCycle = 0;//真实周期
	stock.goods[lastIndex]._CRealCycle = 0;//真实周期记录
	stock.goods[lastIndex]._RealAddCount = 0;//真实每次上货数量
	stock.goods[lastIndex]._OnShelfTotalCount = 0;//上货的总数量
	
	
	var tempCycle = stock.goods[lastIndex]._Cycle;
	var tempPer = stock.goods[lastIndex]._CyclePerRand;
	var tempFlat = stock.goods[lastIndex]._CycleFlatRand;
	var tempCy = Zzy.SHS.RandPerAndRnadFlat(tempCycle,tempPer,tempFlat);
	
	tempCycle = stock.goods[lastIndex]._AddGoodCount;
	tempPer = stock.goods[lastIndex]._AddGoodPerRand;
	tempFlat = stock.goods[lastIndex]._AddGoodFlatRand;
	
	var tempCo = Zzy.SHS.RandPerAndRnadFlat(tempCycle,tempPer,tempFlat);
	
	//重置周期，上货数量
	stock.goods[lastIndex]._RealCycle = tempCy;
	stock.goods[lastIndex]._RealAddCount = tempCo;
}



Game_System.prototype.ZzySHSIsBeingData = function(good)//判断是否是属于以下的数据库中的内容
{
	if(this.ZzySHSIsBeingOfItemData(good)){return true;}
	if(this.ZzySHSIsBeingOfWeaponData(good)){return true;}
	if(this.ZzySHSIsBeingOfArmorData(good)){return true;}
	return false;
}

Game_System.prototype.ZzySHSIsBeingOfItemData = function(good)
{
	var compStr = good._Type.toUpperCase();
	if(compStr !== 'ITEM')return false;
	var id = good._ID;
	if(!!$dataItems[id])
	{return true;}//存在
	return false;//不存在
}

Game_System.prototype.ZzySHSIsBeingOfWeaponData = function(good)
{
	var compStr = good._Type.toUpperCase();
	if(compStr !== 'WEAPON')return false;
	var id = good._ID;
	if(!!$dataWeapons[id])
	{return true;}//存在
	return false;//不存在
}

Game_System.prototype.ZzySHSIsBeingOfArmorData = function(good)
{
	var compStr = good._Type.toUpperCase();
	if(compStr !== 'ARMOR')return false;
	var id = good._ID;
	if(!!$dataArmors[id])
	{return true;}//存在
	return false;//不存在
}


Game_System.prototype.ZzySHSReClAllCount = function(isTrue)
{
	var stockArr = this.ZzySHSStockHouseArr;
	var len = stockArr.length;
	for(var i=0;i<len;i++)
	{
		var stock = stockArr[i];
		if(!stock)continue;
		if(!stock.goods)continue;
		if(!stock.goods.length)continue;
		
		var goods = stock.goods;
		var len2 = goods.length;
		for(var j=0;j<len2;j++)
		{
			var good = goods[j];
			if(!good)continue;
			
			if(isTrue)//恢复所有商品
			{good._CurrentCount = good._MaxCount;}
			else//清除所有商品
			{good._CurrentCount = 0;}	
		}
	}
}

Game_System.prototype.ZzySHSCyclingAll = function(isTrue)
{
	var stockArr = this.ZzySHSStockHouseArr;
	var len = stockArr.length;
	for(var i=0;i<len;i++)
	{
		var stock = stockArr[i];
		if(!stock)continue;
		if(!stock.goods)continue;
		if(!stock.goods.length)continue;
		
		var goods = stock.goods;
		var len2 = goods.length;
		for(var j=0;j<len2;j++)
		{
			var good = goods[j];
			if(!good)continue;
			good._IsCycling = isTrue;
		}
	}
}

//=======================================================
//Scene_Shop
//=======================================================

Zzy.SHS.Scene_Shop_create = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function() 
{
	
	Zzy.SHS.Scene_Shop_create.call(this);
	
	
    // Scene_MenuBase.prototype.create.call(this);
    // this.createHelpWindow();
    // this.createGoldWindow();
    // this.createCommandWindow();
    // this.createDummyWindow();
    // this.createNumberWindow();
    // this.createStatusWindow();
    // this.createBuyWindow();
    // this.createCategoryWindow();
    // this.createSellWindow();
};

Zzy.SHS.Scene_Shop_terminate = Scene_Shop.prototype.terminate;
Scene_Shop.prototype.terminate = function()
{
	Zzy.SHS.Scene_Shop_terminate.call(this);
	Zzy.SHS.tempIsStockShop = false;//清理标记
}



Zzy.SHS.Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
Scene_Shop.prototype.onBuyOk = function() 
{
	if(this.ZzySHSIsCanBuy())
	{
		Zzy.SHS.Scene_Shop_onBuyOk.call(this);
	}
	else//不可以购买
	{
		this._buyWindow.activate();//重新设置活跃
	}
};

//=======================================================
//Scene_Shop
//=======================================================

Scene_Shop.prototype.ZzySHSIsCanBuy = function()
{
	if(Zzy.SHS.tempIsStockShop)
	{
		var index = this._buyWindow._index;
		//判断这个位置是否被禁用
		var goodInfo = Zzy.SHS.tempSceneShopGoods[index];
		var currentCount = goodInfo._CurrentCount;
		var maxCount = goodInfo._MaxCount;
		
		if(maxCount === 0)return true;
		if(currentCount === 0)return false;
		
		Zzy.SHS.tempGood = goodInfo;
		return true;
	}
	return true;
}


Zzy.SHS.Scene_Shop_maxBuy = Scene_Shop.prototype.maxBuy;
Scene_Shop.prototype.maxBuy = function() //修改最大购买次数
{
	var max = Zzy.SHS.Scene_Shop_maxBuy.call(this);
	
	if(Zzy.SHS.tempGood && Zzy.SHS.tempGood._CurrentCount !== 0)
	{
		max = Math.min(Zzy.SHS.tempGood._CurrentCount,max);//设置最大购买数量
	}
	return max;
};







//=======================================================
//Window_ShopBuy
//=======================================================

if(!Zzy.SHS.YEPShopMenuCorePlugin)//不包含YEP前置插件时
{


Zzy.SHS.Window_ShopBuy_drawItem = Window_ShopBuy.prototype.drawItem;
Window_ShopBuy.prototype.drawItem = function(index) 
{
	//改变渲染内容
	
	if(Zzy.SHS.tempIsStockShop)
	{

		var goodInfo = Zzy.SHS.tempSceneShopGoods[index];
		var currentCount = goodInfo._CurrentCount;
		var maxCount = goodInfo._MaxCount;
		
		var item = this._data[index];
		var rect = this.itemRect(index);
		var priceWidth = 128;
		rect.width -= this.textPadding();
		
		
		var isEmpty = currentCount <= 0 ? true : false;//判断是否售空
		var isInfinite = maxCount === 0 ? true : false;//判断是否是无限商品
		
		
		var showFormat = Zzy.Param.SHSCountFormat;
		var infinFormat = Zzy.Param.SHSInfinFormat;
		var showStr = showFormat.format(currentCount,maxCount,this.price(item));
		var infinStr = infinFormat.format(Zzy.Param.SHSSaleInfiniteText,this.price(item));

		if(isEmpty && !isInfinite)//判断是否售空
		{
			//设置颜色信息
			var bkEmColor = Zzy.Param.SHSSaleEmptyBkColor;
			var bkSaleEmColor = Zzy.Param.SHSSaleEmptyColor;
			var bkEmText = Zzy.Param.SHSSaleEmptyText;
			this.changeTextColor(this.textColor(bkEmColor));
			this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);

			this.drawText(showStr, rect.x + rect.width - priceWidth,rect.y, priceWidth, 'right');
			this.changeTextColor(this.textColor(bkSaleEmColor));
			this.drawText(bkEmText, rect.x,rect.y,rect.width, 'center');
			this.resetTextColor();
		}
		else
		{
			this.changePaintOpacity(this.isEnabled(item));//设置金币不足时的透明度
			
			
			this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
			
			var tempText = '';
			if(isInfinite)
			{
				tempText = infinStr;
			}
			else
			{
				tempText = showStr;
			}
			this.drawText(tempText, rect.x + rect.width - priceWidth,rect.y, priceWidth, 'right');
			
			this.changePaintOpacity(true);//恢复透明度	
		}
	}
	else
	{Zzy.SHS.Window_ShopBuy_drawItem.call(this,index);}//原函数
};	


Zzy.SHS.Window_ShopBuy_drawItemName = Window_ShopBuy.prototype.drawItemName;
Window_ShopBuy.prototype.drawItemName = function(item, x, y, width)
{
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        //this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
	
	return;
	Zzy.SHS.Window_ShopBuy_drawItemName.call(this,item,x,y,width);
};

//=======================================================
//Scene_Shop
//=======================================================

Zzy.SHS.Scene_Shop_doBuy = Scene_Shop.prototype.doBuy;
Scene_Shop.prototype.doBuy = function(number) 
{
	Zzy.SHS.Scene_Shop_doBuy.call(this,number);
	
	if(Zzy.SHS.tempIsStockShop)
	{
		if(Zzy.SHS.tempGood && Zzy.SHS.tempGood._MaxCount > 0)
		{Zzy.SHS.tempGood._CurrentCount -= number;}//减少库存商品数量
		Zzy.SHS.tempGood = undefined;
	}
};


}
else//包含YEP前置插件时
{
	
	

Zzy.SHS.Scene_Shop_doBuy = Scene_Shop.prototype.doBuy;
Scene_Shop.prototype.doBuy = function(number) //执行购买
{
	Zzy.SHS.Scene_Shop_doBuy.call(this,number);

	if(Zzy.SHS.tempIsStockShop)
	{
		if(Zzy.SHS.tempGood && Zzy.SHS.tempGood._MaxCount > 0)
		{Zzy.SHS.tempGood._CurrentCount -= number;}//减少库存商品数量
		Zzy.SHS.tempGood = undefined;		
	}

   
};

Zzy.SHS.Window_ShopBuy_drawBuyPrice = Window_ShopBuy.prototype.drawBuyPrice;
Window_ShopBuy.prototype.drawBuyPrice = function(item, rect) 
{
	if(Zzy.SHS.tempIsStockShop)
	{	rect.width -= 80;   }
	Zzy.SHS.Window_ShopBuy_drawBuyPrice.call(this,item,rect);

	if(Zzy.SHS.tempIsStockShop)
	{	this.ZzySHSDrawCurMax(rect);  }
};



Window_ShopBuy.prototype.ZzySHSDrawCurMax = function(rect)
{
	var currentCount = this._ZzySHSCurrentCount;
	var maxCount = this._ZzySHSMaxCount;	
	var isEmpty = this._ZzySHSIsEmpty;//判断是否售空
	var isInfinite = this._ZzySHSIsInfinite;//判断是否是无限商品
	
	var showText = '';
	this.resetFontSettings();
	if(isEmpty && !isInfinite)//判断是否售空
	{
		showText = currentCount + '/' + maxCount;//设置文本内容
		
		var bkEmColor = Zzy.Param.SHSSaleEmptyBkColor;
		var bkSaleEmColor = Zzy.Param.SHSSaleEmptyColor;
		var bkEmText = Zzy.Param.SHSSaleEmptyText;
		this.changeTextColor(this.textColor(bkEmColor));
		
		this.drawText(showText,rect.width,rect.y,80,'right');
		this.changeTextColor(this.textColor(bkSaleEmColor));
		this.drawText(bkEmText,rect.x,rect.y,rect.width+80,'center');
		this.resetTextColor();
	}
	else
	{
		if(isInfinite)
		{
			showText = Zzy.Param.SHSSaleInfiniteText;
		}
		else
		{
			showText = currentCount + '/' + maxCount;//设置文本内容
		}
		this.drawText(showText,rect.width,rect.y,80,'right');
	}
	
}

Zzy.SHS.tempIndex = 0;//临时下标
Zzy.SHS.Window_ShopBuy_drawItem = Window_ShopBuy.prototype.drawItem;
Window_ShopBuy.prototype.drawItem = function(index) 
{
	if(Zzy.SHS.tempIsStockShop)
	{
	
		Zzy.SHS.tempIndex = index;
		var goodInfo = Zzy.SHS.tempSceneShopGoods[Zzy.SHS.tempIndex];
		this._ZzySHSCurrentCount = goodInfo._CurrentCount;
		this._ZzySHSMaxCount = goodInfo._MaxCount;	
		this._ZzySHSIsEmpty = goodInfo._CurrentCount <= 0 ? true : false;//判断是否售空
		this._ZzySHSIsInfinite = goodInfo._MaxCount === 0 ? true : false;//判断是否是无限商品
		
		var bkEmColor = Zzy.Param.SHSSaleEmptyBkColor;
		var bkSaleEmColor = Zzy.Param.SHSSaleEmptyColor;
		var bkEmText = Zzy.Param.SHSSaleEmptyText;
		
		if(this._ZzySHSIsEmpty && !this._ZzySHSIsInfinite)//判断是否售空
		{
			this.changeTextColor(this.textColor(bkEmColor));
		}
	
	}
     Zzy.SHS.Window_ShopBuy_drawItem.call(this,index);
};


Window_ShopBuy.prototype.drawItemName = function(item, x, y, width) 
{
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        //this.resetTextColor();
		
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ShopBuy.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) 
{
	
	var bkEmColor = Zzy.Param.SHSSaleEmptyBkColor;
	if(this._ZzySHSIsEmpty && !this._ZzySHSIsInfinite)//判断是否售空
	{
		this.changeTextColor(this.textColor(bkEmColor));
	}
	else
	{
		this.resetTextColor();
	}

    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

if(Zzy.SHS.YEPXMoreCurrenciesPlugin)//前置插件检测
{
	
	
Window_ShopBuy.prototype.drawAltCurrency = function(value, unit, wx, wy, ww) 
{
	var bkEmColor = Zzy.Param.SHSSaleEmptyBkColor;
	if(this._ZzySHSIsEmpty && !this._ZzySHSIsInfinite)//判断是否售空
	{
		this.changeTextColor(this.textColor(bkEmColor));
	}
	else
	{
		this.resetTextColor();
	}
    

    var iconIndex = 0;
    var unitText = '';
    if (DataManager.isItem(unit) || DataManager.isWeapon(unit) ||
    DataManager.isArmor(unit)) {
      var iconIndex = unit.iconIndex;
    } else if (unit.match(/VARIABLE[ ](\d+)/i)) {
      var name = $dataSystem.variables[parseInt(RegExp.$1)];
      if (name.match(/\\I\[(\d+)\]/i)) {
        var iconIndex = parseInt(RegExp.$1);
      }
      name = name.replace(/\\I\[(\d+)\]/gi, '');
      unitText = name.replace(/<<(.*?)>>/gi, '');
    }
    // Draw Text
    this.contents.fontSize = Yanfly.Param.MCCurrencyFontSize;
    if (unitText !== '') 
	{
		if(this._ZzySHSIsEmpty && !this._ZzySHSIsInfinite)//判断是否售空
		{this.changeTextColor(this.textColor(bkEmColor));}
		else
		{this.changeTextColor(this.systemColor());}	
      
      this.drawText(unitText, wx, wy, ww, 'right');
      ww -= this.textWidth(unitText);
    }
    // Draw Icon
    if (iconIndex > 0) {
      if (unitText !== '') ww -= 6;
      ww -= Window_Base._iconWidth;
      this.drawIcon(iconIndex, wx + ww, wy + 2);
    }
		if(this._ZzySHSIsEmpty && !this._ZzySHSIsInfinite)//判断是否售空
		{this.changeTextColor(this.textColor(bkEmColor));}
		else
		{this.resetTextColor();}
		
    this.drawText(Yanfly.Util.toGroup(value), wx, wy, ww, 'right');
    ww -= this.textWidth(Yanfly.Util.toGroup(value));
    this.resetFontSettings();
    return ww;
};	
	
	
}





	
}



//=======================================================
//Zzy.SHS.function
//=======================================================
Zzy.SHS.OpenStockOfID = function(StockId)
{
	if (!$gameParty.inBattle()) 
	{
		Zzy.SHS.tempSceneShopGoods = [];//清空
		//获取仓库数据信息
		var stock = $gameSystem.getZzySHSStockHouse(StockId);
		var isOnlySell = stock.isOnlySell;
		var sgoods = stock.goods;//获取商品
		var tgoods = [];
		
		var goodsLen = sgoods.length;

		for(var i=0;i<goodsLen;i++)
		{
			var sgood = sgoods[i];
			if(sgood.length <= 0)continue;
			
			//进行商品价格设置
			var tTypeId = Zzy.SHS.TypeStrToTypeId(sgood._Type);
			var tID = sgood._ID;
			var isAutoPrice = 0;
			var tPrice = sgood._Price;
			if(tPrice){isAutoPrice = 1;}
			var tgood = [tTypeId,tID,isAutoPrice,tPrice];
			
			//对商品进行输入
			tgoods.push(tgood);
			Zzy.SHS.tempSceneShopGoods.push(sgood);
		}
		
		tgoods[0][4] = true;//不知道为什么,但是第一个商品结尾会有一个true


		//压入商城
		SceneManager.push(Scene_Shop);
		//压入商品
		SceneManager.prepareNextScene(tgoods, isOnlySell);// 商品数组, 是否只支持销售
		//存储商品的临时数据内容
		
		//更新所有库中的进货情况
		Zzy.SHS.UpdateAllStockData();

		return true;
	}
	return false;

}

Zzy.SHS.UpdateAllStockData = function()
{
	var passTime = Zzy.SHS.tempPassTime;

	var StockArr = $gameSystem.ZzySHSStockHouseArr;
	var stockLen = StockArr.length;
	
	for(var i=0;i<stockLen;i++)
	{
		var stock = $gameSystem.getZzySHSStockHouse(i);
		if(!stock.goods.length){continue;}
		
		//去除里边的商品
		var goods = stock.goods;
		var goodsLen = goods.length;
		for(var j=0;j<goodsLen;j++)
		{
			var tempPassTime = passTime;
			
			var good = goods[j];//获取到商品
			if(!good){continue;}//如果物品是空则跳过
			
			if(!good._MaxCount){continue;}//如果物品没有上限不需要上货
			if(!good._IsCycling){continue;}//如果物品没有开启上货能力,不需要上货
			if(!good._Cycle){continue;}//上货周期为0,不需要上货
			if(!good._CycleMultiple){continue;}//上货倍率为0,不需要上货
			if(!good._AddGoodCount){continue;}//上货数量为0,不需要上货
			if(good._CurrentCount >= good._MaxCount){continue;}//货架数量满,不需要上货
			//通过passTime计算上货的经过
			
			tempPassTime = Math.floor(tempPassTime * good._CycleMultiple);//首先获取周期倍率增益
			var isComplete = false;//判断是否上货结束

			while(!isComplete)
			{
				if(good._CRealCycle >= good._RealCycle)
				{
					good._CRealCycle -= good._RealCycle;
					Zzy.SHS.ExecutingAddCount(good);//执行上货
				}
				else if(tempPassTime >= good._RealCycle)
				{
					tempPassTime -= good._RealCycle;//进行一次上货
					Zzy.SHS.ExecutingAddCount(good);//执行上货
				}
				else
				{
					good._CRealCycle += tempPassTime;
					if(good._CRealCycle < good._RealCycle)//小于上货周期
					{
						isComplete = true;
					}
					else
					{
						continue;//再次执行遍历
					}
				}
				
			}
			
		}
	}
}

Zzy.SHS.ExecutingAddCount = function(good)//执行上货
{
	//刷新上货周期
	good._RealCycle = Zzy.SHS.RandPerAndRnadFlat(good._Cycle,good._CyclePerRand,good._CycleFlatRand);
					
	//执行上货
	good._CurrentCount = Math.min(good._RealAddCount+good._CurrentCount,good._MaxCount);
	good._OnShelfTotalCount += good._RealAddCount;//上货重量记录
					
	//刷新上货数量周期
	good._RealAddCount = Zzy.SHS.RandPerAndRnadFlat(good._AddGoodCount,good._AddGoodPerRand,good._AddGoodFlatRand);
									
	good._RealCycle = Math.max(good._RealCycle,0);//防止出现负数
	good._RealAddCount = Math.max(good._RealAddCount,0);//防止出现负数
}


Zzy.SHS.RandPerAndRnadFlat = function(Value,RandPer,RandFlat)//运算:返回一个范围内的随机数
{
	if(!RandPer && !RandFlat)return Value;

	var per = 1 + Zzy.SHS.RandomPlusMinus((Math.random() * RandPer)) * 0.01;
	
	var flat = Zzy.SHS.RandomPlusMinus(Math.floor(Math.random() * RandFlat));
	
	Value = Math.floor((Value*per) + flat);
	return Value;
}  
  
Zzy.SHS.RandomPlusMinus = function(val)//随机正负效果
{
	var r = Math.floor(Math.random() * 2);
	
	return r === 1 ? val : -val;
}
  
Zzy.SHS.TypeStrToTypeId = function(TypeStr)//类别转换
{
	switch(TypeStr)
	{
		case 'Item':case 'item':return 0;
		case 'Weapon':case 'weapon':return 1;
		case 'Armor':case 'armor':return 2;
	}
}  
  
Zzy.SHS.Open = function(stockId)//打开ID号仓库
{
	if(!$gameSystem.ZzySHSStockHouseArr[stockId])return;
		
	//执行打开商店操作
	$gameSystem.ZzySHSStockHouseArr[stockId].openCount++;//增加打开次数
	//设置经过时长
	Zzy.SHS.tempPassTime = $gameSystem.ZzySHSRecordTime();
	Zzy.SHS.OpenStockOfID(stockId);
	Zzy.SHS.tempIsStockShop = true;	
}

Zzy.SHS.OnlySell = function(stockId,flag)//这将为编号为ID的仓库,flag确认打开属性,(true支持买和卖 , false只支持买)
{
	if(!$gameSystem.ZzySHSStockHouseArr[stockId])return;
	$gameSystem.ZzySHSStockHouseArr[stockId].isOnlySell = isOnlySell;	
}

Zzy.SHS.AddGoodAll = function(stockId,type,ID,price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand)
{
	//添加数据
	$gameSystem.ZzySHSAddGood(stockId,type,ID,price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand);
	
}

Zzy.SHS.SubGood = function(stockId,type,ID)//这将会从你的商品文档中删除这个商品(如果有的话)的所有信息
{
	//移除数据
	$gameSystem.ZzySHSSubGood(stockId,type,ID);	
}

Zzy.SHS.ResetGood = function(stockId,type,ID,price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand)
{
	//重置数据
	$gameSystem.ZzySHSSetGood(stockId,type,ID,price,maxCount,cycle,currentCount,isCycling,cyclePerRand,cycleFlatRand,cycleMultiple,addGoodCount,addGoodPerRand,addGoodFlatRand);
	
}

Zzy.SHS.AddCount = function(stockId,type,ID,count)//这将增加指定库中指定商品的个数,如果没有这个商品则忽略,添加商品个数不会超过最大数量上限
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	var newCount = good._CurrentCount + count;
	good._CurrentCount = newCount > this._MaxCount ? this._MaxCount : newCount;	
}

Zzy.SHS.AddMaxCount = function(stockId,type,ID,count)//这将减少指定库中指定商品最大个数,如果没有这个商品则忽略,减少商品最大个数不会小于0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	good._MaxCount += count;	
}

Zzy.SHS.AddPrice = function(stockId,type,ID,count)//这将增加指定库中指定商品的价格
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	good._Price += count;	
}

Zzy.SHS.SubCount = function(stockId,type,ID,count)//这将减少指定库中指定商品的个数,如果没有这个商品则忽略,减少商品个数不会小于0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	var newCount = good._CurrentCount - count;
	good._CurrentCount = newCount < 0 ? 0 : newCount;	
}

Zzy.SHS.SubMaxCount = function(stockId,type,ID,count)//这将减少指定库中指定商品最大个数,如果没有这个商品则忽略,减少商品最大个数不会小于0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	var newCount = good._MaxCount - count;
	good._MaxCount = newCount < 0 ? 0 : newCount;
	good._CurrentCount = Math.min(good._CurrentCount,good._MaxCount);	
}

Zzy.SHS.SubPrice = function(stockId,type,ID,count)//这将减少指定库中指定商品价格,如果没有这个商品则忽略,减少商品价格不会小于0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	var newPrice = good._Price - count;
	good._Price = newPrice < 0 ? 0 : newPrice;		
}

Zzy.SHS.SetCount = function(stockId,type,ID,count)//这将设置指定库中指定商品的个数,如果没有这个商品则忽略,商品个数不会超过最大数量上限
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	good._CurrentCount = count < 0 ? 0 : count;	
}

Zzy.SHS.SetMaxCount = function(stockId,type,ID,count)//这将设置指定库中指定商品的最大个数,如果没有这个商品则忽略,设置最大个数低于商品个数后,商品个数会下降
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;	
	good._MaxCount = count < 0 ? 0 : count;
	good._CurrentCount = Math.min(good._CurrentCount,good._MaxCount);
			
}

Zzy.SHS.SetPrice = function(stockId,type,ID,count)//这将设置指定库中指定商品价格,如果没有这个商品则忽略,这个价格可以设置为0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._Price = count < 0 ? 0 : count;	
}

Zzy.SHS.SetCycle = function(stockId,type,ID,count)//这将设置指定库中指定商品的上货周期
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._Cycle = count < 0 ? 0 : count;	
}

Zzy.SHS.SetIsCycling = function(stockId,type,ID,flag)//这将设置指定库中指定商品是否开启进货周期
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._IsCycling = flag ? true : false;		
}

Zzy.SHS.SetCyclePerRand = function(stockId,type,ID,per)//这将设置指定库中指定商品的百分比随机周期 填写范围可以是(0~100)代表百分比
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;	
	good._CyclePerRand = per < 0 ? 0 : per;	
}

Zzy.SHS.SetCycleFlatRand = function(stockId,type,ID,cFrame)//这将设置指定库中指定商品的平坦随机周期
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._CycleFlatRand = cFrame < 0 ? 0 : cFrame;	
}

Zzy.SHS.SetCycleMultiple = function(stockId,type,ID,rate)//这将设置指定库中指定商品的周期运行倍率
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._CycleMultiple = rate < 0 ? 0 : rate;
}

Zzy.SHS.SetAddGoodCount = function(stockId,type,ID,count)//这将设置指定库中指定商品的每次上货数量
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;	
	good._AddGoodCount = count < 0 ? 0 : count;	
}

Zzy.SHS.SetAddGoodPerRand = function(stockId,type,ID,per)//这将设置指定库中指定商品的每次上货数量浮动百分比 填写范围可以是(0~100)代表百分比
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;		
	good._AddGoodPerRand = per < 0 ? 0 : per;	
}

Zzy.SHS.SetAddGoodFlatRand = function(stockId,type,ID,count)//这将设置指定库中指定商品的每次上货数量浮动数值 浮动后的结果不会小于等于0
{
	var good = $gameSystem.getZzySHSgood(stockId,type,ID);
	if(!good)return;
	good._AddGoodFlatRand = count < 0 ? 0 : count;	
}

Zzy.SHS.AddAllCount = function(count)//这将上调所有库中所有商品的数量 数量不会低于0 或者高于最大数量
{
	$gameSystem.ZzySHSModifyAllParam(1,1,count);	
}

Zzy.SHS.SubAllCount = function(count)//这将下调所有库中所有商品的数量 数量不会低于0 或者高于最大数量
{
	$gameSystem.ZzySHSModifyAllParam(2,1,count);	
}

Zzy.SHS.AddAllMaxCount = function(count)//这将上调所有库中所有商品的最大数量 最大数量不会低于0
{
	$gameSystem.ZzySHSModifyAllParam(1,2,count);	
}

Zzy.SHS.SubAllMaxCount = function(count)//这将下调所有库中所有商品的最大数量 最大数量不会低于0
{
	$gameSystem.ZzySHSModifyAllParam(2,2,count);
}

Zzy.SHS.AddAllPrice = function(price)//这将上调所有库中所有商品的价格 价格不会小于0
{
	$gameSystem.ZzySHSModifyAllParam(1,3,price);	
}

Zzy.SHS.SubAllPrice = function(price)//这将下调所有库中所有商品的价格 价格不会小于0
{
	$gameSystem.ZzySHSModifyAllParam(2,3,price);	
}

Zzy.SHS.SetRecoveryAllCount = function()//这将恢复所有库中所有商品的数量到最大数量
{
	$gameSystem.ZzySHSReClAllCount(true);	
}

Zzy.SHS.SetClearAllCount = function()//这将清空所有库中所有商品的数量到0
{
	$gameSystem.ZzySHSReClAllCount(false);	
}

Zzy.SHS.SetYESCyclingAll = function()//这将让所有库中所有商品的周期都开始活跃
{
	$gameSystem.ZzySHSCyclingAll(true);	
}

Zzy.SHS.SetNOCyclingAll = function()//这将让所有库中所有商品的周期都进行暂停
{
	$gameSystem.ZzySHSCyclingAll(false);
}

