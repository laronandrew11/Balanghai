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
	
		var translationPanel=new Panel(0,0,1000,600,translatePanelImg);

		var fetcher=new CargoRecordInfoFetcher();
		var rewardImg = document.createElement('img');
			rewardImg.src =  fetcher.getImageSrc(translation.reward.name);
		var lblReward=new Label(710,200,100,50,translation.reward.amount+" "+translation.reward.name,"Epistolar",18,"black");
		var btnReward=new Button("reward", 710,100, 80,80,"","Epistolar",15,"black",rewardImg);//TODO: change to sprite or label

		var blurb="Traders from Cidenthal will ";
	
		var lblDescription=new Label(270,120,100,50, blurb,"Epistolar",24,"black");
		var lblDescription2=new Label(270, 160,100,50,	"reward you for translating","Epistolar",24,"black");
		var lblDescription3=new Label(270, 200,100,50,	"this sentence:","Epistolar",24,"black");

		var lblSentence=new Label(290,270,100,50, translation.sentence,"Epistolar",24,"black");
		var btnTranslate=new Button("translate",450,470,150,50,"Submit","Epistolar",15,"black", buttonBG);
		btnTranslate.onClick=function(){
			translation.translation=txtTranslation.text;
			if(translation.translation!=null&&translation.translation!="")
				gameState.addCargo(translation.reward);
		}
		var txtTranslation=new Textbox(parentMenu, 270, 350, 500, 100);

		translationPanel.addLabel(lblReward);
		translationPanel.addLabel(lblDescription);
		translationPanel.addLabel(lblDescription2);
		translationPanel.addLabel(lblDescription3);
		translationPanel.addLabel(lblSentence);
		translationPanel.addButton(btnTranslate);
		translationPanel.addButton(btnReward);
		translationPanel.addTextbox(txtTranslation);

		translationPanel.visible=true;

		parentMenu.addPanel(translationPanel);
		parentMenu.drawScreen(parentMenu.bgImage);
		
	}
}