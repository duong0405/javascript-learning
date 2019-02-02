let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!')
console.log(10 + 20 + 30 + 40);

console.log("Jonas");
console.log(23);

let firstName = "Andrew";
let first = "JJ";
let firstNamePerson;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let first_name = "JD";
let $function = 27;

let person = "Andrew";
let PI = 3.1415;

let myFirstJob = "Programer";
let mySecondJob = "Writer";

let job1 = 'Programer';
let job2 = 'Writer';

console.log(myFirstJob);


// data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 10);
console.log(typeof 'Andrew');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);

// let, const, var

// let to define a variable that values can change later
let age = 30;
age = 31;

// const to define a variable that not supported to change 
const birthYear = 1995;
// birthYear = 2000;
// const job;


// let vs var: block scode vs function scope ???
// never use var
var job = 'programer';
job = 'writer';
console.log(job);

// Basic Operator

// Math operator
const now = 2030;
const myAge = now - 1995;
const ageAdrew = now - 1991;
console.log(myAge, ageAdrew);

console.log(myAge * 2, myAge / 2, 2 ** 3);

const fName = "Dan";
const lName = "Tae";
console.log(fName + " " + lName);

// Asignment operator
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;
x--;         
console.log(x);

// Comparison operator
console.log(5 > 4);
console.log(myAge > ageAdrew);
console.log(myAge >= 18);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (myAge + ageAdrew) / 2;
console.log(averageAge);