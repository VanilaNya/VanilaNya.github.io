/*:
 * @plugindesc v1.06 ShowAnimation 显示动画
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 * 在RPGMaker中，动画特效只能展示在事件或者玩家的身上，这使得有些效果十分不好实现
 *
 * 这个插件可以让你更方便的展示动画,可以让你在地图上任意一点出现特效动画
 *
 *
 *---------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 * 
 *---------------------------------------------------------
 *
 *
 * 注意动画对象的ID可以从1开始,填入0不会有任何效果，这我是为了方便而从1开始计数
 * 注意动画对象不会在地图中缓存，切换场景后需要重新设置动画对象
 * 注意动画对象设置完成参数后,每次进行播放都会重新播放
 *
 *
 * 以下是插件命令
 =================================================================
 *----------Command Plugin----------------
 * 
 
 
 ZzySAFInfoAll objId animaId isMirror Delay Loop
 -设置一个动画播放信息 以下是参数的介绍
 
 -objId:管理动画对象的ID 这个值可以自定义，但不要与游戏中正在播放动画的对象的ID冲突,这个ID值可以添加多个或一个范围,用','或是'~'来进行分割
 -animaId:动画ID 这代表这个对象会播放哪个动画 ID值参考数据库-动画 中的ID值
 -isMirror:是否镜像 开启后动画会镜像播放,如果不想设置,可以不填写
 -Delay:延时播放,帧数为单位,执行播放命令后会延时指定帧数后再播放,如果不延时,可以设置0,或者不填写
 -Loop:循环播放,在指定的帧数后会进行循环播放,如果不循环,可以设置0,或者不填写
 
 例:
 ZzySAFInfoAll 2 76 false 50 180
 -将动画对象2 赋予76号动画(雷电/单体) 不镜像 延迟50帧后播放 并每180帧进行循环播放
 例:
 ZzySAFInfoAll 4 66
 -将动画对象4 赋予66号动画(焰/单体) 不镜像 没有延迟 不循环播放
 例: 
 ZzySAFInfoAll 1~10 76
 -将动画对象1~10号赋予76号动画(雷电/单体)
 例: 
 ZzySAFInfoAll 5,6,7,10~15 76
 -将动画对象5,6,7,10,11,12,13,14,15号赋予76号动画(雷电/单体)
 

 
 ZzySAFInfo AnimaId x y
 -將动画对象x的播放动画ID设置为y,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFInfo Mirror x y
 -將动画对象x的镜像设置为y(true/false),这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFInfo Delay x y
 -將动画对象x延迟播放设置为y帧数,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFInfo Loop x y
 -將动画对象x的循环播放设置为y帧数,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFPos Screen x y z
 -将动画对象x的位置设置在屏幕上(y,z)像素位置,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFPos Event x y x2 y2
 -将动画对象x的位置设置在事件x的位置上,y代表这个事件的ID,同时还可以添加(x2,y2)的像素偏移量,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 -如果事件的ID填0,则会将使用角色目前的位置信息


 ZzySAFPos Map x y z x2 y2
 -将动画对象x的位置设置在地图上第(y,z)格,同时还可以添加(x2,y2)的像素偏移量,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFPos Offset x y z
 -将动画对象x的位置设置(y,z)的像素偏移量,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFSetAll objId ScaleX ScaleY Opacity Hue Fixed Range
  -设置一个动画播放信息 以下是参数的介绍
  
 -objId:管理动画对象的ID 这个值可以自定义，但不要与游戏中正在播放动画的对象的ID冲突,这个ID值可以添加多个或一个范围,用','或是'~'来进行分割
 -ScaleX:动画对象x的宽度比例值,默认值为1,若设置为2,那么宽度会*2,如果不填写默认值为1
 -ScaleY:动画对象x的高度比例值,默认值为1,若设置为2,那么高度会*2,如果不填写默认值为1
 -Opacity:动画对象x的透明度,默认值为255,设置范围(0~255)，如果不填写默认值为255
 -Hue:动画对象x的色相,默认值为0,,设置范围(0~360),如果不填写默认值为0
 -Fixed:动画是否固定在地图指定的位置,设置true代表固定,false代表跟随画面进行移动,如果不填写默认为false
 -Range:动画相应范围,这是要保证Fixed为true的情况下,玩家队友与动画的距离
  Range是半径，范围是 2*Range+1 X 2*Range+1的正方矩形,当玩家队伍在这个范围内才会执行动画效果,默认值是0,代表没有这个效果
  
 例子:ZzySAFSetAll 5 1.2 1.2 200 30 true 6
 -动画对象5的缩放为1.2 透明度200 色相30 固定在地图上指定位置 只有接近动画在6格之内才会执行
 例子:ZzySAFSetAll 6
 -动画对象6缩放为1 透明度255 色相0 不固定在地图上
 例子:ZzySAFSetAll 5~8,10,12
 -动画对象5,6,7,8,10,12缩放为1 透明度255 色相0 不固定在地图上


 ZzySAFSet Scale x y z
 -将动画对象x的长宽比例设置为(y,z),这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFSet Opacity x y
 -将动画对象x的透明度设置为y范围(0~255),这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFSet Hue x y
 -将动画对象x的色相值为y(0~360),这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFSet Fixed x y
 -将动画对象x是否固定在地图上设置为y(true/false),这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 如果设置为固定,那么动画位置就不会跟随屏幕卷动一起改变
 
 
 ZzySAFPlay x
 -这将播放动画对象x,保证对象参数全部设置完成,这个x值可以添加多个或一个范围,用','或是'~'来进行分割
 
 
 ZzySAFPlay x x x ...
 -这将播放动画对象x1,x2,x3...保证对象参数全部设置完成
 
 ZzySAFPlayAll
 -这将播放在场的全部动画对象
 
 
 ZzySAFClear x
 - 清除动画对象x的内容
 
 
 ZzySAFClear x x x ...
 - 清除动画对象x1,x2,x3...的内容
 
 
 ZzySAFClearAll
 - 立刻清除所有动画

 
 注意：指令存在优先级顺序
 ZzySAFInfoAll -> ZzySAFSetAll -> ZzySAFPos 的顺序去设置
 
 
 完整案例:
 例:
 插件命令: ZzySAFInfoAll 1 76 false 0 180                       //设置动画的初始化信息
 插件命令: ZzySAFSetAll 1 1.5 1.5 200 150 true 6                //设置动画的更详细参数
 插件命令: ZzySAFPos Screen 1 500 250                           //设置动画在屏幕上的位置
 插件命令: ZzySAFPlay 1                                         //播放是指完成的动画效果
 
 
 则会播放闪电动画效果在指定位置,并进行循环
 

 
 * 以下是脚本函数
 =================================================================
 *----------Script Function----------------
 
Zzy.SAF.InfoAll(objId,animaId,isMirror,delay,loop)      -设置一个动画播放信息,参1:管理动画对象的ID  参2:动画ID  参3:是否镜像  参4:延迟  参5:循环时长

Zzy.SAF.InfoAnimaId(objId,animaId)                -將动画对象ID的播放动画ID进行设置

Zzy.SAF.InfoMirror(objId,isMirror)                -將动画对象ID设置是否镜像

Zzy.SAF.InfoDelay(objId,Delay)                    -將动画对象ID设置延迟时长

Zzy.SAF.InfoLoop(objId,loop)                      -將动画对象ID设置是否循环

Zzy.SAF.PosScreen(objId,sx,sy)                    -將动画对象ID设置屏幕显示的位置

Zzy.SAF.PosEvent(objId,evId,ofex,ofey)            -將动画对象ID设置事件ID显示的位置,同时拥有x,y的偏移量
 
Zzy.SAF.PosMap(objId,mx,my,ofmx,ofmy)             -將动画对象ID设置地图显示的位置,同时拥有x,y的偏移量

Zzy.SAF.PosOffset(objId,ofx,ofy)                  -將动画对象ID设置添加偏移量

Zzy.SAF.SetAll(objId,scaleX,scaleY,opacity,hue,fixed,range)    -设置一个动画播放信息,参1:管理动画对象的ID  参2:缩放X  参3:缩放Y  参4:透明度  参5:色相  参6:是否固定  参7:范围

Zzy.SAF.SetScale(objId,scaX,scaY)                 -將动画对象ID设置缩放X比率和Y比率

Zzy.SAF.SetOpacity(objId,opa)                     -将动画对象ID设置透明度,范围0~255

Zzy.SAF.SetHue(objId,hue)                         -将动画对象ID设置色相,范围0~360

Zzy.SAF.SetFixed(objId,isFixed)                   -將动画对象ID设置是否固定在地图上,true代表固定,false代表取消固定

Zzy.SAF.Play(Id)                                  -將动画对象ID设置播放动画

Zzy.SAF.PlayAll()                                 -播放所有设置好的动画

Zzy.SAF.Clear(Id)                                 -清理动画对象ID设置好的动画

Zzy.SAF.ClearAll()                                -清理所有设置好的动画
 
 
 ============================================================================
 
 
 我叫坂本：1.06 添加动画编号存储信息,使得动画不用在每次刷新地图后重新设置
 我叫坂本：1.05 修复ZzySAFClear无效的指令,添加跨地图动画有效性参数
 我叫坂本：1.04 修复停止动画无效的bug,修复刷新动画后导致的缩放值错误的问题,拓展新的脚本
 我叫坂本：1.03 添加与旧存档兼容
 我叫坂本：1.02 使用Map类型函数时获取位置错误的问题
 我叫坂本：1.01 修复Event和Map获取真实位置错误问题
 我叫坂本：1.00 完成插件
 
 
 ============================================================================
 *
 * @param ---模式---
 * @default
 * @param IsOtherMapAnimaBeing
 * @text 跨地图动画存在
 * @parent ---模式---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 这个效果如果选择true,那么在加载新地图后,动画依然继续播放,如果选择false,则清除动画播放
 * YES - true     NO - false
 * @default false
 *
*/

