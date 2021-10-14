import axios from "axios"
import {React, useEffect, useState} from "react"

const Login = ({history}) => {

const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [error, seterror] = useState("")
const [loading, setloading] = useState("")


  useEffect(()=>{
      const userInfo=localStorage.getItem("userInfo");
      if(userInfo)
      {
          var a=JSON.parse(userInfo)
          if(a.isAdmin==true)
          {
            history.push("/Admin");
          }
          else
          {
            history.push("/Profile");
          }
          
      }
      
      }, [history]);


const submitHandler= async (e)=>{
    e.preventDefault()

    try{
        
        const config={
            headers:{
            "Content-type":"application/json"
            }
        }
     setloading(true)
     
     const{data}=await axios.post(
        "/api/users/login",
        {
            email,
            password,
        },
        config
     );
     
     localStorage.setItem("userInfo", JSON.stringify(data));
     history.push("/Profile");
       
    } catch(error){
        seterror(error.response.data.message);
    }
};
    return (
        <div>
            <div className="ds_wrapper  portfolio_slider_sec">
        <div className="container">
            <div className="row">
                
                <div className="full_width content">
                    <div className="booking_page full_width">
                      
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h2 className="block_title">
                                Before Getting Appointment Login here
                            </h2>
                            <h4 className="text-danger">{error}</h4>
                            <div className="booking_schadule full_width ">
                                <form onSubmit={submitHandler}>
                                    <fieldset>
                                        <label >
                                        Email
                                        </label>
                                        <input type="email"  className="name" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" />
                                    </fieldset>
                                    <fieldset>
                                        <label>
                                        Password
                                    </label>
                                        <input type="Password"  className="name" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password"/>
                                    </fieldset>
                                   
                                    <fieldset>
                                        <button type="submit"  className="submit_btn booking_btn">
                                    Login
                                </button>
                                    </fieldset>
                                    <p id="booking_err">
                                    </p>
                                    <a href="/Register">Dont have Account</a>
                                </form>
                            </div>
                            <div className="clearfix">
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="divider clearfix">
    </div>
        </div>
    )
}

export default Login
