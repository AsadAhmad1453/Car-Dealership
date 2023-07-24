import React from 'react'
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import car1 from '../assets/car-1.jpg'
function Cars() {
    const [searchmake, setSearchmake]= useState("Enter make");
    const [searchmodel, setSearchmodel]= useState("Enter model");
    const [searchtitle, setSearchtitle]= useState("Enter name");
    const [cars, setCars] = useState([]);
    const navigate= useNavigate("");
    useEffect(()=>{
            getcarsinfo();
    },[]);

    const getfilteredcars=async()=>{
        
        let result= await fetch(`http://localhost:5000/filtercars/${searchmake}/${searchmodel}/${searchtitle}`)
            result= await result.json();
           
        setCars(result);
    }

    const getcarsinfo=async ()=>{
        let result=await fetch("http://localhost:5000/getcars");
        result=await result.json();
        setCars(result);
    }

    const fulldetail=(id)=>{
        navigate(`/cardetail/${id}`);
    }
    return (
        <div className='cars'>
            <section class="hero-wrap hero-wrap-2 js-fullheight cars-back" data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                        <div class="col-md-9  pb-5">
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Car details <i class="ion-ios-arrow-forward"></i></span></p>
                            <h1 class="mb-3 bread">Find Used Cars in Japan</h1>
                            <h5 className='cars-subheading'>With thousands of cars, we have just the right one for you</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row p-4'>
                    <div className='col-lg-4 col-md-4 col-sm-12 '>
                        <div className='card-filter-make'>
                            <div className='make-heading'>
                                <h4 >Search By Make</h4>
                            </div>
                            <div className='brands'>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/144/suzuki-.png" alt="suzuki-"/></a>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/96/land-rover.png" alt="land-rover"/></a>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/96/honda.png" alt="honda"/></a>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/96/mercedes-benz.png" alt="mercedes-benz"/></a>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/96/bmw--v1.png" alt="bmw--v1"/></a>
                            <a><img width="96" height="96" src="https://img.icons8.com/color/96/nissan.png" alt="nissan"/></a>
                            </div>
                        </div>
                       
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='filter-card '>
                            <h4 >Used Cars for Sale</h4>
                            <button class=" filter-btn " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Apply Filters
                            </button>
                            <div class="collapse mt-3" id="collapseExample">
                                <div class="filters">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>Make: </label>
                                            <input className="ml-2" type='text' onChange={((e)=>setSearchmake(e.target.value))} value={searchmake} placeholder='Suzuki etc..'/>
                                        </div>
                                        <div className='col-6'>
                                            <label>Model: </label>
                                            <input className="ml-2" type='text' onChange={((e)=>setSearchmodel(e.target.value))} value={searchmodel} placeholder='2017 2018 etc..'/>
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <label>Car name: </label>
                                            <input className="ml-2" type='text' onChange={((e)=>setSearchtitle(e.target.value))} value={searchtitle} placeholder='abc'/>
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <button className='submit-btn' onClick={()=>getfilteredcars()}>Search</button>
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                        </div>
                        {
                             (cars && cars.length > 0) ?
                             cars.map((item) =>
                             <div className='car-card mt-4'>
                             <div className='row'>
                                 <div className='col-lg-4 col-md-4 col-sm-12'>
                                
                                     <img src={require(`../images/${item.imagepath[0].replace('..\\frontend\\src\\images\\', '')}`)} alt="..." class="img-thumbnail"/>
                                 </div>
                                 <div className='col-lg-8 col-md-8 col-sm-12 '>
                                     <div>
                                     <h4>{item.title}</h4>
                                     <h5>{item.make}</h5>
                                     <span>{item.interiorcolor}</span>
                                     <span className='ml-3'>{item.model}</span>
                                     <span className='ml-3'>{item.engine}</span>
                                     <span className='ml-3'>{item.location}</span>
                                     <span className='ml-3'>{item.transmission}</span>
                                     </div>
                                     <div className='mt-3'><Link to={`/cardetail/${item._id}`} className='view-car' onClick={()=>fulldetail(item._id)}>Show Full Details</Link></div>
                                 </div>
                             </div>
                         </div>
                             )
                             :
                             <span>No record found</span>
                        }
                       

                      
                       
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cars;