var LiuYue = LiuYue || {};
LiuYue.LiuYue_ShowAnimation = true;//插件启动

var Zzy = Zzy || {};
Zzy.SAF = Zzy.SAF || {};
Zzy.SAF.version = 1.06;  
Zzy.Parameters = PluginManager.parameters('LiuYue_ShowAnimation');
Zzy.Param = Zzy.Param || {};

Zzy.Param.SAFIsOtherMapAnimaBeing = eval(Zzy.Parameters['IsOtherMapAnimaBeing']);

//临时数据
Zzy.SAF.tempSAFWindowPointer = undefined;//临时窗口指针

//=================================================================
//Game_System
//=================================================================
Zzy.SAF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.SAF.Game_System_initialize.call(this);
	this.ZzySAFInitData();//初始化颜色
};

Game_System.prototype.ZzySAFInitData = function()
{
	//缓存动画效果
	this.ZzySAFTempDataArr = [];
	this.ZzySAFMapId = 0;
	
	this.ZzySAFSaveAnimaArr = [];//存储动画效果
}


Game_System.prototype.GetZzySAFSaveAnimaArr = function()
{
	if(this.ZzySAFSaveAnimaArr === undefined)
	{this.ZzySAFSaveAnimaArr = [];}
	return this.ZzySAFSaveAnimaArr;
}

Game_System.prototype.ClearZzySAFSaveAnimaData = function(ID)
{
	this.GetZzySAFSaveAnimaArr();
	this.ZzySAFSaveAnimaArr[ID] = undefined;
}

Game_System.prototype.ClearZzySAFSaveAnimaDataAll = function()
{
	this.ZzySAFSaveAnimaArr = [];
}

//asd
Game_System.prototype.GetZzySAFSaveAnimaData = function(ID)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	return arr[ID];
}

Game_System.prototype.SetZzySAFArrAnimaId = function(objId,animaId)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].animaId = animaId;
}

Game_System.prototype.SetZzySAFArrIsMirror = function(objId,isMirror)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].isMirror = isMirror;
}

Game_System.prototype.SetZzySAFArrDelay = function(objId,delay)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].delay = delay;
}

Game_System.prototype.SetZzySAFArrLoop = function(objId,loop)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].loop = loop;
}

Game_System.prototype.SetZzySAFArrScreenPos = function(objId,sx,sy)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].sx = sx;
	arr[objId].sy = sy;
	arr[objId].posMode = 'screen';//屏幕显示
}


Game_System.prototype.SetZzySAFArrEventPos = function(objId,evId,ofex,ofey)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].evId = evId;	
	arr[objId].sx = ofex;
	arr[objId].sy = ofey;
	arr[objId].posMode = 'event';
}

Game_System.prototype.SetZzySAFArrMapPos = function(objId,mx,my,ofmx,ofmy)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].mx = mx;
	arr[objId].my = my;	
	arr[objId].sx = ofmx;
	arr[objId].sy = ofmy;
	arr[objId].posMode = 'map';	
}

Game_System.prototype.SetZzySAFArrScale = function(objId,scaX,scaY)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].scaX = scaX;
	arr[objId].scaY = scaY;
}

Game_System.prototype.SetZzySAFArrOpacity = function(objId,opa)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].opa = opa;
}

Game_System.prototype.SetZzySAFArrHue = function(objId,hue)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].hue = hue;	
}



Game_System.prototype.SetZzySAFArrIsFixed = function(objId,isFixed)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].isFixed = isFixed;		
}

Game_System.prototype.SetZzySAFArrRange = function(objId,range)
{
	var arr = this.GetZzySAFSaveAnimaArr();
	if(!arr[objId]){arr[objId] = {};}
	arr[objId].range = range;		
}




Game_System.prototype.ExeZzySAFNewMapId = function()
{
	var mapId = $gameMap.mapId();
	if(this.ZzySAFMapId !== mapId)
	{
		this.ZzySAFMapId = mapId;
		return true;
	}
	return false;
}

Game_System.prototype.ClearZzySAFTempDataArr = function()
{
	this.ZzySAFTempDataArr = [];
}


