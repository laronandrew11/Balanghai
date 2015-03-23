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

		var newButton=new Button(cargoCategories[i],x,125,56,56,"","Epistolar",15,"black", cargoCategoryButtons[i]);

		newButton.onClick=CreateCargoCategoryButtonHandler(parentMenu, newButton);
		parentPanel.addButton(newButton);
		x+=47;
	}
}
function addCargoMenu(){
	var cargoMenu=new staticScreen();




	var pnlInventory=new Panel(70,60,505,510,null);
	var pnlDetails=new Panel(575,72,368,508,null);

	pnlDetails.visible=true;
	pnlInventory.visible=true;

	populateCategoryButtons(cargoMenu,pnlInventory);

	addDefaultButtons(cargoMenu);

	cargoMenu.addPanel(pnlInventory);
	cargoMenu.addPanel(pnlDetails);
	
	cargoMenu.drawScreen(cargoMenuBG);
}

function CreateCargoItemButtonHandler(parentMenu, button, cargo)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){

			//var pnlDetails=createCargoDetailsPanel(item);
			//parentMenu.addPanel(pnlDetails);
			parentMenu.panels[1].clearLabels();
			parentMenu.panels[1].addLabel(new Label(590,100,100,25,"Name: "+cargo.name,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,150,100,25,"Units owned: "+cargo.amount,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,200,100,25,"Type: "+cargo.type,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,250,100,25,"Weight/unit: "+cargo.unitWeight,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,300,100,25,"Total weight: "+cargo.unitWeight*cargo.amount,"Bebas",15,"black"));
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}


/*function createCargoDetailsPanel(cargo){
	
	pnlDetails.name="Details";
	
	//add labels: "You paid:" and maybe common market prices per region
	
	return pnlDetails;
}*/
function populateCargoPanel(parentMenu, type)
{
	parentMenu.panels[0].clearButtons();
	parentMenu.panels[0].clearLabels();
	populateCategoryButtons(parentMenu,parentMenu.panels[0]);
	var x=130;
	var i;
	var fetcher=new CargoRecordInfoFetcher();
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];
		if(type=='all' || item.type==type)
		{
			//var buttonImg = document.createElement('img');
			//buttonImg.src =  fetcher.getImageSrc(item.name);
			var newButton=new Button(item.name,x,180,80,80,"","Bebas",15,"black",fetcher.getImageSrc(item.name));
			var newLabel=new Label(x,230,82,30,item.amount+" "+item.name,"Bebas",15,"black");
			newLabel.bgImage=scrollSmallImg;
			/*var priceLabel=new Label(x+47,15,33,31,item.price,"Bebas",15,"black");
			priceLabel.bgImage=coinImg;*/
			//console.log(parentMenu);
			newButton.onClick=CreateCargoItemButtonHandler(parentMenu, newButton, item);
			parentMenu.panels[0].addButton(newButton);//add to inventory panel
			parentMenu.panels[0].addLabel(newLabel);
			//parentMenu.panels[0].addLabel(priceLabel);
			x+=85;

			//parentMenu.drawScreen(parentMenu.bgImage);
		}
	}
	parentMenu.drawScreen(cargoMenuBG);
	//parentMenu.panels[0].draw(context);
}
