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

	var btnContinue=new Button("CONTINUE",415,525,240,60,"CLICK TO CONTINUE","Epistolar",15,"black", buttonBG);
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
function addDefaultButtons(parentMenu)
{

	var btnMainMenu=new Button("MAIN_MENU",49,0,200,50,"MAIN MENU","Epistolar",15,"black", buttonBG);
	btnMainMenu.onClick=function(){
		parentMenu.clearScreen();
		addMainMenu();
	}

	var btnSave=new Button("SAVE",800,550,200,50,"SAVE GAME","Epistolar",15,"black", buttonBG);
	btnSave.onClick=function(){
		var parser=new GameStateParser();
		parser.saveGame();
	}

	var btnShip=new Button("SHIPS",349,0,200,50,"SHIPS","Epistolar",15,"black", buttonBG);
	btnShip.onClick=function(){
		parentMenu.clearScreen();
		addFleetMenu();
	}
	var btnCargo=new Button("CARGO",549,0,200,50,"CARGO","Epistolar",15,"black", buttonBG);
	btnCargo.onClick=function(){
		parentMenu.clearScreen();
		addCargoMenu();
	}

	var btnMap=new Button("MAP",749,0,200,50,"MAP","Epistolar",15,"black", buttonBG);
	btnMap.onClick=function(){
		parentMenu.clearScreen();
		addMapMenu();
	}

	var lblPlayerName=new Label(0,300,100,50,gameState.playerName,"Epistolar",15,"black");

	


	parentMenu.addButton(btnMainMenu);
	parentMenu.addButton(btnSave);
	parentMenu.addButton(btnShip);
	parentMenu.addButton(btnCargo);
	parentMenu.addButton(btnMap);
	parentMenu.addLabel(lblPlayerName);
}



