/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestNameStruct extends fairygui.GComponent
	{
		public m_a : ComButtonCheck;
		public m_a : ComButtonCheck;
		public m_a : ComLabel;

		
		public static URL:string = "ui://snq31xvrus714j";
		
		public static DependPackages:string[] = ["UIDefaultSkin"];

		
		public static createInstance():TestName {
			return <TestName><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestName"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_a = <ComButtonCheck><any>(this.getChild("a"));
			this.m_a = <ComButtonCheck><any>(this.getChild("a"));
			this.m_a = <ComLabel><any>(this.getChild("a"));
			
			
		}
	}
}