require ('./database/config');
const express = require('express');
const cors= require('cors');
const Admin= require('./database/Admincred');
const Car= require('./database/Car');
const Contactcar= require('./database/Carcontact');
const bodyParser = require('body-parser');
const path= require('path');
const multer = require('multer');

const app= express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
const upload= multer({
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, "../frontend/src/images" )
        },
        limits: {
            fileSize: 50 * 1024 * 1024, // 50MB file size limit
          },
        filename: function(req, file, cb){
            let ext = path.extname(file.originalname)
            cb(null, file.fieldname +"-"+ Date.now()+ ext)
        }
    })
}).array("images");

// app.post("/register",async (req,res)=>{
//     let admin= new Admin(req.body);
//     let result=await admin.save();
//     res.send(result);
// });



// app.post("/uploadimg", upload, (req,res)=>{
//     res.send("file uploaded");
// })

app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password && req.body.name){
        let admin=await Admin.findOne(req.body).select('-password');
        if(admin){
            res.send(admin);
        }
        else{
            res.send({result:"No user Found"})
        }
    }
    else{
        res.send({result:"something is missing"})
    }
   
});

app.post("/addcar",upload, async(req,res)=>{
    const cardata = req.body;
    const imagepaths = req.files.map((file) => file.path); 
    cardata.imagepath = imagepaths;
        let car= new Car(cardata);
        let result= await car.save();
        res.send(result);
});

app.post("/contactcar", async(req,res)=>{
    let contactcar= new Contactcar(req.body);
    let result= await contactcar.save();
    res.send(result);
});

app.get("/getcontactcar", async(req,res)=>{
    let contacts= await Contactcar.find();
    if (contacts.length>0){
        res.send(contacts);
    }
    else{
        res.send({result: "No result found"});
    }
});
app.delete("/deletecontactcar/:id",async(req,res)=>{
    let result=await Contactcar.deleteOne({_id:req.params.id});
    res.send(result);
});

app.get("/getrecentcars",async(req,res)=>{
    let result= await Car.find().sort({createdAt:-1}).limit(4);
    res.send(result);
})

app.get("/getcars",async (req, res)=>{
    const cars= await Car.find();
    if(cars.length > 0){
       res.send(cars);
    }
    else{
        res.send({result:"no car found"});
    }
});

app.delete("/delete/:id",async (req,res)=>{
    let result=await Car.deleteOne({_id:req.params.id});
    res.send(result);
});

app.get("/getcardetails/:id", async(req,res)=>{
    let result= await Car.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    }
    else{
        res.send({result:"no car found"});
    }
});

// app.put("/updatecardetails/:id",async(req,res)=>{
//      let result =await Car.updateOne(
//         {_id: req.params.id},
//         {$set: req.body}    
//      )
//      res.send(result);
// });

app.get("/search/:key", async(req,res)=>{
    let result = await Car.find({
        "$or":[
            {
                title: {$regex: req.params.key},
            }

        ]
    });
    res.send(result);
});

app.get("/searchbymake/:key", async(req,res)=>{
    let result = await Car.find({
        "$or":[
            {
                make: {$regex: req.params.key},
            }

        ]
    }).limit(3); 
    res.send(result);

    // .sort({ createdAt: -1 }) // Sort by descending createdAt field
   

});

app.get("/filtercars/:make/:model/:title", async (req, res) => {

    
    const { make, model, title } = req.params;
  
    let result = await Car.find({
      $or: [
        { make: { $regex: make } },
        { model: { $regex: model } },
        { title: { $regex: title } },
      ],
    })
  
    res.send(result);
  });

app.listen(5000);