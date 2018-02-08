window.onload = function() {
	var x = prompt('Enter value');
	var y = prompt('Enter value');
	var z = prompt('Enter value');
	var numX = parseInt(x);
	var numY = parseInt(y);
	var numZ = parseInt(z);
	var p=(numX+numY+numZ)/2;
	var aria = Math.sqrt(p*(p-numX)*(p-numY)*(p-z));
	var xSquare = numX * numX;
	var ySquare = numY * numY;
	var zSquare = numZ * numZ;
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
		if (numX == numY && numX == numZ && numY == numZ) {
			console.log('Type of triangles: Equilateral');
		} else if (numX == numY && numX != numZ || numX == z && numX != numY || numY == numZ && numY != numX) {
			console.log('Type of triangles: Isosceles');
		} else if (numX != numY != numZ) {
			console.log('Type of triangles: Scalene');
		}
		if ((xSquare == thirdSide) || (ySquare == secondSide) || (zSquare == firstSide)) {
			console.log('Type of triangles: Right triangle');
		}
	}

}
