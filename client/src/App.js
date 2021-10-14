import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./component/NavbarComponent";
import Home from "./component/Home";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Prices from "./component/Prices";
import ContactList from "./component/Admin/ContactList";
import Contact from "./component/Contact";
import Booking from "./component/Booking";
import Footer from "./component/footer";
import Admin from "./component/Admin";
import completedBooking from "./component/Admin/completedBooking";
import newBooking from "./component/Admin/newBooking";
import AddPricing from "./component/Admin/AddPricing";
import UserList from "./component/UserListComponent";
import Edit from "./component/EditComponent";
import Create from "./component/CreateComponent";
import Profile from "./component/Profile";
import MyApointment from "./component/MyApointment";
import PreviousApointment from "./component/PreviousApointment";
import ProfileList from "./component/ProfileList";
import AddProfile from "./component/AddProfile";
import Login from "./component/Login";
import Register from "./component/Register";
import AddBooking from "./component/AddBooking";

function App() {
  return (
    <Router>
      <Navbar /><br/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Gallery" component={Gallery}/>
        <Route exact path="/Prices" component={Prices}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Booking" component={Booking}/>
        <Route path="/Admin" component={Admin} />
        <Route path="/newBooking" component={newBooking} />
        <Route path="/completedBooking" component={completedBooking} />
        <Route path="/AddPricing" component={AddPricing} />
        <Route path="/ContactList" component={ContactList} />
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route path="/create" component={Create} />
        <Route path="/user" component={UserList} />
        <Route path="/profile" component={Profile} />
        <Route path="/myApointment" component={MyApointment} />
        <Route path="/PreviousApointment" component={PreviousApointment} />
        <Route path="/profilelist" component={ProfileList} />
        <Route path="/addprofile" component={AddProfile} />
        <Route path="/AddBooking" component={AddBooking} />
        <Footer/>
    </Router>
    
  );
}

export default App;