import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import route from '/imports/routing/router.js';




export class Craft extends Component {

  goToCraft = () => {
    route.go('/craft');
  }

  goToPops = () => {
    route.go('/Pops');
  }

  linkToBuy = (e) =>{
    e.preventDefault();
    route.go('/Buy1')
  }
  
  render() {
    return (

      <div className="App">
        <Navbar2 />
        <h1>CRAFTS</h1><hr/>
        <div className="row">
        <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/awes.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/cool.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/eat.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/great.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/impo.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="craft/inde.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};
