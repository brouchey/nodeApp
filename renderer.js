// render/read our html files to generate the appropriate content

var fs = require("fs");

function view(templateName, values, response) {
	// Read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');     // We don't need a callback because it is synchronous this time
    // Insert values into the content

	// Write out the contents to the response
	response.write(fileContents);

}

module.exports.view = view;