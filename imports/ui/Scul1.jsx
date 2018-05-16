import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';



export class Scul1 extends Component {
  render() {
    return (
      <div className="App">
        <Navbar2 />
        <img src="img1.jpg" alt="cover" className="cover-photo"/>
        <div className="container profile">
          <div className="App">
           <img className="img" src="images/blac.jpg" />
            <h5>Claude Monet</h5>
          </div>
          <h1>PROJECTS DONE BY THIS ARTIST:</h1>
          <div class="row">
            <div class="col-md-4 container2">
            <p>text</p>
            <a className="" href="#"><img class="thumb thumbs" src="painting/aa.jpg"/></a>
            <div class="centered"></div>
            </div>
            <div class="col-md-4">
            <a className="" href="/buy1"><img class="thumb thumbs" src="painting/ab.jpg"/></a>
            </div>
            <div class="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/ac.jpeg"/></a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/ad.jpg"/></a>
            </div>
            <div class="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/ae.jpg"/></a>
            </div>
            <div class="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/af.jpg"/></a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
            <a className="" href="#"> <img class="thumb thumbs" src="painting/ai.jpg"/></a>
            </div>
            <div class="col-md-4">
            <a className="" href="#"> <img class="thumb thumbs" src="painting/aj.jpg"/></a>
            </div>
            <div class="col-md-4">
            <a className="" href="#"> <img class="thumb thumbs" src="painting/ak.jpeg"/></a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}