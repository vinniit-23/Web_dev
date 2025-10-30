function* numberGenerator () {
    yield ("this is first (1) yeild")
    yield ("this is second (2) yeild")
    yield ("this is third (3) yeild")
    yield ("this is fourth (4) yeild")
    yield ("this is fifth (5) yeild")
}

const gen = numberGenerator()
const gentwo = numberGenerator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


console.log(gentwo.next().value);
console.log(gentwo.next().value);
