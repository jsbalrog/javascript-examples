/**
 * A closure is the local variables for a function that are kept alive
 * after the function has returned.
 */
function sayHello(name) {
    var text = 'Hello ' + name;
    var sayAlert = function() {
        console.log(text);
    };
    // Return a reference to the function object
    return sayAlert;
}

var say = sayHello("Ted"); // a reference to 'sayAlert' function is assigned to variable 'say'
say(); // This causes 'Hello Ted' to be output.
// This works because if you declare a function within another function, the
// local variables can be accessible after returning from the outer function.
// In js a function reference also has a secret reference to the closure it was created in.


//------------- Example 2 -------------
function deSatanize() {
    // Local variable that ends up within closure
    var num = 666;
    var outputNum = function() {
        console.log(num);
    };
    num++;
    return outputNum;
}

var sayIt = deSatanize(); // Not only is inner function 'sayAlert' returned, but local variable 'num' is incremented.
sayIt(); // This causes '667' to be output.


//------------ Example 3 ---------------
function setupSomeGlobals() {
    var num = 42; // Local variable that ends up within closure
    // Store some references to functions as global variables
    alertNumber = function() {
        console.log(num);
    };
    increaseNumber = function() {
        console.log(++num);
        
    };
    setNumber = function(x) {
        num = x;
        console.log(num);
    };
}

setupSomeGlobals();
alertNumber(); // 42
increaseNumber(); // 43
setNumber(44); // 44

// ------------- Example 4 --------------
function buildList(list) {
    var result = [];
    for(var i = 0; i < list.length; i++) {
        var item = 'item ' + list[i];
        result.push(function() {
            console.log(item);
        });
    }
    return result;
}

function testList() {
    var fnlist = buildList(['a', 'b', 'c']);
    for(var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();

// -------------- Example 5 --------------
function sayGreeting() {
    var sayOutput = function() { console.log(greeting); };
    var greeting = "Hello Buffalo";
    return sayOutput;
}

// Calls sayGreeting, which returns a function, and then calls the
// return value. Same as assigning to variable.
sayGreeting()();

// -------------- Example 6 --------------
function getMeAClosure() {
    var canYouSeeMe = "here I am";
    var theClosure = function() {
        return { canYouSeeIt : canYouSeeMe ? "yes!" : "no" }; // You can return inline object literals!
    };
    return theClosure;
}

var closure = getMeAClosure();
console.log(closure().canYouSeeIt);