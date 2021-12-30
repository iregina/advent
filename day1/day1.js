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
	var previous_depth = Number(depths[i]);
	var current_depth = Number(depths[i+1]);
	if (current_depth > previous_depth){
		count++;
	} 
}
console.log("The depth measurement increases " + count + " times.");

// TIL "10" is not greater than "9" in JavaScript (no type declaration)