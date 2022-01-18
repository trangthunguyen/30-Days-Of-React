const userIdGeneratedByUser = () => {
    const input1 = prompt()
    const input2 = prompt()
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
    for(let it=0; it<input2; it++){
        let str = ' '
        for ( let i = 0; i < input1; i++ ) {
            str += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        res += `${str}\n`
    }
    return res
}

// console.log(userIdGeneratedByUser());

const shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const factorial = num => {
    let t=1
    for(let i=1; i<=num; i++)
        t*=i
    return t
}

const isEmpty = param => {
    if(Array.isArray(param))
        if(param.length) return false
        else return true 
    else if(typeof param === 'string') 
        if(param.replace(/\s/g,'') == '') return true
        else return false
    return false
}

const average = arr => {
    let sum = 0
    for (const item of arr) {
       if(typeof item === 'number') sum+=item
       else return 'not Number'
    }
    return sum/arr.length
}