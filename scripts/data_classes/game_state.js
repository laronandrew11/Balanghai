function GameState(playerName){
	//information needed to save the game; mostly player-related info
	this.playerName = playerName ;
	this.money=1000;
	this.mapX=494;
	this.mapY=199;
	this.usedCapacity=30;
	this.settlement="Sikdagat"; //if applicable
	this.ships=[new Ship("bangka",10,100,50)];
	this.cargo=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameYear=1200;
	this.gameMonth=1;
	this.gameDay=1;
	this.dx;
	this.dy;
	
	this.addShip=function(newShip){
		ships.put(newShip);
	}
	this.addCargo=function(newCargo){
		cargo.put(newCargo);
	}


}

function save(){
	//save game state data to a file
}