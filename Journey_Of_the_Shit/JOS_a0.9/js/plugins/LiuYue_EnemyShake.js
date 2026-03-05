/*:
 * @plugindesc v1.01 EnemyShake 敌人晃动
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 * 这款插件给予战斗中敌人图片晃动效果
 * 
 * 在RPGMaker默认中 敌人受伤是会闪烁,但不会晃动的
 * 这款插件可以实现晃动的效果
 *
 *
 *
 *
 *---------------------------------------------------------
 *
 *使用条例：本插件完全免费，随意魔改
 *
 *---------------------------------------------------------
 *
 *
 *
 *
 *
 *
 * 以下是一些插件用到的插件指令信息
 *
 *
 *---------------------Plugin Command--------------------
 *
 *
 * ZzyESF Shake Enable x(true/false)         //这会开启或关闭敌人晃动的效果
 * ZzyESF Shake Mode x(Random/HLaw/VLaw)     //这会修改敌人受伤后会震动的模式,Random代表无规则震动,HLaw代表水平晃动,VLaw代表垂直晃动
 * ZzyESF Shake Frame x                      //这会修改敌人受伤后会晃动的时长
 * ZzyESF Shake XForce x                     //这会修改敌人水平晃动的最大范围
 * ZzyESF Shake YForce x                     //这会修改敌人垂直晃动的最大范围
 * ZzyESF Shake Speed x                      //这会修改敌人晃动的最大速度
 * ZzyESF Shake SFrame x                     //这会修改敌人晃动的频率
 * ZzyESF Shake FadeIn x(0~100)              //这会修改敌人晃动的缓入期百分比
 * ZzyESF Shake FadeOut x(0~100)             //这会修改敌人晃动的缓出期百分比
 *
 *
 *
 *
 *
 *
 *
 * 以下是一些插件用到的标签信息
 * 请在 数据库-敌人 的备注中添加以下的内容信息
 *-----------------------------------------------------------------------------
 *
 * <ZzyESF Enable: x(true/false)>                //这会强制敌人是否拥有晃动的效果,优先级高于插件参数中的设置
 * <ZzyESF Mode: x(Random/HLaw/VLaw)>            //这会强制敌人晃动的模式,优先级高于插件参数中的设置
 * <ZzyESF Frame: x>                             //这会强制敌人晃动的时长,优先级高于插件参数中的设置
 * <ZzyESF XForce: x>                            //这会强制敌人晃动水平力度,优先级高于插件参数中的设置,这可以是一个小数
 * <ZzyESF YForce: x>                            //这会强制敌人晃动垂直力度,优先级高于插件参数中的设置,这可以是一个小数
 * <ZzyESF Speed: x>                             //这会强制敌人晃动速度,优先级高于插件参数中的设置,这可以是一个小数
 * <ZzyESF SFrame: x>                            //这会强制敌人晃动的频率,优先级高于插件参数中的设置 
 * <ZzyESF FadeIn: x(0~100)>                     //这会强制敌人晃动的缓入期百分比,优先级高于插件参数中的设置,这可以是一个小数
 * <ZzyESF FadeOut: x(0~100)>                    //这会强制敌人晃动的缓出期百分比,优先级高于插件参数中的设置,这可以是一个小数
 *
 *
 *
 *
 *
 *
 *
 *
 *----------------------------------------------------------
 *
 *
 *
 *
 *
 *
 *
 * 我叫坂本：v1.01 添加与旧存档兼容
 * 我叫坂本：v1.00 完成插件功能
 *
 *----------------------------------------------------------
 *
 * @param ---敌人晃动---
 *
 *
 *
 *
 *
 * @param IsEnemyShake
 * @parent ---敌人晃动---
 * @text 开启敌人晃动
 * @type boolean
 * @on YES
 * @off NO
 * @desc 这是受到伤害时,使敌人精灵发生晃动
 * YES - true     NO - false
 * @default true
 *
 * @param EnemyShakeMode
 * @text 晃动模式
 * @parent ---敌人晃动---
 * @type combo
 * @option Random
 * @option HLaw
 * @option VLaw
 * @desc 晃动模式,选择Random代表不规则震动,选择HLaw代表水平规则晃动,VLaw代表垂直规则晃动
 * @default Random
 *
 * @param EnemyShakeFrame
 * @parent ---敌人晃动---
 * @text 敌人晃动时长
 * @type number
 * @desc 以为帧数作为单位的晃动时长,默认20帧
 * @default 20
 *
 * @param EnemyShakeXForce
 * @parent ---敌人晃动---
 * @text 敌人晃动力度X
 * @type text
 * @desc 敌人水平晃动的最大力度,这个值越大敌人晃动的距离越远,这可以是一个小数,默认10像素
 * @default 10
 *
 * @param EnemyShakeYForce
 * @parent ---敌人晃动---
 * @text 敌人晃动力度Y
 * @type text
 * @desc 敌人垂直晃动的最大力度,这个值越大敌人晃动的距离越远,这可以是一个小数,默认10像素
 * @default 10
 *
 *
 * @param EnemyShakeSpeed
 * @parent ---敌人晃动---
 * @text 敌人晃动的速度
 * @type text
 * @desc 敌人晃动的速度值,这个值越大敌人晃动的速度越快,这可以是一个小数,默认值5
 * @default 5
 *
 *
 * @param EnemyShakeSpeedFrame
 * @parent ---敌人晃动---
 * @text 敌人晃动的频率
 * @type text
 * @desc 敌人晃动的频率,这个值代表多少帧敌人的晃动会刷新一次,默认值1
 * @default 1
 *
 *
 * @param EnemyFadeIn
 * @parent ---敌人晃动---
 * @text 敌人缓入震动百分比
 * @type number
 * @max 100
 * @min 0
 * @desc 敌人晃动起步到最大晃动值的过程,占用整段晃动时长的百分比,默认为20
 * @default 20
 *
 * @param EnemyFadeOut
 * @parent ---敌人晃动---
 * @text 敌人缓出震动百分比
 * @type number
 * @max 100
 * @min 0
 * @desc 敌人最大晃动到结束值的过程,占用整段晃动时长的百分比,默认为20
 * @default 20
 */

