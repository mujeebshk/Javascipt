//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (dateofbirth) => {
    const giga = 10**9 * 10**3;
    const birthtime = dateofbirth.getTime();
    return new Date(birthtime + giga)
  };