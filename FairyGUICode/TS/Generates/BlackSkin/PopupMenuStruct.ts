/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class PopupMenuStruct extends fairygui.GComponent
	{
		public m_n0 : fairygui.GImage;
		public m_list : fairygui.GList;

		
		public static URL:string = "ui://s1yj9w6mp7th2t";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():PopupMenu {
			return <PopupMenu><any>(fairygui.UIPackage.createObject("BlackSkin","PopupMenu"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			
			
		}
	}
}