const app = require('./src/config/custom-express')

app.listen(3000, function(){
    console.log(`Servidor rodando`)
})

app.get('/', function(req, resp){
    resp.send(`
        <div>Servidor ok</div>
            <div>Get Get</div>
    `)
})

app.get('/livros', function(req, resp){
    resp.send(`
        <div>Pagina de livros</div>
            <div>Get Livros</div>
    `)
})