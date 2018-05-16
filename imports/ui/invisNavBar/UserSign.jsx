import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export class UserSign extends Component {

  getUserData = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    const location = target.location.value;
    if (password.trim() !== confirmPassword.trim()) {
      console.log("passwords dont match");
      return;
    }

    const user = {
      email,
      password,
      profile: {
        name,
        location
      },
      createdAt: new Date()
    }
    Accounts.createUser(user, error => {
      error ? console.log(error.reason) : route.go('/');
    })
  }

  render() {

    return (
      <div className="App">
        <div className="mask3">
          <img src="img6.jpg" className="artist-signup-img" />
        </div>
        <NavBar1 />
        <form onSubmit={this.getUserData} className="artist-signup-form container-fluid needs-validation">
        <h1 className="artist-reg">User Registration</h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName2">Full Names</label>
              <input type="text" className="form-control" name="name" id="inputName2" placeholder="Full Names" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail2">Email</label>
              <input type="email" className="form-control" name="email" id="inputEmail2" placeholder="Email" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword2">Password</label>
              <input type="password" className="form-control" name="password" id="inputPassword2" placeholder="Password" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputConfirm2">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" id="inputConfirm2" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Location</label>
              <input type="text" className="form-control" name="location" placeholder="Location" id="inputCity" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label" htmlFor="gridCheck">
              <input className="form-check-input" type="checkbox" id="gridCheck" />              
                I agree to Elite's Ts&Cs
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }

}