const timerFunc = function () {
    console.log('Interval func')
}

const timerId = setInterval(timerFunc, 1000)

// kill setInterval
// clearInterval(timerId)