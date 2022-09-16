const { Router } = require('@marble-seeds/api')

const status = require('./status')

const routers = new Router({
  routes: [status],
  prefix: '/api'
})

module.exports = routers
