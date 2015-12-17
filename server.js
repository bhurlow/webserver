
var http = require('http')

console.log('listening...')

http.createServer(function(req, res) {
  res.end('fruit')
}).listen(3000)
