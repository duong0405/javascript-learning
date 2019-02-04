// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// TEST 1
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (averageScoreDolphins > averageScoreKoalas) {
    console.log('Dolphins is the winner')
} else if ( averageScoreDolphins === averageScoreKoalas) {
    console.log('Both teams are the winer')
} else {
    console.log('Koalas is the winner');
}

// Test Bonus 1
const averageScoreOfDolphins = (97 + 112 + 101) / 3;
const averageSocreOfKoalas = (109 + 95 + 123) / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log('Dolphins is the winner');
} else if (averageScoreKoalas > averageScoreOfDolphins && averageScoreKoalas >= 100) {
    console.log('Koalas is the winner');
} else {
    console.log("There is no winner");
}

// Test Bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins is the winner');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas is the winner');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log("Both teams are the winner");
} else {
    console.log("There is no winner");
}