function GameState(playerName){
	//information needed to save the game; mostly player-related info
	this.playerName = playerName ;
	this.money=1000;
	this.targetMoney=2000;
	this.endDate=new GameDate(1205,12,30);
	this.mapX=494;
	this.mapY=199;
	this.settlement="Sikdagat"; //if applicable
	this.ships=[new Ship("Pag-asa","Bangka",10,100,50)];
	this.cargo=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameDate=new GameDate(1200,1,1);
	this.itemType;
	this.quests=[];
	this.toSell=[];
	this.pendingTranslations=[];
	this.finishedTranslations=[];
	this.shopInventoryMap=new Map();
	this.priceTable;
	this.currentMenu;

	this.getMinSpeed=function(){
		var speeds=[];
		var minSpeed=900;
		var i;
		for(i=0;i<this.ships.length;i++)
		{
			speeds.push(this.ships[i].speed);
		}
		for(i=0;i<speeds.length;i++)
		{
			if(speeds[i]<minSpeed)
				minSpeed=speeds[i];
		}
		return minSpeed;
	}
	
	this.getMaxCapacity=function(){
		var maxCapacity=0;
		for(i=0;i<this.ships.length;i++)
		{
			maxCapacity+=this.ships[i].cargoCapacity;
		}
		return maxCapacity;
	}
	this.getUsedCapacity=function(){
		var usedCapacity=0;
		for(i=0;i<this.cargo.length;i++)
			usedCapacity+=this.cargo[i].amount*this.cargo[i].unitWeight;
		return usedCapacity;
	}
	this.createAddShip=function(newShip){
		var obj=this;
		return function(newShip){
			newShip.price=obj.getPrice(newShip.name, obj.priceTable);
			obj.ships.push(newShip);
		}
	}
	this.addShip=this.createAddShip();
	this.removeShip=function(shipName)
	{
		var i;
		for(i=0;i<this.ships.length;i++)
		{
			if(this.ships[i].properName==shipName)
				this.ships.splice(i,1);
		}
	}
	this.createAddCargo=function(newCargo){
		var obj=this;
		return function(newCargo){
			if(!obj.hasCargo(newCargo.name))
			{
				newCargo.price=obj.getPrice(newCargo.name, obj.priceTable);
				obj.cargo.push(newCargo);
			}
			else
			{
				obj.getCargo(newCargo.name).amount+=newCargo.amount;
			
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
		for(i=0;i<this.cargo.length;i++)
		{
			if(this.cargo[i].name==name)
				this.cargo.splice(i,1);
		}
	}
	this.removeToSellItem=function(name, itemType){
		var i;
		if(itemType=='cargo')
		{
			for(i=0;i<this.toSell.length;i++)
			{
				if(this.toSell[i].name==name)
					this.toSell.splice(i,1);
			}
		}
		else if(itemType=='ship')
		{
			for(i=0;i<this.toSell.length;i++)
			{
				if(this.toSell[i].properName==name)
					this.toSell.splice(i,1);
			}
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
		for(i=0;i<this.cargo.length;i++)
		{
			if(this.cargo[i].name==name)
				return true;
		}
		return false;
	}
	this.getCargo=function(name){
		var i;
		for(i=0;i<this.cargo.length;i++)
		{
			if(this.cargo[i].name==name)
				return this.cargo[i];
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
	this.subtractCapacity=function(weight){
		this.usedCapacity+=weight;
	}
	this.addCapacity=function(weight){
		this.usedCapacity-=weight;
	}
		this.createSetPrices=function(priceTable){
		var obj=this;
		return function(priceTable){

			var i;
			if(this.itemType=="cargo")
			{
				for (i=0;i<obj.cargo.length;i++)
					obj.cargo[i].price=obj.getPrice(obj.cargo[i].name, priceTable);
			}
			else if (this.itemType=="ship")
			{
				for (i=0;i<obj.ships.length;i++)
					obj.ships[i].price=obj.getPrice(obj.ships[i].name, priceTable);
			}
		}
	}
	this.setPrices=this.createSetPrices();
	this.createGetPrice=function(cargoName,priceTable){
		var obj=this;
		return function(cargoName, priceTable)
		{
			var i;
			for(i=0;i<priceTable.length;i++)
			{
				if(priceTable[i].name==cargoName)
				{
					return priceTable[i].sellPrice;//price which the player will buy at, and the shop will sell at
				}
			}
			return null;
		}
	}
	this.getPrice=this.createGetPrice();
	this.CreateSetPriceTable=function(priceTable)//set price table to price table of local shop
	{
		var obj=this;
		return function(priceTable){
			obj.priceTable=priceTable;
			obj.setPrices(priceTable);
		}
	}
	this.setPriceTable=this.CreateSetPriceTable();
}

function save(){
	//save game state data to a file
}