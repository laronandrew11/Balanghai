function ShopInventory(settlementName, type, money, cargoList){
	this.settlementName=settlementName;
	this.type=type;
	this.money=money;
	this.cargoList=cargoList;
	this.toBuy=[];
	this.toSell=[];

	this.createAddMoney=function(change){
		var obj=this;
		return function(change)
		{
			obj.money+=change;
		}
	}
	this.addMoney=this.createAddMoney();
	this.createSubtractMoney=function(change){
		var obj=this;
		return function(change)
		{
			obj.money-=change;
		}
	}
	this.subtractMoney=this.createSubtractMoney();

	this.createAddCargo=function(cargoID, amount){
		var obj=this;
		return function(cargoID, amount)
		{
			//TODO find cargoID and add amount
			//TODO record amount of units that player sold, for price adjustment purposes
		}
	}
	this.addCargo=this.createAddCargo();
	this.createSubtractCargo=function(cargoID, amount){
		var obj=this;
		return function(cargoID, amount)
		{
			//TODO find cargoID and add amount
			//TODO record amount of units that player sold, for price adjustment purposes
		}
	}
	this.subtractCargo=this.createSubtractCargo();

	this.removeCargo=function(name){
		var i;
		for(i=0;i<this.cargoList.length;i++)
		{
			if(this.cargoList[i].name==name)
				this.cargoList.splice(i,1);
		}
	}
	this.removeToSellItem=function(name){
		var i;
		for(i=0;i<this.toSell.length;i++)
		{
			if(this.toSell[i].name==name)
				this.toSell.splice(i,1);
		}
	}
	this.hasToSellItem=function(name){
		var i;
		for(i=0;i<this.toSell.length;i++)
		{
			if(this.toSell[i].name==name)
				return true;
		}
		return false;
	}
	this.hasCargo=function(name){
		var i;
		for(i=0;i<this.cargoList.length;i++)
		{
			if(this.cargoList[i].name==name)
				return true;
		}
		return false;
	}
	this.getCargo=function(name){
		var i;
		for(i=0;i<this.cargoList.length;i++)
		{
			if(this.cargoList[i].name==name)
				return this.cargoList[i];
		}
		return null;
	}
	this.getToSellItem=function(name){
		var i;
		for(i=0;i<this.toSell.length;i++)
		{
			if(this.toSell[i].name==name)
				return this.toSell[i];
		}
		return null;
	}
}