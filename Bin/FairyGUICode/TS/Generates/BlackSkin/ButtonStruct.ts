/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_grayed : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://s1yj9w6mp7th0";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():Button {
		return <Button><any>(fairygui.UIPackage.createObject("BlackSkin","Button"));
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

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}