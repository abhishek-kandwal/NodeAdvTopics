const express = require('express')
const os = require('os')
const cluster = require('cluster')

const app = express()
const numCPU = os.cpus().length

app.get('/', (req, res) => {
    res.send('OK!')
    cluster.worker.kill()
})

cluster.on('exit', () => {
    cluster.fork()
})

if (cluster.isMaster) {
    for(let i = 0; i < numCPU; i++)
        cluster.fork()
} else {
    app.listen(3000, () => console.log('process', process.pid))
}