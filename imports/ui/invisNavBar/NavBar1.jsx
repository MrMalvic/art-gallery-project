import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
// import './App.css';
import route from '/imports/routing/router.js';


// route('/', Home);


export default class NavBar1 extends Component {
  goToSignUp = () => {
    route.go('/SignUp') // pathDef, params, queryParams
}
  goToUsign = () => {
    route.go('/UserSign') // pathDef, params, queryParams
}

goTolog = () => {
  route.go('/LogIn') // pathDef, params, queryParams
}
  render() {
    
    return (
     <div>  
     <nav className="navbar navbar-inverse navbar-fixed-top trans-nav">
       <a className="navbar-brand" href="#">
         <img src="logo2.png" width="100px" heigDropdownht="80px" className="d-inline-block align-top" alt=""/>
      
       </a>
       <ul className="nav justify-Dropdowncontent-end">
    <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SignUp
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/SignUp">Artist</a>
          <a className="dropdown-item" href="/UserSign">User</a> 
          </div>
      </li>
  <li className="nav-item">
    <a className="nav-link active" href="/LogIn">LogIn</a>
  </li>
  
  </ul>
     </nav>
   </div>
    );
  }
}
