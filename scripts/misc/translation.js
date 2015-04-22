var translationComplete=false;
var latestTranslation;
function Translation(sentence, reward)//add expiry date?
{
	this.sentence=sentence;
	this.reward=reward;
	this.translation=null;
}
var translationRewards=[];
translationRewards.push(new Cargo("Abaca Wood","Wood",1, 100));
translationRewards.push(new Cargo("Water","Food",1, 10));
var translationSentences=[];
translationSentences.push("The archipelago contains 7,107 islands.");
translationSentences.push("Do you want to build a boat?");
translationSentences.push("International trade agreements have a long history.");
translationSentences.push("Cooperation leads to progress.");
function triggerTranslationQuest(parentMenu)
{
	//alert("New translation quest available. Check your Work menu.");
	triggerTravelAlert(parentMenu);
	var reward=translationRewards[randomIntFromInterval(0,translationRewards.length-1)];//TODO randomize from translationRewards
	var sentence=translationSentences[randomIntFromInterval(0,translationSentences.length-1)];
	gameState.pendingTranslations.push(new Translation(sentence, reward));
	//alert("New translation quest available");
	/*latestTranslation=prompt("Foreign traders from Cidenthal wish to learn your native tongue. They will provide "+reward.amount+" "+reward.name+" if you translate the following sentence into Tagalog: \n\n"+sentence);
	if(latestTranslation!=null)
		gameState.addCargo(reward);*/

	/*var quest=new Quest("Translation", 
	function(){//this is the win condition
		return translationComplete;
	}, function(){//this is the reward
		return new Cargo("Abaca Wood","Wood",1, 100);
	});
	gameState.quests.push(quest);*/
}

