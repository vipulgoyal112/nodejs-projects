var fs = require('fs');

// fs.mkdir('vipul1', function(err, data) {
// 	fs.readFile('./events.js', 'utf8', function(err, data) {
// 		console.log('data in file : ', data);
// 		fs.writeFile('./vipul1/abc.js', data)
// 	})
// });

fs.readFile('./readme.txt', function(err, data) {
	console.log('data in file : ', data);
	fs.writeFile('./readme1.txt', data)
})