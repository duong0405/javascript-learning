// LECTURE #1: Values and Variables
const country = 'Vietnam';
const continent = 'Asian';
let population = 70;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE #2: Data types
const isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(population);
console.log(language);

// LECTURE #3: let, const, var
language = 'vietnamese';
population = 90;
console.log(language);
console.log(population);

// LECTURE #4: Basic Operators
const halfOfPopulation = population / 2;
console.log(halfOfPopulation);

console.log(population + 1);

const FinlandPopulation = 60;
const isMoreThanFinland = population > FinlandPopulation;
console.log(isMoreThanFinland);

const averagePopulation = 33;
const isMoreThanAverage = population > averagePopulation;
console.log(isMoreThanAverage);

const description = 'Vietnam is in Asian, and its 90 million people speak Vietnamese';
console.log(description);

// LECTURE #5: String and Template Literals

const newDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(newDescription);

// LECTURE #6: if-else statements
if (population > 33) {
    console.log(`Vietnam's population is above average`);
} else {
    console.log(`Vietnam's population is ${population} million below average`);
}