const mongoose = require('mongoose');

function  connectToDb(){
    mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true
    })
        .then((conn) => {console.log("databse conneced")})
        .catch(err => console.log(err));
}

module.exports = connectToDb;