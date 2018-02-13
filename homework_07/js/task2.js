if( play == true ) {
	while(game) {
		var randomNumber = Math.floor(Math.random() * 5 );
		do {
			x =  prompt(`Choose number from 0 to ${maxChooseNumber} \nAttachment left: ${maxAttachment} \nPrise: ${prise}$`);
		} while(isNaN(x) || x > 100 || x < 1);
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
			do {
				x =  prompt(`Choose number from 0 to ${maxChooseNumber} \nAttachment left: ${maxAttachment} \nPrise: ${prise / 2}$`);
			} while(isNaN(x) || x > 100 || x < 1);
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
				do {
					x =  prompt(`Choose number from 0 to ${maxChooseNumber} \nAttachment left: ${maxAttachment} \nPrise: ${prise / 5}$`);
				} while(isNaN(x) || x > 100 || x < 1);
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
						randomNumber = Math.floor(Math.random() * 10 );
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
