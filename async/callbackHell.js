function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre + '!')
        miCallback(nombre)
    }, 1500)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla bla...')
        callbackHablar()
    },1000)
}

// la siguiente es una funcion recursiva, que se repite cierta cantidad de veces
function conversacion(nombre, veces, callback){
    if (veces>0){
    hablar(function(){
        conversacion(nombre, --veces, callback)
    })
    } else{
        callback(nombre, function(){
            console.log('Proceso Terminado...')
        })
    }
}

function adios(nombre, callback2) {
    setTimeout(function () {
        console.log('Adios ' + nombre + '!')
        callback2()
    }, 1000)
}

//Es una buena practica haber escrito las funciones antes del codigo principal de ejecucion

// --

// Version 2: Fijate que la funcion es mucho mas limpia que antes
console.log('inicia el proceso...')
hola('Agus', function(nombre){
    conversacion(nombre, 3, adios)
})



//Version 1: antes tenias esto

// hola("Agus", function (nombre) {
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios('Agus', function () {
//                     console.log('Termina el proceso...')
//                 })
//             })
//         })
//     })
    
// })


// cuando trabajamos con callbacks mas complejos debemos proceder de otra manera.

// todo el código anterior tiene etapas muy repetidas y tanta repeticion nos haria entrar en un callbackhell
//debemos ser ingeniosos en como evitamos entrar en este infierno. para este caso puntual lo correcto seria crear otra funcion
//que repita la conversacion las veces que sea necesaria para nueustra funcion principal