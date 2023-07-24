import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import "./style.css";
function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <Link class="navbar-brand" to="/">Jannat <span>Corporation</span></Link>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item "><NavLink to="/" className="inactive" activeClassName="active" >Home</NavLink></li>
	          <li class="nav-item"><NavLink  to="/aboutus" className="inactive" activeClassName="active">About</NavLink></li>
            <li class="nav-item"><NavLink to="/auctions" className="inactive" activeClassName="active">Auctions</NavLink></li>
	          <li class="nav-item"><NavLink to="/cars" className="inactive" activeClassName="active">Cars</NavLink></li>
	          <li class="nav-item"><NavLink to="/contactus" className="inactive" activeClassName="active">Contact</NavLink></li>
			</ul>
	      </div>
	    </div>
	  </nav>
        </>
    );
   
}
export default Header;