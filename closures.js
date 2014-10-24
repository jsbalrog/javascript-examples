function sayHello(name) {
	var text = 'Hello ' + name;
	// If you use the function keyword inside another function,
	// you are creating a closure:
	var sayAlert = function() {
		// This has access to 'text'
		console.log(text);
	};
	// Returns a reference to the closure
	return sayAlert;
}

var say = sayHello('Jane'); // sayHello() returns reference to the closure
// We call say() after we have returned from sayHello().
say();