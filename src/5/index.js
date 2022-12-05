const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, 'input'), 'utf8');

const arrayOfStrings = input.split(`\n`)
arrayOfStrings.pop()

const object = {
    1: [
        'H',
        'R',
        'B',
        'D',
        'Z',
        'F',
        'L',
        'S'
    ],
    2: [
        'T',
        'B',
        'M',
        'Z',
        'R'
    ],
    3: [
        'Z',
        'L',
        'C',
        'H',
        'N',
        'S'
    ],
    4: [
        'S',
        'C',
        'F',
        'J'
    ],
    5: [
        'P',
        'G',
        'H',
        'W',
        'R',
        'Z',
        'B',
    ],
    6: [
        'V',
        'J',
        'Z',
        'G',
        'D',
        'N',
        'M',
        'T'
    ],
    7: [
        'G',
        'L',
        'N',
        'W',
        'F',
        'S',
        'P',
        'Q'
    ],
    8: [
        'M',
        'Z',
        'R'
    ],
    9: [
        'M',
        'C',
        'L',
        'G',
        'V',
        'R',
        'T'
    ]
}


const movement = arrayOfStrings.map((string) => {
    const [, number, , from, , to] = string.split(' ')
    return [number, from, to]
})

const part1 = (stacks) => {

    movement.forEach(([nrOfItems, fromIndex, toIndex]) => {
        const from = stacks[fromIndex]
        const to = stacks[toIndex]

        for (let i = 0; i < nrOfItems; i++) {
            to.push(from.pop())
        }
    })

    const lastItems = Object.values(stacks).map((stack) => stack[stack.length - 1]).join('')
    console.log(lastItems)
}

const part2 = (stacks) => {
    movement.forEach(([nrOfItems, fromIndex, toIndex]) => {
        const from = stacks[fromIndex]
        const to = stacks[toIndex]

        const lastItems = from.splice(from.length - nrOfItems, nrOfItems)
        to.push(...lastItems)
    })

    console.log(stacks)
    const lastItems = Object.values(stacks).map((stack) => stack[stack.length - 1]).join('')
    console.log(lastItems)
}

// part1(object)
part2(object)
