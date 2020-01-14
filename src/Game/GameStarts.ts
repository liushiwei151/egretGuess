class GameStarts extends eui.Component implements  eui.UIComponent {
	//设置按钮
	public btn_setting:eui.Button;
	//开始按钮
	public btn_start:eui.Button;


	//声明单例
	private static shared:GameStarts;
	public static Shared():GameStarts{
		if(GameStarts.shared==null){
			GameStarts.shared=new GameStarts();
		}
		return GameStarts.shared;
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
	//初始化
	private init(){
		//给两按钮绑定点击事件
		this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setting_tap,this);
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startgame,this);
		//设置游戏背景音乐默认是可播放的
		// GameSound.Shared().isMusic=true;
		
	}

	private setting_tap(){
		//播放音效
		GameSound.Shared().playClick();
		//打开设置页面
		this.addChild(GameSetting.Shared());
	}
	private startgame(){
		//跳转到关卡页面
		console.log('关卡');
		this.parent.addChild(Checkpoint.Shared());
		this.parent.removeChild(this);
	}
}