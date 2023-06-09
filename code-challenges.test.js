// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe('sentence', () => {
//   it("capitalizes each name", () => {
//     expect(sentence).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo Code 
// create a function called sentence that maps through our array and passes in the parameter for the character
// declare var is the key we want to split within our  character object, we split by the space
// map the new array and pass in parameter for word
// return and tell our program to upper case the value at zero index using the .charAt() and .toUpperCase () methods
// add back the rest of the name starting at the 1 index using .slice(1) to add back the rest of the name
// declare a second variable for our full name put together and pass the last split arrays we made through to put them together using the .join method
// using string interpolation we tell the program to return the value for the fullName that we created and the characters occupation to put or sentence together
// console log to see expected outcome.


const sentence = hitchhikersCharacters.map(character => {
  let capitalized = character.name.split(" ").map(word => {
     return  word.charAt(0).toUpperCase()+ word.slice(1)
  })
      const fullName = capitalized.join(' ')
      return `${fullName} is ${character.occupation}.`
})
    
console.log(sentence)



// 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudo code
// create a method called remainders that takes in an array as parameter
// create variable that stores the array filtered by the type using the .filter method.
// map the filtered array to be able to assign a second variable which I designated as my remain,  then return that var is the remainder of the number divided by 3 
// return filter val
//console log to see expected outputs. 

const remainders = (array) => {
  let filter = array.filter(item => typeof item === 'number' ).map(number => {
    let remain = number % 3
    return remain
  })
  return filter
  }
console.log(remainders(hodgepodge1));
console.log(remainders(hodgepodge2));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe('cuber', () => {
  it("returns sum of all numbers cubed", () => {
    expect(cuber(cubeAndSum1)).toEqual(99);
    expect(cuber(cubeAndSum2)).toEqual(1125);
  })
})


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo Code
// create method called cuber that takes the array as a parameter.
// create variable in which numbers array gets mapped and with the variable of num that returns the values as numbers instead of string by using the parseInt method.
// return cube number by using exponential operator
// return the numbers and using the .reduce method we can take all of the numbers within my array and makes it into one element, specifying that I wanted each number to add to the next. 
// console log to see expected output.


const cuber = (numArray) => {
  let numbers = numArray.map( num => {
    return parseInt(num) ** 3
  })
  return numbers.reduce((a , b) => a + b , 0)
}
console.log(cuber(cubeAndSum1));
console.log(cuber(cubeAndSum2));