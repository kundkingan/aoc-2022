const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, "input"), 'utf8');

const arr = input.split(`

`)

const sumOfNumbers = arr.map((item) => {
    const arrWithNumbers =  item.split('\n')
    return arrWithNumbers.reduce((acc, curr) => {
        return +acc + +curr
    }
    , 0)
})

const maxElf = sumOfNumbers.reduce((acc, curr) => {
    return Math.max(acc, curr)
}, 0)

console.log(maxElf)

// get top 3 elves and sum their numbers
const top3 = sumOfNumbers.sort((a, b) => b - a).slice(0, 3).reduce((acc, curr) => {
    return acc + curr
    }, 0)

console.log(top3)


