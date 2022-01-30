/*:
 * @plugindesc XPStyleBattle for MV Build190908
 * @author Momomaru Remix / Peachround
 *
 * @help Please refer to: http://peachround.com/mv/xpb4mv/
 * 
 * @requiredAssets img/system/selection_cursor
 * @requiredAssets img/system/bd_standard/hud_bg
 * @requiredAssets img/system/bd_standard/std_bg
 * @requiredAssets img/system/bd_standard/std_gauge_bg
 * @requiredAssets img/system/bd_standard/std_hp
 * @requiredAssets img/system/bd_standard/std_gauge
 * @requiredAssets img/system/bd_standard/std_large_numbers
 * @requiredAssets img/system/bd_standard/std_gauge_bg
 * @requiredAssets img/system/bd_standard/std_mp
 * @requiredAssets img/system/bd_standard/std_gauge
 * @requiredAssets img/system/bd_standard/std_large_numbers
 * @requiredAssets img/system/bd_standard/std_tp_gauge_bg
 * @requiredAssets img/system/bd_standard/std_tp
 * @requiredAssets img/system/bd_standard/std_tp_gauge
 * @requiredAssets img/system/bd_standard/std_small_numbers
 * 
 * 
 *
 * @param (string)hud.themeFileName
 * @type string
 * @desc HUD theme file path that placed in "data" folder. [Default: empty string]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (string)battlerGraphic.rootPath
 * @type string
 * @desc Battler graphics image path. [Default: img/battlergraphics/]
 *
 * @param (boolean)battlerGraphic.enableAnimation
 * @type boolean
 * @desc Enable animation for actor. [Front view only] [Default: true]
 *
 * @param (boolean)battlerGraphic.enablePopup
 * @type boolean
 * @desc Enable popup for actor.  [Front view only] [Default: true]
 *
 * @param (integer)battlerGraphic.damageDuration
 * @type number
 * @min 1
 * @max 4096
 * @desc Duration to display Damage BattlerGraphic. [Default: 24]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)animation.playRate
 * @type number
 * @min 1
 * @max 8
 * @desc Animation play speed. 1: 4/1 2: 2/1 3: 4/3 4: 1/1 [Default: 4]
 * 
* @param (integer)animation.forParty.adjustPosition.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment x coordinate for party animation. [Default: 0]
 *
 * @param (integer)animation.forParty.adjustPosition.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment y coordinate for party animation. [Default: 0]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (string)targetCursor.fileName
 * @type file
 * @dir img/system
 * @desc The file name of the cursor image. [Default: selection_cursor]
 * @default selection_cursor
 * @require 1
 *
 * @param (integer)targetCursor.width
 * @type number
 * @min 0
 * @max 4096
 * @desc Width per pattern. 0: Auto [Default: 0]
 *
 * @param (integer)targetCursor.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc The smaller the value, the faster. [Default: 4]
 *
 * @param (integer)targetCursor.moveSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc The smaller the value, the faster. [Default: 5]
 * 
 * @param (integer)targetCursor.adjustPositionOnActor.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment x coordinate. [Default: 0]
 *
 * @param (integer)targetCursor.adjustPositionOnActor.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment y coordinate. [Default: -32]
 * 
 * @param (integer)targetCursor.adjustPositionOnEnemy.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment x coordinate. [Default: 0]
 *
 * @param (integer)targetCursor.adjustPositionOnEnemy.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment y coordinate. [Default: 0]
 * 
 * @param (integer)targetCursor.minY
 * @type number
 * @min 0
 * @max 4096
 * @desc The minimum value of y coordinate. [Default: 96]
 * 
 * @param (boolean)targetCursor.checkSelection
 * @type boolean
 * @desc Check target selection in all scope. [Default: true]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)targetInformation.gaugeWidth
 * @type number
 * @min 1
 * @max 4096
 * @desc Each gauge width. [Default: 108]
 *
 * @param (string)targetInformation.scopeNotation.forParty
 * @type string
 * @desc Scope notation of for party. [Default: 味方全体]
 *
 * @param (string)targetInformation.scopeNotation.forTroop
 * @type string
 * @desc Scope notation of for troop. [Default: 敵全体]
 *
 * @param (string)targetInformation.scopeNotation.forTroopRandom
 * @type string
 * @desc Scope notation of for random enemies. %1 is random number. [Default: 敵%1体 ランダム]
 *
 * @param (boolean)targetInformation.actor.states
 * @type boolean
 * @desc Display actor's state icon. [Default: true]
 *
 * @param (boolean)targetInformation.actor.hp
 * @type boolean
 * @desc Display actor's hp. [Default: true]
 *
 * @param (boolean)targetInformation.actor.mp
 * @type boolean
 * @desc Display actor's mp. [Default: true]
 *
 * @param (boolean)targetInformation.actor.tp
 * @type boolean
 * @desc Display actor's tp. [Default: true]
 *
 * @param (boolean)targetInformation.enemy.states
 * @type boolean
 * @desc Display enemy's state icon. [Default: true]
 *
 * @param (boolean)targetInformation.enemy.hp
 * @type boolean
 * @desc Display enemy's hp. [Default: false]
 *
 * @param (boolean)targetInformation.enemy.mp
 * @type boolean
 * @desc Display enemy's mp. [Default: false]
 *
 * @param (boolean)targetInformation.enemy.tp
 * @type boolean
 * @desc Display enemy's tp. [Default: false]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)battleMessage.enemyEmergeMessage
 * @type boolean
 * @desc Display enemy emergence message at the battle start. [Default: false]
 *
 * @param (boolean)battleMessage.simpleBattleLog.useSimpleBattleLog
 * @type boolean
 * @desc Enable simple battle log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.displayAttack
 * @type boolean
 * @desc Display normal attack in the log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.displayGuard
 * @type boolean
 * @desc Display guard in the log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.drawIcon
 * @type boolean
 * @desc Draw an icon with the action name. [Default: true]
 *
 * @param (integer)battleMessage.simpleBattleLog.align
 * @type number
 * @min 0
 * @max 2
 * @desc Text horizontal alignment. 0: Left 1: Center 2: Right [Default: 1]
 *
 * @param (string)battleMessage.simpleBattleLog.descriptionDelimiter
 * @type string
 * @desc Delimiter between action name and action description. [Default: ' : ']
 *
 * @param (integer)battleMessage.simpleBattleLog.descriptionFontSize
 * @type number
 * @min 0
 * @max 128
 * @desc Font size of action description. 0: The same font size as the action name [Default: 0]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)windowLayout.itemSkill.fitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: true]
 *
 * @param (boolean)windowLayout.itemSkill.maxHeight
 * @type boolean
 * @desc Maximum height of item/skill window. [Default: 320]
 *
 * @param (integer)windowLayout.actorCommand.absolutePosition.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The absolute x coordinate. undefiled: apply relative position from actor [Default: undefined]
 *
 * @param (integer)windowLayout.actorCommand.absolutePosition.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The absolute y coordinate. undefiled: apply relative position from actor [Default: undefined]
 *
 * @param (integer)windowLayout.actorCommand.adjustPosition.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment x coordinate. [Default: 0]
 *
 * @param (integer)windowLayout.actorCommand.adjustPosition.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment y coordinate. [Default: -56]
 *
 * @param (integer)windowLayout.actorCommand.width
 * @type number
 * @min 1
 * @max 4096
 * @desc The width. [Default: 192]
 *
 * @param (boolean)windowLayout.actorCommand.heightFitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: true]
 *
 * @param (integer)windowLayout.actorCommand.visibleRows
 * @type number
 * @min 1
 * @max 64
 * @desc Number of rows to display. [Only heightFitting = false] [Default: 4]
 *
 * @param (boolean)windowLayout.actorCommand.isHorizontal
 * @type boolean
 * @desc Enable horizontal command. [Default: false]
 *
 * @param (integer)windowLayout.actorCommand.maxCols
 * @type number
 * @min 1
 * @max 64
 * @desc The max number of column. [Only isHorizontal = false] [Default: 1]
 *
 * @param (string)windowLayout.actorCommand.itemAlign
 * @type string
 * @desc Alignment of items. parameter  = left or center or right [Default: left]
 *
 * @param (integer)windowLayout.partyCommand.position.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The x coordinate. [Default: undefined]
 *
 * @param (integer)windowLayout.partyCommand.position.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The y coordinate. [Default: undefined]
 *
 * @param (integer)windowLayout.partyCommand.width
 * @type number
 * @min 1
 * @max 4096
 * @desc The width. undefined: game screen width [Default: undefined]
 *
 * @param (boolean)windowLayout.partyCommand.heightFitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: false]
 *
 * @param (integer)windowLayout.partyCommand.visibleRows
 * @type number
 * @min 1
 * @max 64
 * @desc Number of rows to display. [Only heightFitting = false] [Default: 1]
 *
 * @param (boolean)windowLayout.partyCommand.isHorizontal
 * @type boolean
 * @desc Enable horizontal command. [Default: true]
 *
 * @param (integer)windowLayout.partyCommand.maxCols
 * @type number
 * @min 1
 * @max 64
 * @desc The max number of column. [Only isHorizontal = false] [Default: 2]
 *
 * @param (string)windowLayout.partyCommand.itemAlign
 * @type string
 * @desc Alignment of items. parameter  = left or center or right [Default: center]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)battleSpeed.basicSpeed
 * @type number
 * @min 4
 * @max 128
 * @desc The smaller the value, the faster. [Default: 12]
*
 * @param (boolean)battleSpeed.animationFastForward
 * @type boolean
 * @desc Enable fast forward of animation. [Default: true]
 *
 * @param (boolean)battleSpeed.animationDelayFastForward
 * @type boolean
 * @desc Enable fast forward of animation delay. [Default: true]
 *
 * @param (integer)battleSpeed.actorStepDuration
 * @type number
 * @min 1
 * @max 128
 * @desc The time that the actor takes a small move. [Side view only] [Default: 6]
 *
 * @param (integer)battleSpeed.animationSkipDuration
 * @type number
 * @min 0
 * @max 4096
 * @desc If animation's remaining duration falls below this value, skip the animation. [Default: 8]
 *
 * @param (boolean)battleSpeed.skipBlinkEffect
 * @desc Enable skip of blink effect. [Default: true]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)minorFixes.enableSelectionEffect
 * @type boolean
 * @desc Enable selection effect for battler. [Default: true]
 *
 */

"use strict";

(function () {
    if (!Array.prototype.find) {
        Array.prototype.find = function (callback, thisArg) {
            if (this === null) {
                throw new TypeError("Array.prototype.find called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError("Callback must be a function");
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var value;
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (callback.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
})();

(function () {
    var TO_RADIANS = Math.PI / 180;
    var TO_DEGREES = 180 / Math.PI;
    if (!Math.radians) {
        Math.radians = function (degrees) { return degrees * TO_RADIANS; };
    }
    if (!Math.degrees) {
        Math.degrees = function (radians) { return radians * TO_DEGREES; };
    }
})();



var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Consts;
        (function (Consts) {
            var Enums;
            (function (Enums) {
                var Mode;
                (function (Mode) {
                    Mode[Mode["Game"] = 0] = "Game";
                    Mode[Mode["Preview"] = 1] = "Preview";
                    Mode[Mode["Studio"] = 2] = "Studio";
                })(Mode = Enums.Mode || (Enums.Mode = {}));
                var TouchInputStatus;
                (function (TouchInputStatus) {
                    TouchInputStatus[TouchInputStatus["NoInput"] = 0] = "NoInput";
                    TouchInputStatus[TouchInputStatus["Pressed"] = 1] = "Pressed";
                    TouchInputStatus[TouchInputStatus["Triggered"] = 2] = "Triggered";
                })(TouchInputStatus = Enums.TouchInputStatus || (Enums.TouchInputStatus = {}));
                var Orientation;
                (function (Orientation) {
                    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
                    Orientation[Orientation["Vertical"] = 1] = "Vertical";
                })(Orientation = Enums.Orientation || (Enums.Orientation = {}));
                var VerticalAlignment;
                (function (VerticalAlignment) {
                    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
                    VerticalAlignment[VerticalAlignment["Middle"] = 1] = "Middle";
                    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
                })(VerticalAlignment = Enums.VerticalAlignment || (Enums.VerticalAlignment = {}));
                var HorizontalAlignment;
                (function (HorizontalAlignment) {
                    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
                    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
                    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
                })(HorizontalAlignment = Enums.HorizontalAlignment || (Enums.HorizontalAlignment = {}));
                var Directions;
                (function (Directions) {
                    Directions[Directions["NoDirection"] = 0] = "NoDirection";
                    Directions[Directions["LeftDown"] = 1] = "LeftDown";
                    Directions[Directions["Down"] = 2] = "Down";
                    Directions[Directions["RightDown"] = 3] = "RightDown";
                    Directions[Directions["Left"] = 4] = "Left";
                    Directions[Directions["Center"] = 5] = "Center";
                    Directions[Directions["Right"] = 6] = "Right";
                    Directions[Directions["LeftUp"] = 7] = "LeftUp";
                    Directions[Directions["Up"] = 8] = "Up";
                    Directions[Directions["RightUp"] = 9] = "RightUp";
                })(Directions = Enums.Directions || (Enums.Directions = {}));
                var DamagePopupTypes;
                (function (DamagePopupTypes) {
                    DamagePopupTypes[DamagePopupTypes["Normal"] = 0] = "Normal";
                    DamagePopupTypes[DamagePopupTypes["Miss"] = 1] = "Miss";
                    DamagePopupTypes[DamagePopupTypes["Evasion"] = 2] = "Evasion";
                    DamagePopupTypes[DamagePopupTypes["Counter"] = 3] = "Counter";
                    DamagePopupTypes[DamagePopupTypes["Reflection"] = 4] = "Reflection";
                    DamagePopupTypes[DamagePopupTypes["Substitute"] = 5] = "Substitute";
                    DamagePopupTypes[DamagePopupTypes["HpDamage"] = 16] = "HpDamage";
                    DamagePopupTypes[DamagePopupTypes["HpCriticalDamage"] = 17] = "HpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["HpRecover"] = 18] = "HpRecover";
                    DamagePopupTypes[DamagePopupTypes["MpDamage"] = 32] = "MpDamage";
                    DamagePopupTypes[DamagePopupTypes["MpCriticalDamage"] = 33] = "MpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["MpRecover"] = 34] = "MpRecover";
                    DamagePopupTypes[DamagePopupTypes["TpDamage"] = 48] = "TpDamage";
                    DamagePopupTypes[DamagePopupTypes["TpCriticalDamage"] = 49] = "TpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["TpRecover"] = 50] = "TpRecover";
                    DamagePopupTypes[DamagePopupTypes["AddState"] = 64] = "AddState";
                    DamagePopupTypes[DamagePopupTypes["AddPositiveState"] = 65] = "AddPositiveState";
                    DamagePopupTypes[DamagePopupTypes["AddNegativeState"] = 66] = "AddNegativeState";
                    DamagePopupTypes[DamagePopupTypes["RemoveState"] = 80] = "RemoveState";
                    DamagePopupTypes[DamagePopupTypes["RemovePositiveState"] = 81] = "RemovePositiveState";
                    DamagePopupTypes[DamagePopupTypes["RemoveNegativeState"] = 82] = "RemoveNegativeState";
                    DamagePopupTypes[DamagePopupTypes["AddBuff"] = 96] = "AddBuff";
                    DamagePopupTypes[DamagePopupTypes["AddDebuff"] = 97] = "AddDebuff";
                    DamagePopupTypes[DamagePopupTypes["RemoveBuff"] = 112] = "RemoveBuff";
                    DamagePopupTypes[DamagePopupTypes["RemoveDebuff"] = 113] = "RemoveDebuff";
                    DamagePopupTypes[DamagePopupTypes["Effective"] = 256] = "Effective";
                    DamagePopupTypes[DamagePopupTypes["NotEffective"] = 257] = "NotEffective";
                })(DamagePopupTypes = Enums.DamagePopupTypes || (Enums.DamagePopupTypes = {}));
                var ConditionalBattlerGraphicKind;
                (function (ConditionalBattlerGraphicKind) {
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["state"] = 128] = "state";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["crisis"] = 256] = "crisis";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["command"] = 512] = "command";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["ready"] = 513] = "ready";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["guard"] = 514] = "guard";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["chanting"] = 515] = "chanting";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["skill"] = 1024] = "skill";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["item"] = 1025] = "item";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["damage"] = 2048] = "damage";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["victory"] = 2049] = "victory";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["dead"] = 4096] = "dead";
                })(ConditionalBattlerGraphicKind = Enums.ConditionalBattlerGraphicKind || (Enums.ConditionalBattlerGraphicKind = {}));
                var Languages;
                (function (Languages) {
                    Languages[Languages["English"] = 0] = "English";
                    Languages[Languages["Japanese"] = 1] = "Japanese";
                })(Languages = Enums.Languages || (Enums.Languages = {}));
            })(Enums = Consts.Enums || (Consts.Enums = {}));
        })(Consts = Core.Consts || (Core.Consts = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var xpbBattleSpeed = "xpbBattleSpeed";
    var _bdc_ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _bdc_ConfigManager_applyData.apply(this, arguments);
        var cm = this;
        cm.xpbBattleSpeed = cm.readXpbBattleSpeed(config, xpbBattleSpeed);
    };
    var _bdc_ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        var config = _bdc_ConfigManager_makeData.apply(this, arguments);
        config.xpbBattleSpeed = this.xpbBattleSpeed;
        return config;
    };
    ConfigManager.readXpbBattleSpeed = function (config, name) {
        var value = config[name];
        if (value !== undefined) {
            return Number(value).clamp(1, 3);
        }
        else {
            return 2;
        }
    };
    ConfigManager.writeXpbBattleSpeed = function (speed) {
        this.xpbBattleSpeed = speed.clamp(1, 3);
    };
})();

(function () {
    Game_System.prototype.xpbBasicSpeed = function () {
        return this._xpbBasicSpeed;
    };
    Game_System.prototype.setXpbBasicSpeed = function (speed) {
        this._xpbBasicSpeed = speed.clamp(4, 128);
    };
    Game_System.prototype.resetXpbBasicSpeed = function () {
        return this._xpbBasicSpeed = undefined;
    };
})();

