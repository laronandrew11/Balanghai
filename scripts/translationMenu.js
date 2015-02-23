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
	var i;
	var y=150;
	for(i=0;i<gameState.pendingTranslations.length;i++)
	{
		var reward=gameState.pendingTranslations[i].reward;
		var lblReward=new Label(400,y,100,50,"Reward: "+reward.amount+" "+reward.name,"Epistolar",18,"black");
		var lblSentence=new Label(100,y,100,50,gameState.pendingTranslations[i].sentence,"Epistolar",18,"black");
		var btnTranslate=new Button("translate",700,y-40,80,80,"Translate","Epistolar",15,"black", buttonBG);
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
		translation.translation=prompt("Enter translation: ");
		if(translation.translation!=null)
			gameState.addCargo(translation.reward);
	}
}