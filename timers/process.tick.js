console.log('this will print first')

process.nextTick(()=> {
    console.log('this will print @end but before the next event loop')
})

console.log('this will print first')
console.log('this will print first')
console.log('this will print first')