class GameSound {
	//点击按钮
	private click_sound:egret.Sound;
	//点击字块
	private wold_sound:egret.Sound;
	//胜利
	private right_sound:egret.Sound;
	//失败
	private wrong_sound:egret.Sound;
	//背景音乐
	private bgm_sound:egret.Sound;
	//静音的音轨 
	private bgm_channel:egret.SoundChannel;

	//声明单例
	private static shared:GameSound;
	public static Shared():GameSound{
		if(GameSound.shared==null){
			GameSound.shared=new GameSound();
		}
		return GameSound.shared;
	}

	public constructor() {
		//加载所有文件
		this.click_sound=new egret.Sound();
		// this.click_sound.load(url)
		this.click_sound=RES.getRes('buttonclick_mp3');
		this.bgm_sound=RES.getRes('Music_mp3');
		this.wold_sound=RES.getRes('type_word_mp3');
		this.right_sound=RES.getRes('right_mp3');
		this.wrong_sound=RES.getRes('wrong_mp3');
	}
	//播放背景音乐
	public playBgm(){
		this.bgm_channel=this.bgm_sound.play(0,0);
	}
	//停止背景音乐
	public stopBgm(){
		if(this.bgm_channel!=null){
			this.bgm_channel.stop()
		}
	}
	//音效播放
	public playClick(){
		if(this.isSound){
			this.click_sound.play(0,1)
		}
	}
	//成功的音效
	public playRight(){
		if(this.isSound){
			this.right_sound.play(0,1)
		}
	}
	//失败的音效
	public playWrong(){
		if(this.isSound){
			this.wrong_sound.play(0,1)
		}
	}
	//成功的音效
	public playWold(){
		if(this.isSound){
			this.wold_sound.play(0,1)
		}
	}



	//音乐是否播放,保存设置
	public set isMusic(val){
		if(!val){
			egret.localStorage.setItem('isMusic',"0");
			this.stopBgm();
		}else{
			egret.localStorage.setItem('isMusic',"1");
			this.playBgm();
		}
	}
	//获取音乐是否播放
	public get isMusic(){
		var b =egret.localStorage.getItem('isMusic');
		if(b=='1'||b==""){
			return true;

		}else{
			return b=="1";
		}
	}

	//音效是否保存设置
		public set isSound(val){
		if(!val){
			egret.localStorage.setItem('isSound',"0")
		}else{
			egret.localStorage.setItem('isSound',"1");
		}
	}
	//获取音效配置
	public get isSound(){
		var b =egret.localStorage.getItem('isSound');
		if(b=='1'||b==""){
			return true;
		}else{
			return b=="1";
		}
	}
}