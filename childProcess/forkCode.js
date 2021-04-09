function test() {
    let sum = 0
    for (let i = 0; i <= 10; i++) sum += i
    return sum
}

process.on('message', (message) => {
    if (message === 'start') {
        const sum = test()
        process.send(sum)
    }
})