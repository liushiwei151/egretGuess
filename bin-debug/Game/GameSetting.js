var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameSetting = (function (_super) {
    __extends(GameSetting, _super);
    function GameSetting() {
        return _super.call(this) || this;
    }
    GameSetting.Shared = function () {
        if (GameSetting.shared == null) {
            GameSetting.shared = new GameSetting();
        }
        return GameSetting.shared;
    };
    GameSetting.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSetting.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameSetting.prototype.init = function () {
        //确定按钮
        this.btn_green.addEventListener(egret.TouchEvent.TOUCH_TAP, this.green_tap, this);
        //背景音量按钮
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.music_tap, this);
        //背景音乐
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sound_tap, this);
        //初始化音乐/音效的显示
        this.updata_button_stage();
    };
    GameSetting.prototype.green_tap = function () {
        // 隐藏设置场景
        this.parent.removeChild(this);
        //播放点击音效
        GameSound.Shared().playClick();
    };
    GameSetting.prototype.music_tap = function () {
        GameSound.Shared().playClick();
        GameSound.Shared().isMusic = !GameSound.Shared().isMusic;
        //改变状态，(如果是可播放状态,则设置为禁用)
        this.updata_button_stage();
    };
    GameSetting.prototype.sound_tap = function () {
        GameSound.Shared().playClick();
        GameSound.Shared().isSound = !GameSound.Shared().isSound;
        this.updata_button_stage();
    };
    GameSetting.prototype.updata_button_stage = function () {
        this.btn_music_disable.visible = !GameSound.Shared().isMusic;
        this.btn_sound_disable.visible = !GameSound.Shared().isSound;
    };
    return GameSetting;
}(eui.Component));
__reflect(GameSetting.prototype, "GameSetting", ["eui.UIComponent", "egret.DisplayObject"]);
