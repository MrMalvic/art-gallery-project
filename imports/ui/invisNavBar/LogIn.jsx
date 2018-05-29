import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export default class Login extends Component {

  userNotFound = () => {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  goToHome = () => {
      route.go('/') // pathDef, params, queryParams
}

logUserIn = e => {
  e.preventDefault();
  const email = e.target.email.value;
  const password =e.target.password.value;
 
  Meteor.loginWithPassword(email,password,err =>{
    err ? this.userNotFound() :route.go('/');
  })
}
  render() {

    return (
      <div className="App">
      <div id="snackbar2">User Does not exist.</div>  
        <div className="mask3">
        <img src="img5.jpg" className="artist-signup-img"/>
        </div>
        <NavBar1 />
        <br /><br />
         <br /><br />
        <div className="Container">
         <div className="row justify-content-center">
          <form onSubmit={this.logUserIn} className="artist-signup-form container-fluid">
          <h1 className="artist-reg">Welcome back!</h1>
            <div className="login">
              <label htmlFor="Email">Email or Username</label><br/>
              <input type="text" className="form-control2" name="email" id="Email" placeholder="Email or Username" />
            </div>
            <div className="login">
              <label htmlFor="inputPassword">Password</label><br/>
              <input type="password" className="form-control2" name="password" id="inputPassword" placeholder="Password" />
            </div>
            <p className="artist-reg pad">Forgot your password? click <a href="#" className="here">here</a> to reset it.</p>
            <button type="submit" className="btn btn-primary">LogIn</button>
          </form>
        </div>
        </div>
      </div>
    );
  }

}