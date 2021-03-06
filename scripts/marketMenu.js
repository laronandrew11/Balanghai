var playerPageNo=0;
var shopPageNo=0;

function CreateBuyableItemButtonHandler(parentMenu, button, item, shopInventory)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			if(shopInventory.type=='market')
			{
	
				var dlgBuy=new Dialog(parentMenu,"Buy how many units?","Done",function(){
						
						var amountToBuy=parseInt(dlgBuy.userInput);

						if(amountToBuy==NaN||amountToBuy>item.amount||amountToBuy<=0)//TODO include strings/chars as invalid input
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
						
							updateTradeButton(parentMenu,shopInventory);
							populateShopInventoryPanel(parentMenu, shopInventory,"Other");
							populateToBuyPanel(parentMenu, shopInventory);
							parentMenu.drawScreen(tradeMenuBG);
							//parentMenu.drawScreen(context);
						}
					
				});
				dlgBuy.setVisible(true);
			}
			else if(shopInventory.type=='shipbuilder')
			{
				shopInventory.removeCargo(item.properName);
				var itemToBuy=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				shopInventory.toSell.push(itemToBuy);
				updateTradeButton(parentMenu,shopInventory);
			populateShopInventoryPanel(parentMenu, shopInventory,"Other");
			populateToBuyPanel(parentMenu, shopInventory);
			parentMenu.drawScreen(tradeMenuBG);

			}
			//parentMenu.buttons[9].status="enabled";
			
			
		}
}

function CreateToBuyItemButtonHandler(parentMenu, button, item, shopInventory){
	var lbutton=button;
	return function(){
			if(shopInventory.type=='market')
			{
				//var amountToRemove=parseInt(prompt("Remove how many units?"));
				var amountToRemove;
				var dlgRemove=new Dialog(parentMenu,"Remove how many units?","Done",function(){
					var amountToRemove=parseInt(dlgRemove.userInput);
					if(amountToRemove==NaN||amountToRemove>item.amount||amountToRemove<=0)//TODO include strings/chars as invalid input
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
					updateTradeButton(parentMenu,shopInventory);
			populateShopInventoryPanel(parentMenu, shopInventory,"Other");
				populateToBuyPanel(parentMenu, shopInventory);
					//parentMenu.drawScreen(context);
				}
				})
				dlgRemove.setVisible(true);

				
			}
			else if(shopInventory.type=='shipbuilder')
			{
				shopInventory.removeToSellItem(item.properName);
				var itemToRemove=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				shopInventory.cargoList.push(itemToRemove);
				updateTradeButton(parentMenu,shopInventory);
			populateShopInventoryPanel(parentMenu, shopInventory,"Other");
				populateToBuyPanel(parentMenu, shopInventory);
			}
			
		}
}
function CreateSellableItemButtonHandler(parentMenu, button, item, shopInventory)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){

		if(shopInventory.type=='market'){
			//var amountToSell=parseInt(prompt("Sell how many units?"));
			var dlgSell=new Dialog(parentMenu,"Sell how many units?","Done",function(){
					var amountToSell=parseInt(dlgSell.userInput);
					if(amountToSell==NaN||amountToSell>item.amount||amountToSell<=0)//TODO include strings/chars as invalid input
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
				updateTradeButton(parentMenu,shopInventory);
					populatePlayerInventoryPanel(parentMenu, shopInventory,"Other");
				populateToSellPanel(parentMenu, shopInventory);
				//parentMenu.buttons[9].status="enabled";
			parentMenu.drawScreen(tradeMenuBG);
				//parentMenu.drawScreen(context);
			}
				})
			dlgSell.setVisible(true);
			
		}
		
			else if(shopInventory.type=='shipbuilder')
			{
				gameState.removeShip(item.properName);
				var itemToSell=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				gameState.toSell.push(itemToSell);
				updateTradeButton(parentMenu,shopInventory);
			
					populatePlayerInventoryPanel(parentMenu, shopInventory,"Other");
			
				populateToSellPanel(parentMenu, shopInventory);
				//parentMenu.buttons[9].status="enabled";
			
			//parentMenu.drawScreen(tradeMenuBG);
			}
				
		}
}
function CreateToSellItemButtonHandler(parentMenu, button, item, shopInventory)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
		if(shopInventory.type=='market')
		{
			//var amountToRemove=parseInt(prompt("Remove how many units?"));
			var dlgSellRemove=new Dialog(parentMenu,"Remove how many units?","Done",function(){
					var amountToRemove=parseInt(dlgSellRemove.userInput);
					if(amountToRemove==NaN||amountToRemove>item.amount||amountToRemove<=0)//TODO include strings/chars as invalid input
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
					updateTradeButton(parentMenu, shopInventory);
				populatePlayerInventoryPanel(parentMenu, shopInventory,"Other");
				populateToSellPanel(parentMenu, shopInventory);
				//parentMenu.drawScreen(context);
			}
				})
			dlgSellRemove.setVisible(true);
			
		}
			else if(shopInventory.type=='shipbuilder')
			{
				gameState.removeToSellItem(item.properName, 'ship');
				var itemToReturn=new Ship(item.properName,item.name,item.speed, item.health,item.cargoCapacity, item.price);
				gameState.ships.push(itemToReturn);
					updateTradeButton(parentMenu, shopInventory);
				populatePlayerInventoryPanel(parentMenu, shopInventory,"Other");
				populateToSellPanel(parentMenu, shopInventory);
			}
			

		}
}


