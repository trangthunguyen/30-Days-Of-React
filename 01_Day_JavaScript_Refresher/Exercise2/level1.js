function ageHandle() {
    let age = prompt("Enter your age:")
    
    if(age>=18){
        console.log('You are old enough to drive')
    } else {
        console.log('You are left with ' + (18-age) + ' years to drive.');
    }
    if(age>21) {
        console.log('You are' + (22-age) + 'years older than me');
    } else if(age == 21) {
        console.log('You are my age');
    } else {
        console.log('You are' + (age-22) + 'years elder than me');
    }
}

let a = 4
let b = 3
let res=null
if(a>b) {
    res = "a is greater than b"
} else if (a<b) {
    res = "a is less than b"
} else {
    res = "a equals b"
}

res = a>b ? "a is greater than b" : a<b ? "a is less than b" : "a equals b"

function numberHandle() {
    let number = prompt("Enter a number:")
    
    if(number%2){
        console.log('not Even')
    } else {
        console.log('Even');
    }
}