console.log("Hello, this is my first Node.js app!");

// Read file
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

// Write file
const fs1 = require('fs'); 
fs1.writeFile('file1.txt', 'Hello World!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
});

const http = require('http'); 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080);