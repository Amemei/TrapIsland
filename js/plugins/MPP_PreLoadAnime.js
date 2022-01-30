//=============================================================================
// MPP_PreLoadAnime.js
//=============================================================================
// Copyright (c) 2018 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.2】画像の先読み込みを行うことで、戦闘中のアニメーション表示をスムーズにします。
 * @author 木星ペンギン
 *
 * @help ▼読み込みタイミング
 * --------------------------------
 *  〇通常攻撃
 *   [攻撃]を選択した時点で、アニメーションを読み込みます。
 * 
 *  〇スキル・アイテム
 *   実行するスキル・アイテムを決定した時点で、そのアニメーションを読み込みます。
 * 
 *  〇操作不能の場合
 *   ステートの[行動制約]によりアクションの選択ができなかったり、
 *   または特徴で[自動戦闘]になっているなど操作できないアクターの場合、
 *   ターン開始時にアニメーションを読み込みます。
 * 
 *  〇エネミーのアクション
 *   エネミーの場合はターン開始時にアニメーションを読み込みます。
 *   
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 *
 */

(function() {

var Alias = {};

var RequestAnime = function(animation) {
    if (animation) {
        var name1 = animation.animation1Name;
        var name2 = animation.animation2Name;
        var hue1 = animation.animation1Hue;
        var hue2 = animation.animation2Hue;
        ImageManager.requestAnimation(name1, hue1);
        ImageManager.requestAnimation(name2, hue2);
    }
};

//-----------------------------------------------------------------------------
// Game_Battler

Game_Battler.prototype.requestItemAnimation = function(item) {
    if (item) {
        var animationId = item.animationId;
        if (animationId < 0) {
            if (this.isActor()) {
                RequestAnime($dataAnimations[this.attackAnimationId1()]);
                RequestAnime($dataAnimations[this.attackAnimationId2()]);
            }
        } else {
            RequestAnime($dataAnimations[animationId]);
        }
    }
};

Game_Battler.prototype.requestActionsAnimation = function() {
    for (var i = 0; i < this.numActions(); i++) {
        var action = this.action(i);
        this.requestItemAnimation(action ? action.item() : null);
    }
};

//-----------------------------------------------------------------------------
// Game_Actor

//736
Alias.GaAc_makeActions = Game_Actor.prototype.makeActions;
Game_Actor.prototype.makeActions = function() {
    Alias.GaAc_makeActions.call(this);
    this.requestActionsAnimation();
};

//-----------------------------------------------------------------------------
// Game_Enemy

//278
Alias.GaEn_makeActions = Game_Enemy.prototype.makeActions;
Game_Enemy.prototype.makeActions = function() {
    Alias.GaEn_makeActions.call(this);
    this.requestActionsAnimation();
};

//-----------------------------------------------------------------------------
// Scene_Battle

//265
Alias.ScBa_commandAttack = Scene_Battle.prototype.commandAttack;
Scene_Battle.prototype.commandAttack = function() {
    var actor = BattleManager.actor();
    actor.requestItemAnimation($dataSkills[actor.attackSkillId()]);
    Alias.ScBa_commandAttack.call(this);
};

//361
Alias.ScBa_onSkillOk = Scene_Battle.prototype.onSkillOk;
Scene_Battle.prototype.onSkillOk = function() {
    BattleManager.actor().requestItemAnimation(this._skillWindow.item());
    Alias.ScBa_onSkillOk.call(this);
};

//374
Alias.ScBa_onItemOk = Scene_Battle.prototype.onItemOk;
Scene_Battle.prototype.onItemOk = function() {
    BattleManager.actor().requestItemAnimation(this._itemWindow.item());
    Alias.ScBa_onItemOk.call(this);
};


})();
