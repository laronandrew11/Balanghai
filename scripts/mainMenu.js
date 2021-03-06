function CreateLoadButtonHandler(parentMenu, button)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var parser=new GameStateParser();
			gameState=parser.loadGame(lbutton.text);
			parentMenu.clearScreen();
			addFleetMenu();
		}
}
function CreateDeleteButtonHandler(parentPanel, button, saveName)//TODO make similar methods for other buttons if needed
{
	var lbutton=button;
	return function(){
			var parser=new GameStateParser();
			if(parser.deleteSave(saveName))
			{
				parentPanel.removeButtonByName(saveName);
				parentPanel.removeButtonByName("DEL"+saveName);
				parentPanel.draw(context);
			}
		}
}
function populateLoadPanel(parentMenu, parentPanel){

	var i;
	var y=100;

	if(localStorage.saveIndex!=undefined)
	{
		var saveIndex=JSON.parse(localStorage.saveIndex);

		for(i=0;i<saveIndex.length;i++)
		{
			var newButton=new Button(saveIndex[i],100,y,100,25,saveIndex[i],"Epistolar",15,"black", buttonBG);
			newButton.onClick=CreateLoadButtonHandler(parentMenu, newButton);
			parentPanel.addButton(newButton);

			var deleteButton=new Button("DEL"+saveIndex[i],210,y,100,25,"DELETE SAVED GAME","Epistolar",15,"black", buttonBG);
			deleteButton.onClick=CreateDeleteButtonHandler(parentPanel, newButton, saveIndex[i]);
			parentPanel.addButton(deleteButton);

			y+=50;
		}
	}
}

function addMainMenu(){
	if(gameState!=undefined)
		gameState.currentMenu="mainMenu";
	var mainMenu=new staticScreen();

	var btnCloseLoadGamePanel=new Button("CLOSE_LOAD",100,56,25,25,"","Epistolar",15,"black", closeButtonBG);
	btnCloseLoadGamePanel.onClick=function(){
		mainMenu.hidePanel(0);
	}
	var btnCloseCreditsPanel=new Button("CLOSE_CREDITS",100,56,25,25,"","Epistolar",15,"black", closeButtonBG);
	btnCloseCreditsPanel.onClick=function(){
		mainMenu.hidePanel(1);
	}

	var pnlLoadGame=new Panel(100,56,357,496,cargoDetailsPanelBG);
	pnlLoadGame.addButton(btnCloseLoadGamePanel);

	populateLoadPanel(mainMenu,pnlLoadGame);

	var pnlCredits=new Panel(100,56,357,496,cargoDetailsPanelBG);
	pnlCredits.addLabel(new Label(100,100,200,50,"Code: ANDREW LARON","Bebas",15,"black"));
	pnlCredits.addLabel(new Label(100,150,200,50,"Additional Code: MIGUEL DUNGAN, JANA AUSTRIA","Bebas",15,"black"));
	pnlCredits.addLabel(new Label(100,200,200,50,"Background Art: NIGEL BINAS","Bebas",15,"black"));
	pnlCredits.addLabel(new Label(100,250,200,50,"Character, Ship and Cargo Art: JANA AUSTRIA","Bebas",15,"black"));
	pnlCredits.addLabel(new Label(100,300,200,50,"Copyright DLSU Game Development Laboratory, 2015.","Bebas",15,"black"));
	pnlCredits.addButton(btnCloseCreditsPanel);


	var dlgPlayerName=new Dialog(mainMenu,"Enter your name","Submit",function(){
		var newPlayerName=dlgPlayerName.userInput;
		gameState=new GameState(newPlayerName);
	
		populateSettlementProductionRecords();
		populateShipProductionRecords();
		populateBaseCargoPrices();
		populateBaseShipPrices();
		populatePriceTable();
		populateShopInventories();
		mainMenu.clearScreen();
		addFleetMenu();
	})

	var btnNewGame=new Button("NEW_GAME",600,160,322,80,"","Epistolar",15,"black", newGameButtonBG);
	btnNewGame.highlightImage=newGameButtonHigh;
	btnNewGame.onClick=function(){

		//pnlDialog.visible=true;
		dlgPlayerName.setVisible(true);
	}
	var btnLoadGame=new Button("LOAD_GAME",600,260,322,80,"","Epistolar",15,"black", loadGameButtonBG);
	btnLoadGame.highlightImage=loadGameButtonHigh;
	btnLoadGame.onClick=function(){
		mainMenu.hidePanel(1);
		mainMenu.showPanel(0);//display load game panel

	}

	var btnCredits=new Button("CREDITS",600,360,322,80,"","Epistolar",15,"black", creditsButtonBG);
	btnCredits.highlightImage=creditsButtonHigh;
	btnCredits.onClick=function(){
		mainMenu.hidePanel(0);
		mainMenu.showPanel(1);
	}



	mainMenu.addButton(btnNewGame);
	mainMenu.addButton(btnLoadGame);
	mainMenu.addButton(btnCredits);
	mainMenu.addPanel(pnlLoadGame);
	mainMenu.addPanel(pnlCredits);
	//mainMenu.addPanel(pnlDialog);
	mainMenu.drawScreen(mainMenuBG);
}