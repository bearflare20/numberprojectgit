// server.js (Node.js with Express.js)
const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Generate and save a random number to a file
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    fs.writeFile('randomNumber.txt', randomNumber.toString(), (err) => {
        if (err) {
            console.error('Error saving random number:', err);
        } else {
            console.log('Random number saved:', randomNumber);
        }
    });
}

// Schedule the number generation every 24 hours
setInterval(generateRandomNumber, 24 * 60 * 60 * 1000);

// Serve the static HTML file
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
