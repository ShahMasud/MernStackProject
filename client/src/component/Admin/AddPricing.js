import {React, useEffect, useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
const AddPricing = ({history}) => 
{
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
          var a = JSON.parse(userInfo)
          if (a.isAdmin == true) {
            history.push("/AddPricing");
          }
          else {
            history.push("/login");
          }
    
        }
    
      }, [history]);

const [name, setName] = useState("");
const [type, setType] = useState("");
const [price, setPrice] = useState("");
const [message, setMessage] = useState(null);
const [userId, setuserId] = useState(null);
const [error, setError] = useState(false);
const submitHandler= async (e)=>{
  
    e.preventDefault()
    try{
        const config={
            headers:{
            "Content-type":"application/json"
            }
        }
        
     
    if(type=="")
    {
        alert("Please Select Type for Appointment")
    }
    else
    {
        const{data}=await axios.post(
            "/api/price/",
            {
                
                name,
                type,
                price,
            },
            config
         );
         alert("Price Added Successed")
    }


     
    } catch(error){
        setMessage(error.response.data.message);
    }
};
    return (
        <div>


<div className="row">
        <div className="col-md-2">
          <div class="sidebar">
          <a  href="/Admin">Home</a>
            <a  href="/newBooking">New Booking</a>
            <a   href="/completedBooking">Previous Apointment</a>
            <a  class="active"  href="/AddPricing">Add New Pricing List</a>
            <a   href="/ContactList">Genral Queries</a>
            <a  href="/Profile">About</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-10 ">
          <h2>User Dashboard</h2>
          <hr />
          <div class="row">
                <div class="full_width content">
                    <div class="booking_page full_width">
                      
                        <div class="col-md-12">
                            <h2 class="block_title">
                                Add Pricing List Here 
                            </h2>
                            <h2>{message}</h2>
                            <div class="booking_schadule full_width ">
                                <form onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-md-4">
                                        <fieldset>
                                        <label >
                                       Enter Pricing  Title
                                        </label>
                                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="name" required="required" placeholder="Enter title"/>
                                    </fieldset>
                                        </div>
                                        <div className="col-md-4">
                                        <fieldset>
                                        <label >
                                        Select  Type
                                        </label>
                                        
                                        <select onChange={(e)=>setType(e.target.value)} className="from-control" >
                                            <option> Select Appointment Type</option>
                                            <option value="face Wash"> Face Wash</option>
                                            <option value="Hair Cutting"> Hair Cutting</option>
                                            <option value="Shaving "> Shaving</option>
                                        </select>
                                    </fieldset>
                                        </div>
                                        <div className="col-md-4">
                                        <fieldset>
                                        <label >
                                       Enter Amount
                                        </label>
                                        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}  className="name" required="required" placeholder="Enter Amount"/>
                                    </fieldset>
                                        </div>
                                    </div>
                                    

                                    
                                    
                                    
                                    <br/>
                                    <br/>
                                    <fieldset>
                                        <button type="submit"  className="btn btn-success btn-block">
                                    Submit
                                </button>
                                    </fieldset>
                                    
                                </form>
                            
                            </div>
                            <div class="clearfix">
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       
          <br />
          <br />
        </div>




      </div>
    
           
        </div>
    )
}

export default AddPricing
