import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
// import {Navbar2} from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import { SearchCarousel } from '/imports/ui/search.jsx';
import { Pops } from  '/imports/ui/Pops.jsx';
import { Newartist }  from '/imports/ui/Newartist.jsx'
import { Paul } from '/imports/ui/Paul.jsx';
import { Edvard } from '/imports/ui/Edvard.jsx';
import { Vincent } from '/imports/ui/Vincent.jsx';
import { Raphael } from '/imports/ui/Raphael.jsx';
import { Pierre } from '/imports/ui/Pierre.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';
import { Claude } from '/imports/ui/Claude.jsx';
import { Diego } from '/imports/ui/Diego.jsx';
import {Titans} from '/imports/ui/Titans.jsx';







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
      <Paul />
      <Edvard/>
      <Paul/>
      <Vincent/>
      <Pierre/>
      <Claude/>
      <Diego/>
      <Titans/>
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
