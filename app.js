/**
 * Copyright 2019 UBC iGEM
 */

require('dotenv').config()
const path       = require('path');
const express    = require('express');
const app        = express();
const port       = process.env.PORT || "3000"
const routes     = require('./backend/routes.js')(app);

// Set view engine to work with html files, and set path to the fronend directory
app.set('views', path.join(__dirname, '/frontend'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// Start server on port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
