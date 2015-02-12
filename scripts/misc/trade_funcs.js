function buyCargo(shopInventory, cargo, itemType)
{
	gameState.money-=(cargo.amount*cargo.price);
	shopInventory.addMoney(cargo.amount*cargo.price);
	if(itemType=='cargo')
	{
		gameState.addCargo(cargo);
		gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
	}
		
	shopInventory.removeToSellItem(cargo.name);

	
}
function sellCargo(shopInventory, cargo)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
	gameState.money+=(cargo.amount*cargo.price);
	shopInventory.money-=(cargo.amount*cargo.price);
	gameState.removeToSellItem(cargo.name);
	shopInventory.addCargo(cargo);
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
