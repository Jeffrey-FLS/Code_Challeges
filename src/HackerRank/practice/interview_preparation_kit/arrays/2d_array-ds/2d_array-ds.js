"use strict";

// Pushing to commit

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let arr2D = [];
    let arrPosition = 0;
    let arr2DSum = [];


    for (let i=0; i < 6; i++) {
        arr2D.push(new Array(6))
    };

    // let arr2D = [new Array(6), new Array(6)];

    for (let i=0; i < arr2D.length; i++) {
        for (let k=0; k < arr2D[i].length; k++) {
            arr2D[i][k] = arr[arrPosition];
            arrPosition++;
        } 
    }

    arr2D.forEach((arr, i) => {
        let sum = 0;

        for (let k=0; k < arr.length; k++) {
            if (k !== 3 || k !== 5) {sum += arr[k]}
        };

        arr2DSum.push(sum);
    });



    arr2D;
    arr2DSum;

}

console.log(hourglassSum([1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,2,4,4,0,0,0,0,2,0,0,0,0,1,2,4,0])); // Expect 19
// console.log(hourglassSum([1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,9,2,-4,-4,0,0,0,0,-2,0,0,0,0,-1,-2,-4,0])); // Expect 13
// console.log(hourglassSum([-9,-9,-9,1,1,1,0,-9,0,4,3,2,-9,-9,-9,1,2,3,0,0,8,6,6,0,0,0,0,-2,0,0,0,0,1,2,4,0])); // Expect 28
