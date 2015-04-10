function CargoRecordInfoFetcher(){

	this.createGetImageSrc=function(cargoName){
		var obj=this;
		return function(cargoName){
			var i;
			for(i=0;i<cargoRecords.length;i++)
			{
				if(cargoRecords[i].name==cargoName)
					return cargoRecords[i].imageSrc;
			}
		}
	}
	this.getImageSrc=this.createGetImageSrc();

	this.createGetUnitWeight=function(cargoName){
		var obj=this;
		return function(cargoName){
			var i;
			for(i=0;i<cargoRecords.length;i++)
			{
				if(cargoRecords[i].name==cargoName)
					return cargoRecords[i].unitWeight;
			}
		}
	}
	this.getUnitWeight=this.createGetUnitWeight();

		this.createGetType=function(cargoName){
		var obj=this;
		return function(cargoName){
			var i;
			for(i=0;i<cargoRecords.length;i++)
			{
				if(cargoRecords[i].name==cargoName)
					return cargoRecords[i].type;
			}
		}
	}
	this.getType=this.createGetType();


}