function populatePlayerCategoryButtons(parentMenu, shopInventory){
	var i;
	var x=92;
	for(i=0;i<cargoCategories.length;i++)
	{

		var newButton=new Button(cargoCategories[i],x,127,56,56,"","Epistolar",15,"black", cargoCategoryButtons[i]);
		newButton.disabledImage=null;
		newButton.onClick=CreatePlayerCargoCategoryButtonHandler(parentMenu,shopInventory, newButton);
		parentMenu.panels[0].addButton(newButton);
		x+=47;
	}
}
function CreatePlayerCargoCategoryButtonHandler(parentMenu, shopInventory, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			populatePlayerInventoryPanel(parentMenu, shopInventory,lbutton.name);
		}
}
function populateShopCategoryButtons(parentMenu, shopInventory){
	var i;
	var x=522;
	for(i=0;i<cargoCategories.length;i++)
	{

		var newButton=new Button(cargoCategories[i],x,127,56,56,"","Epistolar",15,"black", cargoCategoryButtons[i]);
		newButton.disabledImage=null;
		newButton.onClick=CreateShopCargoCategoryButtonHandler(parentMenu, shopInventory,newButton);
		parentMenu.panels[1].addButton(newButton);
		x+=47;
	}
}
function CreateShopCargoCategoryButtonHandler(parentMenu, shopInventory,button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			populateShopInventoryPanel(parentMenu, shopInventory,lbutton.name);
		}
}


