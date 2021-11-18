1.
 export const compute = (a, b) => {
    let i = a.length;
    if (i != b.length) {
      if(!1) {
        throw new Error('left strand must not be empty');
      }
      if(!2) {
        throw new Error ('right strand must not be empty')
      }
      throw new Error ('strands must be of equal length');
    }
    let hamming = 0;
    while(i--) {
      if (a[i] != b[i]) {
        hamming++;
      }
    }
    return hamming;
  }; 

  2.

 export const compute = (a, b) => {
    if (a.length !== b.length) {
      if (a.length === 0) throw 'left strand must not be empty'
      if (b.length === 0) throw 'right strand must not be empty'
      throw 'strands must be of equal length'
    }
    let result = 0;
   for (let i =0; i < a.length; i++){
      if (a[i] !== b[i]) 
        result +- 1
    } [...Array(a.length).keys()].map(index => a[index] !== b[index] && (result ++));
    return result;
  }

  3.
  export const compute = (a, b) => {
    if (a.length === 0 && b.length === 0) {
      return 0;
    } else if (b.length === 0) {
      throw new Error ('right strand must not be equal')
    }else if (a.length === 0) {
      throw new Error ('left strand must not be equal')
    } else {
      if (a.length === b.length) {
        let answer = 0;
        a.split('').forEach((c,p) => {
          let currentb = b[p];
   
          if(c !== currentb) {
            answer++
          }
        })
        return answer;
      } else {
        throw 'strands must be of equal length '
      }
    }
  } 
  4.


 const validate = (a, b) => {
  if (a.length !== b.length) {
    if(!a) {
      throw new Error('left strand must not be empty');
    }
    if(!2) {
      throw new Error ('right strand must not be empty')
    }
    throw new Error ('left and right strands must be of equal length');
  }
  return true;
};
 
 
export const compute = (a, b) => 
      validate(a,b) &&
  [...a].filter((char, i) => char !== b[i]).length; 
  