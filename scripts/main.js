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

	var btnNewGame=new Button(600,160,322,80,"NEW GAME","Epistolar",15,"black", newGameButtonBG);
	btnNewGame.onClick=function(){
		gameState=new GameState("Player");
		mainMenu.clearScreen();
		addFleetMenu();
	}
	var btnLoadGame=new Button(600,260,322,80,"LOAD GAME","Epistolar",15,"black", loadGameButtonBG);
	btnLoadGame.onClick=function(){
		mainMenu.showPanel(0);//display load game panel
	}

	var btnCredits=new Button(600,360,322,80,"CREDITS","Epistolar",15,"black", creditsButtonBG);
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

	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		//addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		fleetMenu.clearScreen();
		addCargoMenu();

	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		fleetMenu.clearScreen();
		addMapMenu();

	}

	fleetMenu.addButton(btnShip);
	fleetMenu.addButton(btnCargo);
	fleetMenu.addButton(btnMap);

	
	fleetMenu.drawScreen(shipMenuBG);
}

function addCargoMenu(){
	var cargoMenu=new staticScreen();

	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		cargoMenu.clearScreen();
		addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		//addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		cargoMenu.clearScreen();
		addMapMenu();
	}

	var pnlInfo=new Panel(577,56,357,496,startbg);
	pnlInfo.visible=true;

	cargoMenu.addButton(btnShip);
	cargoMenu.addButton(btnCargo);
	cargoMenu.addButton(btnMap);
	cargoMenu.addPanel(pnlInfo);
	
	cargoMenu.drawScreen(cargoMenuBG);
}

function addMapMenu(){
	var mapMenu=new staticScreen();
	
	var pnlMap=new Panel(50,50,900,500,mapImg);
	var btnYouAreHere=new Button(50+gameState.mapX,50+gameState.mapY,16,16,"YOU ARE HERE","Epistolar",15,"black", pointerImg);
	btnYouAreHere.onClick=function(){
		alert("YOU ARE HERE");
	}
	pnlMap.addButton(btnYouAreHere);
	for(var settlement in gameState.visibleSettlements)
	{
		addSettlementButton(settlement);
	}
	pnlMap.visible=true;


	
	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		mapMenu.clearScreen();
		addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		mapMenu.clearScreen();
		addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		//addMapMenu();
	}

	var btnSettlement=new Button(749,50,200,50,"Balasin","Epistolar",15,"black", buttonBG);
	btnSettlement.onClick=function(){
		mapMenu.clearScreen();
		addSettlementMenu("Balasin");
	}

	mapMenu.addButton(btnShip);
	mapMenu.addButton(btnCargo);
	mapMenu.addButton(btnMap);
	mapMenu.addPanel(pnlMap);
	mapMenu.drawScreen(mapBG);
}
//TODO generalize settlement generation
function addSettlementMenu(settlementName){
	var settlementScreen=new staticScreen();

	//TODO load settlement data for given settlement name, and create relevant buttons/panels

	var btnShipbuilder=new Button(415,525,240,60,"CLICK TO CONTINUE","Epistolar",15,"black", buttonBG);
	btnShipbuilder.onClick=function(){
		settlementScreen.clearScreen();
		addMainMenu();
	}

	settlementScreen.addButton(btnContinue);
	settlementScreen.drawScreen(startbg);
}

function addSettlementButton(settlementName)
{
	var settlementFetcher= new SettlementInfoFetcher();
	var settlement=settlementFetcher.get(settlementName);
	return new Button(50+settlement.mapX,50+settlement.mapY,16,16,settlement.name,"Epistolar",15,"black", settlementImg);
}
