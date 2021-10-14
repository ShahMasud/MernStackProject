import React, { Component } from 'react'
import { useEffect, useState } from "react"

const Admin = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      var a = JSON.parse(userInfo)
      if (a.isAdmin == true) {
        history.push("/Admin");
      }
      else {
        history.push("/Profile");
      }

    }

  }, [history]);
  return (

    <div>
       <div className="row">
        <div className="col-md-2">
          <div class="sidebar">
          <a class="active" href="/Admin">Home</a>
            <a href="/newBooking">New Booking</a>
            <a  href="/completedBooking">Previous Apointment</a>
            <a   href="/AddPricing">Add New Pricing List</a>
            <a   href="/ContactList">Genral Queries</a>
            <a  href="/Profile">About</a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            
          </div>
        </div>
        <div className="col-md-10 ">
          <h2 >Admin Dashboard</h2>
          <hr />
          <div className="row">
           
            <div className="col-md-4">
              <div class="ds_counter full_width">
                <div class="pmc_counter_border">
                </div>
                <div class="counter_text">
                  <a href="/completedBooking" className="nav-link" className="btn btn-warning"> <i class="fa fa-user"></i> Previous Bookings</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="ds_counter full_width">
                <div class="pmc_counter_border">
                </div>
                <div class="counter_text">
                  <a href="/newBooking" className="nav-link" className="btn btn-primary"> <i class="fa fa-user"></i> New Booking</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="ds_counter full_width">
                <div class="pmc_counter_border">
                </div>
                <div class="counter_text">
                  <a href="/AddPricing" className="nav-link" className="btn btn-success"> <i class="fa fa-user"></i> Add New Pricing</a>
                </div>
              </div>
            </div>
           
            <div className="col-md-12">
            <br/>
              <div class="ds_counter full_width">
                <div class="pmc_counter_border">
                </div>
                <div class="counter_text">
                  <a href="/ContactList" className="nav-link" className="btn btn-success"> <i class="fa fa-envelope"></i> Genral Queries from Clients</a>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-md-12">
              <hr/>
              <h4 className="text-success">Welcome to Barbershop Admin Dashboard </h4>
              <p className="text-success">
              At The Barbershop A Hair Salon for Men, we are dedicated to providing the best value. We do this by providing high quality salon services for men and boys, a unique customer focus, all in a warm, friendly atmosphere. We have removed almost all of the pain from getting a haircut. We think you will agree that sitting in our waiting room with a big HDTV, lots of great magazines and the local newspaper, while shucking salted peanuts, doesn't make for too bad of a time. And fellas, that's just while you wait. 
              </p>
            </div>

          </div>

          <br />
          <br />
        </div>




      </div>
    

    </div>

  )
}
export default Admin
