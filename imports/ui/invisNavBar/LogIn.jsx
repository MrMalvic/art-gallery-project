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
      <div className="App">
        <div className="mask3">
        <img src="img5.jpg" className="artist-signup-img"/>
        </div>
        <NavBar1 />
        <br /><br />
         <br /><br />
        <div className="Container">
         <div className="row justify-content-center">
          <form onSubmit={this.handleSubmit} className="artist-signup-form container-fluid">
          <h1 className="artist-reg">Welcome back</h1>
            <div className="login">
              {/* <label htmlFor="Email">Email</label><br/> */}
              <input type="text" className="form-control2" id="Email" placeholder="Email" />
            </div>
            <div className="login">
              {/* <label htmlFor="inputPassword">Password</label><br/> */}
              <input type="password" className="form-control2" id="inputPassword" placeholder="Password" />
            </div><br/>
            <button type="submit" className="btn btn-primary">LogIn</button>
          </form>
        </div>
        </div>
      </div>
    );
  }

}