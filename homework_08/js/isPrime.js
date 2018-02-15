function isPrime(n) {
    var d = n ^ 0
	if ( d == n ) {
		return true
	} else {
		return false;
	}
}
console.log(isPrime(5)); // Return true
console.log(isPrime(5.3)); // Return false