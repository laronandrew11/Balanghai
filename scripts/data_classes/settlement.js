function Settlement(region, longitude, latitude)
{
	//to do: link price list to settlement
	this.region=region;
	this.longitude=longitude;
	this.latitude=latitude;
	this.pointsOfInterest=new Array();
	
	function addPointOfInterest(newPOI)
	{
		pointsOfInterest.put(newPOI);
	}
}