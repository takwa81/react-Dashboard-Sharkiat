import React from 'react';
import { Link , useNavigate}  from 'react-router-dom';
import swal from 'sweetalert';

    const Navbar = () =>{
        const navigate = useNavigate();
       
    
        const logout = () =>{
            localStorage.removeItem('token');
            navigate('/login');
            swal("Success","Successfully logged out","success");
        }

      

        
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/admin">Sharkiat</Link>

            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>

            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                <button className="btn btn-primary" onClick={logout} type="button"><i class="fa fa-lock"></i> logout </button>
                </div>
            </form>

        </nav>
    );
       
    }

    export default Navbar ;