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
var SceneGame = (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame() {
        var _this = _super.call(this) || this;
        //当前关卡的数
        _this.level_index = 0;
        return _this;
    }
    SceneGame.Shared = function () {
        if (SceneGame.shared == null) {
            SceneGame.shared = new SceneGame();
        }
        return SceneGame.shared;
    };
    SceneGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SceneGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    SceneGame.prototype.init = function () {
        //返回按钮
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back_tap, this);
        //下一关绑定事件
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.next_tap, this);
    };
    //返回按钮的响应函数
    SceneGame.prototype.back_tap = function () {
        this.parent.addChild(Checkpoint.Shared());
        this.parent.removeChild(this);
    };
    //下一关按钮的响应函数
    SceneGame.prototype.next_tap = function () {
        //把游戏正确场景隐藏
        this.group_win.visible = false;
        //重新初始化页面并进入下一关
        this.initlevel(this.level_index + 1);
        //记录最远关卡
        Checkpoint.Shared().setMile(this.level_index + 1);
    };
    // 初始化游戏场景
    SceneGame.prototype.initlevel = function (level) {
        //记录关卡
        this.level_index = level;
        //获取关卡的数据和内容
        var levelDatas = levelData.Shared().getLevel(this.level_index);
        //把自己关卡答案的4个字和混淆的6个拼接起来
        var i = this.radom(400);
        var levelDatass = levelData.Shared().getLevel(i);
        var words = levelDatas.answer + levelDatas.word + levelDatass.answer + levelDatass.word;
        //对20个字进行重新打乱排序
        var newword = [];
        var arr = words.split('');
        for (var p = 0; p < 20; p++) {
            var index = Math.floor(Math.random() * arr.length);
            newword.push(arr[index]);
            arr.splice(index, 1);
        }
        var res = newword.slice();
        //把20个字渲染进页面
        for (var i = 0; i < this.group_words.numChildren; i++) {
            //获取选择区域组件
            var wordRect = this.group_words.getChildAt(i);
            //根据选择区域的方法改变文字
            wordRect.setWordText(res[i]);
            //设置word可视
            wordRect.visible = true;
        }
        //对答案区域进行状态初始化
        for (var i = 0; i < this.group_answer.numChildren; i++) {
            var answer = this.group_answer.getChildAt(i);
            answer.setSelecword(null);
            answer.visible = true;
            answer.SelectWord = null;
        }
        //显示图片提示
        this.img_question.source = "resource/assets/data/" + levelDatas.img;
    };
    // 随机数
    SceneGame.prototype.radom = function (num) {
        var radomnum = Math.floor(Math.random() * num);
        return radomnum;
    };
    //点击选择区域的文本后的响应函数
    SceneGame.prototype.word_click = function (word) {
        GameSound.Shared().playWold();
        var sel = null;
        for (var i = 0; i < this.group_answer.numChildren; i++) {
            var answer = this.group_answer.getChildAt(i);
            if (answer.SelectWord == null) {
                sel = answer;
                break;
            }
        }
        //如果存在空白区，则把点击的文字上传到答案区
        if (sel) {
            sel.setSelecword(word);
            //胜利判断
            var check_str = "";
            for (var i = 0; i < this.group_answer.numChildren; i++) {
                var answer = this.group_answer.getChildAt(i);
                check_str += answer.getWordText();
            }
            //如果答案区的拼成成语等于当前关卡的答案，则弹出正解场景页面
            if (check_str == levelData.Shared().getLevel(this.level_index).answer) {
                this.showWin();
            }
        }
    };
    //显示正解场景
    SceneGame.prototype.showWin = function () {
        //  console.log("答案正确")
        //让游戏的正解场景显示
        this.group_win.visible = true;
        //获取游戏关卡
        var levelDatas = levelData.Shared().getLevel(this.level_index);
        this.lb_from.text = levelDatas.tip;
        this.lb_explain.text = levelDatas.content;
    };
    return SceneGame;
}(eui.Component));
__reflect(SceneGame.prototype, "SceneGame", ["eui.UIComponent", "egret.DisplayObject"]);
