
"use strict";

// Pushing to git

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let arr2D = [];
  let arrPosition = 0;
  let arr2DHourglass = [];
  let arr2DSum = [];

  // Instantiating array template for 2D array
  for (let i = 0; i < 6; i++) {
    arr2D.push(new Array(6));
  }

  // Populating the 2D array
  for (let i = 0; i < arr2D.length; i++) {
    for (let k = 0; k < arr2D[i].length; k++) {
      arr2D[i][k] = arr[arrPosition];
      arrPosition++;
    }
  }

  // Populating the hourglass values from arr2D
  for (let i = 0; i < arr2D.length - 2; i++) {
    for (let k = 0; k < arr2D.length - 2; k++) {
      let arrHourglass = [];

      for (let m = 0; m < 3; m++) {
        arrHourglass.push(arr2D[i][k + m]);
      }

      arrHourglass.push(arr2D[i + 1][k + 1]);

      for (let m = 0; m < 3; m++) {
        arrHourglass.push(arr2D[i + 2][k + m]);
      }

      arr2DHourglass.push(arrHourglass);
    }
  }

  // Adding arr2DHourglass to another array
  for (let i=0; i < arr2DHourglass.length; i++) {
      let sum = 0;

      for (let k=0; k < arr2DHourglass[i].length; k++) {
        sum += arr2DHourglass[i][k];
      }

      arr2DSum.push(sum)
  }

  // Returning the max value from the arr2DSum array
  return Math.max(...arr2DSum);
}

console.log(hourglassSum([1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,2,4,4,0,0,0,0,2,0,0,0,0,1,2,4,0])); // Expect 19
console.log(hourglassSum([1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,9,2,-4,-4,0,0,0,0,-2,0,0,0,0,-1,-2,-4,0])); // Expect 13
console.log(hourglassSum([-9,-9,-9,1,1,1,0,-9,0,4,3,2,-9,-9,-9,1,2,3,0,0,8,6,6,0,0,0,0,-2,0,0,0,0,1,2,4,0])); // Expect 28
