function buyCargo(shopInventory, cargo)
{
	
		gameState.addCargo(cargo);
		//gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
		gameState.money-=(cargo.amount*cargo.price);
		shopInventory.addMoney(cargo.amount*cargo.price);
		shopInventory.removeToSellItem(cargo.name);
	
}
function sellCargo(shopInventory, cargo)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
		shopInventory.addCargo(cargo);
		//gameState.addCapacity(cargo.amount*cargo.UnitWeight);
		gameState.money+=(cargo.amount*cargo.price);
		shopInventory.money-=(cargo.amount*cargo.price);
		gameState.removeToSellItem(cargo.name, 'cargo');

}

function tradeCargo(shopInventory,toBuy, toSell){
	if(!isWithinWeight(toBuy,toSell))
		alert("Your ships cannot carry all this cargo!")
	else if(canAfford(shopInventory,toBuy,toSell,"cargo")==0)
		alert("You cannot afford this!")
	else if(canAfford(shopInventory,toBuy,toSell,"cargo")==2)
		alert("The market cannot afford this!")
	else if(canAfford(shopInventory,toBuy,toSell,"cargo")==1)
	{
		var i;
		var maxToBuy=toBuy.length;
		var maxToSell=toSell.length;
		for(i=0;i<maxToBuy;i++)
		{
			buyCargo(shopInventory, toBuy[0]);
		}
		for(i=0;i<maxToSell;i++)
		{
			sellCargo(shopInventory, toSell[0]);
		}
	}
	

}
function isWithinWeight(toBuy, toSell)
{
	var i;
	var netWeight=0;
	var maxToBuy=toBuy.length;
	var maxToSell=toSell.length;
	for(i=0;i<maxToBuy;i++)
	{
		netWeight+=toBuy[i].amount*toBuy[i].unitWeight;
	}
	for(i=0;i<maxToSell;i++)
	{
		netWeight-=toSell[i].amount*toSell[i].unitWeight;
	}
	if(gameState.getMaxCapacity()<gameState.getUsedCapacity()+netWeight)
		return false;
	return true;
}
function canAfford(shopInventory,toBuy, toSell,type)
{
	var i;
	var cost=0;
	var maxToBuy=toBuy.length;
	var maxToSell=toSell.length;
	if(type=="cargo")
	{
		for(i=0;i<maxToBuy;i++)
		{
			cost+=toBuy[i].amount*toBuy[i].price;
		}
		for(i=0;i<maxToSell;i++)
		{
			cost-=toSell[i].amount*toSell[i].price;
		}
	}
	else if(type=="ship")
	{
		for(i=0;i<maxToBuy;i++)
		{
			cost+=toBuy[i].price;
		}
		for(i=0;i<maxToSell;i++)
		{
			cost-=toSell[i].price;
		}
	}
	
	if(gameState.money<cost)
		return 0;
	if(shopInventory.money<-cost)
		return 2;
	return 1;
}
function buyShip(shopInventory,ship){
		gameState.addShip(ship);
		gameState.money-=ship.price;
		shopInventory.addMoney(ship.price);
		shopInventory.removeToSellItem(ship.properName);
}
function sellShip(shopInventory,ship){
	if(gameState.ships.length>0&&gameState.getUsedCapacity()<=gameState.getMaxCapacity()-ship.cargoCapacity){
		shopInventory.addCargo(ship);
		gameState.money+=ship.price;
		shopInventory.money-=ship.price;
		gameState.removeToSellItem(ship.properName, 'ship');
	}
}
function tradeShips(shopInventory,toBuy, toSell, itemType){
	var i;
	var maxToBuy=toBuy.length;
	var maxToSell=toSell.length;
	 if(canAfford(shopInventory,toBuy,toSell,"ship")==0)
		alert("You cannot afford this!")
	else if(canAfford(shopInventory,toBuy,toSell,"ship")==2)
		alert("The market cannot afford this!")
	else if(canAfford(shopInventory,toBuy,toSell,"ship")==1)
	{
		for(i=0;i<maxToBuy;i++)
			buyShip(shopInventory, toBuy[0]);
		for(i=0;i<maxToSell;i++)
		{
			sellShip(shopInventory, toSell[0]);
		}
	}

}
function repairShip(){
	
}
