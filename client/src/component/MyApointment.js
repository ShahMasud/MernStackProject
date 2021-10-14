import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class MyApointment extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {BookingData: [], othername:null};
  }
  CancleAppointment = value => () => {
    const dta = {
        _id:value._id,
        name: value.name,
        email: value.email,
        type: value.type,
        time: value.time,
        title: value.title,
        sets: value.sets,
        confirmSet: value.sets,
        bdate: value.bdate,
        status: false,
        bookingstatus: false
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Appoint Cancle  Successed")
            // this.setState({
            //     BookingData: this.state.BookingData.filter(el => el._id !== data._id)
            //   })
        });
  };
  
  componentDidMount() {
    this.interval = setInterval(this.getData, 5000);
    this.getData();

    
  }
  getData = () => 
  {
    axios.get('/api/booking/list')
    .then(response => {
      this.setState({ BookingData: response.data })
     // alert("Its Working fine");
    })
    .catch((error) => {
      alert(error)
      console.log(error);
    })
  }

  deleteExercise(data) {
    const dta = {
        _id:data._id,
        name: data.name,
        email: data.email,
        title: data.title,
        sets: data.sets,
        bdate: data.bdate,
        status: false
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Appoint Cancle  Successed")
            // this.setState({
            //     BookingData: this.state.BookingData.filter(el => el._id !== data._id)
            //   })
        });
    
  }

  

  render() {
    return (
      <div>


<div className="row">
        <div className="col-md-2">
          <div class="sidebar">
          <a  href="/Profile">Home</a>
          <a href="/AddBooking">New Booking</a>
            <a className="active" href="/myApointment">My Apointment</a>
            <a href="/PreviousApointment">Previous Apointment</a>
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
              <th>Email</th>
              <th>Title</th>
              <th>SetsNumber</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  
              </tr>
              {
                  this.state.BookingData.map((bdata, i) => 
                  {
                    this.state.othername+=bdata.sets;
                    const userInfo=localStorage.getItem("userInfo");
                    var a=JSON.parse(userInfo)
                    var currentId=a._id;
                    if(bdata.status==true)
                    {
                      
                      if(bdata.userId==currentId)
                      {
                        if(bdata.confirmSet==0)
                        {
                          return (
                            <tr key={i}>
                            <td>{bdata.name}</td>
                            <td>{bdata.email}</td>
                            <td>{bdata.title}</td>
                            <td className="text-danger h4">Your Appoinment is on  Pending Status Wait for Admin Aprovel  </td>
                            <td>
                            <a href="#" onClick={this.CancleAppointment(bdata)} className="btn btn-warning">Cancle Appointment  </a>
                            </td>
                            
                           
                            </tr>
                            )
                        }
                        else
                        {
                          return (
                            <tr key={i}>
                            <td>{bdata.name}</td>
                            <td>{bdata.email}</td>
                            <td>{bdata.title}</td>
                            <td>
                              {bdata.confirmSet}
                              <br/>
                              <b className="text-success">
                                Note: Please Reach to Barber Shop before 5 Mints from {bdata.time}
                              </b>
                            </td>
                            <td>
                            <a href="#" onClick={this.CancleAppointment(bdata)} className="btn btn-warning">Cancle Appointment  </a>
                            </td>
                            
                           
                            </tr>
                            )
                        }
                      }
                      else
                      {
                        return (
                          <tr key={i}>
                          <td>{bdata.name}</td>
                          <td>{bdata.email}</td>
                          <td>{bdata.title}</td>
                          <td colSpan="2">{bdata.confirmSet}</td>
                          </tr>
                          )
                      }
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