//=========================================================================================



var LiuYue = LiuYue || {};
LiuYue.LiuYue_EnemyShake = true;//插件启动

var Zzy = Zzy || {};
Zzy.ESF = Zzy.ESF || {};
Zzy.ESF.version = 1.01;  
Zzy.Parameters = PluginManager.parameters('LiuYue_EnemyShake');
Zzy.Param = Zzy.Param || {};


Zzy.Param.ESFIsEnemyShake = eval(String(Zzy.Parameters['IsEnemyShake']));//是否开启敌人晃动
Zzy.Param.ESFEnemyShakeMode = String(Zzy.Parameters['EnemyShakeMode']);//震动模式
Zzy.Param.ESFEnemyShakeFrame = parseInt(Zzy.Parameters['EnemyShakeFrame']);//帧数时长
Zzy.Param.ESFEnemyShakeXForce = Number(Zzy.Parameters['EnemyShakeXForce']);//敌人晃动力度X
Zzy.Param.ESFEnemyShakeYForce = Number(Zzy.Parameters['EnemyShakeYForce']);//敌人晃动力度Y
Zzy.Param.ESFEnemyShakeSpeed = Number(Zzy.Parameters['EnemyShakeSpeed']);//敌人晃动的速度
Zzy.Param.ESFEnemyShakeSpeedFrame = parseInt(Zzy.Parameters['EnemyShakeSpeedFrame']);//敌人晃动频率
Zzy.Param.ESFEnemyFadeIn = Number(Zzy.Parameters['EnemyFadeIn']);//敌人缓入震动百分比
Zzy.Param.ESFEnemyFadeOut = Number(Zzy.Parameters['EnemyFadeOut']);//敌人缓出震动百分比




//==================================================================
//Game_System
//==================================================================

Zzy.ESF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.ESF.Game_System_initialize.call(this);
	this.ZzyESFInitData();//初始化数据
};

Game_System.prototype.ZzyESFInitData = function()
{
	this._ZzyESFIsEnemyShake = Zzy.Param.ESFIsEnemyShake;//是否开启震动
	this._ZzyESFEnemyShakeMode = Zzy.ESF.ShakeModeToNumber(Zzy.Param.ESFEnemyShakeMode);
	this._ZzyESFEnemyShakeFrame = Zzy.Param.ESFEnemyShakeFrame;//震动时长
	this._ZzyESFEnemyShakeXForce = Zzy.Param.ESFEnemyShakeXForce;//震动力度
	this._ZzyESFEnemyShakeYForce = Zzy.Param.ESFEnemyShakeYForce;//震动力度
	this._ZzyESFEnemyShakeSpeed = Zzy.Param.ESFEnemyShakeSpeed;//震动速度
	this._ZzyESFEnemyShakeSpeedFrame = Zzy.Param.ESFEnemyShakeSpeedFrame;//震动频率
	this._ZzyESFEnemyShakeFadeIn = Zzy.Param.ESFEnemyFadeIn;//震动缓入
	this._ZzyESFEnemyShakeFadeOut = Zzy.Param.ESFEnemyFadeOut;//震动缓出
}


