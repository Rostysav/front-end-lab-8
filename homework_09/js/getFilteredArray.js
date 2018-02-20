function getFilteredArray(numberList, callback) {
	const filteredArray = [];

	forEach( numberList, function(el) {
		if (callback(el)) {
			filteredArray.push(el);
		}
	});
	return filteredArray;
}