var translationComplete=false;
var latestTranslation;
function triggerTranslationQuest()
{
	var reward=new Cargo("Abaca Wood","Wood",1, 100);//TODO have a list of rewards and pick randomly
	var sentence="Hello, World!"
	latestTranslation=prompt("Foreign traders from Cidenthal wish to learn your native tongue. They will provide "+reward.amount+" "+reward.name+" if you translate the following sentence into Tagalog: \n\n"+sentence);
	if(latestTranslation!=null)
		gameState.addCargo(reward);
	/*var quest=new Quest("Translation", 
	function(){//this is the win condition
		return translationComplete;
	}, function(){//this is the reward
		return new Cargo("Abaca Wood","Wood",1, 100);
	});
	gameState.quests.push(quest);*/
}