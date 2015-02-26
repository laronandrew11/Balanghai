/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	this.buttons = [];
	this.panels=[];
	this.labels=[];
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
			//context.fillRect(0,0,1000,600);
			context.drawImage(this.bgImage,0,0,1000,600); 
	
		//}

	}	
	//this.drawBG=this.createDrawBG();

	this.createDrawMenu=function(undraw)
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.buttons.length; i++){
			if(i != undraw)
				obj.buttons[i].draw(context);
			}
		}
	}
	this.drawMenu=this.createDrawMenu();
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
	this.createGetPanelByName=function(name){
		var obj=this;
		return function(name){
			var i;
			for(i=0;i<obj.panels.length;i++)
				{
					if(obj.panels[i].name==name){
						return obj.panels[i];
					}
				}
		}
	}
	this.getPanelByName=this.createGetPanelByName();
	this.createRemovePanelByName=function(name){
		var obj=this;
		return function(name){
			removeByValue(obj.panels, obj.getPanelByName(name));
		}
	}
	this.removePanelByName=this.createRemovePanelByName();

	this.createAddButton=function(button){
		var obj=this;
		return function(button){
			obj.buttons.push(button);
		}
	}
	this.addButton=this.createAddButton();

	this.createClearButtons=function(){
		var obj=this;
		return function(){
			while(obj.buttons.length>0)
				obj.buttons.pop();
		}
	}
	this.clearButtons=this.createClearButtons();
	this.createClearPanels=function(){
		var obj=this;
		return function(){
			while(obj.panels.length>0)
			obj.panels.pop();
		}
	}
	this.clearPanels=this.createClearPanels();
	this.createAddLabel=function(label)
	{
		var obj=this;
		return function(label){
			obj.labels.push(label);
		}

	}
	this.addLabel=this.createAddLabel();
	this.createDrawLabels=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.labels.length; i++){
					obj.labels[i].draw(context);
			}
		}
	}
	this.drawLabels=this.createDrawLabels();
	this.createHoverEvent = function() {
		var obj = this;
		return function(evt) //TODO: optimize
		{
			var mousePos = getMousePos(canvas, evt);
			var i;
			for(i=0; i<obj.buttons.length; i++){
				if(inCoordinates(buttons[i],mousePos)){
					obj.drawBG(context);
					obj.buttons[i].onHover(context);
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
			for(i=0; i<obj.buttons.length; i++){
				if(inCoordinates(obj.buttons[i],mousePos)){
					obj.buttons[i].onClick();
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
			obj.drawLabels();
			obj.drawMenu(-1);
			obj.drawPanels();
		}
	}
	this.drawScreen=this.createDrawScreen();
	//canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	

}

