var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSound = (function () {
    function GameSound() {
        //加载所有文件
        this.click_sound = new egret.Sound();
        // this.click_sound.load(url)
        this.click_sound = RES.getRes('buttonclick_mp3');
        this.bgm_sound = RES.getRes('Music_mp3');
        this.wold_sound = RES.getRes('type_word_mp3');
        this.right_sound = RES.getRes('right_mp3');
        this.wrong_sound = RES.getRes('wrong_mp3');
    }
    GameSound.Shared = function () {
        if (GameSound.shared == null) {
            GameSound.shared = new GameSound();
        }
        return GameSound.shared;
    };
    //播放背景音乐
    GameSound.prototype.playBgm = function () {
        this.bgm_channel = this.bgm_sound.play(0, 0);
    };
    //停止背景音乐
    GameSound.prototype.stopBgm = function () {
        if (this.bgm_channel != null) {
            this.bgm_channel.stop();
        }
    };
    //音效播放
    GameSound.prototype.playClick = function () {
        if (this.isSound) {
            this.click_sound.play(0, 1);
        }
    };
    //成功的音效
    GameSound.prototype.playRight = function () {
        if (this.isSound) {
            this.right_sound.play(0, 1);
        }
    };
    //失败的音效
    GameSound.prototype.playWrong = function () {
        if (this.isSound) {
            this.wrong_sound.play(0, 1);
        }
    };
    //成功的音效
    GameSound.prototype.playWold = function () {
        if (this.isSound) {
            this.wold_sound.play(0, 1);
        }
    };
    Object.defineProperty(GameSound.prototype, "isMusic", {
        //获取音乐是否播放
        get: function () {
            var b = egret.localStorage.getItem('isMusic');
            if (b == '1' || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        //音乐是否播放,保存设置
        set: function (val) {
            if (!val) {
                egret.localStorage.setItem('isMusic', "0");
                this.stopBgm();
            }
            else {
                egret.localStorage.setItem('isMusic', "1");
                this.playBgm();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameSound.prototype, "isSound", {
        //获取音效配置
        get: function () {
            var b = egret.localStorage.getItem('isSound');
            if (b == '1' || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        //音效是否保存设置
        set: function (val) {
            if (!val) {
                egret.localStorage.setItem('isSound', "0");
            }
            else {
                egret.localStorage.setItem('isSound', "1");
            }
        },
        enumerable: true,
        configurable: true
    });
    return GameSound;
}());
__reflect(GameSound.prototype, "GameSound");
