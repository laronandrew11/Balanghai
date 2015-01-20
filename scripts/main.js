function main()
{
	var mainMenu=new staticScreen();
	mainMenu.addButton(700,200,116,11,"NEW GAME","Epistolar",15,"black");
	mainMenu.addButton(700,250,120,11,"LOAD GAME","Epistolar",15,"black");
	mainMenu.addButton(700,300,120,11,"CREDITS","Epistolar",15,"black");
	var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.jpg';
	mainMenu.drawBG(context, startbg);
	mainMenu.drawButtons();
}	