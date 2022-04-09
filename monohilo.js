console.log('Hola mundo Node.JS')

let i = 0;

setInterval(function(){
    console.log(i);
    i++;
    if (i === 5) {
        console.log(3 + z)
    }
}, 1000)


// En este primer ejemplo lo que tenes que saber observar es que node deja de ejecutarse cuando un error
// pasa por el loop. Entonces, en tus programas tenes que estar atento de ESCUCHAR esos errores
// de forma de evitar que el loop se detenga a la hora de que un error suceda.