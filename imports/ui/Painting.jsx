import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';




export class Painting extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  goToPainting = () => {
    route.go('/painting');
  }

  render() {
    return (

      <div className="App">
        <Navbar2 />
        <h1>PAINTINGS</h1>
        <div className="row">
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
            
          </div>
          <div className="col-md-4">
          <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

