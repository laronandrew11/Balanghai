

var options = new Array();
var characters = new Array();

function howTo(){

	
}

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
	for(i=0; i<options.length; i++){
		if(i != undraw)
			options[i].drawText(context);
	}
}

function drawChars(){
	var i;
	for(i=0; i<characters.length; i++){
		//if(i != undraw)
			characters[i].drawText(context);
	}
}
selection();
function drawSelection(){
	
	context.fillStyle = "black";
	context.fillRect(250,150,300,200);
	context.fillStyle = "white";
	context.fillText("Choose a character:", 290, 180);
	drawChars();
}

function addCharacter(x,y,w,h,text,style,size,color){
	var op = new buttonText(x,y,w,h,text,style,size,color);
	
	characters.push(op);
}

function selection(){
	addCharacter(320,240,120,11,"J-Ellie","Lucida Console",15,"pink");
	addCharacter(370,270,120,11,"Bob-lle","Lucida Console",15,"green");
	addCharacter(420,300,120,11,"Bum-perl","Lucida Console",15,"white");
}

function hoverEvent(evt) {
	var mousePos = getMousePos(canvas, evt);
	if(inCoordinates(options[0],mousePos)){
		drawBG();
		defaultHover(options[0], "#ffff66", 20);
		drawMenu(0);
	}
	else if(inCoordinates(options[1],mousePos)){
		drawBG();
		defaultHover(options[1], "#ffff66", 20);
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

function selectClickEvent(evt){


	var mousePos = getMousePos(canvas, evt);
		if(inCoordinates(characters[0],mousePos)){
			canvas.removeEventListener('mousedown', clickEvent);
			drawBG();
			drawMenu();
			canvas.addEventListener('mousemove', hoverEvent, false);
			canvas.addEventListener('mousedown', clickEvent, false);
			console.log("You picked J-Ellie");
			var name = prompt("Please enter your name", "namehere");
			currentPlayer = new rectangle(name,random(50,950),random(50,550));
			currentPlayer.kind=0;
			//currentPlayer.source=
			createPlayer();
		}
		else if(inCoordinates(characters[1],mousePos)){
			canvas.removeEventListener('mousedown', clickEvent);
			//createPlayer();
			drawBG();
			drawMenu();
			canvas.addEventListener('mousemove', hoverEvent, false);
			canvas.addEventListener('mousedown', clickEvent, false);
			console.log("You picked Bob-lle");
			var name = prompt("Please enter your name", "namehere");
			currentPlayer = new rectangle(name,random(50,950),random(50,550));
			currentPlayer.kind=1;
			//currentPlayer.source=
			createPlayer();
		}
		else if(inCoordinates(characters[2],mousePos)){
			canvas.removeEventListener('mousedown', clickEvent);
			//createPlayer();
			drawBG();
			drawMenu();
			canvas.addEventListener('mousemove', hoverEvent, false);
			canvas.addEventListener('mousedown', clickEvent, false);
			console.log("You picked Bum-perl");
			var name = prompt("Please enter your name", "namehere");
			currentPlayer = new rectangle(name,random(50,950),random(50,550));
			currentPlayer.kind=2;
			//currentPlayer.source=
			createPlayer();
		}
}

function clickEvent(evt) {
        var mousePos = getMousePos(canvas, evt);
		if(inCoordinates(options[0],mousePos)){
			init();
			removeListeners();
			canvas.removeEventListener(selectClickEvent);
		}
		else if(inCoordinates(options[1],mousePos)){
			removeListeners();
			//createPlayer();
			drawSelection();
			canvas.addEventListener('mousedown', selectClickEvent, false);
			
		}
}


function defaultHover(b,color,size){
	context.fillStyle = color;
	context.font = size + "px " + b.style;
	context.fillText(b.text, b.x, b.y);
}

function addOption(x,y,w,h,text,style,size,color){
	var op = new buttonText(x,y,w,h,text,style,size,color);
	
	options.push(op);
}

function optionList(){
	addOption(600,388,116,11,"BATTLE","Epistolar",15,"black");
	addOption(650,350,120,11,"Add player","Epistolar",15,"black");
}

function mainMenu(){
	
	drawBG(); 
	optionList();

	drawMenu();
	canvas.addEventListener('mousemove', hoverEvent, false);
	canvas.addEventListener('mousedown', clickEvent, false);
	document.onkeydown = keypress;
	
	//drawSelection();



	
	
}

function keypress(event){
	var key = event.keyCode;
	
	if (keyConfigurations[key]){
	  var name = keyConfigurations[key].player.name;
	  var type = keyConfigurations[key].key;
	  console.log(name + "'s button " + type + " was pressed.");
	}
	if (state < 5){
		configurePlayer(key);
		state = state + 1 % 5;
	}
}

function configurePlayer(key){
		drawBG(); 
		drawMenu();
	// check if keyConfigurations[key] already exists
	
	switch(state){
		case 1:
			keyConfigurations[key] = {"player":currentPlayer, "key": 1};
			console.log("Press your forward button.");
				context.fillStyle = "black";
				context.fillText("PRESS YOUR FORWARD BUTTON", 290, 180);
			break;
		case 2:
			keyConfigurations[key] = {"player":currentPlayer, "key": 2};
			console.log("Press your fire button.");
					context.fillStyle = "black";
					context.fillText("PRESS YOUR FIRE BUTTON", 290, 180);
			break;
		case 3: 
			keyConfigurations[key] = {"player":currentPlayer, "key": 3};
			
			currentPlayer.team = prompt("Please enter your team name", "namehere");
			console.log("Configuration finished for player " + currentPlayer.name+"team:"+currentPlayer.team);
			
			canvas.addEventListener('mousemove', hoverEvent, false);
			canvas.addEventListener('mousedown', clickEvent, false);
		break;
		
	}	
}
	
	var state;
    var name;
	var currentPlayer;

	

function createPlayer(){
state = 0;
if(state == 0){
drawBG(); 
drawMenu();
context.fillStyle = "black";
 context.fillText("PRESS YOUR SPIN BUTTON", 290, 180);
 console.log("Press your spin button.");
 }
 
 players.push(currentPlayer);
 state = 1;
 


}		
