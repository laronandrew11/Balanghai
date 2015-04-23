

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
canvas.onmousemove=mousemove;
canvas.onmousedown=mousedown;
canvas.onmouseup=mouseup;
	var bg = document.createElement('img');
	bg.src = 'img/travelmap.png';


var dynamicScreens=[];
var heading;
var mousex;
var mousey;
var dynamicScreenActive=false;

var timer=0;
var secondCounter=0;
var fps=10;
var arrivedAtHeading=false;
var mapScale=4;
//var destinationSettlement;

/*END GLOBAL VARIABLES*/

//Initialize
/*function init(){
	cam = new camera(500,300);
	bgObject= new background(0,0,3000,1200,bg);
	cursor = new dot(0,0,5,5,"blue");
	camdot = new dot(500,300,5,5,"yellow");

	
	loop();
}

//Enter game loop
function loop(){
	update();
	timer+=1/100;
	draw();
	fps=10;

	setTimeout(loop,fps);
}

function update(){
	document.onkeydown = keydown;
	document.onkeyup = keyup; 
	
	
/*virtual camera stuff*/
/*gun();
cameradot();
track(camdot.x,camdot.y);
	
}


function draw(){


	offx=-500;
	offy=-300;
	
	var xpos = cam.x;
	var ypos = cam.y;
	context.save();
	context.translate(-(xpos+offx), -(ypos+offy));

	//VIRTUAL CAMERA: 
	cam.start(-500,-300);				

	refresh();	
	//TODO draw stuff here

/* VIRTUAL CAMERA:*/
 /*	drawrec(cursor,0,cursor.color);
	drawrec(camdot,0,camdot.color);

						
	context.translate((xpos+offx), (ypos+offy));
	context.restore();
	cam.end();

}


function refresh(){
context.fillStyle="gray";
context.fillRect(0,0,1000,600);
	drawrotated(bgObject.source,bgObject,bgObject.angle);
}*/



function keydown(event){
			var ascii=event.keyCode;

			
				

				
				
			}
			
			
function keyup(event){
				var ascii=event.keyCode;
				

				

		
			}
			
			
function mousedown(){
	mousex=event.offsetX;
	mousey=event.offsetY;
	//if(dynamicScreenActive==true)
		//set();
}

function mousemove(){
	mousex=event.offsetX;
	mousey=event.offsetY;

}
function mouseup(){
	mousex=event.offsetX;
	mousey=event.offsetY;

}

