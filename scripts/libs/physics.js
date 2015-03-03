function random(min, max){
	return Math.floor(Math.random() * (max - min * 1)) + min;
}

function getangle(object,direction){

		        mx=direction.x+direction.width/2;
				my=direction.y+direction.height/2;
				sx=object.x+object.width/2;
				sy=object.y+object.height/2;
				dx=(mx-sx);
				dy=(my-sy);
				d=Math.sqrt((dx*dx)+(dy*dy));
				object.cx=dx/d;
				object.cy=dy/d;
				
				object.angle=(Math.atan2(object.cy,object.cx)*180/Math.PI)
				return d;
}



//from two objects,return distance
function getTwoPointVector(object,direction){

		        mx=direction.x+direction.width/2;
				my=direction.y+direction.height/2;
				sx=object.x+object.width/2;
				sy=object.y+object.height/2;
				dx=(mx-sx);
				dy=(my-sy);
				d=Math.sqrt((dx*dx)+(dy*dy));
				object.cx=dx/d;
				object.cy=dy/d;
				return d;
}

function getdistance(object,object2){
		        mx=object2.x+object2.width/2;
				my=object2.y+object2.height/2;
				sx=object.x+object.width/2;
				sy=object.y+object.height/2;
				dx=(mx-sx);
				dy=(my-sy);
				d=Math.sqrt((dx*dx)+(dy*dy));
				return d;
}




//gives the object a vector using its angle.or given the angle from the function.
function getvector(object,angle){
				mx=((object.x+object.width/2)+Math.cos((object.angle+angle)*(Math.PI/180)));
				my=((object.y+object.height/2)+Math.sin((object.angle+angle)*(Math.PI/180)));
				sx=object.x+object.width/2;
				sy=object.y+object.height/2;
				dx=(mx-sx);
				dy=(my-sy);
				d=Math.sqrt((dx*dx)+(dy*dy));
				object.cx=dx/d;
				object.cy=dy/d;
}







