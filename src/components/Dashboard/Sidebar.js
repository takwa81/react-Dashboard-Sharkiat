import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () =>{

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading" ></div>
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                    </div>

                                لوحة التحكم
                            </Link>
                            <hr></hr>
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                الأصناف
                            </Link>
                            <hr></hr>
                            <Link className="nav-link" to="/products">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                المنتجات
                            </Link>
                            <hr></hr>
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                الإعدادات
                            </Link>
                           
                        </div>
                    </div>
                  
                </nav>
    );
}
export default Sidebar ;