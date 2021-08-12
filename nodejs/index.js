// var http = require('http');

// var host = '127.0.0.1'
// var port = 3000

// var server = http.createServer((request, response) => {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   console.log("server Working");
//   response.end('Server Working Success');
// });

// server.listen(port,host, (error) => {  
//   if (error) {
//     return console.log('Error occured : ', error );
//   }

//   console.log('server is listening on ' + host + ':'+ port);
// });	

//serve-html.js
// var http = require('http');
// var fs = require('fs');


// http.createServer(function (req, res) {
// 	console.log("Port Number : 3001");
// 	// change the MIME type from 'text/plain' to 'text/html'
//     res.writeHead(200, {'Content-Type': 'text/html'});
// 	//reading the content file
// 	fs.readFile('index.html', (err, data) => {
// 		//checking for errors
// 		if (err) 
// 			throw err;
// 		console.log("Operation Success");
// 		//sending the response
// 		res.end(data);
// 	});
// }).listen(3001);

//Writing a File Asynchronously using nodejs
var fs = require('fs');
new_data = "This data will be appended at the end of the file.";
// fs.appendFile('input.txt', new_data , (err) => {
// 	if(err) 
// 		throw err;
// 	console.log('The new_content was appended successfully');
// });
fs.appendFileSync('input.txt', new_data , (err) => {
	if(err) 
		throw err;
	console.log('The new_content was appended successfully');
});