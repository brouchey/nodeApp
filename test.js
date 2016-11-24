// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Salut tout le monde !');
// });
// server.listen(8080);


var http = require("http");
var routes = require("./routes.js");

http.createServer(function(request, response){
    routes.root(request, response);
    routes.lien1(request, response);
    routes.lien2(request, response);
    routes.lien3(request, response);
    routes.lien4(request, response);

}).listen(3000);



// testing, be sure to include the URL module

var sys = require('sys'),	// System module (now called 'util' ?) : errors handling, debug (write debugging messages), format (String, JSON,)
var fs = require('fs'),		// File System module : manage files, read files, rename files, delete files, create files
var http = require('http'),	// HTTP module : request, response, server, connect
var url = require('url');	// URL module : host, protocl, href, hostname, path, search, port, agent, client-request


// extrapolate the path name from the URL

var url_parts = url.parse(req.url);
sys.puts(url_parts.pathname);


// dealing with pages we want, using a switch statement for simplicity

switch(url_parts.pathname) {
	case '/':
	sys.puts("display root");
	break;
	case '/create':
	sys.puts("display create");
	break;
	case '/edit':
	sys.puts("display edit");
	break;
	default:
	sys.puts("oh dear, 404");
}

// Now we have a basic router telling us that it has detected which page the user wants to display,
// but is then displaying the default page regardless

function display_root(url, req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	db.getDoc(doc_id, function(error, doc) {
	    if(error) {
		fs.readFile('./templates/no-doc.haml', function(e, c) {
		    var data = {
			title: "No Document Found",
			message: "No document could be found",
			link: "/create",
			link_text: "Create a new document"
		    };
		    var html = haml.render(c.toString(), {locals: data});
		    res.end(html);
		});
	    }
	    else {
		fs.readFile('./templates/doc.haml', function(e, c) {
		    var data = {
			title: "Erdnodeflip document: "+doc.name,
			message: "Your Erdnusflip document was found!",
			items: doc.items,
		    };
		    var html = haml.render(c.toString(), {locals: data});
		    res.end(html);
		});
	    }
	});