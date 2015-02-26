function Label(x,y,width,height,text,style,size,color){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text=text;
	this.style = style;
	this.size = size;
	this.font = this.size + "px " + this.style;
	this.color = color;
	//this.bgImage=bgImage;

	this.createDraw = function(context) {
		var obj = this;
		return function(context) //TODO: optimize
		{
			//context.drawImage(bgImage,x,y,width,height); 
			//console.log("Color "+this.color);
			context.fillStyle = obj.color;
			context.font = obj.font;
			context.fillText(obj.text, x, y);
		}
	}

	this.draw=this.createDraw();
	
}