import type { Options } from "./types.ts";

/**
	* Generates a random integer with the specified number of digits.
	* @param digits number of digits
	* @returns random integer with the specified
	*/
export const generateRanInt = (digits: number): number => {
	const min = Math.pow(10, digits - 1);
	const max = Math.pow(10, digits) - 1;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
	* Generates a random characters with the specified number of length.
	* @param length Number of characters length.
	* @param opts Set the options for the string to be generated.
	* @returns Random characters with the specified.
	*/
export const generateRanString = (length: number, opts: Options = {}): string => {
	const characters: string = 'abcdefghijklmnopqrstuvwxyz';
	const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numberCaseCharacters = '0123456789';
	let result: string = '';

	const { lowerCase = true, uppoerCase = false, numberCase = false } = opts;

	if (lowerCase === false && uppoerCase === false && numberCase === false) {
		console.error('Options not set.');
		return '';
	}

	let selectedCharacters: string = '';

	(lowerCase || uppoerCase || numberCase) && (selectedCharacters += characters);
	uppoerCase && (selectedCharacters += upperCaseCharacters);
	numberCase && (selectedCharacters += numberCaseCharacters);

	if (selectedCharacters.length === 0) {
		console.error('At least one character set must be selected.');
		return '';
	}

	for (let i = 0; i < length; i++) {
		const randIndex = Math.floor(Math.random() * selectedCharacters.length);
		result += selectedCharacters.charAt(randIndex);
	}
	return result;
}
