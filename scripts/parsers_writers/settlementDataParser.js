function SettlementInfoFetcher(){
	var rawList;
	rawList=JSON.parse(settlements);

	this.createGet=function(settlementName){
		var obj=this;
		return function(settlementName){
			var settlement=obj.findSettlement(settlementName);
			return settlement;
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