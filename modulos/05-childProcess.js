const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;


/*exec('node modulos/03-console.js', (err, stdout, sterr) => { //lo que hizo este codigo fue ejecutar el comando pasado en el string
    if (err){
        console.error(err);
        return false;
    }

    console.log(stdout)
}) */

/* podes solicitar la ejecucion de cualquier otro codigo, incluso podemos traernos cosas de excel */

// procesos mas complejos

let proceso = spawn('cmd.exe', ['/c','dir']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato){
    console.log('El proceso esta muerto?')
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('El proceso termino')
    console.log(proceso.killed)
})