let u = '30 Days of Javascript';
console.log ( u )
console.log ( u.length)
console.log ( u. toUpperCase())
console.log ( u. toLowerCase())
console.log (u.substr(2,6))
console.log (u. substring(2))
console.log (u.split(' '))

let firstName = 'Mujeeb';

console.log (firstName.trim(''))
console.log (firstName.includes('d'))
console.log (firstName.includes('M'))
console.log (firstName.replace('Mujeeb', 'Abdul'))
console.log(firstName.charAt(1))

let lastIndex = firstName.length - 1
console.log (firstName.charAt(lastIndex))

console.log(firstName.charCodeAt(3))
console.log (firstName.charCodeAt(lastIndex))
console.log(firstName.indexOf('e'))

console.log(firstName.lastIndexOf('e'))
console.log(firstName.concat(" Shaik"))
console.log (firstName.startsWith('M'))
console.log (firstName.endsWith('e'))
console.log (firstName.search('e'))
console.log(firstName.search(/Mujeeb/g))
console.log(firstName.match('e'))
console.log (firstName.repeat(10))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line
