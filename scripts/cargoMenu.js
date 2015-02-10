function CreateCargoCategoryButtonHandler(parentMenu, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			populateCargoPanel(parentMenu, lbutton.name);
		}
}
function populateCategoryButtons(parentMenu, parentPanel){
		var i;
	var x=130;
	for(i=0;i<cargoCategories.length;i++)
	{

		var newButton=new Button(cargoCategories[i],x,125,48,48,"","Epistolar",15,"black", cargoCategoryButtons[i]);

		newButton.onClick=CreateCargoCategoryButtonHandler(parentMenu, newButton);
		parentPanel.addButton(newButton);
		x+=48;
	}
}
function addCargoMenu(){
	var cargoMenu=new staticScreen();




	var pnlInventory=new Panel(70,100,457,406,null);
	pnlInventory.visible=true;

	populateCategoryButtons(cargoMenu,pnlInventory);

	addDefaultButtons(cargoMenu);

	cargoMenu.addPanel(pnlInventory);
	
	cargoMenu.drawScreen(cargoMenuBG);
}

function CreateCargoItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var pnlDetails=createCargoDetailsPanel(item);
			parentMenu.addPanel(pnlDetails);
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}


function createCargoDetailsPanel(cargo){
	var pnlDetails=new Panel(577,56,357,496,null);
	pnlDetails.addLabel(new Label(590,100,100,25,"Name: "+cargo.name,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(590,150,100,25,"Units owned: "+cargo.amount,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(590,200,100,25,"Type: "+cargo.type,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(590,250,100,25,"Weight/unit: "+cargo.unitWeight,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(590,300,100,25,"Total weight: "+cargo.unitWeight*cargo.amount,"Epistolar",15,"black"));
	//add labels: "You paid:" and maybe common market prices per region
	pnlDetails.visible=true;
	return pnlDetails;
}
function populateCargoPanel(parentMenu, type)
{
	parentMenu.panels[0].clearButtons();
	populateCategoryButtons(parentMenu,parentMenu.panels[0]);
	var x=130;
	var i;
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];
		if(type=='all' || item.type==type)
		{
			var newButton=new Button(item.name,x,180,80,80,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

			newButton.onClick=CreateCargoItemButtonHandler(parentMenu, newButton, item);
			parentMenu.panels[0].addButton(newButton);//add to inventory panel
			x+=85;

			//parentMenu.drawScreen(parentMenu.bgImage);
		}
	}
	parentMenu.panels[0].draw(context);
}