Game_System.prototype.GetZzyESFIsEnemyShake = function()
{
	if(this._ZzyESFIsEnemyShake === undefined)
	{this._ZzyESFIsEnemyShake = Zzy.Param.ESFIsEnemyShake;}
	return this._ZzyESFIsEnemyShake;
}

Game_System.prototype.SetZzyESFIsEnemyShake = function(value)
{
	this._ZzyESFIsEnemyShake = value;
}

Game_System.prototype.GetZzyESFEnemyShakeMode = function()
{
	if(this._ZzyESFEnemyShakeMode === undefined)
	{this._ZzyESFEnemyShakeMode = Zzy.ESF.ShakeModeToNumber(Zzy.Param.ESFEnemyShakeMode);}
	return this._ZzyESFEnemyShakeMode;
}

Game_System.prototype.SetZzyESFEnemyShakeMode = function(value)
{
	this._ZzyESFEnemyShakeMode = value;
}

Game_System.prototype.GetZzyESFEnemyShakeFrame = function()
{
	if(this._ZzyESFEnemyShakeFrame === undefined)
	{this._ZzyESFEnemyShakeFrame = Zzy.Param.ESFEnemyShakeFrame;}
	return this._ZzyESFEnemyShakeFrame;
}

Game_System.prototype.SetZzyESFEnemyShakeFrame = function(value)
{
	this._ZzyESFEnemyShakeFrame = value;
}

Game_System.prototype.GetZzyESFEnemyShakeXForce = function()
{
	if(this._ZzyESFEnemyShakeXForce === undefined)
	{this._ZzyESFEnemyShakeXForce = Zzy.Param.ESFEnemyShakeXForce;}
	return this._ZzyESFEnemyShakeXForce;
}

Game_System.prototype.SetZzyESFEnemyShakeXForce = function(value)
{
	this._ZzyESFEnemyShakeXForce = value;
}

Game_System.prototype.GetZzyESFEnemyShakeYForce = function()
{
	if(this._ZzyESFEnemyShakeYForce === undefined)
	{this._ZzyESFEnemyShakeYForce = Zzy.Param.ESFEnemyShakeYForce;}
	return this._ZzyESFEnemyShakeYForce;
}

Game_System.prototype.SetZzyESFEnemyShakeYForce = function(value)
{
	this._ZzyESFEnemyShakeYForce = value;
}

Game_System.prototype.GetZzyESFEnemyShakeSpeed = function()
{
	if(this._ZzyESFEnemyShakeSpeed === undefined)
	{this._ZzyESFEnemyShakeSpeed = Zzy.Param.ESFEnemyShakeSpeed;}
	return this._ZzyESFEnemyShakeSpeed;
}

Game_System.prototype.SetZzyESFEnemyShakeSpeed = function(value)
{
	this._ZzyESFEnemyShakeSpeed = value;
}


Game_System.prototype.GetZzyESFEnemyShakeSpeedFrame = function()
{
	if(this._ZzyESFEnemyShakeSpeedFrame === undefined)
	{this._ZzyESFEnemyShakeSpeedFrame = Zzy.Param.ESFEnemyShakeSpeedFrame;}
	return this._ZzyESFEnemyShakeSpeedFrame;
}

Game_System.prototype.SetZzyESFEnemyShakeSpeedFrame = function(value)
{
	this._ZzyESFEnemyShakeSpeedFrame = value;
}


Game_System.prototype.GetZzyESFEnemyShakeFadeIn = function()
{
	if(this._ZzyESFEnemyShakeFadeIn === undefined)
	{this._ZzyESFEnemyShakeFadeIn = Zzy.Param.ESFEnemyFadeIn;}
	return this._ZzyESFEnemyShakeFadeIn;
}

Game_System.prototype.SetZzyESFEnemyShakeFadeIn = function(value)
{
	this._ZzyESFEnemyShakeFadeIn = value;
}

Game_System.prototype.GetZzyESFEnemyShakeFadeOut = function()
{
	if(this._ZzyESFEnemyShakeFadeOut === undefined)
	{this._ZzyESFEnemyShakeFadeOut = Zzy.Param.ESFEnemyFadeOut;}
	return this._ZzyESFEnemyShakeFadeOut;
}

