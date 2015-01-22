function Button(x,y,width,height,text,style,size,color,bgImage){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text=text;
	this.style = style;
	this.size = size;
	this.font = this.size + "px " + this.style;
	this.color = color;
	this.bgImage=bgImage;

	this.createDraw = function(context) {
		var obj = this;
		return function(context) //TODO: optimize
		{
			context.drawImage(bgImage,x,y,width,height); 
			//console.log("Color "+this.color);
			context.fillStyle = obj.color;
			context.font = obj.font;
			context.fillText(text, x, y);
		}
	}

	this.draw=this.createDraw();

	this.defaultHover=function(context, color, size){
		context.fillStyle = color;
		context.font = size + "px " + this.style;
		context.fillText(this.text, this.x, this.y);
	}
	this.onMouseOff=function(context){
		context.fillStyle = this.color;
		context.font = this.font;
		context.fillText(this.text, x, y);
	}
	this.onClick;
	this.onHover=function(context){
		this.defaultHover(context, "yellow", 18);
	};
	
}