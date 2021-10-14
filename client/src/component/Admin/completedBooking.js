import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class completedBooking extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this)
    const userInfo=localStorage.getItem("userInfo");
    if(userInfo)
    {
        var a=JSON.parse(userInfo)
        if(a.isAdmin==true)
        {
          props.history.push("/completedBooking")
        }
        else
        {
          props.history.push("/Profile")
        }
        
    }
    this.state = {exercises: []};
  }
  
  componentDidMount() {
     
    axios.get('/api/booking/list')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        alert(error)
        console.log(error);
      })
  }

  

  

  render() {
    return (
      <div>


<div className="row">
        <div className="col-md-2">
          <div class="sidebar">
          <a  href="/Admin">Home</a>
            <a  href="/newBooking">New Booking</a>
            <a  class="active"  href="/completedBooking">Previous Apointment</a>
            <a   href="/AddPricing">Add New Pricing List</a>
            <a   href="/ContactList">Genral Queries</a>
            <a  href="/Profile">About</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="col-md-10">
          <h2>All Appoinment Record</h2>
          <hr />
        <table className="table">
          <thead className="thead-light">
            <tr>
                
              <th>Applicant Name</th>
              <th>Email Address</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  
              </tr>
              {
                  this.state.exercises.map((employee, i) => {
                    
                    if(employee.status=true)
                    {
                        return (
                            <tr key={i}>
                            
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.title}</td>
                            <td><a className="btn btn-success">Cancled</a></td>
                            
                           
                            </tr>
                            )
                    }
                     if(employee.status==false && employee.bookingstatus==true)
                    {
                      return (
                        <tr key={i}>
                        
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.title}</td>
                        <td><a className="btn btn-success">Finished Works</a></td>
                        
                       
                        </tr>
                        )
                    }
                    })
              }
          </tbody>
        </table>
      
      

          <br />
          <br />
        </div>
      </div>
      </div>
    )
  }
}