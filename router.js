var renderer = require("./renderer.js");

var htmlHeader = {'Content-Type': 'text/html'};

function home(request, response) {
    if(request.url == "/") {
        response.writeHead(200, htmlHeader);
		renderer.view("header", { }, response);     // { } because no values need to be passed
		renderer.view("home", { }, response);
		renderer.view("footer", { }, response);
		response.end();
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, htmlHeader);
        renderer.view("header", { }, response);
		renderer.view("contact", { }, response);
		renderer.view("footer", { }, response);
		response.end();
    }
}

function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, htmlHeader);
        renderer.view("header", { }, response);
		renderer.view("about", { }, response);
		renderer.view("footer", { }, response);
		response.end();
    }
}

module.exports.home = home;
module.exports.contact = contact;
module.exports.about = about;