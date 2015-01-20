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
		//context.fillStyle="white";
		//context.fillRect(0,0,1000,600);
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
	this.drawButtons=function(){
		var i;
		for(i=0; i<buttons.length; i++){	
				buttons[i].drawText(context);
		}
	}
	this.clearButtons=function(){
		alert(buttons.length);
		alert("Clearing buttons");
		buttons=[];//optimization: ???
		alert(buttons.length);
	}
	this.hoverEvent=function(evt)
	{
		/*var mousePos = getMousePos(canvas, evt);
		var i;
		
		for(i=0; i<buttons.length; i++){
			if(inCoordinates(buttons[i],mousePos)){
				//this.drawBG(context);
				buttons[i].defaultHover(context, "#ffff66", 20);
				this.drawMenu(i);
			}
			else
			{
				//this.drawBG(context);
				this.drawMenu();
			}
		}*/
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
		for(i=0; i<buttons.length; i++){
			alert(buttons[i].text);
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

	this.clearButtons();
	this.removeListeners();//optimization: only call before a screen closes
	canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	

}

