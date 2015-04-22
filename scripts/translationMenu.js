function addTranslationMenu(){
	var translationScreen=new staticScreen();
	
	//addDefaultButtons(translationScreen);

	populateTranslationMenu(translationScreen);
	//dynamicScreenActive=true;
	var dlgPlayerName=new Dialog(translationMenu,"New translation job available",function(){
		
	})
	translationScreen.drawScreen(translationMenuBG);

}
function populateTranslationMenu(parentMenu)
{
	//triggerTranslationQuest();
	parentMenu.clearPanels();
	parentMenu.clearLabels();
	parentMenu.clearButtons();
	var lblBorder=new Label(0,0,1000,600,"","Epistolar", 15, "black");
	lblBorder.bgImage=borderImg;
	parentMenu.addLabel(lblBorder);
	addDefaultButtons(parentMenu);
	
	if(gameState.pendingTranslations.length==0)
	{
		var lblNoSentence=new Label(100,120,100,50,"No   pending   translations","Bebas",36,"black");
		parentMenu.addLabel(lblNoSentence);
	}
	else
	{
		var i;
		var y=50;
		for(i=0;i<gameState.pendingTranslations.length;i++)
		{
			var newPanel=new Panel(100,y,845,130,questPlankImg);
			var reward=gameState.pendingTranslations[i].reward;
			var lblReward=new Label(550,y+70,200,50,"Reward: "+reward.amount+" "+reward.name,"Bebas",18,"black");
			lblReward.bgImage=scrollSmallImg;
			var lblSentence=new Label(100,y+70,200,50,"Sentence: "+gameState.pendingTranslations[i].sentence,"Bebas",18,"black");
			lblSentence.bgImage=scrollSmallImg;
			var btnTranslateSentence=new Button("translate_sentence",800,y+70,80,30,"Translate","Bebas",15,"black", buttonBG);
			btnTranslateSentence.onClick=createTranslateButtonHandler(parentMenu, btnTranslateSentence, gameState.pendingTranslations[i]);

			newPanel.addLabel(lblReward);
			newPanel.addLabel(lblSentence);
			newPanel.addButton(btnTranslateSentence);
			//parentMenu.addButton(btnTranslateSentence);//putting button on panel causes the onClick function not to be called
			newPanel.visible=true;
			parentMenu.addPanel(newPanel);

			y+=110;
		}
	}
	parentMenu.drawScreen(translationMenuBG);
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
		var btnSubmit=new Button("translate",450,470,150,50,"Submit","Bebas",18,"black", buttonBG);
		btnSubmit.onClick=function(){
			txtTranslation.deactivate();
			translation.translation=txtTranslation.text;
			if(translation.translation!=null&&translation.translation!="")
			{
				gameState.addCargo(translation.reward);
				gameState.finishedTranslations.push(translation);
				removeByValue(gameState.pendingTranslations, translation);
		
				translationPanel.visible=false;
				populateTranslationMenu(parentMenu);
				//parentMenu.drawScreen(parentMenu.bgImage);
			}

		}
		var txtTranslation=new Textbox(parentMenu, 270, 350, 500, 100);

		translationPanel.addLabel(lblReward);
		translationPanel.addLabel(lblDescription);
		translationPanel.addLabel(lblDescription2);
		translationPanel.addLabel(lblDescription3);
		translationPanel.addLabel(lblSentence);
		translationPanel.addButton(btnSubmit);
		translationPanel.addLabel(lblRewardImg);
		translationPanel.addTextbox(txtTranslation);

		translationPanel.visible=true;

		parentMenu.addPanel(translationPanel);
		parentMenu.drawScreen(parentMenu.bgImage);
		
	}
}