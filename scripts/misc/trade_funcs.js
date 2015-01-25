function buyCargo(shopInventory, cargo)
{
	gameState.subtractMoney(cargo.amount*cargo.price);
	shopInventory.addMoney(cargo.amount*cargo.price);
	gameState.addCargo(cargo.name, cargo.amount);
	shopInventory.subtractCargo(cargo.name, cargo.amount);
	gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
}
function sellCargo(shopInventory, cargo)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
	gameState.addMoney(cargo.amount*cargo.price);
	shopInventory.subtractMoney(cargo.amount*cargo.price);
	gameState.subtractCargo(cargo.name, cargo.amount);
	shopInventory.addCargo(cargo.name, cargo.amount);
	gameState.addCapacity(cargo.amount*cargo.UnitWeight);
}

function tradeCargo(shopInventory,toBuy, toSell){
	var i;
	for(i=0;i<toBuy.length;i++)
		buyCargo(shopInventory, toBuy[i]);
	for(i=0;i<toSell.length;i++)
	{
		sellCargo(shopInventory, toBuy[i]);
	}

}
function buyShip(){
	
}
function sellShip(){

}
function repairShip(){
	
}
