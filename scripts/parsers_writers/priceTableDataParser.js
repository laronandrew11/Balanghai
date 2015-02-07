function PriceTableInfoFetcher(){
	var rawList;

	this.createGet=function(settlementName){
		var obj=this;
		return function(settlementName){
			var priceTable=obj.findPriceTable(settlementName);
			return priceTable;
		}
	}
	this.get=this.createGet();


	this.findPriceTable=function(settlementName, poiType){//TODO switch this and other search functions to use binary search
		return priceTableMap.get(settlementName+"-"+poiType);
	}
	this.getAll=function()
	{
		return rawList;
	}


}