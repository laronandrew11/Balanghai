function Panel(x,y,width,height, bgImage){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.bgImage=bgImage;
	this.draw = function(context){
		context.drawImage(bgImage,x,y,width,height); 
	};
	
}