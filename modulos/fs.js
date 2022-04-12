const fs = require('fs');

function read(archiveRoute, cb) {
    fs.readFile(archiveRoute, (err, data) => {
        cb(data.toString());
    })
}

function write(archiveRoute, content, cb) {
    fs.writeFile(archiveRoute, content, function (err) {
        if (err) {
            console.error('file cannot be written')
        } else {
            console.log('archive correctly written')
        }
    });
}

function deleteArchive(archiveRoute, cb){
    fs.unlink(archiveRoute,cb);
}

// read(__dirname + '/archivo.txt', console.log)

// write(__dirname + '/archivo1.txt', 'Archivo generado con un write programado', console.log)

deleteArchive(__dirname + '/archivo1.txt', console.log)