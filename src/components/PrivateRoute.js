import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Products from "./Dashboard/Products/Products";


const PrivateRoute = () =>{
    let session = localStorage.getItem('token');

    return(
        
        <Routes>
                <Route exact path="/products" element={!session ? <Navigate to="/login" /> : <Products/>} />
        </Routes>
    );
};

export default PrivateRoute;