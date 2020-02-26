
'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
export function sockMerchant(n, ar) {
    const objAr = ar.reduce((obj, arNum) => {
        obj[arNum] = ++obj[arNum] || 1;
        return obj;
    }, {});

    let sum = 0;

    for (const key in objAr) {
        const intKey = objAr[key];

        if (intKey % 2 === 0) {
                sum = sum + (intKey / 2)
            } else if (intKey > 1) {
                sum = sum + (intKey - 1) / 2;
            }
    }

    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}