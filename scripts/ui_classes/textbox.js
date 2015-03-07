var Textbox=function(parentScreen, x,y,width,height)
{
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text="";
	//context.fillStyle = color;
	//context.font = size + "px " + b.style;
	//context.fillText(b.text, b.x, b.y);


	this.createKeyEvent=function(event){
		var obj=this;
		return function(event){
			var key = event.keyCode;
			if(key==8)
			{
				obj.text=obj.text.slice(0,-1);
			}
			else{
				obj.text+=String.fromCharCode(key);
				//TODO: check for non-ascii values
			}
			obj.redraw();
			/*switch(key)
			{
				default: break;
			}*/
		}
	}
	this.keyEvent=this.createKeyEvent();
	this.draw=function(){
		context.fillText(this.text, this.x, this.y, this.width, this.height);
	}
	this.redraw=function(){
		parentScreen.drawScreen(parentScreen.bgImage);
	}
	this.onClick=function(){
		document.onkeydown=this.keyEvent;
	}
}