var shopInventoryMap=new Map();
populateShopInventories();
function populateShopInventories(){
	var fetcher=new SettlementInfoFetcher();
	var i;
	var settlements=fetcher.getAll();
	for(i=0;i<settlements.length;i++)
	{
		var settlement=settlements[i];
		var j;
		for(j=0;j<settlement.pois.length;j++)
		{
			var key=settlement.name+"-"+settlement.pois[j];
			if(settlement.pois[j]=='market')
			{
				var cargoList=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
			}
			else if (settlement.pois[j]='shipbuilder')
			{
				var cargoList=[new Ship("Halimaw",'Bangka',10,110,50), new Ship("Batumbakal",'Bangka',10,100,60)];
			}
			shopInventoryMap.set(key, new ShopInventory(settlement.name, settlement.pois[j], 1000, cargoList));
		}
			
	}
}