const express = require('express');

const app = express();


app.get('/', (req, res) => {
    console.log('main route')
})


app.listen(5000, () => {
    console.log(`backend is running. http://localhost:5000`);
})