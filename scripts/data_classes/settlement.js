function Settlement(name, region, mapX, mapY, pointsOfInterest)
{
	//to do: link price list to settlement
	this.name=name;
	this.region=region;
	this.mapX=mapX;
	this.mapY=mapY;
	this.pointsOfInterest=pointsOfInterest;
	
	function addPointOfInterest(newPOI)
	{
		pointsOfInterest.put(newPOI);
	}
}