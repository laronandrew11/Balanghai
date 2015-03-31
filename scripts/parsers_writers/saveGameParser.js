function GameStateParser(){

	this.saveGame=function(){
		if(typeof(Storage)!=="undefined")
 		{
			var saveName=prompt("Enter save name: ");
			/*var saveText='{"playerName":"'+gameState.playerName+'","money":'+gameState.money+',"mapX":'+gameState.mapX+',"mapY":'+gameState.mapY+',"usedCapacity":'+gameState.usedCapacity+',"settlement":"'+gameState.settlement+'",';
			var i;

			var shipsString='"ships":[';
			for(i=0;i<gameState.ships.length;i++)
			{
				shipsString=shipsString+'{"type":"'+	gameState.ships[i].type+'", "speed":'+gameState.ships[i].speed+', "health": '+gameState.ships[i].health+', "cargoCapacity":'+gameState.ships[i].cargoCapacity+'}';
				if(i<gameState.ships.length-1)
					shipsString=shipsString+', ';
			}
			shipsString=shipsString+'],';

			var cargoString='"cargo":[';
			for(i=0;i<gameState.cargo.length;i++)
			{
				cargoString=cargoString+'{"name":"'+	gameState.cargo[i].name+'", "type":"'+gameState.cargo[i].type+'", "unitWeight": '+gameState.cargo[i].unitWeight+', "amount":'+gameState.cargo[i].amount+'}';
				if(i<gameState.cargo.length-1)
					cargoString=cargoString+', ';
			}
			cargoString=cargoString+'],';

			var visibleSettlementsString='"visibleSettlements":[';
			for(i=0;i<gameState.visibleSettlements.length;i++)
			{
				visibleSettlementsString=visibleSettlementsString+'"'+gameState.visibleSettlements[i]+'"';
				if(i<gameState.visibleSettlements.length-1)
					visibleSettlementsString=visibleSettlementsString+', ';
			}
			visibleSettlementsString=visibleSettlementsString+'],';

			var gameDateString='"gameDate":{"year":'+gameState.gameDate.year+',"month":'+gameState.gameDate.month+',"day":'+gameState.gameDate.day+'}';

			saveText=saveText+shipsString+cargoString+visibleSettlementsString+gameDateString+'}';*/
			var saveText=JSON.stringify(gameState);
			console.log("Saved state: "+saveText);
			var saveIndex;
			if(localStorage.saveIndex!=undefined)
				saveIndex=JSON.parse(localStorage.saveIndex);
			else saveIndex=[];
			//console.log(saveText);
			saveIndex.push(saveName);
			localStorage.saveIndex=JSON.stringify(saveIndex);
			localStorage.setItem(saveName,saveText);
			//console.log(localStorage.getItem(saveName)); 
			//append gameState.quests;
		}
		else alert("Sorry, your browser does not support local storage");
	}
	

	this.loadGame=function(saveName){
		var saveText=localStorage.getItem(saveName);
		var savedGameState;
	
		savedGameState=JSON.parse(saveText);

			console.log(saveText);
		return savedGameState;

	}
	this.deleteSave=function(saveName)
	{
		var x=confirm("Delete this saved game?")
		if(x==true)
		{
			var saveIndex;
			if(localStorage.saveIndex!=undefined)
				saveIndex=JSON.parse(localStorage.saveIndex);
			else saveIndex=[];
			if(typeof localStorage.getItem(saveName)!=undefined)
			{
				localStorage.removeItem(saveName);
				removeByValue(saveIndex,saveName);
				localStorage.saveIndex=JSON.stringify(saveIndex);
			}
		}
		return x;

	}
}