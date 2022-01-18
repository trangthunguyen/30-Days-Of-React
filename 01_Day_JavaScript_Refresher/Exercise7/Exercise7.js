class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    shout() {
        return 'i am an animal'
    }
    get getName() {
        return this.name
    }
    get getAge() {
        return this.age
    }
    get getColor() {
        return this.color
    }
    get getLegs() {
        return this.legs
    }
    set setName(name) {
        this.name = name
    }
    set setAge(age) {
        this.age = age
    }
    set setColor(color) {
        this.color = color
    }
    set setLegs(legs) {
        this.legs = legs
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, cute) {
        super(name, age, color, legs)
        this.cute = cute
    }
    shout() {
        return 'woof woof'
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, size) {
        super(name, age, color, legs)
        this.size = size
    }
    shout() {
        return 'meow meow'
    }
}