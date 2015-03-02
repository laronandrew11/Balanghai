	 
function track(x,y){
cam.x=x;
cam.y=y;
}

function gun(){
	cursor.x=mousex+cam.x-500;
	cursor.y=mousey+cam.y-300;
	

	

	
}

function move(){
d=getTwoPointVector(boat,heading);

if(d>10){
	
boat.x+=boat.cx/20*gameState.getMinSpeed();
boat.y+=boat.cy/20*gameState.getMinSpeed();
gameState.mapX=boat.x/mapScale;
gameState.mapY=boat.y/mapScale;
}
else arrivedAtHeading=true;
}

function set(){
heading.x=cursor.x;
heading.y=cursor.y;
arrivedAtHeading=false;


}



function cameradot(){	


if((camdot.x!=cursor.x)||(camdot.y!=cursor.y)){
d=getTwoPointVector(camdot,boat);

if(d>10){
camdot.x+=camdot.cx*d/20;
camdot.y+=camdot.cy*d/20;
}





if(camdot.y<300){
camdot.y=300;
}

if(camdot.y>bgObject.height-300){
camdot.y=bgObject.height-300;
}

if(camdot.x<500){
camdot.x=500;
}

if(camdot.x>bgObject.width-500){
camdot.x=bgObject.width-500;
}

}

}