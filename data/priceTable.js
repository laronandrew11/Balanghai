var priceTableMap=new Map();
var basePriceMap=new Map();
populateBaseCargoPrices();
populatePriceTable();


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
				var basePrices=basePriceMap.get(settlements[i].region);

				for(k=0;k<basePrices.length;k++)
				{
					console.log(basePrices[k].name+", "+basePrices[k].buyPrice+", "+basePrices[k].sellPrice);
					priceRecords.push(new PriceRecord(basePrices[k].cargoName, randomizePrice(basePrices[k].buyPrice),randomizePrice(basePrices[k].sellPrice)));//temporary: set prices of everything to 10
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



function randomizePrice(originalPrice){
	
	var randomMax=originalPrice/10;
	var randomMin=-randomMax;
	return originalPrice + randomIntFromInterval(randomMin, randomMax);
}

function populateBaseCargoPrices(){
	

	var priceRecords1=[];
	priceRecords1.push(new PriceRecord("Rice", 10,8));//medium
	priceRecords1.push(new PriceRecord("Water", 5,4));//medium
	priceRecords1.push(new PriceRecord("Kamote", 8,7));//low
	priceRecords1.push(new PriceRecord("Mango", 30,25));//exclusive-P
	priceRecords1.push(new PriceRecord("Coffee", 90,80));//exclusive-C-high
	priceRecords1.push(new PriceRecord("Banana", 25,22));//low
	priceRecords1.push(new PriceRecord("Pinya", 40,35));//exclusive-P
	priceRecords1.push(new PriceRecord("Batik", 100,90));//exclusive-C-medium
	priceRecords1.push(new PriceRecord("Silk", 120,110));//exclusive-C-medium
	priceRecords1.push(new PriceRecord("Teak", 120,110));//exclusive-C-high
	priceRecords1.push(new PriceRecord("Mahogany", 50,40));//medium
	priceRecords1.push(new PriceRecord("Abaca Wood", 45,35));//low
	priceRecords1.push(new PriceRecord("Gold", 500,480));//medium
	priceRecords1.push(new PriceRecord("Iron", 85,80));//medium
	priceRecords1.push(new PriceRecord("Kris", 200,190));//medium
	priceRecords1.push(new PriceRecord("Kalasag", 100,80));//low
	priceRecords1.push(new PriceRecord("Gold Jewelry", 650,630));//medium
	priceRecords1.push(new PriceRecord("Vest", 45,40));//medium
	priceRecords1.push(new PriceRecord("Barong", 50,45));//low
	priceRecords1.push(new PriceRecord("Trousers", 45,40));//low
	priceRecords1.push(new PriceRecord("Ivory", 200,185));//exclusive-C-high
	priceRecords1.push(new PriceRecord("Porcelain", 110,105));//exclusive-C-medium
	priceRecords1.push(new PriceRecord("Rope", 35,30));//low
	priceRecords1.push(new PriceRecord("Animal Skin", 25,22));//medium
	priceRecords1.push(new PriceRecord("Leather", 50,45));//medium
	priceRecords1.push(new PriceRecord("Poison", 80,75));//medium

	basePriceMap.set("Lunhawan", priceRecords1);

	var priceRecords2=[];
	priceRecords2.push(new PriceRecord("Rice", 12,10));//high
	priceRecords2.push(new PriceRecord("Water", 4,3));//low
	priceRecords2.push(new PriceRecord("Kamote", 8,7));//low
	priceRecords2.push(new PriceRecord("Mango", 60,55));//exclusive-C-medium
	priceRecords2.push(new PriceRecord("Coffee", 40,35));//exclusive-P
	priceRecords2.push(new PriceRecord("Banana", 25,22));//low
	priceRecords2.push(new PriceRecord("Pinya", 85,80));//exclusive-C-medium
	priceRecords2.push(new PriceRecord("Batik", 50, 45));//exclusive-P
	priceRecords2.push(new PriceRecord("Silk", 150,140));//exclusive-C-high
	priceRecords2.push(new PriceRecord("Teak", 100,90));//exclusive-C-medium
	priceRecords2.push(new PriceRecord("Mahogany", 50,40));//medium
	priceRecords2.push(new PriceRecord("Abaca Wood", 55,50));//medium
	priceRecords2.push(new PriceRecord("Gold", 490,475));//medium
	priceRecords2.push(new PriceRecord("Iron", 80,75));//medium
	priceRecords2.push(new PriceRecord("Kris", 160,150));//low
	priceRecords2.push(new PriceRecord("Kalasag", 120,110));//medium
	priceRecords2.push(new PriceRecord("Gold Jewelry", 640,625));//medium
	priceRecords2.push(new PriceRecord("Vest", 35,30));//low
	priceRecords2.push(new PriceRecord("Barong", 65,55));//medium
	priceRecords2.push(new PriceRecord("Trousers", 55,50));//medium
	priceRecords2.push(new PriceRecord("Ivory", 180,170));//exclusive-C-medium
	priceRecords2.push(new PriceRecord("Porcelain", 140,130));//exclusive-C-high
	priceRecords2.push(new PriceRecord("Rope", 45,38));//medium
	priceRecords2.push(new PriceRecord("Animal Skin", 20,18));//low
	priceRecords2.push(new PriceRecord("Leather", 40,35));//low
	priceRecords2.push(new PriceRecord("Poison", 70,65));//low

	basePriceMap.set("Besaria", priceRecords2);

	var priceRecords3=[];
	priceRecords3.push(new PriceRecord("Rice", 10,8));//medium
	priceRecords3.push(new PriceRecord("Water", 5,4));//medium
	priceRecords3.push(new PriceRecord("Kamote", 10,8));//medium
	priceRecords3.push(new PriceRecord("Mango", 65,60));//exclusive-C-medium
	priceRecords3.push(new PriceRecord("Coffee", 80,70));//exclusive-C-medium
	priceRecords3.push(new PriceRecord("Banana", 30,25));//medium
	priceRecords3.push(new PriceRecord("Pinya", 95,90));//exclusive-C-high
	priceRecords3.push(new PriceRecord("Batik", 105, 95));//exclusive-C-medium
	priceRecords3.push(new PriceRecord("Silk", 110,100));//exclusive-C-medium
	priceRecords3.push(new PriceRecord("Teak", 55,50));//exclusive-P
	priceRecords3.push(new PriceRecord("Mahogany", 50,40));//medium
	priceRecords3.push(new PriceRecord("Abaca Wood", 55,50));//medium
	priceRecords3.push(new PriceRecord("Gold", 400,380));//low
	priceRecords3.push(new PriceRecord("Iron", 100,90));//high
	priceRecords3.push(new PriceRecord("Kris", 210,200));//medium
	priceRecords3.push(new PriceRecord("Kalasag", 125,115));//medium
	priceRecords3.push(new PriceRecord("Gold Jewelry", 580,570));//low
	priceRecords3.push(new PriceRecord("Vest", 35,30));//low
	priceRecords3.push(new PriceRecord("Barong", 70,65));//medium
	priceRecords3.push(new PriceRecord("Trousers", 45,40));//low
	priceRecords3.push(new PriceRecord("Ivory", 140,130));//exclusive-P
	priceRecords3.push(new PriceRecord("Porcelain", 105,100));//exclusive-C-medium
	priceRecords3.push(new PriceRecord("Rope", 45,38));//medium
	priceRecords3.push(new PriceRecord("Animal Skin", 20,18));//low
	priceRecords3.push(new PriceRecord("Leather", 40,35));//low
	priceRecords3.push(new PriceRecord("Poison", 80,75));//medium
	basePriceMap.set("Phra Van", priceRecords3);

	var priceRecords4=[];
	priceRecords4.push(new PriceRecord("Rice", 8,7));//low
	priceRecords4.push(new PriceRecord("Water", 5,4));//medium
	priceRecords4.push(new PriceRecord("Kamote", 12,10));//high
	priceRecords4.push(new PriceRecord("Mango", 75,80));//exclusive-C-high
	priceRecords4.push(new PriceRecord("Coffee", 100,95));//exclusive-C-high
	priceRecords4.push(new PriceRecord("Banana", 35,30));//high
	priceRecords4.push(new PriceRecord("Pinya", 90,86));//exclusive-C-high
	priceRecords4.push(new PriceRecord("Batik", 120, 115));//exclusive-C-high
	priceRecords4.push(new PriceRecord("Silk", 60,55));//exclusive-P
	priceRecords4.push(new PriceRecord("Teak", 110,105));//exclusive-C-medium
	priceRecords4.push(new PriceRecord("Mahogany", 60,50));//high
	priceRecords4.push(new PriceRecord("Abaca Wood", 65,60));//high
	priceRecords4.push(new PriceRecord("Gold", 450,440));//low
	priceRecords4.push(new PriceRecord("Iron", 70,65));//low
	priceRecords4.push(new PriceRecord("Kris", 260,250));//high
	priceRecords4.push(new PriceRecord("Kalasag", 110,105));//low
	priceRecords4.push(new PriceRecord("Gold Jewelry", 620,615));//low
	priceRecords4.push(new PriceRecord("Vest", 35,30));//low
	priceRecords4.push(new PriceRecord("Barong", 70,65));//medium
	priceRecords4.push(new PriceRecord("Trousers", 45,40));//low
	priceRecords4.push(new PriceRecord("Ivory", 195,180));//exclusive-C-high
	priceRecords4.push(new PriceRecord("Porcelain", 50,45));//exclusive-P
	priceRecords4.push(new PriceRecord("Rope", 40,35));//medium
	priceRecords4.push(new PriceRecord("Animal Skin", 30,25));//high
	priceRecords4.push(new PriceRecord("Leather", 60,55));//high
	priceRecords4.push(new PriceRecord("Poison", 90,85));//high

	basePriceMap.set("Manjiang", priceRecords4);
}

