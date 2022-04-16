const fs = require('fs');
const stream = require('stream');
const util = require('util')

let data = '';

//stream de lectura

let readableStream = fs.createReadStream(__dirname + '/input.txt')

// readableStream.setEncoding('utf-8')

// readableStream.on('data', function(chunk){
//     console.log(chunk)
//     //data += chunk  con esto vamos obteniendo trozos del archivo si sucediera que el mismo es enorme
// })

// readableStream.on('end', function(){
//     console.log(data)
// }) 

//para datos pequeños no tiene mucho sentido usar stream


/*Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

buffer
Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está) */


// process.stdout.write('hola ')
// process.stdout.write('que')
// process.stdout.write('tal')

// stdout es un buffer de escritura en el que empieza a trabajar y gneerar lo que ves


// Vamos a ver un stream con un buffer intermedio el cual recibe un dato, lo modifica y lo escribe
// ingresamos texto leido de fichero, lo pasamos a mayusculas y lo escribimos en la salida del sistema

const Transform =stream.Transform;

function Mayus(){
    Transform.call(this)
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunMayus = chunk.toString().toUpperCase();
    this.push(chunMayus)
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)


console.log(Transform)