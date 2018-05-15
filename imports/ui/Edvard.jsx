import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';




 export  class Edvard extends Component{
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


        <div>
      <div className="row">


        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/edvard.jpg"/>
             <h4>Edvard Munch</h4>


        </div>
        </div>
        <div className="col-md-6">
        <div className="thumbnail">
          <h5>Norwegian painter Edvard Munch is widely known for his iconic pre-Expressionist painting "The Scream" ("The Cry").<br/>
Synopsis

Born in 1863 in Löten, Norway, famed painter Edvard Munch established a free-flowing, psychological-themed style all his own. His painting "The Scream" ("The Cry"; 1893), is one of the most recognizable works in the history of art. His later works proved to be less intense, but his earlier, darker paintings ensured his legacy. A testament to his importance, "The Scream" sold for more than $119 million in 2012—setting a new record.</h5>

        </div>
          </div>























        </div>
      </div>
    </div>

      )
    }
  }
