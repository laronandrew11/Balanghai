var translationComplete=false;
var latestTranslation;
function Translation(sentence, reward)//add expiry date?
{
	this.sentence=sentence;
	this.reward=reward;
	this.translation=null;
}
function triggerTranslationQuest()
{
	var reward=new Cargo("Abaca Wood","Wood",1, 100);//TODO randomize from translationRewards
	var sentence="Hello, World!"
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

var translationRewards=[new Cargo("Abaca Wood","Wood",1, 100), new Cargo("Water","Food",1, 10)];
var translationSentences=["I like cats.","Do you want to build a boat?","Where is my hat?","Give me your hand."];