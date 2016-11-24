// Web server

var http = require("http");
var router = require("./router.js");

http.createServer(function(request, response) {
	router.home(request, response);
	router.contact(request, response);
	router.about(request, response);
}).listen(3000);

console.log("Server running on Port 3000");
