function ShopInventory(settlementName, type, money, cargoList){
	this.settlementName=settlementName;
	this.type=type;
	this.money=money;
	this.cargoList=cargoList;
	this.toBuy=[];
	this.toSell=[];
	this.priceTable;

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

		this.createAddCargo=function(newCargo){
		var obj=this;
		return function(newCargo){
			alert("New cargo name:" +newCargo.name);
			if(!obj.hasCargo(newCargo.name))
			{
				obj.cargoList.push(newCargo);
				alert("New cargo type pushed");
			}
			else{
				obj.getCargo(newCargo.name).amount+=newCargo.amount;
				alert(obj.getCargo(newCargo.name).amount);
			} 
		}
	}
	this.addCargo=this.createAddCargo();
	this.createSubtractCargo=function(name, amount)
	{
		var obj=this;
		return function(name, amount){
			var cargo=obj.getCargo(name);
			if(cargo.amount<amount)
				cargo.amount-=amount;
			else if (cargo.amount==amount)
				obj.removeCargo(name);
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
	this.createSetPrices=function(priceTable){
		var obj=this;
		return function(priceTable){
			var i;
			for (i=0;i<obj.cargoList.length;i++)
				obj.cargoList[i].price=obj.getPrice(obj.cargoList[i].name, priceTable);
		}
	}
	this.setPrices=this.createSetPrices();
	this.getPrice=function(cargoName,priceTable){
		var i;
		for(i=0;i<priceTable.length;i++)
		{
			if(priceTable[i].cargoName==cargoName)
				return priceTable[i].buyPrice;//price which the player will buy at, and the shop will sell at
		}
		return null;
	}
	this.CreateSetPriceTable=function(priceTable)
	{
		var obj=this;
		return function(priceTable){
			obj.priceTable=priceTable;
			obj.setPrices(priceTable);
		}
	}
	this.setPriceTable=this.CreateSetPriceTable();
}