function buyCargo(shopInventory, cargo, itemType)
{
	
	if(itemType=='cargo')
	{
		gameState.addCargo(cargo);
		gameState.subtractCapacity(cargo.amount*cargo.unitWeight);
		gameState.money-=(cargo.amount*cargo.price);
		shopInventory.addMoney(cargo.amount*cargo.price);
		shopInventory.removeToSellItem(cargo.name);
	}
	else if(itemType=='ship')
	{
		gameState.ships.push(cargo);
		gameState.money-=cargo.price;
		shopInventory.addMoney(cargo.price);
		shopInventory.removeToSellItem(cargo.properName);
	}
		
	

	
}
function sellCargo(shopInventory, cargo, itemType)//sell a single 'name' of cargo. Note that the passed object needs a "price" field
{
	alert(itemType);
	shopInventory.addCargo(cargo);
	if(itemType=='cargo')
	{

		
		gameState.addCapacity(cargo.amount*cargo.UnitWeight);
		gameState.money+=(cargo.amount*cargo.price);
		shopInventory.money-=(cargo.amount*cargo.price);
		gameState.removeToSellItem(cargo.name, itemType);
	}
	else if(itemType=='ship')
	{
		//gameState.removeShip(cargo.properName);
		gameState.money+=cargo.price;
		shopInventory.money-=cargo.price;
		gameState.removeToSellItem(cargo.properName, itemType);
	}
	
}

function tradeCargo(shopInventory,toBuy, toSell, itemType){
	var i;
	for(i=0;i<toBuy.length;i++)
		buyCargo(shopInventory, toBuy[i], itemType);
	for(i=0;i<toSell.length;i++)
	{
		sellCargo(shopInventory, toSell[i], itemType);
	}

}
function buyShip(){
	
}
function sellShip(){

}
function repairShip(){
	
}
