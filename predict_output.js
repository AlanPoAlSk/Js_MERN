//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// my prediction is : Tesla , Mercedes
// actual output : Tesla , Mercedes
//we got this oputput because random car refers to the first index of the array; (,otherRandomCar) since it has a comma before, it refers to the second index of the array.
// to get the last Car, we should set const [, , lastCar] = cars and then console.log(lastCar) (two commas because the last car is in the third index)


//2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// my prediction in Elon , error
//actual output = Elon , error
// we got this output because only otherName is declared as a varibale
//to solve this problem , we should set employeeName as a variable too writing: const {employeeName} = employee an then set const otherName = employeeName

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// my prediction : 12345 , undefined
//actual output : 12345, undefined
//hashedPassword is undefined because we're calling it from the person's object saying that is equal to the person's password, but password is not in it , so it has no value

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
// const [, , , forth] = numbers ;
//Predict the output
console.log(first === second);
console.log(first === third);
// console.log(forth)

// my prediction : false, true
//actual output : false , true
// we have this result because we set first the variable first as second index (,first) = 2
// then we set second as 4th index (, , , second) = 5
// last we set third as 9th index ( , , , , , , , , third) = 2
// since first and second are not equal (2 != 5), the result is false
// since first and third are equal (2 = 2) , the result is true
// to declare the forth variable as forth index we set:
// const [, , , forth] = numbers ; 
// then we console.log(forth)

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
const [ , , , , , andThisWillWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(andThisWillWork);

//my prediction : value , [1,5,1,8,3,3] , 1 , 5
// actual prediction : value , [1,5,1,8,3,3] , 1 , 5
//we have this output because we set key and secondKey as a variable by destructuring the object and then as a variable willThisWork as second index of the array
// so key has value of 'value' , 
//secondKey has the value of the array = [1,5,1,8,3,3] , 
//secondKey[0] is index 0 of the array so = 1 , 
//willThisWork as second index of the array has value = 5

//6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//my prediction : Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3,name and index after loop is Ringo:4
//actual oputput : Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3,name and index after loop is Ringo:4
// var beatles declared as a global scope, so can be seen and used everywhere in the code.
// inside the for loop we would have a block scope, but since we used var and not let or const, we have instead a function scope
// var name, has again function scope, so can be seen and used only inside of the function actuallyPrintingNames
//we have this output because we start reading the var beatles , we see the function but we skip till the last line when is called
//we enter the function and we skip till the second function is called
//then both functions are actually active and give us this output

//7
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
        }
    console.log('name and index after loop is ' + name + ':' + index);
    }     
        actuallyPrintingNames()
}
printNames(beatles)
//I thing I should combine this function with the previous
//my prediction: Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3 , error -> name is not defined
//actual output: Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3 , error -> name is not defined
// we have this output because, since we used let for index and name, we created a block scope, so name and index can be seen and used only inside the for loop
// so, the second console.log will give us an error since name and index are not declared outside the for loop, but the first error (name) will stop the code from running

//8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

//my prediction: Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3
//actual output: Paul was found at index 0 ,George was found at index 1,John was found at index 2,Ringo was found at index 3
// we have that output because the console.log is inside the for loop where the scope of index and name is
// here we don't have problems or error
//we would have errors if the console.log was outside the for loop = out of scope

//9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
        composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

//my prediction: true, false
//actual output: true, false
//it produced that output because first we created a deep copy of the planet object using ...planet so they're not in the same memory's position
//the first console.log check if the value at the first index of both compositions are the same = true
//the second console.log check if the two objects are the same = false , since they're not at the same position in memory, so are equal but are not the same thing
// if it wasn't a deep copy, they would have occupied the same place in memory, so in this case the would have been  exactly equal + any change on the copy would have affected the original one too.
// we can create a shallow copy by writing const planetCopy = planet  instead of planetCopy = {...planet}
// with the deep copy, they don't occupy the same place in memory + any changes on the copy would not affect the original one 