import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from './NavBar1.jsx';



export default class Login extends Component {
  // goToHome = () => {
  //     route.go('/') // pathDef, params, queryParams

  // }
  render() {

    return (
      <div>
        <NavBar1 />
        <br /><br />
        <h1>Log In</h1> <br /><br />
        <div className="Container">
         <div className="row justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="Email">Email</label>
              <input type="password" className="form-control" id="Email" placeholder="Type in Email" />
            </div>
            <div>
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">LogIn</button>
          </form>
        </div>
        </div>
      </div>
    );
  }

}