/*: 
 * @plugindesc XPStyleBattle for MV Theme - Ether Theme Ver. 0.1.0
 * @author Momomaru Remix / Peachround
 *
 * @help 
 * XPStyleBattle for MV用ステータステーマ「エーテル」
 * 
 * - スタンダードテーマのアナザーバージョンです。
 *   バトラーを若干拡大して表示していますので、拡大が不要な場合は
 *   (integer)battler.zoom を 100 にしてください。
 * 
 * - 必ず XPStyleBattleMV と一緒に使用してください。
 *   プラグイン管理ウィンドウ上での配置は XPStyleBattleMV より下です。
 *  
 * - Momomaru Remix ウェブサイト: http://peachround.com/
 * 
 * 
 * 
 * @param (integer)root.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの基準 X 座標 [Default: 0]
 * 
 * @param (integer)root.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの基準 Y 座標 [Default: 0]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)hudBg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの背景画像 X 座標 [Default: 0]
 * 
 * @param (integer)hudBg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HUDの背景画像 Y 座標 [Default: 444]
 *
 * @param (boolean)hudBg.visible
 * @type boolean
 * @desc HUDの背景画像を表示する [Default: true]
 * 
 * @param (string)hudBg.fileName
 * @type file
 * @dir img/system
 * @desc HUDの背景画像のファイル名 [Default: bd_ether/hud_bg]
 * @default bd_ether/hud_bg
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)general.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス領域の X 座標 [Default: 8]
 * 
 * @param (integer)general.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス領域の Y 座標 [Default: 458]
 * 
 * @param (integer)general.width
 * @type number
 * @min 48
 * @max 4096
 * @desc ステータス領域の幅 [Default: 800]
 * 
 * @param (integer)general.height
 * @type number
 * @min 48
 * @max 4096
 * @desc ステータス領域の高さ [Default: 180]
 * 
 * @param (integer)general.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc アクターの水平方向の整列。0: 左 1: 中央 2: 右 [Default: 1]
 * 
 * @param (integer)general.verticalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc アクターの垂直方向の整列。0: 上 1: 中央 2: 下 [Default: 0]
 * 
 * @param (integer)general.actorStatusWidth
 * @type number
 * @min 48
 * @max 4096
 * @desc アクター1体あたりの幅 [Default: 200]
 * 
 * @param (integer)general.actorStatusHeight 
 * @type number
 * @min 48
 * @max 4096
 * @desc アクター1体あたりの高さ [Default: 166]
 * 
 * @param (integer)general.horizontalSpacing 
 * @type number
 * @min -4096
 * @max 4096
 * @desc アクターとアクターの水平方向の間隔 [Default: 0]
 * 
 * @param (integer)general.verticalSpacing 
 * @type number
 * @min -4096
 * @max 4096
 * @desc アクターとアクターの垂直方向の間隔 [Default: 0]
 * 
 * @param (integer)general.orientation 
 * @type number
 * @min 0
 * @max 1
 * @desc アクターの配置方向。 0: 水平 1: 垂直 [Default: 0]
 * 
 * @param (integer)general.maxRows 
 * @type number
 * @min 1
 * @max 32
 * @desc アクターの最大表示列数 [Default: 16]
 * 
 * @param (integer)general.maxLines
 * @type number
 * @min 1
 * @max 32
 * @desc アクターの最大表示行数 [Default: 1]
 * 
 * @param (boolean)general.isBricks
 * @type boolean
 * @desc レンガ配置を有効にする [Default: false]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラー背景の X 座標 [Default: 0]
 * 
 * @param (integer)bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラー背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)bg.visible
 * @type boolean
 * @desc バトラー背景を表示する [Default: true]
 * 
 * @param (string)bg.fileName
 * @type file
 * @dir img/system
 * @desc バトラー背景のファイル名
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)battler.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックの X 座標 [Default: 82]
 * 
 * @param (integer)battler.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックの Y 座標 [Default: 158]
 * 
 * @param (boolean)battler.visible
 * @type boolean
 * @desc バトラーグラフィックを表示する [Default: true]
 * 
 * @param (integer)battler.zoom
 * @type number
 * @min 25
 * @max 400
 * @desc  バトラーグラフィックの拡大率 [Default: 111]
 * 
 * @param (integer)battler.overlayOffsetX
 * @type number
 * @min -4096
 * @max 4096
 * @desc オーバーレイ表示の X 座標オフセット [Default: 0]
 * 
 * @param (integer)battler.overlayOffsetY
 * @type number
 * @min -4096
 * @max 4096
 * @desc オーバーレイ表示の Y 座標オフセット [Default: -8]
 * 
 * @param (boolean)battler.isOverlayOnBottom
 * @type boolean
 * @desc オーバーレイ表示の Y 座標の基準をバトラーの足元にする [Default: false]
 * 
 * @param (string)battler.maskImage
 * @type file
 * @dir img/system
 * @desc バトラーグラフィックに適用するマスク
 * @require 1
 * 
 * @param (integer)battler.maskImageX
 * @type number
 * @min -4096
 * @max 4096
 * @desc  バトラーグラフィックのマスクの X 座標 [Default: 0]
 * 
 * @param (integer)battler.maskImageY
 * @type number
 * @min -4096
 * @max 4096
 * @desc バトラーグラフィックのマスクの Y 座標 [Default: 0]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)statusBg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス背景の X 座標 [Default: 18]
 * 
 * @param (integer)statusBg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステータス背景の Y 座標 [Default: 48]
 * 
 * @param (boolean)statusBg.visible
 * @type boolean
 * @desc ステータス背景を表示する [Default: true]
 * 
 * @param (string)statusBg.fileName
 * @type file
 * @dir img/system
 * @desc ステータス背景のファイル名 [Default: bd_ether/ether_bg]
 * @default bd_ether/ether_bg
 * @require 1
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)hp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP の基準 X 座標 [Default: 67]
 * 
 * @param (integer)hp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP の基準 Y 座標 [Default: 97]
 * 
 * @param (boolean)hp.visible
 * @type boolean
 * @desc HP を表示する [Default: true]
 * 
 * @param (integer)hp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)hp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 背景の Y 座標 [Default: 13]
 * 
 * @param (boolean)hp.bg.visible
 * @type boolean
 * @desc  HP 背景を表示する [Default: true]
 * 
 * @param (string)hp.bg.fileName
 * @type file
 * @dir img/system
 * @desc HP 背景のファイル名 [Default: bd_ether/ether_gauge_bg]
 * @default bd_ether/ether_gauge_bg
 * @require 1
 * 
 * @param (integer)hp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP シンボルの X 座標 [Default: 11]
 * 
 * @param (integer)hp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP シンボルの Y 座標 [Default: 8]
 * 
 * @param (boolean)hp.symbol.visible
 * @type boolean
 * @desc  HP シンボルを表示する [Default: true]
 * 
 * @param (string)hp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc HP シンボルのファイル名 [Default: bd_ether/ether_hp]
 * @default bd_ether/ether_hp
 * @require 1
 * 
 * @param (integer)hp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP ゲージの X 座標 [Default: 7]
 * 
 * @param (integer)hp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP ゲージの Y 座標 [Default: 15]
 * 
 * @param (boolean)hp.gauge.visible
 * @type boolean
 * @desc HP ゲージを表示する [Default: true]
 * 
 * @param (string)hp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc HP ゲージのファイル名 [Default: bd_ether/ether_gauge]
 * @default bd_ether/ether_gauge
 * @require 1
 * 
 * @param (integer)hp.gauge.skewAngleX
 * @type number
 * @min -180
 * @max 180
 * @desc HP ゲージの水平方向の斜め角度 [Default: -18]
 * 
 * @param (integer)hp.gauge.skewAngleY
 * @type number
 * @min -180
 * @max 180
 * @desc HP ゲージの垂直方向の斜め角度 [Default: 0]
 * 
 * @param (integer)hp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc HP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)hp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の X 座標 [Default: 40]
 * 
 * @param (integer)hp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の Y 座標 [Default: 0]
 * 
 * @param (boolean)hp.number.visible
 * @type boolean
 * @desc HP 数字を表示する [Default: true]
 * 
 * @param (string)hp.number.fileName
 * @type file
 * @dir img/system
 * @desc HP 数字のファイル名 [Default: bd_ether/ether_large_numbers]
 * @default bd_ether/ether_large_numbers
 * @require 1
 * 
 * @param (integer)hp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc HP 数字の桁数 [Default: 4]
 * 
 * @param (boolean)hp.number.zeroSuppress
 * @type boolean
 * @desc HP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)hp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc HP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)hp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc HP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 2]
 * 
 * @param (integer)hp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc HP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)mp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP の基準 X 座標 [Default: 57]
 * 
 * @param (integer)mp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP の基準 Y 座標 [Default: 126]
 * 
 * @param (boolean)mp.visible
 * @type boolean
 * @desc MP を表示する [Default: true]
 * 
 * @param (integer)mp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)mp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 背景の Y 座標 [Default: 13]
 * 
 * @param (boolean)mp.bg.visible
 * @type boolean
 * @desc  MP 背景を表示する [Default: true]
 * 
 * @param (string)mp.bg.fileName
 * @type file
 * @dir img/system
 * @desc MP 背景のファイル名 [Default: bd_ether/ether_gauge_bg]
 * @default bd_ether/ether_gauge_bg
 * @require 1
 * 
 * @param (integer)mp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP シンボルの X 座標 [Default: 11]
 * 
 * @param (integer)mp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP シンボルの Y 座標 [Default: 8]
 * 
 * @param (boolean)mp.symbol.visible
 * @type boolean
 * @desc  MP シンボルを表示する [Default: true]
 * 
 * @param (string)mp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc MP シンボルのファイル名 [Default: bd_ether/ether_mp]
 * @default bd_ether/ether_mp
 * @require 1
 * 
 * @param (integer)mp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP ゲージの X 座標 [Default: 7]
 * 
 * @param (integer)mp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP ゲージの Y 座標 [Default: 15]
 * 
 * @param (boolean)mp.gauge.visible
 * @type boolean
 * @desc MP ゲージを表示する [Default: true]
 * 
 * @param (string)mp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc MP ゲージのファイル名 [Default: bd_ether/ether_gauge]
 * @default bd_ether/ether_gauge
 * @require 1
 * 
 * @param (integer)mp.gauge.skewAngleX
 * @type number
 * @min -180
 * @max 180
 * @desc MP ゲージの水平方向の斜め角度 [Default: -18]
 * 
 * @param (integer)mp.gauge.skewAngleY
 * @type number
 * @min -180
 * @max 180
 * @desc MP ゲージの垂直方向の斜め角度 [Default: 0]
 * 
 * @param (integer)mp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc MP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)mp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の X 座標 [Default: 40]
 * 
 * @param (integer)mp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の Y 座標 [Default: 0]
 * 
 * @param (boolean)mp.number.visible
 * @type boolean
 * @desc MP 数字を表示する [Default: true]
 * 
 * @param (string)mp.number.fileName
 * @type file
 * @dir img/system
 * @desc MP 数字のファイル名 [Default: bd_ether/ether_large_numbers]
 * @default bd_ether/ether_large_numbers
 * @require 1
 * 
 * @param (integer)mp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc MP 数字の桁数 [Default: 4]
 * 
 * @param (boolean)mp.number.zeroSuppress
 * @type boolean
 * @desc MP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)mp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc MP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)mp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc MP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 2]
 * 
 * @param (integer)mp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc MP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)tp.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP の基準 X 座標 [Default: 124]
 * 
 * @param (integer)tp.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP の基準 Y 座標 [Default: 35]
 * 
 * @param (boolean)tp.visible
 * @type boolean
 * @desc TP を表示する(システムの"バトル画面でTPを表示"が有効の時) [Default: true]
 * 
 * @param (integer)tp.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 背景の X 座標 [Default: 0]
 * 
 * @param (integer)tp.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)tp.bg.visible
 * @type boolean
 * @desc  TP 背景を表示する [Default: true]
 * 
 * @param (string)tp.bg.fileName
 * @type file
 * @dir img/system
 * @desc TP 背景のファイル名 [Default: bd_ether/ether_tp_gauge_bg]
 * @default bd_ether/ether_tp_gauge_bg
 * @require 1
 * 
 * @param (integer)tp.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP シンボルの X 座標 [Default: 24]
 * 
 * @param (integer)tp.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP シンボルの Y 座標 [Default: 14]
 * 
 * @param (boolean)tp.symbol.visible
 * @type boolean
 * @desc  TP シンボルを表示する [Default: true]
 * 
 * @param (string)tp.symbol.fileName
 * @type file
 * @dir img/system
 * @desc TP シンボルのファイル名 [Default: bd_ether/ether_tp]
 * @default bd_ether/ether_tp
 * @require 1
 * 
 * @param (integer)tp.gauge.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP ゲージの X 座標 [Default: 0]
 * 
 * @param (integer)tp.gauge.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP ゲージの Y 座標 [Default: 22]
 * 
 * @param (boolean)tp.gauge.visible
 * @type boolean
 * @desc TP ゲージを表示する [Default: true]
 * 
 * @param (string)tp.gauge.fileName
 * @type file
 * @dir img/system
 * @desc TP ゲージのファイル名 [Default: bd_ether/ether_tp_gauge]
 * @default bd_ether/ether_tp_gauge
 * @require 1
 * 
 * @param (integer)tp.gauge.startAngle
 * @type number
 * @min -359
 * @max 359
 * @desc TP 円ゲージの開始角度 [Default: -88]
 * 
 * @param (integer)tp.gauge.endAngle
 * @type number
 * @min -359
 * @max 359
 * @desc TP 円ゲージの開始角度 [Default: 272]
 * 
 * @param (integer)tp.gauge.radius
 * @type number
 * @min 16
 * @max 256
 * @desc TP 円ゲージの半径 [Default: 28]
 * 
 * @param (integer)tp.gauge.lineWidth
 * @type number
 * @min 1
 * @max 128
 * @desc TP 円ゲージの線幅 [Default: 8]
 * 
 * @param (integer)tp.gauge.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc TP ゲージのアニメーション速度 [Default: 8]
 * 
 * @param (integer)tp.number.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の X 座標 [Default: 12]
 * 
 * @param (integer)tp.number.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の Y 座標 [Default: 28]
 * 
 * @param (boolean)tp.number.visible
 * @type boolean
 * @desc TP 数字を表示する [Default: true]
 * 
 * @param (string)tp.number.fileName
 * @type file
 * @dir img/system
 * @desc TP 数字のファイル名 [Default: bd_ether/ether_small_numbers]
 * @default bd_ether/ether_small_numbers
 * @require 1
 * 
 * @param (integer)tp.number.digits
 * @type number
 * @min 1
 * @max 10
 * @desc TP 数字の桁数 [Default: 3]
 * 
 * @param (boolean)tp.number.zeroSuppress
 * @type boolean
 * @desc TP 数字の上位桁の 0 を抑制する。false の場合、ゼロ埋めを行います [Default: true]
 * 
 * @param (integer)tp.number.horizontalSpacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc TP 数字の桁毎の間隔 [Default: -5]
 * 
 * @param (integer)tp.number.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc TP 数字の文字揃え 0: 左 1: 中央 2: 右 [Default: 1]
 * 
 * @param (integer)tp.number.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc TP 数字のアニメーション速度 [Default: 8]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)state.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートの基準 X 座標 [Default: 4]
 * 
 * @param (integer)state.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートの基準 Y 座標 [Default: 113]
 * 
 * @param (boolean)state.visible
 * @type boolean
 * @desc ステートを表示する [Default: true]
 * 
 * @param (integer)state.bg.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステート背景の X 座標 [Default: 0]
 * 
 * @param (integer)state.bg.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステート背景の Y 座標 [Default: 0]
 * 
 * @param (boolean)state.bg.visible
 * @type boolean
 * @desc ステート背景を表示する(可視ステートが付与されている時) [Default: true]
 * 
 * @param (string)state.bg.fileName
 * @type file
 * @dir img/system
 * @desc ステート背景のファイル名 [Default: bd_ether/ether_state_bg]
 * @default bd_ether/ether_state_bg
 * @require 1
 * 
 * @param (integer)state.symbol.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートシンボルの X 座標 [Default: -24]
 * 
 * @param (integer)state.symbol.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートシンボルの Y 座標 [Default: -7]
 * 
 * @param (boolean)state.symbol.visible
 * @type boolean
 * @desc  ステートシンボルを表示する [Default: true]
 * 
 * @param (string)state.symbol.fileName
 * @type file
 * @dir img/system
 * @desc ステートシンボルのファイル名 [Default: bd_ether/ether_state]
 * @default bd_ether/ether_state
 * @require 1
 * 
 * @param (integer)state.icon.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートアイコンの X 座標 [Default: 12]
 * 
 * @param (integer)state.icon.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc ステートアイコンの Y 座標 [Default: 2]
 * 
 * @param (boolean)state.icon.visible
 * @type boolean
 * @desc ステートアイコンを表示する [Default: true]
* 
 * @param (integer)state.icon.stateIconSize
 * @type number
 * @min 4
 * @max 128
 * @desc ステートアイコンの表示サイズ [Default: 32]
 * 
 * @param (integer)state.icon.spacing
 * @type number
 * @min -4096
 * @max 4096
 * @desc アイコン毎の間隔 [Default: 0]
 * 
 * @param (integer)state.icon.maxStates
 * @type number
 * @min 1
 * @max 32
 * @desc ステートの最大表示数 [Default: 1]
 * 
 * @param (integer)state.icon.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc ステートの表示切り替え待ちフレーム [Default: 40]
 * 
 * ----------------------------------------------------------------------------
 * 
 * @param (integer)name.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc 名前の X 座標 [Default: 10]
 * 
 * @param (integer)name.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc 名前の Y 座標 [Default: 6]
 * 
 * @param (boolean)name.visible
 * @type boolean
 * @desc 名前を表示する [Default: false]
 * 
 * @param (integer)name.maxWidth
 * @type number
 * @min 32
 * @max 512
 * @desc 名前の最大横幅 [Default: 174]
 * 
 * @param (string)name.color
 * @type string
 * @desc 名前の文字色 [Default: rgba(255,255,255,1.0)]
 * 
 * @param (string)name.outlineColor
 * @type string
 * @desc 名前の縁取り色 [Default: rgba(0,0,0,1.0)]
 * 
 * @param (integer)name.outlineWidth
 * @type number
 * @min 0
 * @max 64
 * @desc 名前の縁取りの太さ [Default: 5]
 * 
 * @param (integer)name.fontSize
 * @type number
 * @min 4
 * @max 64
 * @desc 名前のフォントサイズ [Default: 19]
 * 
 * @param (string)name.fontFace
 * @type string
 * @desc 名前に使用するフォント [Default: GameFont]
 * 
 * @param (boolean)name.fontItalic
 * @type boolean
 * @desc 名前を斜体表示する [Default: false]
 * 
 * @param (integer)name.horizontalAlignment
 * @type number
 * @min 0
 * @max 2
 * @desc 名前の文字揃え 0: 左 1: 中央 2: 右 [Default: 0]
 * 
 */

