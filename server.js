
var http = require('http')

console.log('listening...')

http.createServer(function(req, res) {
  res.end('broccoli')
}).listen(3000)
