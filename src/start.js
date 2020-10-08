const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const session = require('express-session')

let cfg = require('./_server/configurations/main')
let server = express()

server.use(helmet())
server.use(cors(cfg.cors))
server.disable('x-powered-by')
server.set('trust proxy', 1)

server.use(bodyParser.urlencoded({ extended: false }))


server.use(bodyParser.json())
server.use(session(cfg.session))
server.use('/public',express.static('./public'))


server.use(require('./_server/framework/logger').RequestLogger.Initialize)

let apiRouter = express.Router()
require('./_server/_routers/api/index.router')(apiRouter)
server.use('/api',apiRouter)

server.listen(cfg.port, () => console.log(`${cfg.name} - Initialized succesfully at port ${cfg.port}`))

