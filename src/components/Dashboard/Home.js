import React from 'react';
import '../../asset/admin/css/styles.css' ;
import '../../asset/admin/js/scripts.js' ;
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Products from './Products/Products';


const Home = () => {
    let session = localStorage.getItem('token');

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        
                    </main>
                    {/* <Footer /> */}
                </div>
            </div>
        </div>

    );

}

export default Home;