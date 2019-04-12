/**
* Copyright 2019 UBC iGEM
*/

require('dotenv').config()
var express = require('express');

var app = express();

var port = process.env.PORT || "3000"

app.get('/', function (req, res) {
    res.send('UBC iGEM 2019 homepage')
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
