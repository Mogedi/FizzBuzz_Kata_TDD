function FizzBuzzTest() {
	if(FizzBuzz(1) === 1) {
		console.log("1 passes");
	} else {
		console.log("1 has failed to return 1");
	}

	if(FizzBuzz(2) === 2) {
		console.log("2 passes");
	} else {
		console.log("2 has failed to return 2");
	}

	if(FizzBuzz(3) === "Fizz") {
		console.log("3 passes");
	} else {
		console.log("3 has failed to return Fizz");
	}

	if(FizzBuzz(6) === "Fizz") {
		console.log("6 passes");
	} else {
		console.log("6 has failed to return Fizz");
	}

	if(FizzBuzz(5) === "Buzz") {
		console.log("5 passes");
	} else {
		console.log("5 has failed to return Buzz");
	}

	if(FizzBuzz(10) === "Buzz") {
		console.log("10 passes");
	} else {
		console.log("10 has failed to return Buzz");
	}

	if(FizzBuzz(15) === "FizzBuzz") {
		console.log("15 passes");
	} else {
		console.log("15 has failed to return FizzBuzz");
	}

	if(FizzBuzz(30) === "FizzBuzz") {
		console.log("30 passes");
	} else {
		console.log("30 has failed to return FizzBuzz");
	}

}
