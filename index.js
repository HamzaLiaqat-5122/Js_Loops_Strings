// Loops and Strings

// Loops: We use Loops to perform repeated actions.For Example - if you are designed a task of printing numbers from 1 to 100, it will be very hectic to do it manually,Loops help us to automate such tasks.

/* Types of Loops in JavaScript:
For loop -> loop a block of code no of times.
for in loop -> loops through the keys of an object. 
for of loop -> loops through the values of an object.
while loop -> loops a block based on specific condition.
do-while loop -> while loop variant which runs at-least once.
*/

/* The for loop: The syntax of a for loop looks something like this
for(statement 1; statement 2; statement 3){
    // code to be executed  
}

>> Statement 1 is executed one time
>> Statement 2 is the condition  based on which the loop runs (loop body is executed.)
>> Statement 3 is executed everytime the loop body is executed.
*/

/* The for-in loop: The syntax of a for-in loop looks something like this
for (key in object){
    code to be executed
}
The for-of loop: The syntax of a for-of loop looks something like this
for(variable of iterable){
        // code
}
The while loop: The syntax of a while loop looks something like this
for(condition){
        // code
} Note: if the condition never becomes false, the loop will never end and this might crash the runtime.
 
do-while loop: The syntax of a do-while loop looks something like this
do{
    code to be executed
}while(condition)
const prompt = require('prompt-sync')();
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i = 10;
do{
    console.log(i)
    i++;
}while (i<n) // This will show 10 because in do-while loop first execution,then condition checks! if condition is true then it will execute and it executes at least one time

const obj = {
    item : "single",
    product : "multiple",
    value : 0,
    isChange : "No"
}
console.log(obj);
"red ribbon code"
"loop in"
"execute"
*/

// Practice Question
let a = prompt("What is the Capital of Pakistan")
let score;
while (a != Islamabad) {
   a = prompt("Try Again")
}
if (a == Islamabad){
    console.log("Correct!")
}

for (let i = 0; i < 5; i++) // For Loop in this condition will print numbers less than 5 .. 0,1,2,3,4 //it will print i = n - .
{console.log(i);} //{console.log(i + 1);} In this case it will start from 1 to .
// Program to add first n natural number.
let sum = 0
const prompt = require('prompt-sync')();
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
 sum += (i + 1) 
 console.log(i + 1), "+"
}
console.log("Sum of first" + n + "natural numbers is" + sum );
// Quick Quiz : Write a sample for loop of your choice.
// program to display text 100 times
const nu = 100;
//looping from i = 1 to 100
// in each iteration, i is increased by 1
for (let i = 1; i <= nu; i++) {
 console.log(i,'.I Love You');     // printing the value of i
}
let obj = {
 hamza : 90,
 subhan : 45,
 sana : 56,
 laiba :57,
 Usman :23
}
// For in Loop
for (let a in obj){
 console.log("Marks of " + a + " are " + obj[a])
}
// For of Loop
for (let b of "Hamza"){ // it print numbers of letter of hamza in for in loop and letters in for of loop
 console.log(b)
} 


// Strings: Strings are used to store and manipulate text.
let namee = "hamza" // is a string.

// Template Literals: They are backtics instead of quotes to define strings.
let nameee = `Hamza` // with them we can use both single and double quotes inside string.

// String interpolation: We can insert Variables directly in template literal.
let avc = ` This is ${namee}`  // prints hamza

let name = "hamza"
// console.log(name.length)
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
let friend = 'subhan'
console.log(friend);

// Template Literals
let boy1 = "Usman"
let boy2 = "Jazib"
// jazib is a friend of Usman.
let sentence =`${boy1} is a friend of ${boy2}`
console.log(sentence)

// Escape Sequence Characters
let fruit = 'Bana\'na' // \' is a single character
// let fruit = 'Bana\nna' // \n will used to print bana in one line and na in the other.
console.log(fruit)
let vegetable = "pota\"to" 
console.log(vegetable);
let actor = 'sr\tk'
console.log(actor);
let movie = 'jawa\rn'
console.log(movie);

let namees = "hamza"
// console.log(name.length);

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2,4)) // from 2 to 3. 4 is not included.
// console.log(name.slice(2) ) // in this example 2 is written inside slice which means it will print after 2 letters.
// console.log(name.replace("ham", "nam"));
let friends = "Usman"
console.log(name.concat(" is a friend of ", friends, " Ok" ));
let friend2 = "          Subhan       "
console.log(friend2.trim()) // it will remove the unwanted spaces
