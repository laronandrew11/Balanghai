function buyCargo(shopInventory, cargoID, unitWeight,price, amount)
{
	gameState.subtractMoney(amount*price);
	shopInventory.addMoney(amount*price);
	gameState.addCargo(cargoID, amount);
	shopInventory.subtractCargo(cargoID, amount);
	gameState.subtractCapacity(amount*unitWeight);
}
function sellCargo(shopInventory, cargoID, unitWeight,price, amount)
{
	gameState.addMoney(amount*price);
	shopInventory.subtractMoney(amount*price);
	gameState.subtractCargo(cargoID, amount);
	shopInventory.addCargo(cargoID, amount);
	gameState.addCapacity(amount*unitWeight);
}
function buyShip(){
	
}
function sellShip(){

}
function repairShip(){
	
}
