import React from 'react'
import './style.css'
import car1 from '../assets/car-1.jpg'
import car3 from '../assets/car-3.jpg'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
	const [recentcars, setRecentcars]= useState([]);
	const navigate= useNavigate();
	
	useEffect(()=>{
			getrecentcars();
	});

	const getrecentcars=async()=>{
		let result =await fetch("http://localhost:5000/getrecentcars");
		 result= await result.json();
		 	setRecentcars(result);
	}
	const viewcar=(id)=>{
        navigate(`/cardetail/${id}`);
    }

	return (
		<div className='homepage'>

			<div class="hero-wrap ftco-degree-bg" data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="container">
					<div class="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
						<div class="col-lg-8">
							<div class="text w-100 text-center mb-md-5 pb-md-5">
								<h1 class="mb-4">Let's Connect Japan to the World</h1>
								<p >A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>

							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="ftco-section ftco-no-pt bg-light">
				<div class="container">
					<div class="row no-gutters">
						<div class="col-md-12	featured-top">
							<div class="row no-gutters">
								<div class="col-md-4 d-flex align-items-center">
									<form action="#" class="request-form  bg-primary">
										<h2>Search Your Car</h2>
										<div class="form-group">
											<label for="" class="label">Make</label>
											<input type="text" class="form-control" placeholder="City, Airport, Station, etc" />
										</div>
										<div class="form-group">
											<label for="" class="label">Model</label>
											<input type="text" class="form-control" placeholder="City, Airport, Station, etc" />
										</div>
										<div class="d-flex">
											<div class="form-group mr-2">
												<label for="" class="label">Variant</label>
												<input type="text" class="form-control" id="book_pick_date" placeholder="Date" />
											</div>
											<div class="form-group ml-2">
												<label for="" class="label">Price</label>
												<input type="text" class="form-control" id="book_off_date" placeholder="Date" />
											</div>
										</div>
										<div class="form-group">
											<label for="" class="label">Type</label>
											<input type="text" class="form-control" id="time_pick" placeholder="Time" />
										</div>
										<div class="form-group">
											<input type="submit" value="Search Car" class="btn btn-secondary py-3 px-4" />
										</div>
									</form>
								</div>
								<div class="col-md-8 d-flex align-items-center">
									<div class="services-wrap rounded-right w-100">
										<h3 class="heading-section mb-4">Better Way to Buy Your Perfect Cars</h3>
										<div class="row d-flex mb-4">
											<div class="col-md-4 d-flex align-self-stretch ">
												<div class="services w-100 text-center">
												<img width="64" height="64" src="https://img.icons8.com/plasticine/100/car--v1.png" alt="car--v1"/>													<div class="text w-100">
														<h3 class="heading mb-2">Choose Your Car</h3>
													</div>
												</div>
											</div>
											<div class="col-md-4 d-flex align-self-stretch">
												<div class="services w-100 text-center">
												<img width="64" height="64" src="https://img.icons8.com/arcade/64/phone.png" alt="phone"/>													<div class="text w-100">
														<h3 class="heading mb-2">Contact US</h3>
													</div>
												</div>
											</div>
											<div class="col-md-4 d-flex align-self-stretch ">
												<div class="services w-100 text-center">
												<img width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-booking-vacation-planning-girls-trip-flaticons-flat-flat-icons-2.png" alt="external-booking-vacation-planning-girls-trip-flaticons-flat-flat-icons-2"/>
													<div class="text w-100">
														<h3 class="heading mb-2">Book you car</h3>
													</div>
												</div>
											</div>
										</div>
										<p><a href="#" class="btn btn-primary py-3 px-4">Place your best deal</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section class="ftco-section ftco-no-pt bg-light">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12 heading-section text-center  mb-5">
							<span class="subheading">What we offer</span>
							<h2 class="mb-2">Feeatured Vehicles</h2>
						</div>
						
							{recentcars && (recentcars.length>0)?
							recentcars.map((item)=>
							<div className='col-lg-3 col-md-6 col-sm-12 '>
							 <div className='similar-cars mt-4'>
                            <div className='car-card '>
								<img src={require(`../images/${item.imagepath[0].replace('..\\frontend\\src\\images\\', '')}`)} class="img-thumbnail"/>
								<h3>{item.title}</h3>
								<button className='buy-btn ml-3' onClick={()=>viewcar(item._id)}>View Car</button>
							</div>
                        	</div>
							</div>
							):
							<></>	
						}
							
						
					</div>
					
				</div>
			</section>


			<section class="ftco-section ftco-about mb-5">
				<div class="container">
					<div class="row no-gutters">
						<div class="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center aboutusme" >
						</div>
						<div class="col-md-6 wrap-about ">
							<div class="heading-section heading-section-white pl-md-5">
								<span class="subheading">About us</span>
								<h2 class="mb-4">Welcome to Jannat Corporation</h2>

								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
								<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
								<p><a href="#" class="btn btn-primary py-3 px-4">Search Vehicle</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="ftco-section ftco-intro intro-section mt-5" >
			<div class="overlay mt-5"></div>
			<div class="container mt-5">
				<div class="row justify-content-end">
					<div class="col-md-6 heading-section heading-section-white ">
            <h2 class="mb-3">Do You Want To Buy Car With Us? So Don't Be Late.</h2>
            <a href="#" class="btn btn-primary btn-lg">Become an owner of your first car</a>
          </div>
				</div>
			</div>
				</section>

			<section class="ftco-section bg-light">
					<div class="container">
						<div class="row justify-content-center mb-5">
						<div class="col-md-7 text-center heading-section ">
							<span class="subheading">Testimonial</span>
							<h2 class="mb-3">Happy Clients</h2>
						</div>
						</div>
						
      </div>
    			</section>

				<section class="ftco-counter ftco-section img bg-light" id="section-counter">
			<div class="overlay"></div>
    	<div class="container">
    		<div class="row">
          <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ">
            <div class="block-18">
              <div class="text text-border d-flex align-items-center">
                <strong class="number" data-number="60">10+</strong>
                <span>Year <br></br>Experienced</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ">
            <div class="block-18">
              <div class="text text-border d-flex align-items-center">
                <strong class="number" data-number="1090">120</strong>
                <span>Total <br></br>Cars</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ">
            <div class="block-18">
              <div class="text text-border d-flex align-items-center">
                <strong class="number" data-number="2590">50</strong>
                <span>Happy <br></br>Customers</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 justify-content-center counter-wrap ">
            <div class="block-18">
              <div class="text d-flex align-items-center">
                <strong class="number" data-number="67">60</strong>
                <span>Total <br></br>Branches</span>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>	





		</div>
	);
}
export default Home;