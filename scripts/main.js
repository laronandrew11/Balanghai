//TODO remove from global scope
var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.png';
var mainMenuBG = document.createElement('img');
	mainMenuBG.src = 'img/mainmenu.png';
var shipMenuBG = document.createElement('img');
	shipMenuBG.src = 'img/shipmenu.jpg';
var cargoMenuBG = document.createElement('img');
	cargoMenuBG.src = 'img/cargo.png';
var mapBG = document.createElement('img');
	mapBG.src = 'img/map.png';
	
var mapImg = document.createElement('img');
	mapImg.src = 'img/minimap.png';
var pointerImg = document.createElement('img');
	pointerImg.src = 'img/pointer.png';
var settlementImg = document.createElement('img');
	settlementImg.src = 'img/settlement.png';
	
var buttonBG = document.createElement('img');
	buttonBG.src = 'img/button.png';
	var creditsButtonBG = document.createElement('img');
	creditsButtonBG.src = 'img/creditsbut.png';
	var loadGameButtonBG = document.createElement('img');
	loadGameButtonBG.src = 'img/loadgamebut.png';
	var newGameButtonBG = document.createElement('img');
	newGameButtonBG.src = 'img/newgamebut.png';
	var closeButtonBG=document.createElement('img');
	closeButtonBG.src='img/closePanel.png';
//var activeScreen;

var gameState;
//TODO optimize screen switching by not re-initializing screens every time we switch screens, or removing invisible screens from memory
function main()
{
	addStartScreen();
}	
function addStartScreen()
{
	var startScreen=new staticScreen();

	var btnContinue=new Button(415,525,240,60,"CLICK TO CONTINUE","Epistolar",15,"black", buttonBG);
	btnContinue.onClick=function(){
		startScreen.clearScreen();
		addMainMenu();
	}

	startScreen.addButton(btnContinue);
	startScreen.drawScreen(startbg);
}
/*function activateScreen(){

}
function deactivateScreen(){

}*/
function addMainMenu(){
	var mainMenu=new staticScreen();

	var btnCloseLoadGamePanel=new Button(100,56,50,50,"Close Panel","Epistolar",15,"black", closeButtonBG);
	btnCloseLoadGamePanel.onClick=function(){
		mainMenu.hidePanel(0);
	}

	var pnlLoadGame=new Panel(100,56,357,496,startbg);
	pnlLoadGame.addButton(btnCloseLoadGamePanel);

	var btnNewGame=new Button(600,160,322,80,"","Epistolar",15,"black", newGameButtonBG);
	btnNewGame.onClick=function(){
		var newPlayerName = prompt("Please enter your name", "");
		gameState=new GameState(newPlayerName);
		mainMenu.clearScreen();
		addFleetMenu();
	}
	var btnLoadGame=new Button(600,260,322,80,"","Epistolar",15,"black", loadGameButtonBG);
	btnLoadGame.onClick=function(){
		mainMenu.showPanel(0);//display load game panel
	}

	var btnCredits=new Button(600,360,322,80,"","Epistolar",15,"black", creditsButtonBG);
	btnCredits.onClick=function(){
		alert("Copyright DLSU Game Development Laboratory, 2015.");
	}

	

	mainMenu.addButton(btnNewGame);
	mainMenu.addButton(btnLoadGame);
	mainMenu.addButton(btnCredits);
	mainMenu.addPanel(pnlLoadGame);
	
	mainMenu.drawScreen(mainMenuBG);
}

function addFleetMenu(){ //TODO use panels?dra
	var fleetMenu=new staticScreen();

	addDefaultButtons(fleetMenu);

	
	fleetMenu.drawScreen(shipMenuBG);
}

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

		var newButton=new Button(x,70,50,50,cargoCategories[i],"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateCargoCategoryButtonHandler(cargoMenu, newButton);
		cargoMenu.addButton(newButton);
		x+=55;
	}

	var pnlInventory=new Panel(70,130,457,456,startbg);
	pnlInventory.visible=true;

	
	//pnlDetails.visible=true;


	addDefaultButtons(cargoMenu);

	cargoMenu.addPanel(pnlInventory);
	
	cargoMenu.drawScreen(cargoMenuBG);
}

function CreateCargoItemButtonHandler(parentMenu, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			alert("You have "+button.text);
			var pnlDetails=new Panel(577,56,357,496,startbg);
			pnlDetails.visible=true;
			parentMenu.addPanel(pnlDetails);
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}
function populateCargoPanel(parentMenu, type)
{
	parentMenu.panels[0].clearButtons();
	var x=70;
	var i;
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];
		if(item.type==type)
		{
			var newButton=new Button(x,150,140,140,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

			newButton.onClick=CreateCargoItemButtonHandler(parentMenu, newButton);
			parentMenu.panels[0].addButton(newButton);//add to inventory panel
			x+=130;

			//parentMenu.drawScreen(parentMenu.bgImage);
		}
	}
	parentMenu.panels[0].draw(context);
}

