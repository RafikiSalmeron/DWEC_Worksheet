// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
/*
function sumArgs (...args){
	let total = 0;
	for ( arg of args){	
			total += arg;		
	}
	return total;
}

document.write(sumArgs(1,2,3,4,9,6,3));
*/

// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
/*
function addOnlyNums (...numbers){
	let total = 0;
	for ( num of numbers){
		if(!isNaN(num)){
			total += parseInt(num);
		}	
	}
	return total;
}

document.write(addOnlyNums("hola", 5, "6"));
*/

// Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.
/*
function countTheArgs (...args){
	return args.length;
}

document.write(countTheArgs(1,2,3,4,9,6,3));
*/

// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
/*
function combineTwoArrays (array1, array2){
	return [...array1, ...array2];
}

document.write(combineTwoArrays(['hola', 'como'],['está', 'usted']));
*/

// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
