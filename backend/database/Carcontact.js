const mongoose= require('mongoose');
const  Schema = mongoose.Schema;


const carcontact= new mongoose.Schema({
      name: String,
      car_name: String,
      car_id: String,
      email: String,
      subject: String,
      message: String,
      createdAt: {
            type: Date,
            default: Date.now,
          },
});
module.exports= mongoose.model("Carcontact", carcontact );