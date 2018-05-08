import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Carousel } from './carousel.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';


class Home extends Component {

  render() {
    return (
      <div className="App">
      <Carousel/>
      <Navbar2/>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  }
})(Home);
