//1
console.log(hello);                                   
var hello = 'world';   

// var hello;
//console.log(hello);
//hello = 'world
//output = undefined as the value 'hello' is under the console.log

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
//function test(){
// var needle = 'magnet';
// console.log(needle);    
//}
// test()

// output = magnet


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// console.log(brendan);
//function print(){
//    brendan = 'only okay';
//    console.log(brendan);
//} 

//output = super cool
//the function is never called , so the only value of brendan that exist is the first one


//4 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food = 'chicken';
//console.log(food);
//function eat(){
//  food = 'half-chicken';
//  console.log(food);
//  var food = 'gone';
//}
//output = chicken , half-chicken
//the gone value is never consol logged so it never shows up


//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//output = error because we call a variable that has a function as a value before declaring it [mean()]


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre);
// var genre = "disco";
// function rewind() {
//  genre = "rock";
//  console.log(genre);
//  var genre = "r&b";
//  console.log(genre);
// }
// rewind();
// console.log(genre)

//output = undefined , rock , r&b , disco
// first console is undefined cause it doesn't have a value before
// then we go at the end of the function and we it reads the rewind calling so we have rock and then r&b
// at the end it reads the last console.log , but this time it has a value before, it is disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = "san jose";
//console.log(dojo);
//function learn() {
//  dojo = "seattle";
//  console.log(dojo);
//  var dojo = "burbank";
//  console.log(dojo);
//}
// learn();
//console.log(dojo);

//output = san jose , seattle, burbank , san jose


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//function makeDojo(name, students){
//  const dojo = {};
//  dojo.name = name;
//  dojo.students = students;
//  if(dojo.students > 50){
//      dojo.hiring = true;
//  }
//  else if(dojo.students <= 0){
//      dojo = "closed for now";
//  }
//  return dojo;
//}
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));

//output = true , error
// true because the first console.log gives the value of a new variable, hiring
//error because we're trying to give dojo the value 'closed for now' , but it is a const so it can't be changed in that way
