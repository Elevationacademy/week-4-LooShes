const validator = require('validator')

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)

console.log(validator.isEmail('foo@bar.com'))
console.log(validator.isEmail("shoobert@dylan"))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

function telephoneCheck(str) {
    const isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str)
    console.log(isphone)
}
telephoneCheck("786-329-9958")

//Ex. 3
//Use the following blacklist

//Along with validator's `blacklist` method to clean this text:
console.log(validator.blacklist("I'M SO EXCITED!!!~!", ["!", "?", ".", "@", "~", ",", "'"]).toLowerCase())

//Ultimately, it should print "im so excited"

const faker = require('faker')

const makeHuman = function (people) {
    for (i = 0; i < people; i++) {
        const fakeName = faker.name.findName()
        const fakeImg = faker.image.avatar()
        const fakeCompany = faker.company.companyName()

        console.log(fakeName)
        console.log(fakeImg)
        console.log(fakeCompany)
    }
}

makeHuman(3)