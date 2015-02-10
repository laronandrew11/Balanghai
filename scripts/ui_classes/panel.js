function Panel(x,y,width,height, bgImage){
	this.panelButtons=[];
	this.labels=[];
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.bgImage=bgImage;
	this.visible=false;
	this.createDraw = function(context){
		var obj=this;
		return function(context){
			if(obj.bgImage!=null)
				context.drawImage(bgImage,x,y,width,height); 
			obj.drawLabels();
			obj.drawMenu(-1);
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

	this.createOnClick=function(mousePos)
	{
		var obj=this;
		return function(mousePos)
		{
			for(i=0; i<obj.panelButtons.length; i++){
				if(inCoordinates(obj.panelButtons[i],mousePos)){
					obj.panelButtons[i].onClick();
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