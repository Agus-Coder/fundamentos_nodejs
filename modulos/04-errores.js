function funcionEjemplo2(){
    seRompe()
}

function seRompe(){
    return 3 + z;
}

// seRompe();

/* cada vez que sepamos que una funcion se puede roper lo que vamos a hacer es meterla adentro de un try catch */
try{
    funcionEjemplo2()
}catch(err){
    console.error('Ups, metiste la pata')
    // console.error(err) esta linea te va a devolver el error en la consola. podes usar err.message
}

console.log('esto esta despues del try catch')

/* Se puede observar que el try catch amortigua el error ocurrido y permite que el resto del codigo se siga ejecutand */

/*Si la funcion se rompe estuviera dentro de otra funcion, sucede que los errores poseen un bubbling y entonces
el catch dentro del try es capaz de capturar el error. el error va a seguir subiendo en el bubbling hasta que encuentre
la fuente del error. a partir de ahi uno puede decidir si el error sigue subiendo *bubbling, o lo que sea */

/* Caso asincrono */

function seRompeAsincrono(cb){
    setTimeout(function(){
        try{
            return 3 + z;
        } catch(err){
            console.error('error en la f asincrona')
            cb(err)
        }
        
    },1000)
}

try{
    seRompeAsincrono(function(){
        console.log('hay un error feo feo')
    })
}catch(err){
    console.error('Ups, metiste la pata')
    // console.error(err) esta linea te va a devolver el error en la consola. podes usar err.message
}

/* Este segundo caso... el catch no funciona! Lo que sucede es que el error se genera en otro hilo diferente al hilo
principal y no tenemos entonces manera de detectarlo */