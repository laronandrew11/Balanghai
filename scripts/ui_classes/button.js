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

	this.status="default";//or "highlighted" or "disabled"
	this.disabledImage;
	this.highlightImage=coinImg;

	this.createDraw = function(context) {
		var obj = this;
		return function(context) //TODO: optimize
		{
			var image;
			switch(obj.status)
			{
				case "default":
					image=obj.bgImage;
					break;
				case "highlighted":
					image=obj.highlightImage;
					break;
				case "disabled":
					image=obj.disabledImage;
					break;
			}
			context.drawImage(image,obj.x,obj.y,obj.width,obj.height); 
			//console.log("Color "+this.color);
			context.fillStyle = obj.color;
			context.font = obj.font;
			context.fillText(obj.text, x, y);

		}
	}

	this.draw=this.createDraw();

	/*this.defaultHover=function(context, color, size){
		context.fillStyle = color;
		context.font = size + "px " + this.style;
		context.fillText(this.text, this.x, this.y);
	}*/
	this.onMouseOff=function(){
		if(this.status=="highlighted")
			this.status="default";
	}
	this.onClick;
	this.onHover=function(){
		if(this.status=="default")
			this.status="highlighted";
		//this.defaultHover(context, "yellow", 18);
	};
	
}