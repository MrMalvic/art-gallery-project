import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export default class ArtSignUp extends Component {
    // goToHome = () => {
    //     route.go('/') // pathDef, params, queryParams
    
    // }
  render() {
    
    return (
      <div className="App">
      <NavBar1/>
      <br /><br />
        <h1>Artist Registration</h1>< br /><br />
        <form onSubmit = {this.handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">Full Names</label>
      <input type="text" className="form-control" id="inputName" placeholder="Full Names"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail">Email</label>
      <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
      </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword">Password</label>
      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputConfirm">Confirm Password</label>
      <input type="password" className="form-control" id="inputConfirm" placeholder="Confirm Password"/>
    </div>
  </div>
    <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Location</label>
      <input type="text" className="form-control" id="inputCity"placeholder="Your Location"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputState">Category</label>
      <select id="inputCategory" className="form-control">
        <option defaultValue>Choose Category</option>
                <option>Crafts</option>
                <option>Drawings</option>
                <option>Paintings</option>
                <option>Sculpures</option>
      </select>
    </div>
    </div>
    <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
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


