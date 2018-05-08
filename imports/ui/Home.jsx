import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
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