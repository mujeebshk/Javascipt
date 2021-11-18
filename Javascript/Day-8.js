function processData(input) {
    //Enter your code here
var input = input.split('\n');
var numLines = parseInt(input[0]);
var phoneBook = new Map();
for (var i = 1; i <= numLines; i++){
// 1,2; 3,4; 5,6
var inputValues=input[i].split(' ');
phoneBook.set(inputValues[0], inputValues[1]);
}
for (var j =numLines+1; j < input.length; j++){
var values= input[j].split(' ');
if(phoneBook.has(values[0])){
console.log(values[0] + '=' + phoneBook.get(values[0]));
}
else console.log('Not found');

}
}