const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

const getPersonInfo = () => {
    const {firstName, lastName, age, country, job, 
        skills : [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven, skillEight, skillNine], 
        languages : [language1, language2, language3]
    } = person

    return `${firstName} ${lastName} lives in ${country}. He is  ${age} years old. He is an ${job}. 
    He teaches ${skillOne}, ${skillTwo}, ${skillThree}, ${skillFour}, ${skillFive}, ${skillSix}, ${skillSeven}, ${skillEight} and ${skillNine}.
     He speaks ${language1}, ${language2} and a little bit of ${language3}`
}

console.log(getPersonInfo());