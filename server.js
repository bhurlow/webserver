
var http = require('http')

console.log('listening...')

http.createServer(function(req, res) {
  res.end('guava')
}).listen(3000)
