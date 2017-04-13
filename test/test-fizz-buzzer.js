const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should output fizz, buzz, or fizz-Buzz if divisible by 3, 5, or 15, else output num', function() {
		const normalCases = [
		{a: 15, expected: 'fizz-buzz'},
		{a: 5, expected: 'buzz'},
		{a: 3, expected: 'fizz'},
		{a: 2, expected: 2}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.a);
			answer.should.equal(input.expected);
		});
		
	});

	it('should throw an error if input is not a number', function() {
		const notNumbers = [true, false, 'buzz', function() {}, [1, 2]
		];

		notNumbers.forEach(function(input) {
			(function() { fizzBuzzer(input).should.throw(Error);});
		});
	});
});	