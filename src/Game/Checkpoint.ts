class Checkpoint extends eui.Component implements  eui.UIComponent {
	//滚动容器
	public level_group:eui.Scroller;
	//滚动的关卡容器
	public group_level:eui.Group;
	//向下箭头
	public img_arrow:eui.Image;
	//返回按钮
	public btn_back:eui.Button;

	//选中的关卡
	private set_level:number=0;
	//声明一个数组，存放关卡按钮
	private levelIcons:levelIcon[]=[];

	//声明单例
	private static shared:Checkpoint;
	public static Shared():Checkpoint{
		if(Checkpoint.shared==null){
			Checkpoint.shared=new Checkpoint();
		}
		return Checkpoint.shared;
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
		console.log(this.level_group)
		//禁用滚动视图的横向滚动
		this.level_group.scrollPolicyH = eui.ScrollPolicy.OFF;
		//给返回按钮绑定事件
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.back_tap,this);
		//把舞台横向分为10份，纵向分为20份
		var row =10;
		var col=20;
		//水平一份的大小
		var spanX=this.width/row;
		//垂直一份的大小
		var spanY=this.height/col;
		//定义一个组容器
		var group =new eui.Group();
		this.group_level.addChild(group);
		group.width=this.width;
		//滚动容器的关卡的高度=关卡的高度*关卡的个数
		group.height=spanY*400;

		//填充滚动容器的背景
		for(var i:number=0;i<group.height/this.height;i++){
			var img =new eui.Image();
			//填充img的背景
			img.source=RES.getRes('GameBG2_jpg');
			//设置img的高度，让前后两img上下相连
			img.y=i*this.height;
			//禁用背景图
			img.touchEnabled=false;
			//添加到滚动视图的显示列表
			this.group_level.addChildAt(img,0);
		}
		//获取游戏存档关卡中玩的最远关卡
		var milestrone:number=levelData.Shared().Miletone;
		//动态生成关卡按钮
		for(var i:number=0;i<400;i++){
			//定义一个关卡按钮
			var icon =new levelIcon();
			//添加到group中去
			group.addChild(icon);
			//设置关卡文本
			icon.level=i+1;
			// 设置x轴的位置
			icon.x=Math.sin(spanY*i/2/180*Math.PI)*200+group.width/2;
			icon.y=group.height-spanY*i-icon.height;
			// 给每个关卡按钮绑定点击方法
			icon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.levelicon,this);
			//根据存档来设置关卡按钮的状态
			icon.enabled=i<milestrone;
			//把关卡按钮存放起来
			this.levelIcons.push(icon);
		}
		//滚动视图默认出现在最底部
		this.group_level.scrollV=group.height-this.height;
		//指示箭头的位置
		//修改箭头的锚点为底部的尖端点
		this.img_arrow.anchorOffsetX=this.img_arrow.width/2;
		this.img_arrow.anchorOffsetY=this.img_arrow.height;
		this.img_arrow.touchEnabled=false;
		// 游戏初始化的时候，箭头出现在最远关卡的正上方
		//声明最远的关卡
		var current =group.getChildAt(milestrone-1)
		this.img_arrow.x=current.x+current.width/2;
		this.img_arrow.y=current.y;
		// 设置当前选中的关卡
		this.set_level=milestrone;
		//让箭头显示到最顶层
		this.group_level.addChild(this.img_arrow)
	}
	//点击返回按钮的响应函数
	private back_tap(){
		this.parent.addChild(GameStarts.Shared());
		this.parent.removeChild(this);
	}
	//点击关卡按钮的响应函数
	private levelicon(e:egret.TouchEvent){
		//获取被点击的关卡按钮
		var icon =<levelIcon>e.currentTarget;
		if(this.set_level!=icon.level){
			//如果指示箭头指向的关卡不是我们点击关卡，则移动指示箭头到点击关卡处
			this.img_arrow.x=icon.x+icon.width/2;
			this.img_arrow.y=icon.y;
			//记录指示箭头指向的关卡
			this.set_level=icon.level;
		}else{
			//点击的关卡就是箭头指着的关卡，则直接进入游戏场景开始游戏
			this.parent.addChild(SceneGame.Shared());
			this.parent.removeChild(this);
			//传入点击的关卡所在的关卡数组的下标
			SceneGame.Shared().initlevel(icon.level-1)
		}
	}
	//记录玩家最远关卡
	public setMile(level:number){
		//拿到关卡按钮
		var icon =this.levelIcons[level-1];
		//设置关卡为激活状态
		icon.enabled=true;
		//设置指示箭头在关卡之上
		this.img_arrow.x=icon.x+icon.width/2;
		this.img_arrow.y=icon.y;
		//记录最远关卡
		if(level<levelData.Shared().Miletone){
			levelData.Shared().Miletone=level;
		}
	}
}