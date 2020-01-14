window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameStart":"resource/Game/GameStart.exml","Checkpoint":"resource/Game/Checkpoint.exml","levelicon":"resource/Game/levelicon.exml","levelIcon":"resource/Game/levelIcon.exml","GameStarts":"resource/Game/GameStarts.exml","SceneGame":"resource/Game/SceneGame.exml","word":"resource/Game/word.exml","GameSetting":"resource/Game/GameSetting.exml","GameSound":"resource/GameGameSound.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/Game/Checkpoint.exml'] = window.CheckpointSkin = (function (_super) {
	__extends(CheckpointSkin, _super);
	var CheckpointSkin$Skin1 = 	(function (_super) {
		__extends(CheckpointSkin$Skin1, _super);
		function CheckpointSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CheckpointSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CheckpointSkin$Skin1;
	})(eui.Skin);

	function CheckpointSkin() {
		_super.call(this);
		this.skinParts = ["img_arrow","group_level","level_group","btn_back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.level_group_i(),this.btn_back_i()];
	}
	var _proto = CheckpointSkin.prototype;

	_proto.level_group_i = function () {
		var t = new eui.Scroller();
		this.level_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this.group_level_i();
		return t;
	};
	_proto.group_level_i = function () {
		var t = new eui.Group();
		this.group_level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this.img_arrow_i()];
		return t;
	};
	_proto.img_arrow_i = function () {
		var t = new eui.Image();
		this.img_arrow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113.94;
		t.source = "PageDownBtn_png";
		t.width = 86.67;
		t.x = 394.97;
		t.y = 568;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.anchorOffsetX = 48.2;
		t.anchorOffsetY = 31.84;
		t.height = 63.91;
		t.label = "";
		t.width = 87.94;
		t.x = 560.76;
		t.y = 1064;
		t.skinName = CheckpointSkin$Skin1;
		return t;
	};
	return CheckpointSkin;
})(eui.Skin);generateEUI.paths['resource/Game/GameSetting.exml'] = window.GameSettingSkin = (function (_super) {
	__extends(GameSettingSkin, _super);
	var GameSettingSkin$Skin2 = 	(function (_super) {
		__extends(GameSettingSkin$Skin2, _super);
		function GameSettingSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","YesBtn1_jpg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "YesBtn_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin2;
	})(eui.Skin);

	var GameSettingSkin$Skin3 = 	(function (_super) {
		__extends(GameSettingSkin$Skin3, _super);
		function GameSettingSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_music_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_music_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin3;
	})(eui.Skin);

	var GameSettingSkin$Skin4 = 	(function (_super) {
		__extends(GameSettingSkin$Skin4, _super);
		function GameSettingSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sound_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sound_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin4;
	})(eui.Skin);

	function GameSettingSkin() {
		_super.call(this);
		this.skinParts = ["btn_green","btn_music","btn_music_disable","btn_sound","btn_sound_disable"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.btn_green_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = GameSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 255;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,8,196,51);
		t.source = "MoneyBG_png";
		t.verticalCenter = 0;
		t.width = 400;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "设置";
		t.y = 492;
		return t;
	};
	_proto.btn_green_i = function () {
		var t = new eui.Button();
		this.btn_green = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 620.31;
		t.skinName = GameSettingSkin$Skin2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66.67;
		t.width = 66.67;
		t.x = 180.72;
		t.y = 534.64;
		t.elementsContent = [this.btn_music_i(),this.btn_music_disable_i()];
		return t;
	};
	_proto.btn_music_i = function () {
		var t = new eui.Button();
		this.btn_music = t;
		t.height = 60;
		t.label = "";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin3;
		return t;
	};
	_proto.btn_music_disable_i = function () {
		var t = new eui.Image();
		this.btn_music_disable = t;
		t.height = 50;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 50;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.61;
		t.width = 66.67;
		t.x = 401.33;
		t.y = 535.52;
		t.elementsContent = [this.btn_sound_i(),this.btn_sound_disable_i()];
		return t;
	};
	_proto.btn_sound_i = function () {
		var t = new eui.Button();
		this.btn_sound = t;
		t.height = 60;
		t.label = "";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin4;
		return t;
	};
	_proto.btn_sound_disable_i = function () {
		var t = new eui.Image();
		this.btn_sound_disable = t;
		t.height = 50;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 50;
		t.x = 4;
		t.y = 4;
		return t;
	};
	return GameSettingSkin;
})(eui.Skin);generateEUI.paths['resource/Game/GameStarts.exml'] = window.GameStartsSkin = (function (_super) {
	__extends(GameStartsSkin, _super);
	var GameStartsSkin$Skin5 = 	(function (_super) {
		__extends(GameStartsSkin$Skin5, _super);
		function GameStartsSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameStartsSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "StartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameStartsSkin$Skin5;
	})(eui.Skin);

	var GameStartsSkin$Skin6 = 	(function (_super) {
		__extends(GameStartsSkin$Skin6, _super);
		function GameStartsSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameStartsSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "MoneyBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameStartsSkin$Skin6;
	})(eui.Skin);

	function GameStartsSkin() {
		_super.call(this);
		this.skinParts = ["btn_start","btn_setting"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_start_i(),this.btn_setting_i()];
	}
	var _proto = GameStartsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "GameBG1_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.label = "";
		t.x = 142.5;
		t.y = 994;
		t.skinName = GameStartsSkin$Skin5;
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.label = "设置";
		t.x = 370;
		t.y = 36;
		t.skinName = GameStartsSkin$Skin6;
		return t;
	};
	return GameStartsSkin;
})(eui.Skin);generateEUI.paths['resource/Game/levelIcon.exml'] = window.levelIconSkin = (function (_super) {
	__extends(levelIconSkin, _super);
	function levelIconSkin() {
		_super.call(this);
		this.skinParts = ["lb_level"];
		
		this.height = 77;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 77;
		this.elementsContent = [this.lb_level_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"lb_level")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image3","",2,"lb_level")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image1","",2,"lb_level")
				])
		];
	}
	var _proto = levelIconSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "gs_select_dis_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "gs_select_1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "gs_select_1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.lb_level_i = function () {
		var t = new eui.Label();
		this.lb_level = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return levelIconSkin;
})(eui.Skin);generateEUI.paths['resource/Game/SceneGame.exml'] = window.SceneGameSkin = (function (_super) {
	__extends(SceneGameSkin, _super);
	var SceneGameSkin$Skin7 = 	(function (_super) {
		__extends(SceneGameSkin$Skin7, _super);
		function SceneGameSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin7;
	})(eui.Skin);

	var SceneGameSkin$Skin8 = 	(function (_super) {
		__extends(SceneGameSkin$Skin8, _super);
		function SceneGameSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ResultBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ResultBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin8;
	})(eui.Skin);

	function SceneGameSkin() {
		_super.call(this);
		this.skinParts = ["btn_back","img_question","group_words","group_answer","btn_next","lb_from","lb_explain","group_win"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_back_i(),this._Image2_i(),this.img_question_i(),this.group_words_i(),this.group_answer_i(),this.group_win_i()];
	}
	var _proto = SceneGameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "GameBG3_jpg";
		t.top = 0;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.label = "";
		t.x = 9.09;
		t.y = 12.12;
		t.skinName = SceneGameSkin$Skin7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 726;
		t.horizontalCenter = 0;
		t.source = "WordFrame_png";
		t.width = 580;
		t.y = 129.83;
		return t;
	};
	_proto.img_question_i = function () {
		var t = new eui.Image();
		this.img_question = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 201.81;
		t.horizontalCenter = 0;
		t.width = 429.09;
		t.y = 176.19;
		return t;
	};
	_proto.group_words_i = function () {
		var t = new eui.Group();
		this.group_words = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 417;
		t.horizontalCenter = 0;
		t.width = 540;
		t.y = 580;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._word1_i(),this._word2_i(),this._word3_i(),this._word4_i(),this._word5_i(),this._word6_i(),this._word7_i(),this._word8_i(),this._word9_i(),this._word10_i(),this._word11_i(),this._word12_i(),this._word13_i(),this._word14_i(),this._word15_i(),this._word16_i(),this._word17_i(),this._word18_i(),this._word19_i(),this._word20_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 30;
		t.verticalAlign = "middle";
		t.verticalGap = 30;
		return t;
	};
	_proto._word1_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._word2_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 90;
		t.y = 90;
		return t;
	};
	_proto._word3_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._word4_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 110;
		t.y = 110;
		return t;
	};
	_proto._word5_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 120;
		t.y = 120;
		return t;
	};
	_proto._word6_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 130;
		t.y = 130;
		return t;
	};
	_proto._word7_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 140;
		t.y = 140;
		return t;
	};
	_proto._word8_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 150;
		t.y = 150;
		return t;
	};
	_proto._word9_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 160;
		t.y = 160;
		return t;
	};
	_proto._word10_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 170;
		t.y = 170;
		return t;
	};
	_proto._word11_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 180;
		t.y = 180;
		return t;
	};
	_proto._word12_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 190;
		t.y = 190;
		return t;
	};
	_proto._word13_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 200;
		t.y = 200;
		return t;
	};
	_proto._word14_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 210;
		t.y = 210;
		return t;
	};
	_proto._word15_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 220;
		t.y = 220;
		return t;
	};
	_proto._word16_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 230;
		t.y = 230;
		return t;
	};
	_proto._word17_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 240;
		t.y = 240;
		return t;
	};
	_proto._word18_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 250;
		t.y = 250;
		return t;
	};
	_proto._word19_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 300;
		t.y = 300;
		return t;
	};
	_proto._word20_i = function () {
		var t = new word();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 260;
		t.y = 260;
		return t;
	};
	_proto.group_answer_i = function () {
		var t = new eui.Group();
		this.group_answer = t;
		t.anchorOffsetX = 0;
		t.height = 95;
		t.width = 371;
		t.x = 135;
		t.y = 422;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i(),this._AnswerWord3_i(),this._AnswerWord4_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.height = 70;
		t.width = 70;
		t.x = 19.01;
		t.y = 22;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.height = 70;
		t.width = 70;
		t.x = 105.67;
		t.y = 22;
		return t;
	};
	_proto._AnswerWord3_i = function () {
		var t = new AnswerWord();
		t.height = 70;
		t.width = 70;
		t.x = 190.67;
		t.y = 22;
		return t;
	};
	_proto._AnswerWord4_i = function () {
		var t = new AnswerWord();
		t.height = 70;
		t.width = 70;
		t.x = 277.01;
		t.y = 22;
		return t;
	};
	_proto.group_win_i = function () {
		var t = new eui.Group();
		this.group_win = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this.btn_next_i(),this.lb_from_i(),this.lb_explain_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 479;
		t.source = "Result_png";
		t.width = 640;
		t.x = 0;
		t.y = 547;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.label = "";
		t.x = 424;
		t.y = 910;
		t.skinName = SceneGameSkin$Skin8;
		return t;
	};
	_proto.lb_from_i = function () {
		var t = new eui.Label();
		this.lb_from = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64;
		t.text = "成语解释";
		t.textColor = 0x070707;
		t.width = 480;
		t.x = 80;
		t.y = 660;
		return t;
	};
	_proto.lb_explain_i = function () {
		var t = new eui.Label();
		this.lb_explain = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 131;
		t.text = "成语出处";
		t.textColor = 0x020202;
		t.width = 480;
		t.x = 80;
		t.y = 771.5;
		return t;
	};
	return SceneGameSkin;
})(eui.Skin);generateEUI.paths['resource/Game/word.exml'] = window.wordSkin = (function (_super) {
	__extends(wordSkin, _super);
	function wordSkin() {
		_super.call(this);
		this.skinParts = ["lb_text"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.lb_text_i()];
	}
	var _proto = wordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x38f7ef;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.bold = true;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 60;
		t.text = "词";
		t.textAlign = "center";
		t.textColor = 0x020202;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return wordSkin;
})(eui.Skin);