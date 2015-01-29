function CreateBuyableItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var shopInventory;
			var amountToBuy=prompt("Buy how many units?");
			//parentMenu.panels[0].removeButtonByName(lbutton.name);
			//TODO update the amount displayed on existing button
			if(amountToBuy>item.amount||amountToBuy<=0)//TODO include strings/chars as invalid input
				alert("Invalid amount");
			else {
				if(amountToBuy<item.amount)
				{
					item.amount=item.amount-amountToBuy;
					lbutton.text=lbutton.name=item.amount+" "+item.name;//TODO fix this

				}
				else if(amountToBuy==item.amount)
				{
					gameState.removeCargo(item);
					parentMenu.panels[1].removeButtonByName(lbutton.name);
				}
				//TODO create a new item, add it to the shop's toSell
				var itemToBuy=new Cargo(item.name,item.type,item.unitWeight, amountToBuy);
				shopInventory.toSell.push(itemToBuy);
				var buyItemButton=new Button(itemToBuy.name,50,350,70,70,amountToBuy+" "+itemToBuy.name,"Epistolar",15,"black", buttonBG);//TODO update button position
				buyItemButton.onClick=CreateToBuyItemButtonHandler(parentMenu, buyItemButton, itemToBuy);
				parentMenu.panels[4].addButton(buyItemButton);
				parentMenu.drawScreen(parentMenu.bgImage);
			}

			//var pnlDetails=createCargoDetailsPanel(item);
			//parentMenu.addPanel(pnlDetails);
			//parentMenu.drawScreen(parentMenu.bgImage);
		}
}

function CreateSellableItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var amountToSell=prompt("Sell how many units?");
			//parentMenu.panels[0].removeButtonByName(lbutton.name);
			//TODO update the amount displayed on existing button
			if(amountToSell>item.amount||amountToSell<=0)//TODO include strings/chars as invalid input
				alert("Invalid amount");
			else {
				if(amountToSell<item.amount)
				{
					item.amount=item.amount-amountToSell;
					lbutton.text=lbutton.name=item.amount+" "+item.name;//TODO fix this

				}
				else if(amountToSell==item.amount)
				{
					gameState.removeCargo(item);
					parentMenu.panels[0].removeButtonByName(lbutton.name);
				}
				//TODO create a new item, add it to the shop's toSell
				var itemToSell=new Cargo(item.name,item.type,item.unitWeight, amountToSell);
				gameState.toSell.push(itemToSell);
				var sellItemButton=new Button(itemToSell.name,50,350,70,70,amountToSell+" "+itemToSell.name,"Epistolar",15,"black", buttonBG);//TODO update button position
				sellItemButton.onClick=CreateToSellItemButtonHandler(parentMenu, sellItemButton, itemToSell);
				parentMenu.panels[2].addButton(sellItemButton);
				parentMenu.drawScreen(parentMenu.bgImage);
			}

			//var pnlDetails=createCargoDetailsPanel(item);
			//parentMenu.addPanel(pnlDetails);
			//parentMenu.drawScreen(parentMenu.bgImage);
		}
}
function CreateToSellItemButtonHandler(parentMenu, button, item)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var amountToRemove=prompt("Remove how many units?");
			//parentMenu.panels[0].removeButtonByName(lbutton.name);
			//TODO update the amount displayed on existing button
			if(amountToRemove>item.amount||amountToRemove<=0)//TODO include strings/chars as invalid input
				alert("Invalid amount");
			else {
				if(amountToRemove<item.amount)
				{
					item.amount=item.amount-amountToRemove;
					lbutton.text=lbutton.name=item.amount+" "+item.name;//TODO fix this

				}
				else if(amountToRemove==item.amount)
				{
					parentMenu.panels[2].removeButtonByName(lbutton.name);
					gameState.removeItemToSell(item);
				}



				//var sellItemButton=new Button(item.name,50,350,70,70,amountToRemove+" "+item.name,"Epistolar",15,"black", buttonBG);//TODO update button position
				//parentMenu.panels[2].addButton(sellItemButton);//TODO only do this if button does not already exist
				parentMenu.drawScreen(parentMenu.bgImage);
			}

			//var pnlDetails=createCargoDetailsPanel(item);
			//parentMenu.addPanel(pnlDetails);
			//parentMenu.drawScreen(parentMenu.bgImage);
		}
}

function populatePlayerInventoryPanel(parentMenu)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[0].clearButtons();
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
	parentMenu.panels[0].draw(context);
}

function populateShopInventoryPanel(parentMenu, settlement)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[1].clearButtons();
	var x=560;
	var i;
	var shopInventory=settlement.getShopInventory('market');
	//TODO load shop inventory based on settlement name and type
	for(i=0;i<shopInventory.cargoList.length;i++){
		var item=shopInventory.cargoList[i];

		var newButton=new Button(item.amount+" "+item.name,x,60,70,70,item.amount+" "+item.name,"Epistolar",15,"black", buttonBG);

		newButton.onClick=CreateBuyableItemButtonHandler(parentMenu, newButton, item);
		parentMenu.panels[1].addButton(newButton);//add to inventory panel
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	parentMenu.panels[0].draw(context);
}







function addMarketMenu(settlement){
	var marketScreen=new staticScreen();
	addDefaultButtons(marketScreen);


	if(contains(settlement.pois,"shipbuilder"))
	{
		addShipbuilderButton(marketScreen,settlement);
	}

	var btnTrade=new Button("TRADE",400,550,100,50,"TRADE","Epistolar",15,"black", buttonBG);
		btnTrade.onClick=function(){
			alert("Trade function has not been coded yet");
		}



	var pnlPlayerInventory=new Panel(50,50,450,250,startbg);
	var pnlShopInventory=new Panel(500,50,450,250,startbg);
	var pnlToSell=new Panel(50,300,450,250,startbg);
	var pnlToBuy=new Panel(500,300,450,250,startbg);

	pnlPlayerInventory.visible=true;
	pnlShopInventory.visible=true;
	pnlToSell.visible=true;
	pnlToBuy.visible=true;

	//TODO populate inventories


	marketScreen.addPanel(pnlPlayerInventory);
	marketScreen.addPanel(pnlShopInventory);
	marketScreen.addPanel(pnlToSell);
	marketScreen.addPanel(pnlToBuy);
	marketScreen.addButton(btnTrade);

		populatePlayerInventoryPanel(marketScreen);
		populateShopInventoryPanel(marketScreen, settlement);


	marketScreen.drawScreen(startbg);
}
