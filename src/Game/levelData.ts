
class levelData {
	//声明一个数组。用来保存关卡数据
	 private items:levelDatas[]=[];
	//声明单例
	private static shared:levelData;
	public static Shared():levelData{
		if(levelData.shared==null){
			levelData.shared=new levelData();
		}
		return levelData.shared;
	}

	public constructor() {
		//加载所有数据
		this.items=RES.getRes('questions_json');
	}
	//通过关卡号获取该关卡的数据
	public getLevel(level:number):levelDatas{
		if(level<0){
			level=0;
		}
		if(level>=this.items.length){
			level=this.items.length-1
		}
		//通过数据下标访问数据
		return this.items[level];
	}
	//获取当前游戏最远的进度
	public get Miletone():number{
		var miletone=egret.localStorage.getItem('guessWord');
		if(miletone==''||miletone==null){
			miletone='1';
		}
		return parseInt(miletone)
	}
	//设置当前游戏最远的进度
	public set Miletone(val:number){
		egret.localStorage.setItem('guessWord',val.toString());
	}
}
//每个关卡的model
class levelDatas{
	public answer:string;
	public img:string;
	public word:string;
	public tip:string;
	public content:string;
}