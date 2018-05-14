import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import $ from 'jquery';




export class Navbar2 extends Component{
  goToPainting = () => {
    route.go('/painting')
}

goToPops = () => {
  route.go('/pops')
}
  render(){

    return(
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
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    )
  }

}
