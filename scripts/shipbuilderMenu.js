function addShipbuilderMenu(settlement){
	playerPageNo=0;
	shopPageNo=0;
	var shipbuilderScreen=new staticScreen();
	addDefaultButtons(shipbuilderScreen);

	var shopInventory=settlement.getShopInventory('shipbuilder');
	var fetcher=new PriceTableInfoFetcher();
	var priceTable=fetcher.findPriceTable(settlement.name, 'shipbuilder');
	//alert(priceTable[0].cargoName);
	shopInventory.setPriceTable(priceTable);//TODO in future, specify shop type as well
	gameState.itemType='ship';
	gameState.setPriceTable(priceTable);



	if(contains(settlement.pois,"market"))
	{
		addMarketButton(shipbuilderScreen,settlement);
	}

/*Population functions and cargo trading functions will be modified to accomodate shipbuilders...*/

var btnTrade=new Button("TRADE",400,350,162,65,"","Bebas",15,"black", tradeButtonBG);
		btnTrade.onClick=function(){
			tradeShips(shopInventory, shopInventory.toSell, gameState.toSell);
			shipbuilderScreen.labels[2].text=gameState.money;
			shipbuilderScreen.labels[4].text=gameState.getUsedCapacity()+"/"+gameState.getMaxCapacity();

			populatePlayerInventoryPanel(shipbuilderScreen, 'shipbuilder');
			populateShopInventoryPanel(shipbuilderScreen, shopInventory);
			populateToSellPanel(shipbuilderScreen, 'shipbuilder');
			populateToBuyPanel(shipbuilderScreen, shopInventory);

		}



	var pnlPlayerInventory=new Panel(50,50,450,300,null);
	var pnlShopInventory=new Panel(500,50,450,300,null);
	var pnlToSell=new Panel(50,300,450,250,null);
	var pnlToBuy=new Panel(500,300,450,250,null);

	pnlPlayerInventory.visible=true;
	pnlShopInventory.visible=true;
	pnlToSell.visible=true;
	pnlToBuy.visible=true;


	

	shipbuilderScreen.addPanel(pnlPlayerInventory);
	shipbuilderScreen.addPanel(pnlShopInventory);
	shipbuilderScreen.addPanel(pnlToSell);
	shipbuilderScreen.addPanel(pnlToBuy);
	shipbuilderScreen.addButton(btnTrade);

		populatePlayerInventoryPanel(shipbuilderScreen, 'shipbuilder');
		populateShopInventoryPanel(shipbuilderScreen, shopInventory);
		populateToSellPanel(shipbuilderScreen, 'shipbuilder');
		populateToBuyPanel(shipbuilderScreen, shopInventory);

	shipbuilderScreen.drawScreen(tradeMenuBG);
}