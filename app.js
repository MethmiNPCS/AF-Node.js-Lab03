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