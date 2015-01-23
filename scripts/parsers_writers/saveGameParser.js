function saveGame(){
	var saveText='{"playerName":'+gameState.playerName+',"money":'+gameState.money+'"mapX":'+gameState.mapX+'"mapY":'+gameState.mapY+'"usedCapacity":'+gameState.usedCapacity+'"settlement:"+'gameState.settlement+'}';
	var i;
	for(i=0;i<gameState.ships.length;i++)
	{
		//append ships[i]'s data '
	}
	for(i=0;i<gameState.cargo.length;i++)
	{
		//append cargo[i]'s data '
	}
	for(i=0;i<gameState.visibleSettlements.length;i++)
	{
		//append visibleSettlements[i]'s data '
	}
	//append gameState.gameDate;
	//append gameState.quests;

	this.ships=[new Ship("Bangka",10,100,50)];
	this.cargo=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
	this.visibleSettlements=["Sikdagat","Kagisanan","Mapawikan","Atabay","Balasin","Lungon"];
	this.gameDate=new GameDate(1200,1,1);

	this.quests=[];
}
function loadGame(){

}