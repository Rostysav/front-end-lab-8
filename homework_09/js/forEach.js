let numberList = [1, 2, 3, 4, 5, 6];
function forEach(numberList, callback) {
	for ( i = 0; i < numberList.length; i++) {
		callback(numberList[i]);
	}
}