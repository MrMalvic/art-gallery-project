import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Carousel } from './carousel.jsx';
import { Cards } from './Cards.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';
import {About} from '/imports/ui/About.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import { Search } from '/imports/ui/search.jsx';
import NavBar1 from './imports/NavBar1.jsx';




class Home extends Component {
  render() {
    return (
      <div>
      <Carousel/>
      <Search/>
      <Navbar2/>
      <Cards/>
      <Featured/>
      <Footer/>

      </div>
    )
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  }
})(Home);

