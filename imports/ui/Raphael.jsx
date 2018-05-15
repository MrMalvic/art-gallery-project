import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';




    export class Raphael extends Component{
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
              <img src="images/at.jpg" />
              <h4>Raphael Sanzio</h4>
            </div>
              </div>

              <div className="col-md-6">
              <div className="thumbnail">
                <h4>A leading figure of Italian High Renaissance classicism, Raphael is best known for his "Madonnas," including the Sistine Madonna, and for his large figure compositions in the Palace of the Vatican in Rome.<br/>
Synopsis

Raphael was born on April 6, 1483, in Urbino, Italy. He became Perugino's apprentice in 1504. Living in Florence from 1504 to 1507, he began painting a series of "Madonnas." In Rome from 1509 to 1511, he painted the Stanza della Segnatura ("Room of the Signatura") frescoes located in the Palace of the Vatican. He later painted another fresco cycle for the Vatican, in the Stanza d'Eliodoro ("Room of Heliodorus"). In 1514, Pope Julius II hired Raphael as his chief architect. Around the same time, he completed his last work in his series of the "Madonnas," an oil painting called the Sistine Madonna. Raphael died in Rome on April 6, 1520.</h4>
              </div>
              </div>
            </div>
            </div>
          </div>
          )
        }
      }
