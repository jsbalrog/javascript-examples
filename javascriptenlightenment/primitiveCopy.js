// Primitives are copied by value
var myString = 'foo'; // create a primitive string object
var myStringCopy = myString; // copy its value into a new variable

var myString = null; // manipulate the value stored in the myString variable

console.log(myString, myStringCopy); // logs 'null foo' because the value was copied into the copy reference

// Complex objects are copied by reference
var myObj = {}; // create a complex object
var myObjCopy = myObj; // not copied by value; just the reference is copied
myObj.foo = 'bar'; // manipulate the value

console.log(myObj, myObjCopy); // logs { foo: 'bar' } { foo: 'bar' } because both reference the same object

// NOTE: Primitive wrapper objects created with 'new' (or converted to complex objects) are still copied by value!
// i.e. String(), Number(), or Boolean()
