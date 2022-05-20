// Object Enhancements Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.
// Write your code in the sections with a comment to
// “Write an ES2015 Version”.

// Same keys and values
/*
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/
const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  }
}
console.log('\nSame keys and values ES2015')
console.log(createInstructor('Kenneth', 'Chang'));

// Computed Property Names
/*
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"
/*
Computed Property Names ES2015
/* Write an ES2015 Version */
const favorite = 42;
const instructor1 = {
  firstName: "Colt",
  [favorite]: "That is my favorite!"
}
console.log('\nComputed Property Names:')
console.log(instructor1[42]);

// Object Methods
/*
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!"
  },
  sayBye() {
    return this.firstName + " says bye!"
  }
}
console.log('\nObject Methods ES2015:')
console.log(instructor2.sayBye())

// createAnimal function
// Write a function which generates an animal object.
// The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.
const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    }
  }
}

console.log('\ncreateAnimal function')
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// console.log(d)
console.log(d.bark())  //"Woooof!"


const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()) //"BAAAAaaaa"

