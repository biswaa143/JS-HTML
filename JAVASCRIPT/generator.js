function* numsGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen = numsGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);