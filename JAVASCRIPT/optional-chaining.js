let users = {
  name: "Biswa",
  age: "26",
  address: {
    street: "Sibabazar",
    Home: "Sarat Mana Nibas",
    city: "Cuttack",
    state: "Odisha",
    pin: 753001,
  },
};

console.log(users?.name + " " + users?.age);
console.log(users.address.Home);
// console.log(users.area.colony); //It will show error

//optional chainaing
console.log(users?.area?.colony); //Now it will show undefined instead of error

const person = [
  { name: "Pranjali", lastname: "Barik", age: 46 },
  { name: "Bipin Bihari", lastname: "Barik", age: 56 },
  { name: "Biswa Ranjan", lastname: "Barik", age: 26 },
];

console.log(person[0]?.name);
console.log(person[3]?.name);
