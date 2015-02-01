var priceTableMap=new Map();
function populatePriceTable(){
	var fetcher=new SettlementInfoFetcher();
	var i;
	var settlements=fetcher.getAll();
	for(i=0;i<settlements.length;i++)
	{
			var priceRecords=[];
			var k;
			for(k=0;k<cargoRecords.length;k++)
			{
				priceRecords.push(new PriceRecord(cargoRecords[k].name, 10,8));//temporary: set prices of everything to 10
			}
			priceTableMap.set(settlements[i].name, priceRecords);	
	}
}
populatePriceTable();