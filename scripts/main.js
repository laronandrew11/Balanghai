

//var activeScreen;

var gameState;


//TODO optimize screen switching by not re-initializing screens every time we switch screens, or removing invisible screens from memory
function main()
{
	 context.textBaseline = 'top';
  //context.textAlign = "center";
	addStartScreen();

}	
function addStartScreen()
{
	var startScreen=new staticScreen();

	var btnContinue=new Button("CONTINUE",415,525,240,60,"CLICK TO CONTINUE","Bebas",18,"black", buttonBG);
	btnContinue.highlightImage=coinImg;
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
function addDefaultLabels(parentMenu)
{
	var lblPlayerName=new Label(700,2,145,38,gameState.playerName,"Bebas",18,"black");
	lblPlayerName.bgImage=scrollLargeImg;
	var lblGameDate=new Label(700,38,100,38,gameState.gameDate.year+"-"+gameState.gameDate.month+"-"+gameState.gameDate.day,"Bebas",18,"black");
	lblGameDate.bgImage=scrollLargeImg;
	var lblMoney=new Label(840,38,145,38,gameState.money,"Bebas",18,"black");
	lblMoney.bgImage=scrollLargeImg;
	var lblCoin=new Label(805,38,33,31,"","Epistolar",18,"black");
	lblCoin.bgImage=coinImg;
	var lblWeight=new Label(848,2,36,25,"","Epistolar",18,"black");
	lblWeight.bgImage=totalWeightImg;

	var lblCargoCapacity=new Label(884,2,145,38,gameState.getUsedCapacity()+"/"+gameState.getMaxCapacity(),"Bebas",18,"black");
	lblCargoCapacity.bgImage=scrollLargeImg;
	
	parentMenu.addLabel(lblGameDate);
	parentMenu.addLabel(lblPlayerName);
	parentMenu.addLabel(lblMoney);
	parentMenu.addLabel(lblCoin);
	parentMenu.addLabel(lblCargoCapacity);
	parentMenu.addLabel(lblWeight);

}
function addDefaultButtons(parentMenu)
{

	var btnMainMenu=new Button("MAIN_MENU",49,0,320,67,"","Epistolar",15,"black", mainMenuButtonBG);
	btnMainMenu.highZOrder=true;
	btnMainMenu.highlightImage=coinImg;
	btnMainMenu.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addMainMenu();
	}

	var btnSave=new Button("SAVE",690,520,80,80,"","Epistolar",15,"black", saveButtonBG);
	btnSave.highZOrder=true;
	btnSave.highlightImage=coinImg;
	btnSave.onClick=function(){
		var parser=new GameStateParser();
		parser.saveGame();
	}

	var btnShip=new Button("SHIPS",290,520,80,80,"","Epistolar",15,"black", shipsButtonBG);
	btnShip.highZOrder=true;
	btnShip.highlightImage=coinImg;
	btnShip.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addFleetMenu();
	}
	var btnCargo=new Button("CARGO",370,520,80,80,"","Epistolar",15,"black", cargoButtonBG);
	btnCargo.highZOrder=true;
	btnCargo.highlightImage=coinImg;
	btnCargo.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addCargoMenu();
	}

	var btnMap=new Button("MAP",450,520,80,80,"","Epistolar",15,"black", mapButtonBG);
	btnMap.highZOrder=true;
	btnMap.highlightImage=coinImg;
	btnMap.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addMapMenu();
	}

	var btnQuests=new Button("QUESTS",530,520,80,80,"","Epistolar",15,"black", questButtonBG);
	btnQuests.highZOrder=true;
	btnQuests.highlightImage=coinImg;
	btnQuests.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addQuestMenu();
		
	}
	var btnSettlement=new Button("SETTLEMENT",610,520,80,80,"","Epistolar",15,"black", settlementButtonBG);
	btnSettlement.highZOrder=true;
	btnSettlement.highlightImage=coinImg;
	btnSettlement.onClick=function(){
		var fetcher=new SettlementInfoFetcher();
		var settlement=fetcher.get(gameState.settlement);
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addSettlementMenu(settlement);
	}
	var btnTranslate=new Button("WORK",850,470,100,125,"","Epistolar",15,"black", translateButtonBG);
	btnTranslate.highZOrder=true;
	btnTranslate.highlightImage=coinImg;
	btnTranslate.onClick=function(){
		deactivateTextboxes(parentMenu);
		parentMenu.clearScreen();
		returnItemsToSell();
		addTranslationMenu();
		
	}

	
	parentMenu.addButton(btnMainMenu);
	parentMenu.addButton(btnSave);
	parentMenu.addButton(btnShip);
	parentMenu.addButton(btnCargo);
	parentMenu.addButton(btnMap);
	parentMenu.addButton(btnQuests);
	parentMenu.addButton(btnSettlement);
	parentMenu.addButton(btnTranslate);
	addDefaultLabels(parentMenu);
}
function deactivateTextboxes(parentMenu)
{
	var i;
	for(i=0;i<parentMenu.panels.length;i++)
	{
		var j;

		for(j=0;j<parentMenu.panels[i].textboxes.length;j++)
		{
			parentMenu.panels[i].textboxes[j].deactivate();
		}
		
	}
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