Game_System.prototype.getZzySAFTempDataArr = function()
{
	if(this.ZzySAFTempDataArr === undefined)
	{this.ZzySAFTempDataArr = [];}
	return this.ZzySAFTempDataArr;
}

Game_System.prototype.getZzySAFTempData = function(index)
{
	var tArr = this.getZzySAFTempDataArr();
	if(tArr[index] === undefined)//初始化
	{
		tArr[index] = {};
		tArr[index]._mirror = false;
		tArr[index]._delay = 0;
		tArr[index]._rate = 4;
		tArr[index]._duration = 0;
		tArr[index]._flashDuration = 0;
		tArr[index]._screenFlashDuration = 0;
		tArr[index]._hidingDuration = 0;
		tArr[index]._duplicated = false;
		tArr[index].z = 8;
		tArr[index]._animaId = 0;//动画ID
		tArr[index]._executing = false;//是否在执行中
		tArr[index]._isFixed = false;//是否是固定位置
		tArr[index]._isLoop = false;//是否循环播放
		tArr[index]._orX = -1;//保持原位
		tArr[index]._orY = -1;
		tArr[index]._x = 0;
		tArr[index]._y = 0;
		tArr[index]._realX = 0;//实际下标X
		tArr[index]._realY = 0;//实际下标Y
		tArr[index]._loop = 0;//循环播放帧数
		tArr[index]._Cloop = 0;//循环播放下标
		tArr[index]._hue = 0;//色相
		tArr[index]._isRange = false;//开启范围
		tArr[index]._range = 0;//范围数值
		tArr[index]._scaleX = 1;
		tArr[index]._scaleY = 1;
	}
	return tArr[index];
}

Game_System.prototype.ZzySAFSave = function(ID,tempData)//缓存
{
	var tData2 = this.getZzySAFTempData(ID);//初始化
	
	tData2._mirror = tempData._mirror;
	tData2._delay = tempData._delay;
	tData2._rate = tempData._rate;
	tData2._duration = tempData._duration;
	tData2._flashDuration = tempData._flashDuration;
	tData2._screenFlashDuration = tempData._screenFlashDuration;
	tData2._hidingDuration = tempData._hidingDuration;
	tData2._duplicated = tempData._duplicated;
	tData2.z = tempData.z;
	tData2._animaId = tempData._animaId;
	tData2._executing = tempData._executing;
	tData2._isFixed = tempData._isFixed;
	tData2._isLoop = tempData._isLoop;
	tData2._orX = tempData._orX;
	tData2._orY = tempData._orY;
	tData2._x = tempData._x;
	tData2._y = tempData._y;
	tData2._realX = tempData._realX;
	tData2._realY = tempData._realY;
	tData2._loop = tempData._loop;
	tData2._Cloop = tempData._Cloop;
	tData2._hue = tempData._hue;
	tData2._isRange = tempData._isRange;
	tData2._range = tempData._range;
	tData2._scaleX = tempData._scaleX;
	tData2._scaleY = tempData._scaleY;	
}

//================================================================
//Game_Interpreter
//================================================================
Zzy.SAF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Zzy.SAF.Game_Interpreter_pluginCommand.call(this,command,args);
	
	if(command === 'ZzySAFInfoAll')
	{this.ZzySAFInfoAll(args);}
	else if(command === 'ZzySAFInfo')
	{this.ZzySAFInfo(args);}
	else if(command === 'ZzySAFPos')
	{this.ZzySAFPos(args);}
	else if(command === 'ZzySAFSetAll')
	{this.ZzySAFSetAll(args);}
	else if(command === 'ZzySAFSet')
	{this.ZzySAFSet(args);}
	else if(command === 'ZzySAFPlay')
	{this.ZzySAFPlay(args);}
	else if(command === 'ZzySAFPlayAll')
	{this.ZzySAFPlayAll(args);}
	else if(command === 'ZzySAFClear')
	{this.ZzySAFClear(args);}
	else if(command === 'ZzySAFClearAll')
	{this.ZzySAFClearAll(args);}

}

Game_Interpreter.prototype.ZzySAFInfoAll = function(args)
{
	//1 objId //2 animaId //3 isMirror //4 Delay //5 Loop
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	
	
	var animaId = parseInt(args[1]);
	var isMirror = !!eval(String(args[2])) ? true : false;
	var delay = parseInt(args[3]) ? parseInt(args[3]) : 0;
	var loop = parseInt(args[4]) ? parseInt(args[4]) : 0;	
	
	var objIdArr = Zzy.SAF.IDStrToArr(args[0]);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)
	{
		var objId = objIdArr[i];
		Zzy.SAF.tempSAFWindowPointer.InfoAnimation(objId,animaId,isMirror,delay,loop);	
	}
}

Game_Interpreter.prototype.ZzySAFInfo = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	
	var command = String(args[0]);
	
	var objIdArr = Zzy.SAF.IDStrToArr(args[1]);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)
	{
		var objId = objIdArr[i];
		
		switch(command)
		{
			  case 'AnimaId':
				var animaId = parseInt(args[2]);
				Zzy.SAF.tempSAFWindowPointer.AnimationAnimaId(objId,animaId);
				break;
			  case 'Mirror':
				var isMirror = !!eval(String(args[2])) ? true : false;
				Zzy.SAF.tempSAFWindowPointer.AnimationMirror(objId,isMirror);
			  break;
			  case 'Delay':
				var delay = parseInt(args[2]) ? parseInt(args[2]) : 0;
				Zzy.SAF.tempSAFWindowPointer.AnimationDelay(objId,delay);
			  break;
			  case 'Loop':
				var loop = parseInt(args[2]) ? parseInt(args[2]) : 0;
				Zzy.SAF.tempSAFWindowPointer.AnimationLoop(objId,loop);
			  break;
		}		
	}
	
}

Game_Interpreter.prototype.ZzySAFPos = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();

	var command = String(args[0]);
		
	var objIdArr = Zzy.SAF.IDStrToArr(args[1]);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)
	{
		var objId = objIdArr[i];
		
		switch(command)
		{
			  case 'Screen':
				var sx = parseInt(args[2]);
				var sy = parseInt(args[3]);
				Zzy.SAF.tempSAFWindowPointer.AnimationScreenPos(objId,sx,sy);
			  break;
			  case 'Event':
				var evId = parseInt(args[2]);
				var ofex = parseInt(args[3]) ? parseInt(args[3]) : 0;
				var ofey = parseInt(args[4]) ? parseInt(args[4]) : 0;
				Zzy.SAF.tempSAFWindowPointer.AnimationEventPos(objId,evId,ofex,ofey);
			  break;
			  case 'Map':
				var mx = parseInt(args[2]);
				var my = parseInt(args[3]);	
				var ofmx = parseInt(args[4]) ? parseInt(args[4]) : 0;
				var ofmy = parseInt(args[5]) ? parseInt(args[5]) : 0;
				Zzy.SAF.tempSAFWindowPointer.AnimationMapPos(objId,mx,my,ofmx,ofmy);
			  break;
			  case 'Offset':
				var ofx =  parseInt(args[2]);
				var ofy =  parseInt(args[3]);
				Zzy.SAF.tempSAFWindowPointer.AnimationOffsetPos(objId,ofx,ofy);
			  break;
		}		
	}		
		
}