function populatePlayerInventoryPanel(parentMenu, shopInventory, cargoType)//display all of player's cargo in one corner so he can sell it. Note that cargoType is unneeded by shipbuilder
{
	//alert("Populating player!");
	parentMenu.panels[0].clearButtons();
	parentMenu.panels[0].clearLabels();
	var poiType=shopInventory.type;

	if(poiType=='market'){
		populatePlayerCategoryButtons(parentMenu, shopInventory);
		var tabIndex=cargoCategories.indexOf(cargoType);
		parentMenu.panels[0].panelButtons[tabIndex].status="disabled";
	}
	addPlayerScrollButtons(parentMenu, parentMenu.panels[0], shopInventory, cargoType);
	var lblPlayerMoney=new Label(260,360,100,50,"Your money: "+gameState.money,"Bebas",18,"black");
	var x=95;
	var y=185;
	var i;
	var columns=4;
	var columnIndex=0;
	var rows=2;
	var pageIndex=0;
	var rowIndex=0;


	if(poiType=="market")
		var cargoList=gameState.cargo;
	else if(poiType=='shipbuilder')
		var cargoList=gameState.ships;

	for(i=0;i<cargoList.length;i++){
		var item=cargoList[i];

		if(columnIndex==columns)
		{
			y+=85;
			x=95;
			columnIndex=0;
			rowIndex++;
		}
		if(rowIndex==rows){//move to next page
			rowIndex=0;
			columnIndex=0;
			y=180;
			pageIndex++;

		}
		if(rowIndex<=rows)
		{
			if(poiType=='market'){

				if(cargoType=='Other' || item.type==cargoType){

					if(pageIndex==playerPageNo)
					{
						var fetcher=new CargoRecordInfoFetcher();
					

						var newButton=new Button(item.amount+" "+item.name,x,y,80,80,"","Bebas",15,"black", fetcher.getImageSrc(item.name));
						var newLabel=new Label(x,y+50,80,30,item.amount+" "+item.name,"Bebas",15,"black");
						newLabel.bgImage=scrollSmallImg;
						var lblTag=new Label(x,y,47,31,"","Bebas",15,"black");
						var catIndex=cargoCategories.indexOf(item.type);
						lblTag.bgImage=cargoCategoryLabels[catIndex];
						parentMenu.panels[0].addLabel(lblTag);
						var priceLabel=new Label(x+47,y,33,31,item.price,"Bebas",15,"black");
						priceLabel.bgImage=coinImg;
						var weightLabel=new Label(x+47,y+24,33,31,item.unitWeight,"Bebas",15,"black");
						weightLabel.bgImage=weightImg;
						newButton.onClick=CreateSellableItemButtonHandler(parentMenu, newButton, item, shopInventory);
						parentMenu.panels[0].addButton(newButton);
						parentMenu.panels[0].addLabel(newLabel);
						parentMenu.panels[0].addLabel(priceLabel);
						parentMenu.panels[0].addLabel(weightLabel);
						x+=80;
					}
					columnIndex++;
				}
			}
				
			else if(poiType=='shipbuilder'){
				if(pageIndex==playerPageNo)
				{
					var fetcher=new ShipInfoFetcher();
					var newButton=new Button(item.properName,x,y,80,80,"","Bebas",15,"black", fetcher.getIcon(item.name));
					var newLabel=new Label(x,y+50,80,30,item.properName+" ("+item.name+")","Bebas",15,"black");
					newLabel.bgImage=scrollSmallImg;
					var priceLabel=new Label(x+47,y,33,31,item.price,"Bebas",15,"black");
					priceLabel.bgImage=coinImg;
					newButton.onClick=CreateSellableItemButtonHandler(parentMenu, newButton, item, shopInventory);
					parentMenu.panels[0].addButton(newButton);
					parentMenu.panels[0].addLabel(newLabel);
					parentMenu.panels[0].addLabel(priceLabel);
					x+=80;
				}
				columnIndex++;
			}
		}

		
		//add to inventory panel

		
		

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
		parentMenu.panels[0].addLabel(lblPlayerMoney);
	parentMenu.drawScreen(tradeMenuBG);
}

function populateToSellPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	//alert("Populating sell!");
	parentMenu.panels[2].clearButtons();
	parentMenu.panels[2].clearLabels();
	//updateTradeButton(parentMenu);
	var poiType=shopInventory.type;
	var x=95;
	var i;
	var total=0;
	var totalWeight=0;
	var itemPrice;
	var itemWeight;
	

	for(i=0;i<gameState.toSell.length;i++){
		var item=gameState.toSell[i];
		if(poiType=='market'){
			var fetcher=new CargoRecordInfoFetcher();
		

			var newButton=new Button(item.amount+" "+item.name,x,410,80,80,"","Bebas",15,"black", fetcher.getImageSrc(item.name));
			var newLabel=new Label(x,460,80,30,item.amount+" "+item.name,"Bebas",15,"black");
			newLabel.bgImage=scrollSmallImg;
			var lblTag=new Label(x,410,47,31,"","Bebas",15,"black");
			var catIndex=cargoCategories.indexOf(item.type);
			lblTag.bgImage=cargoCategoryLabels[catIndex];
			parentMenu.panels[2].addLabel(lblTag);
			itemPrice=item.price*item.amount;
			itemWeight=item.unitWeight*item.amount;
			totalWeight+=itemWeight;
			var priceLabel=new Label(x+47,410,33,31,itemPrice,"Bebas",15,"black");
			var weightLabel=new Label(x+47,434,33,31,itemWeight,"Bebas",15,"black");
				weightLabel.bgImage=weightImg;

			priceLabel.bgImage=coinImg;
			parentMenu.panels[2].addLabel(weightLabel);

				var totalWeightLabel=new Label(430,455,33,31,totalWeight,"Bebas",15,"black");
	totalWeightLabel.bgImage=totalWeightImg;
	parentMenu.panels[2].addLabel(totalWeightLabel);
		}
			
		else if(poiType=='shipbuilder'){
			var fetcher=new ShipInfoFetcher();
			var newButton=new Button(item.properName,x,410,80,80,"","Bebas",15,"black", fetcher.getIcon(item.name));
			var newLabel=new Label(x,460,80,30,item.properName+" ("+item.name+")","Bebas",15,"black");
			newLabel.bgImage=scrollSmallImg;
			itemPrice=item.price;
			var priceLabel=new Label(x+47,410,33,31,item.price,"Bebas",15,"black");
			priceLabel.bgImage=coinImg;

		}
		total+=itemPrice;
		newButton.onClick=CreateToSellItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[2].addButton(newButton);//add to inventory panel
		parentMenu.panels[2].addLabel(newLabel);
		parentMenu.panels[2].addLabel(priceLabel);
		
		x+=82;

			//parentMenu.drawScreen(parentMenu.bgImage);

	}
	var totalLabel=new Label(430,420,33,31,total,"Bebas",15,"black");
	totalLabel.bgImage=coinImg;

	parentMenu.panels[2].addLabel(totalLabel);
	
	parentMenu.drawScreen(tradeMenuBG);
	//parentMenu.panels[2].draw(context);
}

