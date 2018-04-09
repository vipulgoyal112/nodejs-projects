var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('myevent', function (msg) {
	console.log('msg : ', msg);
});

myEmitter.emit('myevent', 'emitted !!');