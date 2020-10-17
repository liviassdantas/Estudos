const http = require('http')

const servidor = http.createServer(function(req, resp){
    resp.end(`<div>Teste da Livia</div>
                    <div>Bem legal o node</div>`)
})

servidor.listen(3000)