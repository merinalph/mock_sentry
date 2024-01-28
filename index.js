const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    // Wait for 10 seconds
    setTimeout(() => {
        console.log('Response sent');
        res.send('You got a response!');
    }, 50000);
});



// Set up a route that times out after 30 seconds
app.get('/30', (req, res) => {
    setTimeout(() => {
        res.send('Response after 30 seconds');
    }, 30000);
});



app.listen(port, () => {
    console.log(`Mock Sentry server is listening at http://localhost:${port}`)
});
