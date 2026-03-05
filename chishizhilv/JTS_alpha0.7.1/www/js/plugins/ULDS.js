//=============================================================================
// ULDS.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc 无限层显示系统
 * @author taroxd 汉化:硕明云书
 *
 * @param Default Path
 * @text 图片存储的默认路径
 * @desc 图片存储的默认路径
 * @default parallaxes
 *
 * @param Default Z
 * @text 默认 Z 坐标
 * @desc 默认 Z 坐标
 * @type number
 * @decimals 2
 * @min -15
 * @max 15
 * @default 0.5
 *
 * @help 
 *  === ULDS插件使用说明 ===
 * 此插件不提供插件命令。
 * 需要再地图编辑内的注释里添加公式即可。
 <ulds> {
"name": "01",
"x": "this.rx(0)",
"y": "this.ry(0)",
"z": "1",
"loop": true
} </ulds>
 * ------------------------------------
 * 在地图注释中按以下格式书写：
 *
 * <ulds> {
 *     参数1: 值1,
 *     参数2: 值2,
 *     ......
 *     参数n: 值n
 * } </ulds>
 * ------------------------------------
 * "name": 图片文件名
 * "path": 图片路径（默认为默认路径）
 * "loop": true/false 图片是否应该循环播放
 *
 * "hue"/"smooth": 位图的属性。
 * <attribute>: Sprite 的属性。
 *
 * 字符串可以用作要解释为公式的值。
 *                 't' 指的是 frame count.(帧数)
 *                 's' 指的是 $gameSwitches.(开关)
 *                 'v' 指的是 $gameVaribles.(变量)
 *
 * 此外，在帮助中定义的各种帮助。
 *
 * 如果使用字符串作为属性的公式，
 * 属性将每帧更新。
 *
 *
 *    "name": 图片名称。
 *
 *    "x": 图片的x坐标。x坐标越大，图片越靠右。
 *         若为 纯数字 ，则表示以 屏幕左上角 为原点的图片x坐标。图片横向位置始终与屏幕保持一致。
 *         若为 this.rx(n) ，则表示以 地图左上角 为原点的图片x坐标。
 *         n 可以是以下2种情况：
 *           - 若n为 数字，则表示以 地图左上角 为原点的图片x坐标，且x坐标为 n 。
 *             例如 this.rx(48) 指的是图片会贴在地图x坐标为 48 的位置。
 *           - 若n为 t ，则图片将会被从左向右滚动播放。
 *             如果是 -t ，则图片会被从右向左滚动播放。
 *
 *    "y": 图片的y坐标。y坐标越大，图片越靠下。
 *         若为 纯数字 ，则表示以 屏幕左上角 为原点的图片y坐标。图片纵向位置始终与屏幕保持一致。
 *         若为 this.ry(n) ，则表示以 地图左上角 为原点的图片y坐标。
 *         n 可以是以下2种情况：
 *           - 若n为 数字，则表示以 地图左上角 为原点的图片y坐标，且y坐标为 n 。
 *             例如 this.ry(48) 指的是图片会贴在地图y坐标为 48 的位置。
 *           - 若n为 t ，则图片将会被从上到下滚动播放。
 *             如果是 -t ，则图片会被从下向上滚动播放。
 *
 *    其他可供选择的基础参数有：
 *
 *    "z": 图片的z层级。默认是0.5（可在插件参数中设置）。小数点可精确至后两位。建议大于1，且为浮点数，这样设置可以最大程度地兼容其他涉及图层的插件（如灯光插件等）。
 *         指定图片可以覆盖在z层级小于该图片z层级的所有图片之上。
 *         例如，若指定A图片z层级为6，B图片z层级为10，则A图片会覆盖所有z层级低于6的贴图，但会被B图片覆盖。
 *         RMMV中各贴图的原生层级：0 -> 远景，3 -> 玩家/事件，4 -> 星标图块。
 *
 *    "path": 自定义图片所在的文件夹。文件夹必须在img文件夹里。默认是parallaxes（插件参数中可配置）
 *
 *    "loop": true/false    是否循环播放图片。
 *    "smooth": true/false  是否应用平滑缩放。
 *
 *    "blendMode": 图片的混合模式。默认是0（正常）。
 *                        RMMV原生混合模式：0 -> 正常，1 -> 叠加，2 -> 正片叠底，3 -> 滤色
 *
 *    "opacity":  图片的不透明度。0-255间的一个数字。默认是255（完全不透明）。
 *
 *    "rotation": 图片的旋转角度（弧度）。数字 兀 在JS中是 Math.PI 。
 *
 *    "scale.x": 图片被横向缩放的倍数。默认是1（不放大）。可以是小数。
 *                    如果是负数，图片就会被左右镜像翻转。
 *
 *    "scale.y":  图片被纵向缩放的倍数。默认是1（不放大）。可以是小数。
 *                    如果是负数，图片就会被上下镜像翻转。
 *
 *    "visible": true/false  图片是否可见。
 * 无限图层的设置在游玩时是即时动态更新的。
 * 所以在地图注释中，可以调用$gameSwitches和$gameVariables等脚本的值来实时控制图片的状态。
 *
 * 例如：
 *
 * · 参数"visible"可以这样写：
 *   "visible": "$gameSwitches.value(2)"
 *   - 这表示由开关#2来实时控制图片的显示与隐藏。
 *
 * · 参数"rotation"可以这样写：
 *   "rotation": "$gameVariables.value(1)*Math.PI"
 *   - 这表示由变量#1来控制图片的旋转角度。变量#1最好是介于0到2的数字。
 *
 *  当然，以此类推，其他插件提供的脚本变量/开关也可以使用。
 *
 *
 *  也许各位会觉得每次写$gameVariables, $gameSwitches什么的太麻烦了，还容易写错，
 *  那么可以考虑使用插件作者提供的引用：s 和 v 来代替开关和变量。
 *
 *  仍以上面举过的两个例子为例：
 *
 * · 参数"visible"可以这样写：
 *   "visible": "s.value(2)"
 *   - 这表示由开关#2来实时控制图片的显示与隐藏。
 *
 * · 参数"rotation"可以这样写：
 *   "rotation": "v.value(1)*Math.PI"
 *   - 这表示由变量#1来控制图片的旋转角度。变量#1最好是介于0到2的数字。
 *
 * 除了 s, v 这两个引用之外，插件作者还提供了一个引用。
 * 还记得前面提到的 this.rx(t) 吗？
 * 其中的 t 也是一个引用。t 代表每帧都会自增（自己+1）的一个数字。初始值是0。
 *
 * 一个地图中可以添加多个注释。利用z层级来控制各图层的叠加情况，就可以非常灵活地制作视差地图
 *
 * 这是一个例子：
 *
