var cargoRecords=[];
var riceImg = document.createElement('img');
riceImg.src='img/cargo/rice.png';
var waterImg = document.createElement('img');
waterImg.src='img/cargo/water.png';
var abacaImg = document.createElement('img');
abacaImg.src='img/cargo/mahogany.png';//replace when we have the asset

cargoRecords.push(new CargoRecord("Rice","Food", 1, riceImg));
cargoRecords.push(new CargoRecord("Water","Food", 1, waterImg));
cargoRecords.push(new CargoRecord("Abaca Wood","Wood", 1,abacaImg));