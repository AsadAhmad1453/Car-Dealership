import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cars from './components/Cars';
import Cardetail from './components/Cardetail';
import Contactus from './components/Contactus';
import Aboutus from './components/About';
import Adminlogin from './components/admin/Adminlogin';
import Dashboard from './components/admin/Dashboard';
import Adminheader from './components/admin/Adminheader';
import Uploadcar from './components/admin/Uploadcar';
import Managecars from './components/admin/Managecars';
import reportWebVitals from './reportWebVitals';
import Privatecomponent from './components/admin/Privatecomponent';
import Contactcar from './components/Contactcar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
        <Route path="/*" element={
            <>
            <Header/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='aboutus' element={<Aboutus/>}/>
                <Route path='cars' element={<Cars/>}/>
                <Route path='cardetail/:id' element={<Cardetail/>}/>
                <Route path='contactcar/:id' element={<Contactcar/>}/>
                <Route path='contactus' element={<Contactus/>}/>

            </Routes>
            <Footer/>
            </>
        }
        />

        <Route path="/admin/*" element={
            <>
             <Adminheader/>
            <Routes>
                <Route element={<Privatecomponent/>}>
                <Route path='managecars' element={<Managecars/>}/>
                <Route path='uploadcar' element={<Uploadcar/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                </Route>
                
            </Routes>
         
            </>
        }
        />
          <Route path='/admin/login' element={<Adminlogin/>}/>
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
