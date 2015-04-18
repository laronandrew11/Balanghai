function addTranslationMenu(){
	var translationScreen=new staticScreen();
	var lblBorder=new Label(0,0,1000,600,"","Epistolar", 15, "black");
	lblBorder.bgImage=borderImg;
	translationScreen.addLabel(lblBorder);
	addDefaultButtons(translationScreen);

	populateTranslationMenu(translationScreen);
	//dynamicScreenActive=true;

	translationScreen.drawScreen(translationMenuBG);

}
function populateTranslationMenu(parentMenu)
{
	//triggerTranslationQuest();
	var i;
	var y=120;
	for(i=0;i<gameState.pendingTranslations.length;i++)
	{
		var reward=gameState.pendingTranslations[i].reward;
		var lblReward=new Label(550,y,100,50,"Reward: "+reward.amount+" "+reward.name,"Bebas",18,"black");
		var lblSentence=new Label(100,y,100,50,"Sentence: "+gameState.pendingTranslations[i].sentence,"Bebas",18,"black");
		var btnTranslate=new Button("translate",800,y,80,30,"Translate","Bebas",15,"black", buttonBG);
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
		var rewardImg =  fetcher.getImageSrc(translation.reward.name);
		var lblReward=new Label(710,170,100,50,translation.reward.amount+" "+translation.reward.name,"Bebas",18,"black");
		var lblRewardImg=new Label(710,100, 80,80,"","Bebas",15,"black");//TODO: change to sprite or label
		lblRewardImg.bgImage=rewardImg;

		var blurb="Traders from Cidenthal will ";
	
		var lblDescription=new Label(270,90,100,50, blurb,"Bebas",24,"black");
		var lblDescription2=new Label(270, 130,100,50,	"reward you for translating","Bebas",24,"black");
		var lblDescription3=new Label(270, 170,100,50,	"this sentence:","Bebas",24,"black");

		var lblSentence=new Label(290,250,100,50, translation.sentence,"Bebas",24,"black");
		var btnTranslate=new Button("translate",450,470,150,50,"Submit","Bebas",18,"black", buttonBG);
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
		translationPanel.addLabel(lblRewardImg);
		translationPanel.addTextbox(txtTranslation);

		translationPanel.visible=true;

		parentMenu.addPanel(translationPanel);
		parentMenu.drawScreen(parentMenu.bgImage);
		
	}
}