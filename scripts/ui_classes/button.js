function Button(name, x,y,width,height,text,style,size,color,bgImage){
	//TODO add alternate image and "selected" method for buttons that stay highlighted (ship/cargo items)
	this.name=name;
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
			context.drawImage(obj.bgImage,obj.x,obj.y,obj.width,obj.height); 
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