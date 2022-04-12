function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre + '!')
            resolve(nombre)
            reject('Error en funcion "Hola". Revisar codigo')
        }, 1500)
    })

}

function hablar(nombre) {  //Mirar lo que sucede si quitas la variable "Nombre"
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla bla bla...')
            resolve(nombre)
            reject('Error en funcion "Hablar". Revisar codigo')
        }, 1000)
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ' + nombre + '!')
            // resolve()
            reject('Error en funcion "Adios". Revisar codigo')
        }, 1000)
    })
}