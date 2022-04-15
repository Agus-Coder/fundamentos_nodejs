let name = process.env.NAME || "sin nombre";
let web = process.env.MI_WEB || "No tengo Web"

console.log('Hola! ' + name);
console.log('mi web es ' + web);
// en mayuscula se escribe a las variables de entorno, la que se encuentran en el sistema

// en windows una variable de entorno se define $env:NOMBRE="Carlos" en la terminal