Game_System.prototype.SetZzyESFEnemyShakeFadeOut = function(value)
{
	this._ZzyESFEnemyShakeFadeOut = value;
}



Game_System.prototype.getZzyESFIsEnemyShake = function(enemyId)
{
	if(this._ZzyESFIsEnemyShake === undefined)
	{this._ZzyESFIsEnemyShake = Zzy.Param.ESFIsEnemyShake;}
	
	if(enemyId === undefined){return this._ZzyESFIsEnemyShake;}

	var dev = $dataEnemies[enemyId];

	if(dev && dev.zzyESF && dev.zzyESF.enable !== undefined)
	{
		return dev.zzyESF.enable;
	}
	return this._ZzyESFIsEnemyShake;
}

Game_System.prototype.getZzyESFEnemyShakeMode = function(enemyId)
{
	if(this._ZzyESFEnemyShakeMode === undefined)
	{this._ZzyESFEnemyShakeMode = Zzy.ESF.ShakeModeToNumber(Zzy.Param.ESFEnemyShakeMode);}	
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeMode;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.mode !== undefined)
	{
		return dev.zzyESF.mode;
	}
	return this._ZzyESFEnemyShakeMode;
}

Game_System.prototype.getZzyESFEnemyShakeFrame = function(enemyId)
{
	if(this._ZzyESFEnemyShakeFrame === undefined)
	{this._ZzyESFEnemyShakeFrame = Zzy.Param.ESFEnemyShakeFrame;}//震动时长
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeFrame;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.frame !== undefined)
	{
		return dev.zzyESF.frame;
	}
	return this._ZzyESFEnemyShakeFrame;
}

Game_System.prototype.getZzyESFEnemyShakeXForce = function(enemyId)
{
	if(this._ZzyESFEnemyShakeXForce === undefined)
	{this._ZzyESFEnemyShakeXForce = Zzy.Param.ESFEnemyShakeXForce;}//震动力度

	if(enemyId === undefined){return this._ZzyESFEnemyShakeXForce;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.xforce !== undefined)
	{
		return dev.zzyESF.xforce;
	}
	return this._ZzyESFEnemyShakeXForce;
}

Game_System.prototype.getZzyESFEnemyShakeYForce = function(enemyId)
{
	if(this._ZzyESFEnemyShakeYForce === undefined)
	{this._ZzyESFEnemyShakeYForce = Zzy.Param.ESFEnemyShakeYForce;}
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeYForce;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.yforce !== undefined)
	{
		return dev.zzyESF.yforce;
	}
	return this._ZzyESFEnemyShakeYForce;
}

Game_System.prototype.getZzyESFEnemyShakeSpeed = function(enemyId)
{
	if(this._ZzyESFEnemyShakeSpeed === undefined)
	{this._ZzyESFEnemyShakeSpeed = Zzy.Param.ESFEnemyShakeSpeed;}
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeSpeed;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.speed !== undefined)
	{
		return dev.zzyESF.speed;
	}
	return this._ZzyESFEnemyShakeSpeed;
}

Game_System.prototype.getZzyESFEnemyShakeSpeedFrame = function(enemyId)
{
	if(this._ZzyESFEnemyShakeSpeedFrame === undefined)
	{this._ZzyESFEnemyShakeSpeedFrame = Zzy.Param.ESFEnemyShakeSpeedFrame;}
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeSpeedFrame;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.sframe !== undefined)
	{
		return dev.zzyESF.sframe;
	}
	return this._ZzyESFEnemyShakeSpeedFrame;
}

Game_System.prototype.getZzyESFEnemyShakeFadeIn = function(enemyId)
{
	if(this._ZzyESFEnemyShakeFadeIn === undefined)
	{this._ZzyESFEnemyShakeFadeIn = Zzy.Param.ESFEnemyFadeIn;}
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeFadeIn;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.fadein !== undefined)
	{
		return dev.zzyESF.fadein;
	}
	return this._ZzyESFEnemyShakeFadeIn;
}

Game_System.prototype.getZzyESFEnemyShakeFadeOut = function(enemyId)
{
	if(this._ZzyESFEnemyShakeFadeOut === undefined)
	{this._ZzyESFEnemyShakeFadeOut = Zzy.Param.ESFEnemyFadeOut;}
	
	if(enemyId === undefined){return this._ZzyESFEnemyShakeFadeOut;}
	
	var dev = $dataEnemies[enemyId];
	if(dev && dev.zzyESF && dev.zzyESF.fadeout !== undefined)
	{
		return dev.zzyESF.fadeout;
	}
	return this._ZzyESFEnemyShakeFadeOut;
}

