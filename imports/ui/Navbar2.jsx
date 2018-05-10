import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';




export class Navbar2 extends Component{
  goToPainting = () => {
    route.go('/painting') 
}
 
  render(){
    return( 
      <nav className="navbar navbar-expand-lg navbar-light navbar-two">
    <a class="navbar-brand" href=""><img src="logo2.png" width="100px" heigDropdownht="80px" className="d-inline-block align-top" alt=""/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/painting">Painting</a>
            <a class="dropdown-item" href="/sculpture">Sculpture</a>
            <a class="dropdown-item" href="/drawing">Drawing</a>
            <a class="dropdown-item" href="/craft">Craft</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Discovery
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Popular Artists</a>
            <a class="dropdown-item" href="#">New Artists</a>
            <a class="dropdown-item" href="#">Other Artists</a>
          </div>
        </li>
        </ul>
    </div>
  </nav>
    )
  }

}
