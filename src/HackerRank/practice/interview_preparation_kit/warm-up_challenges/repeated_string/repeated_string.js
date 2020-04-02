"use strict";

// Complete the repeatedString function below.
function repeatedString(str, num) {
  const dividend = parseInt(num / str.length);
  const stringLength = str.length;
    let arrNewStr = [];
  let charACount = 0;

  for (let i = 0; i < num; i++) {
    // let k = 0;

    // while (k < str.length || i < num) {

    // }


    for (let k = 0; k < str.length; k++) {
      k;

      ++i;

      arrNewStr.push(str.charAt(k))


      if (str.charAt(k) === "a") {
        charACount++;
      } else if (i < num) {
          break;
      }

      charACount;
      console.log(str.charAt(k));
      i;
    }
    i;
  }

  // for (let i = 0; i < dividend; i++) {
  //     arrNewStr.push(str);
  // }

  // QUOKKA TEST
  dividend;
  stringLength;

  //   arrNewStr;
  console.log(arrNewStr.length);

  //   return arrNewStr.join("").length;
  return charACount;
}

console.log(repeatedString("abcac", 10)); // Expected 4
// repeatedString("aba", 10) // Expected 7
// repeatedString("a", 1000000000000) // Expected 1000000000000
