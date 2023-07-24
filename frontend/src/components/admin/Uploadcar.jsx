import React from 'react';
import { useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Uploadcar(){
    useEffect(()=>{
        let auth = localStorage.getItem("user");
        if(!auth){
            navigate("/admin/login");
        }
    });
    
    const [title, setTitle]= useState("");
    const [images, setImages] = useState([]);
    const [make, setMake]= useState("");
    const [model, setModel]= useState("");
    const [transmission, setTransmission]= useState("");
    const [engine, setEngine]= useState("");
    const [fuel, setFuel]= useState("");
    const [chasis, setChasis]= useState("");
    const [year, setYear]= useState("");
    const [doors, setDoors]= useState("");
    const [modelcode, setModelcode]= useState("");
    const [seats, setSeats]= useState("");
    const [steering, setSteering]= useState("");
    const [location, setLocation]= useState("");
    const [weight, setWeight] = useState("");
    const [interiorcolor, setInterior]= useState("");
    const [description , setDescription] = useState("");
    const [empty, setEmpty]= useState(false);
    const navigate= useNavigate();

    const handleImageUpload = (event) => {
        const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
      };
      const getFileExtension = (filename) => {
        const parts = filename.split('.');
        return parts[parts.length - 1];
      };

      const formData = new FormData();
      formData.append('title', title);
     
    images.forEach((image, index) => {
        const extension = getFileExtension(image.name);
        formData.append('images', image, `image_${index}.${extension}`);
      });
     
  
      formData.append('make', make);
      formData.append('model', model);
      formData.append('transmission', transmission);
      formData.append('engine', engine);
      formData.append('fuel', fuel);
      formData.append('chasis', chasis);
      formData.append('year', year);
      formData.append('doors', doors);
      formData.append('modelcode', modelcode);
      formData.append('weight', weight);
      formData.append('seats', seats);
      formData.append('steering', steering);
      formData.append('location', location);
      formData.append('interiorcolor', interiorcolor);
      formData.append('Description', description);
    
    const getdata=async()=>{
        if(!title || !images || !make || !model || !transmission || !engine || !fuel || !chasis || !year || !doors || !modelcode || !seats || !steering || !location || !weight  || !interiorcolor){
                setEmpty(true);
                return false;
        }
        let result = await fetch("http://localhost:5000/addcar", {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-Type': 'application/json'
            // } ,
           
        });
        if(result){
            navigate("/admin/managecars");
        }
    
    }

    return(
        <div className='uploadcar'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 main-heading'>
                        <h3>Upload a Car</h3>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form-card p-3'>
                            <div className='form-group'>
                            <label >TITLE</label>{empty && !title && <span className='errormsg ml-2'>Required*</span> } 
                            <input type='text' placeholder='Name of your car' onChange={((e)=>setTitle(e.target.value))} value={title}/>
                           
                            </div>

                            <div className='form-group'>
                            <label>Upload Images</label>
                            <input type="file" multiple id="exampleFormControlFile1" onChange={handleImageUpload} name='images' />
                            </div>


                            <div className='form-group'>
                            <label >TRANSMISSION</label>{empty && !transmission && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='Auto/Manual' onChange={((e)=>setTransmission(e.target.value))} value={transmission}/>
                            </div>

                            <div className='form-group'>
                            <label >Fuel</label>{empty && !fuel && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='Petrol/diesel' onChange={((e)=>setFuel(e.target.value))} value={fuel}/>
                            </div>

                            <div className='form-group'>
                            <label >Year of Registration</label>{empty && !year && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='2005 2006 2007 etc...' onChange={((e)=>setYear(e.target.value))} value={year}/>
                            </div>

                            <div className='form-group'>
                            <label >Model Code</label>{empty && !modelcode && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='XXXXXXX' onChange={((e)=>setModelcode(e.target.value))} value={modelcode}/>
                            </div>

                            <div className='form-group'>
                            <label >Seats</label>{empty && !seats && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='XXX' onChange={((e)=>setSeats(e.target.value))} value={seats}/>
                            </div>

                            <div className='form-group'>
                            <label >Location</label>{empty && !location && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='manual/power' onChange={((e)=>setLocation(e.target.value))} value={location}/>
                            </div>

                          
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form-card p-3'>
                            <div className='form-group'>
                            <label >MAKE</label>
                                <select class="inpuut" onChange={((e)=>setMake(e.target.value))} value={make}>
                                <option>Suzuki</option>
                                <option>Misubushi</option>
                                <option>Mercedes</option>
                                <option>Toyota</option>
                                <option>dihastsu</option>
                                </select>
                            </div>

                            <div className='form-group'>
                            <label >MODEL</label>{empty && !model && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='2008 2009 2010 etc..' onChange={((e)=>setModel(e.target.value))} value={model}/>
                            </div>

                            <div className='form-group'>
                            <label >Engine cc</label>{empty && !engine && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='1000cc, 1500cc, 1800cc etc...' onChange={((e)=>setEngine(e.target.value))} value={engine}/>
                            </div>

                            <div className='form-group'>
                            <label >Chasis No</label>{empty && !chasis && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='XXXXX' onChange={((e)=>setChasis(e.target.value))} value={chasis}/>
                            </div>

                            <div className='form-group'>
                            <label >Doors</label>{empty && !doors && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='2,4,5 etc..' onChange={((e)=>setDoors(e.target.value))} value={doors}/>
                            </div>

                            <div className='form-group'>
                            <label >Gross Weight</label>{empty && !weight && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='XXX' onChange={((e)=>setWeight(e.target.value))} value={weight}/>
                            </div>

                            <div className='form-group'>
                            <label >Steering</label>{empty && !steering && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='manual/power' onChange={((e)=>setSteering(e.target.value))} value={steering}/>
                            </div>


                            <div className='form-group'>
                            <label >Color</label>{empty && !interiorcolor && <span className='errormsg ml-2'>Required*</span> }
                            <input type='text' placeholder='black red blue' onChange={((e)=>setInterior(e.target.value))} value={interiorcolor}/>
                            </div>
                           
                          
                        </div>

                    </div>
                    <div className='col-12'>
                        
                    <div className='form-group'>
                            <label className='desss' >Description</label>{empty && !description && <span className='errormsg ml-2'>Required*</span> }
                            <textarea class="form-control texxxt" id="textAreaExample1" rows="9" onChange={((e)=>setDescription(e.target.value))} value={description}></textarea>
                            </div>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <button className='btn-postad' onClick={getdata}>Post Ad</button>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Uploadcar;