// Notice lack of 'new' keyword. This creates a primitive value rather
// than an object.
var primitiveString1 = 'foo';
var primitiveString2 = String('foo');
var myString = new String('foo');

var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var myNumber = new Number('10');

var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');
var myBoolean = new Boolean('true');

// Other objects without primitive counterparts
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x + y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Aw snap!');

console.log(typeof primitiveString1, typeof primitiveString2, typeof myString);
console.log(primitiveString1, primitiveString2, myString);

console.log(typeof primitiveNumber1, typeof primitiveNumber2, typeof myNumber);
console.log(primitiveNumber1, primitiveNumber2, myNumber);

console.log(typeof primitiveBoolean, typeof primitiveBoolean, typeof myBoolean);
console.log(primitiveBoolean2, primitiveBoolean2, myBoolean);

console.log(
    typeof myObject,
    typeof myArray,
    typeof myFunction, // BE AWARE typeof returns function for all function objects
    typeof myDate,
    typeof myRegExp,
    typeof myError
);
