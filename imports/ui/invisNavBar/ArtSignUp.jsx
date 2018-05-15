import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';

export class ArtSignUp extends Component {

     
  render() {

    return (
      
      <div className="App">
        <div className="mask3">
          <img src="img1.jpg" className="artist-signup-img" />
        </div>
        <NavBar1 />
        <div>
        <form onSubmit= {this.getUserData}  className="artist-signup-form container-fluid needs-validation">
        <h1 className="artist-reg">Artist Registration</h1> 
        
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Full Names</label>
              <input type="text" className="form-control" name="name" id="inputName" placeholder="Full Names" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" name="email"id="inputEmail" placeholder="Email" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputConfirm">Confirm Password</label>
              <input type="password" className="form-control" name="password2" id="inputConfirm" placeholder="Confirm Password"required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Location</label>
              <input type="text" className="form-control" name="location" id="inputCity" placeholder="Your Location" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Category</label>
              <select name="category" id="inputCategory" className="form-control">
                <option>Choose Category</option>
                <option>Crafts</option>
                <option>Drawings</option>
                <option>Paintings</option>
                <option>Sculpures</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              
              
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
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


