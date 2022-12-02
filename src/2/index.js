const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, "input"), 'utf8');

const arr = input.split(`\n`)
arr.pop()
const LOST = 0, DRAW = 3, WIN = 6;
const ROCK = 1, PAPER = 2, SCISSORS = 3;

// Rock beats scissors, scissors beats paper, paper beats rock

const rock = ['A', 'X']
const paper = ['B', 'Y']
const scissors = ['C', 'Z']

const rockPapperScissors = arr.map((item) => {
    return item.split(' ')
})

const winnerMe = rockPapperScissors.map(([opponent, me]) => {
    if (opponent === rock[0] && me === rock[1]) {
        return DRAW + ROCK
    }
    if (opponent === rock[0] && me === paper[1]) {
        return WIN + PAPER
    }
    if (opponent === rock[0] && me === scissors[1]) {
        return LOST + SCISSORS
    }
    if (opponent === paper[0] && me === rock[1]) {
        return LOST + ROCK
    }
    if (opponent === paper[0] && me === paper[1]) {
        return DRAW + PAPER
    }
    if (opponent === paper[0] && me === scissors[1]) {
        return WIN + SCISSORS
    }
    if (opponent === scissors[0] && me === rock[1]) {
        return WIN + ROCK
    }
    if (opponent === scissors[0] && me === paper[1]) {
        return LOST + PAPER
    }
    if (opponent === scissors[0] && me === scissors[1]) {
        return DRAW + SCISSORS
    }
})

// sum winnerMe
const sumWinnerMe = winnerMe.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(winnerMe, sumWinnerMe)


// X = rock = LOSE, Y = paper = DRAW, Z = scissors = WIN
const loserMe = rockPapperScissors.map(([opponent, me]) => {
    if (opponent === rock[0] && me === rock[1]) {
        return LOST + SCISSORS
    }
    if (opponent === paper[0] && me === rock[1]) {
        return LOST + ROCK
    }
    if (opponent === scissors[0] && me === rock[1]) {
        return LOST + PAPER
    }
    if (opponent === rock[0] && me === paper[1]) {
        return DRAW + ROCK
    }
    if (opponent === paper[0] && me === paper[1]) {
        return DRAW + PAPER
    }
    if (opponent === scissors[0] && me === paper[1]) {
        return DRAW + SCISSORS
    }
    if (opponent === rock[0] && me === scissors[1]) {
        return WIN + PAPER
    }
    if (opponent === paper[0] && me === scissors[1]) {
        return WIN + SCISSORS
    }
    if (opponent === scissors[0] && me === scissors[1]) {
        return WIN + ROCK
    }

})

const sumLoserMe = loserMe.reduce((acc, curr) => {
    return acc + curr
}, 0)


console.log(sumLoserMe)

