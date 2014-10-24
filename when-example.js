/*
function loadImage (src) {
	var deferred = when.defer(),
		img = document.createElement('img');
	img.onload = function () { 
		deferred.resolve(img); 
	};
	img.onerror = function () { 
		deferred.reject(new Error('Image not found: ' + src));
	};
	img.src = src;

	// Return only the promise, so that the caller cannot
	// resolve, reject, or otherwise muck with the original deferred.
	return deferred.promise;
}

func1 = function() {
    var deferred = when.defer();
    var t = window.setTimeout(sayHello1, 1000);
    function sayHello1() {
        console.log('In func1');
    }
    deferred.resolve(t);
    return deferred.promise;
};

func2 = function() {
    var t = window.setTimeout(sayHello2, 500);
    function sayHello2() {
        console.log('In func2');
    }
};

// example usage:

loadImage('http://google.com/favicon.ico').then(
	function gotIt(img) {
		document.body.appendChild(img);
	},
	function doh(err) {
		document.body.appendChild(document.createTextNode(err));
	}
).then(
	function shout(img) {
		alert('see my new ' + img.src + '?');
	}
);
*/
//func1();
//func2();

//console.log("func1 implements the then() promise api: " + when.isPromise(func1()));

//func1().then(
//    function foo() {
//        console.log("In function foo");
//    }
//);

function bar(str) {
    return function() {
        console.log(str);
    };
};


function foo() {
    var deferred = when.defer();
    var t = setTimeout(bar, 25, "Finished executing after setTimeout");
    deferred.resolve();
    return deferred.promise 
}

// This method will block the processor.
var longRunningFunction = function(millis, message) {
    var date = new Date();
    var curDate = null;

    do { 
        curDate = new Date(); 
    } 
    while(curDate-date < millis);
    console.log(message);
    return message;
};

foo();
longRunningFunction(1000, "calling straight");

when(foo()).then(longRunningFunction(1000, "calling straight"));