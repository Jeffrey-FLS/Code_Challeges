"use strict";

// Complete the repeatedString function below.
function repeatedString(str, num) {
  const dividend = parseInt(num / str.length);
  const difference = num - (dividend * str.length);

  let newStr = [];
  let charACount = 0;
  let amountOfA = 0;
  let aRemainders = 0;


  // QUOKKA --------------------------------------------------------------------
  console.log(str.length);
  dividend;
  difference;
  // ---------------------------------------------------------------------------


  // CORRECT ANSWER ------------------------------------------------------------
  // newStr = str.repeat(dividend) + str.slice(0, difference);
  // newStr.split("").forEach(ele => (ele === "a") && charACount++);
  // ---------------------------------------------------------------------------


  // 1ST ALTERNATIVE -----------------------------------------------------------
  // for (let i = 0; i < dividend; i++) {
  //   newStr.push(str)
  // }

  // (difference) && newStr.push(str.slice(0, difference));
  // newStr.join("").split("").forEach(ele => (ele === "a") && charACount++);
  // ---------------------------------------------------------------------------


  // 2ND ALTERNATIVE -----------------------------------------------------------
  str.split("").forEach(ele => (ele === "a") && amountOfA++);
  charACount = dividend * amountOfA;

  str.slice(0, difference).split("").forEach(ele => (ele === "a") && charACount++);
  (difference) && newStr.push(str.slice(0, difference));  
  // ---------------------------------------------------------------------------


  // QUOKKA --------------------------------------------------------------------
  newStr;
  charACount;
  amountOfA;
  aRemainders;
  // ---------------------------------------------------------------------------

  return charACount;
}

console.log(repeatedString("abcac", 10)); // Expected 4
console.log(repeatedString("aba", 10)); // Expected 7
console.log(repeatedString("a", 1000)) // Expected 1000000000000
console.log(repeatedString("a", 1000000000000)) // Expected 1000000000000
