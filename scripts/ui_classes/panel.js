function Panel(x,y,width,height, bgImage){
	var panelButtons=[];
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
			context.drawImage(bgImage,x,y,width,height); 
			obj.drawLabels();
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
			obj.visible=false;
			//TODO remove listeners
		}
	}
	this.clearPanel=this.createClearPanel();

	this.onClick=function(mousePos)
	{
		for(i=0; i<panelButtons.length; i++){
			if(inCoordinates(panelButtons[i],mousePos)){
				panelButtons[i].onClick();
				return;
			}
		}
	}
	this.removeListeners=function(){
		//canvas.removeEventListener('mousemove', this.hoverEvent);
		//canvas.removeEventListener('mousedown', this.clickEvent);
	}
	
}