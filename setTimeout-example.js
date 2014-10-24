function foo() {
    console.log("Finished executing after setTimeout");
}

// This method will block the processor.
var longRunningFunction = function(millis) {
    var date = new Date();
    var curDate = null;

    do {
        curDate = new Date();
    }
    while(curDate-date < millis);
    console.log("Finished executing longRunningFunction");
};

// The processor will move immediately to the next statement,
// longRunningFunction(), which will block the processor until
// it completes.
setTimeout(foo, 25); // setTimeout is async. This will finish second.
longRunningFunction(1000); // longRunningFunction is blocking. This will finish first