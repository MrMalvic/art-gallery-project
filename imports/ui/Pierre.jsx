import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Pierre extends Component{
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
            <img className="size" src="images/44.jpg"/>
            <h5>Pierre-August Renoir</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <p>A leading Impressionist painter, Pierre-Auguste Renoir was one of the most famous artists of the early twentieth century.<br/>
Synopsis

An innovative artist, Pierre-Auguste Renoir was born on February 25, 1841, in Limoges, France. He started out as an apprentice to a porcelain painter and studied drawing in his free time. After years as a struggling painter, Renoir helped launch an artistic movement called Impressionism in 1870s. He eventually became one of the most highly regarded artists of his time. He died in Cagnes-sur-Mer, France, in 1919.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      )
    }
  }
