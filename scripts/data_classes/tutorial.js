function guide(){
	this.active=true;
	this.index=0;
	this.draw=function(){
		if(this.active)
			switch(this.index){
				case 1://display image 1 so on
				case 2:
				default:// do nothing
				this.active=false;
		}
	}
	this.check=function(x){
		if(this.index==x&&this.active==true){
			index++;
		}
	}


}

tutorial = new guide();