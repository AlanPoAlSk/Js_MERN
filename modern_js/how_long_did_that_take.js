//Try rewriting the isPrime() function and seeing how much quicker this runs.

Number.prototype.isPrime = function() {
        // for( let i=2; i<this;i++) {  ORIGINAL LINE
        for( let i=2; i<Math.floor(Math.sqrt(this))+1;i++) {
            if( this % i === 0) {
                return false;
            }
        }
        return true;
    }
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime

// while( primeCount < 1e4 ) {    10.000
// while( primeCount < 1e5 ) {    100.000
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`The 100,000th prime number is ${num-1}`);
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//output 100.000 -> The 100,000th prime number is 1299709
//This took 4989.439167022705 milliseconds to run

// output 1.000.000 -> The 1,000,000th prime number is 15485863
//This took 163862.7895002365 milliseconds to run



// Determine if the iterative or recursive Fibonacci function is faster

// recursive
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function rFib( n ) {
            if ( n < 2 ) {
            return n;
            }
            return rFib( n-1 ) + rFib( n-2 );
    }
    console.log(rFib(20));
    console.log(`This took ${performance.now() - start} milliseconds to run`);

    //output 6765     This took 5.982666015625 milliseconds to run


    // iterative
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function iFib( n ) {
            const vals = [ 0, 1 ];
            while(vals.length-1 < n) {
                let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
            }
            return vals[n];
        }
    console.log(iFib(20));
    console.log(`This took ${performance.now() - start} milliseconds to run`);
    
    //output: 6765    This took 5.022125244140625 milliseconds to run


//   Write a more efficient function to reverse a string

    const { performance } = require('perf_hooks');
    const start = performance.now();
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    // const reversed1 = story.split("").reverse().join("");  - - - - -  -ORIGINAL CODE
    // console.log(reversed1) - - - - - - - - - - - - - - - - - - - - - - ORIGINAL CODE
    function reverse(){
        var newString = "";
        for (var i = story.length - 1; i >= 0; i--) {
            newString += story[i];
        }
        return newString;
    }
    console.log(reverse(story))
    console.log(`This took ${performance.now() - start} milliseconds to run`);

    // ORIGINAL'S OUTPUT -> This took 6.042749881744385 milliseconds to run
    // NEW VERSION'S OUTPUT -> This took 4.933166027069092 milliseconds to run