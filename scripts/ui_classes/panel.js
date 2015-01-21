function Panel(x,y,width,height, bgImage){
	var panelButtons=[];
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.bgImage=bgImage;
	this.visible=false;
	this.createDraw = function(context){
		var obj=this;
		return function(context){
			context.drawImage(bgImage,x,y,width,height); 
			obj.drawMenu(-1);
		}
	};
	this.draw=this.createDraw();
	this.addButton=function(button){
		panelButtons.push(button);
	}
	this.clearButtons=function(){
		while(panelButtons.length>0)
			panelButtons.pop();
	}
	this.drawMenu=function(undraw)
	{
		var i;
		for(i=0; i<panelButtons.length; i++){
		if(i != undraw)
			panelButtons[i].draw(context);
		}
	}
	this.createClearPanel=function(){
		var obj=this;
		return function(){
			//hiding the panel is done from parent screen
			obj.clearButtons();
			this.visible=false;
			//TODO remove listeners
		}
	}
	this.clearPanel=this.createClearPanel();

	this.clickEvent=function(evt)
	{
		var mousePos = getMousePos(canvas, evt);
		for(i=0; i<panelButtons.length; i++){
			if(inCoordinates(panelButtons[i],mousePos)){
				panelButtons[i].onClick();
				return;
			}
		}
	}
	this.removeListeners=function(){
		//canvas.removeEventListener('mousemove', this.hoverEvent);
		canvas.removeEventListener('mousedown', this.clickEvent);
	}

	//canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	
}