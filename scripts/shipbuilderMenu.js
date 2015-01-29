function addShipbuilderMenu(settlement){
	var shipbuilderScreen=new staticScreen();
	addDefaultButtons(shipbuilderScreen);

	if(contains(settlement.pois,"market"))
	{
		addMarketButton(shipbuilderScreen,settlement);
	}


	var btnTest=new Button("TEST",115,300,60,60,"You're at Shipbuilder","Epistolar",15,"black", buttonBG);
		btnTest.onClick=function(){
			alert(settlement.name+" shipbuilder coming soon!");
		}
	shipbuilderScreen.addButton(btnTest);
	shipbuilderScreen.drawScreen(startbg);
}