module.exports = (app) => {

    app.get('/', function (req, resp) {
        resp.send(`
        <div>Servidor ok</div>
            <div>Get Get</div>
    `)
    })
    const db = require('../../config/database')
    app.get('/livros', function(req, resp) {
        db.all('SELECT * FROM livros', function(erro, resultados) {
    
            resp.marko(
                require('../view/livros/listagem/listagem.marko'),
                {
                    livros: resultados
                }
    
            );
    
        });
    
    
    });
}