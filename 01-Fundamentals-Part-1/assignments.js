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

// LECTURE #7: type conversion and coercion
const a = '9' - '5'; // expect 4
const b = '19' - '13' + '17'; // expect '417'
const c = '19' - '13' + 17;  // expect 21
const d = '123' < 57;       // expect false
const e = 5 + 6 + '4' + 9 - 4 - 2 // expect 1143
console.log(a, b, c, d, e);

// LECTURE #8: Equality operator
// const numNeighbours = Number(prompt('How many neighbour coutries does your country have?'));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// LECTURE #9: Logical Operator
if (language === 'vietnamese' && population > 50 && isIsland === false) {
    console.log('You should live in Vietnam')
} else {
    console.log('Vietnam does not meet your criteria');
}

// LECTURE #10: switch statement
switch(language) {
    case 'chinese':
    case 'mandiran':
        console.log('MOST number of native speaker');
        break;
    case 'spanish':
        console.log('2nd place in numbers of native speaker');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Greate language too');
}

// LECTURE #11: Tenary operator
population > 33 ? console.log(`Vietnam's population is above average`) : console.log(`Vietnam's population is below average`);

