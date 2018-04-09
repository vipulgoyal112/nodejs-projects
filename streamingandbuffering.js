var fs = require('fs');

var myReadStream = fs.createReadStream('./readme.txt', 'utf8');

var myWriteStream = fs.createWriteStream('writeme.txt');

myReadStream.on('data', function(chunk) {
	console.log('chunk :', chunk);
	myWriteStream.write(chunk);
});