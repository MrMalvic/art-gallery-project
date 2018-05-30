import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
import { Navbar2a } from '/imports/ui/Navbar2a.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import { SearchCarousel } from '/imports/ui/search.jsx';
import { Pops } from '/imports/ui/Pops.jsx';
import { Newartist } from '/imports/ui/Newartist.jsx';
  

class Home extends Component {
  loggedIn = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  loggedOut = () => {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  componentDidMount() {
    if (Meteor.userId()) {
      this.loggedIn()
    }
    else {
      this.loggedOut()
    }
  }
  
  render() {
    return (
      <div>
        <div id="snackbar2">You're logged out.</div>
        <div id="snackbar">You're logged in.</div>
        <SearchCarousel />
        <Navbar2a />
        <h1 className="App pad" id="destination" >Welcome to elite arts</h1>
        <p className="App pad">Elite Arts is one the fastest rising arts Company in Home Lusaka Space of Zambia. Elite Arts is whole heartedly devoted to provide most stylish, luxurious and affordable furnishing with the team of adapt and skilled arts experts. We do craft,sculpture,drawing and painting to get you the perfection and thus satisfaction.

Elite Arts started its operations in 29th February 2018, supplying hardwood sculptures to overseas market with the team of dedicated staff and production team.

A high quality and perfectly finished elite arts makes your world beautiful.

Developing new innovations while keeping cost effective with utmost customer satisfaction is our aim.

Why with Elite Arts
 -Innovative Designs
 -Fast Delivery with buyer friendly prices
 -No compromise with the quality..</p>
        <Cards />
        <Featured />
        <Footer />
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('posts');
  return {
    posts: Posts.find().fetch(),
  }
})(Home);
