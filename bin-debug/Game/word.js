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
var word = (function (_super) {
    __extends(word, _super);
    function word() {
        return _super.call(this) || this;
    }
    word.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    word.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化
    word.prototype.init = function () {
        this.lb_text.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wordtap, this);
    };
    //选择区域文字的响应方法
    word.prototype.wordtap = function () {
        //点击文字，让游戏场景去处理
        SceneGame.Shared().word_click(this);
    };
    //设置文本内容
    //别的组件复制用是get
    //如果是他等于别人使用set
    word.prototype.setWordText = function (val) {
        this.lb_text.text = val;
    };
    //获取文本内容
    word.prototype.getWordText = function () {
        return this.lb_text.text;
    };
    return word;
}(eui.Component));
__reflect(word.prototype, "word", ["eui.UIComponent", "egret.DisplayObject"]);
//答案区域的字（四字成语）
var AnswerWord = (function (_super) {
    __extends(AnswerWord, _super);
    function AnswerWord() {
        var _this = _super.call(this) || this;
        // 记录答案区域的内容
        _this.SelectWord = null;
        return _this;
    }
    //点击答案区域的字的响应方法
    AnswerWord.prototype.wordtap = function () {
        //如果点击的答案区有内容
        if (this.SelectWord) {
            //清空答案区
            this.setWordText('');
            this.SelectWord.visible = true;
            this.SelectWord = null;
        }
    };
    //点击选择区域的word,在answerword中记录下来这个word
    AnswerWord.prototype.setSelecword = function (word) {
        if (word) {
            word.visible = false;
            this.setWordText(word.getWordText());
        }
        else {
            this.setWordText('');
        }
        //记录点击的word
        this.SelectWord = word;
    };
    return AnswerWord;
}(word));
__reflect(AnswerWord.prototype, "AnswerWord");
//把word和AnsWord挂载在window对象里
window['word'] = word;
window['AnswerWord'] = AnswerWord;
