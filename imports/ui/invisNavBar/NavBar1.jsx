import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
// import './App.css';
import route from '/imports/routing/router.js';
// route('/', Home);
import $ from 'jquery';



export default class NavBar1 extends Component {

  componentDidMount(){
        if (Meteor.userId()) {
        $('#loggedOut').hide();
        $('#loggedIn').show();
        console.log("you're now logged in")
      }
      else {
        $('#loggedOut').show();
        $('#loggedIn').hide();
        console.log("you're now logged out")
      }
    
  }

  logUserOut = (e) => {
    e.preventDefault();
    console.log('you are now logged out');
    Meteor.logout();
    window.location.reload()
    route.go('/')
  }

  

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top trans-nav" id="loggedIn">
          <a className="navbar-brand" href="/">
            <img src="logo2.png" className="d-inline-block align-top nav-img" alt="" />
          </a>
          <ul className="nav justify-Dropdowncontent-end">
          <li className="nav-item">          
          <a href="/upload" className="nav-link active">Upload</a>
          </li>
          <li className="nav-item">
              <a className="nav-link active" href="/ProfilePage">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="logOut" href="#" onClick={this.logUserOut}>Logout</a>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-inverse navbar-fixed-top trans-nav" id="loggedOut">
          <a className="navbar-brand" href="/">
            <img src="logo2.png" className="d-inline-block align-top nav-img" alt="" />
          </a>
          <ul className="nav justify-Dropdowncontent-end">
            <li className="nav-item">
                <a className="nav-link" href="/UserSign">SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="logIn" href="/LogIn">LogIn</a>
            </li>
          </ul>
        </nav>
        
      </div>
    );
  }
}
