function addMapMenu(){
	var mapMenu=new staticScreen();
	
	var pnlMap=new Panel(50,50,900,500,mapImg);
	
	populateShopInventories();//TODO find a better place for this function call?
	//add settlements
	var settlementFetcher= new SettlementInfoFetcher();
	var i;
	for(i=0;i<gameState.visibleSettlements.length;i++)
	{
		var newButton=getSettlementButton(settlementFetcher, mapMenu, gameState.visibleSettlements[i]);
		pnlMap.addButton(newButton);
	}

	var btnYouAreHere=new Button("YOU_ARE_HERE",50+gameState.mapX,50+gameState.mapY,16,16,"","Epistolar",15,"black", pointerImg);
	btnYouAreHere.onClick=function(){
		alert("YOU ARE HERE");
	}
	pnlMap.addButton(btnYouAreHere);
	pnlMap.visible=true;


	
	addDefaultButtons(mapMenu);
	mapMenu.addPanel(pnlMap);
	mapMenu.drawScreen(mapBG);
}

function getSettlementButton(fetcher, parentMenu,settlementName)//TODO optimize so that we don't parse the JSON string every time we add a new settlement
{

	var settlement=fetcher.get(settlementName);
	var newButton=new Button(settlementName,44+settlement.mapX,44+settlement.mapY,12,12,settlement.name,"Epistolar",15,"black", settlementImg);
	newButton.onClick=function(){
			//alert(settlement.name);
			parentMenu.clearScreen();
			//the ff. is temporary until we have a travel screen where time actually passes
			
			//init();
			addSettlementMenu(settlement);//TODO only pass name?
			gameState.mapX=settlement.mapX;
			gameState.mapY=settlement.mapY;
			gameState.settlement=settlement.name;

			//gameState.gameDate.advanceDate();
		}
	return newButton;
}