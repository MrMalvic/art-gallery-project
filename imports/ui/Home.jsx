import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import { SearchCarousel } from '/imports/ui/search.jsx';
import { Pops } from  '/imports/ui/Pops.jsx';
import { Newartist }  from '/imports/ui/Newartist.jsx'




class Home extends Component {
  render() {
    return (
      <div>
      <SearchCarousel/>
      <Navbar2/> 
      <Cards/>
      <Featured/>
      <Pops/>
      <Newartist/>
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
