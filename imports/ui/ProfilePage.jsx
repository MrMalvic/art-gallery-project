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



export class ProfilePage extends Component {
          
    goToUpload = () => {
        route.go('/upload'); 
    }

    goToAbout = () => {
        route.go('/about');
    }
  getAllPosts=()=>{
    const posts = this.props.posts;
    return posts.map((post)=>{
      return(
        <div key= {post._id}>
        <h2>We are getting there</h2>
        </div>

        )
    }

    )
    
}
render(){

  return(
    <div>
    {this.getAllPosts()}

    </div>

    )

}

}



export default withTracker(() => {
  Meteor.subscribe('posts');
  return {
    posts: Posts.find().fetch(),
  }
})(ProfilePage);





