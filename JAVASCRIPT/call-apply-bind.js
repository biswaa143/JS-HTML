//Call and Apply
let name = {
  firstname: "Biswa",
  middlename: "Ranjan",
  lastname: "Barik",
};

const printName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.middlename +
      " " +
      this.lastname +
      " from " +
      hometown +
      " , " +
      state
  );
};

printName.call(name, "Cuttack", "Odisha");

let name2 = { firstname: "Bipin", middlename: "Bihari", lastname: "Barik" };

let name3 = { firstname: "Pranjali", middlename: "", lastname: "Barik" };

//function borrowing
printName.call(name2, "Cuttack", "Odisha");

printName.apply(name3, ["Cuttack", "Odisha"]);

//Bind Method
let printMyName = printName.bind(name, "Cuttack", "Odisha");
console.log(printMyName);
printMyName();
