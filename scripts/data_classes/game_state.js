function GameState(playerName){
	//information needed to save the game; mostly player-related info
	this.playerName = playerName ;
	this.money=1000;
	this.mapX=494;
	this.mapY=199;
	this.usedCapacity=30;
	this.settlement="Sikdagat"; //if applicable
	this.ships=[new Ship("Bangka",10,100,50)];
	this.cargo=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameDate=new GameDate(1200,1,1);

	this.quests=[];
	this.toSell=[];

	
	this.addShip=function(newShip){
		ships.put(newShip);
	}
	this.addCargo=function(newCargo){
		cargo.put(newCargo);
	}
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

}

function save(){
	//save game state data to a file
}