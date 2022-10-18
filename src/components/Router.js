import React from "react";
import { Navigate, Route , Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Dashboard/Home";


const Router = () =>{
    let session = localStorage.getItem('token');

    return(
        <Routes>
            <Route exact path="/login" element={<Login />}/>
            <Route path="/" element={session ? <Navigate to="/dashboard" /> : <Login/>} />
            <Route exact path="/dashboard" element={<Home />}/>
        </Routes>
    );
}
export default Router;