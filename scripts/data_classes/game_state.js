function GameState(playerName){
	//information needed to save the game; mostly player-related info
	this.playerName = playerName ;
	this.money=1000;
	this.mapX=494;
	this.mapY=199;
	this.settlement="Sikdagat"; //if applicable
	this.ships=[];
	this.cargo=[];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameTime;
	this.dx;
	this.dy;
	this.settlementsDiscovered=[];
	
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