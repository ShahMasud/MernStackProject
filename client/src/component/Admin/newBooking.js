import React, { Component } from 'react';
import { Link , useHistory} from 'react-router-dom';

import axios from 'axios';



export default class newBooking extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)


    this.state = {BookingData: [], othername:null, time:""};
    
    const userInfo=localStorage.getItem("userInfo");
      if(userInfo)
      {
          var a=JSON.parse(userInfo)
          if(a.isAdmin==true)
          {
            props.history.push("/newBooking")
          }
          else
          {
            props.history.push("/Profile")
          }
          
      }
  }
  
  CancleAppointment = value => () => {
    const dta = {
        _id:value._id,
        name: value.name,
        email: value.email,
        title: value.title,
        sets: value.sets,
        bdate: value.bdate,
        status: false,
        bookingstatus: false
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Appoint Swapped Successed")
            // this.setState({
            //     BookingData: this.state.BookingData.filter(el => el._id !== data._id)
            //   })
        });
  };
  handleChange=(e)=>{
    this.setState({time:e.target.value})
  }


  ScheduleTime = value => () => {

    if(value.confirmSet==0)
    {

      const dta = {
        _id:value._id,
        name: value.name,
        email: value.email,
        title: value.title,
        time:this.state.time,
        type:value.type,
        sets: value.sets,
        confirmSet: value.sets,
        bdate: value.bdate,
        status: value.status,
        bookingstatus: value.bookingstatus
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Schedule Time Successfully Added")
            // this.setState({
            //     BookingData: this.state.BookingData.filter(el => el._id !== data._id)
            //   })
        });
      
    }
    else
    {

      const dta = {
        _id:value._id,
        name: value.name,
        email: value.email,
        title: value.title,
        time:this.state.time,
        type:value.type,
        sets: value.sets,
        confirmSet: value.confirmSet,
        bdate: value.bdate,
        status: value.status,
        bookingstatus: value.bookingstatus
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Schedule Time Successfully Added")
            // this.setState({
            //     BookingData: this.state.BookingData.filter(el => el._id !== data._id)
            //   })
        });
    }

    

  };
  FinishedAppointment = value => () => {
    const dta = {
        _id:value._id,
        name: value.name,
        email: value.email,
        title: value.title,
        sets: value.sets,
        confirmSet: value.sets,
        bdate: value.bdate,
        status: false,
        bookingstatus: true
      }
    axios.post('/api/booking/edit', dta)
      .then(response => 
        {
            alert("Worke Finished  Successed")
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
        type: data.type,
        time: data.time,
        email: data.email,
        title: data.title,
        sets: data.sets,
        confirmSet: data.sets,
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
          <a className="active" href="/newBooking">New Booking</a>
            <a  href="/completedBooking">Previous Apointment</a>
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
        <div className="col-md-10 ">
          <h2>All Appoinment Record</h2>
          <hr />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>SetsNumber</th>
              <th>time</th>
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
                      if(bdata.time!="")
                      {
                        return (
                          <tr key={i}>
                          <td>{bdata.name}</td>
                          <td>{bdata.email}</td>
                          <td>{bdata.title}</td>
                          <td> {bdata.confirmSet}</td>
                          <td>{bdata.time}</td>
                          <td>
                          <a href="#" onClick={this.CancleAppointment(bdata)} className="btn btn-warning">Swapped  </a>
                          </td>
                          <td>
                          <a href="#" onClick={this.FinishedAppointment(bdata)} className="btn btn-success"> Finished </a>
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
                          <td colSpan="4">
                          <input type="time"  value={this.state.value} onChange={this.handleChange} className="form-control"/>
                          <br/>
                          <a href="#" onClick={this.ScheduleTime(bdata)} className="btn btn-success"> Sechedule time </a>  
                            
                          </td>
                          
                         
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