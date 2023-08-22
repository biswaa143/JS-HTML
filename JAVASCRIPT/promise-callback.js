const datas = [
  { name: "Biswa", age: 26 },
  { name: "Bipin", age: 56 },
];

const getDatas = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

getDatas();

//callback
const callbackData = (newdata, callback) => {
  setTimeout(() => {
    datas.push(newdata);
    callback();
  }, 2000);
};

callbackData({ name: "Pranjali", age: 46 }, getDatas);

//promise
const promiseData = (newdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("There might be some errors..");
      }
    }, 3000);
  });
};

promiseData({ name: "Amar", age: 24 })
  .then(getDatas)
  .catch((err) => console.log(err));

//Async-awai
async function start() {
  await promiseData({ name: "Sodesh", age: 26 });
  getDatas();
}

start();

