"use strict";
//Task 1 declare a variable
let dayOfWeek = "Monday";

console.log(dayOfWeek)

dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}`)

//Task 2 User Input
let animalInput = prompt("What is your favorite animal?")
console.log(animalInput);
let colorInput = prompt(`What is your favorite color?`)
let colorAnimal = colorInput + " " + animalInput;

console.log(`I've never seen a ${colorAnimal}!`)

// Conditionals -- Task 1: Meals
// Breakfast - oatmeal with bananas
// Lunch - Sushi 
// Dinner - Chicken Salad
let timeOfDay = 900;
let favoriteMeal = "";

if (timeOfDay < 1200) {
    favoriteMeal = "Oatmeal with bananas"
} else if (timeOfDay < 1700 >= 1200) {
    favoriteMeal = "Sushi"
} else if (timeOfDay > 1700) {
    favoriteMeal = "Chicken Salad"
}
console.log(favoriteMeal)

//Task 2 Random Number 

let randomNumber = Math.floor(Math.random() * 11);


if (randomNumber >= 0 && randomNumber <= 2) {
    console.log(`Beatles`)
} else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log(`Stones`)
} else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log(`Floyd`)
} else if (randomNumber === 9 || randomNumber === 10) {
    console.log(`Hendrix`)
}
console.log(randomNumber)

// For Loops && While loops
//Task 1 
for (let i = 0; i < 7; i++) {

    console.log(`Javascript is cool!`)
}
//Task 2 for loop one number per loop

for (let i = 0; i <= 10; i++) {

    console.log(i);
}
//Task 3 for loop to print sequence 

for (let i = 0; i < 5; i++) {

    console.log(`Hello`);
    console.log(`Goodbye`);
}
//Functions 
//Task 1 favorite movie (void functions)
function printMovieName() {
    let favoriteMovie = "Eternal sunshine of the Spotless Mind"
    console.log(favoriteMovie)
}
printMovieName()
//Task 2 Favorite Band 
function favoriteBand() {
    let userFavoriteBand = prompt("Please enter your favorite band")
    return userFavoriteBand;
}
let inputUserBand = favoriteBand();
console.log(inputUserBand);
//Task 3 Concert (parameters)
function concertDisplay(musicalAct) {
    let myStreet = prompt("Please enter the street you live on")
    return myStreet;
}
let musicalAct = inputUserBand;
let myStreet = concertDisplay(inputUserBand)
console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`)
//Arrays
//Task 1: Desktop Items
let desktopItems = ['Pens', 'Books', 'Laptop'];
console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet');
for (let i = 0; i < desktopItems.length; i++) {
    console.log(desktopItems[i]);

}

//Bonus Task 
//Task 1: Magic Number
let magicNumber = Math.floor(Math.random() * 51);
let guess = 0;

// while (guess !== magicNumber) {
//     guess = parseInt(prompt("Guess the magic number"))
//      if (guess > 50 && guess <= 60 || guess < 50 && guess >= 40) {
//         console.log(`Getting warmer`)
//     } else if (guess > magicNumber) {
//         console.log(`Too high!`)
//     } else if (guess < magicNumber) {
//         console.log(`Too low!`)
//     } else {
//         console.log("Congratulations! You guessed the magic number!")
//     }
// };

while (guess !== magicNumber) {
    guess = parseInt(prompt("Guess the magic number"))
     if (guess >= magicNumber - 10 && guess <= magicNumber + 10 && guess !== magicNumber) {
        console.log(`Getting warmer`)
    } else if (guess > magicNumber) {
        console.log(`Too high!`)
    } else if (guess < magicNumber) {
        console.log(`Too low!`)
    } else {
        console.log("Congratulations! You guessed the magic number!")
    }
};