Game_Interpreter.prototype.ZzySAFSetAll = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	

	var scaleX = Number(args[1]) ?  Number(args[1]) : 1;
	var scaleY = Number(args[2]) ?  Number(args[2]) : 1;
	var opacity = Number(args[3]) ? Number(args[3]) : 255;
	var hue = Number(args[4]) ? Number(args[4]) : 0;
	var fixed = !!eval(String(args[5])) ? true : false;
	var range = parseInt(args[6]) ? parseInt(args[6]) : 0;

	var objIdArr = Zzy.SAF.IDStrToArr(args[0]);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)
	{
		var objId = objIdArr[i];
		Zzy.SAF.tempSAFWindowPointer.SetAnimation(objId,scaleX,scaleY,opacity,hue,fixed,range);
	}


}

Game_Interpreter.prototype.ZzySAFSet = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	
	var command = String(args[0]);

	var objIdArr = Zzy.SAF.IDStrToArr(args[1]);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)
	{
		var objId = objIdArr[i];
		
		switch(command)
		{
			case 'Scale':
				var scaX = Number(args[2]);
				var scaY = Number(args[3]);
				Zzy.SAF.tempSAFWindowPointer.AnimationScale(objId,scaX,scaY);
			break;
			case 'Opacity':
				var opa = Number(args[2]);
				Zzy.SAF.tempSAFWindowPointer.AnimationOpacity(objId,opa);
			break;
			case 'Hue':
				var hue = Number(args[2]);
				Zzy.SAF.tempSAFWindowPointer.AnimationHue(objId,hue);
			break;
			case 'Fixed':
				var isFixed = !!eval(String(args[2])) ? true : false;
				Zzy.SAF.tempSAFWindowPointer.AnimationFixed(objId,isFixed);
			break;
		}		
	}

}

Game_Interpreter.prototype.ZzySAFPlay = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	
	
	var objIdArr = [];
	objIdArr = Zzy.SAF.StringToNumber(args);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)//逐一播放
	{
		var Id = objIdArr[i];
		Zzy.SAF.tempSAFWindowPointer.RePlayAnimation(Id);//播放ID
	}
}

Game_Interpreter.prototype.ZzySAFPlayAll = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	Zzy.SAF.tempSAFWindowPointer.RePlayAnimationAll();//全部播放
}

Game_Interpreter.prototype.ZzySAFClear = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	
	
	var objIdArr = [];
	objIdArr = Zzy.SAF.StringToNumber(args);
	var len = objIdArr.length;
	for(var i=0;i<len;i++)//逐一清除
	{
		var Id = objIdArr[i];
		Zzy.SAF.tempSAFWindowPointer.ClearAnimation(Id);//清除动画缓存
	}
}

Game_Interpreter.prototype.ZzySAFClearAll = function(args)
{
	if(!Zzy.SAF.tempSAFWindowPointer)return;
	var list = Zzy.SAF.tempSAFWindowPointer.getList();
	Zzy.SAF.tempSAFWindowPointer.ClearAnimationAll();//清除所有的动画缓存
}

//=====================================================================
//Scene_Map
//=====================================================================

var ZzyScene_Map_start = Scene_Map.prototype.start;//创建窗口添加
Scene_Map.prototype.start = function() 
{
    ZzyScene_Map_start.call(this);
	Zzy.SAF.tempSAFWindowPointer = this.ZzySAFAddWindow();//添加窗口
	
	this._ZzySAFWindow.LoadZzySAFAnimaData();//读取_list对象进行初始化
};

Scene_Map.prototype.ZzySAFAddWindow = function()//添加子窗口用于显示动画特效
{
	this._ZzySAFWindow = new Window_ZzySAFWindow();
	
	this.addChild(this._ZzySAFWindow);
	return this._ZzySAFWindow;
}

Zzy.SAF.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() 
{
	Zzy.SAF.Scene_Map_terminate.call(this);
    this.removeChild(this._ZzySAFWindow);
	
	//存储
	this._ZzySAFWindow.SaveZzySAFAnimaData();//存储_list对象
	Zzy.SAF.tempSAFWindowPointer = undefined;//失去临时窗口指针
	
};


//=====================================================================
//Window_ZzySAFWindow
//=====================================================================

function Window_ZzySAFWindow()
{
    this.initialize.apply(this, arguments);
}

Window_ZzySAFWindow.prototype = Object.create(Window_Base.prototype);
Window_ZzySAFWindow.prototype.constructor = Window_ZzySAFWindow;


Window_ZzySAFWindow.prototype.initialize = function(numLines) 
{
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.width, Graphics.height);
	this.opacity = 0;

	this._list = [];//存放动画效果的数组
};

Window_ZzySAFWindow.prototype.getList = function()
{
	return this._list;
}

//asd

Window_ZzySAFWindow.prototype.InfoAnimation = function(objId,animaId,isMirror,delay,loop)//添加动画
{
	if(!objId)return;
	this.processObjId(objId);
	//进行赋值

	this.AnimationAnimaId(objId,animaId);
	this.AnimationMirror(objId,isMirror);
	this.AnimationDelay(objId,delay);
	this.AnimationLoop(objId,loop);
}

Window_ZzySAFWindow.prototype.processObjId = function(objId)//处理ID,判断是否存在,不存在则申请
{
	if(!this._list[objId])//是空值,申请
	{
		this._list[objId] = new Sprite_ZzySAFAnimation();
		//添加到渲染
		this.addChild(this._list[objId]);
	}
}

Window_ZzySAFWindow.prototype.AnimationAnimaId = function(objId,animaId,flag)
{
	this.processObjId(objId);
	this._list[objId].resetAnimation(animaId);//申请动画
	if(!flag)$gameSystem.SetZzySAFArrAnimaId(objId,animaId);
}

Window_ZzySAFWindow.prototype.AnimationMirror = function(objId,isMirror,flag)
{
	this.processObjId(objId);
	this._list[objId].resetMirror(isMirror);
	if(!flag)$gameSystem.SetZzySAFArrIsMirror(objId,isMirror);
}

Window_ZzySAFWindow.prototype.AnimationDelay = function(objId,delay,flag)
{
	this.processObjId(objId);
	this._list[objId].setDelayPlay(delay);
	if(!flag)$gameSystem.SetZzySAFArrDelay(objId,delay);
}

Window_ZzySAFWindow.prototype.AnimationLoop = function(objId,loop,flag)
{
	this.processObjId(objId);
	this._list[objId].setLoop(loop);
	if(!flag)$gameSystem.SetZzySAFArrLoop(objId,loop);
}

Window_ZzySAFWindow.prototype.AnimationScreenPos = function(objId,sx,sy,flag)
{
	this.processObjId(objId);
	this._list[objId]._x = sx;
	this._list[objId]._y = sy;
	this._list[objId].refreshRealXY(-1,-1);//刷新真实地图下标位置
	if(!flag)$gameSystem.SetZzySAFArrScreenPos(objId,sx,sy);
}

