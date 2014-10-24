// Variable environment

// variableEnvironment: {x: undefined};
var x = "global var";
// variableEnvironment: {x: "global"}

function outerFunction() {
    // variableEnvironment: {y: undefined}
    var y = "outer";
    // variableEnvironment: {y: "outer"}
    
    function inner() {
        // variableEnvironment: {x: undefined}
        var x = "inner";
        // variableEnvironment: {x: "inner"}
    }
}

// When a given execution context encounters a function definition in the code,
// a new function object is created with an internal property named [[scope]]
// which references the current VariableEnvironment. When the function is invoked
// the value of the scope property is assigned to the outerLex property of its
// variable environment. This scope chaining rund the length of the lexical
// hierarchy starting from the global object.

// variableEnvironment: {x: undefined};
var x = "global var";
// variableEnvironment: {x: "global"}

function outerFunction() {
    // variableEnvironment: {y: undefined, outerLex: {x: "global"}}
    var y = "outer";
    // variableEnvironment: {y: "outer", outerLex: {x: "global"}}
    
    function inner() {
        // variableEnvironment: {x: undefined, outerLex: {y: "outer"}}
        var x = "inner";
        // variableEnvironment: {x: "inner", outerLex: {y: "outer"}}
    }
}

//function main() {
    //var mv = document.getElementById("mover");
    //var counter = 0;
    //var tick = setInterval(function() {
        //mv.style.top = counter +"px";
        //counter += 1;
        //if(counter > 100) {
            //clearInterval(tick);
        //}
    //}, 100);
//}

//main();


function Container(param) {
    function dec() {
        if(secret > 0) {
            secret -= 1;
            return true;
        } else {
            return false;
        }
    }
    var secret = 3;
    var that = this;
    this.service = function() {
        if(dec()) {
            return param;
        } else {
            return null;
        }
    };
}