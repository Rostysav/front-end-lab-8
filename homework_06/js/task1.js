window.onload = function() {
	var x = +prompt('Enter value');
	var y = +prompt('Enter value');
	var z = +prompt('Enter value');
	var p=(x+y+z)/2;
	var aria = Math.sqrt(p*(p-x)*(p-y)*(p-z));
	var xSquare = x * x;
	var ySquare = y * y;
	var zSquare = z * z;
	var firstSide = xSquare + ySquare;
	var secondSide = xSquare + zSquare;
	var thirdSide = ySquare + zSquare;

	function checkType() {
		if (x > 0 && y > 0 && z > 0) {
			console.log(aria.toFixed(2));
			typeOfTriangle();
		} else {
			console.log('Incorrect data');
		}
	}

	checkType();


	function typeOfTriangle() {
		if (x == y && x == z && y == z) {
			console.log('Type of triangles: Equilateral');
		} else if (x == y && x != z || x == z && x != y || y == z && y != x) {
			console.log('Type of triangles: Isosceles');
		} else if (x != y != z) {
			console.log('Type of triangles: Scalene');
		}
		if ((xSquare == thirdSide) || (ySquare == secondSide) || (zSquare == firstSide)) {
			console.log('Type of triangles: Right triangle');
		}
	}

}