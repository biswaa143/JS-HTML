//Argumet objexts aren't available in arrow function
function add(x, y) {
  console.log(arguments);
  return x + y;
}
add(10, 5);

const add2 = (x, y) => {
  console.log(arguments);
  return x + y;
};
add2(10, 5); //Error arguments not defined

//Regular functions created using function declarations or expressions are 'constructable' & 'callable'

function Car(name) {
  this.brand = name;
}
let carName = new Car("Jaguar");
console.log(carName);

let carName2 = new Car("Defender");
console.log(carName2);
