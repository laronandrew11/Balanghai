function Dialog(parentMenu, text, submitFunction)
{
	this.pnlDialog=new Panel(100,50,845,130,questPlankImg);
	this.lblDialogText=new Label(110,120,100,50,text,"Bebas",24,"black");
	this.txtInput=new Textbox(parentMenu, 400, 120, 500, 100);
	this.userInput;
	this.submitFunction=submitFunction;
	this.pnlDialog.exclusiveControl=true;
	this.pnlDialog.addLabel(this.lblDialogText);
	this.pnlDialog.addTextbox(this.txtInput);
	//this.pnlDialog.visible=true;
	
	
	var btnSubmit=new Button("SUBMIT", 700,120,150,50,"Submit","Bebas",18,"black", buttonBG);
	var obj=this;
	btnSubmit.onClick=function(){
		obj.txtInput.deactivate();
		obj.userInput=obj.txtInput.text;
		obj.pnlDialog.visible=false;
		obj.submitFunction();
	}
	this.pnlDialog.addButton(btnSubmit);
	parentMenu.addPanel(this.pnlDialog);

	this.setVisible=function(isVisible){
		this.pnlDialog.visible=isVisible;
	}
}