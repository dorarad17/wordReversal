const wordReversal = require("./wordReversal");

describe("wordReversal", () => {
	describe("wordReversal.wordReversal", () => {
		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal(null)).toBe(
				"error: must enter a string"
			);
		});

		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("")).toBe("error: no words entered");
		});

		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("65 has numbers")).toBe(
				"error: string should only contain lower case a-z"
			);
		});

		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("this has UPPER CASE")).toBe(
				"error: string should only contain lower case a-z"
			);
		});

		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("punctuation?")).toBe(
				"error: string should only contain lower case a-z"
			);
		});

		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("this is a test")).toBe(
				"siht si a tset"
			);
		});
		test("returns words with letters reversed", () => {
			expect(wordReversal.wordReversal("doing another test")).toBe(
				"gniod rehtona tset"
			);
		});
	});
});
