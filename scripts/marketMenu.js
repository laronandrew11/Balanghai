function CreateBuyableItemButtonHandler(parentMenu, button, item, shopInventory)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			if(shopInventory.type=='market')
			{
				var amountToBuy=parseInt(prompt("Buy how many units?"));
				if(amountToBuy>item.amount||amountToBuy<=0)//TODO include strings/chars as invalid input
					alert("Invalid amount");
				else {
					//update item in general inventory
					if(amountToBuy<item.amount)
					{
						item.amount=item.amount-amountToBuy;
					}
					else if(amountToBuy==item.amount)
					{
						shopInventory.removeCargo(item.name);
					}
					//update item to sell
					if(!shopInventory.hasToSellItem(item.name))
					{
						var itemToBuy=new Cargo(item.name,item.type,item.unitWeight, amountToBuy, item.price);
						shopInventory.toSell.push(itemToBuy);
					}
					else
					{
						shopInventory.getToSellItem(item.name).amount+=amountToBuy;
					}
			
					//parentMenu.drawScreen(context);
				}
			}
			else if(shopInventory.type=='shipbuilder')
			{
				shopInventory.removeCargo(item.properName);
				var itemToBuy=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				shopInventory.toSell.push(itemToBuy);
			}
			populateShopInventoryPanel(parentMenu, shopInventory);
				populateToBuyPanel(parentMenu, shopInventory);
		}
}
function CreateToBuyItemButtonHandler(parentMenu, button, item, shopInventory){
	var lbutton=button;
	return function(){
			if(shopInventory.type=='market')
			{
				var amountToRemove=parseInt(prompt("Remove how many units?"));
				if(amountToRemove>item.amount||amountToRemove<=0)//TODO include strings/chars as invalid input
					alert("Invalid amount");
				else {
					//update item to buy
					if(amountToRemove<item.amount)
					{
						item.amount=item.amount-amountToRemove;
					}
					else if(amountToRemove==item.amount)
					{
						shopInventory.removeToSellItem(item.name);
					}
					//update item in general inventory
					if(!shopInventory.hasCargo(item.name))
					{
						var itemToRemove=new Cargo(item.name,item.type,item.unitWeight, amountToRemove, item.price);
						shopInventory.cargoList.push(itemToRemove);
					}
					else
					{
						shopInventory.getCargo(item.name).amount+=amountToRemove;
					}
					
					//parentMenu.drawScreen(context);
				}
			}
			else if(shopInventory.type=='shipbuilder')
			{
				shopInventory.removeToSellItem(item.properName);
				var itemToRemove=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				shopInventory.cargoList.push(itemToRemove);
				
			}
			populateShopInventoryPanel(parentMenu, shopInventory);
				populateToBuyPanel(parentMenu, shopInventory);
		}
}
function CreateSellableItemButtonHandler(parentMenu, button, item, poiType)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){

		if(poiType=='market'){
			var amountToSell=parseInt(prompt("Sell how many units?"));
			if(amountToSell>item.amount||amountToSell<=0)//TODO include strings/chars as invalid input
				alert("Invalid amount");
			else {
				//update item in general inventory
				if(amountToSell<item.amount)
				{
					item.amount=item.amount-amountToSell;
				}
				else if(amountToSell==item.amount)
				{
					gameState.removeCargo(item.name);
				}
				//update item to sell
				if(!gameState.hasToSellItem(item.name))
				{
					var itemToSell=new Cargo(item.name,item.type,item.unitWeight, amountToSell, item.price);
					gameState.toSell.push(itemToSell);
				}
				else
				{
					gameState.getToSellItem(item.name).amount+=amountToSell;
				}
			
				//parentMenu.drawScreen(context);
			}
		}
		
			else if(poiType=='shipbuilder')
			{
				gameState.removeShip(item.properName);
				var itemToSell=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				gameState.toSell.push(itemToSell);
		
			}
					populatePlayerInventoryPanel(parentMenu, poiType);
				populateToSellPanel(parentMenu, poiType);
		}
}
function CreateToSellItemButtonHandler(parentMenu, button, item, poiType)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
		if(poiType=='market')
		{
			var amountToRemove=parseInt(prompt("Remove how many units?"));
			if(amountToRemove>item.amount||amountToRemove<=0)//TODO include strings/chars as invalid input
				alert("Invalid amount");
			else {
				//update item to sell
				if(amountToRemove<item.amount)
				{
					item.amount=item.amount-amountToRemove;
				}
				else if(amountToRemove==item.amount)
				{
					gameState.removeToSellItem(item.name, 'cargo');
				}
				//update item in general inventory
				if(!gameState.hasCargo(item.name))
				{
					var itemToReturn=new Cargo(item.name,item.type,item.unitWeight, amountToRemove, item.price);
					gameState.cargo.push(itemToReturn);
				}
				else
				{
					gameState.getCargo(item.name).amount+=amountToRemove;
				}
			
				//parentMenu.drawScreen(context);
			}
		}
			else if(poiType=='shipbuilder')
			{
				gameState.removeToSellItem(item.properName, 'ship');
				var itemToReturn=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				gameState.ships.push(itemToReturn);
			
			}
				populatePlayerInventoryPanel(parentMenu, poiType);
				populateToSellPanel(parentMenu, poiType);

		}
}