//========================================================================
//Game_Interpreter
//========================================================================
Zzy.ESF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)//插件命令
{
	Zzy.ESF.Game_Interpreter_pluginCommand.call(this,command,args);

	if(command === 'ZzyESF')
	{
		this.ZzyESFCommand(args);
	}
}

Game_Interpreter.prototype.ZzyESFCommand = function(args)
{
	var command = String(args[0]);

	if(command === 'Shake')
	{
		this.ZzyESFShakeCommand(args);
	}

}

Game_Interpreter.prototype.ZzyESFShakeCommand = function(args)
{
	var command = String(args[1]);
	
	switch(command)
	{
		case 'Enable':
		var isEnable = eval(String(args[2]));
		$gameSystem.SetZzyESFIsEnemyShake(isEnable);
		break;
		
		case 'Mode':
		var mode = String(args[2]);
		$gameSystem.SetZzyESFEnemyShakeMode(Zzy.ESF.ShakeModeToNumber(mode));
		break;
		
		case 'Frame':
		var time = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeFrame(time);
		break;

		case 'XForce':
		var force = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeXForce(force);
		break;
		
		case 'YForce':
		var force = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeYForce(force);
		break;
		
		case 'Speed':
		var speed = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeSpeed(speed);
		break;
		
		case 'SFrame':
		var sFrame = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeSpeedFrame(sFrame);
		break;
		
		case 'FadeIn':
		var per = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeFadeIn(per);
		break;
		
		case 'FadeOut':
		var per = Number(args[2]);
		$gameSystem.SetZzyESFEnemyShakeFadeOut(per);
		break;
	}	
	
}


//================================================================
//DataManager
//================================================================
Zzy.ESF.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function()
{
	if (!Zzy.ESF.DataManager_isDatabaseLoaded.call(this)) return false;
	
	//添加标签内容
	this.ZzyESFLoadNoteCase1($dataEnemies);//敌人
	
	return true;
}


DataManager.ZzyESFLoadNoteCase1 = function(objArr)//加载标签
{
  for (var i = 1; i < objArr.length; i++) 
  {
    var obj = objArr[i];
    var noteData = obj.note.split(/[\r\n]+/);

	obj.zzyESF = {};
	for(var j=0;j<noteData.length;j++)
	{
		var lineStr = noteData[j];
		
		if(lineStr.match(/<ZZYESF ENABLE:[ ](.*)>/i))
		{
			var isEnable = eval(String(RegExp.$1)); 
			obj.zzyESF['enable'] = isEnable;
		}
		else if(lineStr.match(/<ZZYESF Mode:[ ](.*)>/i))
		{
			var mode = String(RegExp.$1);
			mode = Zzy.ESF.ShakeModeToNumber(mode);
			obj.zzyESF['mode'] = mode;
		}
		else if(lineStr.match(/<ZZYESF FRAME:[ ](.*)>/i))
		{
			var f = parseInt(RegExp.$1);
			obj.zzyESF['frame'] = f;
		}
		else if (lineStr.match(/<ZZYESF XFORCE:[ ](.*)>/i))
		{
			var xforce = Number(RegExp.$1);
			obj.zzyESF['xforce'] = xforce;
		}
		else if (lineStr.match(/<ZZYESF YFORCE:[ ](.*)>/i))
		{
			var yforce = Number(RegExp.$1);
			obj.zzyESF['yforce'] = yforce;
		}	
		else if (lineStr.match(/<ZZYESF SPEED:[ ](.*)>/i))
		{
			var speed = Number(RegExp.$1);
			obj.zzyESF['speed'] = speed;
		}
		else if (lineStr.match(/<ZZYESF SPEED:[ ](.*)>/i))
		{
			var speed = Number(RegExp.$1);
			obj.zzyESF['speed'] = speed;
		}
		else if (lineStr.match(/<ZZYESF SFRAME:[ ](.*)>/i))
		{
			var s = Number(RegExp.$1);
			obj.zzyESF['sframe'] = s;
		}
		else if (lineStr.match(/<ZZYESF FADEIN:[ ](.*)>/i))
		{
			var fadein = Number(RegExp.$1);
			obj.zzyESF['fadein'] = fadein;
		}
		else if (lineStr.match(/<ZZYESF FADEOUT:[ ](.*)>/i))
		{
			var fadeout = Number(RegExp.$1);
			obj.zzyESF['fadeout'] = fadeout;
		}
	}
  }
}





