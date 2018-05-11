import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Vincent extends Component{
  render(){
    return(
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light navbar-two">
      <a className="navbar-brand" href=""><img src="logo2.png" width="100px" heigDropdownht="80px" className="d-inline-block align-top" alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/painting">Painting</a>
              <a className="dropdown-item" href="/sculpture">Sculpture</a>
              <a className="dropdown-item" href="/drawing">Drawing</a>
              <a className="dropdown-item" href="/craft">Craft</a>

            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Discovery
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/Pops">Popular Artists</a>
              <a className="dropdown-item" href="#">New Artists</a>
              <a className="dropdown-item" href="#">Other Artists</a>
            </div>
          </li>
          </ul>
      </div>
    </nav>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/00.jpg"/>
            <h5>Vincent Van Gogh</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <h5>Vincent van Gogh is considered the greatest Dutch painter after Rembrandt, although he remained poor and virtually unknown throughout his life.<br/>
Who Was Vincent Van Gogh?

Vincent Willem van Gogh (March 30, 1853 to July 29, 1890) was a post-impressionist painter whose work, notable for its beauty, emotion and color, highly influenced 20th-century art. He struggled with mental illness, and remained poor and virtually unknown throughout his life. Van Gogh died in France at age 37 from a self-inflicted gunshot wound.</h5>
        </div>
      </div>
    </div>
  </div>
)
}
}
