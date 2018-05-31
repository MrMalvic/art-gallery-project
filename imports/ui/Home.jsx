import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
// import { Cards } from './Cards.jsx';
import { Navbar2a } from '/imports/ui/Navbar2a.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import { SearchCarousel } from '/imports/ui/search.jsx';
// import { ProfilePage }  from '/imports/ui/invisNavBar/ProfilePage.jsx';
import { Pops } from '/imports/ui/Pops.jsx';
import { Newartist } from '/imports/ui/Newartist.jsx';
import { UserFiles } from '../api/upload/collections.js';
import { userInfo } from 'os';



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

    const Id = Meteor.userId();
    console.log(Id)
  }

  getAllPosts = () => {
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({ _id: trial }).link();
      return (
        <div key={post._id} className=" hover-over-imgs">
          <img className="thumbnail" src={link} />
          <div className=" on-hover-details">
            <a className="link-to-buy" href="/Buy1"></a>
            <a ><i className="fas fa-heart fa-2x hover-item-one" ></i></a>
            <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
          </div>
        </div>
      )
    }
    )
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
        <div className="App container-fluid ">
          <div className="row">
            {this.getAllPosts()}
          </div>
        </div>
        <Featured />
        <Footer />

      </div>
    )
  }
}

export default withTracker(() =>{
  Meteor.subscribe('posts');
  let isDataReady = Meteor.subscribe('files.all');
  return{
    posts: Posts.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
  })(Home);
  