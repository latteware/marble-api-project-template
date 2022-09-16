const { Router, Route } = require('@marble-seeds/api')

const status = require('tasks/status')

const routers = new Router({
  routes: [
    Route.plugTask({
      box: status,
      method: 'get',
      path: '/'
    })
  ],
  prefix: '/status'
})

module.exports = routers
