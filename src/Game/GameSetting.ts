class GameSetting extends eui.Component implements  eui.UIComponent {
	//确定按钮
	public btn_green:eui.Button;
	//音乐按钮
	public btn_music:eui.Button;
	//禁止音乐按钮
	public btn_music_disable:eui.Image;
	//音效按钮
	public btn_sound:eui.Button;
	// 禁止音效按钮
	public btn_sound_disable:eui.Image;

	//声明单例
	private static shared:GameSetting;
	public static Shared():GameSetting{
		if(GameSetting.shared==null){
			GameSetting.shared=new GameSetting();
		}
		return GameSetting.shared;
	}

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){
		//确定按钮
		this.btn_green.addEventListener(egret.TouchEvent.TOUCH_TAP,this.green_tap,this);
		//背景音量按钮
		this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP,this.music_tap,this);
		//背景音乐
		this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sound_tap,this);
		//初始化音乐/音效的显示
		this.updata_button_stage();
	}
	private green_tap(){
		// 隐藏设置场景
		this.parent.removeChild(this);
		//播放点击音效
		GameSound.Shared().playClick();
	}
	private music_tap(){
		GameSound.Shared().playClick();
		GameSound.Shared().isMusic=!GameSound.Shared().isMusic;
		//改变状态，(如果是可播放状态,则设置为禁用)
		this.updata_button_stage();

	}
	private sound_tap(){
		GameSound.Shared().playClick();
		GameSound.Shared().isSound=!GameSound.Shared().isSound;
		this.updata_button_stage();
	}
	private updata_button_stage(){
		this.btn_music_disable.visible=!GameSound.Shared().isMusic;
		this.btn_sound_disable.visible=!GameSound.Shared().isSound;
	}
}