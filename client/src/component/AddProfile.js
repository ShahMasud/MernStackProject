import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddProfile extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeJoningDate = this.onChangeJoningDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          email: '',
          phone: 0,
          joningdate: new Date(),
        }
      }
    
      
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
    
      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        })
      }
    
      onChangeJoningDate(date) {
        this.setState({
          joningdate: date
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const myprofile = {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          joningdate: this.state.joningdate
        }
    
        console.log(myprofile);
    
        axios.post('http://localhost:5000/Profiles/add', myprofile)
          .then(res => console.log(res.data));
    
        window.location = '/profilelist';
      }
    render() {
        return (
            <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>FullName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group"> 
          <label>Email Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Phone Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <label>JoningDate: </label>
          <div>
            <DatePicker
              selected={this.state.joningdate}
              onChange={this.onChangeJoningDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}
