const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash)
    bcrypt.compare(password, hash, function(err, result){
        // console.log(err)
        console.log(result)
    })
}) 
//no usar sincrona porque nos bloqea el event loop