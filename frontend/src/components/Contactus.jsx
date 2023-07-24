import React from 'react'

function Contact(){
    return(
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
                                <p><span>Address:</span> 555-0032 Osaka city Nishi Yodogawa ward Owada 4-1-22-302</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="border w-100 p-4 rounded mb-2 d-flex">
                                <div class="icon mr-3">
                                    <span class="icon-mobile-phone"></span>
                                </div>
                                <p><span>Phone:</span> <a href="tel://1234567920">+81 6 6195 7428</a></p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="border w-100 p-4 rounded mb-2 d-flex">
                                <div class="icon mr-3">
                                    <span class="icon-envelope-o"></span>
                                </div>
                                <p><span>Fax:</span> <a href="mailto:info@yoursite.com">+81 6 6474 8070</a></p>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-md-8 block-9 mb-md-5">
                    <form action="#" class="bg-light p-5 contact-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject"/>
                    </div>
                    <div class="form-group">
                        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
                    </div>
                    </form>
                
                </div>
                </div>
                
            </div>
            </section>
        </div>
    
    );
}
export default Contact;