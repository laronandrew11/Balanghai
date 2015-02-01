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
	this.addItemToSell=function(item){//TODO refactor, along with panel display methods
		var obj=this;
		return function(item){
			removeItemByValue(obj.cargo,item);
			alert(obj.cargo);
		}
	}
	this.removeItemToSell=function(item){
		var obj=this;
		return function(item){
			removeItemByValue(obj.toSell,item);

			alert(obj.toSell);
		}
	}

}

function save(){
	//save game state data to a file
}