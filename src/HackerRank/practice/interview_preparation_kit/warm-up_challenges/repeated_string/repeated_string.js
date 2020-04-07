"use strict";

// Complete the repeatedString function below.
function repeatedString(str, num) {
  const dividend = parseInt(num / str.length);
  const stringLength = str.length;
  let arrNewStr = [];
  let charACount = 0;

  console.log(str.length);

  // Populate new string arrNewStr
  //
  let i = 0;

  console.log("HEELLOO");

  while (i <= num) {
    // let k = 0;

    // while (k < str.length || i < num) {

    // }

    // i;

    for (let k = 0; k < str.length; k++) {
      // QUOKKA TESTS ----------------------------------------------------------
      console.log(k);

      // str;

      // console.log(arrNewStr);

      // charACount;

      // console.log(str.charAt(k));

      // i;
      // -----------------------------------------------------------------------

      arrNewStr.push(str.charAt(k));

      if (i === num) {
        break;
      } else if (str.charAt(k) === "a") {
        charACount++;
      }

      i++;
    } // end for loop
  } //end while loop

  // for (let i = 0; i < dividend; i++) {
  //     arrNewStr.push(str);
  // }

  // QUOKKA TEST
  // dividend;
  // stringLength;
  // charACount;

  //   arrNewStr;
  // console.log(arrNewStr.length);

  //   return arrNewStr.join("").length;
  return charACount;
}

// console.log(repeatedString("abcac", 10)); // Expected 4
repeatedString("aba", 10); // Expected 7
// repeatedString("a", 1000000000000) // Expected 1000000000000
