function Settlement(name, region, mapX, mapY)
{
	//to do: link price list to settlement
	this.name=name;
	this.region=region;
	this.mapX=mapX;
	this.mapY=mapY;
	this.pointsOfInterest=new Array();
	
	function addPointOfInterest(newPOI)
	{
		pointsOfInterest.put(newPOI);
	}
}