//=============================================================================
// Game_Enemy
//=============================================================================

Zzy.ESF.Game_Enemy_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function()
{
	Zzy.ESF.Game_Enemy_initMembers.call(this);
	this._IsZzyESFShake = false;
	this._ZzyESFShakeMode = 0;
	this._ZzyESFShakeFrame = 0;
	this._ZzyESFShakeXForce = 0;
	this._ZzyESFShakeYForce = 0;
	this._ZzyESFShakeSpeed = 0;	
	this._ZzyESFShakeSFrame = 0;
	this._ZzyESFShakeFadeIn = 0;
	this._ZzyESFShakeFadeOut = 0;
}

Zzy.ESF.Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
Game_Enemy.prototype.performDamage = function() 
{
	Zzy.ESF.Game_Enemy_performDamage.call(this);
	var enemyId = this.enemyId();
	
	
	
	if($gameSystem.getZzyESFIsEnemyShake(enemyId))//满足晃动条件
	{
	
		this.ZzyESFExeShake(//传递数值信息
			$gameSystem.getZzyESFEnemyShakeMode(enemyId),
			$gameSystem.getZzyESFEnemyShakeFrame(enemyId),
			$gameSystem.getZzyESFEnemyShakeXForce(enemyId),
			$gameSystem.getZzyESFEnemyShakeYForce(enemyId),
			$gameSystem.getZzyESFEnemyShakeSpeed(enemyId),
			$gameSystem.getZzyESFEnemyShakeSpeedFrame(enemyId),
			$gameSystem.getZzyESFEnemyShakeFadeIn(enemyId),
			$gameSystem.getZzyESFEnemyShakeFadeOut(enemyId)
		);
		
		
	}
};


Game_Enemy.prototype.ZzyESFExeShake = function(eMode,eFrame,exForce,eyForce,eSpeed,eSFrame,eIn,eOut)//震动
{
	this._IsZzyESFShake = true;
	this._ZzyESFShakeMode = eMode;
	this._ZzyESFShakeFrame = eFrame;
	this._ZzyESFShakeXForce = exForce;
	this._ZzyESFShakeYForce = eyForce;
	this._ZzyESFShakeSpeed = eSpeed;
	this._ZzyESFShakeSFrame = eSFrame;
	this._ZzyESFShakeFadeIn = eIn;
	this._ZzyESFShakeFadeOut = eOut;
}

Game_Enemy.prototype.IsZzyESFShake = function()
{
	return this._IsZzyESFShake;
}

Game_Enemy.prototype.SetZzyESFShake = function(isEnable)
{
	this._IsZzyESFShake = isEnable;
}

Game_Enemy.prototype.GetZzyESFShakeData = function()
{
	var data = {
	mode:this._ZzyESFShakeMode,
	frame:this._ZzyESFShakeFrame,
	xforce:this._ZzyESFShakeXForce,
	yforce:this._ZzyESFShakeYForce,
	speed:this._ZzyESFShakeSpeed,
	sframe:this._ZzyESFShakeSFrame,
	fadein:this._ZzyESFShakeFadeIn,
	fadeout:this._ZzyESFShakeFadeOut
	};
	return data;
}




//=============================================================================
// Sprite_Enemy
//=============================================================================
Zzy.ESF.Sprite_Enemy_updateEffect = Sprite_Enemy.prototype.updateEffect;
Sprite_Enemy.prototype.updateEffect = function()
{
	Zzy.ESF.Sprite_Enemy_updateEffect.call(this);
	if(this._appeared && this._enemy.IsZzyESFShake())//需要震动
	{
		this._enemy.SetZzyESFShake(false);//关闭震动
		var tempData = this._enemy.GetZzyESFShakeData();//获取震动参数
		this.setZzyESFShakeData(tempData);
	}
	
}

Zzy.ESF.Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
Sprite_Enemy.prototype.initMembers = function() 
{
	Zzy.ESF.Sprite_Enemy_initMembers.call(this);
	this._IsZzyESFShake = false;
	
	this._ZzyESFShakeMode = 0;//模式
	this._ZzyESFShakeFrame = 0;//时长
	this._ZzyESFShakeXForce = 0;//力度
	this._ZzyESFShakeYForce = 0;//力度
	this._ZzyESFShakeSpeed = 0;//速度
	this._ZzyESFShakeSFrame = 0;//频率
	this._ZzyESFShakeFadeIn = 0;//缓入
	this._ZzyESFShakeFadeOut = 0;//缓出
	
	this._ZzyESFCShakeFrame = 0;//时长-计数
	this._ZzyESFCShakeSFrame = 0;//频率-计数
	this._ZzyESFOffsetX = 0;
	this._ZzyESFOffsetY = 0;
	this._ZzyESFShakeDir = 0;//规律震动
	
	//缓入缓出帧数
	this._ZzyESFInShakeFrame = 0;
	this._ZzyESFOutShakeFrame = 0;
};

