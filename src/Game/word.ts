class word extends eui.Component implements  eui.UIComponent {
	//组件中的文本
	public lb_text:eui.Label;

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
		this.lb_text.addEventListener(egret.TouchEvent.TOUCH_TAP,this.wordtap,this);
	}
	//选择区域文字的响应方法
	protected wordtap(){
		//点击文字，让游戏场景去处理
		SceneGame.Shared().word_click(this);
	}
	//设置文本内容
	//别的组件复制用是get
	//如果是他等于别人使用set
	public setWordText(val:string){
		this.lb_text.text=val;
	}
	//获取文本内容
	public getWordText():string{
		return this.lb_text.text;
	}
}

//答案区域的字（四字成语）
class AnswerWord extends word{
	// 记录答案区域的内容
	public SelectWord:word=null;
	public constructor(){
		super()
	}
	//点击答案区域的字的响应方法
	protected wordtap(){
		//如果点击的答案区有内容
		if(this.SelectWord){
			//清空答案区
			this.setWordText('');
			this.SelectWord.visible=true;
			this.SelectWord=null;
		}
	}
	//点击选择区域的word,在answerword中记录下来这个word
	public setSelecword(word:word){
		if(word){
			word.visible=false;
			this.setWordText(word.getWordText());
		}else{
			this.setWordText('');
		}
		//记录点击的word
		this.SelectWord=word;
	}
}

//把word和AnsWord挂载在window对象里
window['word']=word;
window['AnswerWord']=AnswerWord;