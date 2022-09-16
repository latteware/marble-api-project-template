const config = require('./config')
const apiPort = config.server.apiPort

const { server } = require('@marble-seeds/api')

const routers = require('./api/routers')

const app = server()

routers.add(app)

app.listen(apiPort)
console.log(`Server running at ${apiPort}`)
