
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
			var pnlDetails=createShipDetailsPanel(item);
			parentMenu.addPanel(pnlDetails);
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}
function createShipDetailsPanel(ship){
	var fetcher=new ShipInfoFetcher();

	var pnlDetails=new Panel(200,150,500,300,fetcher.getImage(ship.name));
	pnlDetails.addLabel(new Label(100,100,100,25,"Name: "+ship.properName,"Epistolar",18,"black"));
	pnlDetails.addLabel(new Label(100,150,100,25,"Type: "+ship.name,"Epistolar",18,"black"));
	pnlDetails.addLabel(new Label(100,200,100,25,"Hull strength: "+ship.health,"Epistolar",18,"black"));
	pnlDetails.addLabel(new Label(100,250,100,25,"Speed: "+ship.speed,"Epistolar",18,"black"));
	pnlDetails.addLabel(new Label(100,300,100,25,"Cargo capacity: "+ship.cargoCapacity,"Epistolar",18,"black"));
	pnlDetails.visible=true;
	return pnlDetails;
}
function populateShipMenu(parentMenu)
{
	//parentMenu.clearButtons();
	var x=50;
	var i;
	var fetcher=new ShipInfoFetcher();
	for(i=0;i<gameState.ships.length;i++){
		var item=gameState.ships[i];

		var newButton=new Button(gameState.ships[i].properName,x,470,140,140,item.properName,"Epistolar",15,"black", fetcher.getIcon(item.name));

			newButton.onClick=CreateShipItemButtonHandler(parentMenu, newButton, item);
			parentMenu.addButton(newButton);
			x+=130;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	//parentMenu.drawScreen(parentMenu.bgImage);
}