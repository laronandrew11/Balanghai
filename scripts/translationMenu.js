function addTranslationMenu(){
	var translationScreen=new staticScreen();

	addDefaultButtons(translationScreen);
	populateTranslationMenu(translationScreen);
	dynamicScreenActive=true;
	//load settlement data for given settlement name, and create relevant buttons/panels
	translationScreen.drawScreen(translationMenuBG);

}
function populateTranslationMenu(parentMenu)
{
	triggerTranslationQuest();
	var i;
	var y=150;
	for(i=0;i<gameState.pendingTranslations.length;i++)
	{
		var reward=gameState.pendingTranslations[i].reward;
		var lblReward=new Label(550,y,100,50,"Reward: "+reward.amount+" "+reward.name,"Epistolar",18,"black");
		var lblSentence=new Label(100,y,100,50,"Sentence: "+gameState.pendingTranslations[i].sentence,"Epistolar",18,"black");
		var btnTranslate=new Button("translate",800,y-40,80,80,"Translate","Epistolar",15,"black", buttonBG);
		btnTranslate.onClick=createTranslateButtonHandler(parentMenu, btnTranslate, gameState.pendingTranslations[i]);

		parentMenu.addLabel(lblReward);
		parentMenu.addLabel(lblSentence);
		parentMenu.addButton(btnTranslate);


		y+=50;
	}
}
function createTranslateButtonHandler(parentMenu, button, translation){
	var lbutton=button;
	return function(){
		//translation.translation=prompt("Enter translation: ");
		var translationPanel=new Panel(0,0,1000,600,translatePanelImg);

		var lblReward=new Label(700,100,100,50,translation.reward.amount+" "+translation.reward.name,"Epistolar",18,"black");
		var lblSentence=new Label(290,270,100,50, translation.sentence,"Epistolar",24,"black");
		var btnTranslate=new Button("translate",450,470,150,50,"Submit","Epistolar",15,"black", buttonBG);
		var txtTranslation=new Textbox(parentMenu, 270, 350, 500, 100);

		translationPanel.addLabel(lblReward);
		translationPanel.addLabel(lblSentence);
		translationPanel.addButton(btnTranslate);
		translationPanel.addTextbox(txtTranslation);

		translationPanel.visible=true;

		parentMenu.addPanel(translationPanel);
		parentMenu.drawScreen(parentMenu.bgImage);
		/*if(translation.translation!=null)
			gameState.addCargo(translation.reward);*/
	}
}