var yelp = function() {
	console.log('I am yelping');
	// functions return undefined even with no return statement
};

console.log(yelp() === undefined); // true because a value is always returned

var funcA = function() { console.log('funcA'); };
funcA();

var funcB = [function() { console.log('funcB'); }];
funcB[0]();

var funcC = {
	method: function() {
		console.log('funcC');
	}
};
funcC.method();
funcC['method']();

var funcD = function(func) {
	return func;
};

var runPassedToFuncD = funcD(function() { console.log('funcD'); });
runPassedToFuncD();

// Functions are objects and can have properties
var funcE = function() {
	console.log('funcE');
};

funcE.answer = 'yes';
console.log(funcE.answer);

var myObj = {
	methodF: function (a, b) {
		console.log(a);
		console.log(b);
		console.log(arguments[2]);
		console.log(this); // References the object that contains the function
		console.log(arguments.callee); // logs function
	}
};

myObj.methodF('one', 'two', 'three');

// call and apply
var greet = {
	runGreet: function() {
		console.log(this.name, arguments[0], arguments[1]);
	}
};

var cody = { name: 'cody' };
var lisa = { name: 'lisa' };

greet.runGreet.call(cody, 'foo', 'bar');
greet.runGreet.apply(lisa, ['one', 'two']);

// Self-invoking function expression
var sayWord = function() {
	console.log("Word 2 your mo!");
}();

// Self-invoking anonymous function statement
(function(m) {
	console.log(m);
})('my message');

// 'this' inside a prototype method refers to a constructor instance
var Person = function(x) {
	if(x) {
		this.fullName = x;
	}
};

Person.prototype.getFullName = function() {
	return this.fullName; // 'this' refers to the instance created from Person()
};

var cody = new Person('cody');
var foo = new Person('foo');

console.log(cody.getFullName());
console.log(foo.getFullName());