Window_ZzySAFWindow.prototype.AnimationEventPos = function(objId,evId,ofex,ofey,flag)
{
	this.processObjId(objId);
	
	evId = evId ? evId : 0;
	ofex = ofex ? ofex : 0;
	ofey = ofey ? ofey : 0;
	
	var sw = $gameMap.tileWidth();
	var sh = $gameMap.tileHeight();	
	var ev = undefined;
	var tx;
	var ty;
	if(evId === 0)
	{
		ev = $gamePlayer;
		tx = (ev._realX - $gameMap.displayX()) * sw + ofex;
		ty = (ev._realY - $gameMap.displayY()) * sh + ofey;
	}
	else
	{
		ev = $gameMap.event(evId);//事件	
		tx = (ev.x - $gameMap.displayX()) * sw + ofex;
		ty = (ev.y - $gameMap.displayY()) * sh + ofey;
	}
	
	this._list[objId]._x = tx;
	this._list[objId]._y = ty;	
	this._list[objId].refreshRealXY(ev.x,ev.y);//刷新真实地图下标位置	
	
	if(!flag)$gameSystem.SetZzySAFArrEventPos(objId,evId,ofex,ofey);
}

Window_ZzySAFWindow.prototype.AnimationMapPos = function(objId,mx,my,ofmx,ofmy,flag)
{
	this.processObjId(objId);
	var sw = $gameMap.tileWidth();
	var sh = $gameMap.tileHeight();	
	var tx = (mx - $gameMap.displayX()) * sw + ofmx;
	var ty = (my - $gameMap.displayY()) * sh + ofmy;	
	this._list[objId]._x = tx;
	this._list[objId]._y = ty;	
	this._list[objId].refreshRealXY(mx,my);//刷新真实地图下标位置	
	
	if(!flag)$gameSystem.SetZzySAFArrMapPos(objId,mx,my,ofmx,ofmy);
}

Window_ZzySAFWindow.prototype.AnimationOffsetPos = function(objId,ofx,ofy)
{
	this.processObjId(objId);
	this._list[objId]._x += ofx;
	this._list[objId]._y += ofy;	
}

Window_ZzySAFWindow.prototype.SetAnimation = function(objId,scaleX,scaleY,opacity,hue,isFixed,range)
{
	this.processObjId(objId);

	this.AnimationScale(objId,scaleX,scaleY);//比例
	this.AnimationOpacity(objId,opacity);//透明度
	this.AnimationHue(objId,hue);//色相
	this.AnimationFixed(objId,isFixed);//定在屏幕上
	this.AnimationRange(objId,range);//设定范围
}

Window_ZzySAFWindow.prototype.AnimationScale = function(objId,scaX,scaY,flag)
{
	this.processObjId(objId);
	this._list[objId]._scaleX = scaX;
	this._list[objId]._scaleY = scaY;	
	this._list[objId].scale.x = scaX;
	this._list[objId].scale.y = scaY;
	
	if(!flag)$gameSystem.SetZzySAFArrScale(objId,scaX,scaY);
}

Window_ZzySAFWindow.prototype.AnimationOpacity = function(objId,opa,flag)
{
	this.processObjId(objId);
	this._list[objId].opacity = opa;//透明度
	
	if(!flag)$gameSystem.SetZzySAFArrOpacity(objId,opa);
}

Window_ZzySAFWindow.prototype.AnimationHue = function(objId,hue,flag)
{
	this.processObjId(objId);
	this._list[objId].setHue(hue);
	
	if(!flag)$gameSystem.SetZzySAFArrHue(objId,hue);
}

Window_ZzySAFWindow.prototype.AnimationFixed = function(objId,isFixed,flag)
{
	this.processObjId(objId);
	var tempSp = this._list[objId];
	if(isFixed)
	{
		//tempSp.setFixed(tempSp.x,tempSp.y);
			tempSp.autoFixed();//开启固定位置
		}
	else
	{tempSp.cancelFixed();}//取消固定

	if(!flag)$gameSystem.SetZzySAFArrIsFixed(objId,isFixed);
}

Window_ZzySAFWindow.prototype.AnimationRange = function(objId,range,flag)
{
	this.processObjId(objId);
	this._list[objId].setRange(range);
	
	if(!flag)$gameSystem.SetZzySAFArrRange(objId,range);
}


Window_ZzySAFWindow.prototype.LoadZzySAFAnimaData = function()//读取动画参数
{
	if(!Zzy.Param.SAFIsOtherMapAnimaBeing)
	{
		if($gameSystem.ExeZzySAFNewMapId())
		{
			$gameSystem.ClearZzySAFTempDataArr();
		}
	}
	
	var tempAnimaArr = $gameSystem.getZzySAFTempDataArr();
	
	var len = tempAnimaArr.length;
	
	for(var i=0;i<len;i++)
	{
		var tempAnima = tempAnimaArr[i];
		if(tempAnima)//有内容
		{
			this.processObjId(i);//
			//对数据进行拷贝
			this._list[i].LoadAnimaData(tempAnima);
		}

	}
}

Window_ZzySAFWindow.prototype.SaveZzySAFAnimaData = function()
{
	var tempAnimaArr = $gameSystem.getZzySAFTempDataArr();
	tempAnimaArr = [];//首先先清空
	var len = this._list.length;
	for(var i=0;i<len;i++)
	{
		if(this._list[i])
		{
			$gameSystem.ZzySAFSave(i,this._list[i]);
		}
	}
}

Window_ZzySAFWindow.prototype.ReSetAnimationData = function(Id)
{
	var info = $gameSystem.GetZzySAFSaveAnimaData(Id);

	this._list[Id].resetAnimation(info.animaId);
	this._list[Id].resetMirror(info.isMirror);
	this._list[Id].setDelayPlay(info.delay);
	this._list[Id].setLoop(info.loop);

	this._list[Id]._scaleX = info.scaX;
	this._list[Id]._scaleY = info.scaY;	
	this._list[Id].scale.x = info.scaX;
	this._list[Id].scale.y = info.scaY;
	this._list[Id].opacity = info.opa;//透明度
	this._list[Id].setHue(info.hue);
	if(info.isFixed){this._list[Id].autoFixed();}//开启固定位置
	else{this._list[Id].cancelFixed();}//取消固定
	this._list[Id].setRange(info.range);

	if(info.posMode === 'screen')
	{
		this.AnimationScreenPos(Id,info.sx,info.sy,true);
	}
	else if(info.posMode === 'event')
	{
		this.AnimationEventPos(Id,info.evId,info.sx,info.sy,true);
	}
	else if(info.posMode === 'map')
	{
		this.AnimationMapPos(Id,info.mx,info.my,info.sx,info.sx,true);
	}
}

Window_ZzySAFWindow.prototype.RePlayAnimation = function(Id)
{
	if(!$gameSystem.GetZzySAFSaveAnimaData(Id))return;
	
	this.processObjId(Id);

	this.ReSetAnimationData(Id);//重置数据信息
	
	this._list[Id].rePlay();//进行播放
}


