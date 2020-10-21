module.exports = (app) => {

    app.get('/', function (req, resp) {
        resp.send(`
        <div>Servidor ok</div>
            <div>Get Get</div>
    `)
    })

    app.get('/livros', function (req, resp) {
        resp.marko( 
            require('../view/livros/listagem/listagem.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: "Fundamentos do Node"
                    },
                    {
                        id: 2,
                        titulo: "Node Avançado"
                    }
                ]
            }
            )
    })
}