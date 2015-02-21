function addTranslationMenu(){
	var translationScreen=new staticScreen();

	addDefaultButtons(translationScreen);

	//load settlement data for given settlement name, and create relevant buttons/panels
	translationScreen.drawScreen(translationMenuBG);
}