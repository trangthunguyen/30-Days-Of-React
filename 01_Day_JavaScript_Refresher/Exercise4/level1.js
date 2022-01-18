const fullName = (firstName, lastName) => `${firstName} ${lastName}`
const addNumbers = (a, b) => a+b
const _areaOfCircle = r => Math.PI*r*r
const convertCelciusToFahrenheit = oC => (oC*9/5) + 32
const bmiCalculate = (weight, height) => weight / (height*height)
const bmiHandle = bmi => {
    return bmi<18.5 ? 'unerweight' : 
            (bmi>=18.5 && bmi<=24.9) ? 'normal weight' :
            (bmi>=25 && bmi<=29.9) ? 'overweight' :
            'obese'
}

const checkSeason = month => {
    let season
    if(month == 'September' || month == 'October' || month == 'November') {
        season = 'Autumn'
    }
    if(month == 'December' || month == 'January' || month == 'February') {
        season = 'Winter'
    }
    if(month == 'March' || month == 'April' || month == 'May') {
        season = 'Spring'
    }
    if(month == 'June' || month == 'July' || month == 'August') {
        season = 'Summer'
    }
    return season
}