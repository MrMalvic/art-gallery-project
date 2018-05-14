import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import $ from 'jquery';




export class Navbar2 extends Component{

  componentDidMount(){
        (function ($) {
          $(document).ready(function(){
            
          // hide .navbar first
          $("#hidden-nav").hide();
          
          // fade in .navbar
          $(function () {
            $(window).scroll(function () {
                    // set distance user needs to scroll before we fadeIn navbar
              if ($(this).scrollTop() > 850) {
                $('#hidden-nav').slideDown();
              } else if ($(this).scrollTop() < 870){
                $('#hidden-nav').slideUp();
              }
            });
        
          
          });
        
        });
          }(jQuery));
      }

  render(){
    return(
     
      <nav className="navbar navbar-expand-lg navbar-light navbar-two" id="hidden-nav">
    <a className="navbar-brand" href=""><img src="logo2.png" className="d-inline-block align-top" alt=""/></a>
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
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">painting</a>
            <a className="dropdown-item" href="#">Sculpture</a>
            <a className="dropdown-item" href="#">Drawing</a>
            <a className="dropdown-item" href="#">Craft</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Discovery
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Popular Artists</a>
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
