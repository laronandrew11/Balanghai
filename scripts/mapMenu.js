function addMapMenu(){
	gameState.currentMenu="map";
	var mapMenu=new staticScreen();
	
	var pnlMap=new Panel(50,50,900,500,mapImg);
	

	//add settlements
	var settlementFetcher= new SettlementInfoFetcher();
	var i;
	for(i=0;i<gameState.visibleSettlements.length;i++)
	{
		var newButton=getSettlementButton(settlementFetcher, mapMenu, gameState.visibleSettlements[i]);
		pnlMap.addButton(newButton);
		var newLabel=new Label(newButton.x+14,newButton.y,80,24,gameState.visibleSettlements[i],"Bebas",16, "black");
		newLabel.bgImage=scrollSmallImg;
		pnlMap.addLabel(newLabel);
	}

	var lblYouAreHere=new Label(50+gameState.mapX,50+gameState.mapY,16,16,"","Epistolar",15,"black");
	lblYouAreHere.bgImage=pointerImg;
	
	pnlMap.addLabel(lblYouAreHere);
	pnlMap.visible=true;


	
	addDefaultButtons(mapMenu);
	mapMenu.addPanel(pnlMap);
	mapMenu.drawScreen(mapBG);
}

function getSettlementButton(fetcher, parentMenu,settlementName)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{

	var settlement=fetcher.get(settlementName);
	var newButton=new Button(settlementName,44+settlement.mapX,44+settlement.mapY,12,12,"","Epistolar",16,"black", poiButtonImg);
	newButton.onClick=function(){
			//alert(settlement.name);
			parentMenu.clearScreen();
			heading = new dot(settlement.mapX*mapScale,settlement.mapY*mapScale,50,50,"red");
	
			//the ff. is temporary until we have a travel screen where time actually passes
			addTravelMenu();
			

			/*addSettlementMenu(settlement);//TODO only pass name?
			gameState.mapX=settlement.mapX;
			gameState.mapY=settlement.mapY;
			gameState.settlement=settlement.name;
			triggerTranslationQuest();*/

			//gameState.gameDate.advanceDate();
		}
	return newButton;
}