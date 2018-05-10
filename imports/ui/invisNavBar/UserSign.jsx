import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export default class UserSign extends Component {
    // goToHome = () => {
    //     route.go('/') // pathDef, params, queryParams
    
    // }
  render() {
    
    return (
      <div className="App"> 
      <NavBar1/> <br /><br />
        <h1>User Registration</h1> <br /><br />
    <form onSubmit = {this.handleSubmit}>
        <div className="form-row">
        <div className="form-group col-md-6">
        <label for="inputName2">Full Names</label>
        <input type="text" class="form-control" id="inputName2" placeholder="Full Names"/>
        </div>
        <div className="form-group col-md-6">
        <label for="inputEmail2">Email</label>
        <input type="email" class="form-control" id="inputEmail2" placeholder="Email"/>
        </div>
        <div className="form-group col-md-6">
        <label for="inputPassword2">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <div className="form-group col-md-6">
        <label for="inputConfirm2">Confirm Password</label>
        <input type="password" class="form-control" id="inputConfirm2" placeholder="Confirm Password"/>
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
        <label for="inputCity">Location</label>
        <input type="text" class="form-control" id="inputCity"/>
        </div>
        </div>
        <div class="form-group">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
        <label class="form-check-label" for="gridCheck">
            I agree to Elite's Ts&Cs
        </label>
        </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>           
    </form> 
      </div>
    );
  }
  
}