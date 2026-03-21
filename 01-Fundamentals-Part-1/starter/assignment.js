let continent = 'Euro Asia';
let country = 'Kazakhstan';
let population = 25_000_000;

console.log(`Continent name: ${continent}\nCountry name: ${country}\nPopulation: ${population}`)
console.log(typeof null);
console.log(typeof undefined);
let massMark, massJohn;
let heightMark, heightJohn;
massMark = 78;
heightMark = 1.69;
massJohn = 80;
heightJohn = 1.60;
 
const calculateBMI =(mass, height) =>{
    return mass/(height * height)
}
const marksBMI = calculateBMI(massMark, heightMark);
const johnsBMI = calculateBMI(massJohn, heightJohn);

console.log(`Mark's BMI is: ${marksBMI}`);
console.log(`John's BMI is: ${johnsBMI}`);
const markHigherBMI = marksBMI > johnsBMI;
console.log(`Is Mark's BMI higher than John ${markHigherBMI} ${markHigherBMI == true ? 'Mark\'s BMI ' + marksBMI : 'John\'s BMI ' + johnsBMI}`);

const greeting = 'привет мир. пока мир';
console.log(greeting.slice(-3));

let dolphinsScores = [96,108,89];
let length = dolphinsScores.length;
dolphinsScores.splice(5,0,222)
length = dolphinsScores.push(75);
let totalScore = dolphinsScores.reduce((a,e) => a+e,0);
let scoreDolphins = calculateAverage(totalScore, length)
console.log(scoreDolphins);
function calculateAverage(sum, div){
    return sum/div;
}


