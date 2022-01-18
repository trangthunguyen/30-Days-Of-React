let score = 100
const grade = (score>=90 && score<=100) ? 'A' :
(score>=70 && score<=89) ? 'B' :
(score>=60 && score<=69) ? 'C' :
(score>=50 && score<=59) ? 'D' : 'F' 

let month = 'February'
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

function dayHandle() {
    let day = prompt("Enter a day: ")
    day = day.toLowerCase()
    day = day.charAt(0).toUpperCase() + day.slice(1)
    if(day == 'Saturday' || day == "Sunday"){
        console.log(day + ' is a weekend.')
    } else {
        console.log(day + ' is not a weekend.');
    }
}

dayHandle()