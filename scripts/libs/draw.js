			function drawrotated(img,object,angle){
							var xpos = object.x+object.width/2
							var ypos = object.y+object.height/2
							context.save();
							context.translate(xpos, ypos);
							context.rotate(angle * Math.PI / 180);
							context.translate(-xpos, -ypos);
							
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
						
						
						