$(document).ready(function() {
	$('#button').click(function() {
		$('.results').empty();
		var number = $("#num").val();
		for (var i = 1; i <= number; i++) {
			if ( i % 15 === 0) {
				$('.results').append('Fizz Buzz' + '<br/>');
			} else if (i % 5 === 0) {
				$('.results').append('Buzz' + '<br/>');
			} else if (i % 3 === 0) {
				$('.results').append('Fizz' + '<br/>');
			} else {
				$('.results').append(i + '<br/>');
			}


		};
	});

});
