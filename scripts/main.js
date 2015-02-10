//TODO remove from global scope
var defaultbg= document.createElement('img');
	defaultbg.src = 'img/shipmenu.png';
var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.png';
var mainMenuBG = document.createElement('img');
	mainMenuBG.src = 'img/mainmenu.png';
var shipMenuBG = document.createElement('img');
	shipMenuBG.src = 'img/shipmenu.png';
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
	buttonBG.src = 'img/shipbutton.png';
	var shipButtonBG = document.createElement('img');
	shipButtonBG.src = 'img/shipbutton.png';
	var creditsButtonBG = document.createElement('img');
	creditsButtonBG.src = 'img/buttons/mainmenu/creditsbut.png';
	var loadGameButtonBG = document.createElement('img');
	loadGameButtonBG.src = 'img/buttons/mainmenu/loadgamebut.png';
	var newGameButtonBG = document.createElement('img');
	newGameButtonBG.src = 'img/buttons/mainmenu/newgamebut.png';
	var closeButtonBG=document.createElement('img');
	closeButtonBG.src='img/closePanel.png';

	var shipsButtonBG = document.createElement('img');
	shipsButtonBG.src = 'img/buttons/fleetmenu/shipsbutton.png';
	var cargoButtonBG = document.createElement('img');
	cargoButtonBG.src = 'img/buttons/fleetmenu/cargobutton.png';
	var mapButtonBG = document.createElement('img');
	mapButtonBG.src = 'img/buttons/fleetmenu/mapbutton.png';
	var questButtonBG = document.createElement('img');
	questButtonBG.src = 'img/buttons/fleetmenu/questbutton.png';
	var settlementButtonBG = document.createElement('img');
	settlementButtonBG.src = 'img/buttons/fleetmenu/settlementbutton.png';
	var saveButtonBG = document.createElement('img');
	saveButtonBG.src = 'img/buttons/fleetmenu/savebutton.png';
	var translateButtonBG = document.createElement('img');
	translateButtonBG.src = 'img/buttons/fleetmenu/translatebutton.png';

	var artButtonBG = document.createElement('img');
	artButtonBG.src = 'img/buttons/cargomenu/artbutton.png';
	var clothingButtonBG = document.createElement('img');
	clothingButtonBG.src = 'img/buttons/cargomenu/clothingbutton.png';
	var foodButtonBG = document.createElement('img');
	foodButtonBG.src = 'img/buttons/cargomenu/foodbutton.png';
	var miscButtonBG = document.createElement('img');
	miscButtonBG.src = 'img/buttons/cargomenu/miscbutton.png';
	var stoneButtonBG = document.createElement('img');
	stoneButtonBG.src = 'img/buttons/cargomenu/stonebutton.png';
	var textileButtonBG = document.createElement('img');
	textileButtonBG.src = 'img/buttons/cargomenu/textilebutton.png';
	var weaponButtonBG = document.createElement('img');
	weaponButtonBG.src = 'img/buttons/cargomenu/weaponbutton.png';
	var woodButtonBG = document.createElement('img');
	woodButtonBG.src = 'img/buttons/cargomenu/woodbutton.png';

	var cargoCategoryButtons=[];
	cargoCategoryButtons.push(foodButtonBG);
	cargoCategoryButtons.push(stoneButtonBG);
	cargoCategoryButtons.push(weaponButtonBG);
	cargoCategoryButtons.push(woodButtonBG);
	cargoCategoryButtons.push(artButtonBG);
	cargoCategoryButtons.push(textileButtonBG);
	cargoCategoryButtons.push(clothingButtonBG);
	cargoCategoryButtons.push(miscButtonBG);

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

	var btnMainMenu=new Button("MAIN_MENU",49,0,200,50,"","Epistolar",15,"black", buttonBG);
	btnMainMenu.onClick=function(){
		parentMenu.clearScreen();
		addMainMenu();
	}

	var btnSave=new Button("SAVE",690,520,80,80,"","Epistolar",15,"black", saveButtonBG);
	btnSave.onClick=function(){
		var parser=new GameStateParser();
		parser.saveGame();
	}

	var btnShip=new Button("SHIPS",290,520,80,80,"","Epistolar",15,"black", shipsButtonBG);
	btnShip.onClick=function(){
		parentMenu.clearScreen();
		addFleetMenu();
	}
	var btnCargo=new Button("CARGO",370,520,80,80,"","Epistolar",15,"black", cargoButtonBG);
	btnCargo.onClick=function(){
		parentMenu.clearScreen();
		addCargoMenu();
	}

	var btnMap=new Button("MAP",450,520,80,80,"","Epistolar",15,"black", mapButtonBG);
	btnMap.onClick=function(){
		parentMenu.clearScreen();
		addMapMenu();
	}

	var btnQuests=new Button("QUESTS",530,520,80,80,"","Epistolar",15,"black", questButtonBG);
	btnQuests.onClick=function(){
		//parentMenu.clearScreen();
		alert("Quest function coming soon!");
	}
	var btnSettlement=new Button("SETTLEMENT",610,520,80,80,"","Epistolar",15,"black", settlementButtonBG);
	btnSettlement.onClick=function(){
		var fetcher=new SettlementInfoFetcher();
		var settlement=fetcher.get(gameState.settlement);
		parentMenu.clearScreen();
		addSettlementMenu(settlement);
	}
	var btnTranslate=new Button("WORK",920,520,80,80,"","Epistolar",15,"black", translateButtonBG);
	btnTranslate.onClick=function(){
		//parentMenu.clearScreen();
		alert("Translation function coming soon!");
	}

	var lblPlayerName=new Label(0,300,100,50,gameState.playerName,"Epistolar",15,"black");

	


	parentMenu.addButton(btnMainMenu);
	parentMenu.addButton(btnSave);
	parentMenu.addButton(btnShip);
	parentMenu.addButton(btnCargo);
	parentMenu.addButton(btnMap);
	parentMenu.addButton(btnQuests);
	parentMenu.addButton(btnSettlement);
	parentMenu.addButton(btnTranslate);
	parentMenu.addLabel(lblPlayerName);
}



