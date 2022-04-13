console.log('algo')
console.info('algo')
console.error('algo')
console.warn('algo')
console.table('algo')

var tabla = [
    {
        a: 1,
        b: 'Z',
    },
    {
        a: 2,
        b: 'X',
    }
]

console.table(tabla);
console.group('Conversacion');

console.log('hola');
console.log('bla bla bla');
console.log('adios');
console.groupEnd('Conversacion');

/*Muy util para ver lo que sucede dentro de funciones*/

function funcion1() {
    console.group('Funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto tambine')
    funcion2()
    console.log('Hemos vuelto a la 1')
    console.groupEnd('Funcion 1')
}

function funcion2() {
    console.group('Funcion 2')
    console.log('Esto es de la funcion 2')
    console.groupEnd('Funcion 2')
}

funcion1()


console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')

/* nos serviria para ver cuantas veces sucede un bucle, por ejemplo */ 
