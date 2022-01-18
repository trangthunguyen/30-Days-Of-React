const {countries} = require('./contries.js')
const {webTechs} = require('./web_techs.js')

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.' 
let textToArr = text.replaceAll(/.,/g, '').split(/\s/g)
console.log(textToArr, textToArr.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meet')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea'
console.log(shoppingCart);

if(countries.includes('Ethiopia'))
    console.log('ETHIOPIA');
else contries.push('Ethiopia')

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Level 3:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
ages.sort()
const min = ages[0]
const max = ages[ages.length-1]
const medianAge = (max-min)/2
const averageAge = (ages.reduce(reducer)/ages.length)
const range = max-min
console.log(Math.abs(min-averageAge));
console.log(Math.abs(max-averageAge));

const dividedCountries = countries.slice(0, 11)
countries.length%2 ? console.log(countries[length/2]) : console.log(countries[(length-1)/2], countries[length/2]);

if(countries.length%2) {
    const countries1 = countries.slice(0, countries.length/2+1)
    countries1.push('Vietnam')
    const countries2 = countries.slice(countries.length/2+1, countries.length)
} else {
    const countries1 = countries.slice(0, (countries.length-1)/2)
    const countries2 = countries.slice((countries.length-1)/2, countries.length)
}