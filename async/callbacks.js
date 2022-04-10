function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre + '!')
        miCallback(nombre)
    }, 1500)
}

function adios(nombre, callback2) {
    setTimeout(function () {
        console.log('Adios ' + nombre + '!')
        callback2()
    }, 1000)

}

console.log('inicia el proceso...')

//Completamente asincrono

hola("Agus", function (nombre) {
    adios('Agus', function () {
        console.log('Termina el proceso...')
    })
})

// sin asincronia

// hola("Agus", function () {})
// adios("Agus", function () {})

// console.log('Termina el proceso...')