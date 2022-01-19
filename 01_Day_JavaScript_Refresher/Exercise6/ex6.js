const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

let sum = 0
products.forEach(product => {
    console.log(product.price);
    sum+=product.price
});

products.forEach(product => {
    let price = (/[\s]/g.test(product.price) || product.price.length==0) ? 'unknown' : product.price
    console.log(`The price of ${product.product} is ${price} euros.`);
});

const prices = products.map(item => item.price)
// console.log(prices);

const pricesWithFilter = products.filter(item => typeof item.price === 'number')

const sumByReduce = products.reduce((acc, cur) => {
        if(typeof cur.price === 'number'){
            return acc + cur.price
        }
        return acc
}, 0)

const first = products.find(product => (/[\s]/g.test(product.price) || product.price.length==0))
const firstIndex = products.findIndex(product => (/[\s]/g.test(product.price) || product.price.length==0))
const checkSome = products.some(product => !(/[\s]/g.test(product.price) || product.price.length==0))
