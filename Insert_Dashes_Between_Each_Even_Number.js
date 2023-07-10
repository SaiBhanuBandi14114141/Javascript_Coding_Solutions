// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
// For example if you accept 025468 the output should be 0-254-6-8.

const InsertDash = (number) => {
  let result = "";
  for (let i of number.toString()) {
    //Approach-1
    if (parseInt(i) % 2 === 0) result += i + "-";
    // Approach -2
    // if (parseInt(i) % 2 !== 1) result += i + "-";
    else result += i;
  }
  return result;
};

console.log(InsertDash(1234567890));

// Output: 12-34-56-78-90-
