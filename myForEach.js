var myFunc = function(arg) {
	console.log(arg * 2);
}

var myArr = [1, 2, 3, 4];

for(var i = 0; i < myArr.length; i++) {
	myFunc.call(this, myArr[i]);
}