var myString = 'string';
var myNumber = 10;
var myBoolean = false;
var myNull = null;
var myUndefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined);

/* Consider that a complex object like array or object can be made
up of multiple primitive values, and thus becomes a complex set of
multiple values. */
var myObject = {
	myString: 'string',
	myNumber: 10,
	myBoolean: false,
	myNull: null,
	myUndefined: undefined
};

console.log(myObject);

var myArray = ['string', 10, false, null, undefined];

console.log(myArray);