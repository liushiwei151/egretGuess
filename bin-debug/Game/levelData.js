var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var levelData = (function () {
    function levelData() {
        //声明一个数组。用来保存关卡数据
        this.items = [];
        //加载所有数据
        this.items = RES.getRes('questions_json');
    }
    levelData.Shared = function () {
        if (levelData.shared == null) {
            levelData.shared = new levelData();
        }
        return levelData.shared;
    };
    //通过关卡号获取该关卡的数据
    levelData.prototype.getLevel = function (level) {
        if (level < 0) {
            level = 0;
        }
        if (level >= this.items.length) {
            level = this.items.length - 1;
        }
        //通过数据下标访问数据
        return this.items[level];
    };
    Object.defineProperty(levelData.prototype, "Miletone", {
        //获取当前游戏最远的进度
        get: function () {
            var miletone = egret.localStorage.getItem('guessWord');
            if (miletone == '' || miletone == null) {
                miletone = '1';
            }
            return parseInt(miletone);
        },
        //设置当前游戏最远的进度
        set: function (val) {
            egret.localStorage.setItem('guessWord', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    return levelData;
}());
__reflect(levelData.prototype, "levelData");
//每个关卡的model
var levelDatas = (function () {
    function levelDatas() {
    }
    return levelDatas;
}());
__reflect(levelDatas.prototype, "levelDatas");