Window_ZzySAFWindow.prototype.RePlayAnimationAll = function()
{
	var arr = $gameSystem.GetZzySAFSaveAnimaArr();
	var len = arr.length;
	for(var i=0;i<len;i++)
	{
		if(!!$gameSystem.GetZzySAFSaveAnimaData(i))
		{this.RePlayAnimation(i);}//进行逐一播放动画
	}
}

// Window_ZzySAFWindow.prototype.StopAnimation = function(Id)//停止动画
// {
	// if(!this._list[Id])return;
	// this.removeChild(this._list[Id]);//清理
	// this._list[Id] = undefined;//赋空	
// }

// Window_ZzySAFWindow.prototype.StopAnimationAll = function()//停止所有动画
// {
	// var len = this._list.length;
	// for(var i=0;i<len;i++)
	// {
		// if(!!this._list[i])
		// {this.StopAnimation(i);}//进行逐一删除
	// }	
// }

Window_ZzySAFWindow.prototype.ClearAnimation = function(Id)//清除动画缓存
{
	//$gameSystem.ClearZzySAFSaveAnimaData(Id);
	if(!this._list[Id])return;
	this.removeChild(this._list[Id]);//清理
	this._list[Id] = undefined;//赋空	
}

Window_ZzySAFWindow.prototype.ClearAnimationAll = function()//清除所有动画缓存
{
	//$gameSystem.ClearZzySAFSaveAnimaDataAll();
	var len = this._list.length;
	for(var i=0;i<len;i++)
	{
		if(!!this._list[i])
		{this.ClearAnimation(i);}//进行逐一删除
	}
}

Window_ZzySAFWindow.prototype.update = function()
{
	Window_Base.prototype.update.call(this);
}

//==============================================================
//Sprite_ZzySAFAnimation
//==============================================================
function Sprite_ZzySAFAnimation() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzySAFAnimation.prototype = Object.create(Sprite.prototype);
Sprite_ZzySAFAnimation.prototype.constructor = Sprite_ZzySAFAnimation;

Sprite_ZzySAFAnimation._checker1 = {};
Sprite_ZzySAFAnimation._checker2 = {};


Sprite_ZzySAFAnimation.prototype.initialize = function() 
{
    Sprite.prototype.initialize.call(this);
    this._reduceArtifacts = true;
    this.initMembers();
};

Sprite_ZzySAFAnimation.prototype.initMembers = function() 
{
    this._animation = null;
    this._mirror = false;
    this._delay = 0;
    this._rate = 4;
    this._duration = 0;
    this._flashColor = [0, 0, 0, 0];
    this._flashDuration = 0;
    this._screenFlashDuration = 0;
    this._hidingDuration = 0;
    this._bitmap1 = null;
    this._bitmap2 = null;
    this._cellSprites = [];
    this._screenFlashSprite = null;
    this._duplicated = false;
    this.z = 8;
	
	this._animaId = 0;//动画ID
	this._executing = false;//是否在执行中
	this._isFixed = false;//是否是固定位置
	this._isLoop = false;//是否循环播放
	this._orX = -1;//保持原位
	this._orY = -1;
	this._x = 0;
	this._y = 0;
	this._realX = 0;//实际下标X
	this._realY = 0;//实际下标Y
	this._loop = 0;//循环播放帧数
	this._Cloop = 0;//循环播放下标
	this._hue = 0;//色相
	this._isRange = false;//开启范围
	this._range = 0;//范围数值

	this._scaleX = 1;
	this._scaleY = 1;
	
};

Sprite_ZzySAFAnimation.prototype.LoadAnimaData = function( tempAnima )
{
		this._mirror = tempAnima._mirror;
		this._delay = tempAnima._delay;
		this._rate = tempAnima._rate;
		this._duration = tempAnima._duration;
		this._flashDuration = tempAnima._flashDuration;
		this._screenFlashDuration = tempAnima._screenFlashDuration;
		this._hidingDuration = tempAnima._hidingDuration;
		this._duplicated = tempAnima._duplicated;
		this.z = tempAnima.z;
		this._animaId = tempAnima._animaId;
		this._executing = tempAnima._executing;
		this._isFixed = tempAnima._isFixed;
		this._isLoop = tempAnima._isLoop;
		this._orX = tempAnima._orX;
		this._orY = tempAnima._orY;
		this._x = tempAnima._x;
		this._y = tempAnima._y;
		this._realX = tempAnima._realX;
		this._realY = tempAnima._realY;
		this._loop = tempAnima._loop;
		this._Cloop = tempAnima._Cloop;
		this._hue = tempAnima._hue;
		this._isRange = tempAnima._isRange;
		this._range = tempAnima._range;
		
		this._scaleX = tempAnima._scaleX;
		this._scaleY = tempAnima._scaleY;
		
		//创建资源
		this.resetAnimation(this._animaId);//重新加载动画
		//this.setupRate();//不知道是啥，不需要
        //this.setupDuration();//重置时间,不需要
        this.loadBitmaps();
        this.createSprites();
		
}

Sprite_ZzySAFAnimation.prototype.autoFixed = function()
{
	this._isFixed = true;
	this._orX = $gameMap.displayX();
	this._orY = $gameMap.displayY();
}

Sprite_ZzySAFAnimation.prototype.setFixed = function(x,y)
{
	this._isFixed = true;
	this._orX = x;
	this._orY = y;
}

Sprite_ZzySAFAnimation.prototype.setLoop = function(loop)
{
	if(loop <= 0)
	{
		this._isLoop = false;
		this._loop = 0;//循环播放帧数
		this._Cloop = 0;//循环播放下标
	}
	else
	{
		this._isLoop = true;
		this._loop = loop;//循环播放帧数
		this._Cloop = 0;//循环播放下标
	}
}

Sprite_ZzySAFAnimation.prototype.cancelFixed = function()
{
	this._isFixed = false;
	this._orX = -1;//保持原位
	this._orY = -1;
}

Sprite_ZzySAFAnimation.prototype.setHue = function(hue)
{
	if(this._hue != hue)
	{
		this._hue = hue;
		this.reLoadAnimationBitmap();//重新载入
	}
}

Sprite_ZzySAFAnimation.prototype.setRange = function(range)
{
	if(range)
	{
		this._isRange = true;
		this._range = range;
	}
	else
	{
		this._isRange = false;
		this._range = 0;		
	}
}

Sprite_ZzySAFAnimation.prototype.refreshRealXY = function(x,y)
{
	if(!this._isFixed)return;//不满足固定位置
	var ofX = 0;
	var ofY = 0;
	
	if(x === -1 && y === -1)//特殊标记,代表使用的是窗口定位,所以位置信息是动态计算
	{
		ofX = $gameMap.displayX();
		ofY = $gameMap.displayY();	
		var sw = $gameMap.tileWidth();
		var sh = $gameMap.tileHeight();
		 
		this._realX = Math.floor(this._x / sw) + ofX;
		this._realY = Math.floor(this._y / sh) + ofY;
	}
	else
	{
		this._realX = x;
		this._realY = y;
	}

}

