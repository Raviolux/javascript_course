
let snitch = {
    alpha : "satana",
    bravo : "satana",
    charlie : "satana",
    delta : "belzebu",
    echo : "asmodeus",
    foxtrot : "bafometto"
}

console.log(snitch['alpha'])

let listarray = [
    'hydrojet',
    667,
    true,
    'bananavio',
    { altair : "ibn la-ahad"}
]

console.log(listarray[0])

// Arrow functions
const ababa = function(name) {
    return (name + ' patacca ')
}

const abubu = name => name + ' gnagnagna '
const ebebe = (name, tame, gnome) => {
    this.name = tame + ' salame ' + name + ` non so a cosa serva `
    return gnome + ' alliscchio ' + this.name
}

console.log(ababa('ciambella'), abubu('ciambollo'), ebebe('aha', 'cavallo', 'termaglietta'))

// let person = prompt("Enter your name to be remembered forever in the Jedi Order annals!", "Mace Windu")

// if (confirm(`Are you really ${person}?!?`)) {
// alert(`Behold, everyone, the mighty ${person}!`) } else {
//     alert("Get this imposter out of my sight!")
// }

// console.log(person)




let liston = [
    'do this',
    'do that',
    'don\'t eat',
    'neighbors\' cat',
    'hahahahaahahha i got you!'
]

let coerced
let isCoerced
let choice = prompt('type a number from 0 to 3', '0')
console.log(choice)

if (choice > 3 || choice < 0) {
    choice = 4
    coerced = true
}

if (coerced == true) {
    isCoerced = 'and the number was outside bounds so it has been coerced to 4'
} else {
    isCoerced = 'and the number was inside bounds so it hasn\'t been coerced'
}

if (typeof choice == undefined) {
    alert('quit you did')
} else {
    alert(liston[choice])
    console.log(`the choice has been "${liston[choice]}" with index ${choice} ${isCoerced}`)
}