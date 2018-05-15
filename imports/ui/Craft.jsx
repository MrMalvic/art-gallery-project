import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';




export class Craft extends Component {

  goToCraft = () => {
    route.go('/craft');
  }

  goToPops = () => {
    route.go('/Pops');
  }

  render() {
    return (

      <div className="App">
        <Navbar2 />
        <h1>CRAFTS</h1>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/let.jpeg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/low1"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/awes.jpeg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/low2"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/super.jpeg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/low3"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/less.jpeg" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/low4"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/inde.jpeg" width="20%" height="80%" alt="Card image cap"></img>
            <br>
            </br>
            <a className="btn btn-success" href="/low5"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/toot.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low6"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/great.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low7"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/impo.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low8"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/more.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low9"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/cool.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low10"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/sir.jpeg" alt="Card image cap"></img>
            <br></br>
            <a className="btn btn-success" href="/low11"><h5>Buy</h5></a>
          </div>
          <div className="col-md-4">
            <img className="card-img-top thumb" src="craft/eat.jpeg" alt="Card image cap"></img>
            <a className="btn btn-success" href="/clow12"><h5>Buy</h5></a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};
