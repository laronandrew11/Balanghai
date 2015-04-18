function buyCargo(shopInventory, cargo)
{
	
		gameState.addCargo(cargo);
		gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
		gameState.money-=(cargo.amount*cargo.price);
		shopInventory.addMoney(cargo.amount*cargo.price);
		shopInventory.removeToSellItem(cargo.name);
	
}
function sellCargo(shopInventory, cargo)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
		shopInventory.addCargo(cargo);
		gameState.addCapacity(cargo.amount*cargo.UnitWeight);
		gameState.money+=(cargo.amount*cargo.price);
		shopInventory.money-=(cargo.amount*cargo.price);
		gameState.removeToSellItem(cargo.name, 'cargo');

}

function tradeCargo(shopInventory,toBuy, toSell){
	if(isWithinWeight(toBuy,toSell))
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
	else alert("Your ships cannot carry all this cargo!")

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
function buyShip(shopInventory,ship){
		gameState.addShip(ship);
		gameState.money-=ship.price;
		shopInventory.addMoney(ship.price);
		shopInventory.removeToSellItem(ship.properName);
}
function sellShip(shopInventory,ship){
		shopInventory.addCargo(ship);
		gameState.money+=ship.price;
		shopInventory.money-=ship.price;
		gameState.removeToSellItem(ship.properName, 'ship');
}
function tradeShips(shopInventory,toBuy, toSell, itemType){
	var i;
	var maxToBuy=toBuy.length;
	var maxToSell=toSell.length;
	for(i=0;i<maxToBuy;i++)
		buyShip(shopInventory, toBuy[0]);
	for(i=0;i<maxToSell;i++)
	{
		sellShip(shopInventory, toSell[0]);
	}

}
function repairShip(){
	
}
