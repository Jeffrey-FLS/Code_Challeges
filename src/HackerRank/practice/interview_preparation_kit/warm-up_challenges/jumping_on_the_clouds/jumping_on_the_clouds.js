'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    // const arrIntCloudPath = [...c+''].map(n => +n);
    const strCloudPath = c.toString();
    let arrIntCloudPath = [];
    let jumpCount = 0;

    for (let i = 0; i < strCloudPath.length; i++) {
        arrIntCloudPath.push(+strCloudPath.charAt(i))
    } 



    // arrIntCloudPath.filter((val, index) => (!val && index % 2 === 0) && arrIntPath.push(index));
    // arrIntCloudPath.filter((val, index) => (!val) && arrIntPath.push(index));



    for (let i = 0; i < c.length; i++) {

        console.log(arrIntCloudPath[i]);
        jumpCount;
        i;

        if (arrIntCloudPath[i] === 0 && arrIntCloudPath[i + 1] === 0) {
            jumpCount++;
            i++;
        } else if (arrIntCloudPath[i + 1] === 0) {
            jumpCount++;
        } else {
            continue;
        }
    }

    // QUOKKA TESTS
    strCloudPath;
    arrIntCloudPath;
    jumpCount;

    return jumpCount;
}

// Sample Test Cases
console.log(jumpingOnClouds("000010")); // Expected 3
console.log(jumpingOnClouds("0010010")); // Expected 4
console.log(jumpingOnClouds("000100")); // Expected 3
