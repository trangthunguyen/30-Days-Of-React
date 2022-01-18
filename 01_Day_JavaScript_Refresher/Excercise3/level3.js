const personAccount = {
firstName: 'Trang',
lastName: 'Nguyen',
incomes: 1000000000,
expenses: 20000000000,
totalIncome: function(){},
totalExpense: function(){},
accountInfo: function(){},
addExpense: function(){},
accountBalance: function(){},
}

const users = [
{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
},
]

const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
},
]

const signUp = email => {
    users.forEach(user => {
        if(user.email == email){
            return "Account already exists"
        }
    });
    return "Successfully sign up"
}

const signIn = (email, password) => {
    users.forEach(user=> {
        if(user.email == email && user.password == password){
            return true
        }
    });
    return false
}

const rateProduct = (product, user, rating) => {
    products.forEach(item => {
        if(item._id == product._id) {
            item.ratings.push({userId: user._id, rate: rating})
        }
    });
}

const averageRating = () => {
    products.forEach(product => {
        let sum=0
        product.ratings.forEach(item => {
            sum+=item.rate
        });
        return sum/product.ratings.length
    })
}

const likeProduct = () => {
    products.forEach((index,element) => {
        if(element.likes.length == 0){
            products.splice(index, 1)
        }
    });
}

