/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	this.buttons = new Array();
	this.drawBG=function(context, img){
		//context.fillStyle="white";
		//context.fillRect(0,0,1000,600);
		context.drawImage(img,0,0,1000,600); 
	}	
	this.addButton=function(button){
		this.buttons.push(button);
	}
	this.drawButtons=function(){
		var i;
		for(i=0; i<this.buttons.length; i++){	
				this.buttons[i].drawText(context);
		}
	}
	this.hoverEvent=function(evt)
	{
		var mousePos = getMousePos(canvas, evt);
		var i;
		for(i=0; i<this.buttons.length; i++){
			if(inCoordinates(this.buttons[i],mousePos)){
				this.drawBG();
				this.buttons[i].defaultHover(context, "#ffff66", 20);
				this.drawMenu();
			}
		}
	}
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
		for(i=0; i<this.buttons.length; i++){
			if(inCoordinates(this.buttons[i],mousePos)){
				this.buttons[i].onClick();
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

