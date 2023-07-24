import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Managecars() {

    const [cars, setcars] = useState([]);
    const [searchkey, setSearchkey]= useState();
    const navigate= useNavigate();
    

    useEffect(() => {
        getcars();
    }, []);

    const getcars = async () => {
        let result = await fetch("http://localhost:5000/getcars");
        result = await result.json();
        setcars(result);

    }
    const deletecar = async(id) => {
        let result= await fetch(`http://localhost:5000/delete/${id}`,{
            method: "Delete",

        });
        result= await result.json();
        if(result){
            getcars();
        }

    }

    const search=async()=>{

        let result=await fetch(`http://localhost:5000/search/${searchkey}`);
        result=await result.json();
        
      
            setcars(result);
       
    }
   
   
    return (
        <div className='managecars'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 main-heading mt-5'>
                        <h3>Manage your cars</h3>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                        <input className='inpuut' placeholder='Search for car' onChange={((e)=>setSearchkey(e.target.value))} value={searchkey}/>
                        <button className='searchbtn' onClick={search}>Search</button>
                    </div>
                    <div className='col-12 mt-4 '>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <th>Name</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Engine cc</th>
                                    <th>Location</th>
                                    <th>Transmission</th>
                                    <th>Action</th>
                                </thead>
                                { (cars && cars.length > 0) ?
                                    cars.map((item) =>
                                        <tr>
                                            
                                            <td>{item.title}</td>
                                            <td>{item.make}</td>
                                            <td>{item.model}</td>
                                            <td>{item.engine}</td>
                                            <td>{item.location}</td>
                                            <td>{item.transmission}</td>
                                            <td><button className='btn-delete' onClick={()=>deletecar(item._id)}>Delete</button></td>
                                        </tr>
                                    )
                                    :
                                    <tr>
                                            
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                </tr>
                                   
                                   

                                }


                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Managecars;