function monthHandle(month, year) {
    let days
    month = month.toLowerCase()
    month = month.charAt(0).toUpperCase() + month.slice(1)
    if(month == 'January' || month == 'March' || month == 'May' || month == 'July'
    || month == 'August' || month == 'October' || month == 'December') days=31
    else if (month == 'February') {
        if(year%4) days=29
        else days=28
    } else days=30
    return month + 'has' + days + 'days.'
}
