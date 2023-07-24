const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/haseeb",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
});