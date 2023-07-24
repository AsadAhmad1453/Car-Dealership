const mongoose = require("mongoose");

const Car= new mongoose.Schema({
    title: String,
    imagepath: [String],
    make: String,
    model: String,
    transmission: String,
    engine: String,
    fuel: String,
    chasis: String,
    year: String,
    doors: String,
    modelcode: String,
    weight: String,
    seats: String,
    steering: String,
    location: String,
    interiorcolor: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
      },


});

module.exports= mongoose.model("Car" , Car);