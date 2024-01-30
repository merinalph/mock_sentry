const express = require('express');
const app = express();
const port = 6000;
const bodyParser = require('body-parser');



app.use(bodyParser.json());

// Define a route to mock the specified DSN
app.get('/7', (req, res) => {
    const timeout = parseInt(req.query.timeout, 10) || 0;

    // Simulate a delay based on the timeout query parameter
    setTimeout(() => {
        // You can customize the response data here
        const responseData = {
            message: `Mock response for ${req.originalUrl}`,
        };

        res.json(responseData);
    }, timeout * 1000);
});

app.get('/api/7/envelope', (req, res) => {
    // Return an empty array
    const responseData = [];

    res.json(responseData);
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});
