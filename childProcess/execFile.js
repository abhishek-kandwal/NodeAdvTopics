const { execFile } = require('child_process')

execFile('./execFileCode.sh', (error, stdout, stderr) => {
    if (error) console.log('error', error)
    if (stderr) console.log('stderr', stderr)
    console.log(stdout)
    process.exit(1)
})