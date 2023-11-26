// Problem 1
// Write an arrow function that checks to see if a user is older than 18.
// If they are older than 18, the output should be:

// "You are good to go!"

// If they are not older than 18, the output should be:

// "Sorry! You must be 18 or older!"

let checkAge = (age) => {
    return age < 18 ? "Sorry! You must be 18 or older!"
    : "You are good to go!"
}
console.log(checkAge(17))
console.log(checkAge(18))

// Problem 2
// Write an arrow function that checks to see if it is currently raining.


// If it is raining, the output should be:

// "Get your rain jacket!"

// If it is not raining, the output should be:

// "No rain on today's forecast!

let checkWeather = (condition) => {
    return  condition === 'raining' ? "Get your rain jacket!"
    : "No rain on today's forecast"
}

console.log(checkWeather('raining'))
console.log(checkWeather('sunny'))

// Problem 3
// Write an arrow function that checks to see if a number is even.


// If it is even, the output should be:

// "That's an even number!"

// If it is not even, the output should be:

// "That's an odd number!"

let checkNum = (number) => {
    return number % 2 === 0 ? "That's an even number!"
    : "That's an odd number!"
}

console.log(checkNum(123))
console.log(checkNum(1234))

// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.


// If the number is greater, the output should be:

// "<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"

// If the number is less than the other number, the output should be:

// "<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"

let greaterThan = (num1,num2) => {
    return num1 > num2 ? "num1 is more than num2!"
    : "num1 is less than num2!"
}

console.log(greaterThan(7,5))
console.log(greaterThan(5,7))