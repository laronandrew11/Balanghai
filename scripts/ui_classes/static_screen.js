/*function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}*/


function staticScreen(){
	this.buttons = [];
	this.highButtons=[];
	this.lowButtons=[];
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
	this.createDrawLowButtons=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.lowButtons.length; i++){
				obj.lowButtons[i].draw(context);
			}
		}
	}
	this.drawLowButtons=this.createDrawLowButtons();
	this.createDrawHighButtons=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.highButtons.length; i++){
				obj.highButtons[i].draw(context);
			}
		}
	}
	this.drawHighButtons=this.createDrawHighButtons();
	this.createSortButtons=function()
	{
		var obj=this;
		return function(){
			clear(obj.highButtons);
			clear(obj.lowButtons);
			var i;
			for(i=0; i<obj.buttons.length; i++){
				if(obj.buttons[i].highZOrder==true)
					obj.highButtons.push(obj.buttons[i]);
				else
					obj.lowButtons.push(obj.buttons[i]);
			}
		}
	}
	this.sortButtons=this.createSortButtons();

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
			clear(obj.buttons);
			//while(obj.buttons.length>0)
				//obj.buttons.pop();
		}
	}
	this.clearButtons=this.createClearButtons();
	this.createClearPanels=function(){
		var obj=this;
		return function(){
			//while(obj.panels.length>0)
			//obj.panels.pop();
			clear(obj.panels);
		}
	}
	this.clearPanels=this.createClearPanels();
		this.createClearLabels=function(){
		var obj=this;
		return function(){
			clear(obj.labels);
			//while(obj.labels.length>0)
			//obj.labels.pop();
		}
	}
	this.clearLabels=this.createClearLabels();
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
				if(inCoordinates(obj.buttons[i],mousePos)){
					//obj.drawBG(context);
					obj.buttons[i].onHover();
					//obj.drawMenu(i);
					obj.drawScreen(obj.bgImage);
					//return;
				}
				else
				{
				
					obj.buttons[i].onMouseOff();
					obj.drawScreen(obj.bgImage);
				}
			}
			for(i=0;i<obj.panels.length;i++)
			{
				//if(obj.panels[i].visible==true&&inCoordinates(obj.panels[i],mousePos)){
					obj.panels[i].hoverEvent(mousePos);
					//return;
				//}
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
			var i;
			//if(obj.hasExclusivePanels()==false){
				for(i=0; i<obj.buttons.length; i++){
					if(inCoordinates(obj.buttons[i],mousePos)&&obj.buttons[i].status!="disabled"){
						obj.buttons[i].onClick();
						//break;
						//return;
					}
				}
			//}
			for(i=0;i<obj.panels.length;i++)
			{
				if(obj.panels[i].visible==true&&inCoordinates(obj.panels[i],mousePos)){
					obj.panels[i].onClick(mousePos);
					//break;
					//return;
				}
			}
		}
	}
	this.clickEvent=this.createClickEvent();

	this.createHasExclusivePanels=function(){
		var obj=this;
		return function(){
			for(i=0;i<obj.panels.length;i++)
			{
				if(obj.panels[i].exclusiveControl==true){
					
					return true;
				}
			}
			return false;
		}
	}
	this.hasExclusivePanels=this.createHasExclusivePanels();

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
			obj.sortButtons();
			obj.drawLowButtons();

			//obj.drawMenu(-1);
			obj.drawPanels();
			obj.drawHighButtons();
			//obj.drawMenu(-1);
		}
	}
	this.drawScreen=this.createDrawScreen();
	canvas.addEventListener('mousemove', this.hoverEvent, false);
	canvas.addEventListener('mousedown', this.clickEvent, false);
	document.onkeydown = this.keyEvent;
	

}

