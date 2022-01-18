class Statistics {
    constructor(array){
        this.array = array
    }
    get getArray() {
        return this.array
    }
    set setArray(array){
        this.array=array
    }
    count() {
        return this.array.length
    }
    sum() {
        return this.array.reduce((acc, cur) => acc+cur)
    }
    min() {
        return this.array.reduce((n1, n2) => (n1<n2 ? n1 : n2))
    }
    max() {
        return this.array.reduce((n1, n2) => (n1>n2 ? n1 : n2))
    }
    range() {
        return this.max()-this.min()
    }
    median() {
        return Math.floor(this.sum()/this.count())
    }

}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Median: ',statistics.median()) // 29