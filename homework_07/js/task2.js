var play = confirm('Do you want to play game ?');
var randomNumber = Math.floor(Math.random() * 5 );
var game = true;
var x;
var prise = 10;
var maxChooseNumber = 5;
var maxAttachment = 3;
var pattern = /^[\s]+$/;


if( play == true ) {
	while(game) {
		var randomNumber = Math.floor(Math.random() * 5 );
		x = prompt(`Choose number from 0 to ${maxChooseNumber} \nAttachment left: ${maxAttachment} \nPrise: ${prise}$`);
		if ( x == randomNumber ) {
			console.log('You win ' + prise + '$');
			alert(`You win ` + prise + '$')
			play = confirm('Do you want to play game one more time ?');
			if ( play == true ) {
				game = true;
				prise = prise * 3;
				maxChooseNumber = maxChooseNumber * 2;
			} else {
				console.log(' Thank you for game');
				game = false;
			}
		} else {
			alert('try one more time');
			x = prompt(`Choose number from 0 to 5 \nAttachment left: ${maxAttachment - 1} \nPrise: ${prise / 2}$`);
			if ( x == randomNumber ) {
				console.log('You win ' + prise / 2 + '$');
				alert(`You win ` + prise / 2 + '$')
				play = confirm('Do you want to play game one more time ?');
				if ( play == true ) {
					game = true;
					prise = prise * 3;
					maxChooseNumber = maxChooseNumber * 2;
				} else {
					console.log(' Thank you for game');
					game = false;
				}
			} else {
				alert('try one more time');
				x = prompt(`Choose number from 0 to 5 \nAttachment left: ${maxAttachment - 2} \nPrise: ${(prise / 5)}$`);
				if ( x == randomNumber ) {
					console.log('You win ' + prise / 5 + '$');
					alert(`You win ` + prise / 5 + '$')
					play = confirm('Do you want to play game one more time ?');
				if ( play == true ) {
					game = true;
					prise = prise * 3;
					maxChooseNumber = maxChooseNumber * 2;
				} else {
					console.log(' Thank you for game');
					game = false;
				}
				} else {
					alert('You Loose');
					play = confirm('Do you want to play game one more time ?');
					if ( play == true ) {
						game = true;
						prise = prise * 3;
						maxChooseNumber = maxChooseNumber * 2;
					} else {
						console.log(' Thank you for game');
						game = false;
					}
				}
			} 
			
		}
	}
} else {
	console.log('You did not become a millionaire');
}
