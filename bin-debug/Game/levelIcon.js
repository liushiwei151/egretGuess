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
var levelIcon = (function (_super) {
    __extends(levelIcon, _super);
    function levelIcon() {
        return _super.call(this) || this;
    }
    levelIcon.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    levelIcon.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Object.defineProperty(levelIcon.prototype, "level", {
        //设置lb_level的函数
        get: function () {
            return parseInt(this.lb_level.text);
        },
        set: function (val) {
            if (this.lb_level) {
                this.lb_level.text = val.toString();
            }
        },
        enumerable: true,
        configurable: true
    });
    return levelIcon;
}(eui.Button));
__reflect(levelIcon.prototype, "levelIcon", ["eui.UIComponent", "egret.DisplayObject"]);
