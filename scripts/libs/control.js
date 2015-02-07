	 
function track(x,y){
cam.x=x;
cam.y=y;
}

function gun(){

	cursor.x=mousex+cam.x-500;
	cursor.y=mousey+cam.y-300;
}


function cameradot(){
if((camdot.x!=cursor.x)||(camdot.y!=cursor.y)){
d=getTwoPointVector(camdot,cursor);

if(d>100){
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