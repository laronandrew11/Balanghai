function CargoRecord(name, type, unitWeight, imageSrc, region){
	this.name=name;
	this.type=type;
	this.region=region||"all";
	this.imageSrc=imageSrc;
	this.unitWeight=unitWeight;
}