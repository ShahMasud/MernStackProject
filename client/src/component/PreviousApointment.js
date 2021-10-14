import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class PreviousApointment extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this)
    const userInfo=localStorage.getItem("userInfo");
    if(userInfo)
    {
        var a=JSON.parse(userInfo)
        if(a.isAdmin==true)
        {
          props.history.push("/Admin")
        }
        else
        {
          props.history.push("/PreviousApointment")
        }
        
    }
    this.state = {exercises: []};
  }
  // CancleAppointment = value => () => {
  //   const dta = {
  //       _id:value._id,
  //       title: value.title,
  //       sets: value.sets,
  //       bdate: value.bdate,
  //       status: false
  //     }
  //   axios.post('/api/booking/edit', dta)
  //     .then(response => 
  //       {
  //           alert("Appoint Cancle  Successed")
  //           // this.setState({
  //           //     exercises: this.state.exercises.filter(el => el._id !== data._id)
  //           //   })
  //       });
  // };
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

  // deleteExercise(data) {
  //   const dta = {
  //       _id:data._id,
  //       title: data.title,
  //       sets: data.sets,
  //       bdate: data.bdate,
  //       status: false
  //     }
  //   axios.post('/api/booking/edit', dta)
  //     .then(response => 
  //       {
  //           alert("Appoint Cancle  Successed")
  //           // this.setState({
  //           //     exercises: this.state.exercises.filter(el => el._id !== data._id)
  //           //   })
  //       });
    
  // }

  

  render() {
    return (
      <div>


<div className="row">
        <div className="col-md-2">
          <div class="sidebar">
          <a  href="/Profile">Home</a>
            <a  href="/AddBooking">New Booking</a>
            <a  href="/myApointment">My Apointment</a>
            <a class="active" href="/PreviousApointment">Previous Apointment</a>
            <a href="/Profile">About</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="col-md-10 ">
          <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
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
                    const userInfo=localStorage.getItem("userInfo");
                    var a=JSON.parse(userInfo)
                    var currentId=a._id;
                    if(employee.status==false && employee.userId==currentId && employee.bookingstatus==false)
                    {
                        return (
                            <tr key={i}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.title}</td>
                            <td><b className="text-warning">Cancled</b></td>
                            </tr>
                            )
                    }
                    else if(employee.userId==currentId && employee.bookingstatus==true)
                   {
                    return (
                      <tr key={i}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.title}</td>
                      <td><b className="text-success">Done</b></td>
                      
                      
                     
                      </tr>
                      )
                   }
                    })
              }
          </tbody>
        </table>
      
      

          </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      </div>
    )
  }
}