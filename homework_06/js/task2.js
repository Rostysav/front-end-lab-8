window.onload = function() {
	var x = +prompt('Enter number of EURO');
	var y = +prompt('Enter number of USD');

	var oneEuro = 33.8565;
	var oneDollar = 27.4609
	var dollarToEuro = oneEuro / oneDollar;

	var xEuro = x*oneEuro.toFixed(3);
	var yUsd = y*oneDollar.toFixed(3);

	console.log(x + ' euros are equal ' + 
				xEuro + ' UAH, ' + 
				y +  ' euros are equal ' + 
				yUsd + ' UAH, ' + 
				'one dollar is equal ' + dollarToEuro.toFixed(3));
}