//global variables come from game.js, camera.js and other libs
function DynamicScreen(){
	this.isActive=true;
	this.staticSprites=[];
	this.settlements=[];
	this.labels=[];
	this.panels=[];
	this.createInitialize=function()
	{
		var obj=this;
		return function(){
			cam = new camera(gameState.mapX*mapScale,gameState.mapY*mapScale);
			bgObject= new background(0,0,900*mapScale,500*mapScale,bg);
			cursor = new dot(0,0,5,5,"blue");
			
			camdot = new dot(gameState.mapX*mapScale,gameState.mapY*mapScale,5,5,"yellow");
			boat= new ship(gameState.mapX*mapScale,gameState.mapY*mapScale,47.5,70,"red");
			 getangle(boat,heading);

		//heading = new dot(gameState.mapX*5,gameState.mapY*5,50,50,"red");
		arrivedAtHeading=false;
		dynamicScreenActive=true;
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
			obj.labels[0].text=gameState.gameDate.year+"-"+gameState.gameDate.month+"-"+gameState.gameDate.day;
			/*virtual camera stuff*/
			move();//these functions are in control.js

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
			/*offx=-500;
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
		 	/*drawrec(cursor,0,cursor.color);
			drawrec(camdot,0,camdot.color);

								
			context.translate((xpos+offx), (ypos+offy));
			context.restore();
			cam.end();*/

			var i;
			cam.start(-500,-300);				
			obj.refresh();//redraws the background

			for(i=0;i<obj.staticSprites.length;i++)
			{
				obj.staticSprites[i].draw(context);
			}
			//drawrec(cursor,0,cursor.color);
			//drawrec(camdot,0,camdot.color);
			//drawrec(boat,0,"white");
			boat.draw();
		
			cam.end();
			context.drawImage(borderImg,0,0,1000,600); 
			obj.drawPanels();
			obj.drawLabels();
		}
	}
	this.draw=this.createDraw();
	this.createLoop=function(){
		var obj=this;

		return function(){
		
				obj.update();
				var oldTimer=timer;
				timer+=5/100;
				if(Math.floor(timer)-Math.floor(oldTimer)==1)
				{
					secondCounter++;
				}
				if(secondCounter==1)
				{
					gameState.gameDate.advanceDate();
					if(gameState.gameDate.day==15)
						triggerTranslationQuest(obj);
					secondCounter=0;
					
				}
				obj.draw();
				if(arrivedAtHeading==true)
					obj.checkForSettlement();
				if(dynamicScreenActive==true)
					setTimeout(obj.loop,fps);
			
	
		}
	}
	this.loop=this.createLoop();
	this.checkForSettlement=function(){
		var i=0;
		for(i=0;i<this.settlements.length;i++)
		{
			//console.log(this.settlements[i].name);

			if(this.settlements[i].name!=gameState.settlement&&Math.abs(this.settlements[i].mapX*mapScale-heading.x)<=10 && Math.abs(this.settlements[i].mapY*mapScale-heading.y)<=10)//settlement and heading are close enough to each other
			{

				var settlement=this.settlements[i];
				dynamicScreenActive=false;
				gameState.mapX=settlement.mapX;
				gameState.mapY=settlement.mapY;
				gameState.settlement=settlement.name;
				//alert(settlement.name);
				addSettlementMenu(settlement);
				
				
			}
		}
	}
	this.refresh=function(){
		
		//context.fillStyle="gray";
		context.fillRect(0,0,1000,600);
			drawrotated(bgObject.source,bgObject,bgObject.angle);
	}
	this.addStaticSprite=function(sprite){
		this.staticSprites.push(sprite);
	}
	this.addSettlement=function(sprite, settlement)
	{
		this.staticSprites.push(sprite);
		this.settlements.push(settlement);
	}

	this.createAddLabel=function(label)
	{
		var obj=this;
		return function(label){
			obj.labels.push(label);
		}

	}
	this.addLabel=this.createAddLabel();
	this.createDrawLabels=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.labels.length; i++){
					obj.labels[i].draw(context);
					//alert("Label drawn");
			}
		}
	}
	this.drawLabels=this.createDrawLabels();

	this.createAddPanel=function(panel)
	{
		var obj=this;
		return function(panel){
			obj.panels.push(panel);
		}

	}
	this.addPanel=this.createAddPanel();
	this.createDrawPanels=function()
	{
		var obj=this;
		return function(){
			var i;
			for(i=0; i<obj.panels.length; i++){
				if(obj.panels[i].visible==true)
				{
					obj.panels[i].draw(context);
					//alert("Panel drawn");
				}
			}
		}
	}
	this.drawPanels=this.createDrawPanels();

	this.keyEvent=function(event){
		var key = event.keyCode;
		switch(key)
		{
			default: break;
		}
	}
	this.createClickEvent=function(evt)
	{
		/*var obj=this;
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
		}*/
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