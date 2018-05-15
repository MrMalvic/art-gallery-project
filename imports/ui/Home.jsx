import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import { SearchCarousel } from '/imports/ui/search.jsx';
<<<<<<< HEAD
import { Pops } from  '/imports/ui/Pops.jsx';
import { Newartist }  from '/imports/ui/Newartist.jsx';
import { ProfilePage }  from '/imports/ui/ProfilePage.jsx';
=======



>>>>>>> 0beb3d07f09630ab33a98275c07455e601377e11





class Home extends Component {
  render() {
    return (
      <div>
      <SearchCarousel/>
      <Navbar2/>
      <Cards/>
      <Featured/>
      <Footer/>
<<<<<<< HEAD
      

=======
>>>>>>> 0beb3d07f09630ab33a98275c07455e601377e11
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  }
})(Home);
