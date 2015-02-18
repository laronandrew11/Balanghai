function addTravelMenu(){
	var travelScreen=new DynamicScreen();
	var settlementFetcher= new SettlementInfoFetcher();
	var i;
	for(i=0;i<gameState.visibleSettlements.length;i++)
	{
		var newMarker=getSettlementMarker(settlementFetcher, travelScreen, gameState.visibleSettlements[i]);
		//pnlMap.addButton(newButton);
	}

	travelScreen.initialize();
}
	

function getSettlementMarker(fetcher, parentScreen,settlementName)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{

	var settlement=fetcher.get(settlementName);
	//travelScreen.addSprite(3*settlement.mapX, 3*settlement.mapY, 16, 16, settlementImg);
	//return a new sprite with centered x and y equal to 5x settlement mapX and mapY
}
