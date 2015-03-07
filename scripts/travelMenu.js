function addTravelMenu(){
	var travelScreen=new DynamicScreen();
	var settlementFetcher= new SettlementInfoFetcher();
	
	addSettlementMarkers(settlementFetcher, travelScreen);
		//pnlMap.addButton(newButton);
	
	

	var lblPlayerName=new Label(700,18,100,50,gameState.playerName,"Epistolar",18,"black");
	var lblGameDate=new Label(700,38,100,50,gameState.gameDate.year+"-"+gameState.gameDate.month+"-"+gameState.gameDate.day,"Epistolar",18,"black");
	var lblMoney=new Label(800,38,100,50,gameState.money+" gold","Epistolar",18,"black");
	
	travelScreen.addLabel(lblGameDate);
	travelScreen.addLabel(lblPlayerName);
	travelScreen.addLabel(lblMoney);
	travelScreen.initialize();
}
	

function addSettlementMarkers(fetcher, parentScreen)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{
	var i;
	var settlementList=fetcher.getAll();
	for(i=0;i<settlementList.length;i++)
	{
		parentScreen.addSettlement(new Sprite('img/settlement.png',settlementList[i].mapX*mapScale,settlementList[i].mapY*mapScale), settlementList[i]);
	}
	//travelScreen.addSprite(3*settlement.mapX, 3*settlement.mapY, 16, 16, settlementImg);
	//return a new sprite with centered x and y equal to 5x settlement mapX and mapY
}
