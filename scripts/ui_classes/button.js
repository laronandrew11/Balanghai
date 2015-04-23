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
	this.highZOrder=false;

	this.status="enabled";//or "highlighted" or "disabled"
	this.disabledImage=null;
	this.highlightImage=coinImg;

	this.createDraw = function(context) {
		var obj = this;
		return function(context) //TODO: optimize
		{
			var image;
			switch(obj.status)
			{
				case "enabled": case "highlighted":
					image=obj.bgImage;
					break;
			//	case "highlighted":
				//	image=obj.highlightImage;
				//	break;
				case "disabled":
					image=obj.disabledImage;
					break;
			}
			if(image!=null)
			{
				context.drawImage(image,obj.x,obj.y,obj.width,obj.height); 
				if(obj.status=="highlighted")
				{
					context.globalAlpha=0.25;
					context.drawImage(obj.highlightImage,obj.x,obj.y,obj.width,obj.height); 
					context.globalAlpha=1;
				}
			}
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
			this.status="enabled";
	}
	this.onClick;
	this.onHover=function(){
		if(this.status=="enabled")
			this.status="highlighted";
		//this.defaultHover(context, "yellow", 18);
	};
	
}