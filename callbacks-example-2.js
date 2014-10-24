// This method will block the processor.
var pauseCmp = function(millis, string) {
    var date = new Date();
    var curDate = null;

    do {
        curDate = new Date();
    }
    while(curDate-date < millis);
    console.log(string);
};

var doPrint = function() {
    console.log(arguments[0]);
};

var callbackUser = function() {
    setTimeout(doPrint, 1000, "doPrint executes");
    pauseCmp(2000, "pauseCmp executes");
    if(arguments[1]) {
        arguments[1]();
    }
};

callbackUser("a string");
console.log("I want this output last");

callbackUser("a string", function() {
    console.log("I want this output last");
});