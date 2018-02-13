window.onload = function() {
	var x = prompt('Enter natural number from 0 to 20');
	var numX = parseInt(x);
	var output = '';

	if ( (x != numX) || ( numX < 0 ) || ( numX > 20 ) ) {
		console.log('Incorrect');
		return;
	} 

	function writePyramid(numX) {
	  for (var i = 0; i < numX; i++) {
	    output = '';
	    for (var j = 0; j < numX-i; j++) {
	      output = output + '   ';
	    }
	    for (var k = 1; k <= (2*i+1); k++) {
	      output = output + '[~]';
	    }
	    console.log(output);

	  }
	}
	writePyramid(numX);

}