function populatePlayerInventoryPanel(parentMenu, poiType)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[0].clearButtons();
	parentMenu.panels[0].clearLabels();
		var lblPlayerMoney=new Label(60,200,100,50,"Your money: "+gameState.money,"Epistolar",15,"black");
	var x=60;
	var i;
	if(poiType=="market")
		var cargoList=gameState.cargo;
	else if(poiType=='shipbuilder')
		var cargoList=gameState.ships;

	for(i=0;i<cargoList.length;i++){
		var item=cargoList[i];

		if(poiType=='market'){
			var newButton=new Button(item.amount+" "+item.name,x,60,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,140,100,50,item.price+"/unit","Epistolar",15,"black");
		}
			
		else if(poiType=='shipbuilder'){
			var newButton=new Button(item.properName,x,60,70,70,item.properName+" ("+item.name+")","Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,140,100,50,item.price,"Epistolar",15,"black");
		}

		newButton.onClick=CreateSellableItemButtonHandler(parentMenu, newButton, item, poiType);
		parentMenu.panels[0].addButton(newButton);//add to inventory panel

		
		parentMenu.panels[0].addLabel(newLabel);
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
		parentMenu.panels[0].addLabel(lblPlayerMoney);
	parentMenu.panels[0].draw(context);
}

function populateToSellPanel(parentMenu, poiType)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[2].clearButtons();
	parentMenu.panels[2].clearLabels();
	var x=60;
	var i;
	for(i=0;i<gameState.toSell.length;i++){
		var item=gameState.toSell[i];
		if(poiType=='market'){
			var newButton=new Button(item.amount+" "+item.name,x,350,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,430,100,50,item.price+"/unit","Epistolar",15,"black");
		}
			
		else if(poiType=='shipbuilder'){
			var newButton=new Button(item.properName,x,350,70,70,item.properName+" ("+item.name+")","Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,430,100,50,item.price,"Epistolar",15,"black");
		}
		newButton.onClick=CreateToSellItemButtonHandler(parentMenu, newButton, item, poiType);
		parentMenu.panels[2].addButton(newButton);//add to inventory panel
		parentMenu.panels[2].addLabel(newLabel);
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}

	parentMenu.panels[2].draw(context);
}

function populateShopInventoryPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[1].clearButtons();
	parentMenu.panels[1].clearLabels();
	var lblShopMoney=new Label(550,200,100,50,"Shop's money: "+shopInventory.money,"Epistolar",15,"black");
	var x=560;
	var i;
	
	//TODO load shop inventory based on settlement name and type
	for(i=0;i<shopInventory.cargoList.length;i++){
		var item=shopInventory.cargoList[i];
		if(shopInventory.type=='market'){
			var newButton=new Button(item.amount+" "+item.name,x,60,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,140,100,50,item.price+"/unit","Epistolar",15,"black");
		}
			
		else if(shopInventory.type=='shipbuilder'){
			var newButton=new Button(item.properName,x,60,70,70,item.properName+" ("+item.name+")","Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,140,100,50,item.price,"Epistolar",15,"black");
		}
			
		newButton.onClick=CreateBuyableItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[1].addButton(newButton);//add to inventory panel


		
		parentMenu.panels[1].addLabel(newLabel);
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);

		
	}
	parentMenu.panels[1].addLabel(lblShopMoney);
	parentMenu.panels[1].draw(context);
}
function populateToBuyPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[3].clearButtons();
	parentMenu.panels[3].clearLabels();
	var x=560;
	var i;
	
	//TODO load shop inventory based on settlement name and type
	for(i=0;i<shopInventory.toSell.length;i++){
		var item=shopInventory.toSell[i];

		if(shopInventory.type=='market'){
			var newButton=new Button(item.amount+" "+item.name,x,350,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,430,100,50,item.price+"/unit","Epistolar",15,"black");
		}
			
		else if(shopInventory.type=='shipbuilder'){
			var newButton=new Button(item.properName,x,350,70,70,item.properName+" ("+item.name+")","Epistolar",15,"black", buttonBG);
			var newLabel=new Label(x,430,100,50,item.price,"Epistolar",15,"black");
		}

		newButton.onClick=CreateToBuyItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[3].addButton(newButton);//add to inventory panel

		
		parentMenu.panels[3].addLabel(newLabel);
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	parentMenu.panels[3].draw(context);
}






