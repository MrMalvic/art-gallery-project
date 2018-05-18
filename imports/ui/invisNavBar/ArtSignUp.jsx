import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';

export class ArtSignUp extends Component {

  getUserData = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    const location = target.location.value;
    const createdAt = new Date();
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
      createdAt
    }
    Accounts.createUser(user, error => {
      error ? console.log(error.reason) : route.go('/');
    })
  }

  render() {
    return (
      <div className="App">
        <div className="mask3">
          <img src="img1.jpg" className="artist-signup-img" />
        </div>
        <NavBar1 />
        <div>
          <form onSubmit={this.getUserData} className="artist-signup-form ">
            <h1 className="artist-reg">Artist Registration</h1>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="name" id="inputName" placeholder="Full Names" required />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Email" required />
              </div>
              <div className="form-group col-md-6">
                <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" required />
              </div>
              <div className="form-group col-md-6">
                <input type="password" className="form-control" name="confirmPassword" id="inputConfirm" placeholder="Confirm Password" required />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="location" id="inputCity" placeholder="Your Location" />
              </div>
              <div className="form-group col-md-6">
                <select name="category" id="inputCategory" className="form-control">
                  <option>Choose Category</option>
                  <option>Crafts</option>
                  <option>Drawings</option>
                  <option>Paintings</option>
                  <option>Sculpures</option>
                </select>
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
      </div>
    );
  }

}


