import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';





export class Cards extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/aa.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ab.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ac.jpeg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>

          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ad.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/ae.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>
          <div className=" hover-over-imgs">
            <img className="thumbnail" src="painting/af.jpg" />
            <a className="on-hover-details" href="/Buy1"></a>
          </div>
        </div>
      </div>





    )
  }
}
