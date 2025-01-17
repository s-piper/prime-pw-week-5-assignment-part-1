console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Stephen', //first name string
  lastName: 'Piper', //las name string
  hasSiblings: true, //sibilings boolean
  shoeCount: 10, //shoes numeric
  favThreeFoods:['tacos', 'burgers', 'pizza'],
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`;
console.log(fullName); //logs full name by combining two object properties

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]); //should log first item in array; tacos
console.log(me.favThreeFoods[2]); //should log second item in array; burgers

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(`Current shoe count is ${me.shoeCount}`); //logs current shoes
me.shoeCount++; //increased shoes by 1.
console.log(`I now have ${me.shoeCount} shoes.`); //logs new count

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'purple'; //adds new property and sets value
console.log('An update about;', me); // logs object with new property and values