function populateShopInventoryPanel(parentMenu, shopInventory, cargoType)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[1].clearButtons();
	parentMenu.panels[1].clearLabels();
	
	if(shopInventory.type=='market')
	{
		populateShopCategoryButtons(parentMenu, shopInventory);
		var tabIndex=cargoCategories.indexOf(cargoType);
		parentMenu.panels[1].panelButtons[tabIndex].status="disabled";
	}
	addShopScrollButtons(parentMenu, parentMenu.panels[1],shopInventory, cargoType);
	var lblShopMoney=new Label(550,360,100,50,"Shop's money: "+shopInventory.money,"Bebas",18,"black");
	var x=530;
	var y=185;
	var i;
	var columns=4;
	var columnIndex=0;
	var rows=2;
	var pageIndex=0;
	var rowIndex=0;

	for(i=0;i<shopInventory.cargoList.length;i++){
		var item=shopInventory.cargoList[i];
		
		if(columnIndex==columns)
		{
			y+=85;
			x=530;
			columnIndex=0;
			rowIndex++;
		}
		if(rowIndex==rows){//move to next page
			rowIndex=0;
			columnIndex=0;
			y=180;
			pageIndex++;

		}
		if(rowIndex<=rows)
		{
			if(shopInventory.type=='market'){
				if(cargoType=='Other' || item.type==cargoType){
					if(pageIndex==shopPageNo)
					{
						var fetcher=new CargoRecordInfoFetcher();
						
						var newButton=new Button(item.amount+" "+item.name,x,y,80,80,"","Bebas",15,"black", fetcher.getImageSrc(item.name));
						var newLabel=new Label(x,y+50,80,30,item.amount+" "+item.name,"Bebas",15,"black");
						newLabel.bgImage=scrollSmallImg;
						var lblTag=new Label(x,y,47,31,"","Bebas",15,"black");
						var catIndex=cargoCategories.indexOf(item.type);
						lblTag.bgImage=cargoCategoryLabels[catIndex];
						parentMenu.panels[1].addLabel(lblTag);
						var priceLabel=new Label(x+47,y,33,31,item.price,"Bebas",15,"black");
						priceLabel.bgImage=coinImg;
						var weightLabel=new Label(x+47,y+24,33,31,item.unitWeight,"Bebas",15,"black");
						weightLabel.bgImage=weightImg;
						newButton.onClick=CreateBuyableItemButtonHandler(parentMenu, newButton, item, shopInventory);
						parentMenu.panels[1].addButton(newButton);//add to inventory panel
						parentMenu.panels[1].addLabel(newLabel);
						parentMenu.panels[1].addLabel(priceLabel);
						parentMenu.panels[1].addLabel(weightLabel);
						x+=82;
					}
					columnIndex++;
				}
			}
				
			else if(shopInventory.type=='shipbuilder'){
				if(pageIndex==shopPageNo)
				{
					var fetcher=new ShipInfoFetcher();
					var newButton=new Button(item.properName,x,y,80,80,"","Bebas",15,"black", fetcher.getIcon(item.name));
					var newLabel=new Label(x,y+50,80,30,item.properName+" ("+item.name+")","Bebas",15,"black");
					newLabel.bgImage=scrollSmallImg;
					var priceLabel=new Label(x+47,y,33,31,item.price,"Bebas",15,"black");
					priceLabel.bgImage=coinImg;
					newButton.onClick=CreateBuyableItemButtonHandler(parentMenu, newButton, item, shopInventory);
					parentMenu.panels[1].addButton(newButton);//add to inventory panel
					parentMenu.panels[1].addLabel(newLabel);
					parentMenu.panels[1].addLabel(priceLabel);
					x+=82;
				}
				columnIndex++;
			}
		}
			
		

			//parentMenu.drawScreen(parentMenu.bgImage);

		
	}
	parentMenu.panels[1].addLabel(lblShopMoney);
	parentMenu.drawScreen(tradeMenuBG);
	//parentMenu.panels[1].draw(context);
}

