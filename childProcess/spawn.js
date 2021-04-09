const { spawn } = require('child_process')

const child = spawn('ls', ['-l'])

child.stderr.on('data', stderr => {
    console.log(stderr)
})

child.stdout.on('data', stdout => {
    console.log(stdout.toString())
})

child.on('error', error => {
    console.log(error)
})

child.on('exit', (code, signal) => {
    if (code) console.log(code)
    if (signal) console.log(signal)
    console.log('exit')
})