<ulds> {
"name": "01",
"x": "this.rx(0)",
"y": "this.ry(0)",
"z": "1",
"loop": true
} </ulds>
 */


void function() {

    var assign = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                target[key] = source[key];
            }
        }
        return target;
    };

    var RE = /<ulds>([^]*?)<\/ulds>/ig;
    var parameters = PluginManager.parameters('ULDS');
    var DEFAULT_SETTINGS = {
        z: parseFloat(parameters['Default Z']),
        path: parameters['Default Path'],
        smooth: true
    };

    // Feel free to add your own helper.
    var Helper = {
        t: 0,

        // Converts a coordinate on the map to the corresponding coordinate on the screen.
        rx: function(x, scrollRate) {
            if (scrollRate == null) {
                scrollRate = $gameMap.tileWidth();
            }

            if (scrollRate === 0) {
                return x;
            } else {
                return $gameMap.adjustX(x / scrollRate) * scrollRate;
            }
        },

        ry: function(y, scrollRate) {
            if (scrollRate == null) {
                scrollRate = $gameMap.tileHeight();
            }

            if (scrollRate === 0) {
                return y;
            } else {
                return $gameMap.adjustY(y / scrollRate) * scrollRate;
            }
        },

        update: function() {
            ++this.t;
            this._updater(this.t, $gameSwitches, $gameVariables);
        },

        assignSettings: function(settings) {
            var code = '';
            for (var key in settings) {
                var value = settings[key];
                if (typeof(value) === 'string') {
                    // this.x = (formula);
                    // this.scale.x = (formula); // key is "scale.x"
                    code += 'this.' + key + ' = (' + value + ');\n';
                } else {
                    // if key is "scale.x"
                    // keys is ["scale", "x"]
                    var keys = key.split('.');
                    // set key to "x"
                    key = keys.pop();

                    var target = this;
                    keys.forEach(function(k) {
                        if (typeof(target) !== 'object') {
                            target[k] = {};
                        }
                        target = target[k];
                    });

                    target[key] = value;
                }
            }
            // You may log the code for debugging purpose.
            // console.log(code);
            this._updater = new Function('t', 's', 'v', code);
        }
    };

    // NOT a class constructor
    function ULDS(settings) {
        settings = assign({}, DEFAULT_SETTINGS, settings);
        var spriteClass = settings.loop ? ULDS.TilingSprite : ULDS.Sprite;
        var bitmap = ImageManager.loadBitmap('img/' + settings.path + '/',
            settings.name, settings.hue, settings.smooth);
        var sprite = new spriteClass(bitmap);

        delete settings.path;
        delete settings.name;
        delete settings.loop;
        delete settings.hue;
        delete settings.smooth;

        sprite.assignSettings(settings);

        return sprite;
    }

    ULDS.Sprite = function(bitmap) {
        Sprite.call(this, bitmap);
    };

    ULDS.Sprite.prototype = Object.create(Sprite.prototype);
    ULDS.Sprite.prototype.constructor = ULDS.Sprite;
    assign(ULDS.Sprite.prototype, Helper);

    ULDS.TilingSprite = function(bitmap) {
        TilingSprite.call(this, bitmap);
        bitmap.addLoadListener(function() {
            this.move(0, 0, bitmap.width, bitmap.height);
        }.bind(this));
    };

    ULDS.TilingSprite.prototype = Object.create(TilingSprite.prototype);
    ULDS.TilingSprite.prototype.constructor = ULDS.TilingSprite;
    assign(ULDS.TilingSprite.prototype, Helper);

    Object.defineProperties(ULDS.TilingSprite.prototype, {
        x: {
            get: function() { return -this.origin.x; },
            set: function(x) { this.origin.x = -x; }
        },
        y: {
            get: function() { return -this.origin.y; },
            set: function(y) { this.origin.y = -y; }
        }
    });

    var ct = Spriteset_Map.prototype.createTilemap;
    Spriteset_Map.prototype.createTilemap = function() {
        ct.call(this);
        $dataMap.note.replace(RE, function(_match, settings) {
            var isValid = false;
            try {
                settings = JSON.parse(settings);
                isValid = typeof(settings) === 'object';
                if (!isValid) {
                    throw 'ULDS settings should be an object';
                }
            } catch (e) {
                console.error(e);
                console.log(settings);
            }
            if (isValid) {
                this._tilemap.addChild(ULDS(settings));
            }
        }.bind(this));
    };
}();