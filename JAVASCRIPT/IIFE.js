let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(143);
    }, 2000);
  });
};

//IIFE
(async () => {
  const b = await a();
  console.log(b);
  const c = await a();
  console.log(c);
  const d = await a();
  console.log(d);
})();

//IIFE-2
let counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counter.getCount()); //0

counter.increment();
counter.increment();

console.log(counter.getCount()); //2

counter.decrement();

console.log(counter.getCount()); //1
