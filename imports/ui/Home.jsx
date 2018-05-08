import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Carousel } from './carousel.jsx';
import { Cards } from './Cards.jsx';
import {Navbar2} from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import NavBar1 from './invisNavBar/NavBar1.jsx';


//In a component, you can only have one default
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: 'Default Value',
      title: 'Default Title'
    }
  }

  // goContacts = () => {
  //   route.go('/contact')
  // }

  // goAbout = () => {
  //   route.go('/about')
  // }




  render() {
    return (
      <div className="App">
      <NavBar1/>
      <Carousel/>
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
className="App"
  //   route.go('/contact')