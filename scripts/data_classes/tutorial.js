function guide(){
	this.active=true;
	this.index=0;
	this.draw=function(){
		if(this.active)
			switch(this.index){
				case 0:
					if(gameState!=undefined)
					context.drawImage(tutorialImg,100,100,100,100); 
					break;
				case 1://display image 1 so on
				if (gameState.currentMenu=="settlement")
					context.drawImage(tutorialImg,150,100,100,100); 
					break;
				case 2:
				if(gameStat.currentMenu=="market")
					context.drawImage(tutorialImg,200,100,100,100); 
					break;
				default:// do nothing
				this.active=false;
		}
	}
	this.check=function(x){
		if(this.index==x&&this.active==true){
			this.index++;
		}
	}


}

tutorial = new guide();