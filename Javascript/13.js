//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const reverseSting = (string) => {
  let strin = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    strin += string[i];
  }
  return strin;
};

//         second
export const reverseString = (string) => string.split("").reverse().join("");
