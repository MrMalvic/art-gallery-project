import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class AboutUs extends Component {

  goHome = () => {
    route.go('/')
  }

  goContacts = () => {
    route.go('/contact')
  }

  render() {
    return(
      <div>
        <h1>This is all about Thanos</h1>
        <h3>He's just a lonely guy that couldn't find his hat [sad emoji]</h3>
        <button onClick = {this.goHome}>Back Home</button>
        <button onClick = {this.goContacts}>Contact Us</button> 
        <form>
          <h1>Login</h1><br />
          <label>
            Email or Username:
            <input type="text" />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
