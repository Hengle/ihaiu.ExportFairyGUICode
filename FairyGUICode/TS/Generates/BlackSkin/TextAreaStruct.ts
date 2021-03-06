/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class TextAreaStruct extends fairygui.GLabel
	{
		public m_n0 : fairygui.GImage;
		public m_title : fairygui.GTextInput;

		
		public static URL:string = "ui://s1yj9w6mp7th2m";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():TextArea {
			return <TextArea><any>(fairygui.UIPackage.createObject("BlackSkin","TextArea"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
			
			
		}
	}
}