// Required Dependacies. //
const fs = require('fs');
const express = require('express');
const path = require('path'); // Maybe... Ref. https://nodejs.dev/learn/the-nodejs-path-module //

// YOU NEED THIS TO SETUP THE EXPRESS APPLICATION. //
const app = express();

// PORT Setup. //
const PORT = process.env.PORT || 8081;


// EXPRESS STATIC PATH. //
app.use(express.static('public'));


// YOU NEED A WAY TO PARSE THE DATA. //
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Configured Routes //
require('./routes/apiRoute.js')(app);
require('./routes/htmlRoute')(app);


// START THE SERVER! //
app.listen(PORT, function() {
    console.log('Your application is listening on PORT ' + PORT);
})