(function () {
	if (BD === undefined) {
		return;
	}
	//
	// Default Parameters
	//
	var params = {
		"root": {
			"x": 0,
			"y": 0,
		},
		"hudBg": {
			"x": 0,
			"y": 444,
			"visible": true,
			"fileName": "bd_ether/hud_bg"
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
			"x": 0,
			"y": 0,
			"visible": true,
			"fileName": ""
		},
		"battler": {
			"x": 82,
			"y": 158,
			"visible": true,
			"zoom": 111,
			"overlayOffsetX": 0,
			"overlayOffsetY": -8,
			"isOverlayOnBottom": false,
			"maskImage": "",
			"maskImageX": 0,
			"maskImageY": 0
		},
		"statusBg": {
			"x": 18,
			"y": 48,
			"visible": true,
			"fileName": "bd_ether/ether_bg"
		},
		"hp": {
			"x": 67,
			"y": 97,
			"visible": true,
			"bg": {
				"x": 0,
				"y": 13,
				"visible": true,
				"fileName": "bd_ether/ether_gauge_bg"
			},
			"symbol": {
				"x": 11,
				"y": 8,
				"visible": true,
				"fileName": "bd_ether/ether_hp"
			},
			"gauge": {
				"x": 7,
				"y": 15,
				"visible": true,
				"fileName": "bd_ether/ether_gauge",
				"skewAngleX": -18,
				"skewAngleY": 0,
				"animationSpeed": 8
			},
			"number": {
				"x": 40,
				"y": 0,
				"visible": true,
				"fileName": "bd_ether/ether_large_numbers",
				"digits": 4,
				"horizontalSpacing": -5,
				"zeroSuppress": true,
				"horizontalAlignment": 2,
				"animationSpeed": 8
			},
		},
		"mp": {
			"x": 58,
			"y": 126,
			"visible": true,
			"bg": {
				"x": 0,
				"y": 13,
				"visible": true,
				"fileName": "bd_ether/ether_gauge_bg"
			},
			"symbol": {
				"x": 11,
				"y": 8,
				"visible": true,
				"fileName": "bd_ether/ether_mp"
			},
			"gauge": {
				"x": 7,
				"y": 15,
				"visible": true,
				"fileName": "bd_ether/ether_gauge",
				"skewAngleX": -18,
				"skewAngleY": 0,
				"animationSpeed": 8
			},
			"number": {
				"x": 40,
				"y": 0,
				"visible": true,
				"fileName": "bd_ether/ether_large_numbers",
				"digits": 4,
				"horizontalSpacing": -5,
				"zeroSuppress": true,
				"horizontalAlignment": 2,
				"animationSpeed": 8
			},
		},
		"tp": {
			"x": 124,
			"y": 35,
			"visible": true,
			"bg": {
				"x": 0,
				"y": 0,
				"visible": true,
				"fileName": "bd_ether/ether_tp_gauge_bg"
			},
			"symbol": {
				"x": 24,
				"y": 14,
				"visible": true,
				"fileName": "bd_ether/ether_tp"
			},
			"gauge": {
				"x": 0,
				"y": 0,
				"visible": true,
				"fileName": "bd_ether/ether_tp_gauge",
				"startAngle": -88,
				"endAngle": 272,
				"radius": 28,
				"lineWidth": 8,
				"animationSpeed": 8
			},
			"number": {
				"x": 12,
				"y": 28,
				"visible": true,
				"fileName": "bd_ether/ether_small_numbers",
				"digits": 3,
				"horizontalSpacing": -5,
				"zeroSuppress": true,
				"horizontalAlignment": 1,
				"animationSpeed": 8
			},
		},

		"state": {
			"x": 4,
			"y": 113,
			"visible": true,
			"bg": {
				"x": 0,
				"y": 0,
				"visible": true,
				"fileName": "bd_ether/ether_state_bg"
			},
			"symbol": {
				"x": -1,
				"y": -7,
				"visible": true,
				"fileName": "bd_ether/ether_state"
			},
			"icon": {
				"x": 12,
				"y": 2,
				"visible": true,
				"stateIconSize": 32,
				"spacing": 0,
				"maxStates": 1,
				"animationSpeed": 40,
			}
		},
		"name": {
			"x": 10,
			"y": 6,
			"visible": false,
			"maxWidth": 174,
			"color": "rgba(255,255,255,1.0)",
			"outlineColor": "rgba(0,0,0,0.66)",
			"outlineWidth": 5,
			"fontSize": 19,
			"fontFace": "GameFont",
			"fontItalic": true,
			"horizontalAlignment": 0,
		}
	}
	BD.Core.PluginParameterLoader.overwriteWithPluginParameters("XPB-EtherTheme", params);
	//
	// HUD Objects
	//
	var root = function () {
		return {
			"properties": {
				"type": "Root",
				"name": "Ether",
				"x": params.root.x,
				"y": params.root.y,
				"visible": true
			},
			"children": [].slice.call(arguments)
		}
	}
	var actorAreaBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "actorAreaBackground",
				"x": params.hudBg.x,
				"y": params.hudBg.y,
				"visible": params.hudBg.visible,
				"fileName": `'${params.hudBg.fileName}'`
			},
		}
	}
	var partyStatusContainer = function () {
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
			"children": [].slice.call(arguments)
		}
	}
	var background = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "Background",
				"x": params.bg.x,
				"y": params.bg.y,
				"visible": params.bg.visible,
				"fileName": `'${params.bg.fileName}'`
			},
		}
	}
	var statusBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "StatusBackground",
				"x": params.statusBg.x,
				"y": params.statusBg.y,
				"visible": params.statusBg.visible,
				"fileName": `'${params.statusBg.fileName}'`
			},
		}
	}
	var battler = function () {
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
				"maskImage": `'${params.battler.maskImage}'`,
				"maskImageX": params.battler.maskImageX,
				"maskImageY": params.battler.maskImageY
			}
		}
	}
	var hpContainer = function () {
		return {
			"properties": {
				"type": "Container",
				"name": "HPContainer",
				"x": params.hp.x,
				"y": params.hp.y,
				"visible": params.hp.visible
			},
			"children": [].slice.call(arguments)
		}
	}
	var mpContainer = function () {
		return {
			"properties": {
				"type": "Container",
				"name": "MPContainer",
				"x": params.mp.x,
				"y": params.mp.y,
				"visible": params.mp.visible
			},
			"children": [].slice.call(arguments)
		}
	}
	var tpContainer = function () {
		return {
			"properties": {
				"type": "Container",
				"name": "TPContainer",
				"x": params.tp.x,
				"y": params.tp.y,
				"visible": params.tp.visible ?
					"BD.Core.Settings.isDisplayTp()" : false
			},
			"children": [].slice.call(arguments)
		}
	}
	var stateContainer = function () {
		return {
			"properties": {
				"type": "Container",
				"name": "StateContainer",
				"x": params.state.x,
				"y": params.state.y,
				"visible": params.state.visible,
			},
			"children": [].slice.call(arguments)
		}
	}
	var hpBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "HPBackground",
				"x": params.hp.bg.x,
				"y": params.hp.bg.y,
				"visible": params.hp.bg.visible,
				"fileName": `'${params.hp.bg.fileName}'`,
			}
		}
	}
	var hpSymbol = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "HPSymbol",
				"x": params.hp.symbol.x,
				"y": params.hp.symbol.y,
				"visible": params.hp.symbol.visible,
				"fileName": `'${params.hp.symbol.fileName}'`,
			}
		}
	}
	var hpGauge = function () {
		return {
			"properties": {
				"type": "HorizontalGauge",
				"name": "HPGauge",
				"x": params.hp.gauge.x,
				"y": params.hp.gauge.y,
				"visible": params.hp.gauge.visible,
				"fileName": `'${params.hp.gauge.fileName}'`,
				"skewAngleX": params.hp.gauge.skewAngleX,
				"skewAngleY": params.hp.gauge.skewAngleY,
				"value": "this.b.hp",
				"maxValue": "this.b.hudMhp()",
				"pattern": 0,
				"maxPattern": 2,
				"animationSpeed": params.hp.gauge.animationSpeed
			}
		}
	}
	var hpNumber = function () {
		return {
			"properties": {
				"type": "Number",
				"name": "HPNumber",
				"x": params.hp.number.x,
				"y": params.hp.number.y,
				"visible": params.hp.number.visible,
				"fileName": `'${params.hp.number.fileName}'`,
				"value": "this.b.hp",
				"pattern": "this.b.hudHpNumberPattern()",
				"maxPattern": 3,
				"digits": params.hp.number.digits,
				"horizontalSpacing": params.hp.number.horizontalSpacing,
				"zeroSuppress": params.hp.number.zeroSuppress,
				"horizontalAlignment": params.hp.number.horizontalAlignment,
				"animationSpeed": params.hp.number.animationSpeed
			}
		}
	}
	var mpBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "MPBackground",
				"x": params.mp.bg.x,
				"y": params.mp.bg.y,
				"visible": params.mp.bg.visible,
				"fileName": `'${params.mp.bg.fileName}'`,
			}
		}
	}
	var mpSymbol = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "MPSymbol",
				"x": params.mp.symbol.x,
				"y": params.mp.symbol.y,
				"visible": params.mp.symbol.visible,
				"fileName": `'${params.mp.symbol.fileName}'`,
			}
		}
	}
	var mpGauge = function () {
		return {
			"properties": {
				"type": "HorizontalGauge",
				"name": "MPGauge",
				"x": params.mp.gauge.x,
				"y": params.mp.gauge.y,
				"visible": params.mp.gauge.visible,
				"fileName": `'${params.mp.gauge.fileName}'`,
				"skewAngleX": params.mp.gauge.skewAngleX,
				"skewAngleY": params.mp.gauge.skewAngleY,
				"value": "this.b.mp",
				"maxValue": "this.b.hudMmp()",
				"pattern": 1,
				"maxPattern": 2,
				"animationSpeed": params.mp.gauge.animationSpeed
			}
		}
	}
	var mpNumber = function () {
		return {
			"properties": {
				"type": "Number",
				"name": "MPNumber",
				"x": params.mp.number.x,
				"y": params.mp.number.y,
				"visible": params.mp.number.visible,
				"fileName": `'${params.mp.number.fileName}'`,
				"value": "this.b.mp",
				"pattern": 0,
				"maxPattern": 3,
				"digits": params.mp.number.digits,
				"horizontalSpacing": params.mp.number.horizontalSpacing,
				"zeroSuppress": params.mp.number.zeroSuppress,
				"horizontalAlignment": params.mp.number.horizontalAlignment,
				"animationSpeed": params.mp.number.animationSpeed
			}
		}
	}
	var tpBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "TPBackground",
				"x": params.tp.bg.x,
				"y": params.tp.bg.y,
				"visible": params.tp.bg.visible,
				"fileName": `'${params.tp.bg.fileName}'`
			}
		}
	}
	var tpSymbol = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "TPSymbol",
				"x": params.tp.symbol.x,
				"y": params.tp.symbol.y,
				"visible": params.tp.symbol.visible,
				"fileName": `'${params.tp.symbol.fileName}'`,
			}
		}
	}
	var tpGauge = function () {
		return {
			"properties": {
				"type": "CircleGauge",
				"name": "TPGauge",
				"x": params.tp.gauge.x,
				"y": params.tp.gauge.y,
				"visible": params.tp.gauge.visible,
				"fileName": `'${params.tp.gauge.fileName}'`,
				"value": "this.b.tp",
				"maxValue": "this.b.maxTp()",
				"startAngle": params.tp.gauge.startAngle,
				"endAngle": params.tp.gauge.endAngle,
				"radius": params.tp.gauge.radius,
				"lineWidth": params.tp.gauge.lineWidth,
				"animationSpeed": params.tp.gauge.animationSpeed
			}
		}
	}
	var tpNumber = function () {
		return {
			"properties": {
				"type": "Number",
				"name": "TPNumber",
				"x": params.tp.number.x,
				"y": params.tp.number.y,
				"visible": params.tp.number.visible,
				"fileName": `'${params.tp.number.fileName}'`,
				"value": "this.b.tp",
				"pattern": 0,
				"maxPattern": 3,
				"digits": params.tp.number.digits,
				"horizontalSpacing": params.tp.number.horizontalSpacing,
				"zeroSuppress": params.tp.number.zeroSuppress,
				"horizontalAlignment": params.tp.number.horizontalAlignment,
				"animationSpeed": params.tp.number.animationSpeed
			}
		}
	}
	var stateBackground = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "StateBackground",
				"x": params.state.bg.x,
				"y": params.state.bg.y,
				"visible": params.state.bg.visible,
				"fileName": `'${params.state.bg.fileName}'`
			}
		}
	}
	var stateIcon = function () {
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
		}
	}
	var stateSymbol = function () {
		return {
			"properties": {
				"type": "Image",
				"name": "StateSymbol",
				"x": params.state.symbol.x,
				"y": params.state.symbol.y,
				"visible": params.state.symbol.visible,
				"fileName": `'${params.state.symbol.fileName}'`
			}
		}
	}
	var actorName = function () {
		return {
			"properties": {
				"type": "Text",
				"name": "ActorName",
				"x": params.name.x,
				"y": params.name.y,
				"visible": params.name.visible,
				"text": "this.b.name()",
				"maxWidth": params.name.maxWidth,
				"color": `'${params.name.color}'`,
				"outlineColor": `'${params.name.outlineColor}'`,
				"outlineWidth": params.name.outlineWidth,
				"fontSize": params.name.fontSize,
				"fontFace": `'${params.name.fontFace}'`,
				"fontItalic": params.name.fontItalic,
				"horizontalAlignment": params.name.horizontalAlignment
			}
		}
	}
	//
	// Construct HUD Tree
	//
	var hud = root(
		actorAreaBackground(),
		partyStatusContainer(
			background()
		),
		partyStatusContainer(
			battler()
		),
		partyStatusContainer(
			statusBackground(),
			tpContainer(
				tpBackground(),
				tpGauge(),
				tpSymbol(),
				tpNumber()
			),
			hpContainer(
				hpBackground(),
				hpGauge(),
				hpSymbol(),
				hpNumber()
			),
			mpContainer(
				mpBackground(),
				mpGauge(),
				mpSymbol(),
				mpNumber()
			),
			stateContainer(
				stateBackground(),
				stateIcon(),
				stateSymbol(),
			),
			actorName()
		),
	);
	BD.Core.Settings.setHud(hud);
})();