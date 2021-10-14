import {React, useEffect, useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
const AddBooking = ({history}) => 
{
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
          var a = JSON.parse(userInfo)
          if (a.isAdmin == true) {
            history.push("/Admin");
          }
          else {
            history.push("/AddBooking");
          }
    
        }
    
      }, [history]);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [title, settitle] = useState("");
const [type, setType] = useState("");
const [time, setTime] = useState("");
const [bdate, setbdate] = useState("user.png");
const [status, setstatus] = useState("");
const [message, setMessage] = useState(null);
const [userId, setuserId] = useState(null);
const [error, setError] = useState(false);
const userInfo=localStorage.getItem("userInfo");
var a=JSON.parse(userInfo)
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
            "/api/booking/",
            {
                name:a.name,
                email:a.email,
                title,
                type,
                time:"",
                userId:a._id,
                bdate:Date.now,
                status:true,
                confirmSet:0,
                bookingstatus:false,
            },
            config
         );
         history.push("/Profile");
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
          <a  href="/Profile">Home</a>
            <a class="active" href="/AddBooking">New Booking</a>
            <a href="/myApointment">My Apointment</a>
            <a href="/PreviousApointment">Previous Apointment</a>
            <a href="/Profile">About</a>
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
                                Schedule Your New Appointment Here
                            </h2>
                            <h2>{message}</h2>
                            <div class="booking_schadule full_width ">
                                <form onSubmit={submitHandler}>
                                    <fieldset>
                                        <label >
                                        Title
                                        </label>
                                        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  className="name" required="required" placeholder="Enter title"/>
                                    </fieldset>

                                    
                                    <fieldset>
                                        <label >
                                        Select Type
                                        </label>
                                        
                                        <select onChange={(e)=>setType(e.target.value)} >
                                            <option> Select Appointment Type</option>
                                            <option value="face Wash"> Face Wash</option>
                                            <option value="Hair Cutting"> Hair Cutting</option>
                                            <option value="Shaving "> Shaving</option>
                                        </select>
                                    </fieldset>
                                    <br/>
                                    <br/>
                                    <fieldset>
                                        <button type="submit"  className="btn btn-success btn-block">
                                    Schedule New Appointment
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

export default AddBooking
