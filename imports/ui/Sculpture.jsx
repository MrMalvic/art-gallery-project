import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';




export class Sculpture extends Component {

  goToSculpture = () => {
    route.go('/sculpture');
  }
  goToPops = () => {
    route.go('/Pops');
  }


  render() {
    return (

      <div className="App">
        <Navbar2 />
        <h1>SCULPTURES</h1>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af2.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af3.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af4.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af5.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af6.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/ix.jpeg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af8.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af12.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="sculpture/Af13.jpeg" alt="Card image cap"></img>
            <div className="card-body">
              <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};
