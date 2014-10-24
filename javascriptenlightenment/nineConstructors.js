var myNumber = new Number(23);
var myNumberLiteral = 23;

var myString = new String('male');
var myStringLiteral = 'male';

var myBoolean = new Boolean(false);
var myBooleanLiteral = false;

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];

var myFunction = new Function('x', 'y', 'return x+y');
var myFunctionLiteral = function (x, y) { return x+y; };

var myDate = new Date();

var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;

var myError = new Error('aw snap');

// log which constructor created the Object
// Number, String, and Boolean primitives are different. The actual
// complex object is never created until the value is treated as
// an object.
console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myNumber, myNumberLiteral);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myString, myStringLiteral);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myBoolean, myBooleanLiteral);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);
console.log(myError.constructor);