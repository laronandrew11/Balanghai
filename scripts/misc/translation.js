function triggerTranslationQuest()
{
	var quest=new Quest("Translation", 
	function(){//this is the win condition
		return false;
	}, function(){//this is the reward
		
	});
	gameState.quests.push(quest);
}