//Collision
function cirCol(r1, r2){
	mx1=r1.x+(r1.width/2);
					my1=r1.y+(r1.height/2);
					mx2=r2.x+(r2.width/2);
					my2=r2.y+(r2.height/2);
					dx=(mx1-mx2);
					dy=(my1-my2);
					d=Math.sqrt((dx*dx)+(dy*dy))
					if(d<=(r1.width/2)+(r2.width/2)){
					return true;}
					else{
					return false;}

}
			function recCol(r1,r2) { 
					return !(r2.x>(r1.x+r1.width)|| 
							 (r2.x+r2.width)<(r1.x)|| 
							 (r2.y)>(r1.y+r1.height)|| 
							 (r2.y+r2.height)<r1.y); 
			  
			} 
