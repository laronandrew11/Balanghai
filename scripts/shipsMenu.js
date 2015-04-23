
function addFleetMenu(){ //TODO use panels?dra
	var fleetMenu=new staticScreen();

	addDefaultButtons(fleetMenu);
	populateShipMenu(fleetMenu);
	
	fleetMenu.drawScreen(shipMenuBG);

}
function CreateShipItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			/*var pnlDetails=createShipDetailsPanel(item);
			parentMenu.addPanel(pnlDetails);*/
			var fetcher=new ShipInfoFetcher();
			parentMenu.panels[0].clearLabels();
			parentMenu.panels[0].bgImage=fetcher.getImage(item.name);
			parentMenu.panels[0].addLabel(new Label(100,100,100,25,"Name: "+item.properName,"Bebas",18,"black"));
			parentMenu.panels[0].addLabel(new Label(100,150,100,25,"Type: "+item.name,"Bebas",18,"black"));
			parentMenu.panels[0].addLabel(new Label(100,200,100,25,"Hull strength: "+item.health,"Bebas",18,"black"));
			parentMenu.panels[0].addLabel(new Label(100,250,100,25,"Speed: "+item.speed,"Bebas",18,"black"));
			parentMenu.panels[0].addLabel(new Label(100,300,100,25,"Cargo capacity: "+item.cargoCapacity,"Bebas",18,"black"));
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}
function createShipDetailsPanel(ship){//deprecated
	var fetcher=new ShipInfoFetcher();

	var pnlDetails=new Panel(200,150,500,300,fetcher.getImage(ship.name));
	pnlDetails.addLabel(new Label(100,100,100,25,"Name: "+ship.properName,"Bebas",18,"black"));
	pnlDetails.addLabel(new Label(100,150,100,25,"Type: "+ship.name,"Bebas",18,"black"));
	pnlDetails.addLabel(new Label(100,200,100,25,"Hull strength: "+ship.health,"Bebas",18,"black"));
	pnlDetails.addLabel(new Label(100,250,100,25,"Speed: "+ship.speed,"Bebas",18,"black"));
	pnlDetails.addLabel(new Label(100,300,100,25,"Cargo capacity: "+ship.cargoCapacity,"Bebas",18,"black"));
	pnlDetails.visible=true;
	return pnlDetails;
}
function populateShipMenu(parentMenu)
{
	//parentMenu.clearButtons();
	var x=50;
	var i;
	var pnlDetails=new Panel(200,150,500,300,null);
	pnlDetails.visible=true;
	parentMenu.addPanel(pnlDetails);
	var fetcher=new ShipInfoFetcher();
	for(i=0;i<gameState.ships.length;i++){
		var item=gameState.ships[i];

		var newButton=new Button(gameState.ships[i].properName,x,400,140,140,item.properName,"Bebas",15,"black", fetcher.getIcon(item.name));

			newButton.onClick=CreateShipItemButtonHandler(parentMenu, newButton, item);
			parentMenu.addButton(newButton);
			x+=130;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	//parentMenu.drawScreen(parentMenu.bgImage);
}