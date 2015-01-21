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
var buttonBG = document.createElement('img');
	buttonBG.src = 'img/button.png';
	var creditsButtonBG = document.createElement('img');
	creditsButtonBG.src = 'img/creditsbut.png';
	var loadGameButtonBG = document.createElement('img');
	loadGameButtonBG.src = 'img/loadgamebut.png';
	var newGameButtonBG = document.createElement('img');
	newGameButtonBG.src = 'img/newgamebut.png';
//var activeScreen;
	
//TODO optimize screen switching by not re-initializing screens every time we switch screens
function main()
{
	addStartScreen();
}	
function addStartScreen()
{
	var startScreen=new staticScreen();

	var btnContinue=new Button(415,525,240,60,"CLICK TO CONTINUE","Epistolar",15,"black", buttonBG);
	btnContinue.onClick=function(){
		clearStaticScreen(startScreen);
		addMainMenu();
	}

	startScreen.addButton(btnContinue);
	drawStaticScreen(startScreen, startbg);
}
/*function activateScreen(){

}
function deactivateScreen(){

}*/
function addMainMenu(){
	var mainMenu=new staticScreen();

	var btnNewGame=new Button(600,160,322,80,"NEW GAME","Epistolar",15,"black", newGameButtonBG);
	btnNewGame.onClick=function(){
		clearStaticScreen(mainMenu);
		addFleetMenu();
	}
	var btnLoadGame=new Button(600,260,322,80,"LOAD GAME","Epistolar",15,"black", loadGameButtonBG);
	btnLoadGame.onClick=function(){
		alert("LOAD GAME!");
	}

	var btnCredits=new Button(600,360,322,80,"CREDITS","Epistolar",15,"black", creditsButtonBG);
	btnCredits.onClick=function(){
		alert("Copyright DLSU Game Development Laboratory, 2015.");
	}

	mainMenu.addButton(btnNewGame);
	mainMenu.addButton(btnLoadGame);
	mainMenu.addButton(btnCredits);
	
	drawStaticScreen(mainMenu, mainMenuBG);
}

function addFleetMenu(){ //TODO use panels?
	var fleetMenu=new staticScreen();

	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		//addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		addMapMenu();
	}

	fleetMenu.addButton(btnShip);
	fleetMenu.addButton(btnCargo);
	fleetMenu.addButton(btnMap);
	
	drawStaticScreen(fleetMenu, shipMenuBG);
}

function addCargoMenu(){
	var cargoMenu=new staticScreen();

	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		//addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		addMapMenu();
	}

	var pnlInfo=new Panel(577,56,357,496,startbg);

	cargoMenu.addButton(btnShip);
	cargoMenu.addButton(btnCargo);
	cargoMenu.addButton(btnMap);
	cargoMenu.addPanel(pnlInfo);
	
	drawStaticScreen(cargoMenu, cargoMenuBG);
}

function addMapMenu(){
	var mapMenu=new staticScreen();

	var btnShip=new Button(349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		addFleetMenu();
	}
	var btnCargo=new Button(549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		addCargoMenu();
	}

	var btnMap=new Button(749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		//addMapMenu();
	}

	mapMenu.addButton(btnShip);
	mapMenu.addButton(btnCargo);
	mapMenu.addButton(btnMap);
	
	drawStaticScreen(mapMenu, mapBG);
}

function drawStaticScreen(screen, bg)
{
	screen.setBG(bg);
	screen.drawBG(context);
	screen.drawMenu(-1);
	screen.drawPanels();
}
function clearStaticScreen(screen)
{
	screen.removeListeners();
	screen.clearButtons();
	screen.clearPanels();
}