import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';





export class Drawing extends Component {

  goToDrawing = () => {
    route.go('/drawing');
  }

  goToPops = () => {
    route.go('/Pops');
  }


  render() {
    return (
      <div className="App">
        <Navbar2/>
        <h1>DRAWINGS</h1>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/3.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/2.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/5.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/6.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/7.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/8.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/14.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/10.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/11.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/1.jpg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/13.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="drawing/9.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <Footer/>
      </div>


    );
  }
};
