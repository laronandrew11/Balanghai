var shopInventory=function(money, cargoList){
	this.money=money;
	this.cargoList=cargoList;

	this.createAddMoney=function(change){
		var obj=this;
		return function(change)
		{
			obj.money+=change;
		}
	}
	this.addMoney=createAddMoney();
	this.createSubtractMoney=function(change){
		var obj=this;
		return function(change)
		{
			obj.money-=change;
		}
	}
	this.subtractMoney=createAddMoney();

	this.createAddCargo=function(cargoID, amount){
		var obj=this;
		return function(cargoID, amount)
		{
			//TODO find cargoID and add amount
			//TODO record amount of units that player sold, for price adjustment purposes
		}
	}
	this.addCargo=createAddCargo();
	this.createSubtractCargo=function(cargoID, amount){
		var obj=this;
		return function(cargoID, amount)
		{
			//TODO find cargoID and add amount
			//TODO record amount of units that player sold, for price adjustment purposes
		}
	}
	this.subtractCargo=creatSubtractCargo();
}