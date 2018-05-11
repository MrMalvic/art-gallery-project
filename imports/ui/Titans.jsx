import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Titans extends Component{
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
            <img className="size" src="images/ooo.jpg"/>
            <h5>Titian</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <h5>


Titian was a leading artist of the Italian Renaissance who painted works for Pope Paul III, King Philip II of Spain and Holy Roman Emperor Charles V.<br/>
Synopsis

Born sometime between 1488 and 1490, Titian became an artist's apprentice in Venice as a teenager. He worked with Sebastiano Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of "Assumption of the Virgin." He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor. Pope Paul III also hired Titian to paint portraits of himself and his grandsons. Titian died on August 27, 1576.</h5>
        </div>
        </div>
  </div>
</div>
)
}
}
