const os = require('os')

//este modulo nos permite acceder a informacion de bajo nivel, pero muy util

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus().length)
// console.log(os.constants)

function kb(bytes) { return bytes/1024}
function mb(bytes) { return kb(bytes)/1024}
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))

console.log(mb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())

console.log(os.hostname())
console.log(os.networkInterfaces())