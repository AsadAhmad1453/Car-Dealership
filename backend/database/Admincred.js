const mongoose = require('mongoose');

const Admincred= new mongoose.Schema({
        name:String,
        email:String,
        password: String
});
module.exports = mongoose.model("Admincred" , Admincred);