var shopInventoryMap=new Map();
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
			var cargoList=[new Cargo("Rice","Food",1, 10),new Cargo("Water","Food",1, 10),new Cargo("Abaca Wood","Wood",1, 10)];
			shopInventoryMap.set(key, new ShopInventory(settlement.name, settlement.pois[j], 1000, cargoList));
			console.log(key);
		}
			
	}
}