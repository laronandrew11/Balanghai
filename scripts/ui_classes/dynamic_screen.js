//global variables come from game.js, camera.js and other libs
function DynamicScreen(cam, bg, cursor, camdot){
	this.createInitialize=function()
	{
		var obj=this;
		return function(){
			cam = new camera(500,300);
			bgObject= new background(0,0,3000,1200,bg);
			cursor = new dot(0,0,5,5,"blue");
			alert(typeof cursor);
			camdot = new dot(500,300,5,5,"yellow");
			obj.loop();
		}
	}
	this.initialize=this.createInitialize();
	this.createUpdate=function()
	{
		var obj=this;
		return function(){
			document.onkeydown = keydown;
			document.onkeyup = keyup; 
			/*virtual camera stuff*/
			gun();
			cameradot();
			track(camdot.x,camdot.y);
		}
	}
	this.update=this.createUpdate();
	this.createDraw=function()
	{
		var obj=this;
		return function(){
			offx=-500;
			offy=-300;
		
			var xpos = cam.x;
			var ypos = cam.y;
			context.save();
			context.translate(-(xpos+offx), -(ypos+offy));

			//VIRTUAL CAMERA: 
			cam.start(-500,-300);				

			obj.refresh();	
			//TODO draw stuff here

		/* VIRTUAL CAMERA:*/
		 	drawrec(cursor,0,cursor.color);
			drawrec(camdot,0,camdot.color);

								
			context.translate((xpos+offx), (ypos+offy));
			context.restore();
			cam.end();
		}
	}
	this.draw=this.createDraw();
	this.createLoop=function(){
		var obj=this;
		return function(){
			obj.update();
			timer+=1/100;
			obj.draw();
			fps=10;

			setTimeout(loop,fps);
		}
	}
	this.loop=this.createLoop();
	this.refresh=function(){
		context.fillStyle="gray";
		context.fillRect(0,0,1000,600);
			drawrotated(bgObject.source,bgObject,bgObject.angle);
	}


	this.keyEvent=function(event){
		var key = event.keyCode;
		switch(key)
		{
			default: break;
		}
	}
	this.createClickEvent=function(evt)
	{
		var obj=this;
		return function(evt){
			var mousePos = getMousePos(canvas, evt);
			for(i=0; i<obj.buttons.length; i++){
				if(inCoordinates(obj.buttons[i],mousePos)){
					obj.buttons[i].onClick();
					return;
				}
			}
			for(i=0;i<obj.panels.length;i++)
			{
				if(obj.panels[i].visible==true&&inCoordinates(obj.panels[i],mousePos)){
					obj.panels[i].onClick(mousePos);
					return;
				}
			}
		}
	}
	this.clickEvent=this.createClickEvent();
	this.deactivate=function()
	{
		//TODO remove all items from screen/memory
	}
	//TODO add separate listeners for dynamic screen instead of using global listeners
	//canvas.addEventListener('mousedown', this.clickEvent, false);
	//document.onkeydown = this.keyEvent;
}