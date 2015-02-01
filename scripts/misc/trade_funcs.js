function buyCargo(shopInventory, cargo)
{
	gameState.money-=(cargo.amount*cargo.price);
	shopInventory.addMoney(cargo.amount*cargo.price);
	gameState.addCargo(cargo.name, cargo.amount);
	shopInventory.removeToSellItem(cargo.name);
	gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
}
function sellCargo(shopInventory, cargo)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
	gameState.money+=(cargo.amount*cargo.price);
	shopInventory.money-=(cargo.amount*cargo.price);
	gameState.removeToSellItem(cargo.name);
	shopInventory.addCargo(cargo.name, cargo.amount);
	gameState.addCapacity(cargo.amount*cargo.UnitWeight);
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
function buyShip(){
	
}
function sellShip(){

}
function repairShip(){
	
}
