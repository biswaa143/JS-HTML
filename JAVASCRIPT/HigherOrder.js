let r = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const area = (r) => {
  return Math.PI * r * r;
};

const circumference = (r) => {
    return 2 * Math.PI * r;
}

const diameter = (r) => {
    return 2 * r;
}

const calculate = (r, logic) => {
  const ans = [];
  for (let i = 0; i < r.length; i++) {
    ans.push(logic(r[i]));
  }
  return ans;
};

console.log(calculate(r, area));
console.log(r.map(area));

console.log(calculate(r, circumference));
console.log(r.map(circumference));

console.log(calculate(r, diameter));
console.log(r.map(diameter));