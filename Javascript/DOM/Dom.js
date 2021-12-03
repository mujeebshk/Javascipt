// Getting elements by tag name 

let  allNAmes = document.getElementsByTagName('h1')

console.log(allNAmes)
console.log(allNAmes.length) // 4

for (let i = 0; i < allNAmes; i++) {
    console.log(allNAmes[i]) // prints each elements in Collection HTMl
}


//Getting elements by class name 

let allNAmes = document.getElementsByClassName('name')

console.log(allNAmes)
console.log(allNAmes.length) // 4

for (let i = 0; i < allNAmes; i++) {
    console.log(allNAmes[i]) // prints each elements in Collection HTMl
} 

// Getting elements by id 

let allNAmes = document.getElementById('nameid1')
console.log(nameid1)

// Getting elements by using queryselector methods 

let nameid1 = document.querySelector('h1')
let nameid1 = document.querySelector('#nameid1')
let nameid1 = document.querySelector('.name')

// queryselectorAll 

const allNAmes = document.querySelectorAll('h1')
console.log(allNAmes.length) // 4
for(let i = 0; i < allNAmes.length; i++){
    console.log(allNAmes[i])
}

allNAmes.forEach(name => console.log(name));

const allNAmes = document.querySelectorAll('.name')

// Adding attribute 

const allNAmes = document.querySelectorAll('h1')
allNAmes[3].class = 'name'
allNAmes[3].id = 'nameid4'

// Adding attribute and setAttribute

const allNAmes = document.querySelectorAll('h1')
allNAmes[3].setAttribute('class', 'name')
allNAmes[3].setAttribute('id', 'nameid4')

// Adding attribute without setattribute

allNAmes[3].className = 'name'
allNAmes[3].id = 'nameid4'

// Adding class using classList

allNAmes[3].classList.add('name', 'header-name')

// Removing class usinng remove

allNAmes[3].classList.remove('name', 'header-name')

// Adding text to HTML element

const allNAmes = document.querySelectorAll('h1')
allNAmes[3].textContent = 'name1d4'

// Adding style color

const allNAmes = document.querySelectorAll('h1')
allNAmes.forEach((name, i) => {
  name.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    name.style.color = 'green'
  } else {
    name.style.color = 'red'
  }
})

// Adding style backgroung color 

const allNAmes = document.querySelectorAll('h1')
allNAmes.forEach((name, i) => {
  name.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    name.style.backgroundColor = 'green'
  } else {
    name.style.backgroundColor = 'red'
  }
}) 

// Adding style Font Size

const allNAmes = document.querySelectorAll('h1')
allNAmes.forEach((name, i) => {
  name.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    name.style.fontSize = '20px'
  } else {
    name.style.fontSize = '30px'
  }
})