// WORD REVERSAL

// function which revereses letters in a word but not order of words
// takes in parameter of string only
// string expected to be all lower case and letters a-z

wordReversal = (string) => {
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
			// split each letter, reverse order and join back together
			let reversed = word.split("").reverse().join("");
			return reversed;
		});

		// join array to a string seperated by spaces
		var newString = updatedArray.join(" ");
		return newString;
	}
};

module.exports = {
	wordReversal,
};
