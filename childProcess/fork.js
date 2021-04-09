const { fork } = require('child_process')

const child = fork('./forkCode.js')

child.send('start')

child.on('message', data => {
    console.log(data)
    process.exit(1)
})
