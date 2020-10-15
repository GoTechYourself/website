const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const session = require('express-session')
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')

let cfg = require('./_server/configurations/main')
let server = express()

server.use(helmet())
server.use(cors(cfg.cors))
server.disable('x-powered-by')
server.set('trust proxy', 1)

server.use(bodyParser.urlencoded({extended: false}))


server.use(bodyParser.json())
server.use(session(cfg.session))


server.set('view engine', 'ejs')
server.use(expressLayouts)
server.set('views', path.join(__dirname, '_views'))
server.use('/public', express.static('./public'))


server.use(require('./_server/framework/logger').RequestLogger.Initialize)

require('./_server/framework/mongoose').Connect();

let apiRouter = express.Router()
require('./_server/_routers/api/index.router')(apiRouter)
server.use('/api', apiRouter)

let httpRouter = express.Router()
require('./_server/_routers/http/home.router')(httpRouter)
server.use('/', httpRouter)

server.listen(cfg.port, () => console.log(`${cfg.name} - Initialized succesfully at port ${cfg.port}`))

