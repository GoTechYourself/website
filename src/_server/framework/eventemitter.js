const EventEmitter = require('events');
let colors = require('colors')

colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
});

class NewEmitter extends EventEmitter {

}

const Emitter = new NewEmitter();

// Global.on('sv.initialization',() => {
// 	Global.emit('sv.info','Microservice initialized successfully')
// })

Emitter.on('info', (msg) => {
	console.log(colors.debug(msg))
})

// Global.on('sv.warn', (msg) => {
// 	console.log(colors.warn(msg))
// })

// Global.on('sv.dbconnect',() => {
// 	Global.emit('sv.info','Connected successfully to the database')
// })

// Global.on('sv.dbconnect.error',(err) => {
// 	console.log(colors.warn(err.toString()))
// 	console.log(colors.error(`Something went wrong connecting to the database.`))
// 	process.exit(1)
// })




module.exports = { Emitter , NewEmitter };