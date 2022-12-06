const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, 'input'), 'utf8');

for (let i = 0; i < input.length; i++) {
    const uniqueRow = [...new Set([input[i], input[i-1], input[i-2], input[i-3]].filter(x => x))] 
    if (i-3>=0 && uniqueRow.length === 4) {
        console.log(i+1)
        break
    }
}

for (let i = 0; i < input.length; i++) {
    const arrayOf14 = []
    for (let j = 0; j < 14; j++) {
        arrayOf14.push(input[i-j])
    }
    const uniqueRow = [...new Set(arrayOf14)] 
    if (i-3>=0 && uniqueRow.length === 14) {
        console.log(i+1)
        break
    }
}
