function addShipbuilderMenu(settlement){
	var shipbuilderScreen=new staticScreen();
	addDefaultButtons(shipbuilderScreen);

	var shopInventory=settlement.getShopInventory('shipbuilder');
	var fetcher=new PriceTableInfoFetcher();
	var priceTable=fetcher.findPriceTable(settlement.name, 'shipbuilder');
	//alert(priceTable[0].cargoName);
	shopInventory.setPriceTable(priceTable);//TODO in future, specify shop type as well
	gameState.setPrices(priceTable, "ships");



	if(contains(settlement.pois,"market"))
	{
		addMarketButton(shipbuilderScreen,settlement);
	}

/*Population functions and cargo trading functions will be modified to accomodate shipbuilders...*/

var btnTrade=new Button("TRADE",450,275,100,50,"TRADE","Epistolar",15,"black", buttonBG);
		btnTrade.onClick=function(){
			tradeCargo(shopInventory, shopInventory.toSell, gameState.toSell,'ship');
		
			populatePlayerInventoryPanel(shipbuilderScreen, 'shipbuilder');
			populateShopInventoryPanel(shipbuilderScreen, shopInventory);
			populateToSellPanel(shipbuilderScreen, 'shipbuilder');
			populateToBuyPanel(shipbuilderScreen, shopInventory);
		}



	var pnlPlayerInventory=new Panel(50,50,450,250,startbg);
	var pnlShopInventory=new Panel(500,50,450,250,startbg);
	var pnlToSell=new Panel(50,300,450,250,startbg);
	var pnlToBuy=new Panel(500,300,450,250,startbg);

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

	shipbuilderScreen.drawScreen(defaultbg);
}