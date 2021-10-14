import {React, useState} from 'react'
import axios from "axios";
const Register = () => {

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [pic, setPic] = useState("user.png");
const [password, setPassword] = useState("");
const [confirmpassword, setConfirmpassword] = useState("");
const [message, setMessage] = useState(null);
const [picMessage, setPicMessage] = useState(null);
const [error, setError] = useState(false);

const submitHandler= async (e)=>{
    e.preventDefault()

   if(password!==confirmpassword)
   {
       setMessage("Password not Match")
   }
   else
   {
    try{
        
        const config={
            headers:{
            "Content-type":"application/json"
            }
        }
        
     
     const{data}=await axios.post(
        "/api/users",
        {
            name,
            pic,
            email,
            password,
        },
        config
     );
     console.log(data);
     setMessage("Your Account Successfully Created")
     localStorage.setItem("userInfo", JSON.stringify(data));

       
    } catch(error){
        setMessage(error.response.data.message);
    }
   }
};
    return (
        <div>
           <div class="ds_wrapper  portfolio_slider_sec" >
        <div class="container">
            <div class="row">
                <div class="full_width content">
                    <div class="booking_page full_width">
                      
                    <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h2 class="block_title">
                                Before Getting Appointment Register here
                            </h2>
                            <h2>{message}</h2>
                            <div class="booking_schadule full_width ">
                                <form onSubmit={submitHandler}>
                                    <fieldset>
                                        <label >
                                        Name
                                        </label>
                                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="name" required="required" placeholder="Enter Full Name"/>
                                    </fieldset>
                                    <fieldset>
                                        <label >
                                        Email
                                        </label>
                                        <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="name" required="required" placeholder="Enter Email"/>
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label>
                                        Password
                                    </label>
                                        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}   className="name" required="required" placeholder="Enter New Password"/>
                                    </fieldset>

                                    <fieldset>
                                        <label>
                                       Confirm Password
                                    </label>
                                        <input type="Password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}  className="name" required="required" placeholder="Confirm Password"/>
                                    </fieldset>

                                    
                                   
                                    <fieldset>
                                        <button type="submit"  className="submit_btn booking_btn">
                                    Register
                                </button>
                                    </fieldset>
                                    <p id="booking_err">
                                    </p>
                                    <a href="/Login">Already  have an Account</a>
                                </form>
                            
                            </div>
                            <div class="clearfix">
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Register