Sprite_ZzySAFAnimation.prototype.resetAnimation = function(animationId)
{
	this._animaId = animationId;
	this._animation = $dataAnimations[animationId];
	
}

Sprite_ZzySAFAnimation.prototype.resetMirror = function(mirror)
{
	this._mirror = mirror;
}

Sprite_ZzySAFAnimation.prototype.setDelayPlay = function(delay)
{
	this._delay = delay;
}

Sprite_ZzySAFAnimation.prototype.rePlay = function()
{
	if(!this.JudgRange()) return;//如果不满足判定范围则退出
	
	this.visible = true;
	this._executing = true;
	if (this._animation) 
	{
		//this.remove();
        this.setupRate();
        this.setupDuration();
        this.loadBitmaps();
        this.createSprites();
    }
}

Sprite_ZzySAFAnimation.prototype.JudgRange = function()
{
	if(!this._isFixed)return true;//没有被定住
	if(!this._isRange)return true;//没有范围
	
	//判断是否处于范围中
	var prx = $gamePlayer._realX;
	var pry = $gamePlayer._realY;

	//判断范围是否满足情况
	var tempRangeX = Math.abs(this._realX - prx);
	var tempRangeY = Math.abs(this._realY - pry);

	if(tempRangeX <= this._range && tempRangeY <= this._range)//处于范围内
	{
		return true;
	}
	
	return false;
}

Sprite_ZzySAFAnimation.prototype.setParam = function(animationId, mirror, delay) 
{
	var _delay = delay ? delay : 0;
	var _mirror = mirror ? true : false;
	
	this.resetAnimation(animationId);
	this.resetMirror(_mirror);
	this.setDelayPlay(_delay);
};

Sprite_ZzySAFAnimation.prototype.remove = function() 
{
    if (this.parent) 
	{
		this.parent.removeChild(this);
    }
};

Sprite_ZzySAFAnimation.prototype.setupRate = function() 
{
    this._rate = 4;
};

Sprite_ZzySAFAnimation.prototype.setupDuration = function() 
{
    this._duration = this._animation.frames.length * this._rate + 1;

};

Sprite_ZzySAFAnimation.prototype.update = function() 
{
	if(this._executing)
	{
		this.updateMain();
		this.updateFlash();
		this.updateScreenFlash();
		this.updateHiding();
		Sprite_ZzySAFAnimation._checker1 = {};
		Sprite_ZzySAFAnimation._checker2 = {};
		
		this.updateData();//更新数据信息
	}
};

Sprite_ZzySAFAnimation.prototype.updateData = function()
{
	if(this._isLoop)//重新播放
	{
		if(this._Cloop < this._loop)
		{this._Cloop++;}
		else
		{
			this._Cloop = 0;
			//播放动画
			this.rePlay();
		}
		
	}
}

Sprite_ZzySAFAnimation.prototype.updateFlash = function() 
{
    if (this._flashDuration > 0) 
	{
        var d = this._flashDuration--;
        this._flashColor[3] *= (d - 1) / d;
    }
};

Sprite_ZzySAFAnimation.prototype.updateScreenFlash = function() 
{
    if (this._screenFlashDuration > 0) 
	{
        var d = this._screenFlashDuration--;
        if (this._screenFlashSprite) 
		{
            this._screenFlashSprite.x = -this.absoluteX();
            this._screenFlashSprite.y = -this.absoluteY();
            this._screenFlashSprite.opacity *= (d - 1) / d;
            this._screenFlashSprite.visible = (this._screenFlashDuration > 0);
        }
    }
};

Sprite_ZzySAFAnimation.prototype.absoluteX = function() 
{
    var x = 0;
    var object = this;
    while (object) {
        x += object.x;
        object = object.parent;
    }
    return x;
};

Sprite_ZzySAFAnimation.prototype.absoluteY = function()
 {
    var y = 0;
    var object = this;
    while (object) {
        y += object.y;
        object = object.parent;
    }
    return y;
};

Sprite_ZzySAFAnimation.prototype.updateHiding = function() 
{
    if (this._hidingDuration > 0) 
	{
        this._hidingDuration--;
        if (this._hidingDuration === 0) 
		{
			this.visible = false;
        }
    }
};

Sprite_ZzySAFAnimation.prototype.isPlaying = function() 
{
    return this._duration > 0;
};

Sprite_ZzySAFAnimation.prototype.loadBitmaps = function()
{
	if(!this._bitmap1)
	{
		var name1 = this._animation.animation1Name;
		//var hue1 = this._animation.animation1Hue;
		var hue1 = this._hue;
		this._bitmap1 = ImageManager.loadAnimation(name1, hue1);
	}
	 
    if(!this._bitmap2)
	{
		var name2 = this._animation.animation2Name;
		//var hue2 = this._animation.animation2Hue;  
		var hue2 = this._hue;
		this._bitmap2 = ImageManager.loadAnimation(name2, hue2);	
	}
};

Sprite_ZzySAFAnimation.prototype.reLoadAnimationBitmap = function()//重新载入
{
		var name1 = this._animation.animation1Name;
		var hue1 = this._hue;
		this._bitmap1 = ImageManager.loadAnimation(name1, hue1);
		var name2 = this._animation.animation2Name;  
		var hue2 = this._hue;
		this._bitmap2 = ImageManager.loadAnimation(name2, hue2);	
}


Sprite_ZzySAFAnimation.prototype.isReady = function() 
{
    return this._bitmap1 && this._bitmap1.isReady() && this._bitmap2 && this._bitmap2.isReady();
};

Sprite_ZzySAFAnimation.prototype.createSprites = function() 
{
    if (!Sprite_ZzySAFAnimation._checker2[this._animation]) 
	{
        this.createCellSprites();
        this.createScreenFlashSprite();
		
    }
    if (Sprite_ZzySAFAnimation._checker1[this._animation]) 
	{
        this._duplicated = true;
    } 
};

Sprite_ZzySAFAnimation.prototype.createCellSprites = function() 
{
	if(this._cellSprites.length) return;
    for (var i = 0; i < 16; i++) 
	{
        var sprite = new Sprite();
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        this._cellSprites.push(sprite);
        this.addChild(sprite);
    }
};

Sprite_ZzySAFAnimation.prototype.createScreenFlashSprite = function() 
{
	if(this._screenFlashSprite) return;
    this._screenFlashSprite = new ScreenSprite();
    this.addChild(this._screenFlashSprite);
};

Sprite_ZzySAFAnimation.prototype.updateMain = function() 
{
    if (this.isPlaying() && this.isReady()) 
	{
        if (this._delay > 0) 
		{
            this._delay--;
        } 
		else 
		{
            this._duration--;
            this.updatePosition();
			this.updateScale();//更新尺寸
            if (this._duration % this._rate === 0) 
			{
				
                this.updateFrame();
            }
        }

		if(this._duration <= 0)
		{
			this.visible = false;
		}
    }
};


