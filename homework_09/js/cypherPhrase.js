function cypherPhrase(obj, str) {
	var newArray = getTransformedArray(str, function(i) {
		return obj[i] || i;
	});
	return newArray.join("");
}