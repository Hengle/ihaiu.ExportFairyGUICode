/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class AutoSizeButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_grayed : fairygui.Controller;
		public m_n1 : fairygui.GImage;
		public m_n2 : fairygui.GImage;
		public m_n3 : fairygui.GImage;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://s1yj9w6mp7th6";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():AutoSizeButton {
			return <AutoSizeButton><any>(fairygui.UIPackage.createObject("BlackSkin","AutoSizeButton"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");
			this.m_grayed = this.getController("grayed");

			
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.m_n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}