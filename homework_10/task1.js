/**
 * Your debounce function goes here
 * function(){}
 */
function debounce(callBack, delayTime) {
	let time;
	return function(){
		clearTimeout(time);
		time = setTimeout(callBack, delayTime);
	}
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'