function populateToBuyPanel(parentMenu, shopInventory)//display all of player's cargo in one corner so he can sell it
{
	parentMenu.panels[3].clearButtons();
	parentMenu.panels[3].clearLabels();
	//updateTradeButton(parentMenu, shopInventory);
	var x=530;
	var i;
	var total=0;
	var totalWeight=0;
	var itemPrice;
	var itemWeight;
	if(shopInventory.toSell.length>0)
		tutorial.check(2);
	//TODO load shop inventory based on settlement name and type
	//console.log(shopInventory.toSell);
	for(i=0;i<shopInventory.toSell.length;i++){
		var item=shopInventory.toSell[i];
		//console.log(item);
		if(shopInventory.type=='market'){
			var fetcher=new CargoRecordInfoFetcher();
		
			var newButton=new Button(item.amount+" "+item.name,x,410,80,80,"","Bebas",15,"black", fetcher.getImageSrc(item.name));
			var newLabel=new Label(x,460,80,30,item.amount+" "+item.name,"Bebas",15,"black");
			newLabel.bgImage=scrollSmallImg;
			var lblTag=new Label(x,410,47,31,"","Bebas",15,"black");
			var catIndex=cargoCategories.indexOf(item.type);
			lblTag.bgImage=cargoCategoryLabels[catIndex];
			parentMenu.panels[3].addLabel(lblTag);
			itemPrice=item.price*item.amount;
			itemWeight=item.unitWeight*item.amount;
			totalWeight+=itemWeight;
			var priceLabel=new Label(x+47,410,33,31,itemPrice,"Bebas",15,"black");
			priceLabel.bgImage=coinImg;

			var weightLabel=new Label(x+47,434,33,31,itemWeight,"Bebas",15,"black");
				weightLabel.bgImage=weightImg;
			parentMenu.panels[3].addLabel(newLabel);
		parentMenu.panels[3].addLabel(priceLabel);
		parentMenu.panels[3].addLabel(weightLabel);

		}
			
		else if(shopInventory.type=='shipbuilder'){
			var fetcher=new ShipInfoFetcher();
			var newButton=new Button(item.properName,x,410,80,80,"","Bebas",15,"black", fetcher.getIcon(item.name));
			var newLabel=new Label(x,460,80,30,item.properName+" ("+item.name+")","Bebas",15,"black");
			newLabel.bgImage=scrollSmallImg;
			itemPrice=item.price;
			var priceLabel=new Label(x+47,410,33,31,item.price,"Bebas",15,"black");
			priceLabel.bgImage=coinImg;
			parentMenu.panels[3].addLabel(newLabel);
		parentMenu.panels[3].addLabel(priceLabel);
		}
		total+=itemPrice;
		newButton.onClick=CreateToBuyItemButtonHandler(parentMenu, newButton, item, shopInventory);
		parentMenu.panels[3].addButton(newButton);//add to inventory panel

		
		
		x+=80;

			//parentMenu.drawScreen(parentMenu.bgImage);
		
	}
	var totalLabel=new Label(870,420,33,31,total,"Bebas",15,"black");
	totalLabel.bgImage=coinImg;
	parentMenu.panels[3].addLabel(totalLabel);
	if(shopInventory.type=="market")
	{
		var totalWeightLabel=new Label(870,455,33,31,totalWeight,"Bebas",15,"black");
		totalWeightLabel.bgImage=totalWeightImg;
		parentMenu.panels[3].addLabel(totalWeightLabel);
	}
	parentMenu.drawScreen(tradeMenuBG);
	//parentMenu.panels[3].draw(context);
}



