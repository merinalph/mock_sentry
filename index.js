const express = require('express');
const cors = require('cors');
const app = express();
const port = 6000;
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

// Define a route to mock the specified DSN
app.get('/7', (req, res) => {
    // Simulate a delay based on the constant timeout
    setTimeout(() => {
        // You can customize the response data here
        const responseData = {};

        res.json(responseData);
    }, 5000);
});

app.post('/api/7/envelope', (req, res) => {
    // Return an empty array or customize the response data here
     const responseData = {};
    res.json(responseData);
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});
