const http = require('http')
const os = require('os')

const { PORT = 3000, START_DELAY = 0 } = process.env

console.log(`listening on port ${PORT}`)

const server = http.createServer((req, res) => {
  let data = {
    method: req.method,
    headers: req.headers,
    url: req.url,
    hostname: os.hostname(),
    START_DELAY
  }
  res.end(JSON.stringify(data))
})

setTimeout(() => {
  server.listen(PORT)
}, START_DELAY)
