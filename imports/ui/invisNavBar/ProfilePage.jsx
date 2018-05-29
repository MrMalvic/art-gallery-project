import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Upload } from '/imports/ui/invisNavBar/Upload.jsx';
import Posts from '../../api/blog/collections.js';
import {About} from '/imports/ui/About.jsx';
import { Footer } from '/imports/ui/Footer.jsx';



export class ProfilePage extends Component {

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
          <div className="row">
            <div className="col-md-4 container2">
            
            <div className="centered"></div>
            </div>
            <div className="col-md-4">
            
            </div>
            <div className="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/ac.jpeg"/></a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            
            </div>
            <div class="col-md-4">
           
            </div>
            <div class="col-md-4">
            <a className="" href="#"><img class="thumb thumbs" src="painting/af.jpg"/></a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}