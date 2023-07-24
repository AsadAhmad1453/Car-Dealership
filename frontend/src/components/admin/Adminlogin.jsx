
import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Adminlogin(){

    const navigate= useNavigate();
    const[email, setEmail] = useState("");
    const[name, setName]= useState("");
    const [password, setPassword]= useState("");
    const [empty, setEmpty]= useState(false);
    const [error, setError] = useState(false);


    const  getdata=async()=>{

        if(!email || !password || !name){
            setEmpty(true);
            return false;
            
        }
            let result = await fetch('http://localhost:5000/login',{
                method: 'POST',
                body: JSON.stringify({email,password,name}),
                headers: {
                    'Content-Type': 'application/json'
                } ,

            });

            result = await result.json();

            if(result.email){
                localStorage.setItem("user", JSON.stringify(result));
                navigate('/admin/dashboard');

            }
            else{
                    setError(true);
            }


    }

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/admin/dashboard');
        }
    })

    return(

        <div className='admin-login'>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-lg-7  col-md-12 col-sm-12 ">
                    <h2 className='logo mt-4 ml-3'>Jannat Corporation</h2>
                    <div className='d-flex justify-content-center '>
                        <from className=" form mt-5"> 
                            <span className='mt-3 ml-2 welcome'>Admin Log in</span>
                                <div className='col-12'>
                                 {error &&  <span className='error-msg'>These Credentials does not match our records</span>}  
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Name</label><br/>
                                    <input type="text"  className="inpuut" placeholder='Username ' onChange={((e)=>setName(e.target.value))} value={name}></input>
                                   {empty && !name && <span className='error-msg'>This is mondatory</span> } 
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Email</label><br/>
                                    <input type="text"  className="inpuut" placeholder='email id' onChange={((e)=>setEmail(e.target.value))} value={email}></input>
                                   {empty && !email && <span className='error-msg'>This is mondatory</span> } 
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Password</label><br/>
                                    <input className="inpuut" type="password" placeholder='Password' onChange={((e)=>setPassword(e.target.value))} value={password} ></input>
                                    {empty && !password && <span className='error-msg'>This is mondatory</span> } 

                                </div>
                                <div className='col-12 mt-5 '>
                                    <button  className='buton inpuut' onClick={getdata} >Login</button>
                                </div>  
                               
                        </from>
                    </div>
                </div>

                <div className="col-5 overlay image d-none d-lg-block">
                   
                </div>
            </div>
        </div>
            
        </div>
    );
}
export default Adminlogin;