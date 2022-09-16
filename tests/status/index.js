// const Task = require('@marble-seeds/task')
const RecordTape = require('@marble-seeds/record-tape')

const task = require('tasks/status')

const tape = task.getTape()
tape.loadSync()
tape.setMode('replay')

RecordTape.testTape('Status', tape, async (argv) => {
  return await task.run(argv)
})
