/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComComboBox extends fairygui.GComboBox {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://snq31xvrsfsc40";

		public static createInstance():ComComboBox {
			return <ComComboBox><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}