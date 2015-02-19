function addSettlementMenu(settlement){
	var settlementScreen=new staticScreen();

	addDefaultButtons(settlementScreen);

	//load settlement data for given settlement name, and create relevant buttons/panels
	if(contains(settlement.pois,"shipbuilder"))
	{
		addShipbuilderButton(settlementScreen,settlement);
	}
	if(contains(settlement.pois,"market"))
	{
		addMarketButton(settlementScreen,settlement);
	}
	settlementScreen.drawScreen(settlementMenuBG);
}
function addShipbuilderButton(parentMenu,settlement){
	var btnShipbuilder=new Button("SHIPBUILDER",95,540,100,60,"Shipbuilder","Epistolar",15,"black", buttonBG);
		btnShipbuilder.onClick=function(){
			parentMenu.clearScreen();
			returnItemsToSell();
			addShipbuilderMenu(settlement);
		}
		parentMenu.addButton(btnShipbuilder);
}
function addMarketButton(parentMenu,settlement){
		var btnMarket=new Button("MARKET",200,540,100,60,"Market","Epistolar",15,"black", buttonBG);
		btnMarket.onClick=function(){
			parentMenu.clearScreen();
			returnItemsToSell();
			addMarketMenu(settlement);
		}
		parentMenu.addButton(btnMarket);
}