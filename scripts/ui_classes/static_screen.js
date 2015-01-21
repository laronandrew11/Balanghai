/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	var buttons = [];
	var bgImage;
	this.setBG=function(img)
	{
		bgImage=img;
	}
	this.drawBG=function(context){
		context.drawImage(bgImage,0,0,1000,600); 
	}	
	this.drawMenu=function(undraw)
	{
		var i;
		for(i=0; i<buttons.length; i++){
		if(i != undraw)
			buttons[i].drawText(context);
		}
	}
	this.addButton=function(button){
		buttons.push(button);
	}
	this.clearButtons=function(){
		while(buttons.length>0)
			buttons.pop();
	}
	

	this.createHoverEvent = function() {
		var obj = this;
		return function(evt) //TODO: optimize
		{
			/*var mousePos = getMousePos(canvas, evt);
			var i;
			for(i=0; i<buttons.length; i++){
				if(inCoordinates(buttons[i],mousePos)){
					obj.drawBG(context);
					buttons[i].onHover(context);
					obj.drawMenu(i);
					return;
				}
				else
				{
					obj.drawBG(context);
					obj.drawMenu(-1);
					//buttons[i].onMouseOff(context);
				}
			}*/


		}
	}

	this.hoverEvent=this.createHoverEvent();

	this.keyEvent=function(event){
		var key = event.keyCode;
		switch(key)
		{
			default: break;
		}
	}
	this.clickEvent=function(evt)
	{
		var mousePos = getMousePos(canvas, evt);
		for(i=0; i<buttons.length; i++){
			if(inCoordinates(buttons[i],mousePos)){
				buttons[i].onClick();
				return;
			}
		}
	}
	this.removeListeners=function(){
		canvas.removeEventListener('mousemove', this.hoverEvent);
		canvas.removeEventListener('mousedown', this.clickEvent);
	}

	canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	

}

