function addSettlementMenu(settlement){
	var settlementScreen=new staticScreen();

	addDefaultButtons(settlementScreen);
	var buildingsPanel=new Panel(220,150,595,310,lunhawanSettlementImg);
	buildingsPanel.visible=true;

	var lblName=new Label(400,500,100,50,gameState.settlement,"Epistolar",36,"black");
	settlementScreen.addLabel(lblName);
	settlementScreen.addPanel(buildingsPanel);
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
	var btnShipbuilder=new Button("SHIPBUILDER",95,540,15,15,"Shipbuilder","Epistolar",15,"black", settlementImg);
		btnShipbuilder.onClick=function(){
			parentMenu.clearScreen();
			returnItemsToSell();
			addShipbuilderMenu(settlement);
		}
		parentMenu.addButton(btnShipbuilder);
}
function addMarketButton(parentMenu,settlement){
		var btnMarket=new Button("MARKET",200,540,15,15,"Market","Epistolar",15,"black", buttonBG);
		btnMarket.onClick=function(){
			parentMenu.clearScreen();
			returnItemsToSell();
			addMarketMenu(settlement);
		}
		parentMenu.addButton(btnMarket);
}