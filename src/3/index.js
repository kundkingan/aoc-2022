const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, "input"), 'utf8');

const arr = input.split(`\n`)
arr.pop()

const getPriority = (character) => {
    const charCode = character.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
        return charCode - 96
    }
    if (charCode >= 65 && charCode <= 90) {
        return charCode - 64 + 26
    }
}

const getCommonCharacter = (str) => {
    const firstHalf = str.slice(0, str.length / 2)
    const secondHalf = str.slice(str.length / 2)
    for (let i = 0; i < firstHalf.length; i++) {
        if (secondHalf.includes(firstHalf[i])) {
            return firstHalf[i]
        }
    }
}

const getPrioritySum = (array) => {
    return array.reduce((acc, curr) => {
        return acc + getPriority(curr)
    }, 0)
}

const allCommonCharacters = arr.reduce((acc, curr) => {
    return [...acc, getCommonCharacter(curr)]
}, [])
console.log(getPrioritySum(allCommonCharacters))


const getCommonCharacter2 = (arrayOfThree) => {
    const [first, second, third] = arrayOfThree
    for (let k = 0; k < first.length; k++) {
        const char = first[k]
        if (second.includes(char) && third.includes(char)) {
            console.log('hit on ' + char)
            return char
        }
    }
}

const chars = []
const g = []
for (let i = 0; i < arr.length; i += 3) {
    chars.push(getCommonCharacter2(arr.slice(i, i + 3)))
}

console.log(g.length)
console.log('length of chars: ' + chars.length)
console.log(getPrioritySum(chars))



