/**
	* Generates a random integer with the specified number of digits.
	* @param digits number of digits
	* @returns random integer with the specified
	*
	*/
export const generateRanInt = (digits: number) => {
	const min = Math.pow(10, digits - 1);
	const max = Math.pow(10, digits) - 1;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
