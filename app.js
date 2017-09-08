/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. 'this' keyword references the object when it is called from an object's method.
* 2. 'this' keyword is in the constructor of a class.
* 3.
* 4. possible to call bind(this) in the constructor.
* write out a code example of each explanation above
*/

// First Rule

// Second Rule

// Third Rule

// Fourth Rule * you may want to use your third rule's example to accomplish this

// explain closure:
// Accessing variables outside of the immediate lexical scope creates a closure. In other words, a closure is formed when a nested function is defined inside of another function, allowing access to the outer functions variables. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

// “Can you name two common uses for closures?”
// 1. Cache functions.
// 2. Private variables for objects.

function foo () {
  console.log(this); // what does this point to?
  // Answer: 'this' points to the global object; if it is being the console of Chrome, it's the window object; if executed in node, it's the process object.
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  // 'count' is not declared.
  let count = 0;

  const changeCount = (value) => {
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
};

const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());


// create a constructor function called "Car"
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.

// const Car = function(options) {
//   this.make = options.make;
//   this.model = options.model;
//   this.year = options.year;
//   this.speak = () => {
//     console.log(`${this.make} ${this.model} ${this.year}`);
//   };
// }

// once you get done with this, redo it all using the class keyword and a constructor function.

class Car {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }
  speak() {
    console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());

// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now

// let n = 10;
// while(n >= 1) {
//   console.log(n);
//   n--;
// }

function countDown(start) {
  if (start > 0) {
    console.log(start);
    countDown(start-1);
  }
}

countDown(10);
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
