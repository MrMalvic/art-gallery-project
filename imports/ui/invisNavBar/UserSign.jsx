import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export class UserSign extends Component {
  // goToHome = () => {
  //     route.go('/') // pathDef, params, queryParams

  // }
  render() {

    return (
      <div>
        <NavBar1 /> <br /><br />
        <h1>User Registration</h1> <br /><br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName2">Full Names</label>
              <input type="text" className="form-control" id="inputName2" placeholder="Full Names" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail2">Email</label>
              <input type="email" className="form-control" id="inputEmail2" placeholder="Email" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword2">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputConfirm2">Confirm Password</label>
              <input type="password" className="form-control" id="inputConfirm2" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Location</label>
              <input type="text" className="form-control" id="inputCity" />
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
    );
  }

}