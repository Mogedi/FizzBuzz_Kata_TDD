/*
1) If multiple of 3, get back "fizz"
2) If multiple of 5, get back "buzz"
3) If multiple of 3 & 5, get back "fizzbuzz"
4) Otherwise, get back number
*/

function FizzBuzz(number) {
	if(number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	}
	if(number % 5 === 0) {
		return "Buzz";
	}
	if(number % 3 === 0) {
		return "Fizz";
	}
	return number;

}
