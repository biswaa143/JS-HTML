const multiply = (x, y) => {
  console.log(x * y);
};

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(5);

const divide = function (x) {
  return function (y) {
    console.log(x/y);
  };
};

const divideBy3 = divide(9);
divideBy3(3);

const divideBy11 = divide(121);
divideBy11(11);
