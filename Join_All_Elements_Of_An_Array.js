// Write a simple JavaScript program to join all elements of the following array into a string where each word need to separated by comma.

const JoinAllElements = (namesArray) => {
  // Approach-1

  console.log(namesArray.reduce((acc, cur) => acc + "," + cur)); // output: Red,Green,White,Black

  // Approach-2

  console.log(namesArray.toString()); // output: Red,Green,White,Black

  // Approach-3

  console.log(namesArray.join()); // output: Red,Green,White,Black
};

JoinAllElements(["sai", "bhanu", "sekhar", "reddy", "bandi"]);
