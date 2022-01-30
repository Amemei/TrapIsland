//=============================================================================
// MessageWindow_Opacity_riru.js
//=============================================================================
/*:
 * @plugindesc スイッチがONの場合メッセージタイプが通常でも背景を透明にします。入力めんどくせぇ！の方用
 * @author riru
 *
 * @param Opacity Switch Id
 * @desc メッセージウィンドウの背景を透明にするスイッチID
 * @default 1
 *
 * @help
 * メッセージウィンドウ透明化プラグイン ver 1.00
 *
 *＜使い方＞
 *パラメータのOpacity Switch Idに透明化するスイッチIDを記入します。
 *そのスイッチがONになっている間メッセージウィンドウは通常でも透明になります。
 *「背景を暗くする」の場合はそのままです。また選択肢の表示には適応されません
 *
 * ＜規約＞
 * 有償無償問わず使用できます。改変もご自由にどうぞ。使用報告もいりません。２次配布は作成者を偽らなければOKです（ただし素材単品を有償でやりとりするのはNG）。
 *著作権は放棄していません。使用する場合は以下の作者とURLをreadmeなどどこかに記載してください
 *
 * ＜作者情報＞
 *作者：riru 
 *HP：ガラス細工の夢幻
 *URL：http://garasuzaikunomugen.web.fc2.com/index.html
 */

(function() {
    var parameters = PluginManager.parameters('MessageWindow_Opacity_riru');
    var s_id = Number(parameters['Opacity Switch Id'] || 1);
Window_Message.prototype.setBackgroundType = function(type) {
    if (type === 0 && $gameSwitches.value(s_id) === false) {
        this.opacity = 255;
    } else {
        this.opacity = 0;
    }
    if (type === 1) {
        this.showBackgroundDimmer();
    } else {
        this.hideBackgroundDimmer();
    }
};
})();
