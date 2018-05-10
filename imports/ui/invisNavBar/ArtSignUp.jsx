import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export default class ArtSignUp extends Component {
  goToHome = () => {
      route.go('/') // pathDef, params, queryParams

  }

  
  render() {

    return (
      <div className="App">
        <div className="mask3">
          <img src="img1.jpg" className="artist-signup-img" />
        </div>
        <NavBar1 />
        <div>
        <form onSubmit={this.handleSubmit}  className="artist-signup-form container-fluid">
        <h1 className="artist-reg">Artist Registration</h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputName">Full Names</label>
              <input type="text" className="form-control" id="inputName" placeholder="Full Names" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputConfirm">Confirm Password</label>
              <input type="password" className="form-control" id="inputConfirm" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Location</label>
              <input type="text" className="form-control" id="inputCity" placeholder="Your Location" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Category</label>
              <select id="inputCategory" className="form-control">
                <option selected>Choose Category</option>
                <option>Crafts</option>
                <option>Drawings</option>
                <option>Paintings</option>
                <option>Sculpures</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              
              <label className="form-check-label" for="gridCheck">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
                I agree to Elite's Ts&Cs
      </label>
            </div>
            </div>
          
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
        </div>
        {/* <form onSubmit = {this.handleSubmit}>
            <input type="text" placeholder="Full Names"/> <br/>
            <input type="number" placeholder="age"/><br />
            <input type="text" placeholder="Email"/><br />
            <
            <input type="text"placeholder="Art Category" /> <br />
            <input type="text" placeholder="Location"/><br /> 
            <input type="password" placeholder="Password"/><br />
            <input type="password" placeholder="Confirm Password"/><br /> 
            
            <button type="submit">Sign Up</button>            
        </form>  */}
      </div>
    );
  }

}


