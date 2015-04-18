//TODO remove from global scope
var defaultbg= document.createElement('img');
	defaultbg.src = 'img/shipmenu.png';
var startbg = document.createElement('img');
	startbg.src = 'img/startscreen.png';
var mainMenuBG = document.createElement('img');
	mainMenuBG.src = 'img/mainmenu.png';
var shipMenuBG = document.createElement('img');
	shipMenuBG.src = 'img/shipmenu.png';
var cargoMenuBG = document.createElement('img');
	cargoMenuBG.src = 'img/cargo.png';
var settlementMenuBG = document.createElement('img');
	settlementMenuBG.src = 'img/settlementmenu.png';
	var questMenuBG = document.createElement('img');
	questMenuBG.src = 'img/questmenu.png';
		var translationMenuBG = document.createElement('img');
	translationMenuBG.src = 'img/translationmenu.png';
var tradeMenuBG = document.createElement('img');
	tradeMenuBG.src = 'img/trademenu.png';
var mapBG = document.createElement('img');
	mapBG.src = 'img/questmenu.png';
var borderImg = document.createElement('img');
	borderImg.src = 'img/border.png';

var coinImg = document.createElement('img');
	coinImg.src = 'img/icons/coin.png';
var totalWeightImg = document.createElement('img');
	totalWeightImg.src = 'img/icons/totalweight.png';


var scrollSmallImg = document.createElement('img');
	scrollSmallImg.src = 'img/scroll-sm.png';
	var scrollLargeImg = document.createElement('img');
	scrollLargeImg.src = 'img/scroll-lg.png';



	
var mapImg = document.createElement('img');
	mapImg.src = 'img/minimap.png';
var pointerImg = document.createElement('img');
	pointerImg.src = 'img/pointer.png';
var settlementImg = document.createElement('img');
	settlementImg.src = 'img/settlement.png';

var poiButtonImg=document.createElement('img');
	poiButtonImg.src = 'img/buttons/settlementmenu/poiButton.png';

var lunhawanSettlementImg = document.createElement('img');
	lunhawanSettlementImg.src = 'img/settlements/lunhawan.png';
	
var buttonBG = document.createElement('img');
	buttonBG.src = 'img/shipbutton.png';
	var closeButtonBG = document.createElement('img');
	closeButtonBG.src = 'img/xbutton.png';
	var shipButtonBG = document.createElement('img');
	shipButtonBG.src = 'img/shipbutton.png';
	var mainMenuButtonBG = document.createElement('img');
	mainMenuButtonBG.src = 'img/buttons/mainmenu.png';
	var creditsButtonBG = document.createElement('img');
	creditsButtonBG.src = 'img/buttons/mainmenu/creditsbut.png';
	var loadGameButtonBG = document.createElement('img');
	loadGameButtonBG.src = 'img/buttons/mainmenu/loadgamebut.png';
	var newGameButtonBG = document.createElement('img');
	newGameButtonBG.src = 'img/buttons/mainmenu/newgamebut.png';
	
	var tradeButtonBG = document.createElement('img');
	tradeButtonBG.src = 'img/buttons/trademenu/tradebutton.png';
	var shipsButtonBG = document.createElement('img');
	shipsButtonBG.src = 'img/buttons/fleetmenu/shipsbutton.png';
	var cargoButtonBG = document.createElement('img');
	cargoButtonBG.src = 'img/buttons/fleetmenu/cargobutton.png';
	var mapButtonBG = document.createElement('img');
	mapButtonBG.src = 'img/buttons/fleetmenu/mapbutton.png';
	var questButtonBG = document.createElement('img');
	questButtonBG.src = 'img/buttons/fleetmenu/questbutton.png';
	var settlementButtonBG = document.createElement('img');
	settlementButtonBG.src = 'img/buttons/fleetmenu/settlementbutton.png';
	var saveButtonBG = document.createElement('img');
	saveButtonBG.src = 'img/buttons/fleetmenu/savebutton.png';
	var translateButtonBG = document.createElement('img');
	translateButtonBG.src = 'img/buttons/fleetmenu/translatebutton.png';

	var translatePanelImg = document.createElement('img');
	translatePanelImg.src = 'img/panels/translation.png';

	var artButtonBG = document.createElement('img');
	artButtonBG.src = 'img/buttons/cargomenu/artbutton.png';
	var clothingButtonBG = document.createElement('img');
	clothingButtonBG.src = 'img/buttons/cargomenu/clothingbutton.png';
	var foodButtonBG = document.createElement('img');
	foodButtonBG.src = 'img/buttons/cargomenu/foodbutton.png';
	var miscButtonBG = document.createElement('img');
	miscButtonBG.src = 'img/buttons/cargomenu/miscbutton.png';
	var stoneButtonBG = document.createElement('img');
	stoneButtonBG.src = 'img/buttons/cargomenu/stonebutton.png';
	var textileButtonBG = document.createElement('img');
	textileButtonBG.src = 'img/buttons/cargomenu/textilebutton.png';
	var weaponButtonBG = document.createElement('img');
	weaponButtonBG.src = 'img/buttons/cargomenu/weaponbutton.png';
	var woodButtonBG = document.createElement('img');
	woodButtonBG.src = 'img/buttons/cargomenu/woodbutton.png';

	var artLabelBG = document.createElement('img');
	artLabelBG.src = 'img/categorylabels/yellowart.png';
	var clothingLabelBG = document.createElement('img');
	clothingLabelBG.src = 'img/categorylabels/bluecloth.png';
	var foodLabelBG = document.createElement('img');
	foodLabelBG.src = 'img/categorylabels/greenfood.png';
	var miscLabelBG = document.createElement('img');
	miscLabelBG.src = 'img/categorylabels/miscwhite.png';
	var stoneLabelBG = document.createElement('img');
	stoneLabelBG.src = 'img/categorylabels/blackore.png';
	var textileLabelBG = document.createElement('img');
	textileLabelBG.src = 'img/categorylabels/magentatex.png';
	var weaponLabelBG = document.createElement('img');
	weaponLabelBG.src = 'img/categorylabels/redsword.png';
	var woodLabelBG = document.createElement('img');
	woodLabelBG.src = 'img/categorylabels/palewood.png';



	var cargoCategoryButtons=[];
	cargoCategoryButtons.push(foodButtonBG);
	cargoCategoryButtons.push(stoneButtonBG);
	cargoCategoryButtons.push(weaponButtonBG);
	cargoCategoryButtons.push(woodButtonBG);
	cargoCategoryButtons.push(artButtonBG);
	cargoCategoryButtons.push(textileButtonBG);
	cargoCategoryButtons.push(clothingButtonBG);
	cargoCategoryButtons.push(miscButtonBG);

	var cargoCategoryLabels=[];
	cargoCategoryLabels.push(foodLabelBG);
	cargoCategoryLabels.push(stoneLabelBG);
	cargoCategoryLabels.push(weaponLabelBG);
	cargoCategoryLabels.push(woodLabelBG);
	cargoCategoryLabels.push(artLabelBG);
	cargoCategoryLabels.push(textileLabelBG);
	cargoCategoryLabels.push(clothingLabelBG);
	cargoCategoryLabels.push(miscLabelBG);

	var cargoInventoryPanelBG = document.createElement('img');
	cargoInventoryPanelBG.src = 'img/panels/cargowithbox.png';
	var cargoDetailsPanelBG = document.createElement('img');
	cargoDetailsPanelBG.src = 'img/panels/carpet.png';//TODO remove from global scope
