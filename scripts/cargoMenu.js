function CreateCargoCategoryButtonHandler(parentMenu, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			populateCargoPanel(parentMenu, lbutton.text);
		}
}

function addCargoMenu(){
	var cargoMenu=new staticScreen();

	var i;
	var x=70;
	for(i=0;i<cargoCategories.length;i++)
	{

		var newButton=new Button(cargoCategories[i],x,70,50,50,cargoCategories[i],"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateCargoCategoryButtonHandler(cargoMenu, newButton);
		cargoMenu.addButton(newButton);
		x+=55;
	}

	var pnlInventory=new Panel(70,130,457,456,startbg);
	pnlInventory.visible=true;
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
	var pnlDetails=new Panel(577,56,357,496,startbg);
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
	var x=70;
	var i;
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];
		if(type=='all' || item.type==type)
		{
			var newButton=new Button(item.name,x,150,140,140,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

			newButton.onClick=CreateCargoItemButtonHandler(parentMenu, newButton, item);
			parentMenu.panels[0].addButton(newButton);//add to inventory panel
			x+=130;

			//parentMenu.drawScreen(parentMenu.bgImage);
		}
	}
	parentMenu.panels[0].draw(context);
}
