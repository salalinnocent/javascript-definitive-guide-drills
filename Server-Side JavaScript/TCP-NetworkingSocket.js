var http = require('http')
var fs = require('fs')

var server = http.createServer((request, response) => {
    request.readFile()
    response.writeFile('data')
})
server.listen(8000, () => {
    console.error('Sever is spinning');
})
server.end()

server.on("request", function (request, response) {
    var url = require('url').parse(request.url)

})