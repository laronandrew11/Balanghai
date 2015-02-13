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
	var i;
	for(i=0;i<toBuy.length;i++)
		buyCargo(shopInventory, toBuy[i]);
	for(i=0;i<toSell.length;i++)
	{
		sellCargo(shopInventory, toSell[i]);
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
	for(i=0;i<toBuy.length;i++)
		buyShip(shopInventory, toBuy[i]);
	for(i=0;i<toSell.length;i++)
	{
		sellShip(shopInventory, toSell[i]);
	}

}
function repairShip(){
	
}
