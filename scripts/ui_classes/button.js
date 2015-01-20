function Button(x,y,width,height,text,style,size,color){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text=text;
	this.style = style;
	this.size = size;
	this.font = this.size + "px " + this.style;
	this.color = color;
	this.drawText = function(context){
		context.fillStyle = color;
		context.font = this.font;
		context.fillText(text, x, y);
	};
	this.defaultHover=function(context, color, size){
		context.fillStyle = color;
		context.font = size + "px " + this.style;
		context.fillText(this.text, this.x, this.y);
	}
	this.onClick;
	
}