import { generateRanInt, generateRanString } from "./mod.ts";

Deno.test(function generateRanIntTest() {
	console.log(generateRanInt(3));
});

Deno.test(function generateRanStringTest() {
	console.log('Default output : ', generateRanString(3));
	console.log('Set upperCase : ', generateRanString(3, { uppoerCase: true }));
	console.log('Set numberCase : ', generateRanString(3, { numberCase: true }));
	console.log('Set all options : ', generateRanString(3, { uppoerCase: true, numberCase: true }));
	console.log('Set all options disabled : ', generateRanString(3, { lowerCase: false, uppoerCase: false, numberCase: false}));
});

