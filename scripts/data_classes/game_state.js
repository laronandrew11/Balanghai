function Game_state(playerName){
	
	this.playerName = playerName || "noname";
	this.money=1000;
	this.latitude;
	this.longitude;
	this.settlement; //if applicable
	this.ships=[];
	this.cargo=[];
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