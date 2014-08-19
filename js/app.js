$(document).ready(function() {
	$('button').click(function() {
		var fizzBuzz = function (number) {
		$('.results').empty();
		for (var i = 1; i <= number; i++) {
			if ( i % 15 === 0) {
				$('.results').append('FizzBuzz' + '<br/>');
			} else if (i % 5 === 0) {
				$('.results').append('Buzz' + '<br/>');
			} else if (i % 3 === 0) {
				$('.results').append('Fizz' + '<br/>');
			} else {
				$('.results').append(i + '<br>');
			}
		};
	};


});
