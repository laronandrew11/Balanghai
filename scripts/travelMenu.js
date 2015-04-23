function addTravelMenu(){
	gameState.currentMenu="travel";
	var travelScreen=new DynamicScreen();
	var settlementFetcher= new SettlementInfoFetcher();
	
	addSettlementMarkers(settlementFetcher, travelScreen);
		//pnlMap.addButton(newButton);
	
	
	addDefaultLabels(travelScreen);

	var lblSpeed=new Label(840,38,145,38,gameState.getMinSpeed()+ " knots","Bebas",18,"black");
	lblSpeed.bgImage=scrollLargeImg;
	travelScreen.addLabel(lblSpeed);

	var dlgNewQuest=new Dialog(travelScreen,"New sentence available to translate","OK",function(){
		travelScreen.active=true;
	});

	travelScreen.initialize();

}
	
function triggerTravelAlert(parentMenu)
{
	alert("Supposed to activate panel!");
	
	console.log(parentMenu.panels.length);
	parentMenu.panels[0].visible=true;
	parentMenu.dynamicScreenActive=false;
}

function addSettlementMarkers(fetcher, parentScreen)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{
	var i;
	var settlementList=fetcher.getAll();
	for(i=0;i<settlementList.length;i++)
	{
		parentScreen.addSettlement(new Sprite('img/icons/coin.png',settlementList[i].mapX*mapScale,settlementList[i].mapY*mapScale), settlementList[i]);
	}
	//travelScreen.addSprite(3*settlement.mapX, 3*settlement.mapY, 16, 16, settlementImg);
	//return a new sprite with centered x and y equal to 5x settlement mapX and mapY
}
