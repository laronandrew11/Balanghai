function GameDate(year, month, day){
	this.year=year;
	this.month=month;
	this.day=day;
	this.advanceDate=function(){
		if(this.day<30)
			this.day++;
		else {
			triggerTranslationQuest();
			this.day=1;
			if (this.month<12)
				this.month++;
			else {
				this.month=1;
				this.year++;
			}
		}
		checkWinCondition(this.year, this.month, this.day);
		//console.log("Game date advanced");
	}
}
function checkWinCondition(year, month, day){
	var endDate=gameState.endDate;
	if(year=endDate.year&&month==endDate.month&&day==endDate.day)
	{
		if(gameState.money>=gameState.targetMoney)
			alert("You win!");
		else alert("You lose!");
	}
	
	
}