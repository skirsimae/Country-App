// Part 1 Create a Node.js application that does the following:

// Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array process.argv
// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
// Outputs information about that specific country. Must be in the following format:
// Country: Netherlands Top Level Domain: .nl

var country = process.argv[2]
var fs = require('fs');

fs.readFile('./countries.json', 'utf-8', function(err, data){
    //check for possible errors 
    if (err) {
        //log that an error happened
        console.log(`an error occurred: ${err}`);
        //throw the error for handling by the caller
        throw err;
 	}

var info = JSON.parse(data);

	for (var i = 0; i < info.length; i++) {
		if (info[i].name === country){
			console.log("Country: " + info[i].name);
			console.log("Top Level Domain: " + info[i].topLevelDomain)
		}
	}

});

// //part 2.

var country = process.argv[2];

var reader = require('./json-file-reader.js');

reader.readJson('./countries.json', function(json){
	console.log("Parsing file")
	for (i=0; i < json.length; i++) {
		if (json[i].name=== country) {
			console.log("Country: "+ json[i].name);
			console.log("Top Level Domain: " + json[i].topLevelDomain)
		}
	}
});

