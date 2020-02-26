// 'use strict';
//
// const fs = require('fs');
//
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
//
//     main();
// });
//
// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function closedPaths(number) {
    // Write your code here

    const arrStrNum = number.toString().split('');
    let sumPaths = 0;

    arrStrNum.forEach((strNum) => {
        const intNum = parseInt(strNum);
        const arrOnePath = [0, 4, 6, 9];

       if(arrOnePath.includes(intNum)) {
            sumPaths++;
       } else if (intNum === 8) {
           sumPaths = sumPaths + 2;
       } else {
           console.log(`intNum of ${intNum}  does not have path`);
       }
    });

    console.log({sumPaths});
    console.log({arrStrNum});
    return sumPaths;
}
//
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const number = parseInt(readLine().trim(), 10);
//
//     const result = closedPaths(number);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }

closedPaths(649578);

export {
    closedPaths
}