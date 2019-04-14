/**
 * Routes file, all new routes should be added to this file
 * Copyright 2019 UBC iGEM
 */

module.exports = function(app){

    /*********** Home Page *********/
    app.get('/', function (req, res) {
        res.render('homepage.html')
    });
    /*******************************/

}