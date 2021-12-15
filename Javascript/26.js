//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const convert = (rain) => {
    let result ='';
    if(rain % 3 === 0){
      result += 'Pling'
    }
    if (rain % 5 === 0){
      result += 'Plang'
    }
    if(rain % 7 === 0){
      result+= 'Plong'
    }
    return result ===''? rain. toString() : result 
  };