/*
Title: Colored Items
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 2.0.1
Release: 11.10.2020
First release: 19.11.2015
*/

/*ru
Название: Цветные Предметы
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 2.0.1
Релиз: 11.10.2020
Первый релиз: 19.11.2015
*/

/*:
 * @plugindesc DK物品颜色
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Colored_Items
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 2.0.1
 Release: 11.10.2020
 First release: 19.11.2015

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## 指令
 ###=========================================================================
 使用物品/武器/护甲/技能说明来表示颜色:
 <color: x>
 将x替换为描述窗口文本颜色的数值
 或
 <color: #rrggbb>
 将rrggbb替换为十六进制格式的任何颜色

 ###===========================================================================
 ## 许可和使用条款
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 To use the plugin in commercial projects, you must be my subscriber on patreon
 https://www.patreon.com/dkplugins

 ###=========================================================================
 ## Support
 ###=========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

*/

/*:ru
 * @plugindesc v.2.0.1 Позволяет изменить цвет текста предметов, оружия, брони и навыков.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Colored_Items
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 2.0.1
 Релиз: 11.10.2020
 Первый релиз: 19.11.2015

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Инструкции
 ###=========================================================================
 Используйте заметки предмета/оружия/брони/навыка, чтобы указать цвет:
 <color: x>
 Замените x на число, обозначающее цвет текста из обложки окна.
 ИЛИ
 <color: #rrggbb>
 Замените rrggbb на любой цвет в формате hex.

 ###===========================================================================
 ## Лицензия и правила использования плагина
 ###===========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Для использования плагина в коммерческих проектах необходимо быть моим подписчиком на патреоне
 https://www.patreon.com/dkplugins

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Colored_Items'] = '2.0.1';

//===========================================================================
// Window_Base
//===========================================================================

Window_Base.prototype.itemNameColor = function(item) {
    const color = item.meta.color && item.meta.color.trim();
    const colorNumber = parseInt(color);

    if (color === undefined) {
        return Utils.RPGMAKER_NAME === 'MV' ?
            this.normalColor() : ColorManager.normalColor();
    }

    // windowskin color
    if (Number.isFinite(colorNumber)) {
        return Utils.RPGMAKER_NAME === 'MV' ?
            this.textColor(colorNumber) : ColorManager.textColor(colorNumber);
    }

    return color.startsWith('#') ?
        color : '#' + color;
};

if (Utils.RPGMAKER_NAME === 'MV') {

    Window_Base.prototype.drawItemName = function(item, x, y, width) {
        if (!item) {
            return;
        }

        const iconBoxWidth = Window_Base._iconWidth + 4;

        this.resetTextColor();
        this.changeTextColor(this.itemNameColor(item));
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y,
            (width || 312) - iconBoxWidth);
    };

} else {

    Window_Base.prototype.drawItemName = function(item, x, y, width) {
        if (!item) {
            return;
        }

        const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
        const textMargin = ImageManager.iconWidth + 4;
        const itemWidth = Math.max(0, width - textMargin);

        this.resetTextColor();
        this.changeTextColor(this.itemNameColor(item));
        this.drawIcon(item.iconIndex, x, iconY);
        this.drawText(item.name, x + textMargin, y, itemWidth);
    };

}
