import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Contactcar() {
    const [car_name , setcar_name] = useState("");
    const [make, setMake] = useState("");
    const [location, setLocation]= useState("");
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject]= useState("");
    const [message, setMessage]= useState("");
    const [empty, setEmpty]= useState(false);
    const [status, setStatus] = useState(false);
    

    const params = useParams();
    const car_id= params.id;

    const contactcarr=async ()=>{       
          if(!name || !email || !subject || !message){
        setEmpty(true);
        return false;
     }
     let result = await fetch("http://localhost:5000/contactcar",{
        method: 'POST',
        body: JSON.stringify({name,car_name,car_id,email,subject,message}),
        headers: {
            'Content-Type': 'application/json'
        } ,
     });
     result =await result.json();
     if(result.email){

        setStatus(true);
        

     }

    }

    useEffect(()=>{
         getcardetails();
    });
   

    // const submitmsg=async ()=>{
   
     

    // }

    const getcardetails=async()=>{
      
        let result= await fetch(`http://localhost:5000/getcardetails/${params.id}`);
        result = await result.json();
        setcar_name(result.title);
        setMake(result.make);
        setLocation(result.location);
    }

    return (

        <div className="contactus">
            <section class="hero-wrap hero-wrap-2 js-fullheight cars-back" data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                        <div class="col-md-9  pb-5">
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact us <i class="ion-ios-arrow-forward"></i></span></p>
                            <h1 class="mb-3 bread">Find Used Cars in Japan</h1>
                            <h5 className='cars-subheading'>With thousands of cars, we have just the right one for you</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ftco-section contact-section">
                <div class="container">
                    <div class="row d-flex mb-5 contact-info">
                        <div class="col-md-4">
                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <div class="border w-100 p-4 rounded mb-2 d-flex">
                                        <div class="icon mr-3">
                                            <span class="icon-map-o"></span>
                                        </div>
                                        <p><span>Car Name:</span>{car_name}</p>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="border w-100 p-4 rounded mb-2 d-flex">
                                        <div class="icon mr-3">
                                            <span class="icon-mobile-phone"></span>
                                        </div>
                                        <p><span>Make:</span> <a href="tel://1234567920">{make}</a></p>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="border w-100 p-4 rounded mb-2 d-flex">
                                        <div class="icon mr-3">
                                            <span class="icon-envelope-o"></span>
                                        </div>
                                        <p><span>Location:</span> <a href="mailto:info@yoursite.com">{location}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 block-9 mb-md-5">
                            {status &&  <div class="alert alert-success" role="alert">
                            Mesage Successfully Sent! You will be contacted shortly
                            </div> }
                       
                            <div  class="bg-light p-3 contact-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" onChange={((e)=>setName(e.target.value))} value={name}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Email" onChange={((e)=>setEmail(e.target.value))} value={email}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject" onChange={((e)=>setSubject(e.target.value))} value={subject}/>
                                </div>
                                <div class="form-group">
                                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" onChange={((e)=>setMessage(e.target.value))} value={message}></textarea>
                                </div>
                                <div class="form-group">
                                    <button   onClick={()=>contactcarr()} class="btn btn-primary py-3 px-5" >Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>


    );
}
export default Contactcar;