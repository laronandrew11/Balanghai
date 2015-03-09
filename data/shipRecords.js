var bangkaImg = document.createElement('img');
bangkaImg.src='img/ships/bangka.png';
var bangkaIcon = document.createElement('img');
bangkaIcon.src='img/ships/bangka-icon.png';

var vintaImg = document.createElement('img');
vintaImg.src='img/ships/vinta.png';
var vintaIcon = document.createElement('img');
vintaIcon.src='img/ships/vinta-icon.png';


var shipRecords=[];
shipRecords.push(new ShipRecord("Bangka", 10, 100, 50, bangkaImg, bangkaIcon));
//shipRecords.push(new ShipRecord("Proa",25, 200,150));
//shipRecords.push(new ShipRecord("Balanghai", 30, 400, 400));
shipRecords.push(new ShipRecord("Vinta", 40, 15, 100, vintaImg, vintaIcon));
//shipRecords.push(new ShipRecord("Tanjaq", 20, 250, 200));
//shipRecords.push(new ShipRecord("Junk", 50, 1000, 1000));