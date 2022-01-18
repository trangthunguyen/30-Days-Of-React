let dog = {}
console.log(dog);
dog.name = "cun"
dog.legs = 4
dog.color = 'white'
dog.bark = function(){
    return "woof woof"
}
console.log(Object.values(dog))
dog.breed = 'animal'
dog.getDogInfo = function(){
    return `name=${this.name}, legs=${this.legs}, color=${this.color}, breed=${this.breed}, bark=${this.bark()} `
}
console.log(dog.getDogInfo());