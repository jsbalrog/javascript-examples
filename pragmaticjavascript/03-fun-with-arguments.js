function repeat1(rant, times) {
    while(--times >= 0) {
        console.log(rant);
    }
}
repeat1('IE6 must die!', 5); // 5 IE6 alert boxes

function repeat2(times) {
    while(--times >= 0) {
        for(var index = 1, len = arguments.length; index < len; ++index) {
            console.log(arguments[index]);
        }
    }
}
repeat2(2, 'IE6 must die!', 'So should IE7...'); // 2 IE6, 2 IE7

function repeat3(times, rant) {
    if(undefined === rant) {
        rant = 'IE6 must die!';
    }
    while(--times >= 0) {
        console.log(rant);
    }
}
repeat3(4); // 4 IE6 console outputs
repeat3(4, 'So should IE7...'); // 4 IE7 console outputs

function repeat4(options) {
	options = options || {}; // Empty object if not passed in
	for(var opt in repeat4.defaultOptions || {}) {
		if(!(opt in options)) { // determine if options has a given property
			options[opt] = repeat4.defaultOptions[opt];
		}
	}
	for(var index = 0; index < options.times; ++index) {
		console.log(options.rant);
	}
}
// Define defaults in a public property of the function itself
repeat4.defaultOptions = {times: 2, rant: 'IE6 must die!'};

repeat4(); // 2 IE6 console outputs
repeat4({times:3}); // 3 IE6 console outputs
repeat4({times:1, rant: 'Flash must die'}); // 1 flash console output
