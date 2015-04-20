var cargoPageNo=0;
function CreateCargoCategoryButtonHandler(parentMenu, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			populateCargoPanel(parentMenu, lbutton.name);
		}
}
function populateCategoryButtons(parentMenu, parentPanel){
		var i;
	var x=130;
	for(i=0;i<cargoCategories.length;i++)
	{

		var newButton=new Button(cargoCategories[i],x,125,56,56,"","Epistolar",15,"black", cargoCategoryButtons[i]);
		//newButton.highlightImage=coinImg;

		newButton.onClick=CreateCargoCategoryButtonHandler(parentMenu, newButton);
		parentPanel.addButton(newButton);
		x+=47;
	}
}
function addCargoMenu(){
	var cargoMenu=new staticScreen();




	var pnlInventory=new Panel(70,60,505,510,null);
	var pnlDetails=new Panel(575,72,368,508,null);

	pnlDetails.visible=true;
	pnlInventory.visible=true;

	populateCategoryButtons(cargoMenu,pnlInventory);

	addDefaultButtons(cargoMenu);

	cargoMenu.addPanel(pnlInventory);
	cargoMenu.addPanel(pnlDetails);
	populateCargoPanel(cargoMenu, "Other");//should be "All" but we just use "Other" since we have no items in that category yet
	cargoMenu.drawScreen(cargoMenuBG);
}

function CreateCargoItemButtonHandler(parentMenu, button, cargo)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){

			//var pnlDetails=createCargoDetailsPanel(item);
			//parentMenu.addPanel(pnlDetails);
			parentMenu.panels[1].clearLabels();
			parentMenu.panels[1].addLabel(new Label(590,100,100,25,"Name: "+cargo.name,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,150,100,25,"Units owned: "+cargo.amount,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,200,100,25,"Type: "+cargo.type,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,250,100,25,"Weight/unit: "+cargo.unitWeight,"Bebas",15,"black"));
			parentMenu.panels[1].addLabel(new Label(590,300,100,25,"Total weight: "+cargo.unitWeight*cargo.amount,"Bebas",15,"black"));
			parentMenu.drawScreen(parentMenu.bgImage);
		}
}


/*function createCargoDetailsPanel(cargo){
	
	pnlDetails.name="Details";
	
	//add labels: "You paid:" and maybe common market prices per region
	
	return pnlDetails;
}*/
function addScrollButtons(parentMenu, parentPanel,type)
{
	var upButton=new Button("UP",465,175,50,40,"","Epistolar",15,"black", upArrowImg);
	upButton.highlightImage=coinImg;
	upButton.onClick=createScrollButtonHandler(parentMenu, upButton,type, false);
	var downButton=new Button("DOWN",462,465,50,40,"","Epistolar",15,"black", downArrowImg);
	downButton.highlightImage=coinImg;
	downButton.onClick=createScrollButtonHandler(parentMenu, downButton, type, true);
	parentPanel.addButton(upButton);
	parentPanel.addButton(downButton);

}
function createScrollButtonHandler(parentMenu, button,type,down)
{
	var lbutton=button;
	return function(){
		if(down==false&&cargoPageNo>0)
		{
			cargoPageNo--;
			populateCargoPanel(parentMenu, type);
			parentMenu.drawScreen(cargoMenuBG);
		}
		else if(down==true)//note: this code allows indefinite scrolling down
		{
			cargoPageNo++;
			populateCargoPanel(parentMenu, type);
			parentMenu.drawScreen(cargoMenuBG);
		}
	}
}


function populateCargoPanel(parentMenu, type)// i is index where the category's colored tab is stored in categoryLabels[]. Kind of redundant.
{
	parentMenu.panels[0].clearButtons();
	parentMenu.panels[0].clearLabels();
	
	populateCategoryButtons(parentMenu,parentMenu.panels[0]);
	var tabIndex=cargoCategories.indexOf(type);
	parentMenu.panels[0].panelButtons[tabIndex].status="disabled";
	addScrollButtons(parentMenu, parentMenu.panels[0],type);
	var x=130;
	var y=180;
	var i;
	var columns=4;
	var columnIndex=0;
	var rows=4;
	var pageIndex=0;
	var rowIndex=0;
	var fetcher=new CargoRecordInfoFetcher();
	for(i=0;i<gameState.cargo.length;i++){
		var item=gameState.cargo[i];

			if(columnIndex==columns)
		{
			y+=85;
			x=130;
			columnIndex=0;
			rowIndex++;
		}
		if(rowIndex==rows){//move to next page
			rowIndex=0;
			columnIndex=0;
			y=180;
			pageIndex++;

		}
	
		if(rowIndex<=rows)
		{
			//alert("Row index <=rows");
			if(type=='Other' || item.type==type)
			{
				//alert("Column index: "+columnIndex+"; row index: "+rowIndex);
				//var buttonImg = document.createElement('img');
				//buttonImg.src =  fetcher.getImageSrc(item.name);
				if(pageIndex==cargoPageNo){
					//alert("Right page!");
					var newButton=new Button(item.name,x,y,80,80,"","Bebas",15,"black",fetcher.getImageSrc(item.name));
					newButton.highlightImage=coinImg;
					var newLabel=new Label(x,y+50,82,30,item.amount+" "+item.name,"Bebas",15,"black");
					newLabel.bgImage=scrollSmallImg;

					var lblTag=new Label(x,y,47,31,"","Bebas",15,"black");
					var catIndex=cargoCategories.indexOf(item.type);

					lblTag.bgImage=cargoCategoryLabels[catIndex];
					/*var priceLabel=new Label(x+47,15,33,31,item.price,"Bebas",15,"black");
					priceLabel.bgImage=coinImg;*/
					//console.log(parentMenu);
					newButton.onClick=CreateCargoItemButtonHandler(parentMenu, newButton, item);
					parentMenu.panels[0].addButton(newButton);//add to inventory panel
					parentMenu.panels[0].addLabel(newLabel);
					parentMenu.panels[0].addLabel(lblTag);
					//parentMenu.panels[0].addLabel(priceLabel);
					x+=85;
				}
				columnIndex++;
				//parentMenu.drawScreen(parentMenu.bgImage);
			}
			
		}
		

	}
	parentMenu.drawScreen(cargoMenuBG);
	//parentMenu.panels[0].draw(context);
}
