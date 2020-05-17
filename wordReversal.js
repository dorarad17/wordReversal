// WORD REVERSAL
// function which revereses letters in a word but not order of words
// takes in parameter of string
// string expected to be all lower case and letters a-z

reverseLetters = (string) => {
	// tests to see if input is string with only a-z characters

	if (typeof string !== "string") {
		return "error: must enter a string";
	}

	// remove white space to test string characters
	let noSpaces = string.replace(/ /g, "");
	if (noSpaces === "") {
		return "error: no words entered";
	} else if (/[^a-z]/.test(noSpaces) == true) {
		return "error: string should only contain lower case a-z";
	} else {
		// change string into array seprated by space
		var array = string.split(" ");

		// map across each element in array
		updatedArray = array.map(function (word) {
			// split each letter
			let split = word.split("");
			// create variable with reversed letters
			var reverseWord = split.reverse();
			// join letters back together
			var joined = reverseWord.join("");
			return joined;
		});

		// join array to a string seperated by spaces
		var newString = updatedArray.join(" ");
		return newString;
	}
};

// quick tests in console
console.log(reverseLetters(null)); // expect 'error: must enter a string'
console.log(reverseLetters("")); // expect 'error: no words entered'
console.log(reverseLetters("65 has numbers")); // expect 'error: string should only contain lower case a-z'
console.log(reverseLetters("this has UPPER CASE")); // expect 'error: string should only contain lower case a-z'
console.log(reverseLetters("punctuation?")); // expect 'error: string should only contain lower case a-z'
console.log(reverseLetters("this is a test")); // expect 'siht si a tset'
console.log(reverseLetters("doing another test")); // expect 'gniod rehtona tset'
