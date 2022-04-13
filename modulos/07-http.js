const http = require('http');

function router (req, res) {
    console.log('nueva peticion!');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('hola que tal')
            res.end()
            break
        default:
            res.write('error 404 no se lo que quieres')
            res.end()
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'})
    // //Respuesta al usuario
    // res.write('hola ya se usar http de Node.js')

    // res.end();
}


http.createServer(router).listen(3000);

console.log('Escuchando HTTP en el puerto 3000');

