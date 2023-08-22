document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!!!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!!!");
    e.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!!!");
  },
  true
);

//How to iterate inside an object and print all the values inside it without the keys?
const obj = {
  key1: "value1",

  key2: "value2",

  key3: "value3",
};

// Using a for...in loop

for (const key in obj) {
  console.log(obj[key]);
}

// Using Object.values()

const values = Object.values(obj);

values.forEach((value) => console.log(value));

// Example using anonymous function as an IIFE
(function () {
  console.log("This is an immediately invoked function expression (IIFE).");
})();

// Example using anonymous function as a callback

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * 2);
});
