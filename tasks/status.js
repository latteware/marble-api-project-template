const path = require('path')

const Task = require('@marble-seeds/task')
const RecordTape = require('@marble-seeds/record-tape')

const listStates = new Task(async function (argv) {
  const status = { status: 'Ok' }

  return status
}, {
  boundaries: {},
  recordTo: new RecordTape({
    path: path.resolve(__dirname, './logs/status')
  })
})

if (require.main === module) {
  listStates.setCliHandlers()
  listStates.run()
} else {
  module.exports = listStates
}
