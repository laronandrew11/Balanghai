function guide(){
	this.active=true;
	this.index=0;
	this.draw=function(){
		if(this.active)
			switch(this.index){
				case 0:
					if(gameState!=undefined)
					context.drawImage(pointerDown,610,400,100,100); 
					
					break;
				case 1://display image 1 so on
				if (gameState.currentMenu=="settlement")
					context.drawImage(pointerDown,390,250,50,50); 
					break;
				case 2:
				if (gameState.currentMenu=="market")
					context.drawImage(pointerRight,430,250,100,100); 
					break;
				case 3:
				if (gameState.currentMenu=="market")
					context.drawImage(pointerDown,430,250,100,100); 
					break;	
				case 4:
					if (gameState.currentMenu=="market")
					context.drawImage(pointerDown,450,400,100,100); 
					break;	
				case 5:
					if (gameState.currentMenu=="map")
					context.drawImage(pointerDown,595,285,30,30); 
					break;
				case 6:
					if(gameState!=undefined)
					context.drawImage(pointerDown,860,385,100,100);
					break;
				case 7:
					if(gameState.currentMenu=="translation")
					context.drawImage(pointerUp,790,155,100,100);
					break;
				case 8:
					if(gameState.currentMenu=="translation")
					context.drawImage(pointerDown,365,385,100,100);
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