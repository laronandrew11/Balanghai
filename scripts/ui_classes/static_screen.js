var buttons = new Array();

function buttonText(x,y,width,height,text,style,size,color){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.text=text;
	this.style = style;
	this.size = size;
	this.font = this.size + "px " + this.style;
	this.color = color;
	this.drawText = function(context){
		context.fillStyle = color;
		context.font = this.font;
		context.fillText(text, x, y);
	};
}

function inCoordinates(b, mousePos){
	if(mousePos.x >= b.x && mousePos.x <= b.x + b.width && mousePos.y >= b.y-10 && mousePos.y <= b.y + b.height)
		return true;
	else 
		return false;
}
	
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}

function drawBG(){	
							context.fillStyle="white";
							context.fillRect(0,0,1000,600);
}

function drawMenu(undraw){
	var i;
	for(i=0; i<buttons.length; i++){
		if(i != undraw)
			buttons[i].drawText(context);
	}
}

function hoverEvent(evt) {
	var mousePos = getMousePos(canvas, evt);
	if(inCoordinates(buttons[0],mousePos)){
		drawBG();
		defaultHover(buttons[0], "#ffff66", 20);
		drawMenu(0);
	}
	else if(inCoordinates(buttons[1],mousePos)){
		drawBG();
		defaultHover(buttons[1], "#ffff66", 20);
		drawMenu(1);
	}
	else{
		drawBG();
		drawMenu();
	}
}

function removeListeners(){
	canvas.removeEventListener('mousemove', hoverEvent);
	canvas.removeEventListener('mousedown', clickEvent);
}

function clickEvent(evt) {
        var mousePos = getMousePos(canvas, evt);
		if(inCoordinates(buttons[0],mousePos)){
			/*init();
			removeListeners();
			canvas.removeEventListener(selectClickEvent);*/
		}
		else if(inCoordinates(buttons[1],mousePos)){
			//removeListeners();
			
		}
}


function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}

function addButton(x,y,w,h,text,style,size,color){
	var op = new buttonText(x,y,w,h,text,style,size,color);
	
	buttons.push(op);
}

function makeButtonList(){
	addButton(600,388,116,11,"BATTLE","Epistolar",15,"black");
	addButton(650,350,120,11,"Add player","Epistolar",15,"black");
}

function staticScreen(){
	
	drawBG(); 
	makeButtonList();
	drawMenu();
	canvas.addEventListener('mousemove', hoverEvent, false);
	canvas.addEventListener('mousedown', clickEvent, false);
	document.onkeydown = keyEvent;
	
	//drawSelection();
	
}

function keyEvent(event){
//key press event listener for this specific screen
	var key = event.keyCode;
	switch(key)
	{
		default: break;
	}
}
