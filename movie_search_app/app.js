
const express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

// Home, search for movie
app.get("/", function(req,res){
	res.render("search");
});

// Results page
app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
	request(url, function(error, response, body){
		console.error('error:', error); 
  		console.log('statusCode:', response && response.statusCode); 
		var parsedData = JSON.parse(body);
		res.render("results", {data: parsedData})
	});
});




// Tell express to listen for requests
app.listen(3000, function(){
	console.log("Server listening on port 3000.");
});