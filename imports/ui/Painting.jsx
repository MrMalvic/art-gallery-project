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
            <img className="card-img-top thumb" src="painting/ab.jpg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>

          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ah.jpeg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ac.jpeg"  alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ad.jpg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ae.jpg"  alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/af.jpg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ag.jpg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ai.jpg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/aj.jpg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/an.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/ap.jpg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="painting/aa.jpg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/buy1"><h5>Buy</h5></a>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

