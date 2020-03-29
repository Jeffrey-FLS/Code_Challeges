"use strict";

// for (let i = 0; i < n; i++) {
//     if (arrStrPath[i] === "D" && prevPath.length === 1) {
//       valleyCount++;
//       prevPath = prevPath + "D";
//     } else if (arrStrPath[i] === "D" && !prevPath) {
//       prevPath = "D";
//     } else {
//       prevPath = "";
//     }
//   }

// const valleyCountCalc = (previousPath, newPath) => {
//     if (newPath === )
// }

// Complete the countingValleys function below.
export function countingValleys(n, s) {
  let declineValleyCount = 0;
  let inclineValleyCount = 0;
  let prevPath = "";
  const arrStrPath = s.split("");

  for (let i = 0; i < n; i++) {
    if (arrStrPath[i] === "U" && prevPath === "U") {
      declineValleyCount++;
      prevPath = prevPath + "U";
      continue;
    }

    if (arrStrPath[i] === "D" && prevPath === "D") {
      inclineValleyCount++;
      prevPath = prevPath + "D";
      continue;
    }

    prevPath = arrStrPath[i];
  }

  // QUOKKA TESTS
  declineValleyCount;
  inclineValleyCount;
  prevPath;
  arrStrPath;
  // ----------------------------------------------------------------

  return Math.abs(inclineValleyCount - declineValleyCount);
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
// console.log(countingValleys(10, "UDUUUDUDDD"));
