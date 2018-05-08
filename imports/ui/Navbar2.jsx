import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';




export class Navbar2 extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-purple">
    <a class="navbar-brand" href="">Art gallery</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Artwork</a>
            <a class="dropdown-item" href="#">Decorative</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Artists</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Discovery
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Artwork</a>
            <a class="dropdown-item" href="#">Decorative</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Artists</a>
          </div>
        </li>
        </ul>
    </div>
  </nav>
    )
  }

}
