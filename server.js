
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const fetch = require("node-fetch");
let https = require('https');
const serch_url = "https://pixabay.com/api/?key=3555577-4bc9f32ecf774a744e7cb48f3";
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/images/:query", function (request, response) {
  var query = request.params.query;
  var off_set = request.query.offset;
  var query_join = query.replace(/ /g, '+');
  var serch_final_url = serch_url+"&q="+query_join;
  console.log(serch_final_url);
  fetch(serch_final_url)
  .then(web_response => {
    web_response.json().then(json => {
      console.log(json);
    });
  })
  .catch(error => {
    console.log(error);
  });
  //console.log(web_response);
  response.send("UNDER DEVELOPMENT");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});