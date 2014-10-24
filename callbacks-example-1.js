// This method will block the processor.
var pauseCmp = function(millis) {
    var date = new Date();
    var curDate = null;

    do {
        curDate = new Date();
    }
    while(curDate-date < millis);
};

var callbackUser = function() {
    pauseCmp(10000);
    console.log(arguments[0]);
    if(arguments[1]) {
        arguments[1]();
    }
};

callbackUser("a string");
console.log("I want this output last");

callbackUser("a string", function() {
    console.log("I want this output last");
});
