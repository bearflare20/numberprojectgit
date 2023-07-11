// randomNumberGenerator.js (Node.js)
const fs = require('fs');

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    fs.writeFile('public/randomNumber.txt', randomNumber.toString(), (err) => {
        if (err) {
            console.error('Error saving random number:', err);
        } else {
            console.log('Random number saved:', randomNumber);
        }
    });
}

// Schedule the number generation every 24 hours
setInterval(generateRandomNumber, 24 * 60 * 60 * 1000);

generateRandomNumber(); // Generate the initial random number
