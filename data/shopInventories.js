var shopInventoryMap=new Map();
var settlementProductionRecords=[];
var shipProductionRecords=[];
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

function hasCargo(cargoList,name){//TODO should we remove the shopInventory class's hasCargo method, or have it call this method?
		var i;
		for(i=0;i<cargoList.length;i++)
		{
			if(cargoList[i].name==name)
				return true;
		}
		return false;
	}

function populateSettlementProductionRecords(){
	settlementProductionRecords.push(new SettlementProductionRecord("Sikdagat",["Kamote","Abaca Wood"],["Leather","Iron"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Kagisanan",["Rope","Vest"],["Abaca Wood","Porcelain","Pinya"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Mapawikan",["Animal Skin","Barong"],["Kamote","Pinya"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Atabay",["Leather"],["Animal Skin"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Balasin",["Pinya","Banana"],["Kalasag","Batik"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Lungon",["Kalasag","Mango"],["Barong","Banana"]));

	settlementProductionRecords.push(new SettlementProductionRecord("Tanjung Hitam",["Banana"],["Mango","Coffee"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Diutara",["Mahogany"],["Kris","Banana"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Luarhari",["Coffee"],["Vest"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Kelairan",["Batik","Kris"],["Mahogany","Poison"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Merantai",["Vest"],["Batik"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Bakar",["Poison"],["Mahogany"]));

	settlementProductionRecords.push(new SettlementProductionRecord("Rha Tar",["Rope"],["Silk","Abaca Wood"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Taungtaw",["Teak"],["Rope"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Shwe Kampar",["Gold","Ivory"],["Teak","Banana"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Kapu Khong",["Banana"],["Gold"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Ngar Phamsa",["Leather","Gold"],["Animal Skin"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Meong Sudthai",["Mahogany"],["Leather"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Saeng Diew",["Animal Skin"],["Mahogany","Teak"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Tonle Veng",["Teak"],["Banana"]));

	settlementProductionRecords.push(new SettlementProductionRecord("Xigang",["Gold"],["Porcelain"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Qinglin",["Gold Jewelry"],["Gold"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Xiaogong",["Leather"],["Animal Skin"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Nandao",["Animal Skin","Silk"],["Gold Jewelry","Ivory"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Yonghai",["Silk"],["Vest"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Yuying",["Porcelain"],["Leather"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Xionghu",["Trousers, Vest"],["Silk"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Fuwan",["Porcelain"],["Iron","Trousers"]));
	settlementProductionRecords.push(new SettlementProductionRecord("Guijiang",["Iron"],["Rope"]));

}	
function populateShipProductionRecords(){
	shipProductionRecords.push(new SettlementProductionRecord("Sikdagat",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Kagisanan",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Mapawikan",["Bangka","Vinta"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Atabay",["Bangka","Vinta","Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Balasin",["Bangka","Proa","Balanghai"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Lungon",["Bangka","Proa"],[]));

	shipProductionRecords.push(new SettlementProductionRecord("Tanjung Hitam",["Bangka","Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Diutara",["Proa","Bangka","Tanjaq"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Luarhari",["Proa","Tanjaq"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Kelairan",["Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Merantai",["Proa","Tanjaq"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Bakar",["Proa","Tanjaq"],[]));

	shipProductionRecords.push(new SettlementProductionRecord("Rha Tar",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Taungtaw",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Shwe Kampar",["Bangka","Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Kapu Khong",["Bangka","Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Ngar Phamsa",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Meong Sudthai",["Bangka","Proa"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Saeng Diew",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Tonle Veng",["Bangka","Proa"],[]));

	shipProductionRecords.push(new SettlementProductionRecord("Xigang",["Junk"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Qinglin",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Xiaogong",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Nandao",["Junk"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Yonghai",["Junk"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Yuying",["Junk"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Xionghu",["Bangka"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Fuwan",["Bangka","Junk"],[]));
	shipProductionRecords.push(new SettlementProductionRecord("Guijiang",["Junk"],[]));

}	
function getSettlementProductionRecord(settlementName){
	var i;
	for (i=0;i<settlementProductionRecords.length;i++)
	{
		if(settlementName==settlementProductionRecords[i].name)
			return settlementProductionRecords[i];
	}
	return null;
}
function getShipProductionRecord(settlementName){
	var i;
	for (i=0;i<shipProductionRecords.length;i++)
	{
		if(settlementName==shipProductionRecords[i].name)
			return shipProductionRecords[i];
	}
	return null;
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
	var productionRecord=getSettlementProductionRecord(settlement.name);
	var fetcher=new CargoRecordInfoFetcher();
	var i;
	for(i=0;i<productionRecord.production.length;i++)
	{
		var cargoName=productionRecord.production[i];
		if(!hasCargo(cargoList,cargoName))
			cargoList.push(new Cargo(cargoName,fetcher.getType(cargoName),fetcher.getUnitWeight(cargoName),180+randomizeMedium()));//TODO get cargo info from cargorecords
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
	var shipList=[];
	var nameList;

	
	switch(settlement.region){
		case "Lunhawan":
			nameList=["Halimaw","Batumbakal"];
			break;
		case "Besaria":
			nameList=["Singa","Gajah"];
			break;
		case "Manjiang":
			nameList=["Hailang","Zhihui"];
			break;
		case "Phra Van":
			nameList=["Halimaw","Batumbakal"];
			break;	
	}

	var productionRecord=getShipProductionRecord(settlement.name);

	var fetcher=new ShipInfoFetcher();

	var i;
	for(i=0;i<productionRecord.production.length;i++)
	{
		var shipName=productionRecord.production[i];
		var shipRecord=fetcher.getShipRecordByType(shipName);
		var j;
		for(j=0;j<3+randomIntFromInterval(-2,2);j++)
			shipList.push(new Ship(nameList[randomIntFromInterval(0,nameList.length-1)],shipName,randomizeToPercentage(shipRecord.speed, 20),randomizeToPercentage(shipRecord.health,20),randomizeToPercentage(shipRecord.cargoCapacity,20)));//TODO get cargo info from cargorecords
	}

	return shipList;
}