(function () {
    var _bdc_Window_Options_changeValue = Window_Options.prototype.changeValue;
    Window_Options.prototype.changeValue = function (symbol, value) {
        _bdc_Window_Options_changeValue.apply(this, arguments);
        if (this.isCustomSymbol && this.isCustomSymbol(symbol) && !isNaN(value)) {
            var script = this._customParams[symbol].script;
            if ("BD.CMD.xpbBattleSpeed") {
                ConfigManager.writeXpbBattleSpeed(value);
            }
        }
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var PluginParameterLoader;
        (function (PluginParameterLoader) {
            function overwriteWithPluginParameters(pluginName, dst) {
                var params = PluginManager.parameters(pluginName);
                var paramsKeys = Object.keys(params);
                _enumerateSettingKeys("", dst)
                    .forEach(function (x) { return _overwrite(dst, params, paramsKeys, x); });
            }
            PluginParameterLoader.overwriteWithPluginParameters = overwriteWithPluginParameters;
            function _enumerateSettingKeys(base, object) {
                if (Object.prototype.toString.call(object) !== "[object Object]") {
                    return [base];
                }
                var settingKeys = [];
                var keys = Object.keys(object);
                keys.filter(function (x) { return x !== "hudData"; }).forEach(function (x) {
                    var k = _enumerateSettingKeys(x, object[x]);
                    k.map(function (y) { return base + (base.length > 0 ? "." : "") + y; }).forEach(function (y) { return settingKeys.push(y); });
                });
                return settingKeys;
            }
            function _overwrite(dst, params, paramsKeys, key) {
                var regexp = /^\((.+)\)(.*)$/;
                var paramKey = paramsKeys.find(function (x) {
                    var match = regexp.exec(x);
                    return match[2] === key;
                });
                if (!paramKey) {
                    return;
                }
                var match = regexp.exec(paramKey);
                var value = _parseValue(match[1], params[paramKey]);
                if (value === undefined) {
                    return;
                }
                var setting = dst;
                var path = key.split(".");
                path.slice(0, path.length - 1).forEach(function (x) { return setting = setting[x]; });
                setting[key.split(".").pop()] = value;
            }
            function _parseValue(type, value) {
                if (value === "undefined" || value === "") {
                    return undefined;
                }
                switch (type.toLowerCase()) {
                    case "integer":
                        var int = parseInt(value, 10);
                        if (isNaN(int)) {
                            return undefined;
                        }
                        return int;
                    case "float":
                        var float = parseFloat(value);
                        if (isNaN(float)) {
                            return undefined;
                        }
                        return float;
                    case "string":
                        return value;
                    case "boolean":
                        if (value.toLowerCase() === "true") {
                            return true;
                        }
                        else if (value.toLowerCase() === "false") {
                            return false;
                        }
                        return undefined;
                    default:
                        return undefined;
                }
            }
        })(PluginParameterLoader = Core.PluginParameterLoader || (Core.PluginParameterLoader = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var $BDHUD;
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Settings;
        (function (Settings) {
            var _defaultColors = [
                { bodyColor: "rgba(255,255,255,1.0)", outlineColor: "rgba(0,0,0,1.0)" },
                { bodyColor: "rgba(160,250,108,1.0)", outlineColor: "rgba(0,72,32,1.0)" },
                { bodyColor: "rgba(192,96,232,1.0)", outlineColor: "rgba(0,0,0,1.0)" },
                { bodyColor: "rgba(172,232,250,1.0)", outlineColor: "rgba(40,64,168,1.0)" },
                { bodyColor: "rgba(224,224,72,1.0)", outlineColor: "rgba(0,80,80,1.0)" },
                { bodyColor: "rgba(224,224,72,1.0)", outlineColor: "rgba(0,80,80,1.0)" },
                { bodyColor: "rgba(255,255,255,1.0)", outlineColor: "rgba(48,92,224,1.0)" },
                { bodyColor: "rgba(220,214,208,1.0)", outlineColor: "rgba(64,64,64,1.0)" },
                { bodyColor: "rgba(248,242,96,1.0)", outlineColor: "rgba(200,28,32,1.0)" },
                { bodyColor: "rgba(224,224,224,1.0)", outlineColor: "rgba(64,64,64,0.5)" },
                { bodyColor: "rgba(255,255,255,1.0)", outlineColor: "rgba(144,108,16,1.0)" },
                { bodyColor: "rgba(255,255,255,1.0)", outlineColor: "rgba(48,116,132,1.0)" },
                { bodyColor: "rgba(255,255,255,1.0)", outlineColor: "rgba(136,64,120,1.0)" },
            ];
            var _defaultColorAlloc = {
                17: 8,
                18: 1,
                32: 2,
                33: 2,
                34: 3,
                48: 4,
                49: 4,
                50: 5,
                66: 7,
                97: 7,
                256: 6,
                257: 7,
                80: 9,
                81: 9,
                82: 9,
                112: 9,
                113: 9,
                3: 10,
                4: 11,
                5: 12
            };
            var _defaultPopupSettings = {
                fileName: "",
                numberSize: 32,
                numberHeight: 28,
                numberSpacing: 0.75,
                textSize: 24,
                textFont: "Arial Black, Avenir-Black, sans-serif-black, GameFont",
                textHeight: 28,
                colors: _defaultColors,
                pattern: _defaultColors.length,
                colorAlloc: _defaultColorAlloc,
                texts: {
                    counter: "COUNTER",
                    reflection: "REFLECTION",
                    substitute: "SUBSTITUTE",
                    miss: "MISS",
                    evasion: "MISS",
                    critical: "CRITICAL",
                    weakness: "WEAKNESS",
                    resist: "RESIST",
                    plus: "+",
                    minus: "-"
                },
                types: {
                    addState: "Rise",
                    removeState: "Rise",
                    addBuff: "Rise",
                    addDebuff: "Rise",
                    removeBuff: "Rise",
                    tpCharge: "Overlay",
                    regenerate: "SimpleBounce",
                    miss: "SimpleBounce",
                    hpDamage: "SimpleBounce",
                    mpDamage: "SimpleBounce",
                    tpDamage: "SimpleBounce",
                    counter: "Overlay",
                    reflection: "Overlay",
                    substitute: "Overlay",
                }
            };
            var _defaultBattlerGraphic = {
                rootPath: "img/battlergraphics/",
                enableAnimation: true,
                enablePopup: true,
                damageDuration: 24
            };
            var _defaultAnimation = {
                playRate: 4,
                forParty: {
                    adjustPosition: {
                        x: 0,
                        y: 0
                    }
                }
            };
            var _defaultTargetCursor = {
                fileName: "selection_cursor",
                width: 0,
                animationSpeed: 4,
                moveSpeed: 5,
                adjustPositionOnActor: {
                    x: 0,
                    y: -32
                },
                adjustPositionOnEnemy: {
                    x: 0,
                    y: 0
                },
                minY: 96,
                checkSelection: true
            };
            var _defaultTargetInformation = {
                gaugeWidth: 108,
                scopeNotation: {
                    forParty: "味方全体",
                    forTroop: "敵全体",
                    forTroopRandom: "敵%1体 ランダム"
                },
                actor: {
                    states: true,
                    hp: true,
                    mp: true,
                    tp: true
                },
                enemy: {
                    states: true,
                    hp: false,
                    mp: false,
                    tp: false
                },
            };
            var _defaultBattleMessage = {
                enemyEmergeMessage: false,
                simpleBattleLog: {
                    useSimpleBattleLog: true,
                    type: "Window",
                    displayAttack: false,
                    displayGuard: true,
                    drawIcon: true,
                    align: BD.Core.Consts.Enums.HorizontalAlignment.Center,
                    descriptionDelimiter: " : ",
                    descriptionFontSize: 0
                }
            };
            var _defaultWindowLayout = {
                itemSkill: {
                    fitting: true,
                    maxHeight: 320,
                },
                actorCommand: {
                    absolutePosition: {
                        x: undefined,
                        y: undefined
                    },
                    adjustPosition: {
                        x: 0,
                        y: -56,
                    },
                    width: 192,
                    heightFitting: true,
                    visibleRows: 4,
                    isHorizontal: false,
                    maxCols: 1,
                    itemAlign: "left",
                },
                partyCommand: {
                    position: {
                        x: 0,
                        y: 0
                    },
                    width: undefined,
                    heightFitting: false,
                    visibleRows: 1,
                    isHorizontal: true,
                    maxCols: 2,
                    itemAlign: "center",
                }
            };
            var _defaultBattleSpeed = {
                basicSpeed: 12,
                animationFastForward: true,
                animationDelayFastForward: true,
                actorStepDuration: 6,
                animationSkipDuration: 8,
                skipBlinkEffect: true,
            };
            var _defaultMinorFixes = {
                enableSelectionEffect: true
            };
            var _defaultSettings = {
                hudData: null,
                battlerGraphic: _defaultBattlerGraphic,
                popup: _defaultPopupSettings,
                animation: _defaultAnimation,
                targetCursor: _defaultTargetCursor,
                targetInformation: _defaultTargetInformation,
                battleMessage: _defaultBattleMessage,
                windowLayout: _defaultWindowLayout,
                battleSpeed: _defaultBattleSpeed,
                minorFixes: _defaultMinorFixes
            };
            var _settings;
            var _hudData;
            var _battlerGraphic;
            var _popup;
            var _animation;
            var _targetCursor;
            var _targetInformation;
            var _battleMessage;
            var _windowLayout;
            var _battleSpeed;
            var _minorFixes;
            var _themeHud;
            function loadSettingsJson() {
                _settings = _defaultSettings;
                _hudData = _settings.hudData;
                _battlerGraphic = _settings.battlerGraphic;
                _popup = _settings.popup;
                _animation = _settings.animation;
                _targetCursor = _settings.targetCursor;
                _targetInformation = _settings.targetInformation;
                _battleMessage = _settings.battleMessage;
                _windowLayout = _settings.windowLayout;
                _battleSpeed = _settings.battleSpeed;
                _minorFixes = _settings.minorFixes;
                Core.PluginParameterLoader.overwriteWithPluginParameters("XPStyleBattleMV", _settings);
            }
            Settings.loadSettingsJson = loadSettingsJson;
            function setHud(data) {
                _themeHud = data;
            }
            Settings.setHud = setHud;
            function hud() {
                if (_themeHud) {
                    return _themeHud;
                }
                if (!_hudData) {
                    _hudData = Core.StandardTheme.create();
                }
                return _hudData;
            }
            Settings.hud = hud;
            function battlerGraphic() {
                return _battlerGraphic;
            }
            Settings.battlerGraphic = battlerGraphic;
            function animation() {
                return _animation;
            }
            Settings.animation = animation;
            function targetCursor() {
                return _targetCursor;
            }
            Settings.targetCursor = targetCursor;
            function targetInformation() {
                return _targetInformation;
            }
            Settings.targetInformation = targetInformation;
            function windowLayout() {
                return _windowLayout;
            }
            Settings.windowLayout = windowLayout;
            function battleMessage() {
                return _battleMessage;
            }
            Settings.battleMessage = battleMessage;
            ;
            function battleSpeed() {
                return _battleSpeed;
            }
            Settings.battleSpeed = battleSpeed;
            ;
            function popup() {
                return _popup;
            }
            Settings.popup = popup;
            ;
            function minorFixes() {
                return _minorFixes;
            }
            Settings.minorFixes = minorFixes;
            function basicSpeed() {
                var base = $gameSystem.xpbBasicSpeed() || _battleSpeed.basicSpeed;
                if ($gameSystem.xpbBasicSpeed()) {
                    return $gameSystem.xpbBasicSpeed();
                }
                else if (ConfigManager.xpbBattleSpeed) {
                    var rate = 1.0;
                    switch (ConfigManager.xpbBattleSpeed) {
                        case 1:
                            rate = 0.33;
                            break;
                        case 3:
                            rate = 2.0;
                            break;
                    }
                    return Math.round(base * rate);
                }
                return base;
            }
            Settings.basicSpeed = basicSpeed;
            function enableSideVidwBattler() {
                return $gameSystem.isSideView();
            }
            Settings.enableSideVidwBattler = enableSideVidwBattler;
            function isDisplayTp() {
                return $dataSystem.optDisplayTp;
            }
            Settings.isDisplayTp = isDisplayTp;
            function isSimpleBattleLog() {
                return battleMessage().simpleBattleLog.useSimpleBattleLog;
            }
            Settings.isSimpleBattleLog = isSimpleBattleLog;
        })(Settings = Core.Settings || (Core.Settings = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
BD.Core.Settings.loadSettingsJson();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var StandardTheme;
        (function (StandardTheme) {
            var params = {
                "root": {
                    "x": 0,
                    "y": 0,
                },
                "hudBg": {
                    "x": 0,
                    "y": 444,
                    "visible": true,
                    "fileName": "bd_standard/hud_bg"
                },
                "general": {
                    "x": 8,
                    "y": 458,
                    "width": 800,
                    "height": 180,
                    "horizontalAlignment": 1,
                    "verticalAlignment": 0,
                    "actorStatusWidth": 200,
                    "actorStatusHeight": 166,
                    "horizontalSpacing": 0,
                    "verticalSpacing": 0,
                    "orientation": 0,
                    "maxRows": 16,
                    "maxLines": 1,
                    "isBricks": false
                },
                "bg": {
                    "x": -4,
                    "y": -4,
                    "visible": true,
                    "fileName": "bd_standard/std_bg"
                },
                "battler": {
                    "x": 78,
                    "y": 150,
                    "visible": true,
                    "zoom": 100,
                    "overlayOffsetX": 0,
                    "overlayOffsetY": -8,
                    "isOverlayOnBottom": false,
                    "maskImage": "",
                    "maskImageX": 0,
                    "maskImageY": 0
                },
                "statusBg": {
                    "x": 0,
                    "y": 0,
                    "visible": true,
                    "fileName": ""
                },
                "hp": {
                    "x": 80,
                    "y": 68,
                    "visible": true,
                    "bg": {
                        "x": 0,
                        "y": 29,
                        "visible": true,
                        "fileName": "bd_standard/std_gauge_bg"
                    },
                    "symbol": {
                        "x": 2,
                        "y": 14,
                        "visible": true,
                        "fileName": "bd_standard/std_hp"
                    },
                    "gauge": {
                        "x": 3,
                        "y": 31,
                        "visible": true,
                        "fileName": "bd_standard/std_gauge",
                        "skewAngleX": 0,
                        "skewAngleY": 0,
                        "animationSpeed": 8
                    },
                    "number": {
                        "x": 30,
                        "y": 0,
                        "visible": true,
                        "fileName": "bd_standard/std_large_numbers",
                        "digits": 4,
                        "horizontalSpacing": -5,
                        "zeroSuppress": true,
                        "horizontalAlignment": 2,
                        "animationSpeed": 8
                    },
                },
                "mp": {
                    "x": 80,
                    "y": 108,
                    "visible": true,
                    "bg": {
                        "x": 0,
                        "y": 29,
                        "visible": true,
                        "fileName": "bd_standard/std_gauge_bg"
                    },
                    "symbol": {
                        "x": 2,
                        "y": 14,
                        "visible": true,
                        "fileName": "bd_standard/std_mp"
                    },
                    "gauge": {
                        "x": 3,
                        "y": 31,
                        "visible": true,
                        "fileName": "bd_standard/std_gauge",
                        "skewAngleX": 0,
                        "skewAngleY": 0,
                        "animationSpeed": 8
                    },
                    "number": {
                        "x": 30,
                        "y": 0,
                        "visible": true,
                        "fileName": "bd_standard/std_large_numbers",
                        "digits": 4,
                        "horizontalSpacing": -5,
                        "zeroSuppress": true,
                        "horizontalAlignment": 2,
                        "animationSpeed": 8
                    },
                },
                "tp": {
                    "x": 126,
                    "y": -1,
                    "visible": true,
                    "bg": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "fileName": "bd_standard/std_tp_gauge_bg"
                    },
                    "symbol": {
                        "x": 23,
                        "y": 13,
                        "visible": true,
                        "fileName": "bd_standard/std_tp"
                    },
                    "gauge": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "fileName": "bd_standard/std_tp_gauge",
                        "startAngle": -88,
                        "endAngle": 272,
                        "radius": 28,
                        "lineWidth": 8,
                        "animationSpeed": 8
                    },
                    "number": {
                        "x": 12,
                        "y": 27,
                        "visible": true,
                        "fileName": "bd_standard/std_small_numbers",
                        "digits": 3,
                        "horizontalSpacing": -5,
                        "zeroSuppress": true,
                        "horizontalAlignment": 1,
                        "animationSpeed": 8
                    },
                },
                "state": {
                    "x": 11,
                    "y": 116,
                    "visible": true,
                    "bg": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "fileName": ""
                    },
                    "symbol": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "fileName": ""
                    },
                    "icon": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "stateIconSize": 32,
                        "spacing": 0,
                        "maxStates": 2,
                        "animationSpeed": 50,
                    }
                },
                "name": {
                    "x": 12,
                    "y": 9,
                    "visible": false,
                    "maxWidth": 122,
                    "color": "rgba(255,255,255,1.0)",
                    "outlineColor": "rgba(0,0,0,0.5)",
                    "outlineWidth": 5,
                    "fontSize": 22,
                    "fontFace": "GameFont",
                    "fontItalic": false,
                    "horizontalAlignment": 0,
                }
            };
            function root() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "Root",
                        "name": "Ether",
                        "x": params.root.x,
                        "y": params.root.y,
                        "visible": true
                    },
                    "children": [].slice.call(args)
                };
            }
            function actorAreaBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "actorAreaBackground",
                        "x": params.hudBg.x,
                        "y": params.hudBg.y,
                        "visible": params.hudBg.visible,
                        "fileName": "'" + params.hudBg.fileName + "'"
                    },
                };
            }
            function partyStatusContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "PartyStatusContainer",
                        "name": "PartyBgContainer",
                        "x": params.general.x,
                        "y": params.general.y,
                        "visible": true,
                        "width": params.general.width,
                        "height": params.general.height,
                        "horizontalAlignment": params.general.horizontalAlignment,
                        "verticalAlignment": params.general.verticalAlignment,
                        "actorStatusWidth": params.general.actorStatusWidth,
                        "actorStatusHeight": params.general.actorStatusHeight,
                        "horizontalSpacing": params.general.horizontalSpacing,
                        "verticalSpacing": params.general.verticalSpacing,
                        "orientation": params.general.orientation,
                        "maxRows": params.general.maxRows,
                        "maxLines": params.general.maxLines,
                        "isBricks": params.general.isBricks
                    },
                    "children": [].slice.call(args)
                };
            }
            function background() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "Background",
                        "x": params.bg.x,
                        "y": params.bg.y,
                        "visible": params.bg.visible,
                        "fileName": "'" + params.bg.fileName + "'"
                    },
                };
            }
            function statusBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "StatusBackground",
                        "x": params.statusBg.x,
                        "y": params.statusBg.y,
                        "visible": params.statusBg.visible,
                        "fileName": "'" + params.statusBg.fileName + "'"
                    },
                };
            }
            function battler() {
                return {
                    "properties": {
                        "type": "Battler",
                        "name": "Battler",
                        "x": params.battler.x,
                        "y": params.battler.y,
                        "visible": params.battler.visible,
                        "zoom": params.battler.zoom,
                        "overlayOffsetX": params.battler.overlayOffsetX,
                        "overlayOffsetY": params.battler.overlayOffsetY,
                        "isOverlayOnBottom": params.battler.isOverlayOnBottom,
                        "maskImage": "'" + params.battler.maskImage + "'",
                        "maskImageX": params.battler.maskImageX,
                        "maskImageY": params.battler.maskImageY
                    }
                };
            }
            function hpContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "Container",
                        "name": "HPContainer",
                        "x": params.hp.x,
                        "y": params.hp.y,
                        "visible": params.hp.visible
                    },
                    "children": [].slice.call(args)
                };
            }
            function mpContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "Container",
                        "name": "MPContainer",
                        "x": params.mp.x,
                        "y": params.mp.y,
                        "visible": params.mp.visible
                    },
                    "children": [].slice.call(args)
                };
            }
            function tpContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "Container",
                        "name": "TPContainer",
                        "x": params.tp.x,
                        "y": params.tp.y,
                        "visible": params.tp.visible ?
                            "BD.Core.Settings.isDisplayTp()" : false
                    },
                    "children": [].slice.call(args)
                };
            }
            function stateContainer() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return {
                    "properties": {
                        "type": "Container",
                        "name": "StateContainer",
                        "x": params.state.x,
                        "y": params.state.y,
                        "visible": params.state.visible,
                    },
                    "children": [].slice.call(args)
                };
            }
            function hpBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "HPBackground",
                        "x": params.hp.bg.x,
                        "y": params.hp.bg.y,
                        "visible": params.hp.bg.visible,
                        "fileName": "'" + params.hp.bg.fileName + "'",
                    }
                };
            }
            function hpSymbol() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "HPSymbol",
                        "x": params.hp.symbol.x,
                        "y": params.hp.symbol.y,
                        "visible": params.hp.symbol.visible,
                        "fileName": "'" + params.hp.symbol.fileName + "'",
                    }
                };
            }
            function hpGauge() {
                return {
                    "properties": {
                        "type": "HorizontalGauge",
                        "name": "HPGauge",
                        "x": params.hp.gauge.x,
                        "y": params.hp.gauge.y,
                        "visible": params.hp.gauge.visible,
                        "fileName": "'" + params.hp.gauge.fileName + "'",
                        "skewAngleX": params.hp.gauge.skewAngleX,
                        "skewAngleY": params.hp.gauge.skewAngleY,
                        "value": "this.b.hp",
                        "maxValue": "this.b.hudMhp()",
                        "pattern": 0,
                        "maxPattern": 2,
                        "animationSpeed": params.hp.gauge.animationSpeed
                    }
                };
            }
            function hpNumber() {
                return {
                    "properties": {
                        "type": "Number",
                        "name": "HPNumber",
                        "x": params.hp.number.x,
                        "y": params.hp.number.y,
                        "visible": params.hp.number.visible,
                        "fileName": "'" + params.hp.number.fileName + "'",
                        "value": "this.b.hp",
                        "pattern": "this.b.hudHpNumberPattern()",
                        "maxPattern": 3,
                        "digits": params.hp.number.digits,
                        "horizontalSpacing": params.hp.number.horizontalSpacing,
                        "zeroSuppress": params.hp.number.zeroSuppress,
                        "horizontalAlignment": params.hp.number.horizontalAlignment,
                        "animationSpeed": params.hp.number.animationSpeed
                    }
                };
            }
            function mpBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "MPBackground",
                        "x": params.mp.bg.x,
                        "y": params.mp.bg.y,
                        "visible": params.mp.bg.visible,
                        "fileName": "'" + params.mp.bg.fileName + "'",
                    }
                };
            }
            function mpSymbol() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "MPSymbol",
                        "x": params.mp.symbol.x,
                        "y": params.mp.symbol.y,
                        "visible": params.mp.symbol.visible,
                        "fileName": "'" + params.mp.symbol.fileName + "'",
                    }
                };
            }
            function mpGauge() {
                return {
                    "properties": {
                        "type": "HorizontalGauge",
                        "name": "MPGauge",
                        "x": params.mp.gauge.x,
                        "y": params.mp.gauge.y,
                        "visible": params.mp.gauge.visible,
                        "fileName": "'" + params.mp.gauge.fileName + "'",
                        "skewAngleX": params.mp.gauge.skewAngleX,
                        "skewAngleY": params.mp.gauge.skewAngleY,
                        "value": "this.b.mp",
                        "maxValue": "this.b.hudMmp()",
                        "pattern": 1,
                        "maxPattern": 2,
                        "animationSpeed": params.mp.gauge.animationSpeed
                    }
                };
            }
            function mpNumber() {
                return {
                    "properties": {
                        "type": "Number",
                        "name": "MPNumber",
                        "x": params.mp.number.x,
                        "y": params.mp.number.y,
                        "visible": params.mp.number.visible,
                        "fileName": "'" + params.mp.number.fileName + "'",
                        "value": "this.b.mp",
                        "pattern": 0,
                        "maxPattern": 3,
                        "digits": params.mp.number.digits,
                        "horizontalSpacing": params.mp.number.horizontalSpacing,
                        "zeroSuppress": params.mp.number.zeroSuppress,
                        "horizontalAlignment": params.mp.number.horizontalAlignment,
                        "animationSpeed": params.mp.number.animationSpeed
                    }
                };
            }
            function tpBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "TPBackground",
                        "x": params.tp.bg.x,
                        "y": params.tp.bg.y,
                        "visible": params.tp.bg.visible,
                        "fileName": "'" + params.tp.bg.fileName + "'"
                    }
                };
            }
            function tpSymbol() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "TPSymbol",
                        "x": params.tp.symbol.x,
                        "y": params.tp.symbol.y,
                        "visible": params.tp.symbol.visible,
                        "fileName": "'" + params.tp.symbol.fileName + "'",
                    }
                };
            }
            function tpGauge() {
                return {
                    "properties": {
                        "type": "CircleGauge",
                        "name": "TPGauge",
                        "x": params.tp.gauge.x,
                        "y": params.tp.gauge.y,
                        "visible": params.tp.gauge.visible,
                        "fileName": "'" + params.tp.gauge.fileName + "'",
                        "value": "this.b.tp",
                        "maxValue": "this.b.maxTp()",
                        "startAngle": params.tp.gauge.startAngle,
                        "endAngle": params.tp.gauge.endAngle,
                        "radius": params.tp.gauge.radius,
                        "lineWidth": params.tp.gauge.lineWidth,
                        "animationSpeed": params.tp.gauge.animationSpeed
                    }
                };
            }
            function tpNumber() {
                return {
                    "properties": {
                        "type": "Number",
                        "name": "TPNumber",
                        "x": params.tp.number.x,
                        "y": params.tp.number.y,
                        "visible": params.tp.number.visible,
                        "fileName": "'" + params.tp.number.fileName + "'",
                        "value": "this.b.tp",
                        "pattern": 0,
                        "maxPattern": 3,
                        "digits": params.tp.number.digits,
                        "horizontalSpacing": params.tp.number.horizontalSpacing,
                        "zeroSuppress": params.tp.number.zeroSuppress,
                        "horizontalAlignment": params.tp.number.horizontalAlignment,
                        "animationSpeed": params.tp.number.animationSpeed
                    }
                };
            }
            function stateBackground() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "StateBackground",
                        "x": params.state.bg.x,
                        "y": params.state.bg.y,
                        "visible": params.state.bg.visible,
                        "fileName": "'" + params.state.bg.fileName + "'"
                    }
                };
            }
            function stateIcon() {
                return {
                    "properties": {
                        "type": "StateIcon",
                        "name": "StateIcon",
                        "x": params.state.icon.x,
                        "y": params.state.icon.y,
                        "visible": params.state.icon.visible,
                        "stateIconSize": params.state.icon.stateIconSize,
                        "spacing": params.state.icon.spacing,
                        "maxStates": params.state.icon.maxStates,
                        "animationSpeed": params.state.icon.animationSpeed,
                        "relatedObjects": "'StateBackground,StateSymbol'"
                    }
                };
            }
            function stateSymbol() {
                return {
                    "properties": {
                        "type": "Image",
                        "name": "StateSymbol",
                        "x": params.state.symbol.x,
                        "y": params.state.symbol.y,
                        "visible": params.state.symbol.visible,
                        "fileName": "'" + params.state.symbol.fileName + "'"
                    }
                };
            }
            function actorName() {
                return {
                    "properties": {
                        "type": "Text",
                        "name": "ActorName",
                        "x": params.name.x,
                        "y": params.name.y,
                        "visible": params.name.visible,
                        "text": "this.b.name()",
                        "maxWidth": params.name.maxWidth,
                        "color": "'" + params.name.color + "'",
                        "outlineColor": "'" + params.name.outlineColor + "'",
                        "outlineWidth": params.name.outlineWidth,
                        "fontSize": params.name.fontSize,
                        "fontFace": "'" + params.name.fontFace + "'",
                        "fontItalic": params.name.fontItalic,
                        "horizontalAlignment": params.name.horizontalAlignment
                    }
                };
            }
            function overwrite() {
                BD.Core.PluginParameterLoader.overwriteWithPluginParameters("XPB-StandardTheme", params);
            }
            StandardTheme.overwrite = overwrite;
            function create() {
                return root(actorAreaBackground(), partyStatusContainer(background()), partyStatusContainer(battler()), partyStatusContainer(statusBackground(), hpContainer(hpBackground(), hpGauge(), hpSymbol(), hpNumber()), mpContainer(mpBackground(), mpGauge(), mpSymbol(), mpNumber()), tpContainer(tpBackground(), tpGauge(), tpSymbol(), tpNumber()), stateContainer(stateBackground(), stateIcon(), stateSymbol()), actorName()));
            }
            StandardTheme.create = create;
        })(StandardTheme = Core.StandardTheme || (Core.StandardTheme = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Manager;
        (function (Manager) {
            var modes = BD.Core.Consts.Enums.Mode;
            var _mode = BD.Core.Consts.Enums.Mode.Game;
            function getMode() {
                return _mode;
            }
            Manager.getMode = getMode;
            function setMode(value) {
                _mode = value;
            }
            Manager.setMode = setMode;
            function isGameMode() {
                return getMode() === modes.Game;
            }
            Manager.isGameMode = isGameMode;
            function isPreviewMode() {
                return getMode() === modes.Preview;
            }
            Manager.isPreviewMode = isPreviewMode;
            function isStudioMode() {
                return getMode() === modes.Studio;
            }
            Manager.isStudioMode = isStudioMode;
            function setup() {
                switch (getMode()) {
                    case modes.Game:
                        break;
                    case modes.Preview:
                        setupPreview();
                        break;
                    case modes.Studio:
                        break;
                }
            }
            Manager.setup = setup;
            function setupPreview() {
                Graphics._defaultStretchMode = function () { return true; };
            }
            Manager.setupPreview = setupPreview;
            function isStopHUD() {
                return BattleManager.isBattleEndFadeOut();
            }
            Manager.isStopHUD = isStopHUD;
        })(Manager = Core.Manager || (Core.Manager = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
try {
    if ($bdStudio !== undefined) {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Studio);
    }
}
catch (e) {
    if (Utils.isOptionValid("bdpreview")) {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Preview);
    }
    else {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Game);
    }
}
BD.Core.Manager.setup();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var BattlerGraphicManager;
            (function (BattlerGraphicManager) {
                var Settings = Core.Settings.battlerGraphic;
                var Kind = BD.Core.Consts.Enums.ConditionalBattlerGraphicKind;
                var _checkConditionFuncs;
                function battlerGraphic(battler) {
                    if (battler instanceof Game_Actor) {
                        return _actorBattlerGraphic(battler);
                    }
                    else if (battler instanceof Game_Enemy) {
                        return _enemyBattlerGraphic(battler);
                    }
                    return {
                        bitmap: ImageManager.loadEmptyBitmap(),
                        faceIndex: -1,
                        height: 48,
                    };
                }
                BattlerGraphicManager.battlerGraphic = battlerGraphic;
                function areEqualBattlerGraphic(a, b) {
                    if (!a && !b) {
                        return true;
                    }
                    if (!a || !b) {
                        return false;
                    }
                    if (a.fileName !== b.fileName) {
                        return false;
                    }
                    if (a.faceIndex !== b.faceIndex) {
                        return false;
                    }
                    return true;
                }
                BattlerGraphicManager.areEqualBattlerGraphic = areEqualBattlerGraphic;
                function createConditionalBattlerGraphic(fileNameWithFaceIndex, kind, idOrTag, priority) {
                    var bg = createBattlerGraphic(fileNameWithFaceIndex);
                    var conditionKind = defaultPriority(kind);
                    if (conditionKind === null) {
                        return;
                    }
                    var prio = priority || conditionKind;
                    return {
                        condition: {
                            kind: conditionKind,
                            idOrTag: idOrTag,
                            priority: prio
                        },
                        battlerGraphic: bg
                    };
                }
                BattlerGraphicManager.createConditionalBattlerGraphic = createConditionalBattlerGraphic;
                function createBattlerGraphic(fileNameWithFaceIndex) {
                    if (!fileNameWithFaceIndex) {
                        return {
                            fileName: null,
                            faceIndex: -1
                        };
                    }
                    var re = /([^\[\]]*)(?:\[(\d+)\]$)?/g;
                    var match = re.exec(fileNameWithFaceIndex);
                    var name = match[1] || fileNameWithFaceIndex;
                    var m2 = match[2] || "";
                    var i = parseInt(m2);
                    var faceIndex = isNaN(i) ? -1 : i;
                    return {
                        fileName: name,
                        faceIndex: faceIndex
                    };
                }
                BattlerGraphicManager.createBattlerGraphic = createBattlerGraphic;
                function defaultPriority(kind) {
                    var conditionKind = Kind[kind.toLowerCase()];
                    if (conditionKind === undefined) {
                        return null;
                    }
                    return conditionKind;
                }
                BattlerGraphicManager.defaultPriority = defaultPriority;
                function determineCandidate(actor) {
                    var candidates = [];
                    actor.conditionalBattlerGraphics().forEach(function (x) {
                        var func = _getCheckConditionFuncs()[x.condition.kind];
                        if (func && func(actor, x)) {
                            candidates.push(x);
                        }
                    });
                    if (candidates.length === 0) {
                        return null;
                    }
                    else {
                        return candidates.reduce(function (a, b) { return (a.condition.priority > b.condition.priority) ? a : b; });
                    }
                }
                BattlerGraphicManager.determineCandidate = determineCandidate;
                function damageDuration() {
                    return Settings().damageDuration;
                }
                BattlerGraphicManager.damageDuration = damageDuration;
                function _actorBattlerGraphic(actor) {
                    var battlerGraphic = actor.battlerGraphics();
                    if (battlerGraphic.fileName !== null) {
                        var fileName = _generateFileName(actor, battlerGraphic.fileName);
                        if (battlerGraphic.faceIndex > -1) {
                            return {
                                bitmap: ImageManager.loadFace(fileName, 0),
                                faceIndex: battlerGraphic.faceIndex,
                                height: 144
                            };
                        }
                        else {
                            var bitmap = ImageManager.loadBitmap(Settings().rootPath, fileName, 0, false);
                            return {
                                bitmap: bitmap,
                                faceIndex: -1,
                                height: bitmap.height
                            };
                        }
                    }
                    else {
                        return {
                            bitmap: ImageManager.loadFace(actor.faceName(), 0),
                            faceIndex: actor.faceIndex(),
                            height: 144
                        };
                    }
                }
                function _generateFileName(actor, fileName) {
                    if (!fileName.contains("*")) {
                        return fileName;
                    }
                    var base = actor.baseBattlerGraphics();
                    if (base && base.fileName !== null) {
                        return fileName.replace("*", base.fileName);
                    }
                    else {
                        return fileName.replace("*", actor.faceName());
                    }
                }
                function _enemyBattlerGraphic(battler) {
                    var bitmap;
                    if ($gameSystem.isSideView()) {
                        bitmap = ImageManager.loadSvEnemy(battler.battlerName(), battler.battlerHue());
                    }
                    else {
                        bitmap = ImageManager.loadEnemy(battler.battlerName(), battler.battlerHue());
                    }
                    return {
                        bitmap: bitmap,
                        faceIndex: null,
                        height: bitmap.height
                    };
                }
                function _getCheckConditionFuncs() {
                    if (!_checkConditionFuncs) {
                        _checkConditionFuncs = {};
                        _checkConditionFuncs[Kind.state] = _checkStateCondition;
                        _checkConditionFuncs[Kind.crisis] = _checkCrisisCondition;
                        _checkConditionFuncs[Kind.command] = _checkCommandCondition;
                        _checkConditionFuncs[Kind.ready] = _checkReadyCondition;
                        _checkConditionFuncs[Kind.guard] = _checkGuardCondition;
                        _checkConditionFuncs[Kind.chanting] = _checkChantingCondition;
                        _checkConditionFuncs[Kind.skill] = _checkSkillCondition;
                        _checkConditionFuncs[Kind.item] = _checkItemCondition;
                        _checkConditionFuncs[Kind.damage] = _checkDamageCondition;
                        _checkConditionFuncs[Kind.victory] = _checkVictoryCondition;
                        _checkConditionFuncs[Kind.dead] = _checkDeadCondition;
                    }
                    return _checkConditionFuncs;
                }
                function _checkStateCondition(a, c) {
                    var idOrTag = c.condition.idOrTag;
                    if (typeof idOrTag === "string") {
                        var f = a.states().find(function (y) { return y.meta[idOrTag]; });
                        if (f) {
                            return true;
                        }
                    }
                    else if (a._states.contains(idOrTag) || (a._states.length > 0 && idOrTag === 0)) {
                        return true;
                    }
                    return false;
                }
                function _checkCrisisCondition(a, c) {
                    return a.isDying();
                }
                function _checkCommandCondition(a, c) {
                    return a.isInputting();
                }
                function _checkReadyCondition(a, c) {
                    var action = a.inputtingAction();
                    if (action && typeof c.condition.idOrTag === "string") {
                        return a.isWaiting() && action.item().meta[c.condition.idOrTag];
                    }
                    return a.isWaiting();
                }
                function _checkGuardCondition(a, c) {
                    return a.isGuardWaiting() || (a.isGuard() || a._motionType === "guard");
                }
                function _checkChantingCondition(a, c) {
                    return a.isChanting();
                }
                function _checkActionConditionCore(a, c, kindCheck) {
                    var action = BattleManager._action;
                    if (a._motionType !== "victory" && BattleManager._subject === a && action && kindCheck(action)) {
                        var idOrTag = c.condition.idOrTag;
                        if (typeof idOrTag === "string") {
                            if (action.item().meta[idOrTag]) {
                                return true;
                            }
                        }
                        else if ((action.item().id === idOrTag || idOrTag <= 0)) {
                            return true;
                        }
                    }
                    return false;
                }
                function _checkSkillCondition(a, c) {
                    return _checkActionConditionCore(a, c, function (x) { return x.isSkill(); });
                }
                function _checkItemCondition(a, c) {
                    return _checkActionConditionCore(a, c, function (x) { return x.isItem(); });
                }
                function _checkDamageCondition(a, c) {
                    return (a._motionType === "damage");
                }
                function _checkVictoryCondition(a, c) {
                    return (a._motionType === "victory");
                }
                function _checkDeadCondition(a, c) {
                    if (Core.Settings.enableSideVidwBattler() &&
                        a._motionType !== "damage" && a.isDead()) {
                        return true;
                    }
                    else if (a.isDead()) {
                        a.clearMotion();
                        return true;
                    }
                    return false;
                }
            })(BattlerGraphicManager = Utils.BattlerGraphicManager || (Utils.BattlerGraphicManager = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var Interpolator;
            (function (Interpolator) {
                function smooth(target, current, speed, minSpeed) {
                    if (target === current) {
                        return target;
                    }
                    var d = (target - current) / (speed * 1.0);
                    if (0 < d && d < minSpeed) {
                        d = minSpeed;
                        var newValue = current + d;
                        if (target < newValue) {
                            return target;
                        }
                        else {
                            return newValue;
                        }
                    }
                    if (0 > d && d > -minSpeed) {
                        d = -minSpeed;
                        var newValue = current + d;
                        if (target > newValue) {
                            return target;
                        }
                        else {
                            return newValue;
                        }
                    }
                    return current + d;
                }
                Interpolator.smooth = smooth;
            })(Interpolator = Utils.Interpolator || (Utils.Interpolator = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));


(function () {
    ImageManager.loadThemeImage = function (filename, smooth) {
        if (smooth === void 0) { smooth = false; }
        if (!filename) {
            return this.loadEmptyBitmap();
        }
        var f = filename.split("/");
        var name = f.pop();
        var path = "";
        if (f.length > 0) {
            path = f.reduce(function (a, b) { return encodeURIComponent(a) + "/" + encodeURIComponent(b); }) + "/";
        }
        return this.loadBitmap("img/system/" + path, name, 0, smooth);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var RPGExtension;
        (function (RPGExtension) {
            function getActionDescription(action) {
                return _getString(action, "Tip", "");
            }
            RPGExtension.getActionDescription = getActionDescription;
            function getAttackAnimationId(battler) {
                return _getInt(battler, "AttackAnimation", 1);
            }
            RPGExtension.getAttackAnimationId = getAttackAnimationId;
            function getBattlerGraphic(battler) {
                return _getString(battler, "Graphic", null);
            }
            RPGExtension.getBattlerGraphic = getBattlerGraphic;
            function getConditionalBattlerGraphicsRaw(battler) {
                var strings = _getMultiMetadata(battler, "GraphicWhen");
                return strings.map(function (x) {
                    var args = x.split(",").map(function (y) { return y.trim(); });
                    var idOrTagArg = args[2] || "0";
                    var int = parseInt(idOrTagArg);
                    return {
                        fileName: args[0] || "",
                        kind: args[1] || "",
                        idOrTag: (isNaN(int)) ? idOrTagArg : int,
                        priority: parseInt(args[3]) || undefined
                    };
                });
            }
            RPGExtension.getConditionalBattlerGraphicsRaw = getConditionalBattlerGraphicsRaw;
            function getPreAnimationId(item) {
                return _getInt(item, "PreAnimation", 0);
            }
            RPGExtension.getPreAnimationId = getPreAnimationId;
            function getStateAnimationId(state) {
                return _getInt(state, "Animation", 0);
            }
            RPGExtension.getStateAnimationId = getStateAnimationId;
            function getDisplayNameForPopup(state) {
                return _getString(state, "DisplayNameForPopup", state.name);
            }
            RPGExtension.getDisplayNameForPopup = getDisplayNameForPopup;
            function getPositive(state) {
                return state.meta["Positive"] === true;
            }
            RPGExtension.getPositive = getPositive;
            function getNegative(state) {
                return state.meta["Negative"] === true;
            }
            RPGExtension.getNegative = getNegative;
            function getHideAddPopup(state) {
                return state.meta["HideAddPopup"] === true || getHidePopup(state);
            }
            RPGExtension.getHideAddPopup = getHideAddPopup;
            function getHideRemovePopup(state) {
                return state.meta["HideRemovePopup"] === true || getHidePopup(state);
            }
            RPGExtension.getHideRemovePopup = getHideRemovePopup;
            function getHidePopup(state) {
                return state.meta["HidePopup"] === true;
            }
            RPGExtension.getHidePopup = getHidePopup;
            function getAnimationRate(animation) {
                _setAnimationMetadata(animation);
                var defaultRate = Core.Settings.animation().playRate;
                return _getInt(animation, "Rate", defaultRate);
            }
            RPGExtension.getAnimationRate = getAnimationRate;
            function _getInt(data, key, defaultValue) {
                if (data.meta[key] === undefined) {
                    data.meta[key] = defaultValue.toString();
                }
                var result = parseInt(data.meta[key]);
                if (isNaN(result)) {
                    data.meta[key] = defaultValue.toString();
                    result = parseInt(data.meta[key]);
                }
                return result;
            }
            function _getString(data, key, defaultValue) {
                if (data.meta[key] === undefined || data.meta[key] === true) {
                    data.meta[key] = defaultValue;
                }
                if (typeof data.meta[key] === "string") {
                    return data.meta[key].trim();
                }
                return data.meta[key];
            }
            function _getMultiMetadata(data, keyPattern) {
                var strings = [];
                var re = new RegExp("<(" + keyPattern + ")(:?)([^>]*)>", "g");
                while (true) {
                    var match = re.exec(data.note);
                    if (match && match[2] === ":") {
                        strings.push(match[3]);
                    }
                    else {
                        break;
                    }
                }
                return strings;
            }
            function _setAnimationMetadata(data) {
                if (data.meta !== undefined) {
                    return;
                }
                data.note = "";
                data.meta = {};
                var re = /<(\d+)>/;
                var match = re.exec(data.name);
                if (!match) {
                    return;
                }
                data.meta["Rate"] = match[1];
            }
        })(RPGExtension = Core.RPGExtension || (Core.RPGExtension = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    Sprite.prototype.flatten = function () {
        var sprites = [];
        sprites.push(this);
        this.children.forEach(function (element, index, array) {
            sprites = sprites.concat(element.flatten ? element.flatten() : []);
        });
        return sprites;
    };
    Sprite.prototype.clone = function () {
        var clone = new Sprite();
        clone.bitmap = this.bitmap;
        clone.opacity = this.opacity;
        clone.visible = this.visible;
        clone.x = this.x;
        clone.y = this.y;
        clone.scale.x = this.scale.x;
        clone.scale.y = this.scale.y;
        clone.rotation = this.rotation;
        clone.blendMode = this.blendMode;
        clone.filters = this.filters;
        clone.anchor.x = this.anchor.x;
        clone.anchor.y = this.anchor.y;
        clone.pivot.x = this.pivot.x;
        clone.pivot.y = this.pivot.y;
        clone.texture.frame = this.texture.frame;
        this.children.forEach(function (x) { return clone.addChild(x.clone()); });
        return clone;
    };
    Sprite.prototype.absolutePosition = function () {
        var x = this.x;
        var y = this.y;
        var parent = this.parent;
        while (parent) {
            x += parent.x;
            y += parent.y;
            parent = parent.parent;
        }
        return new Point(x, y);
    };
    Sprite.prototype.findFamily = function (func, breakFunc) {
        if (breakFunc === void 0) { breakFunc = null; }
        var top = this;
        while (top.parent && top.parent instanceof Sprite) {
            top = top.parent;
            if (breakFunc && breakFunc(top)) {
                break;
            }
        }
        return top.flatten().find(function (x) { return func(x); });
    };
})();

(function () {
    DataManager._removeTestPrefix = function (src) {
        return src.lastIndexOf("Test_") === 0 ? src.replace("Test_", "") : src;
    };
    var _bdc_DataManager_loadDataFile = DataManager.loadDataFile;
    DataManager.loadDataFile = function (name, src) {
        var newSrc = src;
        if (!BD.Core.Manager.isGameMode()) {
            newSrc = DataManager._removeTestPrefix(src);
        }
        _bdc_DataManager_loadDataFile.call(this, name, newSrc);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var PluginCommand;
            (function (PluginCommand) {
                function execute(command, args) {
                    var lowCommand = command.toLowerCase();
                    var key = Object.keys(BD.Core.Utils.PluginCommand)
                        .find(function (x) { return x === lowCommand; });
                    if (!key) {
                        return;
                    }
                    var func = BD.Core.Utils.PluginCommand[key];
                    if (func) {
                        func.call(null, args);
                    }
                }
                PluginCommand.execute = execute;
                function hud(args) {
                    if (args.length < 1) {
                        return;
                    }
                    if (args[0].toLowerCase() === "hide") {
                        $gameTemp.hideBDHUD();
                    }
                    else if (args[0].toLowerCase() === "show") {
                        $gameTemp.showBDHUD();
                    }
                }
                PluginCommand.hud = hud;
            })(PluginCommand = Utils.PluginCommand || (Utils.PluginCommand = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
(function () {
    var _bdc_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _bdc_Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === "BD" && args.length > 0) {
            var a = args.clone();
            BD.Core.Utils.PluginCommand.execute(a.shift(), a);
        }
    };
})();

var BD;
(function (BD) {
    var CMD;
    (function (CMD) {
        var BattlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
        function xpbBattleSpeed() {
        }
        CMD.xpbBattleSpeed = xpbBattleSpeed;
        function setBasicSpeed(speed) {
            $gameSystem.setXpbBasicSpeed(speed);
        }
        CMD.setBasicSpeed = setBasicSpeed;
        function resetBasicSpeed() {
            $gameSystem.resetXpbBasicSpeed();
        }
        CMD.resetBasicSpeed = resetBasicSpeed;
        function getBattleSpeed() {
            return 0;
        }
        CMD.getBattleSpeed = getBattleSpeed;
        function setBG(type, idOrIndex, fileNameWithFaceIndex) {
            if (fileNameWithFaceIndex === void 0) { fileNameWithFaceIndex = null; }
            setBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex);
        }
        CMD.setBG = setBG;
        function setBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex) {
            if (fileNameWithFaceIndex === void 0) { fileNameWithFaceIndex = null; }
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            var bg = BattlerGraphicManager.createBattlerGraphic(fileNameWithFaceIndex);
            actor.setBattlerGraphics(bg.fileName, bg.faceIndex);
        }
        CMD.setBattlerGraphic = setBattlerGraphic;
        function setCBG(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority) {
            setConditionBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority);
        }
        CMD.setCBG = setCBG;
        function setConditionBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority) {
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            var bg = BattlerGraphicManager.createBattlerGraphic(fileNameWithFaceIndex);
            var conditionKind = BattlerGraphicManager.defaultPriority(kind);
            if (conditionKind === null) {
                return;
            }
            var prio = priority || conditionKind;
            actor.setConditionalBattlerGraphics(bg.fileName, bg.faceIndex, kind, idOrTag, prio);
        }
        CMD.setConditionBattlerGraphic = setConditionBattlerGraphic;
        function removeCBG(type, idOrIndex, kind, idOrTag) {
            removeConditionBattlerGraphic(type, idOrIndex, kind, idOrTag);
        }
        CMD.removeCBG = removeCBG;
        function removeConditionBattlerGraphic(type, idOrIndex, kind, idOrTag) {
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            actor.removeConditionalBattlerGraphics(kind, idOrTag);
        }
        CMD.removeConditionBattlerGraphic = removeConditionBattlerGraphic;
        function resetBG(type, idOrIndex) {
            if (idOrIndex === void 0) { idOrIndex = null; }
            resetBattlerGraphic(type, idOrIndex);
        }
        CMD.resetBG = resetBG;
        function resetBattlerGraphic(type, idOrIndex) {
            if (idOrIndex === void 0) { idOrIndex = null; }
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                var actors = $gameActors._data;
                actors.forEach(function (x) { return x.resetBattlerGraphic(); });
                return;
            }
            actor.resetBattlerGraphic();
        }
        CMD.resetBattlerGraphic = resetBattlerGraphic;
        function _getActor(type, idOrIndex) {
            if (idOrIndex === null) {
                return null;
            }
            var t = type.toLowerCase();
            switch (t) {
                case "id":
                    return $gameActors.actor(idOrIndex);
                case "index":
                    return $gameParty.members()[idOrIndex];
            }
            return null;
        }
    })(CMD = BD.CMD || (BD.CMD = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            function sortTroopByX(enemies, reverse) {
                if (reverse === void 0) { reverse = false; }
                if (!reverse) {
                    return enemies.sort(function (a, b) { return a.screenX() - b.screenX(); });
                }
                else {
                    return enemies.sort(function (a, b) { return b.screenX() - a.screenX(); });
                }
            }
            Utils.sortTroopByX = sortTroopByX;
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyChanged = (function () {
                function PropertyChanged() {
                    this._eventTable = {};
                    this._eventQueue = [];
                }
                PropertyChanged.prototype.addPropertyChanged = function (type, listener, thisArg) {
                    this._checkType(type);
                    var listeners = this._eventTable[type];
                    var index = listeners.indexOf(listener);
                    if (index === -1) {
                        listeners.push({
                            callback: listener,
                            this: thisArg
                        });
                    }
                };
                PropertyChanged.prototype.raise = function (type) {
                    var listeners = this._eventTable[type];
                    Array.prototype.push.apply(this._eventQueue, listeners);
                };
                PropertyChanged.prototype.update = function () {
                    var _this = this;
                    var executedCallbacks = new Array();
                    var queue = this._eventQueue.concat();
                    this._eventQueue = new Array();
                    queue.forEach(function (listener) {
                        if (_this.containsCallback(executedCallbacks, listener.callback)) {
                            return;
                        }
                        listener.callback.call(listener.this);
                        executedCallbacks.push(listener.callback);
                    });
                };
                PropertyChanged.prototype.containsCallback = function (callbacks, callback) {
                    var len = callbacks.length;
                    for (var i = 0; i <= len; i++) {
                        if (callbacks[i] === callback) {
                            return true;
                        }
                    }
                    return false;
                };
                PropertyChanged.prototype._checkType = function (type) {
                    if (this._eventTable[type] === undefined) {
                        this._eventTable[type] = [];
                    }
                };
                return PropertyChanged;
            }());
            Property.PropertyChanged = PropertyChanged;
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyDefinition = (function () {
                function PropertyDefinition(value) {
                    this.key = value["key"];
                    this.type = value["type"];
                    this.defaultValue = value["defaultValue"];
                    this.name = { "eng": value["eng"] };
                }
                return PropertyDefinition;
            }());
            Property.PropertyDefinition = PropertyDefinition;
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyUtility;
            (function (PropertyUtility) {
                var definitions;
                (function (definitions) {
                    var pd = BD.Core.Property.PropertyDefinition;
                    definitions.type = new pd({ key: "type", type: "objType", defaultValue: "Type", });
                    definitions.name = new pd({ key: "name", type: "String", defaultValue: "Name" });
                    definitions.x = new pd({ key: "x", type: "Number", defaultValue: 0 });
                    definitions.y = new pd({ key: "y", type: "Number", defaultValue: 0 });
                    definitions.visible = new pd({ key: "visible", type: "Boolean", defaultValue: true });
                    definitions.width = new pd({ key: "width", type: "Number", defaultValue: 128 });
                    definitions.height = new pd({ key: "height", type: "Number", defaultValue: 128 });
                    definitions.maxWidth = new pd({ key: "maxWidth", type: "Number", defaultValue: 128 });
                    definitions.fileName = new pd({ key: "fileName", type: "String", defaultValue: "\'\'" });
                    definitions.pattern = new pd({ key: "pattern", type: "Number", defaultValue: 0 });
                    definitions.maxPattern = new pd({ key: "maxPattern", type: "Number", defaultValue: 1 });
                    definitions.value = new pd({ key: "value", type: "Number", defaultValue: 0 });
                    definitions.minValue = new pd({ key: "minValue", type: "Number", defaultValue: -999999 });
                    definitions.maxValue = new pd({ key: "maxValue", type: "Number", defaultValue: 999999 });
                    definitions.digits = new pd({ key: "digits", type: "Number", defaultValue: 4 });
                    definitions.zeroSuppress = new pd({ key: "zeroSuppress", type: "Boolean", defaultValue: true });
                    definitions.spacing = new pd({ key: "spacing", type: "Number", defaultValue: 0 });
                    definitions.horizontalSpacing = new pd({ key: "horizontalSpacing", type: "Number", defaultValue: 0 });
                    definitions.verticalSpacing = new pd({ key: "verticalSpacing", type: "Number", defaultValue: 0 });
                    definitions.animationSpeed = new pd({ key: "animationSpeed", type: "Number", defaultValue: 8 });
                    definitions.horizontalAlignment = new pd({ key: "horizontalAlignment", type: "Number", defaultValue: 0 });
                    definitions.verticalAlignment = new pd({ key: "verticalAlignment", type: "Number", defaultValue: 0 });
                    definitions.orientation = new pd({ key: "orientation", type: "Number", defaultValue: 0 });
                    definitions.actorStatusWidth = new pd({ key: "actorStatusWidth", type: "Number", defaultValue: 128 });
                    definitions.actorStatusHeight = new pd({ key: "actorStatusHeight", type: "Number", defaultValue: 128 });
                    definitions.maxRows = new pd({ key: "maxRows", type: "Number", defaultValue: 4 });
                    definitions.maxLines = new pd({ key: "maxLines", type: "Number", defaultValue: 1 });
                    definitions.startAngle = new pd({ key: "startAngle", type: "Number", defaultValue: 0 });
                    definitions.endAngle = new pd({ key: "endAngle", type: "Number", defaultValue: 359 });
                    definitions.radius = new pd({ key: "radius", type: "Number", defaultValue: 32 });
                    definitions.lineWidth = new pd({ key: "lineWidth", type: "Number", defaultValue: 24 });
                    definitions.zoom = new pd({ key: "zoom", type: "Number", defaultValue: 100 });
                    definitions.zoomX = new pd({ key: "zoomX", type: "Number", defaultValue: 100 });
                    definitions.zoomY = new pd({ key: "zoomY", type: "Number", defaultValue: 100 });
                    definitions.overlayOffsetX = new pd({ key: "overlayOffsetX", type: "Number", defaultValue: 0 });
                    definitions.overlayOffsetY = new pd({ key: "overlayOffsetY", type: "Number", defaultValue: 0 });
                    definitions.isOverlayOnBottom = new pd({ key: "isOverlayOnBottom", type: "Boolean", defaultValue: false });
                    definitions.skewAngleX = new pd({ key: "skewAngleX", type: "Number", defaultValue: 0 });
                    definitions.skewAngleY = new pd({ key: "skewAngleY", type: "Number", defaultValue: 0 });
                    definitions.rotation = new pd({ key: "rotation", type: "Number", defaultValue: 0 });
                    definitions.opacity = new pd({ key: "opacity", type: "Number", defaultValue: 255 });
                    definitions.blendMode = new pd({ key: "blendMode", type: "Number", defaultValue: 0 });
                    definitions.text = new pd({ key: "text", type: "String", defaultValue: "\'Text\'" });
                    definitions.color = new pd({ key: "color", type: "String", defaultValue: "\'Green\'" });
                    definitions.outlineColor = new pd({ key: "outlineColor", type: "String", defaultValue: "\'Blue\'" });
                    definitions.outlineWidth = new pd({ key: "outlineWidth", type: "Number", defaultValue: 4 });
                    definitions.fontSize = new pd({ key: "fontSize", type: "Number", defaultValue: 28 });
                    definitions.fontFace = new pd({ key: "fontFace", type: "String", defaultValue: "\'GameFont\'" });
                    definitions.fontItalic = new pd({ key: "fontItalic", type: "Boolean", defaultValue: false });
                    definitions.fillColor = new pd({ key: "fillColor", type: "String", defaultValue: "\'Green\'" });
                    definitions.gradientColor = new pd({ key: "gradientColor", type: "String", defaultValue: "\'Yellow\'" });
                    definitions.isGradient = new pd({ key: "isGradient", type: "Boolean", defaultValue: true });
                    definitions.isVertical = new pd({ key: "isVertical", type: "Boolean", defaultValue: false });
                    definitions.isBricks = new pd({ key: "isBricks", type: "Boolean", defaultValue: false });
                    definitions.maxStates = new pd({ key: "maxStates", type: "Number", defaultValue: 1 });
                    definitions.stateIconSize = new pd({ key: "stateIconSize", type: "Number", defaultValue: 32 });
                    definitions.maskImage = new pd({ key: "maskImage", type: "String", defaultValue: "\'\'" });
                    definitions.maskImageX = new pd({ key: "maskImageX", type: "Number", defaultValue: 0 });
                    definitions.maskImageY = new pd({ key: "maskImageY", type: "Number", defaultValue: 0 });
                    definitions.relatedObjects = new pd({ key: "relatedObjects", type: "String", defaultValue: "\'\'" });
                })(definitions = PropertyUtility.definitions || (PropertyUtility.definitions = {}));
                function make(propData) {
                    if (BD.Core.Manager.isStudioMode()) {
                        var p = new BD.Studio.Property.Property(propData.key, propData.type, propData.defaultValue);
                        ko.track(p);
                        return p;
                    }
                    else {
                        return null;
                    }
                }
                PropertyUtility.make = make;
                ;
                function makeFunction(key, value, context) {
                    if (BD.Core.Manager.isStudioMode()) {
                        return this.safetyMakeFunction(key, value, context);
                    }
                    else {
                        return new Function(value);
                    }
                }
                PropertyUtility.makeFunction = makeFunction;
                ;
                function safetyMakeFunction(key, value, context) {
                    var type = this.definitions[key].type;
                    try {
                        var func = new Function(value);
                        var test = func.call(context);
                        if (!eval("_.is" + type + "(test)")) {
                            throw "Type Error";
                        }
                        return func;
                    }
                    catch (e) {
                        return function () { return PropertyUtility.definitions[key].defaultValue; };
                    }
                }
                PropertyUtility.safetyMakeFunction = safetyMakeFunction;
                ;
            })(PropertyUtility = Property.PropertyUtility || (Property.PropertyUtility = {}));
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var Settings = BD.Core.Settings.animation;
    var adjustX = undefined;
    var adjustY = undefined;
    function getAdjustX() {
        if (adjustX !== undefined) {
            return adjustX;
        }
        adjustX = Settings().forParty.adjustPosition.x || 0;
        return adjustX;
    }
    function getAdjustY() {
        if (adjustY !== undefined) {
            return adjustY;
        }
        adjustY = Settings().forParty.adjustPosition.y || 0;
        return adjustY;
    }
    var _bdc_Sprite_Animation_updatePosition = Sprite_Animation.prototype.updatePosition;
    Sprite_Animation.prototype.updatePosition = function () {
        if (this.parent instanceof BD.Core.HUD.BattleObjects.PartyStatusContainer) {
            this._updatePositionForXPStyleBattler();
        }
        else {
            _bdc_Sprite_Animation_updatePosition.apply(this, arguments);
        }
    };
    Sprite_Animation.prototype._updatePositionForXPStyleBattler = function () {
        if (this._animation.position === 3) {
            this._setContainerPoint();
            this.x = -this.containerPoint.x + Graphics.boxWidth / 2 + getAdjustX();
            this.y = -this.containerPoint.y + Graphics.boxHeight / 6 * 5 + getAdjustY();
        }
        else {
            this._setTargetPoint();
            this._setContainerPoint();
            this.x = -this.containerPoint.x + this.targetPoint.x + this._target.x;
            this.y = -this.containerPoint.y + this.targetPoint.y + this._target.y;
            var xps = this._target;
            var offset = xps.getOverlayOffset();
            this.x += offset.x;
        }
        if (this._animation.position === 0) {
            this.y -= this._target.height;
        }
        else if (this._animation.position === 1) {
            this.y -= this._target.height / 2;
        }
    };
    Sprite_Animation.prototype._setTargetPoint = function () {
        if (!this.targetPoint) {
            this.targetPoint = this._target.absolutePosition();
        }
        ;
    };
    Sprite_Animation.prototype._setContainerPoint = function () {
        if (!this.containerPoint) {
            this.containerPoint = this.parent.absolutePosition();
        }
        ;
    };
})();

(function () {
    Window_BattleLog.prototype.showEnemyAttackAnimation = function (subject, targets) {
        var id = BD.Core.RPGExtension.getAttackAnimationId(subject.enemy());
        this.showNormalAnimation(targets, id, false);
    };
})();

(function () {
    var _bdc_Sprite_Animation_setupRate = Sprite_Animation.prototype.setupRate;
    Sprite_Animation.prototype.setupRate = function () {
        if (this._animation) {
            this._rate = BD.Core.RPGExtension.getAnimationRate(this._animation);
        }
        else {
            _bdc_Sprite_Animation_setupRate.call(this);
        }
    };
})();

(function () {
    var _bdc_Window_BattleLog_displayAction = Window_BattleLog.prototype.displayAction;
    Window_BattleLog.prototype.displayAction = function (subject, item) {
        var _this = this;
        var showAnimationMethods;
        var preAnimationId = BD.Core.RPGExtension.getPreAnimationId(item);
        if (preAnimationId > 0) {
            showAnimationMethods = this._methods.filter(function (x) { return x.name === "showAnimation"; });
            this.push("showAnimation", subject, [subject].clone(), preAnimationId);
            _bdc_Window_BattleLog_displayAction.call(this, subject, item);
            this.push("waitForAnimation");
            this._methods = this._methods.filter(function (x) { return !showAnimationMethods.contains(x) && x.name !== "wait"; });
            showAnimationMethods.forEach(function (x) { return _this._methods.push(x); });
            this.push("wait");
            return;
        }
        _bdc_Window_BattleLog_displayAction.call(this, subject, item);
    };
    Window_BattleLog.prototype.waitForAnimation = function () {
        this.setWaitMode("animation");
    };
    var _bdc_Window_BattleLog_updateWaitMode = Window_BattleLog.prototype.updateWaitMode;
    Window_BattleLog.prototype.updateWaitMode = function () {
        if (this._waitMode === "animation") {
            var waiting = this._spriteset.isAnimationPlaying();
            if (waiting) {
                return true;
            }
            ;
        }
        return _bdc_Window_BattleLog_updateWaitMode.call(this);
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Animation;
        (function (Animation) {
            var StateAnimation;
            (function (StateAnimation) {
                var LoopAnimation = (function (_super) {
                    __extends(LoopAnimation, _super);
                    function LoopAnimation() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    LoopAnimation.prototype.initMembers = function () {
                        _super.prototype.initMembers.call(this);
                        this._looping = true;
                        this._loopCount = -1;
                    };
                    LoopAnimation.prototype.update = function () {
                        _super.prototype.update.call(this);
                        if (this._duration <= 0) {
                            this.setupDuration();
                            if (this._loopCount-- === 0) {
                                this.terminate();
                            }
                        }
                        if (!this._looping) {
                            this._vanishing();
                        }
                    };
                    LoopAnimation.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    LoopAnimation.prototype.terminate = function () {
                        this._looping = false;
                    };
                    LoopAnimation.prototype.animation = function () {
                        return this._animation;
                    };
                    LoopAnimation.prototype._vanishing = function () {
                        this.opacity -= 32;
                    };
                    return LoopAnimation;
                }(Sprite_Animation));
                StateAnimation.LoopAnimation = LoopAnimation;
            })(StateAnimation = Animation.StateAnimation || (Animation.StateAnimation = {}));
        })(Animation = Core.Animation || (Core.Animation = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Game_Battler_refresh = Game_Battler.prototype.refresh;
    Game_Battler.prototype.refresh = function () {
        _bdc_Game_Battler_refresh.call(this);
        this.isStateAnimationUpdateRequested = true;
    };
    Game_Battler.prototype.currentStateAnimationId = function () {
        var stateAnimationIds = this.states()
            .sort(function (a, b) { return b.priority - a.priority; })
            .map(function (x) { return BD.Core.RPGExtension.getStateAnimationId(x); })
            .filter(function (x) { return x > 0; });
        if (stateAnimationIds.length === 0) {
            return 0;
        }
        else {
            return stateAnimationIds[0];
        }
    };
})();

(function () {
    Sprite_Base.prototype.startLoopAnimation = function (animation, mirror, delay) {
        var playing = this._animationSprites
            .filter(function (x) { return x instanceof BD.Core.Animation.StateAnimation.LoopAnimation; })
            .some(function (x) { return x.animation() === animation; });
        if (playing) {
            return;
        }
        var sprite = new BD.Core.Animation.StateAnimation.LoopAnimation();
        sprite.setup(this._effectTarget, animation, mirror, delay);
        this.parent.addChild(sprite);
        this._animationSprites.push(sprite);
    };
    Sprite_Base.prototype.terminateLoopAnimation = function () {
        this._animationSprites
            .filter(function (x) { return x instanceof BD.Core.Animation.StateAnimation.LoopAnimation; })
            .forEach(function (x) { return x.terminate(); });
    };
    Sprite_Base.prototype.isAnimationPlaying = function () {
        var animations = this._animationSprites.filter(function (x) { return !(x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); });
        return animations.length > 0;
    };
    Sprite_Base.prototype.isLoopAnimationPlaying = function () {
        var animations = this._animationSprites.filter(function (x) { return (x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); });
        return animations.length > 0;
    };
})();

(function () {
    var _bdc_Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
    Sprite_Battler.prototype.initMembers = function () {
        _bdc_Sprite_Battler_initMembers.call(this);
        this._lastStateAnimationId = -1;
    };
    var _bdc_Sprite_Battler__updateAnimation = Sprite_Battler.prototype.updateAnimation;
    Sprite_Battler.prototype.updateAnimation = function () {
        _bdc_Sprite_Battler__updateAnimation.call(this);
        this.setupLoopAnimation();
    };
    Sprite_Battler.prototype.setupLoopAnimation = function () {
        if (this._battler.isStateAnimationUpdateRequested) {
            var id = this._battler.currentStateAnimationId();
            var animation = $dataAnimations[id];
            if (id !== this._lastStateAnimationId) {
                this.terminateLoopAnimation();
            }
            if (id !== 0) {
                this.startLoopAnimation(animation, false, 0);
            }
            this._lastStateAnimationId = id;
            this._battler.isStateAnimationUpdateRequested = false;
        }
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var BattleSpeed;
        (function (BattleSpeed) {
            var Utility;
            (function (Utility) {
                var Settings = BD.Core.Settings.battleSpeed;
                function isFastForward() {
                    return Window_BattleLog.prototype.isFastForward.call(this);
                }
                Utility.isFastForward = isFastForward;
                function isAnimationFastForward() {
                    return isFastForward() && Settings().animationFastForward;
                }
                Utility.isAnimationFastForward = isAnimationFastForward;
                function isAnimationDelayFastForward() {
                    return isFastForward() && Settings().animationDelayFastForward;
                }
                Utility.isAnimationDelayFastForward = isAnimationDelayFastForward;
            })(Utility = BattleSpeed.Utility || (BattleSpeed.Utility = {}));
        })(BattleSpeed = Core.BattleSpeed || (Core.BattleSpeed = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Actor_stepForward = Sprite_Actor.prototype.stepForward;
    Sprite_Actor.prototype.stepForward = function () {
        var duration = Settings().actorStepDuration;
        if (duration > -1) {
            this.startMove(-48, 0, duration);
        }
        else {
            _bdc_Sprite_Actor_stepForward.call(this);
        }
    };
    var _bdc_Sprite_Actor_stepBack = Sprite_Actor.prototype.stepBack;
    Sprite_Actor.prototype.stepBack = function () {
        var duration = Settings().actorStepDuration;
        if (duration > -1) {
            this.startMove(0, 0, duration);
        }
        else {
            _bdc_Sprite_Actor_stepBack.call(this);
        }
    };
})();

(function () {
    var _bdc_Sprite_Animation_updateMain = Sprite_Animation.prototype.updateMain;
    Sprite_Animation.prototype.updateMain = function () {
        if (!(this instanceof BD.Core.Animation.StateAnimation.LoopAnimation)
            && this.isPlaying() && this.isReady()) {
            if (BD.Core.BattleSpeed.Utility.isAnimationDelayFastForward() && this._delay > 0) {
                this._delay--;
            }
            else if (BD.Core.BattleSpeed.Utility.isAnimationFastForward()) {
                if (this._rate > 1 && (this._duration % this._rate) === this._rate - 1) {
                    this._duration--;
                }
            }
        }
        _bdc_Sprite_Animation_updateMain.call(this);
    };
})();

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Base_isAnimationPlaying = Sprite_Base.prototype.isAnimationPlaying;
    Sprite_Base.prototype.isAnimationPlaying = function () {
        var isPlaying = _bdc_Sprite_Base_isAnimationPlaying.call(this);
        if (!isPlaying) {
            return false;
        }
        var skipDuration = Settings().animationSkipDuration;
        var endDuration = BD.Core.BattleSpeed.Utility.isFastForward() ? skipDuration * 2 : skipDuration;
        return (this._animationSprites)
            .filter(function (x) { return !(x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); })
            .some(function (x) { return x.currentFrameIndex() < 2 || x._duration > endDuration; });
    };
})();

(function () {
    Sprite_Battler.prototype.isBossCollapsing = function () {
        return false;
    };
})();

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Enemy_isEffecting = Sprite_Enemy.prototype.isEffecting;
    Sprite_Enemy.prototype.isEffecting = function () {
        if (this._effectType === "collapse" || this._effectType === "bossCollapse") {
            return false;
        }
        return _bdc_Sprite_Enemy_isEffecting.call(this);
    };
    Sprite_Enemy.prototype.isBossCollapsing = function () {
        return this._effectType === "bossCollapse";
    };
})();

(function () {
    Spriteset_Battle.prototype.isBossCollapsing = function () {
        return this.battlerSprites().some(function (sprite) {
            return sprite.isBossCollapsing();
        });
    };
})();

(function () {
    var Settings = BD.Core.Settings;
    Window_BattleLog.prototype.messageSpeed = function () {
        return Settings.basicSpeed();
    };
    var _bdc_Window_BattleLog_update = Window_BattleLog.prototype.update;
    Window_BattleLog.prototype.update = function () {
        _bdc_Window_BattleLog_update.call(this);
        if (this._waitCount === 0 && !this.updateWaitMode() && this._methods.length > 0) {
            this.update();
        }
    };
    var _bdc_Window_BattleLog_setWaitMode = Window_BattleLog.prototype.setWaitMode;
    Window_BattleLog.prototype.setWaitMode = function (waitMode) {
        if (this._waitCount === 0) {
            this._waitCount += 1;
        }
        _bdc_Window_BattleLog_setWaitMode.call(this, waitMode);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var DamagePopupFactory;
            (function (DamagePopupFactory) {
                var Directions = BD.Core.Consts.Enums.Directions;
                var PopupTypes = BD.Core.Consts.Enums.DamagePopupTypes;
                function initialize() {
                    _getPopupImageAttributes();
                    Object.keys(DamagePopup.Types)
                        .map(function (x) { return DamagePopup.Types[x].initializePopup; })
                        .filter(function (x) { return x && x instanceof Function; })
                        .forEach(function (x) { return x(); });
                }
                DamagePopupFactory.initialize = initialize;
                function create(target) {
                    var popups = [];
                    var result = target.result();
                    if (result.performCounter) {
                        popups.push(_createCounterPopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (result.performReflection) {
                        popups.push(_createReflectionPopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (result.performSubstitute) {
                        popups.push(_createSubstitutePopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (!result.regenerateTp && result.gainSilentTp) {
                        if (Core.Settings.isDisplayTp()) {
                            var chargeTp = _createTpChargePopup(target);
                            popups.push(chargeTp);
                        }
                        return popups.filter(function (x) { return x !== null; });
                    }
                    var miss = _createMissPopup(target);
                    popups.push(miss);
                    var hp = _createHpDamagePopup(target);
                    popups.push(hp);
                    var mp = _createMpDamagePopup(target);
                    popups.push(mp);
                    if (Core.Settings.isDisplayTp()) {
                        var tp = _createTpDamagePopup(target);
                        popups.push(tp);
                    }
                    var states = _createStatePopups(target);
                    Array.prototype.push.apply(popups, states);
                    var buffs = _createBuffPopups(target);
                    Array.prototype.push.apply(popups, buffs);
                    var regene = _createRegeneratePopups(target);
                    Array.prototype.push.apply(popups, regene);
                    return popups.filter(function (x) { return x !== null; });
                }
                DamagePopupFactory.create = create;
                function adjustPopupPosition(popup, x, y) {
                    var lx = Math.min(0, x - popup.pieceWidth / 2);
                    popup.pivot.x += lx;
                    var rx = Math.min(0, (Graphics.boxWidth - x) - popup.pieceWidth / 2);
                    popup.pivot.x -= rx;
                }
                DamagePopupFactory.adjustPopupPosition = adjustPopupPosition;
                function _createStatePopups(target) {
                    var popups = [];
                    var result = target.result();
                    if (!result.isStatusAffected()) {
                        return popups;
                    }
                    var name = _battlerIdName(target);
                    var deathStateId = target.deathStateId();
                    var addStates = result.addedNewStateObjects();
                    addStates
                        .filter(function (x) { return x.id !== deathStateId && x.iconIndex !== 0 && !Core.RPGExtension.getHideAddPopup(x); })
                        .forEach(function (state) {
                        var popup = _createPopup(_types().addState, _createAddState(state), name);
                        popups.push(popup);
                    });
                    var removeStates = result.removedStateObjects();
                    removeStates
                        .filter(function (x) { return x.id !== deathStateId && x.iconIndex !== 0 && !Core.RPGExtension.getHideRemovePopup(x); })
                        .forEach(function (state) {
                        var popup = _createPopup(_types().removeState, _createRemoveState(state), name);
                        popups.push(popup);
                    });
                    return popups;
                }
                function _createBuffPopups(target) {
                    var popups = [];
                    var result = target.result();
                    if (!result.isStatusAffected()) {
                        return popups;
                    }
                    var name = _battlerIdName(target);
                    result.addedBuffs.forEach(function (id) {
                        var popup = _createPopup(_types().addBuff, _createAddBuff(target, id, false), name);
                        popups.push(popup);
                    });
                    result.addedDebuffs.forEach(function (id) {
                        var popup = _createPopup(_types().addDebuff, _createAddBuff(target, id, true), name);
                        popups.push(popup);
                    });
                    result.removedBuffs.forEach(function (id) {
                        var popup = _createPopup(_types().removeBuff, _createRemoveBuff(target, id, false), name);
                        popups.push(popup);
                    });
                    return popups;
                }
                function _createAddState(state) {
                    var color = convertTypeToColorIndex(_addStateType(state));
                    var icon = new DamagePopup.Pieces.Icon(state.iconIndex, 255);
                    var name = Core.RPGExtension.getDisplayNameForPopup(state);
                    var text = new DamagePopup.Pieces.Text(name, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createRemoveState(state) {
                    var color = convertTypeToColorIndex(_removeStateType(state));
                    var icon = new DamagePopup.Pieces.Icon(state.iconIndex, 128);
                    var name = Core.RPGExtension.getDisplayNameForPopup(state);
                    var text = new DamagePopup.Pieces.Text(name, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createAddBuff(target, paramId, debuff) {
                    if (debuff === void 0) { debuff = false; }
                    var color = convertTypeToColorIndex(debuff ? PopupTypes.AddDebuff : PopupTypes.AddBuff);
                    var iconId = target.buffIconIndex(debuff ? -1 : 1, paramId);
                    var icon = new DamagePopup.Pieces.Icon(iconId, 255);
                    var text = new DamagePopup.Pieces.Text(TextManager.param(paramId), color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createRemoveBuff(target, paramId, debuff) {
                    if (debuff === void 0) { debuff = false; }
                    var color = convertTypeToColorIndex(debuff ? PopupTypes.RemoveDebuff : PopupTypes.RemoveBuff);
                    var iconId = target.buffIconIndex(debuff ? -1 : 1, paramId);
                    var icon = new DamagePopup.Pieces.Icon(iconId, 128);
                    var text = new DamagePopup.Pieces.Text(TextManager.param(paramId), color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createTpChargePopup(target) {
                    var result = target.result();
                    if (target.isActor() && result.gainSilentTp && result.silentTpDamage !== 0) {
                        return _createPopup(_types().tpCharge, _createTpDamage(target), _battlerIdName(target));
                    }
                    return null;
                }
                function _createRegeneratePopups(target) {
                    var popups = [];
                    var result = target.result();
                    var name = _battlerIdName(target);
                    var popupType = _types().regenerate;
                    if (result.regenerateHp && result.hpDamage !== 0) {
                        var hp = _createPopup(popupType, _createHpDamage(target), name);
                        popups.push(hp);
                    }
                    if (result.regenerateMp && result.mpDamage !== 0) {
                        var mp = _createPopup(popupType, _createMpDamage(target), name);
                        popups.push(mp);
                    }
                    if (result.regenerateTp && result.silentTpDamage !== 0) {
                        var tp = _createPopup(popupType, _createTpDamage(target), name);
                        popups.push(tp);
                    }
                    return popups;
                }
                function _createMissPopup(target) {
                    var result = target.result();
                    var popupType = _types().miss;
                    if (result.missed) {
                        return _createPopup(popupType, _createMiss(target), _battlerIdName(target));
                    }
                    else if (result.evaded) {
                        return _createPopup(popupType, _createEvasion(target), _battlerIdName(target));
                    }
                    return null;
                }
                function _createMiss(target) {
                    var color = convertTypeToColorIndex(PopupTypes.Miss);
                    var miss = new DamagePopup.Pieces.Text(_texts().miss, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(miss);
                }
                function _createEvasion(target) {
                    var color = convertTypeToColorIndex(PopupTypes.Evasion);
                    var evasion = new DamagePopup.Pieces.Text(_texts().evasion, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(evasion);
                }
                function _createHpDamagePopup(target) {
                    var result = target.result();
                    if (!result.hpAffected || result.missed || result.evaded || result.regenerateHp) {
                        return null;
                    }
                    return _createPopup(_types().hpDamage, _createHpDamage(target), _battlerIdName(target));
                }
                function _createMpDamagePopup(target) {
                    var result = target.result();
                    if (result.mpDamage === 0 || result.missed || result.evaded || result.regenerateMp) {
                        return null;
                    }
                    return _createPopup(_types().mpDamage, _createMpDamage(target), _battlerIdName(target));
                }
                function _createTpDamagePopup(target) {
                    var result = target.result();
                    if (target.isEnemy() || result.tpDamage === 0 || result.missed || result.evaded || result.regenerateTp) {
                        return null;
                    }
                    return _createPopup(_types().tpDamage, _createTpDamage(target), _battlerIdName(target));
                }
                function _createHpDamage(target) {
                    var result = target.result();
                    var color;
                    if (result.hpDamage >= 0) {
                        if (result.isEffectiveDamage()) {
                            color = convertTypeToColorIndex(PopupTypes.Effective);
                        }
                        else if (result.isNotEffectiveDamage()) {
                            color = convertTypeToColorIndex(PopupTypes.NotEffective);
                        }
                        else {
                            color = convertTypeToColorIndex(result.critical ? PopupTypes.HpCriticalDamage : PopupTypes.HpDamage);
                        }
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.HpRecover);
                    }
                    var num = new DamagePopup.Pieces.Digits(result.hpDamage, color, _getPopupImageAttributes());
                    var parts = new DamagePopup.Pieces.Base()
                        .addPiece(num);
                    if (result.hpDamage >= 0) {
                        parts.addPiece(_createEffective(target, color), Directions.Up);
                        parts.addPiece(_createCritical(target, color), Directions.Up);
                    }
                    return parts;
                }
                function _createMpDamage(target) {
                    var result = target.result();
                    var color;
                    var mpText;
                    if (result.mpDamage > 0) {
                        color = convertTypeToColorIndex(result.critical ? PopupTypes.MpCriticalDamage : PopupTypes.MpDamage);
                        mpText = TextManager.mpA + _texts().minus;
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.MpRecover);
                        mpText = TextManager.mpA + _texts().plus;
                    }
                    var text = new DamagePopup.Pieces.Text(mpText, color, _getPopupImageAttributes());
                    var num = new DamagePopup.Pieces.Digits(target.result().mpDamage, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(num)
                        .addPiece(text, Directions.Left);
                }
                function _createTpDamage(target) {
                    var result = target.result();
                    var damage = result.gainSilentTp ? result.silentTpDamage : result.tpDamage;
                    var color;
                    var tpText;
                    if (damage > 0) {
                        color = convertTypeToColorIndex(result.critical ? PopupTypes.TpCriticalDamage : PopupTypes.TpDamage);
                        tpText = TextManager.tpA + _texts().minus;
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.TpRecover);
                        tpText = TextManager.tpA + _texts().plus;
                    }
                    var text = new DamagePopup.Pieces.Text(tpText, color, _getPopupImageAttributes());
                    var num = new DamagePopup.Pieces.Digits(damage, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(num)
                        .addPiece(text, Directions.Left);
                }
                function _createEffective(target, color) {
                    var result = target.result();
                    if (result.isEffectiveDamage()) {
                        return new DamagePopup.Pieces.Text(_texts().weakness, color, _getPopupImageAttributes());
                    }
                    else if (result.isNotEffectiveDamage()) {
                        return new DamagePopup.Pieces.Text(_texts().resist, color, _getPopupImageAttributes());
                    }
                    else {
                        return null;
                    }
                }
                function _createCritical(target, color) {
                    var result = target.result();
                    if (result.critical) {
                        return new DamagePopup.Pieces.Text(_texts().critical, color, _getPopupImageAttributes());
                    }
                    else {
                        return null;
                    }
                }
                function _createCounterPopup(target) {
                    if (target.result().performCounter) {
                        return _createPopup(_types().counter, _createCounter(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createCounter() {
                    var color = convertTypeToColorIndex(PopupTypes.Counter);
                    return new DamagePopup.Pieces.Text(_texts().counter, color, _getPopupImageAttributes());
                }
                function _createReflectionPopup(target) {
                    if (target.result().performReflection) {
                        return _createPopup(_types().reflection, _createReflection(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createReflection() {
                    var color = convertTypeToColorIndex(PopupTypes.Reflection);
                    return new DamagePopup.Pieces.Text(_texts().reflection, color, _getPopupImageAttributes());
                }
                function _createSubstitutePopup(target) {
                    if (target.result().performSubstitute) {
                        return _createPopup(_types().substitute, _createSubstitute(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createSubstitute() {
                    var color = convertTypeToColorIndex(PopupTypes.Substitute);
                    return new DamagePopup.Pieces.Text(_texts().substitute, color, _getPopupImageAttributes());
                }
                function _battlerIdName(target) {
                    return target.index().toString() + target.name().toString() + target.battlerName().toString();
                }
                function _addStateType(state) {
                    if (Core.RPGExtension.getPositive(state)) {
                        return PopupTypes.AddPositiveState;
                    }
                    else if (Core.RPGExtension.getNegative(state)) {
                        return PopupTypes.AddNegativeState;
                    }
                    else {
                        return PopupTypes.AddState;
                    }
                }
                function _removeStateType(state) {
                    if (Core.RPGExtension.getPositive(state)) {
                        return PopupTypes.RemovePositiveState;
                    }
                    else if (Core.RPGExtension.getNegative(state)) {
                        return PopupTypes.RemoveNegativeState;
                    }
                    else {
                        return PopupTypes.RemoveState;
                    }
                }
                var attributes = null;
                function _getPopupImageAttributes() {
                    if (attributes == null) {
                        attributes = _createPopupImageAttributes();
                    }
                    return attributes;
                }
                var numPaddingX = 8;
                function _createPopupImageAttributes() {
                    var b = new Bitmap();
                    b.fontSize = Core.Settings.popup().numberSize;
                    var font = Core.Settings.popup().textFont;
                    b.fontFace = font;
                    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    var numberWidths = numbers.map(function (x) {
                        return Math.round(b.measureTextWidth(x) + numPaddingX);
                    });
                    var bw = numberWidths.reduce(function (prev, current) {
                        return prev + current;
                    }, 0);
                    var height = Core.Settings.popup().numberHeight;
                    var colors = Core.Settings.popup().colors;
                    b.resize(bw, height * colors.length);
                    b.smooth = true;
                    colors.forEach(function (value, index) {
                        b.textColor = value.bodyColor;
                        b.outlineColor = value.outlineColor;
                        var drawX = 0;
                        numbers.forEach(function (n, i) {
                            b.drawText(n, drawX, index * height, numberWidths[i], height, "center");
                            drawX += numberWidths[i];
                        });
                    });
                    return {
                        numbers: b,
                        widths: numberWidths,
                        numberHeight: height,
                        numberSpacing: Core.Settings.popup().numberSpacing,
                        textSize: Core.Settings.popup().textSize,
                        textFont: font,
                        textHeight: Core.Settings.popup().textSize,
                        colors: colors
                    };
                }
                function _createPopup(type, piece, name) {
                    var popupType = BD.Core.DamagePopup.Types[type];
                    if (popupType === undefined) {
                        return new DamagePopup.Types.SimpleBounce(piece, name);
                    }
                    return new popupType(piece, name);
                }
                function _types() {
                    return Core.Settings.popup().types;
                }
                function _texts() {
                    return Core.Settings.popup().texts;
                }
                function convertTypeToColorIndex(type) {
                    var t = type;
                    var index = Core.Settings.popup().colorAlloc[t];
                    return index ? index : 0;
                }
                DamagePopupFactory.convertTypeToColorIndex = convertTypeToColorIndex;
            })(DamagePopupFactory = DamagePopup.DamagePopupFactory || (DamagePopup.DamagePopupFactory = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
    Game_Action.prototype.calcElementRate = function (target) {
        var rate = _bdc_Game_Action_calcElementRate.call(this, target);
        target.result().damageRate = rate;
        return rate;
    };
})();

(function () {
    var _bdc_Game_ActionResult_clear = Game_ActionResult.prototype.clear;
    Game_ActionResult.prototype.clear = function () {
        if (this.performCounter) {
            this.performCounter = false;
            return;
        }
        if (this.performReflection) {
            this.performReflection = false;
            return;
        }
        if (this.performSubstitute) {
            this.performSubstitute = false;
            return;
        }
        if (!this.regenerateTp && this.gainSilentTp) {
            this.gainSilentTp = false;
            this.silentTpDamage = 0;
            return;
        }
        _bdc_Game_ActionResult_clear.call(this);
        this.damageRate = 1.0;
        this.regenerateHp = false;
        this.regenerateMp = false;
        this.regenerateTp = false;
        this.gainSilentTp = false;
        this.silentTpDamage = 0;
        this.addedNewStates = [];
        this.performCounter = false;
        this.performReflection = false;
        this.performSubstitute = false;
    };
    var _bdc_Game_ActionResult_isStatusAffected = Game_ActionResult.prototype.isStatusAffected;
    Game_ActionResult.prototype.isStatusAffected = function () {
        if (this.addedNewStates.length > 0) {
            return true;
        }
        return _bdc_Game_ActionResult_isStatusAffected.call(this);
    };
    Game_ActionResult.prototype.addedNewStateObjects = function () {
        return this.addedNewStates.map(function (id) {
            return $dataStates[id];
        });
    };
    Game_ActionResult.prototype.isEffectiveDamage = function () {
        return (this.damageRate > 1.0);
    };
    Game_ActionResult.prototype.isNotEffectiveDamage = function () {
        return (this.damageRate < 1.0);
    };
})();


(function () {
    var _bdc_Game_Battler_gainSilentTp = Game_Battler.prototype.gainSilentTp;
    Game_Battler.prototype.gainSilentTp = function (value) {
        this.result().gainSilentTp = true;
        this.result().silentTpDamage = -value;
        _bdc_Game_Battler_gainSilentTp.call(this, value);
        if (!this.result().regenerateTp) {
            this.startDamagePopup();
        }
    };
    var _bdc_Game_Battler_regenerateHp = Game_Battler.prototype.regenerateHp;
    Game_Battler.prototype.regenerateHp = function () {
        this.result().regenerateHp = true;
        _bdc_Game_Battler_regenerateHp.call(this);
    };
    var _bdc_Game_Battler_regenerateMp = Game_Battler.prototype.regenerateMp;
    Game_Battler.prototype.regenerateMp = function () {
        this.result().regenerateMp = true;
        _bdc_Game_Battler_regenerateMp.call(this);
    };
    var _bdc_Game_Battler_regenerateTp = Game_Battler.prototype.regenerateTp;
    Game_Battler.prototype.regenerateTp = function () {
        this.result().regenerateTp = true;
        _bdc_Game_Battler_regenerateTp.call(this);
    };
    Game_Battler.prototype.addNewState = function (stateId) {
        this.result().addedNewStates.push(stateId);
        Game_BattlerBase.prototype.addNewState.call(this, stateId);
    };
    var _bdc_Game_Battler_performCounter = Game_Battler.prototype.performCounter;
    Game_Battler.prototype.performCounter = function () {
        this.result().performCounter = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performCounter.call(this);
    };
    var _bdc_Game_Battler_performReflection = Game_Battler.prototype.performReflection;
    Game_Battler.prototype.performReflection = function () {
        this.result().performReflection = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performReflection.call(this);
    };
    var _bdc_Game_Battler_performSubstitute = Game_Battler.prototype.performSubstitute;
    Game_Battler.prototype.performSubstitute = function (target) {
        this.result().performSubstitute = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performSubstitute.call(this, target);
    };
})();


(function () {
    var Settings = BD.Core.Settings;
    var _bdc_Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
    Sprite_Battler.prototype.initMembers = function () {
        _bdc_Sprite_Battler_initMembers.call(this);
        this._popupLayer = null;
    };
    Sprite_Battler.prototype.getPopupLayer = function () {
        if (!this._popupLayer) {
            this._popupLayer = this.findFamily(function (sprite) { return sprite instanceof BD.Core.DamagePopup.PopupLayer; });
        }
        return this._popupLayer;
    };
    Sprite_Battler.prototype.setupDamagePopup = function () {
        if (this._battler.isDamagePopupRequested()) {
            var popupLayer = this.getPopupLayer();
            var disablePopup = this._battler.isActor()
                && !Settings.battlerGraphic().enablePopup
                && !Settings.enableSideVidwBattler();
            if (popupLayer && this._battler.isSpriteVisible() && !disablePopup) {
                var sprite = new Sprite_Damage();
                var ap = this.absolutePosition();
                sprite.x = ap.x + this.damageOffsetX();
                sprite.y = ap.y + this.damageOffsetY();
                sprite.setup(this._battler);
                this._damages.push(sprite);
                popupLayer.addChild(sprite);
            }
            this._battler.clearDamagePopup();
            this._battler.clearResult();
        }
    };
    Sprite_Battler.prototype.updateDamagePopup = function () {
        this.setupDamagePopup();
        if (this._damages.length > 0) {
            for (var i = 0; i < this._damages.length; i++) {
                this._damages[i].update();
            }
            var popupLayer = this.getPopupLayer();
            if (popupLayer && !this._damages[0].isPlaying()) {
                popupLayer.removeChild(this._damages[0]);
                this._damages.shift();
            }
        }
    };
})();

(function () {
    var Popup = BD.Core.DamagePopup;
    Sprite_Damage.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._duration = 90;
        this.damages = [];
    };
    Sprite_Damage.prototype.setup = function (target) {
        var _this = this;
        var popups = Popup.DamagePopupFactory.create(target);
        popups.forEach(function (popup) {
            _this.damages.push(popup);
            _this.addChild(popup);
            Popup.DamagePopupFactory.adjustPopupPosition(popup, _this.x, _this.y);
        });
    };
    Sprite_Damage.prototype.update = function () {
        var damages = this.damages;
        return damages.forEach(function (popup) {
            popup.update();
        });
    };
    Sprite_Damage.prototype.isPlaying = function () {
        var damages = this.damages;
        return damages.some(function (popup) {
            return popup.isPlaying();
        });
    };
})();

(function () {
    Sprite_Enemy.prototype.damageOffsetX = function () {
        return 0;
    };
    Sprite_Enemy.prototype.damageOffsetY = function () {
        return -Math.round(this.height * 0.25);
    };
})();

(function () {
    var _bdc_Window_BattleLog_displayBuffs = Window_BattleLog.prototype.displayBuffs;
    Window_BattleLog.prototype.displayBuffs = function (target, buffs, fmt) {
        _bdc_Window_BattleLog_displayBuffs.call(this, target, buffs, fmt);
        this.push("popupDamage", target);
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Digits = (function (_super) {
                    __extends(Digits, _super);
                    function Digits(num, color, attributes) {
                        var _this = _super.call(this, null) || this;
                        _this.setup(num, color, attributes);
                        return _this;
                    }
                    Digits.prototype.setup = function (num, color, attributes) {
                        var _this = this;
                        this.pieceWidth = 0;
                        var nums = Math.abs(num).toString().split("");
                        nums.map(function (x) { return parseInt(x); }).forEach(function (n) {
                            var s = new Sprite(attributes.numbers);
                            s.setFrame(_this._getFrameX(n, attributes.widths), attributes.numberHeight * color, attributes.widths[n], attributes.numberHeight);
                            s.x = _this.pieceWidth;
                            _this.pieceWidth += Math.round(attributes.widths[n] * attributes.numberSpacing);
                            _this.addChild(s);
                        });
                        this.pieceHeight = attributes.numberHeight;
                        this.children.forEach(function (x) {
                            x.x -= _this.pieceWidth / 2;
                            x.y -= _this.pieceHeight / 2;
                        });
                    };
                    Digits.prototype._getFrameX = function (num, widths) {
                        var x = 0;
                        for (var i = 0; i < num; i++) {
                            x += widths[i];
                        }
                        return x;
                    };
                    Digits.prototype.update = function () {
                    };
                    return Digits;
                }(Sprite));
                Pieces.Digits = Digits;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Directions = BD.Core.Consts.Enums.Directions;
                var Base = (function (_super) {
                    __extends(Base, _super);
                    function Base() {
                        var _this = _super.call(this, null) || this;
                        _this.anchor.x = 0.5;
                        _this.anchor.y = 0.5;
                        return _this;
                    }
                    Base.prototype.addPiece = function (piece, position) {
                        if (position === void 0) { position = Directions.Center; }
                        if (piece === null) {
                            return this;
                        }
                        if (this.children.length === 0) {
                            this._initialAdd(piece);
                            return this;
                        }
                        var pw = piece.pieceWidth;
                        var ph = piece.pieceHeight;
                        switch (position) {
                            case Directions.LeftDown:
                                throw ("Not Implemented");
                            case Directions.Down:
                                this._putToDown(piece, pw, ph);
                                break;
                            case Directions.RightDown:
                                throw ("Not Implemented");
                            case Directions.Left:
                                this._putToLeft(piece, pw, ph);
                                break;
                            case Directions.Center:
                                break;
                            case Directions.Right:
                                this._putToRight(piece, pw, ph);
                                break;
                            case Directions.LeftUp:
                                throw ("Not Implemented");
                            case Directions.Up:
                                this._putToUp(piece, pw, ph);
                                break;
                            case Directions.RightUp:
                                throw ("Not Implemented");
                            default:
                                break;
                        }
                        return this;
                    };
                    Base.prototype.shift = function (shiftX, shiftY) {
                        this.children.forEach(function (sprite) {
                            sprite.x += Math.round(shiftX);
                            sprite.y += Math.round(shiftY);
                        });
                        return this;
                    };
                    Base.prototype._initialAdd = function (piece) {
                        this.pieceWidth = piece.pieceWidth;
                        this.pieceHeight = piece.pieceHeight;
                        this.addChild(piece);
                    };
                    Base.prototype._putToLeft = function (piece, pw, ph) {
                        piece.x = Math.round(-this.pieceWidth / 2 - pw / 2);
                        this.pieceWidth += pw;
                        if (ph > this.pieceHeight) {
                            this.pieceHeight = ph;
                        }
                        this.addChild(piece);
                        this.shift(pw / 2, 0);
                    };
                    Base.prototype._putToRight = function (piece, pw, ph) {
                        piece.x = Math.round(this.pieceWidth / 2 + pw / 2);
                        this.pieceWidth += pw;
                        if (ph > this.pieceHeight) {
                            this.pieceHeight = ph;
                        }
                        this.addChild(piece);
                        this.shift(-pw / 2, 0);
                    };
                    Base.prototype._putToUp = function (piece, pw, ph) {
                        piece.y = Math.round(-this.pieceHeight / 2 - ph / 2);
                        this.pieceHeight += ph;
                        if (pw > this.pieceWidth) {
                            this.pieceWidth = pw;
                        }
                        this.addChild(piece);
                        this.shift(0, ph / 2);
                    };
                    Base.prototype._putToDown = function (piece, pw, ph) {
                        piece.y = Math.round(this.pieceHeight / 2 + ph / 2);
                        this.pieceHeight += ph;
                        if (pw > this.pieceWidth) {
                            this.pieceWidth = pw;
                        }
                        this.addChild(piece);
                        this.shift(0, -ph / 2);
                    };
                    return Base;
                }(Sprite));
                Pieces.Base = Base;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Icon = (function (_super) {
                    __extends(Icon, _super);
                    function Icon(iconIndex, opacity) {
                        var _this = _super.call(this) || this;
                        _this.setup(iconIndex, opacity);
                        return _this;
                    }
                    Icon.prototype.setup = function (iconIndex, opacity) {
                        this.bitmap = ImageManager.loadSystem("IconSet");
                        this._setIcon(iconIndex);
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                        this.opacity = opacity;
                        this.pieceWidth = 32;
                        this.pieceHeight = 32;
                    };
                    Icon.prototype.update = function () {
                    };
                    Icon.prototype._setIcon = function (iconIndex) {
                        var pw = 32;
                        var ph = 32;
                        var sx = iconIndex % 16 * pw;
                        var sy = Math.floor(iconIndex / 16) * ph;
                        this.setFrame(sx, sy, pw, ph);
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                    };
                    return Icon;
                }(Sprite));
                Pieces.Icon = Icon;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Text = (function (_super) {
                    __extends(Text, _super);
                    function Text(text, color, attributes) {
                        var _this = _super.call(this) || this;
                        _this.setup(text, color, attributes);
                        return _this;
                    }
                    Text.prototype.setup = function (text, color, attributes) {
                        var b = new Bitmap(4, 4);
                        b.outlineColor = attributes.colors[color].outlineColor;
                        b.textColor = attributes.colors[color].bodyColor;
                        b.fontSize = attributes.textSize;
                        b.fontFace = attributes.textFont;
                        var textWidth = b.measureTextWidth(text) + 4;
                        b.resize(textWidth, attributes.textHeight);
                        b.drawText(text, 0, 0, b.width, b.height, "center");
                        this.bitmap = b;
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                        this.pieceWidth = b.width;
                        this.pieceHeight = b.height;
                    };
                    Text.prototype.update = function () {
                    };
                    return Text;
                }(Sprite));
                Pieces.Text = Text;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var PopupLayer = (function (_super) {
                __extends(PopupLayer, _super);
                function PopupLayer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PopupLayer;
            }(Sprite));
            DamagePopup.PopupLayer = PopupLayer;
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var AbstractDamagePopup = (function (_super) {
                    __extends(AbstractDamagePopup, _super);
                    function AbstractDamagePopup(piece) {
                        var _this = _super.call(this, null) || this;
                        _this.anchor.x = 0.5;
                        _this.anchor.y = 0.5;
                        _this.addChild(piece);
                        return _this;
                    }
                    Object.defineProperty(AbstractDamagePopup.prototype, "pieceWidth", {
                        get: function () {
                            if (this.children[0] instanceof DamagePopup.Pieces.Base) {
                                return this.children[0].pieceWidth;
                            }
                            return 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(AbstractDamagePopup.prototype, "pieceHeight", {
                        get: function () {
                            if (this.children[0] instanceof DamagePopup.Pieces.Base) {
                                return this.children[0].pieceHeight;
                            }
                            return 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    AbstractDamagePopup.prototype.update = function () {
                        _super.prototype.update.call(this);
                    };
                    AbstractDamagePopup.prototype.isPlaying = function () {
                        return false;
                    };
                    return AbstractDamagePopup;
                }(Sprite));
                Types.AbstractDamagePopup = AbstractDamagePopup;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Motionless = (function (_super) {
                    __extends(Motionless, _super);
                    function Motionless(parts) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup();
                        return _this;
                    }
                    Motionless.prototype.setup = function () {
                        this.opacity = 32;
                        this._opacity = 32;
                        this._duration = 60;
                    };
                    Motionless.prototype.update = function () {
                        _super.prototype.update.call(this);
                        if (this._opacity < 256 && this._duration > 0) {
                            this._opacity = Math.min(255, this._opacity + 32);
                        }
                        this._duration--;
                        if (this._duration <= 0) {
                            this._opacity -= 32;
                        }
                        this.opacity = this._opacity;
                    };
                    Motionless.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return Motionless;
                }(Types.AbstractDamagePopup));
                Types.Motionless = Motionless;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Overlay = (function (_super) {
                    __extends(Overlay, _super);
                    function Overlay(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    Overlay.initializePopup = function () {
                        Overlay.adjustYData = {};
                    };
                    Overlay.prototype.setup = function (name) {
                        var _this = this;
                        this._duration = 90;
                        this._name = name;
                        this._overlay = new Sprite();
                        this._overlay.opacity = 128;
                        this.children.forEach(function (x) { return _this._overlay.addChild(x.clone()); });
                        this._overlay.flatten().forEach(function (x) { return x.blendMode = Graphics.BLEND_ADD; });
                        this.addChild(this._overlay);
                        if (Overlay.adjustYData[this._name] === undefined) {
                            Overlay.adjustYData[this._name] = 0;
                        }
                        this.y = -Overlay.adjustYData[this._name];
                        Overlay.adjustYData[this._name] += this.pieceHeight;
                    };
                    Overlay.prototype.update = function () {
                        this._duration--;
                        this.y = -16;
                        this.opacity = 255 + (this._duration - 8) * 32;
                        this._overlay.scale.x += 0.1;
                        this._overlay.scale.y += 0.1;
                        this._overlay.opacity -= 6;
                        if (this._duration === 0) {
                            Overlay.adjustYData[this._name] -= this.pieceHeight;
                        }
                    };
                    Overlay.prototype.isPlaying = function () {
                        return this._duration > 0;
                    };
                    return Overlay;
                }(Types.AbstractDamagePopup));
                Types.Overlay = Overlay;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var RandomBounce = (function (_super) {
                    __extends(RandomBounce, _super);
                    function RandomBounce(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    RandomBounce.prototype.setup = function (name) {
                        this._duration = 90;
                        this._name = name;
                        this._realX = 0;
                        this._realY = -8;
                        this._gravity = 0.3;
                        this._horizon = 32;
                        this._xVelocityDispersion = [-1.25, 1.25];
                        this._yVelocityDispersion = [-4, -6];
                        var xvd = this._xVelocityDispersion;
                        this._xVelocity = xvd[0] + Math.random() * (xvd[1] - xvd[0]);
                        var yvd = this._yVelocityDispersion;
                        this._yVelocity = yvd[0] + Math.random() * (yvd[1] - yvd[0]);
                        this._restitution = 0.64;
                        this._maxBoundCount = Infinity;
                    };
                    RandomBounce.prototype.update = function () {
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        if (this._maxBoundCount >= 0) {
                            this._realX += this._xVelocity;
                            this._realY += this._yVelocity;
                            this._yVelocity += this._gravity;
                            if (this._realY > this._horizon) {
                                this._realY = this._horizon;
                                this._yVelocity = -this._yVelocity * this._restitution;
                                this._maxBoundCount--;
                                if (this._yVelocity > -1) {
                                    this._maxBoundCount = -1;
                                }
                            }
                        }
                        if (this._duration < 0) {
                            this.opacity -= 16;
                        }
                    };
                    RandomBounce.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return RandomBounce;
                }(Types.AbstractDamagePopup));
                Types.RandomBounce = RandomBounce;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Rise = (function (_super) {
                    __extends(Rise, _super);
                    function Rise(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    Rise.initializePopup = function () {
                        Rise.RisingPopups = {};
                    };
                    ;
                    Rise.prototype.setup = function (name) {
                        this._duration = 120;
                        this._name = name;
                        this._realX = 0;
                        this._realY = 0;
                        this._riseSpeed = 0.66;
                        this.visible = false;
                    };
                    Rise.prototype.update = function () {
                        if (!this.visible) {
                            if (this._isReady()) {
                                Rise.RisingPopups[this._name] = this;
                                this.visible = true;
                            }
                            return;
                        }
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        this._realY -= this._riseSpeed;
                        if (this._duration < 0) {
                            if (Rise.RisingPopups[this._name] === this) {
                                Rise.RisingPopups[this._name] = null;
                            }
                            this.opacity -= 6;
                        }
                    };
                    Rise.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    Rise.prototype._isReady = function () {
                        var currentPopup = Rise.RisingPopups[this._name];
                        if (currentPopup == null || currentPopup === this) {
                            return true;
                        }
                        if (-this.pieceHeight / 2 > currentPopup.y + currentPopup.pieceHeight / 2) {
                            return true;
                        }
                        return false;
                    };
                    return Rise;
                }(Types.AbstractDamagePopup));
                Types.Rise = Rise;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var SimpleBounce = (function (_super) {
                    __extends(SimpleBounce, _super);
                    function SimpleBounce(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    SimpleBounce.initializePopup = function () {
                        SimpleBounce.adjustYData = {};
                    };
                    SimpleBounce.prototype.setup = function (name) {
                        this._duration = 90;
                        this._name = name;
                        this._realX = 0;
                        this._realY = 16;
                        this._yVelocity = -4.8;
                        this._gravity = 0.3;
                        this._horizon = 8;
                        if (SimpleBounce.adjustYData[this._name] === undefined) {
                            SimpleBounce.adjustYData[this._name] = 0;
                        }
                        this.pivot.y = -SimpleBounce.adjustYData[this._name];
                        SimpleBounce.adjustYData[this._name] += this.pieceHeight;
                    };
                    SimpleBounce.prototype.update = function () {
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        this._realY += this._yVelocity;
                        if (this._realY > this._horizon) {
                            this._realY = this._horizon;
                        }
                        this._yVelocity += this._gravity;
                        if (this._duration === 48) {
                            SimpleBounce.adjustYData[this._name] -= this.pieceHeight;
                        }
                        if (this._duration < 0) {
                            this.opacity -= 16;
                        }
                    };
                    SimpleBounce.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return SimpleBounce;
                }(Types.AbstractDamagePopup));
                Types.SimpleBounce = SimpleBounce;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                BattleObjects.defs = BD.Core.Property.PropertyUtility.definitions;
                BattleObjects.PropertyChanged = BD.Core.Property.PropertyChanged;
                var Base = (function (_super) {
                    __extends(Base, _super);
                    function Base(obj) {
                        var _this = _super.call(this, null) || this;
                        _this._initObjectRaw = obj;
                        _this._internalVisibility = true;
                        return _this;
                    }
                    Object.defineProperty(Base.prototype, "propertyChanged", {
                        get: function () {
                            return this._propertyChanged;
                        },
                        set: function (value) {
                            this._propertyChanged = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Base.prototype.setup = function (parent) {
                        parent.addChild(this);
                        var obj = this._initObjectRaw;
                        this._initUpdateCount();
                        this.propertyChanged = new BattleObjects.PropertyChanged();
                        this._setProperties(obj.properties);
                        this._setPropertyFunctions = {};
                        this._ready = true;
                        this._initObjectRaw = null;
                        this._createBattleObject(obj, this);
                        this._updateInternal();
                        this._updateCommonProperties();
                        this._setProperty(BattleObjects.defs.x);
                        this._setProperty(BattleObjects.defs.y);
                        this._setOneTimeProperty();
                        this._updatePropertyInternal();
                        this._initializeInternal(obj);
                    };
                    Base.prototype._setOneTimeProperty = function () {
                    };
                    Base.prototype._initializeInternal = function (obj) {
                    };
                    Base.prototype._onceUpdateProperties = function (obj) {
                    };
                    Base.prototype.initializeDragging = function () {
                        this._touchStratPoint = new Point(0, 0);
                        this._hold = false;
                        this._touching = false;
                        this._dragging = false;
                        this._pressCount = 0;
                    };
                    Base.prototype.update = function () {
                        if (!this._ready) {
                            return;
                        }
                        this._updateInternal();
                        this._updateProperties();
                        this._updateCommonProperties();
                        _super.prototype.update.call(this);
                    };
                    Base.prototype._updateCommonProperties = function () {
                        if (this._internalVisibility) {
                            this._setProperty(BattleObjects.defs.visible);
                        }
                    };
                    Base.prototype._updateProperties = function () {
                        if (!Core.Manager.isStopHUD() && this._updateCount++ % 4 === 0) {
                            this._updateCommonProperties();
                            this._updatePropertyInternal();
                            this.propertyChanged.update();
                        }
                    };
                    Base.prototype._updateInternal = function () {
                    };
                    Base.prototype._updatePropertyInternal = function () {
                    };
                    Base.prototype._initUpdateCount = function () {
                        this._updateCount = this.spriteId % 4;
                    };
                    Base.prototype.containable = function () {
                        return false;
                    };
                    Base.prototype._createBattleObject = function (obj, parent) {
                        var _this = this;
                        if (!this.containable || !obj.children) {
                            return;
                        }
                        obj.children.forEach(function (x) {
                            var child = _this._createSpriteBattleObject(x);
                            child.setup(parent);
                        });
                    };
                    Base.prototype._createSpriteBattleObject = function (obj) {
                        try {
                            var o = eval("new BD.Core.HUD.BattleObjects." + obj.properties["type"] + "(obj)");
                            return o;
                        }
                        catch (e) {
                            throw ("failed _createSpriteBattleObject \"" + obj.properties["type"] + "\"");
                        }
                    };
                    Base.prototype.dragging = function () {
                        if (!this.draggable()) {
                            return;
                        }
                        if (TouchInput.isTriggered() && this.isTouched() && this.isActive()) {
                            this._touchStratPoint.x = TouchInput.x;
                            this._touchStratPoint.y = TouchInput.y;
                            this._touching = true;
                        }
                        else if (TouchInput.isReleased() && this._touching) {
                            this.dragMove();
                            this.resetPressCount();
                        }
                        if (this._touching) {
                            this.dragMove();
                        }
                        return this._touching;
                    };
                    Base.prototype.dragMove = function () {
                        var newX = this.x + (TouchInput.x - this._touchStratPoint.x);
                        var newY = this.y + (TouchInput.y - this._touchStratPoint.y);
                        if (TouchInput.isReleased()) {
                            this.endDrag(newX, newY);
                        }
                        this.x = newX;
                        this.y = newY;
                    };
                    Base.prototype.endDrag = function (newX, newY) {
                        this._setPropertyFunctions[BattleObjects.defs.x.key] = null;
                        this._setPropertyFunctions[BattleObjects.defs.y.key] = null;
                        this._properties["x"] = newX;
                        this._properties["y"] = newY;
                        this.x = newX;
                        this.y = newY;
                        var name = this._properties["name"];
                        BD.Studio.Utilities.ObjectController.setProperties(name, this._properties);
                    };
                    Base.prototype.draggable = function () {
                        return false;
                    };
                    Base.prototype.updatePressCount = function () {
                        this._pressCount++;
                    };
                    Base.prototype.resetPressCount = function () {
                        this._pressCount = 0;
                        this._touching = false;
                    };
                    Base.prototype.isActive = function () {
                        var node = this;
                        while (node) {
                            if (!node.visible) {
                                return false;
                            }
                            node = node.parent;
                        }
                        return true;
                    };
                    Base.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < this.width && y < this.height;
                    };
                    Base.prototype.canvasToLocalX = function (x) {
                        var node = this;
                        while (node) {
                            x -= node.x;
                            node = node.parent;
                        }
                        return x;
                    };
                    Base.prototype.canvasToLocalY = function (y) {
                        var node = this;
                        while (node) {
                            y -= node.y;
                            node = node.parent;
                        }
                        return y;
                    };
                    Base.prototype._setProperties = function (properties) {
                        this._properties = properties;
                    };
                    Base.prototype._getProperties = function () {
                        if (this._properties === null) {
                            return {};
                        }
                        return this._properties;
                    };
                    Base.prototype._getProperty = function (key) {
                        if (this._getProperties()[key] == null) {
                            return BattleObjects.defs[key].defaultValue;
                        }
                        return this._getProperties()[key];
                    };
                    Base.prototype._valueEvaluation = function (key) {
                        var func = this._setPropertyFunctions[key];
                        if (func) {
                            return func.call(this.getContext());
                        }
                        else {
                            var value = "return " + this._getProperty(key);
                            this._setPropertyFunctions[key] = BD.Core.Property.PropertyUtility.makeFunction(key, value, this.getContext());
                            return this._valueEvaluation(key);
                        }
                    };
                    Base.prototype._setProperty = function (def) {
                        var key = def.key;
                        var value = this._valueEvaluation(key);
                        if (this[key] !== value) {
                            this.propertyChanged.raise(key);
                            this[key] = value;
                        }
                    };
                    Base.prototype.getContext = function () {
                        return this.parent.getContext();
                    };
                    Base.prototype.getObjectName = function () {
                        return this._properties["name"];
                    };
                    Base.prototype.setVisibility = function (visibility) {
                        if (visibility) {
                            this._internalVisibility = true;
                            this._setProperty(BattleObjects.defs.visible);
                        }
                        else {
                            this._internalVisibility = false;
                            this.visible = false;
                        }
                    };
                    Base.prototype._scalePercentToDecimal = function (scale) {
                        return scale / 100;
                    };
                    Base.prototype._setScale = function (sprite) {
                        var s = sprite ? sprite : this;
                        if (this.zoom === undefined) {
                            var zx = this._scalePercentToDecimal(this.zoomX);
                            var zy = this._scalePercentToDecimal(this.zoomY);
                            s.scale.set(zx, zy);
                        }
                        else {
                            var z = this._scalePercentToDecimal(this.zoom);
                            s.scale.set(z, z);
                        }
                    };
                    Base.prototype._degreeToSkew = function (deg) {
                        var d = deg || 0;
                        if (Math.abs(d) === 90 || Math.abs(d) === 270) {
                            d -= 1;
                        }
                        return Math.tan(d * Math.PI / 180);
                    };
                    Base.prototype._enabledSkew = function () {
                        return this.skewAngleX !== 0 || this.skewAngleY !== 0;
                    };
                    Base.prototype._setSkewAngle = function (sprite) {
                        if (!this._enabledSkew()) {
                            return;
                        }
                        var s = sprite ? sprite : this;
                        this.worldTransform.c = this._degreeToSkew(this.skewAngleX);
                        this.worldTransform.b = this._degreeToSkew(this.skewAngleY);
                        this.worldTransform.tx = this.x;
                        this.worldTransform.ty = this.y;
                        this.worldTransform.decompose(this.transform);
                    };
                    return Base;
                }(Sprite));
                BattleObjects.Base = Base;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Battler = (function (_super) {
                    __extends(Battler, _super);
                    function Battler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Battler.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < 144 && y < 144;
                    };
                    Battler.prototype.draggable = function () {
                        return true;
                    };
                    Battler.prototype._initializeInternal = function (properties) {
                        this._createBattler();
                    };
                    Battler.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.overlayOffsetX);
                        this._setProperty(BattleObjects.defs.overlayOffsetY);
                        this._setProperty(BattleObjects.defs.isOverlayOnBottom);
                        this._setProperty(BattleObjects.defs.zoom);
                        this._setProperty(BattleObjects.defs.maskImage);
                        this._setProperty(BattleObjects.defs.maskImageX);
                        this._setProperty(BattleObjects.defs.maskImageY);
                    };
                    Battler.prototype._updateInternal = function () {
                    };
                    Battler.prototype._updatePropertyInternal = function () {
                    };
                    Battler.prototype._createBattler = function () {
                        this.removeChildren();
                        var context = this.getContext();
                        if (!(context["b"] instanceof Game_Battler)) {
                            return;
                        }
                        var battler = context["b"];
                        battler.setXpb();
                        var s = new BattleObjects.Components.XPStyleBattler(battler);
                        s.setBattler(battler);
                        s.setOverlayOffset({
                            x: this.overlayOffsetX,
                            y: this.overlayOffsetY,
                            onBottom: this.isOverlayOnBottom
                        });
                        this.addChild(s);
                        this._setScale(s);
                        s.mask = this._createMask();
                    };
                    Battler.prototype._createMask = function () {
                        var mask = undefined;
                        if (this.maskImage !== "") {
                            mask = new Sprite(ImageManager.loadThemeImage(this.maskImage));
                            mask.x = this.maskImageX;
                            mask.y = this.maskImageY;
                            this.parent.addChild(mask);
                        }
                        return mask;
                    };
                    return Battler;
                }(BattleObjects.Base));
                BattleObjects.Battler = Battler;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var CircleGauge = (function (_super) {
                    __extends(CircleGauge, _super);
                    function CircleGauge() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    CircleGauge.prototype.draggable = function () {
                        return true;
                    };
                    CircleGauge.prototype._initializeInternal = function (properties) {
                        this._sourceBitmap = null;
                        this._canvasPattern = null;
                        this._displayRate = null;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._createGauge, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.value.key, this._updateRate, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxValue.key, this._updateRate, this);
                        this._createGauge();
                    };
                    CircleGauge.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.fileName);
                        this._setProperty(BattleObjects.defs.startAngle);
                        this._setProperty(BattleObjects.defs.endAngle);
                        this._setProperty(BattleObjects.defs.radius);
                        this._setProperty(BattleObjects.defs.lineWidth);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                    };
                    CircleGauge.prototype._updateInternal = function () {
                        this._updateGauge();
                    };
                    CircleGauge.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.maxValue);
                    };
                    CircleGauge.prototype._createGauge = function () {
                        this._lastDrawRate = null;
                        this._updateRate();
                        this._sourceBitmap = ImageManager.loadThemeImage(this.fileName);
                        this.bitmap = new Bitmap(this._sourceBitmap.width, this._sourceBitmap.height);
                        this._createCanvasPattern();
                        this._ctx = this.bitmap.context;
                        if (!this._sourceBitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                        }
                    };
                    CircleGauge.prototype._createCanvasPattern = function () {
                        var ctx = this.bitmap.context;
                        this._canvasPattern = ctx.createPattern(this._sourceBitmap.baseTexture.source, "no-repeat");
                    };
                    CircleGauge.prototype._updateGauge = function () {
                        this._displayRate = Core.Utils.Interpolator.smooth(this._currentRate, this._displayRate, this.animationSpeed, 0.001);
                        this._drawGauge();
                    };
                    CircleGauge.prototype._updateRate = function () {
                        this._currentRate = this.value / this.maxValue;
                        if (this._displayRate === null) {
                            this._displayRate = this._currentRate;
                        }
                    };
                    CircleGauge.prototype._drawGauge = function () {
                        if (!this._ctx || this._lastDrawRate === this._displayRate) {
                            return;
                        }
                        this.bitmap.clear();
                        this._ctx.beginPath();
                        var x = this.width / 2;
                        var y = this.height / 2;
                        var startAngle = Math.radians(this.startAngle);
                        var endAngle = Math.radians(this.startAngle - (this.startAngle - this.endAngle) * this._displayRate);
                        this._ctx.arc(x, y, this.radius, startAngle, endAngle, false);
                        this._ctx.lineWidth = this.lineWidth;
                        this._ctx.strokeStyle = this._canvasPattern;
                        this._ctx.stroke();
                        this._lastDrawRate = this._displayRate;
                    };
                    return CircleGauge;
                }(BattleObjects.Base));
                BattleObjects.CircleGauge = CircleGauge;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Container = (function (_super) {
                    __extends(Container, _super);
                    function Container() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Container.prototype._initializeInternal = function (properties) {
                    };
                    Container.prototype._setOneTimeProperty = function () {
                    };
                    Container.prototype._updateInternal = function () {
                    };
                    Container.prototype._updatePropertyInternal = function () {
                    };
                    Container.prototype.containable = function () {
                        return true;
                    };
                    return Container;
                }(BattleObjects.Base));
                BattleObjects.Container = Container;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var HorizontalGauge = (function (_super) {
                    __extends(HorizontalGauge, _super);
                    function HorizontalGauge() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    HorizontalGauge.prototype.draggable = function () {
                        return true;
                    };
                    HorizontalGauge.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        var bitmap = ImageManager.loadThemeImage(this.fileName);
                        bitmap.smooth = true;
                        var nh = bitmap.height / this.maxPattern;
                        return x >= 0 && y >= 0 && x < bitmap.width && y < nh;
                    };
                    HorizontalGauge.prototype._initializeInternal = function (properties) {
                        this._displayRate = null;
                        this._gaugeWidth = 4;
                        this._gaugeHeight = 4;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._setGauge, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.value.key, this._updateRate, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxValue.key, this._updateRate, this);
                        this._setSkewAngle();
                        this._setGauge();
                    };
                    HorizontalGauge.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.maxPattern);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                        this._setProperty(BattleObjects.defs.fileName);
                        this._setProperty(BattleObjects.defs.skewAngleX);
                        this._setProperty(BattleObjects.defs.skewAngleY);
                    };
                    HorizontalGauge.prototype._updateInternal = function () {
                        this._updateGauge();
                    };
                    HorizontalGauge.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.maxValue);
                        this._setProperty(BattleObjects.defs.pattern);
                    };
                    HorizontalGauge.prototype._setGauge = function () {
                        this.bitmap = ImageManager.loadThemeImage(this.fileName);
                        this._updateRate();
                        if (!this.bitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                            return;
                        }
                        this._gaugeWidth = this.bitmap.width;
                        this._gaugeHeight = this.bitmap.height / this.maxPattern;
                    };
                    HorizontalGauge.prototype._updateRate = function () {
                        this._currentRate = this.value / this.maxValue;
                        if (this._displayRate === null) {
                            this._displayRate = this._currentRate;
                        }
                    };
                    HorizontalGauge.prototype._updateGauge = function () {
                        this._displayRate = Core.Utils.Interpolator.smooth(this._currentRate, this._displayRate, this.animationSpeed, 0.001);
                        this.setFrame(0, this._gaugeHeight * this.pattern, this._gaugeWidth * this._displayRate, this._gaugeHeight);
                    };
                    return HorizontalGauge;
                }(BattleObjects.Base));
                BattleObjects.HorizontalGauge = HorizontalGauge;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Image = (function (_super) {
                    __extends(Image, _super);
                    function Image() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Image.prototype.draggable = function () {
                        return true;
                    };
                    Image.prototype._initializeInternal = function (properties) {
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._setImage, this);
                        this._setImage();
                    };
                    Image.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.fileName);
                    };
                    Image.prototype._updateInternal = function () {
                    };
                    Image.prototype._updatePropertyInternal = function () {
                    };
                    Image.prototype._setImage = function () {
                        this.bitmap = ImageManager.loadThemeImage(this.fileName);
                        if (!this.bitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                        }
                        if (this._internalVisibility) {
                            this.setVisibility(this.fileName.length > 0);
                        }
                    };
                    return Image;
                }(BattleObjects.Base));
                BattleObjects.Image = Image;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Number = (function (_super) {
                    __extends(Number, _super);
                    function Number() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Number.prototype.draggable = function () {
                        return true;
                    };
                    Number.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < 128 && y < 128;
                    };
                    Number.prototype._initializeInternal = function (properties) {
                        this._displayValue = null;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._createDigits, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.digits.key, this._createDigits, this);
                        this._createDigits();
                    };
                    Number.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.maxPattern);
                        this._setProperty(BattleObjects.defs.digits);
                        this._setProperty(BattleObjects.defs.zeroSuppress);
                        this._setProperty(BattleObjects.defs.horizontalSpacing);
                        this._setProperty(BattleObjects.defs.horizontalAlignment);
                        this._setProperty(BattleObjects.defs.verticalAlignment);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                        this._setProperty(BattleObjects.defs.fileName);
                    };
                    Number.prototype._updateInternal = function () {
                        this._updateDisplayValue();
                    };
                    Number.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.pattern);
                    };
                    Number.prototype._updateDisplayValue = function () {
                        if (this._displayValue === null) {
                            this._displayValue = this.value;
                            this._updateDigits();
                        }
                        else if (this._displayValue !== this.value) {
                            this._displayValue = Core.Utils.Interpolator.smooth(this.value, this._displayValue, this.animationSpeed, 0.1);
                            this._updateDigits();
                        }
                    };
                    Number.prototype._createDigits = function () {
                        this.removeChildren();
                        var bitmap = ImageManager.loadThemeImage(this.fileName);
                        this._numberWidth = bitmap.width / 10;
                        this._numberHeight = bitmap.height / this.maxPattern;
                        for (var i = 0; i < this.digits; i++) {
                            var s = new Sprite(bitmap);
                            s.setFrame(0, 0, this._numberWidth, this._numberHeight);
                            this.addChild(s);
                        }
                        this._updateDigits();
                        if (!bitmap.isReady()) {
                            this.children.forEach(function (x) { return x.visible = false; });
                            this.propertyChanged.raise("fileName");
                        }
                    };
                    Number.prototype._updateDigits = function () {
                        if (this._displayValue === null) {
                            this._displayValue = this.value;
                        }
                        var v = Math.abs(Math.round(this._displayValue));
                        var nums = v.toString().split("").map(function (x) { return parseInt(x); }).reverse();
                        var y = this._numberHeight * this.pattern;
                        for (var i = 0; i < this.digits; i++) {
                            var s = this.children[i];
                            s.x = this._getNumberPosition(i + 1, this.zeroSuppress ? Math.min(this.digits, nums.length) : this.digits, this._numberWidth);
                            if (i < nums.length) {
                                s.visible = true;
                                s.setFrame(this._numberWidth * nums[i], y, this._numberWidth, this._numberHeight);
                            }
                            else if (this.zeroSuppress) {
                                s.visible = false;
                            }
                            else {
                                s.visible = true;
                                s.setFrame(0, 0, this._numberWidth, this._numberHeight);
                            }
                        }
                    };
                    Number.prototype._getNumberPosition = function (digit, length, numberWidth) {
                        var baseX;
                        switch (this.horizontalAlignment) {
                            case Core.Consts.Enums.HorizontalAlignment.Left:
                                baseX = numberWidth * length + this.horizontalSpacing * (length - 1);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Center:
                                var aw = numberWidth * length + this.horizontalSpacing * (length - 1);
                                var bw = numberWidth * this.digits + this.horizontalSpacing * (this.digits - 1);
                                baseX = bw - ((bw - aw) / 2);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Right:
                                baseX = numberWidth * this.digits + this.horizontalSpacing * (this.digits - 1);
                                break;
                            default:
                                baseX = 0;
                                break;
                        }
                        return baseX - (numberWidth * digit + this.horizontalSpacing * (digit - 1));
                    };
                    return Number;
                }(BattleObjects.Base));
                BattleObjects.Number = Number;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var PartyStatusContainer = (function (_super) {
                    __extends(PartyStatusContainer, _super);
                    function PartyStatusContainer() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    PartyStatusContainer.prototype._initializeInternal = function (properties) {
                        this._rawProperties = properties;
                        this._setPosition();
                    };
                    PartyStatusContainer.prototype._updateInternal = function () {
                        this._watchMemberChange();
                    };
                    PartyStatusContainer.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.width);
                        this._setProperty(BattleObjects.defs.height);
                        this._setProperty(BattleObjects.defs.horizontalAlignment);
                        this._setProperty(BattleObjects.defs.verticalAlignment);
                        this._setProperty(BattleObjects.defs.actorStatusWidth);
                        this._setProperty(BattleObjects.defs.actorStatusHeight);
                        this._setProperty(BattleObjects.defs.horizontalSpacing);
                        this._setProperty(BattleObjects.defs.verticalSpacing);
                        this._setProperty(BattleObjects.defs.orientation);
                        this._setProperty(BattleObjects.defs.maxRows);
                        this._setProperty(BattleObjects.defs.maxLines);
                        this._setProperty(BattleObjects.defs.isBricks);
                    };
                    PartyStatusContainer.prototype.containable = function () {
                        return true;
                    };
                    PartyStatusContainer.prototype._createBattleObject = function (object, parent) {
                        var _this = this;
                        this._lastBattleMembers = $gameParty.battleMembers();
                        this.children = [];
                        $gameParty.battleMembers().forEach(function (x) {
                            x.initHudParamCache();
                            var c = new BattleObjects.Components.BattlerContextContainer(x, _this);
                            _super.prototype._createBattleObject.call(_this, object, c);
                            x.refresh();
                        });
                    };
                    PartyStatusContainer.prototype._setPosition = function () {
                        var _this = this;
                        var positions;
                        switch (this.orientation) {
                            case Core.Consts.Enums.Orientation.Horizontal:
                                positions = this._calcAllBattlersPosition(this.maxRows, this.actorStatusWidth, this.horizontalSpacing, this.horizontalAlignment, this.actorStatusHeight, this.verticalSpacing, this.verticalAlignment, this._calcActorX, this._calcActorY, function (a, b) { return { x: a, y: b }; });
                                break;
                            case Core.Consts.Enums.Orientation.Vertical:
                                positions = this._calcAllBattlersPosition(this.maxLines, this.actorStatusHeight, this.verticalSpacing, this.verticalAlignment, this.actorStatusWidth, this.horizontalSpacing, this.horizontalAlignment, this._calcActorY, this._calcActorX, function (a, b) { return { x: b, y: a }; });
                                break;
                            default:
                                positions = [];
                                break;
                        }
                        if (positions.length === 0) {
                            return;
                        }
                        this.children.forEach(function (s, i) {
                            s.position.set(positions[i].x, positions[i].y);
                            var abs = s.absolutePosition();
                            s.b._hitTestRectangle = { x: abs.x, y: abs.y, width: _this.actorStatusWidth, height: _this.actorStatusHeight };
                        });
                    };
                    PartyStatusContainer.prototype._calcAllBattlersPosition = function (maxMainNum, mainAxisSize, mainAxisSpacing, mainAxisAlignment, subAxisSize, subAxisSpacing, subAxisAlignment, mainAxisCalcFunc, subAxisCalcFunc, positionPushFunc) {
                        var _this = this;
                        var membersLength = $gameParty.battleMembers().length;
                        var eachElementNumbers = [];
                        var maxElementNum = Math.ceil(membersLength / maxMainNum);
                        for (var i = 0; i < maxElementNum; i++) {
                            if (membersLength >= maxMainNum) {
                                eachElementNumbers.push(maxMainNum);
                                membersLength -= maxMainNum;
                            }
                            else {
                                eachElementNumbers.push(membersLength);
                            }
                        }
                        if (this.isBricks && eachElementNumbers.length >= 2) {
                            var last = eachElementNumbers[eachElementNumbers.length - 1];
                            if (last < maxMainNum) {
                                eachElementNumbers[eachElementNumbers.length - 1] = maxMainNum - 1;
                            }
                        }
                        var subNum = eachElementNumbers.length;
                        var totalSubSize = subNum * subAxisSize + (subAxisSpacing * (subNum - 1));
                        var positions = [];
                        eachElementNumbers.forEach(function (mainNum, i) {
                            var b = subAxisCalcFunc.call(_this, i, totalSubSize, subAxisAlignment);
                            var totalMainSize = mainNum * mainAxisSize + (mainAxisSpacing * (mainNum - 1));
                            for (var i_1 = 0; i_1 < mainNum; i_1++) {
                                var a = mainAxisCalcFunc.call(_this, i_1, totalMainSize, mainAxisAlignment);
                                positions.push(positionPushFunc(a, b));
                            }
                        });
                        return positions;
                    };
                    PartyStatusContainer.prototype._calcActorCoordinate = function (alignment, pos, size, actorSize, spacing, total) {
                        var base = pos * actorSize + (spacing * pos);
                        var p = 0;
                        switch (alignment) {
                            case 0:
                                p = base;
                                break;
                            case 1:
                                p = (size - total) / 2 + base;
                                break;
                            case 2:
                                p = size - total + base;
                                break;
                        }
                        return Math.floor(p);
                    };
                    PartyStatusContainer.prototype._calcActorX = function (row, totalWidth, alignment) {
                        return this._calcActorCoordinate(alignment, row, this.width, this.actorStatusWidth, this.horizontalSpacing, totalWidth);
                    };
                    PartyStatusContainer.prototype._calcActorY = function (line, totalHeight, alignment) {
                        return this._calcActorCoordinate(alignment, line, this.height, this.actorStatusHeight, this.verticalSpacing, totalHeight);
                    };
                    PartyStatusContainer.prototype._watchMemberChange = function () {
                        if (!$gameParty.battleMembers().equals(this._lastBattleMembers)) {
                            this._createBattleObject(this._rawProperties, null);
                            this._updateSpritesetBattleActorSprites();
                            this._setPosition();
                        }
                    };
                    PartyStatusContainer.prototype._updateSpritesetBattleActorSprites = function () {
                        var parent = this.parent;
                        while (!(parent instanceof Spriteset_Battle)) {
                            parent = parent.parent;
                        }
                        parent.updateActorSprites();
                    };
                    return PartyStatusContainer;
                }(BattleObjects.Base));
                BattleObjects.PartyStatusContainer = PartyStatusContainer;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Rectangle = (function (_super) {
                    __extends(Rectangle, _super);
                    function Rectangle() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Rectangle.prototype._initializeInternal = function (properties) {
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.width.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.height.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fillColor.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.gradientColor.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.isGradient.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.isVertical.key, this._drawRectangle, this);
                        this._drawRectangle();
                    };
                    Rectangle.prototype._updateInternal = function () {
                    };
                    Rectangle.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.width);
                        this._setProperty(BattleObjects.defs.height);
                        this._setProperty(BattleObjects.defs.fillColor);
                        this._setProperty(BattleObjects.defs.gradientColor);
                        this._setProperty(BattleObjects.defs.isGradient);
                        this._setProperty(BattleObjects.defs.isVertical);
                    };
                    Rectangle.prototype.draggable = function () {
                        return true;
                    };
                    Rectangle.prototype._drawRectangle = function () {
                        this.bitmap = new Bitmap(this.width, this.height);
                        var color1 = this.fillColor;
                        var color2 = this.gradientColor;
                        if (!this.isGradient) {
                            color2 = color1;
                        }
                        this.bitmap.gradientFillRect(0, 0, this.width, this.height, color1, color2, this.isVertical);
                    };
                    ;
                    return Rectangle;
                }(BattleObjects.Base));
                BattleObjects.Rectangle = Rectangle;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Root = (function (_super) {
                    __extends(Root, _super);
                    function Root() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.contextCache = {};
                        return _this;
                    }
                    Root.prototype.getContext = function () {
                        return this.contextCache;
                    };
                    return Root;
                }(BattleObjects.Base));
                BattleObjects.Root = Root;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var StateIcon = (function (_super) {
                    __extends(StateIcon, _super);
                    function StateIcon() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    StateIcon.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        var scale = this._getStateIconScale();
                        if ((this.orientation == Core.Consts.Enums.Orientation.Horizontal)) {
                            return x >= 0 && y >= 0 && x < scale * this.maxStates && y < scale;
                        }
                        else {
                            return x >= 0 && y >= 0 && x < scale && y < scale * this.maxStates;
                        }
                    };
                    StateIcon.prototype.draggable = function () {
                        return true;
                    };
                    StateIcon.prototype._initializeInternal = function (properties) {
                        StateIcon.iconDisplayNumber = 0;
                        this._lastStates = [];
                        this._lastBuffs = [];
                        this._lastIcons = [];
                        this._page = 0;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxStates.key, this._createIcons, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.stateIconSize.key, this._applyStateIconSize, this);
                        this.propertyChanged.addPropertyChanged("_sync", this._syncRelatedObjects, this);
                        this._createIcons();
                        this.propertyChanged.raise("_sync");
                    };
                    StateIcon.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.maxStates);
                        this._setProperty(BattleObjects.defs.stateIconSize);
                        this._setProperty(BattleObjects.defs.spacing);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                        this._setProperty(BattleObjects.defs.orientation);
                        this._setProperty(BattleObjects.defs.relatedObjects);
                    };
                    StateIcon.prototype._updateInternal = function () {
                        this._updateAnimation();
                    };
                    StateIcon.prototype._updatePropertyInternal = function () {
                        this._updateIcons();
                    };
                    StateIcon.prototype._initUpdateCount = function () {
                        this._updateCount = 0;
                    };
                    StateIcon.prototype._createIcons = function () {
                        this.removeChildren();
                        for (var i = 0; i < this.maxStates; i++) {
                            var s = new BattleObjects.Components.SimpleIcon();
                            this.addChild(s);
                        }
                        this._applyStateIconSize();
                    };
                    StateIcon.prototype._updateIcons = function () {
                        if (Core.Manager.isStopHUD()) {
                            return;
                        }
                        var battler = this._getBattler();
                        if (!battler._states.equals(this._lastStates) ||
                            !battler._buffs.equals(this._lastBuffs)) {
                            this._lastStates = battler._states.slice(0);
                            this._lastBuffs = battler._buffs.slice(0);
                            var newIcons = this._getBattlerAllIcons();
                            if (this._lastIcons === undefined || newIcons.equals(this._lastIcons)) {
                                return;
                            }
                            if (newIcons.length > this.maxStates && this._lastIcons.length <= this.maxStates) {
                                StateIcon.iconDisplayNumber++;
                                if (StateIcon.iconDisplayNumber === 1) {
                                    StateIcon.updateTimingOffset = Graphics.frameCount % this.animationSpeed;
                                }
                            }
                            else if (newIcons.length <= this.maxStates && this._lastIcons.length > this.maxStates) {
                                StateIcon.iconDisplayNumber--;
                            }
                            this._lastIcons = newIcons;
                            this._page = 0;
                            this._updateDisplayIcons();
                            this._syncRelatedObjects();
                        }
                    };
                    StateIcon.prototype._getBattler = function () {
                        if (!this._battler) {
                            var context = this.getContext()["b"];
                            if (context instanceof Game_Battler) {
                                this._battler = context;
                            }
                        }
                        return this._battler;
                    };
                    StateIcon.prototype._updateTiming = function () {
                        return (StateIcon.updateTimingOffset + Graphics.frameCount) % this.animationSpeed === 0;
                    };
                    StateIcon.prototype._getBattlerAllIcons = function () {
                        if (BD.Core.Manager.isStudioMode()) {
                            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                        }
                        else {
                            var context = this.getContext();
                            if (!(context["b"] instanceof Game_Battler)) {
                                return [1];
                            }
                            var battler = context["b"];
                            return battler.allIcons();
                        }
                    };
                    StateIcon.prototype._updateAnimation = function () {
                        if (this._updateTiming()) {
                            this._page = (this._page + 1) % Math.ceil(this._lastIcons.length / this.maxStates);
                            this._updateDisplayIcons();
                        }
                    };
                    StateIcon.prototype._updateDisplayIcons = function () {
                        var _this = this;
                        var icons = this._getDisplayIcons();
                        this._smoothIcons();
                        this.children.forEach(function (s, i) {
                            s.setIcon(icons[i]);
                            var space = _this.spacing * i;
                            (_this.orientation == Core.Consts.Enums.Orientation.Horizontal) ? s.position.set(i * 32 + space, 0) : s.position.set(0, i * 32 + space);
                            s.visible = (icons[i] > 0);
                        });
                    };
                    StateIcon.prototype._getDisplayIcons = function () {
                        var icons = [];
                        for (var i = 0; i < this.maxStates; i++) {
                            icons.push(this._getDisplayIcon(this._page * this.maxStates + i));
                        }
                        return icons;
                    };
                    StateIcon.prototype._getDisplayIcon = function (index) {
                        if (index < this._lastIcons.length) {
                            return this._lastIcons[index];
                        }
                        return 0;
                    };
                    StateIcon.prototype._smoothIcons = function () {
                        if (this.stateIconSize === 32) {
                            return;
                        }
                        var p = this.children[0];
                        if (p && p.bitmap.isReady) {
                            p.bitmap.smooth = true;
                        }
                    };
                    StateIcon.prototype._getStateIconScale = function () {
                        return this.stateIconSize / 32;
                    };
                    StateIcon.prototype._applyStateIconSize = function () {
                        var scale = this._getStateIconScale();
                        if (scale === 32) {
                            return;
                        }
                        this.scale.set(scale, scale);
                    };
                    StateIcon.prototype._syncRelatedObjects = function () {
                        var _this = this;
                        if (!this.relatedObjects || this.relatedObjects === "") {
                            return;
                        }
                        this.relatedObjects.split(",").map(function (x) { return x.trim(); }).forEach(function (x) {
                            var s = _this.findFamily(function (y) { return y instanceof BattleObjects.Base && y.getObjectName() === x; }, function (t) { return t.parent instanceof BattleObjects.PartyStatusContainer; });
                            if (s) {
                                s.setVisibility(_this._lastIcons.length > 0);
                            }
                        });
                    };
                    StateIcon.updateTimingOffset = 0;
                    StateIcon.iconDisplayNumber = 0;
                    return StateIcon;
                }(BattleObjects.Base));
                BattleObjects.StateIcon = StateIcon;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Text = (function (_super) {
                    __extends(Text, _super);
                    function Text() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Text.prototype.draggable = function () {
                        return true;
                    };
                    Text.prototype._initializeInternal = function (properties) {
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.text.key, this._createTextBitmap, this);
                        this._createTextBitmap();
                    };
                    Text.prototype._setOneTimeProperty = function () {
                        this._setProperty(BattleObjects.defs.maxWidth);
                        this._setProperty(BattleObjects.defs.color);
                        this._setProperty(BattleObjects.defs.outlineColor);
                        this._setProperty(BattleObjects.defs.outlineWidth);
                        this._setProperty(BattleObjects.defs.fontSize);
                        this._setProperty(BattleObjects.defs.fontFace);
                        this._setProperty(BattleObjects.defs.fontItalic);
                        this._setProperty(BattleObjects.defs.horizontalAlignment);
                    };
                    Text.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.text);
                    };
                    Text.prototype._updateInternal = function () {
                    };
                    Text.prototype._createTextBitmap = function () {
                        this._applyFont(Text.measureBitmap);
                        var width = Math.min(Text.measureBitmap.measureTextWidth(this.text), this.maxWidth);
                        this.bitmap = new Bitmap(width + this.outlineWidth * 2, this.fontSize + this.outlineWidth);
                        this._applyFont(this.bitmap);
                        this.bitmap.drawText(this.text, this.outlineWidth, 0, width, this.bitmap.height);
                        switch (this.horizontalAlignment) {
                            case Core.Consts.Enums.HorizontalAlignment.Left:
                                this.pivot.x = Math.round(this.outlineWidth);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Center:
                                this.pivot.x = Math.round(width / 2 - this.maxWidth / 2 + this.outlineWidth);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Right:
                                this.pivot.x = Math.round(width - this.maxWidth + this.outlineWidth);
                                break;
                        }
                        this.pivot.y = Math.round(this.outlineWidth / 2);
                    };
                    Text.prototype._applyFont = function (bitmap) {
                        bitmap.textColor = this.color;
                        bitmap.outlineColor = this.outlineColor;
                        bitmap.outlineWidth = this.outlineWidth;
                        bitmap.fontFace = this.fontFace;
                        bitmap.fontItalic = this.fontItalic;
                        bitmap.fontSize = this.fontSize;
                    };
                    Text.measureBitmap = new Bitmap(4, 4);
                    return Text;
                }(BattleObjects.Base));
                BattleObjects.Text = Text;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var BattlerContextContainer = (function (_super) {
                        __extends(BattlerContextContainer, _super);
                        function BattlerContextContainer(context, parent) {
                            var _this = _super.call(this, null) || this;
                            _this._battlerContext = context;
                            _this._contextCache = { b: _this._battlerContext };
                            parent.addChild(_this);
                            return _this;
                        }
                        Object.defineProperty(BattlerContextContainer.prototype, "b", {
                            get: function () {
                                return this._battlerContext;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(BattlerContextContainer.prototype, "container", {
                            get: function () {
                                return this.parent;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BattlerContextContainer.prototype.getContext = function () {
                            return this._contextCache;
                        };
                        return BattlerContextContainer;
                    }(Sprite));
                    Components.BattlerContextContainer = BattlerContextContainer;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var SimpleIcon = (function (_super) {
                        __extends(SimpleIcon, _super);
                        function SimpleIcon() {
                            var _this = _super.call(this) || this;
                            _this.setup();
                            return _this;
                        }
                        SimpleIcon.prototype.setup = function () {
                            this.bitmap = ImageManager.loadSystem("IconSet");
                            this.setIcon(0);
                        };
                        SimpleIcon.prototype.update = function () {
                        };
                        SimpleIcon.prototype.setIcon = function (iconIndex) {
                            var pw = 32;
                            var ph = 32;
                            var sx = iconIndex % 16 * pw;
                            var sy = Math.floor(iconIndex / 16) * ph;
                            this.setFrame(sx, sy, pw, ph);
                        };
                        return SimpleIcon;
                    }(Sprite));
                    Components.SimpleIcon = SimpleIcon;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
                    var Settings = Core.Settings;
                    var XPStyleBattler = (function (_super) {
                        __extends(XPStyleBattler, _super);
                        function XPStyleBattler(actor) {
                            var _this = _super.call(this, actor) || this;
                            _this.initVisibility();
                            return _this;
                        }
                        Object.defineProperty(XPStyleBattler.prototype, "_actor", {
                            get: function () {
                                return this._enemy;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        XPStyleBattler.prototype.initMembers = function () {
                            _super.prototype.initMembers.call(this);
                            this._battlerGraphic = null;
                            this._faceName = "";
                            this._faceIndex = 0;
                            this._faceFrameX = 0;
                            this._faceFrameY = 0;
                            this._overlayOffset = {
                                x: 0,
                                y: 0,
                                onBottom: false
                            };
                            this._dummyTarget = new Sprite_Base();
                        };
                        XPStyleBattler.prototype.initVisibility = function () {
                            _super.prototype.initVisibility.call(this);
                            if (this._actor.isAlive()) {
                                this._appeared = true;
                                this.opacity = 255;
                            }
                            else {
                                this._appeared = this._actor.existDeadBattlerGraphic();
                                this.opacity = this._appeared ? 255 : 0;
                            }
                        };
                        XPStyleBattler.prototype.setupEffect = function () {
                            if (Core.Manager.isStopHUD()) {
                                return;
                            }
                            _super.prototype.setupEffect.call(this);
                        };
                        XPStyleBattler.prototype.updateBitmap = function () {
                            var actor = this._battler;
                            if (actor.guardBattlerGraphicDuration() === 0) {
                                actor._guardBattlerGraphicDuration = -1;
                                if (Settings.enableSideVidwBattler()) {
                                    actor.refreshBattlerGraphic();
                                }
                                else {
                                    actor.clearMotion();
                                    actor.requestMotionRefresh();
                                }
                            }
                            var battlerGraphic = actor.battlerGraphics();
                            if (battlerGraphic.fileName !== null) {
                                this._faceName = null;
                                if (!battlerGraphicManager.areEqualBattlerGraphic(this._battlerGraphic, battlerGraphic)) {
                                    var b = battlerGraphicManager.battlerGraphic(actor).bitmap;
                                    if (b.isReady()) {
                                        this.bitmap = b;
                                        this._battlerGraphic = battlerGraphic;
                                        this._setFaceFramePosition(this._battlerGraphic.faceIndex);
                                    }
                                    else if (!this.bitmap) {
                                        this.bitmap = ImageManager.loadEmptyBitmap();
                                    }
                                    this._smoothBitmap();
                                }
                            }
                            else {
                                this._battlerGraphic = null;
                                var name_1 = actor.faceName();
                                var index = actor.faceIndex();
                                if (this._faceName !== name_1 || this._faceIndex !== index) {
                                    var b = battlerGraphicManager.battlerGraphic(this._actor).bitmap;
                                    if (b.isReady()) {
                                        this._faceName = name_1;
                                        this._faceIndex = index;
                                        this.bitmap = b;
                                    }
                                    else if (!this.bitmap) {
                                        this.bitmap = ImageManager.loadEmptyBitmap();
                                    }
                                    this._setFaceFramePosition(index);
                                    this._smoothBitmap();
                                }
                            }
                        };
                        XPStyleBattler.prototype._smoothBitmap = function () {
                            if (this.parent["zoom"] !== 100) {
                                this.bitmap.smooth = true;
                            }
                        };
                        XPStyleBattler.prototype.updateFormation = function () {
                            if (Settings.enableSideVidwBattler()) {
                                return;
                            }
                            _super.prototype.updateFormation.call(this);
                        };
                        XPStyleBattler.prototype._setFaceFramePosition = function (faceIndex) {
                            this._faceFrameX = (faceIndex % 4 * 144) + XPStyleBattler.FrameOffset;
                            this._faceFrameY = (Math.floor(faceIndex / 4) * 144) + (XPStyleBattler.FrameOffset);
                        };
                        XPStyleBattler.prototype.setHome = function (x, y) {
                            this._homeX = 0;
                            this._homeY = 0;
                            this.updatePosition();
                        };
                        ;
                        XPStyleBattler.prototype.updatePosition = function () {
                            _super.prototype.updatePosition.call(this);
                            this._setScreenPosition();
                        };
                        XPStyleBattler.prototype.updateFrame = function () {
                            Sprite_Battler.prototype.updateFrame.call(this);
                            if (!this._battlerGraphic || (this._battlerGraphic && this._battlerGraphic.faceIndex > -1)) {
                                var frameHeight = XPStyleBattler.FrameSize;
                                if (this._effectType === "bossCollapse") {
                                    frameHeight = this._effectDuration;
                                }
                                this.setFrame(this._faceFrameX, this._faceFrameY, XPStyleBattler.FrameSize, frameHeight);
                            }
                            else {
                                var frameHeight = this.bitmap.height;
                                if (this._effectType === "bossCollapse") {
                                    frameHeight = this._effectDuration;
                                }
                                this.setFrame(0, 0, this.bitmap.width, frameHeight);
                            }
                        };
                        XPStyleBattler.prototype.startBossCollapse = function () {
                            _super.prototype.startBossCollapse.call(this);
                            this._effectDuration = this.height;
                        };
                        XPStyleBattler.prototype.createStateIconSprite = function () {
                            var dummy = { setup: function (_) { return; }, scale: new Point(1, 1) };
                            this._stateIconSprite = dummy;
                        };
                        XPStyleBattler.prototype.updateStateSprite = function () {
                        };
                        XPStyleBattler.prototype.setOverlayOffset = function (offset) {
                            this._overlayOffset = offset;
                        };
                        XPStyleBattler.prototype.getOverlayOffset = function () {
                            return this._overlayOffset;
                        };
                        XPStyleBattler.prototype.damageOffsetX = function () {
                            return this._overlayOffset.x;
                        };
                        XPStyleBattler.prototype.damageOffsetY = function () {
                            if (this._overlayOffset.onBottom) {
                                return this._overlayOffset.y;
                            }
                            else {
                                return -Math.round(this.height * 0.9) + this._overlayOffset.y;
                            }
                        };
                        XPStyleBattler.prototype._setScreenPosition = function () {
                            var pos = this.absolutePosition();
                            this._battler.setScreenPosition(pos.x, pos.y);
                            this._battler._cursorX = pos.x + this._overlayOffset.x;
                            if (this._overlayOffset.onBottom) {
                                this._battler._cursorY = pos.y + this._overlayOffset.y;
                            }
                        };
                        XPStyleBattler.prototype.setupAnimation = function () {
                            var _this = this;
                            _super.prototype.setupAnimation.call(this);
                            if (!Settings.enableSideVidwBattler() && !Settings.battlerGraphic().enableAnimation) {
                                this._animationSprites.forEach(function (sprite) {
                                    if (sprite.visible) {
                                        sprite.visible = false;
                                        sprite.overrideTarget(_this._dummyTarget);
                                    }
                                });
                            }
                        };
                        XPStyleBattler.prototype.startAnimation = function (animation, mirror, delay) {
                            var sprite = new Sprite_Animation();
                            sprite.setup(this._effectTarget, animation, mirror, delay);
                            this.parent.parent.parent.addChild(sprite);
                            this._animationSprites.push(sprite);
                        };
                        XPStyleBattler.FrameOffset = 1;
                        XPStyleBattler.FrameSize = 142;
                        return XPStyleBattler;
                    }(Sprite_Enemy));
                    Components.XPStyleBattler = XPStyleBattler;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD_1) {
            var Base = HUD_1.BattleObjects.Base;
            var Root = HUD_1.BattleObjects.Root;
            var isStudioMode = BD.Core.Manager.isStudioMode;
            var HUD = (function (_super) {
                __extends(HUD, _super);
                function HUD() {
                    var _this = _super.call(this, null) || this;
                    Core.DamagePopup.DamagePopupFactory.initialize();
                    _this.setFrame(0, 0, Graphics.width, Graphics.height);
                    _this.createEditView();
                    _this.createBattleObjects();
                    _this.addChild(new Core.Targeting.TargetCursorLayer(Core.Settings.targetCursor()));
                    _this.addChild(new Core.DamagePopup.PopupLayer());
                    _this.update();
                    return _this;
                }
                HUD.prototype.createEditView = function () {
                    if (!BD.Core.Manager.isStudioMode()) {
                        return;
                    }
                    this._bg = new BD.Studio.Screen.BackGround();
                    this.addChild(this._bg);
                };
                HUD.prototype.createBattleObjects = function () {
                    $gameParty.battleMembers().forEach(function (x) {
                        x.removeXpb();
                    });
                    var json;
                    if (Core.Manager.isGameMode()) {
                        json = Core.Settings.hud();
                    }
                    else {
                        json = sessionStorage["bdStudioPreview"];
                    }
                    if (typeof (json) === "string") {
                        json = JSON.parse(json);
                    }
                    else if (typeof (json) === "undefined") {
                        return;
                    }
                    var root = new Root(json);
                    root.setup(this);
                    this._battleObject = root;
                    this.addChild(this._battleObject);
                };
                HUD.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._battleObject.visible = $gameTemp.isVisibleBDHUD();
                    if (isStudioMode()) {
                        this.updateTouchBattleObjects();
                    }
                };
                HUD.prototype.updateTouchBattleObjects = function () {
                    if (this._battleObject == null) {
                        return;
                    }
                    var firstFoundObject = _.find(this._battleObject.flatten().reverse().filter(function (x) { return x instanceof Base; }), function (sprite) {
                        return sprite.dragging();
                    });
                    if (firstFoundObject != null) {
                        firstFoundObject.updatePressCount();
                    }
                    _.chain(this._battleObject.children)
                        .filter(function (sprite) { return sprite !== firstFoundObject; })
                        .forEach(function (sprite) { sprite.resetPressCount(); });
                };
                return HUD;
            }(Sprite));
            HUD_1.HUD = HUD;
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_BattleManager_initMembers = BattleManager.initMembers;
    BattleManager.initMembers = function () {
        _bdc_BattleManager_initMembers.call(this);
        this._battleEndFadeOut = false;
    };
    var _bdc_BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        this._battleEndFadeOut = false;
        _bdc_BattleManager_startBattle.call(this);
    };
    var _bdc_BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
    BattleManager.updateBattleEnd = function () {
        _bdc_BattleManager_updateBattleEnd.call(this);
        this._battleEndFadeOut = true;
    };
    BattleManager.isBattleEndFadeOut = function () {
        return this._battleEndFadeOut;
    };
})();

(function () {
    var Settings = BD.Core.Settings;
    var BattlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    var Kind = BD.Core.Consts.Enums.ConditionalBattlerGraphicKind;
    Game_Actor.prototype.battlerGraphics = function () {
        if (this._battlerGraphic === undefined) {
            this._battlerGraphic = this.baseBattlerGraphics();
        }
        return this._battlerGraphic;
    };
    Game_Actor.prototype.baseBattlerGraphics = function () {
        if (this._baseBattlerGraphic === undefined) {
            var bgRaw = BD.Core.RPGExtension.getBattlerGraphic(this.actor());
            this._baseBattlerGraphic = BattlerGraphicManager.createBattlerGraphic(bgRaw);
        }
        return this._baseBattlerGraphic;
    };
    Game_Actor.prototype.conditionalBattlerGraphics = function () {
        if (this._conditionalBattlerGraphics === undefined) {
            var conditions = BD.Core.RPGExtension.getConditionalBattlerGraphicsRaw(this.actor());
            this._conditionalBattlerGraphics = conditions.map(function (x) {
                return BattlerGraphicManager.createConditionalBattlerGraphic(x.fileName, x.kind, x.idOrTag, x.priority);
            }).filter(function (x) { return x !== null; });
        }
        return this._conditionalBattlerGraphics;
    };
    Game_Actor.prototype.setBattlerGraphics = function (faceName, faceIndex) {
        if (faceIndex === void 0) { faceIndex = -1; }
        this._baseBattlerGraphic = {
            fileName: faceName,
            faceIndex: faceIndex
        };
        this.refreshBattlerGraphic();
    };
    Game_Actor.prototype.refreshBattlerGraphic = function () {
        var c = BattlerGraphicManager.determineCandidate(this);
        if (this._guardBattlerGraphicDuration >= 0) {
            if (c && c.condition.kind === Kind.damage) {
                this._guardBattlerGraphicDuration = BattlerGraphicManager.damageDuration();
            }
            return;
        }
        if (c == null) {
            this._battlerGraphic = this._baseBattlerGraphic;
        }
        else {
            this._battlerGraphic = c.battlerGraphic;
            if (c.condition.kind === Kind.damage) {
                this._guardBattlerGraphicDuration = BattlerGraphicManager.damageDuration();
            }
        }
    };
    Game_Actor.prototype.existDeadBattlerGraphic = function () {
        var d = this.conditionalBattlerGraphics().find(function (x) { return x.condition.kind === Kind.dead; });
        return d !== undefined;
    };
    Game_Actor.prototype.guardBattlerGraphicDuration = function () {
        if (!this._guardBattlerGraphicDuration) {
            return -1;
        }
        if (this._guardBattlerGraphicDuration > 1) {
            this._guardBattlerGraphicDuration--;
        }
        else if (this._guardBattlerGraphicDuration === 1 && (this._motionType !== "damage" || !Settings.enableSideVidwBattler())) {
            this._guardBattlerGraphicDuration = 0;
        }
        return this._guardBattlerGraphicDuration;
    };
    Game_Actor.prototype.setConditionalBattlerGraphics = function (fileName, faceIndex, kind, idOrTag, priority) {
        this.conditionalBattlerGraphics();
        var f = this._conditionalBattlerGraphics.find(function (x) {
            if (x.condition.kind === Kind[kind.toLowerCase()] && x.condition.idOrTag === idOrTag) {
                return true;
            }
        });
        if (f) {
            f.battlerGraphic.fileName = fileName;
            f.battlerGraphic.faceIndex = faceIndex;
            f.condition.priority = priority;
            this.refreshBattlerGraphic();
            return;
        }
        var cbg = {
            condition: {
                kind: Kind[kind.toLowerCase()],
                idOrTag: idOrTag,
                priority: priority
            },
            battlerGraphic: {
                fileName: fileName,
                faceIndex: faceIndex.clamp(-1, 128)
            }
        };
        this._conditionalBattlerGraphics.push(cbg);
        this.refreshBattlerGraphic();
    };
    Game_Actor.prototype.removeConditionalBattlerGraphics = function (kind, idOrTag) {
        this.conditionalBattlerGraphics();
        var f = this._conditionalBattlerGraphics.find(function (x) {
            if (x.condition.kind === Kind[kind.toLowerCase()] && x.condition.idOrTag === idOrTag) {
                return true;
            }
        });
        if (f) {
            this._conditionalBattlerGraphics =
                this._conditionalBattlerGraphics.filter(function (x) { return x !== f; });
            this.refreshBattlerGraphic();
            return;
        }
    };
    Game_Actor.prototype.resetBattlerGraphic = function () {
        this._baseBattlerGraphic = undefined;
        this._conditionalBattlerGraphics = undefined;
        this._guardBattlerGraphicDuration = undefined;
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_clearMotion = Game_Actor.prototype.clearMotion;
    Game_Actor.prototype.clearMotion = function () {
        _bdc_Game_Actor_clearMotion.apply(this, arguments);
        if (!this._guardBattlerGraphicDuration) {
            this._guardBattlerGraphicDuration = -1;
        }
    };
    var _bdc_Game_Actor_requestMotion = Game_Actor.prototype.requestMotion;
    Game_Actor.prototype.requestMotion = function (motionType) {
        _bdc_Game_Actor_requestMotion.apply(this, arguments);
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_requestMotionRefresh = Game_Actor.prototype.requestMotionRefresh;
    Game_Actor.prototype.requestMotionRefresh = function () {
        _bdc_Game_Actor_requestMotionRefresh.apply(this, arguments);
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_performActionStart = Game_Actor.prototype.performActionStart;
    Game_Actor.prototype.performActionStart = function (action) {
        _bdc_Game_Actor_performActionStart.apply(this, arguments);
        if (!Settings.enableSideVidwBattler()) {
            this.requestEffect("whiten");
        }
    };
    Game_Actor.prototype.setScreenPosition = function (x, y) {
        this._screenX = x;
        this._screenY = y;
    };
    Game_Actor.prototype.screenX = function () {
        return (this._screenX === undefined) ? 0 : this._screenX;
    };
    Game_Actor.prototype.screenY = function () {
        return (this._screenY === undefined) ? 0 : this._screenY;
    };
    Game_Actor.prototype.performCollapse = function () {
        Game_Battler.prototype.performCollapse.apply(this, arguments);
        if (!$gameParty.inBattle()) {
            return;
        }
        switch (this.collapseType()) {
            case 0:
                if (!this.existDeadBattlerGraphic()) {
                    this.requestEffect("collapse");
                }
                SoundManager.playActorCollapse();
                break;
            case 1:
                this.requestEffect("bossCollapse");
                SoundManager.playBossCollapse1();
                break;
            case 2:
                if (!this.existDeadBattlerGraphic()) {
                    this.requestEffect("instantCollapse");
                }
                break;
        }
    };
    Game_Actor.prototype.isSpriteVisible = function () {
        return true;
    };
    Game_Actor.prototype.initHudParamCache = function () {
        this._paramCache = new Array(2);
    };
    var _bdc_Game_Actor_onBattleEnd = Game_Actor.prototype.onBattleEnd;
    Game_Actor.prototype.onBattleEnd = function () {
        _bdc_Game_Actor_onBattleEnd.apply(this, arguments);
        this._paramCache = undefined;
    };
    var _bdc_Game_Actor_refresh = Game_Actor.prototype.refresh;
    Game_Actor.prototype.refresh = function () {
        if ($gameParty.inBattle()) {
            this.initHudParamCache();
        }
        _bdc_Game_Actor_refresh.apply(this, arguments);
    };
    Game_Actor.prototype.hasXpb = function () {
        return this._hasXpbSprite || false;
    };
    Game_Actor.prototype.setXpb = function () {
        this._hasXpbSprite = true;
    };
    Game_Actor.prototype.removeXpb = function () {
        this._hasXpbSprite = false;
        this._cursorX = undefined;
        this._cursorY = undefined;
    };
    Game_Actor.prototype._hudParam = function (paramId) {
        var cache = this._paramCache[paramId];
        if (cache === undefined) {
            this._paramCache[paramId] = Game_Actor.prototype.param.apply(this, arguments);
            return this._paramCache[paramId];
        }
        return cache;
    };
    Game_Actor.prototype.hudMhp = function () {
        return this._hudParam(0);
    };
    Game_Actor.prototype.hudMmp = function () {
        return this._hudParam(1);
    };
    Game_Actor.prototype.hudHpNumberPattern = function () {
        if (this._hp === 0) {
            return 2;
        }
        else if (this._hp < this.hudMhp() / 4) {
            return 1;
        }
        else {
            return 0;
        }
    };
    Game_Actor.prototype.enemy = function () {
        return this.actor();
    };
})();

(function () {
    Game_Battler.prototype.screenX = function () {
        return 0;
    };
    Game_Battler.prototype.screenY = function () {
        return 0;
    };
})();

(function () {
    var _bdc_Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _bdc_Game_Temp_initialize.call(this);
        this._isVisibleBDHUD = true;
    };
    Game_Temp.prototype.isVisibleBDHUD = function () {
        return this._isVisibleBDHUD;
    };
    Game_Temp.prototype.hideBDHUD = function () {
        this._isVisibleBDHUD = false;
    };
    Game_Temp.prototype.showBDHUD = function () {
        this._isVisibleBDHUD = true;
    };
})();


(function () {
    var _bdc_Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
    Sprite_Actor.prototype.setActorHome = function (index) {
        _bdc_Sprite_Actor_setActorHome.call(this, index);
        this._battler.setScreenPosition(this._homeX, this._homeY);
    };
})();

(function () {
    Sprite_Animation.prototype.overrideTarget = function (newTarget) {
        this._target = newTarget;
    };
})();


(function () {
    var _bdc_Spriteset_Battle_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer;
    Spriteset_Battle.prototype.createUpperLayer = function () {
        _bdc_Spriteset_Battle_createUpperLayer.call(this);
        this.createHUDSprite();
    };
    var _bdc_Spriteset_Battle_update = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function () {
        _bdc_Spriteset_Battle_update.call(this);
        this.updateHUDSprite();
    };
    var mogActorPictureCM = function () {
        this._hudField = new Sprite();
        this._hudField.z = 10;
        var spriteSet = this.children[0];
        var bdHud = spriteSet.children.pop();
        spriteSet.addChild(this._hudField);
        spriteSet.addChild(bdHud);
    };
    Spriteset_Battle.prototype.createHUDSprite = function () {
        if (Scene_Battle.prototype.createHudField !== undefined &&
            Scene_Battle.prototype.createHudField !== mogActorPictureCM) {
            Scene_Battle.prototype.createHudField = mogActorPictureCM;
        }
        if (this._hudSprite !== undefined) {
            this.removeChild(this._hudSprite);
        }
        this._hudSprite = new BD.Core.HUD.HUD();
        this.addChild(this._hudSprite);
        this.updateActorSprites();
    };
    Spriteset_Battle.prototype.updateActorSprites = function () {
        if (BD.Core.Settings.enableSideVidwBattler()) {
            return;
        }
        var s = this._hudSprite
            .flatten()
            .filter(function (x) { return x instanceof BD.Core.HUD.BattleObjects.Components.XPStyleBattler; });
        this._actorSprites = s;
    };
    Spriteset_Battle.prototype.updateHUDSprite = function () {
        if (BD.Core.Manager.isStudioMode() && BD.Studio.Utilities.RmvUtility.onrender) {
            BD.Studio.Utilities.RmvUtility.onrender = false;
            this.createHUDSprite();
        }
    };
    var _bdc_Spriteset_Battle_createActors = Spriteset_Battle.prototype.createActors;
    Spriteset_Battle.prototype.createActors = function () {
        if (BD.Core.Settings.enableSideVidwBattler()) {
            _bdc_Spriteset_Battle_createActors.call(this);
        }
        else {
            this._actorSprites = [];
        }
    };
})();

(function () {
    BattleManager.displayStartMessages = function () {
        if (BD.Core.Settings.battleMessage().enemyEmergeMessage) {
            $gameTroop.enemyNames().forEach(function (name) {
                $gameMessage.add(TextManager.emerge.format(name));
            });
        }
        if (this._preemptive) {
            $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
        }
        else if (this._surprise) {
            $gameMessage.add(TextManager.surprise.format($gameParty.name()));
        }
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Message;
        (function (Message) {
            var SimpleBattleLog;
            (function (SimpleBattleLog) {
                var HorizontalAlignment = Core.Consts.Enums.HorizontalAlignment;
                var ActionInformationWindow = (function (_super) {
                    __extends(ActionInformationWindow, _super);
                    function ActionInformationWindow() {
                        var _this = _super.call(this, 1) || this;
                        _this._item = null;
                        return _this;
                    }
                    ActionInformationWindow.prototype.clear = function () {
                        _super.prototype.clear.call(this);
                        this.setItem(null);
                    };
                    ;
                    ActionInformationWindow.prototype.refresh = function () {
                        this.contents.clear();
                        this.resetTextColor();
                        this.resetFontSettings();
                        var drawIcon = Core.Settings.battleMessage().simpleBattleLog.drawIcon;
                        var needIcon = drawIcon && this._item.iconIndex > 0;
                        var itemWidth = this._measureItemWidth(needIcon);
                        var desc = this._getDescription();
                        var descWidth = this._measureDescriptionWidth(desc);
                        var align = Core.Settings.battleMessage().simpleBattleLog.align;
                        this._drawActionInformation(itemWidth, descWidth, needIcon, desc, align);
                    };
                    ;
                    ActionInformationWindow.prototype._setDescriptionFont = function () {
                        var fontSize = Core.Settings.battleMessage().simpleBattleLog.descriptionFontSize;
                        if (fontSize > 0) {
                            this.contents.fontSize = fontSize;
                        }
                    };
                    ActionInformationWindow.prototype._getDescription = function () {
                        var desc = Core.RPGExtension.getActionDescription(this._item);
                        if (desc.length > 0) {
                            var delimiter = Core.Settings.battleMessage().simpleBattleLog.descriptionDelimiter;
                            return delimiter + desc;
                        }
                        return "";
                    };
                    ActionInformationWindow.prototype._measureItemWidth = function (needIcon) {
                        this.resetFontSettings();
                        var itemWidth = this.contents.measureTextWidth(this._item.name);
                        if (needIcon && this._item.iconIndex > 0) {
                            itemWidth += 32 + 4;
                        }
                        return itemWidth;
                    };
                    ActionInformationWindow.prototype._measureDescriptionWidth = function (description) {
                        this._setDescriptionFont();
                        var descWidth = 0;
                        if (description.length > 0) {
                            descWidth = this.contents.measureTextWidth(description);
                        }
                        return descWidth;
                    };
                    ActionInformationWindow.prototype._drawActionInformation = function (itemWidth, descWidth, needIcon, description, align) {
                        this.resetFontSettings();
                        var itemX = this._calcDrawX(itemWidth + descWidth, align);
                        if (needIcon && this._item.iconIndex > 0) {
                            this.drawItemName(this._item, itemX, 0, itemWidth);
                        }
                        else {
                            this.drawText(this._item.name, itemX, 0, itemWidth + 8, "left");
                        }
                        this._setDescriptionFont();
                        var descX = itemX + itemWidth;
                        this.drawText(description, descX, 0, descWidth, "left");
                    };
                    ActionInformationWindow.prototype._calcDrawX = function (totalWidth, align) {
                        switch (align) {
                            case HorizontalAlignment.Center:
                                var x = this.contentsWidth() / 2 - totalWidth / 2;
                                if (this._item.iconIndex > 0) {
                                    x -= 16;
                                }
                                return x;
                            case HorizontalAlignment.Right:
                                return this.contentsWidth() - totalWidth - 4;
                            default:
                                return 0;
                        }
                    };
                    ActionInformationWindow.prototype.setText = function (text) {
                    };
                    ActionInformationWindow.prototype.setItem = function (item) {
                        if (this._item === item) {
                            return;
                        }
                        this._item = item;
                        this.refresh();
                    };
                    return ActionInformationWindow;
                }(Window_Help));
                SimpleBattleLog.ActionInformationWindow = ActionInformationWindow;
            })(SimpleBattleLog = Message.SimpleBattleLog || (Message.SimpleBattleLog = {}));
        })(Message = Core.Message || (Core.Message = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _bdc_Scene_Battle_createAllWindows.call(this);
        this.createActionInformationWindow();
    };
    Scene_Battle.prototype.createActionInformationWindow = function () {
        this._actionInformationWindow = new BD.Core.Message.SimpleBattleLog.ActionInformationWindow();
        this._actionInformationWindow.visible = false;
        this.addWindow(this._actionInformationWindow);
        this._logWindow.actionInformationWindow = this._actionInformationWindow;
    };
})();

(function () {
    var Settings = BD.Core.Settings;
    var _bdc_Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
    Window_BattleLog.prototype.startAction = function (subject, action, targets) {
        this._showActionInformation(subject, action);
        if (this._isSimpleBattleLog() && action.item().scope === 0) {
            this.push("anyWait", _bdc_Window_BattleLog_messageSpeed.call(this) * 3);
        }
        _bdc_Window_BattleLog_startAction.call(this, subject, action, targets);
    };
    var _bdc_Window_BattleLog_endAction = Window_BattleLog.prototype.endAction;
    Window_BattleLog.prototype.endAction = function (subject) {
        if (Settings.isSimpleBattleLog()) {
            this.push("waitForBossCollapse");
            this._hideActionInformation();
            _bdc_Window_BattleLog_endAction.call(this, subject);
        }
        else {
            this._hideActionInformation();
            _bdc_Window_BattleLog_endAction.call(this, subject);
            this.push("waitForBossCollapse");
        }
    };
    Window_BattleLog.prototype._showActionInformation = function (subject, action) {
        if (!this._isSimpleBattleLog()) {
            return;
        }
        if (action.isSkill()) {
            var id = action.item().id;
            var displayAttack = Settings.battleMessage().simpleBattleLog.displayAttack;
            if (!displayAttack && id === subject.attackSkillId()) {
                return;
            }
            var displayGuard = Settings.battleMessage().simpleBattleLog.displayGuard;
            if (!displayGuard && id === subject.guardSkillId()) {
                return;
            }
        }
        this.actionInformationWindow.setItem(action.item());
        this.actionInformationWindow.show();
    };
    Window_BattleLog.prototype._hideActionInformation = function () {
        if (!this._isSimpleBattleLog()) {
            return;
        }
        this.actionInformationWindow.hide();
    };
    Window_BattleLog.prototype._isSimpleBattleLog = function () {
        var useSimpleBattleLog = Settings.battleMessage().simpleBattleLog.useSimpleBattleLog;
        return (useSimpleBattleLog &&
            this.actionInformationWindow !== undefined);
    };
    var _bdc_Window_BattleLog_refresh = Window_BattleLog.prototype.refresh;
    Window_BattleLog.prototype.refresh = function () {
        if (this._isSimpleBattleLog()) {
            return;
        }
        _bdc_Window_BattleLog_refresh.call(this);
    };
    var _bdc_Window_BattleLog_drawLineText = Window_BattleLog.prototype.drawLineText;
    Window_BattleLog.prototype.drawLineText = function (index) {
        if (this._isSimpleBattleLog()) {
            return;
        }
        _bdc_Window_BattleLog_drawLineText.call(this, index);
    };
    var _bdc_Window_BattleLog_messageSpeed = Window_BattleLog.prototype.messageSpeed;
    Window_BattleLog.prototype.messageSpeed = function () {
        if (this._isSimpleBattleLog()) {
            return 1;
        }
        return _bdc_Window_BattleLog_messageSpeed.call(this);
    };
    var _bdc_Window_BattleLog_displayActionResults = Window_BattleLog.prototype.displayActionResults;
    Window_BattleLog.prototype.displayActionResults = function (subject, target) {
        _bdc_Window_BattleLog_displayActionResults.call(this, subject, target);
        if (this._isSimpleBattleLog() && target.result().used) {
            this.push("anyWait", _bdc_Window_BattleLog_messageSpeed.call(this));
        }
    };
    var _bdc_Window_BattleLog_updateWait = Window_BattleLog.prototype.updateWait;
    Window_BattleLog.prototype.updateWait = function () {
        var waitMode = this._waitMode;
        var waiting = _bdc_Window_BattleLog_updateWait.apply(this, arguments);
        if (waitMode === "bossCollapse") {
            waiting = this._spriteset.isBossCollapsing();
            if (!waiting) {
                this._waitMode = "";
            }
            else {
                this.waitForBossCollapse();
            }
        }
        return waiting;
    };
    var _bdc_Window_BattleLog_startTurn = Window_BattleLog.prototype.startTurn;
    Window_BattleLog.prototype.startTurn = function () {
        _bdc_Window_BattleLog_startTurn.call(this);
        if (!this._isSimpleBattleLog()) {
            this._methods.pop();
            this.push("anyWait", Math.round(this.messageSpeed()) / 2);
        }
    };
    Window_BattleLog.prototype.anyWait = function (wait) {
        if (wait === void 0) { wait = 12; }
        this._waitCount = wait;
    };
    Window_BattleLog.prototype.waitForBossCollapse = function () {
        this.setWaitMode("bossCollapse");
    };
})();

(function () {
    var Settings = BD.Core.Settings.minorFixes;
    var _bdc_Sprite_Battler_updateSelectionEffect = Sprite_Battler.prototype.updateSelectionEffect;
    Sprite_Battler.prototype.updateSelectionEffect = function () {
        if (Settings().enableSelectionEffect) {
            _bdc_Sprite_Battler_updateSelectionEffect.apply(this, arguments);
        }
    };
})();

(function () {
    var _bdc_BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        this._initTargetedBattler();
        _bdc_BattleManager_startBattle.call(this);
    };
    var _bdc_BattleManager_endBattle = BattleManager.endBattle;
    BattleManager.endBattle = function (result) {
        _bdc_BattleManager_endBattle.call(this, result);
        this._initTargetedBattler();
    };
    BattleManager._initTargetedBattler = function () {
        this.lastTargetedActor = null;
        this.lastTargetedEnemy = null;
    };
    var _bdc_BattleManager_startInput = BattleManager.startInput;
    BattleManager.startInput = function () {
        _bdc_BattleManager_startInput.call(this);
        this._startInputCallback.forEach(function (x) { return x[0].call(x[1]); });
    };
    BattleManager.clearStartInputCallback = function () {
        this._startInputCallback = [];
    };
    BattleManager.registerStartInputCallback = function (callback, context) {
        this._startInputCallback.push([callback, context]);
    };
})();

(function () {
    var sideView = BD.Core.Settings.enableSideVidwBattler;
    var _bdc_Game_Action_makeTargets = Game_Action.prototype.makeTargets;
    Game_Action.prototype.makeTargets = function () {
        var target = _bdc_Game_Action_makeTargets.call(this);
        if (this.subject().isActor() &&
            this.isForOpponent() &&
            this.isForAll()) {
            return BD.Core.Utils.sortTroopByX(target, sideView());
        }
        else {
            return target;
        }
    };
    var _bdc_Game_Action_needsSelection = Game_Action.prototype.needsSelection;
    Game_Action.prototype.needsSelection = function () {
        if (BD.Core.Settings.targetCursor().checkSelection) {
            return !this.checkItemScope([0]);
        }
        return _bdc_Game_Action_needsSelection.apply(this, arguments);
    };
})();

(function () {
    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    Game_Actor.prototype.cursorX = function () {
        if (this._cursorX !== undefined) {
            return this._cursorX;
        }
        else {
            return this.screenX();
        }
    };
    Game_Actor.prototype.cursorY = function () {
        if (this._cursorY !== undefined) {
            return this._cursorY;
        }
        else {
            var h = battlerGraphicManager.battlerGraphic(this).height;
            return this.screenY() - h;
        }
    };
    Game_Actor.prototype.hitTestRectangle = function () {
        if (this._hitTestRectangle) {
            return this._hitTestRectangle;
        }
        var x = this.screenX() - 144 / 2;
        var y = this.screenY() - 144;
        var width = 192;
        var height = 144;
        return new Rectangle(x, y, width, height);
    };
})();

(function () {
    Game_Battler.prototype.cursorX = function () {
        return 0;
    };
    Game_Battler.prototype.cursorY = function () {
        return 0;
    };
    Game_Battler.prototype.hitTestRectangle = function () {
        return new Rectangle(0, 0, 0, 0);
    };
    Game_Battler.prototype.changeTouchInputStatus = function (status) {
        this._touchInputStatus = status;
    };
    Game_Battler.prototype.touchInputStatus = function () {
        return this._touchInputStatus || 0;
    };
})();

(function () {
    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    Game_Enemy.prototype.cursorX = function () {
        if (this._cursorX !== undefined) {
            return this._cursorX;
        }
        else {
            return this.screenX();
        }
    };
    Game_Enemy.prototype.cursorY = function () {
        if (this._cursorY !== undefined) {
            return this._cursorY;
        }
        else {
            var h = battlerGraphicManager.battlerGraphic(this).height;
            return this.screenY() - h;
        }
    };
    Game_Enemy.prototype.hitTestRectangle = function () {
        if (this._hitTestRectangle) {
            return this._hitTestRectangle;
        }
        var bitmap = battlerGraphicManager.battlerGraphic(this).bitmap;
        var x = this.screenX() - bitmap.width / 2;
        var y = this.screenY() - bitmap.height;
        var width = bitmap.width;
        var height = bitmap.height;
        return new Rectangle(x, y, width, height);
    };
})();

Game_Unit.prototype.selectAll = function () {
    this.members().forEach(function (member) { return member.select(); });
};

(function () {
    var _bdc_Scene_Battle_initialize = Scene_Battle.prototype.initialize;
    Scene_Battle.prototype.initialize = function () {
        _bdc_Scene_Battle_initialize.call(this);
        BattleManager.clearStartInputCallback();
    };
    var _bdc_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _bdc_Scene_Battle_createAllWindows.call(this);
        this.createTargetInformationWindow();
    };
    Scene_Battle.prototype.createTargetInformationWindow = function () {
        this._targetInformationWindow = new BD.Core.Targeting.TargetInformationWindow();
        this._targetInformationWindow.visible = false;
        this.addWindow(this._targetInformationWindow);
        this._actorWindow.setHelpWindow(this._targetInformationWindow);
        this._enemyWindow.setHelpWindow(this._targetInformationWindow);
    };
    Scene_Battle.prototype.commandAttack = function () {
        BattleManager.inputtingAction().setAttack();
        this.onSelectAction();
    };
    Scene_Battle.prototype.commandGuard = function () {
        BattleManager.inputtingAction().setGuard();
        this.onSelectAction();
    };
    var _bdc_Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
    Scene_Battle.prototype.onActorCancel = function () {
        _bdc_Scene_Battle_onActorCancel.call(this);
        if (this._actorCommandWindow.currentSymbol() === "guard") {
            this._actorCommandWindow.activate();
        }
    };
    var _bdc_Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
    Scene_Battle.prototype.onEnemyCancel = function () {
        _bdc_Scene_Battle_onEnemyCancel.call(this);
        if (this._actorCommandWindow.currentSymbol() === "guard") {
            this._actorCommandWindow.activate();
        }
    };
})();

(function () {
    var SideView = BD.Core.Settings.enableSideVidwBattler;
    var _bdc_Sprite_Actor_updateMove = Sprite_Actor.prototype.updateMove;
    Sprite_Actor.prototype.updateMove = function () {
        _bdc_Sprite_Actor_updateMove.apply(this, arguments);
        this._setSideviewCursorPosition();
    };
    Sprite_Actor.prototype._setSideviewCursorPosition = function () {
        var a = this._actor;
        if (!a.hasXpb() && (this.isMoving() || a.isSelected() || a.isInputting())) {
            a._cursorX = this.x;
            a._cursorY = this.y - this._mainSprite.height;
        }
    };
    var _bdc_Sprite_Actor_update = Sprite_Actor.prototype.update;
    Sprite_Actor.prototype.update = function () {
        _bdc_Sprite_Actor_update.apply(this, arguments);
        this._updateTouch();
    };
    Sprite_Actor.prototype._updateTouch = function () {
        var a = this._actor;
        if (!a || !SideView() || !BattleManager.inputtingAction()) {
            return;
        }
        if (TouchInput.isPressed() && this._targetingHitTest()) {
            a.changeTouchInputStatus(BD.Core.Consts.Enums.TouchInputStatus.Pressed);
        }
        else {
            a.changeTouchInputStatus(BD.Core.Consts.Enums.TouchInputStatus.NoInput);
        }
    };
    Sprite_Actor.prototype._targetingHitTest = function () {
        var s = this;
        var rect = new Rectangle(s.x - s._mainSprite.width / 2, s.y - s._mainSprite.height, s._mainSprite.width, s._mainSprite.height);
        var x = TouchInput.x - rect.x;
        var y = TouchInput.y - rect.y;
        return x >= 0 && y >= 0 && x < rect.width && y < rect.height;
    };
})();

(function () {
    var Sprite_StateIcon_loadBitmap = Sprite_StateIcon.prototype.loadBitmap;
    Sprite_StateIcon.prototype.loadBitmap = function () {
        Sprite_StateIcon_loadBitmap.apply(this, arguments);
        this.visible = false;
    };
    var Sprite_StateIcon_update = Sprite_StateIcon.prototype.update;
    Sprite_StateIcon.prototype.update = function () {
        Sprite_StateIcon_update.apply(this, arguments);
        this.visible = !this._battler.isSelected() && this._iconIndex > 0;
    };
})();

(function () {
    Window_BattleActor.prototype.forceTarget = function () {
        this.setCursorAll(false);
        this.setCursorFixed(false);
        var action = BattleManager.inputtingAction();
        if (!action) {
            return;
        }
        if (action.isForAll()) {
            this.setCursorAll(true);
            this.setCursorFixed(true);
            $gameParty.selectAll();
            this.updateHelp();
        }
        else if (action.isForUser()) {
            this.select(BattleManager._actorIndex);
            this.setCursorFixed(true);
            this.updateHelp();
        }
    };
    Window_BattleActor.prototype.restoreTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var lastTarget = BattleManager.lastTargetedActor;
        var index = $gameParty.members().indexOf(lastTarget);
        this.select(Math.max(0, index));
    };
    Window_BattleActor.prototype.rememberTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var action = BattleManager.inputtingAction();
        if (!action || action.isForAll() || action.isForUser()) {
            return;
        }
        BattleManager.lastTargetedActor = this.actor();
    };
    var _bdc_Window_BattleActor_show = Window_BattleActor.prototype.show;
    Window_BattleActor.prototype.show = function () {
        _bdc_Window_BattleActor_show.call(this);
        this.showHelpWindow();
        this.forceTarget();
    };
    var _bdc_Window_BattleActor_hide = Window_BattleActor.prototype.hide;
    Window_BattleActor.prototype.hide = function () {
        _bdc_Window_BattleActor_hide.call(this);
        this.hideHelpWindow();
        this.rememberTarget();
    };
    Window_BattleActor.prototype.activate = function () {
        Window_Selectable.prototype.activate.call(this);
        this.restoreTarget();
    };
    Window_BattleActor.prototype.updateHelp = function () {
        this._helpWindow.setBattler($gameParty.battleMembers()[this.index()]);
    };
    var _bdc_Window_BattleActor_select = Window_BattleActor.prototype.select;
    Window_BattleActor.prototype.select = function (index) {
        if (this.cursorFixed()) {
            return;
        }
        _bdc_Window_BattleActor_select.call(this, index);
    };
})();

(function () {
    var _bdc_Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function (x, y) {
        this._touchSelector = new BD.Core.Targeting.TargetTouchSelector(this);
        _bdc_Window_BattleEnemy_initialize.call(this, x, y);
    };
    var _bdc_Window_BattleEnemy_update = Window_BattleEnemy.prototype.update;
    Window_BattleEnemy.prototype.update = function () {
        _bdc_Window_BattleEnemy_update.call(this);
        this._touchSelector.update();
    };
    Window_BattleEnemy.prototype.isHorizontal = function () {
        return true;
    };
    Window_BattleEnemy.prototype.maxCols = function () {
        return this._enemies.length;
    };
    Window_BattleEnemy.prototype.maxItems = function () {
        return this._enemies.length;
    };
    Window_BattleEnemy.prototype.refresh = function () {
        this._enemies = BD.Core.Utils.sortTroopByX($gameTroop.aliveMembers());
        this._touchSelector.setup(this._enemies);
        Window_Selectable.prototype.refresh.call(this);
    };
    Window_BattleEnemy.prototype.forceTarget = function () {
        this.setCursorAll(false);
        this.setCursorFixed(false);
        var action = BattleManager.inputtingAction();
        if (!action) {
            return;
        }
        if (action.isForAll() || action.isForRandom()) {
            this.setCursorAll(true);
            this.setCursorFixed(true);
            $gameTroop.selectAll();
            this.updateHelp();
        }
    };
    Window_BattleEnemy.prototype.restoreTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var lastTarget = BattleManager.lastTargetedEnemy;
        var index = this._enemies.indexOf(lastTarget);
        this.select(Math.max(0, index));
        if (index === -1 && BD.Core.Settings.enableSideVidwBattler()) {
            this.select(this._enemies.length - 1);
        }
        else {
            this.select(Math.max(0, index));
        }
    };
    Window_BattleEnemy.prototype.rememberTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var action = BattleManager.inputtingAction();
        if (!action || action.isForAll() || action.isForRandom()) {
            return;
        }
        BattleManager.lastTargetedEnemy = this.enemy();
    };
    Window_BattleEnemy.prototype.selectEndOfEnemy = function () {
        if (ConfigManager.commandRemember) {
            return;
        }
        this.select(this._enemies.length - 1);
    };
    var _bdc_Window_BattleEnemy_show = Window_BattleEnemy.prototype.show;
    Window_BattleEnemy.prototype.show = function () {
        _bdc_Window_BattleEnemy_show.call(this);
        this.showHelpWindow();
        this.forceTarget();
    };
    var _bdc_Window_BattleEnemy_hide = Window_BattleEnemy.prototype.hide;
    Window_BattleEnemy.prototype.hide = function () {
        _bdc_Window_BattleEnemy_hide.call(this);
        this.hideHelpWindow();
        this.rememberTarget();
    };
    Window_BattleEnemy.prototype.activate = function () {
        Window_Selectable.prototype.activate.call(this);
        this.restoreTarget();
    };
    Window_BattleEnemy.prototype.updateHelp = function () {
        this._helpWindow.setBattler(this._enemies[this.index()]);
    };
    var _bdc_Window_BattleEnemy_select = Window_BattleEnemy.prototype.select;
    Window_BattleEnemy.prototype.select = function (index) {
        if (this.cursorFixed()) {
            return;
        }
        _bdc_Window_BattleEnemy_select.call(this, index);
    };
})();

(function () {
    var _bdc_Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
    Window_BattleStatus.prototype.initialize = function () {
        _updateMembers.call(this);
        BattleManager.registerStartInputCallback(_updateMembers, this);
        this._touchSelector = new BD.Core.Targeting.TargetTouchSelector(this);
        _bdc_Window_BattleStatus_initialize.call(this);
    };
    var _bdc_Window_BattleStatus_update = Window_BattleStatus.prototype.update;
    Window_BattleStatus.prototype.update = function () {
        _bdc_Window_BattleStatus_update.call(this);
        this._touchSelector.update();
    };
    var _bdcx_Window_BattleStatus_refresh = Window_BattleStatus.prototype.refresh;
    Window_BattleStatus.prototype.refresh = function () {
        _bdcx_Window_BattleStatus_refresh.call(this);
        this._touchSelector.setup($gameParty.battleMembers());
    };
    Window_BattleStatus.prototype.isHorizontal = function () {
        return true;
    };
    Window_BattleStatus.prototype.maxCols = function () {
        return this._battleMembers.length;
    };
    Window_BattleStatus.prototype.maxRows = function () {
        return 1;
    };
    function _updateMembers() {
        this._battleMembers = $gameParty.battleMembers();
    }
    ;
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetCursor = (function (_super) {
                __extends(TargetCursor, _super);
                function TargetCursor(settings) {
                    var _this = _super.call(this) || this;
                    _this.anchor.x = 0.5;
                    _this.anchor.y = 0.5;
                    _this._initMembers();
                    _this.hide();
                    _this.setup(settings);
                    _this._updateFrame();
                    return _this;
                }
                TargetCursor.prototype.setup = function (settings) {
                    var _this = this;
                    this._fileName = settings.fileName;
                    this._width = settings.width;
                    this._animationSpeed = settings.animationSpeed;
                    this._moveSpeed = settings.moveSpeed;
                    this._adjustPositionOnActor = settings.adjustPositionOnActor;
                    this._adjustPositionOnEnemy = settings.adjustPositionOnEnemy;
                    this._minY = settings.minY;
                    this._duration = this._animationSpeed;
                    this.bitmap = ImageManager.loadSystem(this._fileName, 0);
                    this.bitmap.addLoadListener(function () {
                        if (TargetCursor.detectedWidth !== -1) {
                            _this._width = TargetCursor.detectedWidth;
                            return;
                        }
                        if (_this._width === 0) {
                            var color = _this.bitmap.getPixel(0, 0);
                            var r = parseInt(color.substring(1, 3), 16);
                            var g = parseInt(color.substring(3, 5), 16);
                            var b = parseInt(color.substring(5, 7), 16);
                            if (r > 0 && g === 0 && b === 0) {
                                TargetCursor.detectedWidth = r;
                                _this._width = r;
                                var a = _this.bitmap._context.createImageData(1, 1);
                                a.data[3] = 0;
                                _this.bitmap._context.putImageData(a, 0, 0);
                            }
                            else {
                                TargetCursor.detectedWidth = _this._width;
                            }
                        }
                    });
                };
                TargetCursor.prototype._initMembers = function () {
                    this._blink = false;
                    this._pattern = 0;
                    this._duration = this._animationSpeed;
                    this._rx = 0;
                    this._ry = 0;
                    this._tx = 0;
                    this._ty = 0;
                    this._progressRate = null;
                };
                TargetCursor.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._updatePosition();
                    this._updateAnimation();
                };
                TargetCursor.prototype._updateAnimation = function () {
                    this._duration--;
                    if (this._duration === 0) {
                        this._duration = this._animationSpeed;
                        this._pattern++;
                        if (this._width * this._pattern >= this.bitmap.width) {
                            this._pattern = 0;
                        }
                        this._updateFrame();
                    }
                    this.blendMode = Graphics.BLEND_NORMAL;
                    if (this._blink && Math.floor(Math.ceil(Graphics.frameCount / 2)) % 2 === 0) {
                        this.blendMode = Graphics.BLEND_SCREEN;
                    }
                };
                TargetCursor.prototype._updateFrame = function () {
                    var bitmap = ImageManager.loadSystem(this._fileName, 0);
                    if (this._width === 0) {
                        this._width = bitmap.height;
                    }
                    this.setFrame(this._width * this._pattern, 0, this._width, bitmap.height);
                };
                TargetCursor.prototype._updatePosition = function () {
                    if (this._progressRate === null) {
                        this._progressRate = 1;
                    }
                    else {
                        this._progressRate = Core.Utils.Interpolator.smooth(1, this._progressRate, this._moveSpeed, 0.005);
                    }
                    if (this._target instanceof Game_Actor && !this._target.hasXpb()) {
                        this._setTargetPosition(this._target.cursorX(), this._target.cursorY());
                    }
                    this.x = Math.round(this._rx - (this._rx - this._tx) * this._progressRate);
                    this.y = Math.round(this._ry - (this._ry - this._ty) * this._progressRate);
                };
                TargetCursor.prototype._setPosition = function (x, y) {
                    this._rx = this.x;
                    this._ry = this.y;
                    this._setTargetPosition(x, y);
                    this._progressRate = 0;
                };
                TargetCursor.prototype._setTargetPosition = function (x, y) {
                    this._tx = x;
                    this._ty = Math.max(this._minY, y);
                };
                TargetCursor.prototype.syncAnimation = function (cursor) {
                    this._duration = cursor._duration;
                    this._pattern = cursor._pattern;
                    this._updateFrame();
                };
                TargetCursor.prototype.setTarget = function (target, startX, startY) {
                    var aPos = target.isActor() ? this._adjustPositionOnActor : this._adjustPositionOnEnemy;
                    this._setPosition(target.cursorX() + aPos.x, target.cursorY() + aPos.y);
                    this._blink = target.isSelected();
                    this._target = target;
                    this.show();
                    if (startX && startY) {
                        this._progressRate = 0;
                        this._rx = startX;
                        this._ry = startY;
                        this._updatePosition();
                    }
                };
                TargetCursor.prototype.show = function () {
                    if (!this.visible) {
                        this.completeProgress();
                    }
                    this.visible = true;
                };
                TargetCursor.prototype.hide = function () {
                    this.completeProgress();
                    this.visible = false;
                };
                TargetCursor.prototype.completeProgress = function () {
                    this._progressRate = 1;
                    this._updatePosition();
                };
                TargetCursor.detectedWidth = -1;
                return TargetCursor;
            }(Sprite));
            Targeting.TargetCursor = TargetCursor;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetCursorLayer = (function (_super) {
                __extends(TargetCursorLayer, _super);
                function TargetCursorLayer(settings) {
                    var _this = _super.call(this) || this;
                    _this._settings = settings;
                    _this._updateMembers();
                    BattleManager.registerStartInputCallback(_this._updateMembers, _this);
                    _this._mainCursor = new Targeting.TargetCursor(_this._settings);
                    _this.addChild(_this._mainCursor);
                    _this._subCursors = [];
                    _this._lastSelectedBattlers = [];
                    _this._commandActor = false;
                    return _this;
                }
                TargetCursorLayer.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._updateTarget();
                };
                TargetCursorLayer.prototype._updateTarget = function () {
                    if (Graphics.frameCount % 2 === 0) {
                        return;
                    }
                    var battlers = this._allBattlers.filter(function (x) { return x.isSelected() && (x.isActor() || x.isAlive()); });
                    if (battlers.length === 0) {
                        this._updateCommandActor();
                    }
                    if (battlers.length === 1) {
                        this._updateSingleTarget(battlers[0], false);
                    }
                    else if (battlers.length > 1) {
                        this._updateMultipleTarget(battlers);
                    }
                };
                TargetCursorLayer.prototype._updateCommandActor = function () {
                    var c = this._getCommandActor();
                    if (c) {
                        this._updateSingleTarget(c, true);
                    }
                    else if (this._lastSelectedBattlers.length > 0) {
                        this._lastSelectedBattlers.length = 0;
                        this._hideMainCursor();
                        this._hideSubCursors();
                    }
                };
                TargetCursorLayer.prototype._updateSingleTarget = function (selectedBattler, command) {
                    var s = [selectedBattler];
                    if (this._lastSelectedBattlers.equals(s) && this._commandActor === command) {
                        return;
                    }
                    this._lastSelectedBattlers = s;
                    this._commandActor = command;
                    this._hideSubCursors();
                    this._mainCursor.setTarget(selectedBattler);
                    if (command) {
                        this._mainCursor.completeProgress();
                    }
                };
                TargetCursorLayer.prototype._updateMultipleTarget = function (selectedBattlers) {
                    var _this = this;
                    if (this._lastSelectedBattlers.equals(selectedBattlers)) {
                        return;
                    }
                    this._lastSelectedBattlers = selectedBattlers;
                    this._commandActor = false;
                    this._hideSubCursors();
                    var sb = selectedBattlers.slice();
                    this._mainCursor.hide();
                    sb.forEach(function (x) { return _this._addSubCursor(x); });
                };
                TargetCursorLayer.prototype._addSubCursor = function (battler) {
                    var cursor = new Targeting.TargetCursor(this._settings);
                    cursor.syncAnimation(this._mainCursor);
                    cursor.setTarget(battler, this._mainCursor.x, this._mainCursor.y);
                    this._subCursors.push(cursor);
                    this.addChild(cursor);
                };
                TargetCursorLayer.prototype._hideMainCursor = function () {
                    this._mainCursor.hide();
                };
                TargetCursorLayer.prototype._hideSubCursors = function () {
                    var _this = this;
                    if (this._subCursors.length === 0) {
                        return;
                    }
                    this._subCursors.forEach(function (x) { return _this.removeChild(x); });
                    this._subCursors.length = 0;
                };
                TargetCursorLayer.prototype._updateMembers = function () {
                    this._partyBattleMembers = $gameParty.battleMembers();
                    this._troopMembers = $gameTroop.members();
                    this._allBattlers = this._partyBattleMembers.concat(this._troopMembers);
                };
                TargetCursorLayer.prototype._getCommandActor = function () {
                    if (BattleManager._actorIndex > -1) {
                        return this._partyBattleMembers[BattleManager._actorIndex];
                    }
                    return undefined;
                };
                return TargetCursorLayer;
            }(Sprite));
            Targeting.TargetCursorLayer = TargetCursorLayer;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var InfoSettings = Core.Settings.targetInformation;
            var TargetInformationWindow = (function (_super) {
                __extends(TargetInformationWindow, _super);
                function TargetInformationWindow() {
                    var _this = _super.call(this, 1) || this;
                    _this._battler = null;
                    return _this;
                }
                TargetInformationWindow.prototype.setBattler = function (battler) {
                    this._battler = battler;
                    this.refresh();
                };
                TargetInformationWindow.prototype.clear = function () {
                    _super.prototype.clear.call(this);
                    this.setBattler(null);
                };
                ;
                TargetInformationWindow.prototype.refresh = function () {
                    this.contents.clear();
                    this.resetTextColor();
                    this.resetFontSettings();
                    var action = BattleManager.inputtingAction();
                    if (action.isForAll() && action.isForOpponent()) {
                        this._drawForTroop();
                    }
                    else if (action.isForRandom() && action.isForOpponent()) {
                        this._drawForTroopRandom(action.numTargets());
                    }
                    else if (action.isForAll() && action.isForFriend()) {
                        this._drawForParty();
                    }
                    else if (this._battler) {
                        this._drawTargetInformation(this._battler);
                    }
                };
                ;
                TargetInformationWindow.prototype._drawForParty = function () {
                    this.drawText(InfoSettings().scopeNotation.forParty, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawForTroop = function () {
                    this.drawText(InfoSettings().scopeNotation.forTroop, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawForTroopRandom = function (randomNumber) {
                    var text = InfoSettings().scopeNotation.forTroopRandom.format(randomNumber);
                    this.drawText(text, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawTargetInformation = function (battler) {
                    var settings = battler.isActor() ? InfoSettings().actor : InfoSettings().enemy;
                    var gauges = this.gaugeNumber(settings);
                    var gaugeWidth = InfoSettings().gaugeWidth;
                    var gaugeMargin = TargetInformationWindow.GAUGE_MARGIN;
                    var gaugesBaseX = this.contentsWidth() - gaugeWidth * gauges - gaugeMargin * Math.max(0, (gauges - 1));
                    this.drawGauges(settings, battler, gaugesBaseX);
                    var nameAndStateWidth = gaugesBaseX;
                    if (gauges > 0) {
                        nameAndStateWidth -= gaugeMargin;
                    }
                    var stateMargin = TargetInformationWindow.STATE_LEFT_MARGIN;
                    if (settings.states) {
                        nameAndStateWidth -= stateMargin;
                    }
                    var nameWidth = Math.min(this.contents.measureTextWidth(battler.name()), nameAndStateWidth);
                    var minNameWidth = Math.round(nameWidth * TargetInformationWindow.MIN_NAME_RATIO);
                    var maxStateWidth = Math.round(nameAndStateWidth - minNameWidth);
                    var stateWidth = 0;
                    if (settings.states) {
                        stateWidth = Math.min(maxStateWidth, battler.allIcons().length * Window_Base._iconWidth);
                    }
                    var realStateWidth = Math.min(stateWidth, maxStateWidth);
                    var realNameWidth = Math.min(nameWidth, nameAndStateWidth - realStateWidth);
                    var realNameAndStateWidth = realNameWidth + realStateWidth;
                    var nameX = Math.round((nameAndStateWidth - realNameAndStateWidth) / 2);
                    if (battler.isActor() || settings.hp) {
                        this.drawActorName(battler, nameX, 0, realNameWidth);
                    }
                    else {
                        this.drawText(battler.name(), nameX, 0, realNameWidth);
                    }
                    if (settings.states) {
                        var stateX = nameX + realNameWidth + stateMargin;
                        this.drawActorIcons(battler, stateX, 0, realStateWidth);
                    }
                };
                TargetInformationWindow.prototype.gaugeNumber = function (settings) {
                    var gauges = 0;
                    if (settings.hp) {
                        gauges++;
                    }
                    if (settings.mp) {
                        gauges++;
                    }
                    if (settings.tp && Core.Settings.isDisplayTp()) {
                        gauges++;
                    }
                    return gauges;
                };
                TargetInformationWindow.prototype.drawGauges = function (settings, battler, baseX) {
                    var width = InfoSettings().gaugeWidth;
                    var column = 0;
                    if (settings.hp) {
                        this.drawActorHp(battler, this.gaugeX(baseX, column), 0, width);
                        column++;
                    }
                    if (settings.mp) {
                        this.drawActorMp(battler, this.gaugeX(baseX, column), 0, width);
                        column++;
                    }
                    if (settings.tp && Core.Settings.isDisplayTp()) {
                        this.drawActorTp(battler, this.gaugeX(baseX, column), 0, width);
                    }
                };
                TargetInformationWindow.prototype.gaugeX = function (baseX, column) {
                    return baseX + InfoSettings().gaugeWidth * column + TargetInformationWindow.GAUGE_MARGIN * column;
                };
                TargetInformationWindow.prototype.setText = function (text) {
                };
                TargetInformationWindow.prototype.setItem = function (item) {
                };
                TargetInformationWindow.prototype.drawActorIcons = function (actor, x, y, width) {
                    var w = width || 144;
                    var icons = actor.allIcons();
                    var displayIcons = icons.slice(0, Math.floor(w / Window_Base._iconWidth));
                    if (icons > displayIcons) {
                        var space = (w - 32) / (icons.length - 1);
                        for (var i = 0; i < icons.length; i++) {
                            this.drawIcon(icons[i], Math.round(x + space * i), y + 2);
                        }
                    }
                    else {
                        _super.prototype.drawActorIcons.call(this, actor, x, y, width);
                    }
                };
                TargetInformationWindow.STATE_LEFT_MARGIN = 4;
                TargetInformationWindow.MIN_NAME_RATIO = 0.66;
                TargetInformationWindow.GAUGE_MARGIN = 8;
                return TargetInformationWindow;
            }(Window_Help));
            Targeting.TargetInformationWindow = TargetInformationWindow;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetTouchSelector = (function () {
                function TargetTouchSelector(selector) {
                    this._selector = selector;
                    this.setup([]);
                }
                TargetTouchSelector.prototype.setup = function (member) {
                    this._member = member;
                    this._sortedMember = member.slice().sort(function (a, b) {
                        var az = a.screenY() * 100 - a.index();
                        var bz = b.screenY() * 100 - b.index();
                        return (bz - az);
                    });
                    this._stayCount = 0;
                };
                TargetTouchSelector.prototype.update = function () {
                    this._stayCount++;
                    if (!this._selector.active || this._stayCount < TargetTouchSelector.Stay) {
                        return;
                    }
                    if (this._decision()) {
                        return;
                    }
                    if (this._select()) {
                        this._stayCount = TargetTouchSelector.StayAfterSelect;
                        return;
                    }
                };
                TargetTouchSelector.prototype._select = function () {
                    var _this = this;
                    if (!this._selector.cursorFixed() && TouchInput.isPressed()) {
                        var target = this._sortedMember.find(function (x) { return _this._hitTest(x); });
                        if (target === undefined) {
                            return false;
                        }
                        var index = this._member.indexOf(target);
                        if (this._selector.index() === index) {
                            return false;
                        }
                        SoundManager.playCursor();
                        this._selector.select(index);
                        return true;
                    }
                    return false;
                };
                TargetTouchSelector.prototype._decision = function () {
                    var _this = this;
                    if (TouchInput.isTriggered()) {
                        if (this._selector.cursorFixed()) {
                            this._selector.processOk();
                            return true;
                        }
                        var target = this._sortedMember.find(function (x) { return _this._hitTest(x); });
                        if (target === undefined) {
                            return false;
                        }
                        var index = this._member.indexOf(target);
                        if (this._selector.index() !== index) {
                            return false;
                        }
                        if (!this._selector.cursorFixed()) {
                            this._selector.select(index);
                        }
                        this._selector.processOk();
                        return true;
                    }
                    return false;
                };
                TargetTouchSelector.prototype._hitTest = function (battler) {
                    if (battler.touchInputStatus() !== Core.Consts.Enums.TouchInputStatus.NoInput) {
                        return true;
                    }
                    var rect = battler.hitTestRectangle();
                    var x = TouchInput.x - rect.x;
                    var y = TouchInput.y - rect.y;
                    return x >= 0 && y >= 0 && x < rect.width && y < rect.height;
                };
                TargetTouchSelector.Stay = 12;
                TargetTouchSelector.StayAfterSelect = 10;
                return TargetTouchSelector;
            }());
            Targeting.TargetTouchSelector = TargetTouchSelector;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var Settings = BD.Core.Settings.windowLayout;
    var _bdc_Window_ActorCommand_update = Window_ActorCommand.prototype.update;
    Window_ActorCommand.prototype.update = function () {
        _bdc_Window_ActorCommand_update.apply(this, arguments);
        var a = this._actor;
        if (a instanceof Game_Actor && !a.hasXpb()) {
            this._updatePosition();
        }
    };
    Window_ActorCommand.prototype.windowWidth = function () {
        return Settings().actorCommand.width;
    };
    Window_ActorCommand.prototype.numVisibleRows = function () {
        if (!this._list) {
            return 4;
        }
        var settings = Settings().actorCommand;
        var row = settings.heightFitting ? this.maxRows() : settings.visibleRows;
        return row;
    };
    Window_ActorCommand.prototype.maxCols = function () {
        var settings = Settings().actorCommand;
        var col = settings.isHorizontal ? this.maxItems() : settings.maxCols;
        return col.clamp(1, 32);
    };
    Window_ActorCommand.prototype.refresh = function () {
        this._updatePosition();
        Window_Command.prototype.refresh.call(this);
    };
    Window_ActorCommand.prototype._updatePosition = function () {
        if (!this._actor) {
            return;
        }
        this.height = this.windowHeight();
        var settings = Settings().actorCommand;
        var adjustPos = settings.adjustPosition;
        var absolutePos = settings.absolutePosition;
        if (absolutePos.x !== undefined) {
            this.x = absolutePos.x + adjustPos.x;
        }
        else {
            var x = (this._actor.cursorX() - this.width / 2 + adjustPos.x)
                .clamp(8, Graphics.boxWidth - this.width - 8);
            this.x = x;
        }
        if (absolutePos.y !== undefined) {
            this.y = Math.max(0, absolutePos.y + adjustPos.y);
        }
        else {
            this.y = Math.max(0, this._actor.cursorY() - this.height + adjustPos.y);
        }
    };
    Window_ActorCommand.prototype.itemTextAlign = function () {
        return Settings().actorCommand.itemAlign;
    };
    Window_ActorCommand.prototype.activate = function () {
        Window_Base.prototype.activate.call(this);
        this.reselect();
        this.show();
        this.open();
        this.openness = 255;
    };
    Window_ActorCommand.prototype.deactivate = function () {
        Window_Base.prototype.deactivate.call(this);
        this.reselect();
        this.hide();
    };
})();

(function () {
    var _bdc_Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function (x, y) {
        this.downArrowVisible = false;
        this.upArrowVisible = false;
        _bdc_Window_BattleEnemy_initialize.call(this, x, y);
    };
    Window_BattleEnemy.prototype.windowWidth = function () {
        return 0;
    };
    Window_BattleEnemy.prototype.windowHeight = function () {
        return 0;
    };
    Window_BattleEnemy.prototype.drawItem = function (index) {
    };
})();

(function () {
    var _bdc_Window_BattleItem_activate = Window_BattleItem.prototype.activate;
    Window_BattleItem.prototype.activate = function () {
        _bdc_Window_BattleItem_activate.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this);
    };
    var _bdc_Window_BattleItem_hide = Window_BattleItem.prototype.hide;
    Window_BattleItem.prototype.hide = function () {
        _bdc_Window_BattleItem_hide.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this, true);
    };
})();

(function () {
    var _bdc_Window_BattleSkill_activate = Window_BattleSkill.prototype.activate;
    Window_BattleSkill.prototype.activate = function () {
        _bdc_Window_BattleSkill_activate.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this);
    };
    var _bdc_Window_BattleSkill_hide = Window_BattleSkill.prototype.hide;
    Window_BattleSkill.prototype.hide = function () {
        _bdc_Window_BattleSkill_hide.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this, true);
    };
})();

(function () {
    var _bdc_Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
    Window_BattleStatus.prototype.initialize = function () {
        _bdc_Window_BattleStatus_initialize.call(this);
        this.x = Graphics.boxWidth + 48;
    };
    Window_BattleStatus.prototype.windowWidth = function () {
        return 0;
    };
    Window_BattleStatus.prototype.windowHeight = function () {
        return 192;
    };
    Window_BattleStatus.prototype.drawItem = function (index) {
    };
})();

(function () {
    var _bdc_Game_Message_clear = Game_Message.prototype.clear;
    Game_Message.prototype.clear = function () {
        _bdc_Game_Message_clear.call(this);
        if ($gameParty && $gameParty.inBattle()) {
            this._positionType = 0;
        }
    };
})();

(function () {
    var _bdc_Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
    Scene_Battle.prototype.createMessageWindow = function () {
        _bdc_Scene_Battle_createMessageWindow.call(this);
        $gameMessage.setPositionType(0);
    };
})();

(function () {
    var Settings = BD.Core.Settings.windowLayout;
    Window_PartyCommand.prototype.windowWidth = function () {
        var w = Settings().partyCommand.width;
        if (w === undefined) {
            return Graphics.boxWidth;
        }
        return w;
    };
    Window_PartyCommand.prototype.numVisibleRows = function () {
        if (!this._list) {
            return 1;
        }
        var settings = Settings().partyCommand;
        var row = settings.heightFitting ? this.maxRows() : settings.visibleRows;
        return row;
    };
    Window_PartyCommand.prototype.maxCols = function () {
        var settings = Settings().partyCommand;
        var col = settings.isHorizontal ? this.maxItems() : settings.maxCols;
        return col.clamp(1, 32);
    };
    Window_PartyCommand.prototype.itemTextAlign = function () {
        return Settings().partyCommand.itemAlign;
    };
    var _bdc_Window_PartyCommand_setup = Window_PartyCommand.prototype.setup;
    Window_PartyCommand.prototype.setup = function () {
        _bdc_Window_PartyCommand_setup.call(this);
        if (ConfigManager.commandRemember && this._lastIndex) {
            this.select(this._lastIndex);
        }
        var pos = Settings().partyCommand.position;
        this.x = pos.x;
        this.y = pos.y;
    };
    Window_PartyCommand.prototype.open = function () {
        Window_Selectable.prototype.open.apply(this, arguments);
        this.openness = 255;
    };
    Window_PartyCommand.prototype.close = function () {
        Window_Selectable.prototype.close.apply(this, arguments);
        if (ConfigManager.commandRemember && this.index() > -1) {
            this._lastIndex = this.index();
        }
        this.openness = 0;
    };
})();

(function () {
    Scene_Battle.prototype.updateWindowPositions = function () {
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var WindowLayout;
        (function (WindowLayout) {
            var Utility;
            (function (Utility) {
                var Settings = BD.Core.Settings;
                function fittingWindowItemSkill(window, hide) {
                    if (hide === void 0) { hide = false; }
                    var setting = Settings.windowLayout().itemSkill;
                    var fitting = setting.fitting;
                    var height = setting.maxHeight;
                    if (hide || !fitting) {
                        window.height = height;
                    }
                    else {
                        var h = height.clamp(0, window.fittingHeight(window.maxRows()));
                        window.height = h;
                    }
                }
                Utility.fittingWindowItemSkill = fittingWindowItemSkill;
            })(Utility = WindowLayout.Utility || (WindowLayout.Utility = {}));
        })(WindowLayout = Core.WindowLayout || (Core.WindowLayout = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
