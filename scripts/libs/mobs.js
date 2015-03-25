 function camera(x,y){
	this.x=x;
	this.y=y;
	this.cx=0;
	this.cy=0;
	this.d=0;
	this.speed=0;
	this.midX = this.x + this.width / 2;
	this.midY = this.y + this.height / 2;
	this.offx;
	this.offy;
	this.start = function(offx,offy){
							this.offx=offx;
							this.offy=offy;
							context.save();
							context.translate(-(this.x+offx), -(this.y+offy));
	}
	this.end = function(){
	context.translate((this.x+this.offx), (this.y+this.offy));
	context.restore();
	}
	 }

	 
	 function background(x,y,width,height,source){
this.source=source;
this.x=0;
this.y=0;
this.angle=0;
this.width=width;
this.height=height;
this.color="white";
}

	function dot(x,y,width,height,color){
	this.x=x || 0;
	this.y=y || 0;
	this.width=width || 5;
	this.height=height || 5;
	this.color=color||"blue";
	this.cx=0;
	this.cy=0;
	}


function ship(x,y,width,height,color){
this.x=x;
this.y=y;
this.height=height;
this.width=width;
this.color=color||"red";
this.cx=0;
this.cy=0;

this.angle=0;

this.sprite = new AnimatedSprite('img/sprites/bangkasprite.png',this.width,this.height,4);
this.draw= function(){
this.sprite.draw(context,this.x,this.y,this.height,this.width,this.angle+90);//TODO get sensible (rotated) sprite instead of rotating in code
}




}





