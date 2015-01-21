function SettlementInfoFetcher(settlementName){
	this.settlementName=settlementName;
	this.get=function(){
	var rawText=loadJSONFile('data/regions_settlements.json');
	var rawObj=JSON.parse(rawText);
	var region;
	var mapX;
	var mapY;
	var pointsOfInterest;
		return new Settlement(settlementName, region, mapX, mapY);
	}


}