"use strict";

// Complete the countingValleys function below.
export function countingValleys(n, s) {
  const arrStrPath = s.split("");
  let intLevelPath = 0;
  let valleyCount = 0;
  let isBelowSeaLevel = false;

  for (let i = 0; i < n; i++) {
    if (arrStrPath[i] === "U") {
      ++intLevelPath;
    } else if (arrStrPath[i] === "D") {
      --intLevelPath;
    }

    if (intLevelPath < 0 && isBelowSeaLevel) {
      continue;
    } else if (intLevelPath < 0) {
      isBelowSeaLevel = true;
      ++valleyCount;
    } else if (intLevelPath >= 0) {
      isBelowSeaLevel = false;
    }
  }

  return valleyCount;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
// console.log(countingValleys(10, "UDUUUDUDDD"));
