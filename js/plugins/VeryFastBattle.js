//=============================================================================
// VeryFastBattle.js
//=============================================================================

/*:
 * @plugindesc battle exceeds very fast when specified keys down
 * @author Sasuke KANNAZUKI (Thx to 星潟)
 * 
 * @help This plugin does not provide plugin commands.
 * 
 * When 'pageup' key(=PageUp or Q) or 'control' key (=Ctrl or Alt) is down
 * at battle turn, it exceeds very fast.
 *
 * There is no operation for mouse and touch panel.
 *
 * Copyright:
 * This plugin's specification is based on、星潟's RGSS3 material.
 * Artificial Providence http://artificialprovidence.web.fc2.com/
 * Thanks to 星潟.
 *
 * This plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */
/*:ja
 * @plugindesc 特定のキーが押された時、超高速に戦闘シーンが進みます
 * @author 神無月サスケ (原案:星潟)
 * 
 * @help このプラグインには、プラグインコマンドはありません
 * 
 * 'pageup' キー か 'control' キーが押されている間、超高速になります。
 * - 'pageup' とは、キーボードの PgUp か Q, またはパッドの Lボタンです。
 * - 'control' とは、キーボードの Ctrl か Alt です。
 *
 * タッチパネルやマウスでは、該当する動作はありません。
 *
 * 謝辞:
 * このプラグインの仕様は、星潟様の RGSS3 素材を参考にしました。
 * Artificial Providence http://artificialprovidence.web.fc2.com/
 * 星潟様に謝意を示します。
 *
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(function() {

  //
  // Check Very Fast
  //
  Game_System.prototype.isVeryFastForward = function() {
    return Input.isPressed('pageup') || Input.isPressed('control');
  };

  //
  // skip all wait
  //
  var _Window_BattleLog_updateWaitCount =
   Window_BattleLog.prototype.updateWaitCount;
  Window_BattleLog.prototype.updateWaitCount = function() {
    if (this._waitCount > 0 && $gameSystem.isVeryFastForward()) {
      this._waitCount = 1;
    }
    return _Window_BattleLog_updateWaitCount.call(this);
  };

  var _Window_BattleLog_updateWaitMode =
   Window_BattleLog.prototype.updateWaitMode;
  Window_BattleLog.prototype.updateWaitMode = function() {
    if ($gameSystem.isVeryFastForward() && this._waitMode === 'effect') {
      this._waitMode = '';
      return false;
    }
    return _Window_BattleLog_updateWaitMode.call(this);
  };

  var _Sprite_Battler_updateMove = Sprite_Battler.prototype.updateMove;
  Sprite_Battler.prototype.updateMove = function() {
    if (this._movementDuration > 0 && $gameSystem.isVeryFastForward()) {
      this._movementDuration = 1;
    }
    return _Sprite_Battler_updateMove.call(this);
  };

  var _Spriteset_Battle_isBusy = Spriteset_Battle.prototype.isBusy;
  Spriteset_Battle.prototype.isBusy = function() {
    if ($gameSystem.isVeryFastForward()) { 
      return false;
    } else {
      return _Spriteset_Battle_isBusy.call(this);
    }
  };
})();
