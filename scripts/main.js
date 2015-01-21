//TODO remove from global scope
var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.jpg';
var mainMenuBG = document.createElement('img');
	mainMenuBG.src = 'img/mainmenulo.jpg';
var shipMenuBG = document.createElement('img');
	shipMenuBG.src = 'img/shipmenu.jpg';
var cargoMenuBG = document.createElement('img');
	cargoMenuBG.src = 'img/cargo.png';
var mapBG = document.createElement('img');
	mapBG.src = 'img/map.png';
//var activeScreen;
	
//TODO optimize screen switching by not re-initializing screens every time we switch screens
function main()
{
	addStartScreen();
}	
function addStartScreen()
{
	var startScreen=new staticScreen();

	var btnContinue=new Button(700,200,116,11,"CLICK TO CONTINUE","Epistolar",15,"black");
	btnContinue.onClick=function(){
		startScreen.removeListeners();
		startScreen.clearButtons();
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

	var btnNewGame=new Button(700,200,116,11,"NEW GAME","Epistolar",15,"black");
	btnNewGame.onClick=function(){
		mainMenu.removeListeners();
		mainMenu.clearButtons();
		addFleetMenu();
	}
	var btnLoadGame=new Button(700,250,116,11,"LOAD GAME","Epistolar",15,"black");
	btnLoadGame.onClick=function(){
		alert("LOAD GAME!");
	}

	var btnCredits=new Button(700,300,120,11,"CREDITS","Epistolar",15,"black");
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

	var btnShip=new Button(700,200,116,11,"SHIPS","Epistolar",15,"black");
	btnShip.onClick=function(){
		//addFleetMenu();
	}
	var btnCargo=new Button(700,250,116,11,"CARGO","Epistolar",15,"black");
	btnCargo.onClick=function(){
		addCargoMenu();
	}

	var btnMap=new Button(700,300,120,11,"MAP","Epistolar",15,"black");
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

	var btnShip=new Button(700,200,116,11,"SHIPS","Epistolar",15,"black");
	btnShip.onClick=function(){
		addFleetMenu();
	}
	var btnCargo=new Button(700,250,116,11,"CARGO","Epistolar",15,"black");
	btnCargo.onClick=function(){
		//addCargoMenu();
	}

	var btnMap=new Button(700,300,120,11,"MAP","Epistolar",15,"black");
	btnMap.onClick=function(){
		addMapMenu();
	}

	cargoMenu.addButton(btnShip);
	cargoMenu.addButton(btnCargo);
	cargoMenu.addButton(btnMap);
	
	drawStaticScreen(cargoMenu, cargoMenuBG);
}

function addMapMenu(){
	var mapMenu=new staticScreen();

	var btnShip=new Button(700,200,116,11,"SHIPS","Epistolar",15,"black");
	btnShip.onClick=function(){
		addFleetMenu();
	}
	var btnCargo=new Button(700,250,116,11,"CARGO","Epistolar",15,"black");
	btnCargo.onClick=function(){
		addCargoMenu();
	}

	var btnMap=new Button(700,300,120,11,"MAP","Epistolar",15,"black");
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
}