Sprite_Enemy.prototype.setZzyESFShakeData = function(data)
{
	this._IsZzyESFShake = true;
	
	this._ZzyESFShakeMode = data.mode;
	this._ZzyESFShakeFrame = data.frame;
	this._ZzyESFShakeXForce = data.xforce;
	this._ZzyESFShakeYForce = data.yforce;
	this._ZzyESFShakeSpeed = data.speed;
	this._ZzyESFShakeSFrame = data.sframe;
	this._ZzyESFShakeFadeIn = data.fadein;
	this._ZzyESFShakeFadeOut = data.fadeout;
	
	this._ZzyESFCShakeFrame = 0;
	this._ZzyESFCShakeSFrame = 0;
	
	//晃动百分比
	this._ZzyESFInShakeFrame = Math.round(this._ZzyESFShakeFrame * this._ZzyESFShakeFadeIn * 0.01);
	this._ZzyESFOutShakeFrame = Math.round(this._ZzyESFShakeFrame * this._ZzyESFShakeFadeOut * 0.01);
}

Zzy.ESF.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function() 
{
	Zzy.ESF.Sprite_Enemy_update.call(this);
	if (this._enemy)
	{
		this.updateZzyESFShake();//刷新震动
		this.updateZzyESFMoving();
	}
};



Sprite_Enemy.prototype.updateZzyESFShakeSFrame = function()//更新频率
{
	this._ZzyESFCShakeSFrame++;
	if(this._ZzyESFCShakeSFrame < this._ZzyESFShakeSFrame)
	{
		return false;
	}
	else
	{
		this._ZzyESFCShakeSFrame = 0;
		return true;
	}
	
}


Sprite_Enemy.prototype.updateZzyESFShake = function()
{
	if(!this._IsZzyESFShake)return;	
	if(this._ZzyESFCShakeFrame < this._ZzyESFShakeFrame)
	{
		this._ZzyESFCShakeFrame++;
			
		if(!this.updateZzyESFShakeSFrame())return;
			
		if(!this._ZzyESFmoving)	
		{
			switch(this._ZzyESFShakeMode)
			{
				case 0://不规则震动
					this.ExeZzyESFRandShake();
				break;
				
				case 1://水平晃动
					this.ExeZzyESFHLawShake();
				break;
				
				case 2://垂直晃动
					this.ExeZzyESFVLawShake();
				break;
			}
		}
			
	}
	else
	{
		this.ZzyESFMoveToOfSpeed(0,0,this._ZzyESFShakeSpeed);
		this._ZzyESFCShakeFrame = 0;
		this._ZzyESFCShakeSFrame = 0;
		this._IsZzyESFShake = false;
	}
	
}


Sprite_Enemy.prototype.ReturnZzyESFShakeRate = function()
{
	var tempRate = 1;
	if(this._ZzyESFInShakeFrame && this._ZzyESFCShakeFrame < this._ZzyESFInShakeFrame)//处于缓入期间
	{
		var tempFrame = this._ZzyESFInShakeFrame - this._ZzyESFCShakeFrame;
		tempRate = tempFrame / this._ZzyESFInShakeFrame;
		tempRate = 1-tempRate;
	}
	
	if(this._ZzyESFOutShakeFrame && this._ZzyESFCShakeFrame >= this._ZzyESFShakeFrame - this._ZzyESFOutShakeFrame)
	{
		var tempFrame = this._ZzyESFCShakeFrame - (this._ZzyESFShakeFrame - this._ZzyESFOutShakeFrame);
		tempRate = tempFrame / this._ZzyESFOutShakeFrame;
	}
	
	return tempRate;
}


Sprite_Enemy.prototype.ExeZzyESFHLawShake = function()
{
	var tempRate = this.ReturnZzyESFShakeRate();
	
	this._ZzyESFShakeDir = this._ZzyESFShakeDir ? 0 : 1;//切换方向
	
	var ofx = this._ZzyESFShakeXForce * tempRate;
	if(!this._ZzyESFShakeDir){ofx = -ofx;}
	var speed = this._ZzyESFShakeSpeed;
	this.ZzyESFMoveToOfSpeed(ofx,0,speed);	
}

