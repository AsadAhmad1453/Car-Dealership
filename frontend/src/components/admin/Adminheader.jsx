import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

function Adminheader() {
    const navigate= useNavigate();
    const auth= localStorage.getItem("user")
    function logout(){
        localStorage.clear();
        navigate('/admin/login');
    }
   
    return (
        <div className='adminheader'>
            <nav class="navbar navbar-expand-lg  ">
                <Link class="navbar-brand ml-5" to="/admin/dashboard">Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/admin/dashboard"><i class="fa fa-line-chart" aria-hidden="true"></i><i class="fa fa-desktop" aria-hidden="true"></i> Dashboard <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin/uploadcar"><i class="fa fa-upload" aria-hidden="true"></i> Upload Car</Link>
                        </li>
                       
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin/managecars"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Manage Cars</Link>
                        </li>
                        <li>
                            <div class="btn-group">
                            <button type="btn-user" class="btn-user mt-1 "  onClick={logout}>
                            <i class="fa fa-user" aria-hidden="true"></i> Logout
                            </button>
                          
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}
export default Adminheader;