Sprite_ZzySAFAnimation.prototype.updateScale = function()
{
	this.scale.x = this._scaleX;
	this.scale.y = this._scaleY;
}


Sprite_ZzySAFAnimation.prototype.updatePosition = function() 
{
    this.x = this._x;
    this.y = this._y;

	if(this._isFixed)//固定位置
	{
		var sw = $gameMap.tileWidth();
		var sh = $gameMap.tileHeight();

		var tempX = $gameMap.displayX() - this._orX;
		var tempY = $gameMap.displayY() - this._orY;
		
		this.x -= tempX*sw;
		this.y -= tempY*sh;
	}

};

Sprite_ZzySAFAnimation.prototype.setPostion = function(x,y)
{
	this._x = x;
	this._y = y;
}


Sprite_ZzySAFAnimation.prototype.updateFrame = function() {
    if (this._duration > 0) {
        var frameIndex = this.currentFrameIndex();
        this.updateAllCellSprites(this._animation.frames[frameIndex]);
        this._animation.timings.forEach(function(timing) 
		{
            if (timing.frame === frameIndex) 
			{
                this.processTimingData(timing);
            }
        }, this);
    }
};

Sprite_ZzySAFAnimation.prototype.currentFrameIndex = function() 
{
    return (this._animation.frames.length -
            Math.floor((this._duration + this._rate - 1) / this._rate));
};

Sprite_ZzySAFAnimation.prototype.updateAllCellSprites = function(frame) 
{
    for (var i = 0; i < this._cellSprites.length; i++) 
	{
        var sprite = this._cellSprites[i];
        if (i < frame.length) 
		{
            this.updateCellSprite(sprite, frame[i]);
        } 
		else 
		{
            sprite.visible = false;
        }
    }
};

Sprite_ZzySAFAnimation.prototype.updateCellSprite = function(sprite, cell) 
{
    var pattern = cell[0];
    if (pattern >= 0) {
        var sx = pattern % 5 * 192;
        var sy = Math.floor(pattern % 100 / 5) * 192;
        var mirror = this._mirror;
        sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
        sprite.setFrame(sx, sy, 192, 192);
        sprite.x = cell[1];
        sprite.y = cell[2];
        sprite.rotation = cell[4] * Math.PI / 180;
        sprite.scale.x = cell[3] / 100;

        if(cell[5]){
            sprite.scale.x *= -1;
        }
        if(mirror){
            sprite.x *= -1;
            sprite.rotation *= -1;
            sprite.scale.x *= -1;
        }

        sprite.scale.y = cell[3] / 100;
        sprite.opacity = cell[6];
        sprite.blendMode = cell[7];
        sprite.visible = true;
    } else {
        sprite.visible = false;
    }
};

Sprite_ZzySAFAnimation.prototype.processTimingData = function(timing) 
{
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
    if (!this._duplicated && timing.se) 
	{
        AudioManager.playSe(timing.se);
    }
};

Sprite_ZzySAFAnimation.prototype.startFlash = function(color, duration) 
{
    this._flashColor = color.clone();
    this._flashDuration = duration;
};

Sprite_ZzySAFAnimation.prototype.startScreenFlash = function(color, duration) 
{
    this._screenFlashDuration = duration;
    if (this._screenFlashSprite) {
        this._screenFlashSprite.setColor(color[0], color[1], color[2]);
        this._screenFlashSprite.opacity = color[3];
    }
};

Sprite_ZzySAFAnimation.prototype.startHiding = function(duration) 
{
    this._hidingDuration = duration;
};

//==================================================================
//Zzy.SAF.Fun 自定义函数
//==================================================================
Zzy.SAF.StringToNumber = function(StringArr)//将String数组转换成数字数组
{
	var len = StringArr.length;
	var NumArr = [];
	for(var i=0;i<len;i++)
	{
		NumArr[i] = Number(StringArr[i]);
	}
	return NumArr;
}

Zzy.SAF.IDStrToArr = function(str)
{
	var IDArr = [];
	var IDStrArr = str.split(',');
	
		for(var j=0;j<IDStrArr.length;j++)
		{
			var tArr = IDStrArr[j].split('~');
			
			if(tArr.length > 1)
			{
				var min = parseInt(tArr[0]);
				var max = parseInt(tArr[1]);
				for(var k=min;k<=max;k++)
				{
					IDArr.push(k);
				}
			}
			else
			{
				var value = parseInt(tArr[0]);
				IDArr.push(value);
			}
		}
	return IDArr;
}

Zzy.SAF.InfoAll = function(objId,animaId,isMirror,delay,loop)
{
	Zzy.SAF.Clear(objId);
	Zzy.SAF.tempSAFWindowPointer.InfoAnimation(objId,animaId,isMirror,delay,loop);	

}

Zzy.SAF.InfoAnimaId = function(objId,animaId)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationAnimaId(objId,animaId);
}

Zzy.SAF.InfoMirror = function(objId,isMirror)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationMirror(objId,isMirror);
}

Zzy.SAF.InfoDelay = function(objId,Delay)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationDelay(objId,delay);
}

Zzy.SAF.InfoLoop = function(objId,loop)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationLoop(objId,loop);
}

Zzy.SAF.PosScreen = function(objId,sx,sy)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationScreenPos(objId,sx,sy);
}

Zzy.SAF.PosEvent = function(objId,evId,ofex,ofey)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationEventPos(objId,evId,ofex,ofey);
}

Zzy.SAF.PosMap = function(objId,mx,my,ofmx,ofmy)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationMapPos(objId,mx,my,ofmx,ofmy);
}

Zzy.SAF.PosOffset = function(objId,ofx,ofy)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationOffsetPos(objId,ofx,ofy);
}

Zzy.SAF.SetAll = function(objId,scaleX,scaleY,opacity,hue,fixed,range)
{
	Zzy.SAF.tempSAFWindowPointer.SetAnimation(objId,scaleX,scaleY,opacity,hue,fixed,range);
}

Zzy.SAF.SetScale = function(objId,scaX,scaY)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationScale(objId,scaX,scaY);
}

Zzy.SAF.SetOpacity = function(objId,opa)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationOpacity(objId,opa);
}

Zzy.SAF.SetHue = function(objId,hue)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationHue(objId,hue);
}

Zzy.SAF.SetFixed = function(objId,isFixed)
{
	Zzy.SAF.tempSAFWindowPointer.AnimationFixed(objId,isFixed);
}

Zzy.SAF.Play = function(Id)
{
	Zzy.SAF.tempSAFWindowPointer.RePlayAnimation(Id);//播放ID
}

Zzy.SAF.PlayAll = function()
{
	Zzy.SAF.tempSAFWindowPointer.RePlayAnimationAll();//全部播放
}

Zzy.SAF.Clear = function(Id)
{
	Zzy.SAF.tempSAFWindowPointer.ClearAnimation(Id);//清除动画缓存
}

Zzy.SAF.ClearAll = function()
{
	Zzy.SAF.tempSAFWindowPointer.ClearAnimationAll();//清除所有的动画缓存
}
