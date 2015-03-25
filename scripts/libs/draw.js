			function drawrotated(img,object,angle,alpha){
							var xpos = object.x+object.width/2
							var ypos = object.y+object.height/2
							context.save();
							context.translate(xpos, ypos);
							context.rotate(angle * Math.PI / 180);
							context.translate(-xpos, -ypos);
							context.globalAlpha = alpha||1;
							context.drawImage(img,object.x,object.y,object.width,object.height); 
							
							
							context.restore();
						
						}
						
						
			function drawrec(object,angle,color){
							var xpos = object.x+object.width/2
							var ypos = object.y+object.height/2
							context.save();
							context.translate(xpos, ypos);
							context.rotate(angle * Math.PI / 180);
							context.translate(-xpos, -ypos);
							
							context.fillStyle=color||object.color||"blue";
							context.fillRect(object.x,object.y,object.width,object.height);
							
							
							context.restore();
						
						}
						
			function drawline(x1,y1,x2,y2,color){
							context.beginPath();
							context.strokeStyle=color;
							context.moveTo(x1,y1);
							context.lineTo(x2,y2); 
							context.stroke();
			
			}
		
			
			

			
function AnimatedSprite(source,tileWidth,tileHeight,frames) {
	this.sprite = new Sprite(source);
	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
	this.totalFrames = frames;
	this.timer = 0;
	this.tickFrame = 100;
	this.tick = 0;
	
	this.update = function() {
		this.tick += 10;
		if(this.tick == this.tickFrame) {
			this.timer++;
			this.tick = 0;
		}
		if(this.timer == this.totalFrames)
			this.timer = 0;
	}
	
	this.draw = function(context,x,y,height,width,angle,alpha) {
		context.globalAlpha = alpha||1;
		//context.drawImage(this.sprite.image,this.timer * this.tileWidth,angle,this.tileWidth,this.tileHeight, x,y,width,height);
				var xpos = x+width/2
				var ypos = y+height/2
				context.save();
				context.translate(xpos, ypos);
				context.rotate((angle) * Math.PI / 180); 
				context.translate(-xpos, -ypos);
				
				context.drawImage(this.sprite.image,this.timer * this.tileWidth,0,this.tileWidth,this.tileHeight, x,y,width,height);
		
				context.restore();
		
		
	}
}
						
function Sprite(source, x,y) {
	this.image = new Image();
	this.image.src = source;
	this.x=x;
	this.y=y;
	
	this.draw = function(context) {
		context.drawImage(this.image,this.x,this.y);
	}
}
						
						