function addMarketMenu(settlement){
	var marketScreen=new staticScreen();
	addDefaultButtons(marketScreen);
	var shopInventory=settlement.getShopInventory('market');
	var fetcher=new PriceTableInfoFetcher();
	var priceTable=fetcher.findPriceTable(settlement.name, 'market');
	//alert(priceTable[0].cargoName);
	shopInventory.setPriceTable(priceTable);//TODO in future, specify shop type as well
	gameState.itemType='cargo';
	gameState.setPrices(priceTable);




	if(contains(settlement.pois,"shipbuilder"))
	{
		addShipbuilderButton(marketScreen,settlement);
	}

	var btnTrade=new Button("TRADE",450,275,100,50,"TRADE","Epistolar",15,"black", buttonBG);
		btnTrade.onClick=function(){
			tradeCargo(shopInventory, shopInventory.toSell, gameState.toSell);
		
			populatePlayerInventoryPanel(marketScreen,'market');
			populateShopInventoryPanel(marketScreen, shopInventory);
			populateToSellPanel(marketScreen,'market');
			populateToBuyPanel(marketScreen, shopInventory);
		}



	var pnlPlayerInventory=new Panel(50,50,450,250,startbg);
	var pnlShopInventory=new Panel(500,50,450,250,startbg);
	var pnlToSell=new Panel(50,300,450,250,startbg);
	var pnlToBuy=new Panel(500,300,450,250,startbg);

	pnlPlayerInventory.visible=true;
	pnlShopInventory.visible=true;
	pnlToSell.visible=true;
	pnlToBuy.visible=true;


	

	marketScreen.addPanel(pnlPlayerInventory);
	marketScreen.addPanel(pnlShopInventory);
	marketScreen.addPanel(pnlToSell);
	marketScreen.addPanel(pnlToBuy);
	marketScreen.addButton(btnTrade);

		populatePlayerInventoryPanel(marketScreen, 'market');
		populateShopInventoryPanel(marketScreen, shopInventory);
		populateToSellPanel(marketScreen, 'market');
		populateToBuyPanel(marketScreen, shopInventory);


	marketScreen.drawScreen(defaultbg);
}


