function ShipInfoFetcher(){


		this.createGetImage=function(shipType){
		var obj=this;
		return function(shipType){
			var i;
			for(i=0;i<shipRecords.length;i++)
			{
				if(shipRecords[i].name==shipType)
					{
				
					return shipRecords[i].image;
					}
			}
		}
	}
	this.getImage=this.createGetImage();
	this.createGetIcon=function(shipType){
		var obj=this;
		return function(shipType){
			var i;
			for(i=0;i<shipRecords.length;i++)
			{
				if(shipRecords[i].name==shipType)
				{
				
					return shipRecords[i].thumbnail;
				}
			}
		}
	}
	this.getIcon=this.createGetIcon();

}