import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory()
    const userInfo=localStorage.getItem("userInfo");
    var a=JSON.parse(userInfo)
    if(a!=null)
    {
        return (
            <div>
                <header class="header_main header_home">
                    <div class="ds_wrapper wrapper_nav">
                        <div class="container">
                            <div class="row">
                                <div class="navbar-header pull-right">
                                    <button type="button" class="navbar_toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <i class="fa fa-list-ul">
                                        </i>
                                    </button>
                                </div>
                                <div class="col-sm-2 col-lg-2 col-md-2 col-xs-5">
                                    <div class="ds_logo_left">
                                        <a href="index.html">
                                            <img alt="" src="images/logo-img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-8 col-md-8 col-xs-12 ds_navigation_menu">
                                    <div class="navbar_collapse">
                                        <nav>
                                            <ul class="menu">
                                                <li class="current_page_item">
                                                    <Link to="/" className="nav-link">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about" className="nav-link">About</Link>
    
                                                </li>
                                                <li>
                                                    <Link to="/gallery" className="nav-link">Gallery</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/prices" className="nav-link">Prices</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/contact" className="nav-link">Contact</Link>
                                                </li>
    
                                               
                                                <li>
                                                    <Link className="nav-link" onClick={() => {
                                                        localStorage.removeItem("userInfo");
                                                        history.push("/login");
                                                    }}>SignOut</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="pull-right hidden-xs" id="appointment_btn">
                                    <div class="appointment_btn">
                                        <Link to="/AddBooking" className="nav-link">Book an appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <header class="header_main header_home">
                    <div class="ds_wrapper wrapper_nav">
                        <div class="container">
                            <div class="row">
                                <div class="navbar-header pull-right">
                                    <button type="button" class="navbar_toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <i class="fa fa-list-ul">
                                        </i>
                                    </button>
                                </div>
                                <div class="col-sm-2 col-lg-2 col-md-2 col-xs-5">
                                    <div class="ds_logo_left">
                                        <a href="index.html">
                                            <img alt="" src="images/logo-img.png" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-8 col-md-8 col-xs-12 ds_navigation_menu">
                                    <div class="navbar_collapse">
                                        <nav>
                                            <ul class="menu">
                                                <li class="current_page_item">
                                                    <Link to="/" className="nav-link">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about" className="nav-link">About</Link>
    
                                                </li>
                                                <li>
                                                    <Link to="/gallery" className="nav-link">Gallery</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/prices" className="nav-link">Prices</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/contact" className="nav-link">Contact</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/Login" className="nav-link">Login</Link>
                                                </li>
    
                                                <li>
                                                    <Link to="/Register" className="nav-link">Register</Link>
                                                </li>
                                                
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="pull-right hidden-xs" id="appointment_btn">
                                    <div class="appointment_btn">
                                        <Link to="/login" className="nav-link">Book an appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
   
}

export default Navbar;
