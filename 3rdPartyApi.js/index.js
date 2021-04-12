const http = require('https')
const url = 'https://jsonplaceholder.typicode.com/todos/1'

http.get(url, res => {
   let data = ''
   res.on('data', chunk => data+= chunk)
   res.on('end', () => console.log(data))
})



