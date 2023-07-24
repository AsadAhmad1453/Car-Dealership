import React from 'react';
import './style.css';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Cardetail(){
    const params=useParams();
    
    const [cardetail, setCardetail]= useState([]);
    const [cars, setcars] = useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        
        getcardetail();
      
    
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <button className="slider-arrow">Previous</button>,
        nextArrow: <button className="slider-arrow">Next</button>,
      };
    

    const getcardetail=async()=>{
        
        let result= await fetch(`http://localhost:5000/getcardetails/${params.id}`);
        result = await result.json();
       
        setCardetail(result);
        getsamemakecars(result.make);
        
    }

    const getsamemakecars=async(makee)=>{
        
        let result= await fetch(`http://localhost:5000/searchbymake/${makee}`);
        result =await result.json();
        if (result){
            setcars(result);
        }
        else{
            alert("not found")
        }  
    }
    
    const viewcar=(id)=>{
        navigate(`/cardetail/${id}`);
    }

   
    const contactcar=(id)=>{
            navigate(`/contactcar/${id}`);
    }
    return(
        
       <div className='car-detail'>
              <section class="hero-wrap hero-wrap-2 js-fullheight cars-back" data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                        <div class="col-md-9  pb-5">
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Car details <i class="ion-ios-arrow-forward"></i></span></p>
                            <h1 class="mb-3 bread">Car Detail</h1>
                            <h5 className='cars-subheading'>With thousands of cars, we have just the right one for you</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-12 sticky p-2 mt-4'>
                        <ul className='navigate'>
                            <li><a href='#pics'>Car Price</a></li>
                            <li><a href='#features'>Car Features</a></li>
                            <li><a href='#detail'>Car Details</a></li>
                            <li><a href='#descp'>Car Description</a></li>
                        </ul>
                        
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-12 p-2 mt-4'>
                        <div className='show-card'>

                            <h2>{cardetail.title}</h2>
                            <div className="slider-container">
                            <Slider {...settings}>
                            {
                                (cardetail && cardetail.title)?
                                cardetail.imagepath.map((image)=>
                                <img src={require(`../images/${image.replace('..\\frontend\\src\\images\\', '')}`)} class="img-thumbnail"/>
                                )
                                :console.log("nooooooooooo")
                            }
                            </Slider>   
                            </div>
                           
                           
                         

                            <div id='features' className='row main-features p-2 mt-4'>
                                <div className='col-lg-3 col-sm-6 col-md-3 feature-box'>
                                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/time.png" alt="time"/>
                                    <h5>{cardetail.year}</h5>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-3 feature-box'>
                                <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/speedometer.png" alt="speedometer"/>                               
                                <h5>{cardetail.model}</h5>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-3 feature-box'>
                                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/petrol.png" alt="petrol"/>
                                <h5>{cardetail.fuel}</h5>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-3 feature-box'>
                                <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/60/cargo-ship.png" alt="cargo-ship"/>
                                    <h5>Japanese</h5>
                                </div>
                            </div>

                            <div id='detail' className='row all-features  mt-4'>
                                <div className='mt-3 col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/car--v1.png" alt="car--v1"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7>Make</h7>
                                        <br></br><h8>{cardetail.make}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-3 col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/metro/26/waiting-room.png" alt="waiting-room"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7>Seats</h7>
                                        <br></br><h8>{cardetail.seats}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-3  col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/car-door.png" alt="car-door"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7>Doors</h7>
                                        <br></br><h8>{cardetail.doors}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-3 col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/gear-stick.png" alt="gear-stick"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7> Transmission</h7>
                                        <br></br><h8>{cardetail.transmission}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-3 col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/settings--v1.png" alt="settings--v1"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7>Code</h7>
                                        <br></br><h8>{cardetail.modelcode}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-2  col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/engine.png" alt="engine"/>
                                        </div>
                                        <div className='col-4'>
                                        <h7> Engine </h7>
                                        <br></br><h8>{cardetail.engine}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-2  col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/weight.png" alt="weight"/>
                                        </div>                                        
                                        <div className='col-4'>
                                        <h7> Weight</h7>
                                        <br></br><h8>{cardetail.weight}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-2 col-lg-3 col-md-5 col-sm-6'>
                                   <div className='tech-card'>
                                    <div className='row'>
                                        <div className='col-3'>
                                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/steering-wheel.png" alt="steering-wheel"/>                                        </div>
                                        <div className='col-4'>
                                        <h7>Steering</h7>
                                        <br></br><h8>{cardetail.steering}</h8>
                                        </div>
                                    </div>
                                   
                                   </div>
                                </div>
                                <div className='mt-2  col-lg-6 col-md-6 col-sm-12'>
                                
                                </div>
                            </div>

                            <div id='descp' className='row description p-2 mt-4'>
                                <h4>Description</h4>
                                <span>
                                {cardetail.discription}
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12  mt-4 p-2'>
                        <div className='contact-info'>
                            <h2>{cardetail.location}</h2>
                            <button className='mt-4 btn-owner'>Contact Owner</button>
                            <button className='mt-4 btn-sendmsg' onClick={()=>contactcar(params.id)}>Send Message</button>
                        </div>
                        {
                            (cars && (cars.length>0))?
                            cars.map((item)=>
                            <div className='similar-cars mt-4'>
                            <div className='car-card '>
								<img src={require(`../images/${item.imagepath[0].replace('..\\frontend\\src\\images\\', '')}`)} class="img-thumbnail"/>
								<h3>{item.title}</h3>
								<button className='buy-btn'>Buy Car</button>
								<button className='buy-btn ml-3' onClick={()=>viewcar(item._id)}>View Car</button>
							</div>
                        </div>
                            )
                            :
                            <></>
                        }
                       

                       
                    </div>
                </div>
            </div>

       </div>

      

    );
}

export default Cardetail;