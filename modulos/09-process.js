// const p = require('process')
// no es necesario traer la libreria process porque es la que estamos
// usando todo el tiempo y no tiene sentido llamarla. Podemos ejecutarla ya mismo

process.on('beforeExit',()=>{
    console.log('El proceso va a terminar')
})

process.on('exit',()=>{
    console.log('El proceso ha terminado')
    setTimeout(function(){
        console.log('Nunca se va a ver este texto')
    },0)
})

//una vez se ejecuta el exit, te desconectas completamente del event loop. por eso el texto dentro de
//set time out no se ve nunca. exit es lo ulitmo que vas a poder hacer

// algunas veces te pueed pasar que nada capturo un error anterior. podemos ver si hay uno con:

process.on('uncaughtException', (err,origen)=>{
    console.error('Se nos olvido capturar un error')
    console.error(err);
})

setTimeout(function(){
    console.log('Esto si lo vamos a ver')
},100)

// fuincionquenoexiste()
// console.log('esto no va a salir prque esta despues del error')