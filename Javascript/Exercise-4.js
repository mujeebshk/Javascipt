export function frontDoorResponse(line) {
    let frontDoorResponse = line[0];
    return frontDoorResponse
  }

export function frontDoorPassword(word) {
    let frontDoorPassword = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return frontDoorPassword
  }
  
export function backDoorResponse(line) {
    let backDoorResponse = line.trim();
    return backDoorResponse[backDoorResponse.length-1]
  } 

  
export function backDoorPassword(word) {
    let backDoorPassword = word[0].toUpperCase() + word.slice(1).toLowerCase() + ', ' + 'please';
    return backDoorPassword
  }