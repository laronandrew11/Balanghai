var shopInventoryMap=new Map();
//populateShopInventories();
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
				var cargoList=populateMarket(settlement);
			}
			else if (settlement.pois[j]='shipbuilder')
			{
				var cargoList=populateShipbuilder(settlement);
			}
			
			
			gameState.shopInventoryMap.set(key, new ShopInventory(settlement.name, settlement.pois[j], 1000, cargoList));
		}
			
	}
}
function populateMarket(settlement){
	var cargoList;

	cargoList=[new Cargo("Rice","Food",1, 1000+randomizeMedium()),new Cargo("Water","Food",1, 1000+randomizeMedium())];
	switch(settlement.region){
		case "Lunhawan":
			cargoList.push(new Cargo("Mango","Food",0.25,60+randomizeSmall()));
			cargoList.push(new Cargo("Pinya","Textile",0.1,60+randomizeSmall()));
			break;
		case "Besaria":
			cargoList.push(new Cargo("Coffee","Food",0.25,80+randomizeSmall()));
			cargoList.push(new Cargo("Batik","Textile",0.1,80+randomizeSmall()));
			break;
		case "Manjiang":
			cargoList.push(new Cargo("Porcelain","Art",0.5,140+randomizeSmall()));
			cargoList.push(new Cargo("Silk","Textile",0.1,140+randomizeSmall()));
			break;
		case "Phra Van":
			cargoList.push(new Cargo("Teak","Wood",1, 110+randomizeSmall()));
			cargoList.push(new Cargo("Ivory","Metal",5,110+randomizeSmall()));	
			break;

	}
	
	return cargoList;
}
function randomizeSmall(){
		var randomMin=-30;
	var randomMax=30;
	return randomIntFromInterval(randomMin, randomMax);
}
function randomizeMedium(){
		var randomMin=-80;
	var randomMax=80;
	return randomIntFromInterval(randomMin, randomMax);
}
function randomizeLarge(){
		var randomMin=-180;
	var randomMax=180;
	return randomIntFromInterval(randomMin, randomMax);
}
function populateShipbuilder(settlement)
{
	var cargoList;
	var nameList;
	switch(settlement.region){
		case "Lunhawan":
			nameList=["Halimaw","Batumbakal"];
			cargoList=[new Ship("Halimaw",'Bangka',10,110,50), new Ship("Batumbakal",'Bangka',10,100,60)];
			break;
		case "Besaria":
			nameList=["Singa","Gajah"];
			cargoList=[new Ship("Halimaw",'Bangka',10,110,50), new Ship("Batumbakal",'Bangka',10,100,60)];
			break;
		case "Manjiang":
			nameList=["Hailang","Zhihui"];
			cargoList=[new Ship("Halimaw",'Bangka',10,110,50), new Ship("Batumbakal",'Bangka',10,100,60)];
			break;
		case "Phra Van":
			nameList=["Halimaw","Batumbakal"];
			cargoList=[new Ship("Halimaw",'Bangka',10,110,50), new Ship("Batumbakal",'Bangka',10,100,60)];
			break;
	
	}
	
	return cargoList;
}