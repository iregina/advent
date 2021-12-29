// The following program contains an async function that extracts the contents of the 'depths.txt' file. Source: https://stackoverflow.com/questions/66973034/how-to-set-variable-value-inside-read-file-function-and-use-it-outside-in-node-j

// console.log("hello the program is starting now");

// import fs, { readFile } from 'fs';

// readFile('depths.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Objective: Figure out how quickly the depth increases - the number of times a depth measurement increases

import fs, { readFileSync } from 'fs';

var count = 0;
var depths = fs.readFileSync('depths.txt').toString().split("\n");
// console.log(depths);
for (let i = 0; i < depths.length; i++) {
	if ((depths[i+1] < depths[i])&&(Number(depths[i+1])>Number(depths[i]))){
		console.log(i);
		console.log(depths[i+1] + " is less than " + depths[i] )
		count++;
	} 
}
console.log(count);


var depths2 = fs.readFileSync('depths.txt')
		.toString()
		.split('\n')
		.map(n => parseInt(n, 10));
	// console.log(depths2);
	let count2 = 0;

	for (let i = 0; i < depths2.length; i++) {
		if (i > 0 && depths2[i] > depths2[i-1]) {
			count2++
		} 
	}

	console.log(count2); // 1st answer




	// TIL "10" is not greater than "9" in JavaScript