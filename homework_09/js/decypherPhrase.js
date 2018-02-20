function decypherPhase(obj, srt) {
	var newObj = new Object();
	for (var prop in obj) {
		newObj[obj[prop]] = prop;
	}
	return cypherPhrase(newObj, str);
}