Sprite_Enemy.prototype.ExeZzyESFVLawShake = function()
{
	var tempRate = this.ReturnZzyESFShakeRate();
	
	this._ZzyESFShakeDir = this._ZzyESFShakeDir ? 0 : 1;//切换方向
	
	var ofy = this._ZzyESFShakeYForce * tempRate;
	if(!this._ZzyESFShakeDir){ofy = -ofy;}
	var speed = this._ZzyESFShakeSpeed;
	this.ZzyESFMoveToOfSpeed(0,ofy,speed);		
}



Sprite_Enemy.prototype.ExeZzyESFRandShake = function()
{
	var tempRate = this.ReturnZzyESFShakeRate();

	
	var ofx = Math.round(Math.random() * this._ZzyESFShakeXForce * tempRate);
	ofx = Zzy.ESF.RandomZF(ofx)
	var ofy = Math.round(Math.random() * this._ZzyESFShakeYForce * tempRate);
	ofy = Zzy.ESF.RandomZF(ofy)	
	var speed = this._ZzyESFShakeSpeed;
	this.ZzyESFMoveToOfSpeed(ofx,ofy,speed);
}



//设置 -- 这将会开始运动
Sprite_Enemy.prototype.ZzyESFMoveToOfSpeed = function(x,y,speed)//以一定的速度移动到指定的位置
{
	//if(x === this._ZzyESFOffsetX && y === this._ZzyESFOffsetY)return;
	
	this._ZzyESFmoving = true;
	this._ZzyESFstartX = this._ZzyESFOffsetX;
	this._ZzyESFstartY = this._ZzyESFOffsetY;
	this._ZzyESFendX = x;
	this._ZzyESFendY = y;
	this._ZzyESFmoveSpeed = speed;
	this._ZzyESFmoveDegree = Zzy.ESF.ESFATANARC(this._ZzyESFendX-this._ZzyESFstartX,this._ZzyESFendY-this._ZzyESFstartY);
}


Zzy.ESF.Sprite_Enemy_updatePosition = Sprite_Enemy.prototype.updatePosition;
Sprite_Enemy.prototype.updatePosition = function() 
{
	if(Zzy.ESF.Sprite_Enemy_updatePosition)
	{Zzy.ESF.Sprite_Enemy_updatePosition.call(this);}
	else
	{Sprite_Battler.prototype.updatePosition.call(this);}
	
	//+晃动虚拟位置
    this.x += this._ZzyESFOffsetX;
    this.y += this._ZzyESFOffsetY;

};

Sprite_Enemy.prototype.updateZzyESFMoving = function()
{
	if(!this._ZzyESFmoving){return;}

		this._ZzyESFOffsetX += this._ZzyESFmoveSpeed * Math.cos(this._ZzyESFmoveDegree);
		this._ZzyESFOffsetY += this._ZzyESFmoveSpeed * Math.sin(this._ZzyESFmoveDegree);


		if(this._ZzyESFOffsetX >= this._ZzyESFendX - (this._ZzyESFmoveSpeed) && 
		this._ZzyESFOffsetX <= this._ZzyESFendX + (this._ZzyESFmoveSpeed) && 
		this._ZzyESFOffsetY >= this._ZzyESFendY - (this._ZzyESFmoveSpeed) && 
		this._ZzyESFOffsetY <= this._ZzyESFendY + (this._ZzyESFmoveSpeed))
		{
			this._ZzyESFOffsetX = this._ZzyESFendX;
			this._ZzyESFOffsetY = this._ZzyESFendY;
			this._ZzyESFmoving = false;
			return;
		}


}



//========================================================================
//Zzy.ESF.Function
//========================================================================
Zzy.ESF.ShakeModeToNumber = function(text)
{
	switch(text)
	{
		case 'Random':return 0;
		case 'HLaw':return 1;
		case 'VLaw':return 2;
	}
	console.log("Error:(LiuYue_EnemyShake):未识别的字符串信息,检查晃动模式是否填写错误!!!");
	return undefined;
}


Zzy.ESF.ESFATANARC = function(x,y)//换算弧度
{
	if(x===0)
	{
		if(y > 0)
		{return Math.PI/2;}
		else
		{return Math.PI*3/2;}
	}
	
	var arc = Math.atan( y / x );
	if(x < 0)
	{
		arc += Math.PI;
	}
	return arc;
}

Zzy.ESF.RandomZF = function(value)
{
	if(!!Math.floor(Math.random()*2))
	{
		return value;
	}
	return -value;
	
}
