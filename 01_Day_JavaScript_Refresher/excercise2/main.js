    //1
//============

const { webTechs } = require("./webtechs");

const { countries } = require("./countries")
console.log(webTechs);

console.log(countries)

//============
    //2
//============

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

//============
    //3
//============

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0] != "Meat"){
    shoppingCart.reverse()
    shoppingCart.push("Meat")
    shoppingCart.reverse();
}

if(shoppingCart[shoppingCart.length-1] != "Sugar")
    shoppingCart.push("Sugar")

let allergy = true;

if(allergy && shoppingCart.includes("Honey"))
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"

console.log(shoppingCart)

//============
    //4
//============

if(countries.includes("Ethiopia"))
    console.log("ETHIOPIA")
else
    countries.add("Ethiopia");

//============
    //5
//============

if(webTechs.includes("Sass"))
    console.log("Sass is a CSS preprocess")
else{
    webTechs.push("Sass");
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = []

frontEnd.forEach(x => fullStack.push(x))
backEnd.forEach(x => fullStack.push(x))

console.log(fullStack)
