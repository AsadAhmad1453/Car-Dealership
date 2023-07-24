import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [contacts, setContacts] = useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        getcarcontacts();
       
    });

    const getcarcontacts=async()=>{
        let result= await fetch("http://localhost:5000/getcontactcar");
        result= await result.json();
        setContacts(result);
       
    }

    const viewcontactcar=(car_id)=>{
        navigate(`/cardetail/${car_id}`);

    }

    const deletecontact=async(id)=>{
       
        let result= await fetch(`http://localhost:5000/deletecontactcar/${id}`,{
            method: "Delete",
        });
        result= await result.json();
        if(result){
        getcarcontacts();
        }
       

    }

    return (
        <div className='dashboard'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='main-heading'>Jannat Corporation</h3>
                        <span>Let's Connect Japan to the World</span>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 sub-heading'>
                        <h5>Customer Requests</h5>
                    </div>
                    <div className='col-12'>
                        <div className='table-responsive'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Car Name</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts && (contacts.length>0)?
                                    contacts.map((item,index)=>
                                    <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.car_name}</td>
                                    <td>{item.message}</td>
                                    <td>
                                       
                                    <button className='btn-discard' onClick={()=>deletecontact(item._id)}><i class="fa fa-check" aria-hidden="true"></i> Contacted</button>   <button className='btn-viewcarr' onClick={()=>viewcontactcar(item.car_id)}><i class="fa fa-check" aria-hidden="true"></i> View Car</button>

                                    </td>
                                    
                                </tr>
                                    ):
                                    
                                    <></>    
                            }
                               
                              
                            </tbody>
                        </table>

                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;