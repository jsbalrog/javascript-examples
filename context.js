var foo = 'foo';
var myObject = {
	foo: 'I am myObject.foo'
};

var sayFoo = function() {
	console.log(this['foo']);
};

// Give myObject a sayFoo property and have it point to sayFoo function
myObject.sayFoo = sayFoo;

myObject.sayFoo();

console.log(this.foo);