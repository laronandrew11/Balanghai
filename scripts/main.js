function main()
{
	var mainMenu=new staticScreen();
	mainMenu.addButton(600,300,116,11,"BATTLE","Epistolar",15,"black");
	mainMenu.addButton(600,350,120,11,"Add player","Epistolar",15,"black");
	mainMenu.drawBG(context);
	mainMenu.drawButtons();
}	