function addMarketMenu(settlement){
	gameState.currentMenu="market";
	playerPageNo=0;
	shopPageNo=0;
	var marketScreen=new staticScreen();
	addDefaultButtons(marketScreen);
	var origShopInventory=settlement.getShopInventory('market');
	var fetcher=new PriceTableInfoFetcher();
	var priceTable=fetcher.findPriceTable(settlement.name, 'market');
	//alert(priceTable[0].cargoName);
	origShopInventory.setPriceTable(priceTable);//TODO in future, specify shop type as well
	gameState.itemType='cargo';
	gameState.setPriceTable(priceTable);




	if(contains(settlement.pois,"shipbuilder"))
	{
		addShipbuilderButton(marketScreen,settlement);
	}

	var btnTrade=new Button("TRADE",400,350,162,65,"","Bebas",15,"black", tradeButtonBG);
	btnTrade.status="disabled";
		btnTrade.onClick=function(){
			//alert(origShopInventory.id);
			//alert(origShopInventory.toSell.length);
			tradeCargo(origShopInventory, origShopInventory.toSell, gameState.toSell);
			marketScreen.labels[2].text=gameState.money;
			marketScreen.labels[4].text=gameState.getUsedCapacity()+"/"+gameState.getMaxCapacity();
			populatePlayerInventoryPanel(marketScreen,origShopInventory,'Other');
			populateShopInventoryPanel(marketScreen, origShopInventory,'Other');
			populateToSellPanel(marketScreen,origShopInventory);
			populateToBuyPanel(marketScreen, origShopInventory);
			marketScreen.buttons[9].status="disabled";
			tutorial.check(3);
			//origShopInventory.toSell.push(new Cargo("XXXX","food",1,2,2));
			
		};

	var lblBalance=new Label(550,360,100,50,"Shop's money: "+origShopInventory.money,"Bebas",18,"black");

	var pnlPlayerInventory=new Panel(50,50,450,300,null);
	var pnlShopInventory=new Panel(500,50,450,300,null);
	var pnlToSell=new Panel(50,300,450,200,null);
	var pnlToBuy=new Panel(500,300,450,200,null);

	pnlPlayerInventory.visible=true;
	pnlShopInventory.visible=true;
	pnlToSell.visible=true;
	pnlToBuy.visible=true;


	
	
	
	

	marketScreen.addPanel(pnlPlayerInventory);
	marketScreen.addPanel(pnlShopInventory);
	marketScreen.addPanel(pnlToSell);
	marketScreen.addPanel(pnlToBuy);
	marketScreen.addButton(btnTrade);

	

		populatePlayerInventoryPanel(marketScreen, origShopInventory,'Other');
		populateShopInventoryPanel(marketScreen, origShopInventory, 'Other');
		populateToSellPanel(marketScreen, origShopInventory);
		populateToBuyPanel(marketScreen, origShopInventory);


	marketScreen.drawScreen(tradeMenuBG);
}

