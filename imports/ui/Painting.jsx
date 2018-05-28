import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import route from '/imports/routing/router.js';




export class Painting extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  goToPainting = () => {
    route.go('/painting');
  }

  linkToBuy = (e) =>{
    e.preventDefault();
    route.go('/Buy1')
  }

  render() {
    return (

      <div className="App">
        <Navbar2 />
        <h1>PAINTINGS</h1><hr/>
        <div className="row">
        <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/am.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/al.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ak.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ai.jpg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ah.jpeg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ag.jpg" />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a onClick={this.liker} ><i id="like" className="fas fa-heart fa-2x hover-item-one" title="i like this"></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
            
         
        </div>
        <Footer/>
      </div>
    );
  }
};

