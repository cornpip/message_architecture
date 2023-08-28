const express = require('express')
const app = express()

const port = 8001;

app.get('/', function(req,res) {
    console.log(`Hello ${port}`);
    res.send(`Hello ${port}`);
})

app.listen(port, function() {
    console.log(`start! express server on port ${port}`);
})