function addShopScrollButtons(parentMenu, parentPanel,shopInventory, cargoType)
{
	var upButton=new Button("UP",860,177,50,40,"","Epistolar",15,"black", upArrowImg);
	upButton.onClick=createShopScrollButtonHandler(parentMenu, upButton,shopInventory, cargoType,false);
	var downButton=new Button("DOWN",858,301,50,40,"","Epistolar",15,"black", downArrowImg);
	downButton.onClick=createShopScrollButtonHandler(parentMenu, downButton, shopInventory, cargoType,true);
	parentPanel.addButton(upButton);
	parentPanel.addButton(downButton);

}
function createShopScrollButtonHandler(parentMenu, button,shopInventory, cargoType,down)
{
	var lbutton=button;
	return function(){
		if(down==false&&shopPageNo>0)
		{
			shopPageNo--;
			populateShopInventoryPanel(parentMenu, shopInventory, cargoType);
			parentMenu.drawScreen(tradeMenuBG);
		}
		else if(down==true)//note: this code allows indefinite scrolling down
		{
			shopPageNo++;
			populateShopInventoryPanel(parentMenu, shopInventory, cargoType);
			parentMenu.drawScreen(tradeMenuBG);
		}
	}
}

function addPlayerScrollButtons(parentMenu, parentPanel, shopInventory,cargoType)
{
	var upButton=new Button("UP",428,177,50,40,"","Epistolar",15,"black", upArrowImg);
	upButton.onClick=createPlayerScrollButtonHandler(parentMenu, upButton,shopInventory,cargoType, false);
	var downButton=new Button("DOWN",426,301,50,40,"","Epistolar",15,"black", downArrowImg);
	downButton.onClick=createPlayerScrollButtonHandler(parentMenu, downButton,shopInventory, cargoType, true);
	parentPanel.addButton(upButton);
	parentPanel.addButton(downButton);

}
function createPlayerScrollButtonHandler(parentMenu, button,shopInventory,cargoType,down)
{
	var lbutton=button;
	return function(){
		if(down==false&&playerPageNo>0)
		{
			playerPageNo--;
			populatePlayerInventoryPanel(parentMenu, shopInventory, cargoType);
			parentMenu.drawScreen(tradeMenuBG);
		}
		else if(down==true)//note: this code allows indefinite scrolling down
		{
			playerPageNo++;
			populatePlayerInventoryPanel(parentMenu, shopInventory, cargoType);
			parentMenu.drawScreen(tradeMenuBG);
		}
	}
}

/**not being used right now**/
function updateTradeButton(parentMenu, shopInventory){
	if(shopInventory.toSell.length==0&&gameState.toSell.length==0)
	{
		parentMenu.buttons[9].status="disabled";
	}
	else parentMenu.buttons[9].status="enabled";
	parentMenu.drawScreen(tradeMenuBG);
}
