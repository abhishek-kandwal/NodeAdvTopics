const myFunc = (param1, param2) => { console.log('This is will be executed after all the code get executed', param1, param2) } 
// this will be executed at the end, after rest of the code get executed, 
//  then the timer will start.
// we can also pass the params into this.

const timerId = setTimeout(myFunc , 0, 'param1', 'param2') 
// setTimeout function, returns a timerId with the help of which we can cancel the timer 
//  using clearTimeout(timerId) function
//  1st param -> callback function , 2nd -> time in ms , 3rd onwards -> arguments to the callback function.

console.log('first this will be printed')
console.log('first this will be printed')
console.log('first this will be printed')
console.log('first this will be printed')
console.log('first this will be printed')
console.log('first this will be printed')
console.log('first this will be printed')

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// now all the code is executed in the file now our setTimeout function will start executing.



// to Clear setTimeout func

// clearTimeout(timerId)