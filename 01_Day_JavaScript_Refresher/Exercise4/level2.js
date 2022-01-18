const solveQuadratic = (a,b,c) => {
    if(a==0) return `{${-c/b}}`
    let delta=b*b-4*a*c
    if(delta<0) return 'Vo nghiem'
    else if(delta==0) return `{${-b/(2*a)}}`
    else return `{${(-b+Math.sqrt(delta)/(2*a))}, ${(-b-Math.sqrt(delta)/(2*a))}}`
}

const printArray = (arr) => 
    arr.forEach(element => {
        console.log(element);
});

const showDateTime = (date) => {
    const d=date.getDate()
    const m=date.getMonth()+1
    const y=date.getYear()
    const h = date.getHours()
    const min = date.getMinutes()
    return d + '/' + m + '/' + y + ' ' + h + ':' + min 
}

const swapValues = (x, y) => {
    const tmp = x;
    x=y
    y=tmp
} 

const reverseArray = (arr) => {
    let tmpArr
    for(let i=arr.length-1; i>=0; i--) {
        tmpArr.push(arr[i])
    }
    return tmpArr
}

const capitalizeArray = (arr) => {
    arr.forEach((element, index, arr) => {
        arr[index] = element.toLowerCase()
        arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1)
    });
    return arr;
}

// console.log(capitalizeArray(['trang']));

const addItem = item => {
    const arr = []
    return arr.push(item)
}

const removeItem = index => {
    const arr = []
    if(index>=0 && index<arr.length)
        return arr.splice(index, 1)
    return arr
}

const evensAndOdds = number => {
    return number%2 ? `The number of odds are ${number/2}\nThe number of evens are ${number/2}` :
     `The number of odds are ${number/2}\nThe number of evens are ${number/2+1}`
}

const sum = (...arr) => {
    let s=0
    arr.forEach(element => {
       s+=element 
    });
    return s
}

// const userIdGenerator = () => Math.random().toString(36).substring(2,9);

const userIdGenerator =  () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = ' ';
    for ( let i = 0; i < 7; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return res;
}