function factorial (n) {
	// body... 


	var product = 1;

	while (n > 1) {
		// statement

		product *=n;
		n--;
	}
	return product;
}

console.log(factorial(4));


function factorial2 (n) {
	// body... 


	var product = 1;

	for (var i = 2 ; i<=n; i++) {
		
		product *=n;
		n--;

	}

	return product;
}

console.log(factorial(4))





