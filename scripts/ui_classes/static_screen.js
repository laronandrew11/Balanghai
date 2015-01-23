/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	var buttons = [];
	this.panels=[];
	this.bgImage;
	this.createSetBG=function(img)
	{
		var obj=this;
		return function(img){
			obj.bgImage=img;
		}

	}
	this.setBG=this.createSetBG();
	this.drawBG=function(context){
		//var obj=this;
		//return function(context)
		//{
			context.drawImage(this.bgImage,0,0,1000,600); 			
		}

		
	//this.drawBG=this.createDrawBG();

	this.drawMenu=function(undraw)
	{
		var i;
		for(i=0; i<buttons.length; i++){
		if(i != undraw)
			buttons[i].draw(context);
		}
	}
	this.createDrawPanels=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.panels.length; i++){
				if(obj.panels[i].visible==true)
				{
					obj.panels[i].draw(context);
				}
			}
		}
	}
	this.drawPanels=this.createDrawPanels();

	this.createHidePanel=function(i){
		var obj=this;
		return function(i)
		{
			obj.panels[i].visible=false;
			obj.drawScreen(obj.bgImage);
			//obj.drawPanels();
		}
	}
	this.hidePanel=this.createHidePanel();
	this.createShowPanel=function(i){
		var obj=this;
		return function(i)
		{
			obj.panels[i].visible=true;
			obj.drawPanels();
		}
	}
	this.showPanel=this.createShowPanel();
	this.createAddPanel=function(panel)
	{
		var obj=this;
		return function(panel){
			obj.panels.push(panel);
		}

	}
	this.addPanel=this.createAddPanel();

	this.addButton=function(button){
		buttons.push(button);
	}
	this.clearButtons=function(){
		while(buttons.length>0)
			buttons.pop();
	}
	this.createClearPanels=function(){
		var obj=this;
		return function(){
			while(obj.panels.length>0)
			obj.panels.pop();
		}
	}
	this.clearPanels=this.createClearPanels();

	this.createHoverEvent = function() {
		var obj = this;
		return function(evt) //TODO: optimize
		{
			var mousePos = getMousePos(canvas, evt);
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
			}


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
	this.createClickEvent=function(evt)
	{
		var obj=this;
		return function(evt){
			var mousePos = getMousePos(canvas, evt);
			for(i=0; i<buttons.length; i++){
				if(inCoordinates(buttons[i],mousePos)){
					buttons[i].onClick();
					return;
				}
			}
			for(i=0;i<obj.panels.length;i++)
			{
				if(obj.panels[i].visible==true&&inCoordinates(obj.panels[i],mousePos)){
					obj.panels[i].onClick(mousePos);
					return;
				}
			}
		}
	}
	this.clickEvent=this.createClickEvent();

	this.removeListeners=function(){
		canvas.removeEventListener('mousemove', this.hoverEvent);
		canvas.removeEventListener('mousedown', this.clickEvent);
	}
	this.createClearScreen=function(){
		var obj=this;
		return function(){
			obj.removeListeners();
			obj.clearButtons();
			obj.clearPanels();
		}
	}
	this.clearScreen=this.createClearScreen();

	this.createDrawScreen=function(bg)
	{
		var obj=this;
		//alert(typeof obj.bgImage);
		return function(bg){
			obj.setBG(bg);
			obj.drawBG(context);
			obj.drawMenu(-1);
			obj.drawPanels();
		}
	}
	this.drawScreen=this.createDrawScreen();
	//canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	

}

