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
            <img src="logo2.png" className="d-inline-block align-top" alt="" />
          </a>
          <ul className="nav justify-Dropdowncontent-end">
          <li className="nav-item">          
          <a href="/upload" className="nav-link active">Upload</a>
          </li>
            <li className="nav-item">
              <a className="nav-link active" id="logOut" href="#" onClick={this.logUserOut}>Logout</a>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-inverse navbar-fixed-top trans-nav" id="loggedOut">
          <a className="navbar-brand" href="/">
            <img src="logo2.png" className="d-inline-block align-top" alt="" />
          </a>
          <ul className="nav justify-Dropdowncontent-end">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SignUp </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/SignUp">Artist</a>
                <a className="dropdown-item" href="/UserSign">User</a>
              </div>
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
