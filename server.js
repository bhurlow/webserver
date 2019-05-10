const http = require('http')
const { PORT = 3000 } = process.env

console.log(`listening on port ${PORT}`)

const server = http.createServer((req, res) => {
  let data = {
    method: req.method,
    headers: req.headers,
    url: req.url
  }
  res.end(JSON.stringify(data))
})

server.listen(PORT)
