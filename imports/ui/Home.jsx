import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import { SearchCarousel } from '/imports/ui/search.jsx';
// import { ProfilePage }  from '/imports/ui/invisNavBar/ProfilePage.jsx';
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
        <Navbar2 />
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
