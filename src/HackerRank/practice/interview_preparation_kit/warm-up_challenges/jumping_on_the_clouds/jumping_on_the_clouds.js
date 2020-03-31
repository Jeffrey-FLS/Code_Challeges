'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    const arrIntCloudPath = [...c+''].map(n => +n);
    let arrIntPath = [];
    // let pathCount = 0;

    arrIntCloudPath.filter((val, index) => (!val && index % 2 === 0) && arrIntPath.push(index));
    // arrIntCloudPath.filter((val, index) => (!val) && arrIntPath.push(index));

    // pathCount.filter
    

    // QUOKKA TESTS
    arrIntCloudPath;
    arrIntPath;

    return arrIntPath.length;
}

// Sample Test Cases
console.log(jumpingOnClouds("000010")); // Expected 3
console.log(jumpingOnClouds("0010010")); // Expected 4
console.log(jumpingOnClouds("000100")); // Expected 3
