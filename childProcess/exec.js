const { exec } = require('child_process')

exec('ls -l', (error, stdout, stderr) => {
    if (error) console.log('stderror', error)
    if (stderr) console.log('stderror', stderr)
    console.log(stdout)
    process.exit(1)
})

// exec is used to exec cmd in the terminal , uses buffer memory to transport data to stdout
// can't use this with the heavy cmd like "find /"