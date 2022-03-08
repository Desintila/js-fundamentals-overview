/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
// 1.1 Call the function with "Bob" and "Steven" as arguments.
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
// 1.3. Call the function with any arguments we like to test the remaining use case.

function getShorterString(string1, string2) {
    if (string1.length < string2.length) {
        return string1
    }
    if (string1.length > string2.length) {
        return string2
    }
    else {
        return "They're the same length!"
    }
}


getShorterString('Bob', 'Steven')

getShorterString('Henrica', 'Mark')

console.log(getShorterString('Desi', 'Jona'))

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

// 2.1 Test all the scenarios by calling the function with different arguments.

function checkDirtyBirds(birdsArray) {
    let number = 0
    for (const bird of birdsArray) {
        if (bird === 'pigeon' || bird === 'seagull' || bird === 'bin chicken') {
            number++
        }

    }
    if (number >= 3) {
        return "Where the hell am I?"
    }
    else if (number === 2) {
        return "Oh god"
    }
    else if (number === 1) {
        return "Eww"
    }
    else {
        return "Birds are cute!"
    }
}


const birdsCute = ['parrot', 'swan', 'owl']
console.log(checkDirtyBirds(birdsCute))
const birds = ['pigeon', 'parrot', 'owl']
console.log(checkDirtyBirds(birds))
const birdsArray = ['pigeon', 'bin chicken', 'owl']
console.log(checkDirtyBirds(birdsArray))
const dirtybirds = ['pigeon', 'seagull', 'bin chicken']
console.log(checkDirtyBirds(dirtybirds))