function addMapMenu(){
	var mapMenu=new staticScreen();
	
	var pnlMap=new Panel(50,50,900,500,mapImg);
	

	//add settlements
	var settlementFetcher= new SettlementInfoFetcher();
	var i;
	for(i=0;i<gameState.visibleSettlements.length;i++)
	{
		var newButton=getSettlementButton(settlementFetcher, mapMenu, gameState.visibleSettlements[i]);
		pnlMap.addButton(newButton);
	}

	var btnYouAreHere=new Button(50+gameState.mapX,50+gameState.mapY,16,16,"","Epistolar",15,"black", pointerImg);
	btnYouAreHere.onClick=function(){
		alert("YOU ARE HERE");
	}
	pnlMap.addButton(btnYouAreHere);
	pnlMap.visible=true;


	
	addDefaultButtons(mapMenu);
	mapMenu.addPanel(pnlMap);
	mapMenu.drawScreen(mapBG);
}

function addSettlementMenu(settlement){
	var settlementScreen=new staticScreen();

	addDefaultButtons(settlementScreen);

	//load settlement data for given settlement name, and create relevant buttons/panels
	if(contains(settlement.pointsOfInterest,"shipbuilder"))
	{
		addShipbuilderButton(settlementScreen,settlement);
	}
	if(contains(settlement.pointsOfInterest,"market"))
	{
		addMarketButton(settlementScreen,settlement);
	}
	settlementScreen.drawScreen(startbg);
}
function addShipbuilderButton(parentMenu,settlement){
	var btnShipbuilder=new Button(415,400,240,60,"Shipbuilder","Epistolar",15,"black", buttonBG);
		btnShipbuilder.onClick=function(){
			parentMenu.clearScreen();
			addShipbuilderMenu(settlement);
		}
		parentMenu.addButton(btnShipbuilder);
}
function addMarketButton(parentMenu,settlement){
		var btnMarket=new Button(415,300,240,60,"Market","Epistolar",15,"black", buttonBG);
		btnMarket.onClick=function(){
			parentMenu.clearScreen();
			addMarketMenu(settlement);
		}
		parentMenu.addButton(btnMarket);
}

function addShipbuilderMenu(settlement){
	var shipbuilderScreen=new staticScreen();
	addDefaultButtons(shipbuilderScreen);

	if(contains(settlement.pointsOfInterest,"market"))
	{
		addMarketButton(shipbuilderScreen,settlement);
	}


	var btnTest=new Button(115,300,60,60,"You're at Shipbuilder","Epistolar",15,"black", buttonBG);
		btnTest.onClick=function(){
			alert(settlement.name+" shipbuilder coming soon!");
		}
	shipbuilderScreen.addButton(btnTest);
	shipbuilderScreen.drawScreen(startbg);
}
function addMarketMenu(settlement){
	var marketScreen=new staticScreen();
	addDefaultButtons(marketScreen);


	if(contains(settlement.pointsOfInterest,"shipbuilder"))
	{
		addShipbuilderButton(marketScreen,settlement);
	}

	var btnTest=new Button(115,300,60,60,"You're at Market","Epistolar",15,"black", buttonBG);
		btnTest.onClick=function(){
			alert(settlement.name+" market coming soon!");
		}
	marketScreen.addButton(btnTest);
	marketScreen.drawScreen(startbg);
}

function addDefaultButtons(parentMenu)
{

	var btnMainMenu=new Button(49,0,200,50,"MAIN MENU","Epistolar",15,"black", buttonBG);
	btnMainMenu.onClick=function(){
		parentMenu.clearScreen();
		addMainMenu();
	}


	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		parentMenu.clearScreen();
		addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		parentMenu.clearScreen();
		addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		parentMenu.clearScreen();
		addMapMenu();
	}


	parentMenu.addButton(btnMainMenu);
	parentMenu.addButton(btnShip);
	parentMenu.addButton(btnCargo);
	parentMenu.addButton(btnMap);
}

function getSettlementButton(fetcher, parentMenu,settlementName)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{

	var settlement=fetcher.get(settlementName);
	var newButton=new Button(44+settlement.mapX,44+settlement.mapY,12,12,settlement.name,"Epistolar",15,"black", settlementImg);
	newButton.onClick=function(){
			//alert(settlement.name);
			parentMenu.clearScreen();
			addSettlementMenu(settlement);//TODO only pass name?
		}
	return newButton;
}

