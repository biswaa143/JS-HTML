//Easy examples
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map()
const doubleNum = arr.map((x) => x * 2);
console.log(doubleNum);

const squareNum = arr.map((x) => x * x);
console.log(squareNum);

//filter()
const evenNum = arr.filter((x) => x % 2 === 0);
console.log(evenNum);

const oddNum = arr.filter((x) => x % 2);
console.log(oddNum);

const greaterThan5 = arr.filter((x) => x > 5);
console.log(greaterThan5);

//reduce()
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

const max = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(max);

//Real-time Examples
const userDetails = [
  { firstname: "Mahendra Singh", lastname: "Dhoni", age: 39 },
  { firstname: "Virat", lastname: "Kholi", age: 33 },
  { firstname: "Sachin", lastname: "Tendulkar", age: 45 },
  { firstname: "Yuvraj", lastname: "Singh", age: 39 },
  { firstname: "Suresh", lastname: "Raina", age: 33 },
  { firstname: "Zaheer", lastname: "Khan", age: 39 },
  { firstname: "Ravindra", lastname: "Jadega", age: 35 },
];

//reduce()
const output = userDetails.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

//map()
const fullName = userDetails.map(
  (x) => x.firstname + " " + x.lastname + ", " + x.age
);
console.log(fullName);

//filter()
const filterdAge = userDetails
  .filter((x) => x.age > 35)
  .map((x) => x.firstname + " " + x.lastname);
console.log(filterdAge);

//reduce()
setTimeout(() => {
  const filterdName = userDetails.reduce((acc, curr) => {
    if (curr.age < 39) {
      acc.push(curr.firstname + " " + curr.lastname);
    }
    return acc;
  }, []);
  console.log(filterdName);
  document.body.innerHTML = filterdName;
}, 8000);
