const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, "input"), 'utf8');

const arrayOfStringOfPairs = input.split(`\n`)
arrayOfStringOfPairs.pop()

let overlaps = 0;
let partialOverlaps = 0;


for (const pair of arrayOfStringOfPairs) {
    const [firstPair,secondPair] = pair.split(',')
    const first = firstPair.split("-");
    const second = secondPair.split("-");
    const [fLow, fHigh, sLow, sHigh] = [+first[0], +first[1], +second[0], +second[1]];

    if ((fLow <= sLow && fHigh >= sHigh) || (fLow >= sLow && fHigh <= sHigh)) overlaps++;
    if (fHigh >= sLow && sHigh >= fLow) partialOverlaps++;
}

console.log(overlaps);
console.log(partialOverlaps);
