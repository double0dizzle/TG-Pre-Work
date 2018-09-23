//user's age
var myAge = 37

//represents the first two years of the dog's life
var earlyYears = 2

//the first two human years count as 21 dog years
earlyYears = 10.5 * 2

//this subtracts the first 2 years of the dog's life
var laterYears = myAge - 2

//later years are years after two years old, which equal 4 dog years per human year
laterYears *= 4

console.log(earlyYears);
console.log(laterYears);

//this adds up all of my years
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//making a variable for my name, which I'm also making lowercase
myName = "Mike".toLowerCase();
console.log(myName)

console.log("My name is " + myName + ". I am " + myAgeInDogYears + "years old in dog years.")