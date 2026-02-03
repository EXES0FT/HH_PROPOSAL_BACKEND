require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.send('HH_PROPOSAL_API!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});