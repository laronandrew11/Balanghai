

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

function returnCargoToSell(){
	var i;
	for(i=0;i<gameState.toSell.length;i++)
	{
		//return cargo to either cargo list or ship list
	}
}

