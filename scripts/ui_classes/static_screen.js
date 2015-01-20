/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	this.buttons = new Array();
	this.drawBG=function(context){
		context.fillStyle="white";
		context.fillRect(0,0,1000,600);
	}	
	this.addButton=function(x,y,w,h,text,style,size,color){
		var op = new Button(x,y,w,h,text,style,size,color);
		this.buttons.push(op);
	}
	this.makeButtonList=function(){
		this.addButton(600,388,116,11,"BATTLE","Epistolar",15,"black");
		this.addButton(650,350,120,11,"Add player","Epistolar",15,"black");
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
			/*else{
				this.drawBG();
				this.drawMenu();
			}*/
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
		if(inCoordinates(this.buttons[0],mousePos)){
			/*init();
			removeListeners();
			canvas.removeEventListener(selectClickEvent);*/
		}
		else if(inCoordinates(this.buttons[1],mousePos)){
			//removeListeners();
			
		}
	}
	this.removeListeners=function(){
		canvas.removeEventListener('mousemove', this.hoverEvent);
		canvas.removeEventListener('mousedown', this.clickEvent);
	}
	
	//this.drawBG(context);
	//this.makeButtonList();
	//this.drawButtons();
	canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;

}

