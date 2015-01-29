
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
	var pnlDetails=new Panel(50,50,900,400,startbg);
	pnlDetails.addLabel(new Label(100,100,100,25,"Type: "+ship.type,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(100,150,100,25,"Hull strength: "+ship.health,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(100,200,100,25,"Speed: "+ship.speed,"Epistolar",15,"black"));
	pnlDetails.addLabel(new Label(100,250,100,25,"Cargo capacity: "+ship.cargoCapacity,"Epistolar",15,"black"));
	pnlDetails.visible=true;
	return pnlDetails;
}
function populateShipMenu(parentMenu)
{
	//parentMenu.clearButtons();
	var x=50;
	var i;
	for(i=0;i<gameState.ships.length;i++){
		var item=gameState.ships[i];

		var newButton=new Button(gameState.ships[i].type+i,x,470,140,140,item.type,"Epistolar",15,"black", buttonBG);

			newButton.onClick=CreateShipItemButtonHandler(parentMenu, newButton, item);
			parentMenu.addButton(newButton);
			x+=130;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	//parentMenu.drawScreen(parentMenu.bgImage);
}