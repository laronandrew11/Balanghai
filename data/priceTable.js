var priceTableMap=new Map();
function populatePriceTable(){
	var fetcher=new SettlementInfoFetcher();
	var i;
	var j;
	var settlements=fetcher.getAll();
	for(i=0;i<settlements.length;i++)
	{

		for(j=0;j<settlements[i].pois.length;j++)
		{

			var priceRecords=[];
			var k;
			if(settlements[i].pois[j]=='market')
			{
				for(k=0;k<cargoRecords.length;k++)
				{
					priceRecords.push(new PriceRecord(cargoRecords[k].name, 10,8));//temporary: set prices of everything to 10
				}
			}
			else if(settlements[i].pois[j]=='shipbuilder')
			{
				for(k=0;k<shipRecords.length;k++)
				{
					priceRecords.push(new PriceRecord(shipRecords[k].name, 400,300));//temporary: set base prices of every ship type to 400
				}
			}
			priceTableMap.set(settlements[i].name+"-"+settlements[i].pois[j], priceRecords);
		}	
	}
}
populatePriceTable();