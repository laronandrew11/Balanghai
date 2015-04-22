function Panel(x,y,width,height, bgImage){
	this.panelButtons=[];
	this.labels=[];
	this.textboxes=[];
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.bgImage=bgImage;
	this.visible=false;
	this.name=null;
	this.exclusiveControl=false;
	this.createDraw = function(context){
		var obj=this;
		return function(context){
			if(obj.bgImage!=null)
				context.drawImage(obj.bgImage,x,y,width,height); 
			
			obj.drawTextboxes();
			obj.drawMenu(-1);
			obj.drawLabels();
		}
	};
	this.draw=this.createDraw();

	this.createAddButton=function(button){
		var obj=this;
		return function(button){
			obj.panelButtons.push(button);

		}
	}
	this.addButton=this.createAddButton();
	this.createClearButtons=function(){
		var obj=this;
		return function(){
			while(obj.panelButtons.length>0)
				obj.panelButtons.pop();
		}
	}
	this.clearButtons=this.createClearButtons();
	this.createRemoveButtonByName=function(name){
		var obj=this;
		return function(name){
			removeByValue(obj.panelButtons, name);
		}

	}
	this.removeButtonByName=this.createRemoveButtonByName();
	this.createAddLabel=function(label)
	{
		var obj=this;
		return function(label){
			obj.labels.push(label);
		}

	}
	this.createClearLabels=function(){
		var obj=this;
		return function(){
			while(obj.labels.length>0)
				obj.labels.pop();
		}
	}
	this.clearLabels=this.createClearLabels();
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

	this.createAddTextbox=function(textbox){
		var obj=this;
		return function(textbox){
			obj.textboxes.push(textbox);
		}
	}
	this.addTextbox=this.createAddTextbox();
		this.createDrawTextboxes=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.textboxes.length; i++){
					obj.textboxes[i].draw(context);
			}
		}
	}
	this.drawTextboxes=this.createDrawTextboxes();

	
	this.createDrawMenu=function(undraw)
	{
		var obj=this;
		return function(undraw){
			var i;
			for(i=0; i<obj.panelButtons.length; i++){
				if(i != undraw)
				{
					obj.panelButtons[i].draw(context);
				}
			}
		}
		
	}
	this.drawMenu=this.createDrawMenu();
	this.createClearPanel=function(){
		var obj=this;
		return function(){
			//hiding the panel is done from parent screen
			obj.clearButtons();
			obj.visible=false;
			//TODO remove listeners
		}
	}
	this.clearPanel=this.createClearPanel();

		this.createHoverEvent = function(mousePos) {
		var obj = this;
		return function(mousePos) //TODO: optimize
		{
			
			var i;
			for(i=0; i<obj.panelButtons.length; i++){
				if(inCoordinates(obj.panelButtons[i],mousePos)){
					//obj.drawBG(context);

					obj.panelButtons[i].onHover();
					//obj.drawMenu(i);
					
					//return;
				}
				else
				{
				
					obj.panelButtons[i].onMouseOff();
				
				}
			}

		}
	}

	this.hoverEvent=this.createHoverEvent();

	this.createOnClick=function(mousePos)
	{
		var obj=this;
		return function(mousePos)
		{
			for(i=0; i<obj.panelButtons.length; i++){
				if(inCoordinates(obj.panelButtons[i],mousePos)&&obj.panelButtons[i].status!="disabled"){
					obj.panelButtons[i].onClick();
					return;
				}
			}
			for(i=0; i<obj.textboxes.length; i++){
				if(inCoordinates(obj.textboxes[i],mousePos)){
					obj.textboxes[i].onClick();
					return;
				}
			}
		}
	}
	this.onClick=this.createOnClick();
	this.removeListeners=function(){
		//canvas.removeEventListener('mousemove', this.hoverEvent);
		//canvas.removeEventListener('mousedown', this.clickEvent);
	}
	
}