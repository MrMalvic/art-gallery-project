import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';





export class Cards extends Component {

  render() {
    return (
      <div className="App container-fluid ">
        <div className="row">
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/aa.jpg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ab.jpg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ac.jpeg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ad.jpg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ae.jpg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/af.jpg" />
            <div className=" on-hover-details">
              <a className="link-to-buy" href="/Buy1"></a>
              <a onClick={this.liker} ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
        </div>
      </div>





    )
  }
}
