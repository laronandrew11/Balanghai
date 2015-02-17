	 
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
boat.x+=boat.cx*d/20;
boat.y+=boat.cy*d/20;
}
}

function set(){
heading.x=cursor.x;
heading.y=cursor.y;


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