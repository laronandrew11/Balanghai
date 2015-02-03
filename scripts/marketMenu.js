function CreateBuyableItemButtonHandler(parentMenu, button, item, shopInventory)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
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
				populateShopInventoryPanel(parentMenu, shopInventory);
				populateToBuyPanel(parentMenu, shopInventory);
				//parentMenu.drawScreen(context);
			}
		}
}
function CreateToBuyItemButtonHandler(parentMenu, button, item, shopInventory){
	var lbutton=button;
	return function(){
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
					shopInventory.cargo.push(itemToRemove);
				}
				else
				{
					shopInventory.getCargo(item.name).amount+=amountToRemove;
				}
				populatePlayerInventoryPanel(parentMenu);
				populateToSellPanel(parentMenu);
				//parentMenu.drawScreen(context);
			}
		}
}
function CreateSellableItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
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
				populatePlayerInventoryPanel(parentMenu);
				populateToSellPanel(parentMenu);
				//parentMenu.drawScreen(context);
			}
		}
}
function CreateToSellItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
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
					gameState.removeToSellItem(item.name);
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
				populatePlayerInventoryPanel(parentMenu);
				populateToSellPanel(parentMenu);
				//parentMenu.drawScreen(context);
			}
		}
}

function populatePlayerInventoryPanel(parentMenu)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[0].clearButtons();
	parentMenu.panels[0].clearLabels();
		var lblPlayerMoney=new Label(60,140,100,50,gameState.money,"Epistolar",15,"black");
	var x=60;
	var i;
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];

		var newButton=new Button(item.amount+" "+item.name,x,60,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateSellableItemButtonHandler(parentMenu, newButton, item);
		parentMenu.panels[0].addButton(newButton);//add to inventory panel
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
		parentMenu.panels[0].addLabel(lblPlayerMoney);
	parentMenu.panels[0].draw(context);
}

function populateToSellPanel(parentMenu)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[2].clearButtons();
	var x=60;
	var i;
	for(i=0;i<gameState.toSell.length;i++){
		var item=gameState.toSell[i];

		var newButton=new Button(item.amount+" "+item.name,x,350,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateToSellItemButtonHandler(parentMenu, newButton, item);
		parentMenu.panels[2].addButton(newButton);//add to inventory panel
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}

	parentMenu.panels[2].draw(context);
}

function populateShopInventoryPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[1].clearButtons();
	parentMenu.panels[1].clearLabels();
		var lblShopMoney=new Label(550,140,100,50,shopInventory.money,"Epistolar",15,"black");
	var x=560;
	var i;
	
	//TODO load shop inventory based on settlement name and type
	for(i=0;i<shopInventory.cargoList.length;i++){
		var item=shopInventory.cargoList[i];

		var newButton=new Button(item.amount+" "+item.name,x,60,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateBuyableItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[1].addButton(newButton);//add to inventory panel
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	parentMenu.panels[1].addLabel(lblShopMoney);
	parentMenu.panels[1].draw(context);
}
function populateToBuyPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[3].clearButtons();
	var x=560;
	var i;
	
	//TODO load shop inventory based on settlement name and type
	for(i=0;i<shopInventory.toSell.length;i++){
		var item=shopInventory.toSell[i];

		var newButton=new Button(item.amount+" "+item.name,x,350,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateToBuyItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[3].addButton(newButton);//add to inventory panel
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
	var priceTable=fetcher.findPriceTable(settlement.name);
	//alert(priceTable[0].cargoName);
	shopInventory.setPriceTable(priceTable);//TODO in future, specify shop type as well
	gameState.setPrices(priceTable);




	if(contains(settlement.pois,"shipbuilder"))
	{
		addShipbuilderButton(marketScreen,settlement);
	}

	var btnTrade=new Button("TRADE",400,550,100,50,"TRADE","Epistolar",15,"black", buttonBG);
		btnTrade.onClick=function(){
			tradeCargo(shopInventory, shopInventory.toSell, gameState.toSell);
			//marketScreen.panels[0].labels[0].text=gameState.money;
			//marketScreen.panels[1].labels[0].text=shopInventory.money;
			alert(gameState.money);
			alert(shopInventory.money);
			populatePlayerInventoryPanel(marketScreen);
			populateShopInventoryPanel(marketScreen, shopInventory);
			populateToSellPanel(marketScreen);
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

		populatePlayerInventoryPanel(marketScreen);
		populateShopInventoryPanel(marketScreen, shopInventory);
		populateToSellPanel(marketScreen);
		populateToBuyPanel(marketScreen, shopInventory);


	marketScreen.drawScreen(defaultbg);
}


