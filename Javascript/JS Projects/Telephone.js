

var telephone="";
var telArray=[];
let justNums = /[0-9]/;
let allowedNum =  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
        

var codeArea = [];
var first = [];
var second = [];

function validate(){

    telephone = document.getElementById('number').value;
    document.getElementById('number').value = "";
    for(let c in telephone){
        if(telephone[c].match(justNums)){
            telArray.push(telephone[c]);
        }
    }

    if(telArray.length !=10 && telArray.length !=11){
        console.log('Invalid');  
        startAgain();
        document.querySelector('.outcome').innerHTML = 'Invalid Number';
        return "Invalid number";
    }
    if(allowedNum.test(telephone)){
        console.log('valido');
        startAgain();
        document.querySelector('.outcome').innerHTML = 'Valid Number';
        return "Valid number";
    }else{
        startAgain();
        console.log('Invalid');
        document.querySelector('.outcome').innerHTML = 'Invalid Number';
        return "Invalid number";
    }

    

    
    
}

function startAgain(){
    telArray=[];
    telephone="";
}
document.getElementById('submit').addEventListener("click",validate);