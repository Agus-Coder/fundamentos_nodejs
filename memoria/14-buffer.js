// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1,2,5]);

let buffer = Buffer.from('Hola')

// console.log(buffer)

// buffer nos permite trabajar con los datos en la version mas cruda de los mismos. son datos que vienen y van

// --
// hacemos un alfabeto solo trabajando con buffers

let abc = Buffer.alloc(26);
// console.log(abc)

for (let i = 0; i<26 ;i++){
    abc[i] = i + 65
}

console.log(abc.toString())