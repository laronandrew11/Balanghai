function addQuestMenu(){
	var questScreen=new staticScreen();

	addDefaultButtons(questScreen);

	//load settlement data for given settlement name, and create relevant buttons/panels
	questScreen.drawScreen(questMenuBG);

}