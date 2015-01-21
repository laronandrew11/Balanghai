function SettlementInfoFetcher(){
	var rawList;
	rawList=JSON.parse(settlements);

	this.createGet=function(settlementName){
		var obj=this;
		return function(settlementName){
			var rawSettlementObject=obj.findSettlement(settlementName);
			var region=rawSettlementObject.region;
			var mapX=rawSettlementObject.mapX;
			var mapY=rawSettlementObject.mapY;
			var pointsOfInterest=rawSettlementObject.pois;
			return new Settlement(settlementName, region, mapX, mapY, pointsOfInterest);
		}
	}
	this.get=this.createGet();


	this.findSettlement=function(settlementName){//TODO switch this and other search functions to use binary search
		var i;
			for(i=0;i<rawList.length;i++)
			{
				if(rawList[i].name==settlementName)
				{
					return rawList[i];
				}
			}
	}


}