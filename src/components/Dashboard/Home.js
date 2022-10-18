import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () =>{

    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[navigate]) ;

    const logout = () =>{
        localStorage.removeItem('token');
        navigate('/login');

    }

    return(
        <div className="container"> 
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Home Page</h3>
                </div>
                <div className="col-md-6">
                    <button 
                     onClick={logout}
                     className="btn btn-primary">Logout</button>
                </div>
            </div>
        </div>
    );
} 
export default Home ;