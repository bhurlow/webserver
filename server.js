
var http = require('http')

console.log('listening...')

http.createServer(function(req, res) {
  res.end('pineapple!')
}).listen(3000)
