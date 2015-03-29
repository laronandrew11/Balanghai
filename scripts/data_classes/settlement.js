function Settlement(name, region, mapX, mapY, pointsOfInterest)
{
	//to do: link price list to settlement
	this.name=name;
	this.region=region;
	this.mapX=mapX;
	this.mapY=mapY;
	this.pois=pointsOfInterest;
	
	this.createAddPointOfInterest=function(newPOI)
	{
		var obj=this;
		return function(newPOI){
			obj.pois.put(newPOI);
			//if(newPOI=="market"||newPOI=="shipbuilder")
				//obj.shopInventories.put(new ShopInventory(obj.name, newPOI,1000,));
		}
	}
	this.addPointOfInterest=this.createAddPointOfInterest();

	this.createGetShopInventory=function(poiType){
		var obj=this;
		return function(poiType){
			return gameState.shopInventoryMap.get(obj.name+"-"+poiType);
		}
		
	}
	this.getShopInventory=this.createGetShopInventory();

}