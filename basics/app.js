// Person constructor
function Person(name, birthday) {
    this.name = name
    // Date() converts a string into a date OBJECT
    this.birthday = new Date(birthday)
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        // you don;t need to wrap Math in New
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    // prints itself
    console.log(this)
}

const brad = new Person('Brad', '1981-10-9')
console.log(brad.calculateAge())

brad.banana = 'bananass'
console.log(brad.banana)
// Used in the global scope it returns the window object!
// console.log(this)
// console.log(Date('1-1-2001'))


// let dat = new Date('December 3, 1995')
// let datc = new Date(1995, 11, 3)

// console.log(dat, datc)


// primitive types may be created as objects using their constructor
// but this is stuuuuupid! This way I waste time and space
const name1 = 'Jeff'
const name2 = new String('Jeff')
console.log(typeof name1, typeof name2)

// also with functions
const getSum1 = function(x, y) {
    return x + y
}

const getSum2 = new Function('x', 'y', 'return x+ y')
console.log(getSum1(1, 2), getSum2(1, 2))

// and regexes
const re1 = /\w+/
const re2 = new RegExp('\\w+')
console.log(re1, re2)
'ma se la regex /quaLCOsa/i ritorna qualcosa case insensitive, e va scritta senza virgolette, COME LA SCRIVO CON LE VIRGOLETTE?'


