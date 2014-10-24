// This is a comment
var guitar = {};
guitar.brand = "Fender";
guitar.model = "Stratocaster";
guitar.year = 1963;
guitar.type = "Electric";

guitar.getBrand = function () {
  console.log(this.brand);
};

guitar.getModel = function () {
  console.log(this.model);
};

guitar.getFoo = function () {
  console.log("hello");
};

guitar.getBar = function () {
  console.log('foo');
};

guitar.getModel();

var foo = {
  bar: '1',
  baz: 1
};
