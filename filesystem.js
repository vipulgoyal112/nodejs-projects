var fs = require('fs');

fs.readFile(__dirname + '/abc/xyz.js', 'utf8', function (err, data){
	console.log(data);
	fs.writeFile('xyz.js', data);
});