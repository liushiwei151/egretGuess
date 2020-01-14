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
var GameStarts = (function (_super) {
    __extends(GameStarts, _super);
    function GameStarts() {
        return _super.call(this) || this;
    }
    GameStarts.Shared = function () {
        if (GameStarts.shared == null) {
            GameStarts.shared = new GameStarts();
        }
        return GameStarts.shared;
    };
    GameStarts.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameStarts.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化
    GameStarts.prototype.init = function () {
        //给两按钮绑定点击事件
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting_tap, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startgame, this);
        //设置游戏背景音乐默认是可播放的
        // GameSound.Shared().isMusic=true;
    };
    GameStarts.prototype.setting_tap = function () {
        //播放音效
        GameSound.Shared().playClick();
        //打开设置页面
        this.addChild(GameSetting.Shared());
    };
    GameStarts.prototype.startgame = function () {
        //跳转到关卡页面
        console.log('关卡');
        this.parent.addChild(Checkpoint.Shared());
        this.parent.removeChild(this);
    };
    return GameStarts;
}(eui.Component));
__reflect(GameStarts.prototype, "GameStarts", ["eui.UIComponent", "egret.DisplayObject"]);
