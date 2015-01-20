function main()
{
	var mainMenu=new staticScreen();
	var btnNewGame=new Button(700,200,116,11,"NEW GAME","Epistolar",15,"black");
	btnNewGame.onClick=function(){
		alert("NEW GAME!");
	}
	var btnLoadGame=new Button(700,250,116,11,"LOAD GAME","Epistolar",15,"black");
	btnLoadGame.onClick=function(){
		alert("LOAD GAME!");
	}
	var btnCredits=new Button(700,300,120,11,"CREDITS","Epistolar",15,"black");
	btnCredits.onClick=function(){
		alert("Copyright DLSU Game Development Laboratory, 2015.");
	}
	mainMenu.addButton(btnNewGame);
	mainMenu.addButton(btnLoadGame);
	mainMenu.addButton(btnCredits);
	var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.jpg';
	mainMenu.setBG(startbg);
	mainMenu.drawBG(context);
	mainMenu.drawButtons();
}	