

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

	var btnMainMenu=new Button("MAIN_MENU",49,0,320,67,"","Epistolar",15,"black", mainMenuButtonBG);
	btnMainMenu.onClick=function(){
		parentMenu.clearScreen();
		returnItemsToSell();
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
		returnItemsToSell();
		addFleetMenu();
	}
	var btnCargo=new Button("CARGO",370,520,80,80,"","Epistolar",15,"black", cargoButtonBG);
	btnCargo.onClick=function(){
		parentMenu.clearScreen();
		returnItemsToSell();
		addCargoMenu();
	}

	var btnMap=new Button("MAP",450,520,80,80,"","Epistolar",15,"black", mapButtonBG);
	btnMap.onClick=function(){
		parentMenu.clearScreen();
		returnItemsToSell();
		addMapMenu();
	}

	var btnQuests=new Button("QUESTS",530,520,80,80,"","Epistolar",15,"black", questButtonBG);
	btnQuests.onClick=function(){
		parentMenu.clearScreen();
		returnItemsToSell();
		addQuestMenu();
		
	}
	var btnSettlement=new Button("SETTLEMENT",610,520,80,80,"","Epistolar",15,"black", settlementButtonBG);
	btnSettlement.onClick=function(){
		var fetcher=new SettlementInfoFetcher();
		var settlement=fetcher.get(gameState.settlement);
		parentMenu.clearScreen();
		returnItemsToSell();
		addSettlementMenu(settlement);
	}
	var btnTranslate=new Button("WORK",850,500,100,100,"","Epistolar",15,"black", translateButtonBG);
	btnTranslate.onClick=function(){
		parentMenu.clearScreen();
		returnItemsToSell();
		addTranslationMenu();
		
	}

	var lblPlayerName=new Label(700,18,100,50,gameState.playerName,"Epistolar",18,"black");
	var lblGameDate=new Label(700,38,100,50,gameState.gameDate.year+"-"+gameState.gameDate.month+"-"+gameState.gameDate.day,"Epistolar",18,"black");
	var lblMoney=new Label(800,38,100,50,gameState.money+" gold","Epistolar",18,"black");


	parentMenu.addButton(btnMainMenu);
	parentMenu.addButton(btnSave);
	parentMenu.addButton(btnShip);
	parentMenu.addButton(btnCargo);
	parentMenu.addButton(btnMap);
	parentMenu.addButton(btnQuests);
	parentMenu.addButton(btnSettlement);
	parentMenu.addButton(btnTranslate);
	parentMenu.addLabel(lblPlayerName);
	parentMenu.addLabel(lblGameDate);
	parentMenu.addLabel(lblMoney);
}

function returnItemsToSell(){//refactor: use the inside of the loop as a separate function and recycle it in the toSellButtonHandler
	var i;
	var max=gameState.toSell.length;
	for(i=0;i<max;i++)
	{
		var item=gameState.toSell[0];
		if(gameState.itemType=='cargo'){
			//alert(item.name);
			gameState.removeToSellItem(item.name, 'cargo');
				
				//update item in general inventory
				if(!gameState.hasCargo(item.name))
				{
					var itemToReturn=new Cargo(item.name,item.type,item.unitWeight, item.amount, item.price);
					gameState.cargo.push(itemToReturn);
				}
				else
				{
					gameState.getCargo(item.name).amount+=item.amount;
				}
		}
		else if (gameState.itemType=='ship')
		{
			gameState.removeToSellItem(item.properName, 'ship');
			var itemToReturn=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
			gameState.ships.push(itemToReturn);
		}

	}
}
function returnItemsToBuy(shopInventory){
	var i;
	var max=shopInventory.toSell.length;
	for(i=0;i<max;i++)
	{
		var item=shopInventory.toSell[0];
		if(shopInventory.type=='market')
		{
			shopInventory.removeToSellItem(item.name);
					
					//update item in general inventory
					if(!shopInventory.hasCargo(item.name))
					{
						var itemToRemove=new Cargo(item.name,item.type,item.unitWeight, item.amount, item.price);
						shopInventory.cargoList.push(itemToRemove);
					}
					else
					{
						shopInventory.getCargo(item.name).amount+=item.amount;
					}
		}
		else if (shopInventory.type=='shipbuilder')
		{
			shopInventory.removeToSellItem(item.properName);
			var itemToRemove=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
			shopInventory.cargoList.push(itemToRemove);
		}
	}
}

