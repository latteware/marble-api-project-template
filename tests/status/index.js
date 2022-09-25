const path = require('path')
const RecordTape = require('@marble-seeds/record-tape')

// Status task test
const statusTask = require('tasks/status')
const statusLogPath = path.resolve(__dirname, '../../tasks/logs/status')

const statusTape = new RecordTape({
  path: statusLogPath
})
statusTape.loadSync()

statusTape.replay({
  name: 'Status task',
  task: statusTask
})
