function GameState(playerName){
	//information needed to save the game; mostly player-related info
	this.playerName = playerName ;
	this.money=1000;
	this.mapX=494;
	this.mapY=199;
	this.usedCapacity=30;
	this.settlement="Sikdagat"; //if applicable
	this.ships=[new Ship("Pag-asa","Bangka",10,100,50)];
	this.cargo=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameDate=new GameDate(1200,1,1);

	this.quests=[];
	this.toSell=[];

	
	this.addShip=function(newShip){
		ships.put(newShip);
	}
	this.createAddCargo=function(newCargo){
		var obj=this;
		return function(newCargo){
			if(!obj.hasCargo(newCargo.name))
				obj.cargo.push(newCargo);
			else obj.getCargo(newCargo.name).amount+=newCargo.amount;
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
		this.createSetPrices=function(priceTable, itemType){
		var obj=this;
		return function(priceTable, itemType){

			var i;
			if(itemType=="cargo")
			{
				for (i=0;i<obj.cargo.length;i++)
					obj.cargo[i].price=obj.getPrice(obj.cargo[i].name, priceTable);
			}
			else if (itemType=="ships")
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
				if(priceTable[i].cargoName==cargoName)
				{
					return priceTable[i].sellPrice;//price which the player will buy at, and the shop will sell at
				}
			}
			return null;
		}
	}
	this.getPrice=this.createGetPrice();
}

function save(){
	//save game state data to a file
}