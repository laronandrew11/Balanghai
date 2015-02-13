function buyCargo(shopInventory, cargo)
{
	
		alert(cargo.name);
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
function buyShip(shopInventory,ship){
		gameState.ships.push(ship);
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
