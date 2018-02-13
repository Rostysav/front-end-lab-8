var play = confirm('Do you want to play game ?');
var randomNumber = Math.floor(Math.random() * 5 );
var x;
var prise = 10;
var attachment = 3;


function chekNumber() {
	if (play == false) {
	console.log('You did not become a millionaire');
	return;
	} else if (play == true) {
		console.log('Start game');
		firstChek();
	}
}
chekNumber();


function firstChek() {
	x  = prompt(`Choose number from 0 to 5 \nAttachment left: ${attachment} \nPrise: ${prise}$`);
	if ( (x != +x) || (x < 0) || (x > 5) || x.length == 0 ) {
		alert('Please enter number from 0 to 5');
		firstChek();
	} else if (x != randomNumber) {
		alert('try one more time');
		secondChek();
	} else {
		console.log('You win ' + prise + '$');
	}
}

function secondChek() {
	x  = prompt(`Choose number from 0 to 5 \nAttachment left: ${attachment - 1} \nPrise: ${prise / 2}$`);
	if ( (x != +x) || (x < 0) || (x > 5) || x.length == 0 ) {
		alert('Please enter number from 0 to 5');
		secondChek();
	}
	else if (x != randomNumber) {
		alert('try one more time');
		thirdChek();
	} else {
			console.log('You win ' + prise / 2 + '$');
	}
}

function thirdChek() {
	x  = prompt(`Choose number from 0 to 5 \nAttachment left: ${attachment - 2} \nPrise: ${prise / prise}$`);
	if ( (x != +x) || (x < 0) || (x > 5) || x.length == 0 ) {
		alert('Please enter number from 0 to 5');
		thirdChek();
	}
	else if (x != randomNumber) {
		alert('you loose');
		play = confirm('Do you want to play one more time ?');
		chekNumber();
	} else {
			console.log('You win ' + prise / 10 + '$');
			play = confirm('Do you want to play one more time ?');
			chekNumber();
	}
}

console.log(randomNumber);

// var play = confirm('Do you want to play game ?');
// var randomNumber = Math.floor(Math.random() * 5 );
// var x;
// var prise = 10;
// var i = 3;

// if ( play == false) {
// 	console.log('You did not become a millionaire');
// } else {
// 	x = prompt(`Choose number from 0 to 5 \nAttachment left: ${i} \nPrise: ${prise} `);
	
// 	if ( x < 0 || x > 5 || x.length == 0 || x != +x ) {
// 		alert('Put NATURAL number from 0 to 5');
// 	}
// 	if ( x == randomNumber ) {
// 		console.log('You win 10$');
// 	}
// }

// console.log(randomNumber);