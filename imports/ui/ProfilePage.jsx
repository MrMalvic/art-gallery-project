import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import Profiles from '../api/profile/collections.js';
import { Cards } from './Cards.jsx';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { UserFiles } from '../api/upload/collections.js';
import { Footer } from '/imports/ui/Footer.jsx';
import { SearchCarousel } from '/imports/ui/search.jsx';
import {ProfilePic} from '/imports/ui/ProfilePic.jsx';
import { Newartist } from '/imports/ui/Newartist.jsx';



export class ProfilePage extends Component {
          
    goToUpload = () => {
        route.go('/upload'); 
    }

    goToAbout = () => {
        route.go('/about');
    }
   goToUpdate = () => {

    route.go('/Update')

  }
  toBuy = () =>{
    route.go('/Buy1')
  }



 getAllProfiles=()=>{
    const profiles = this.props.profiles;
    return profiles.map((profile) => {
      const trial = profile.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key = {profile._id} className="container profile">
        <img className="img" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="ProfilePage"/>
        </div>
      
    );
    }
      )
    }



  getAllPosts=()=>{
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key={post._id} className=" hover-over-imgs">
          <img className="thumbnail" src={link} />
          <div className=" on-hover-details">
            <a className="link-to-buy" href="/Buy1"></a>
            {/* <a className="hover-item-one">buy</a> */}
            <a className="artist-links hover-item-two" title="artist" href="/ProfilePage"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
          </div>
        </div>  
      )
    }
  )
}
  render() {
    if (this.props.isDataReady) {
      return (
        <div>
         
          <Navbar2 />
          <img src="" alt="PROFILE" className="cover-photo" />
          <div className="container profile">
          {this.getAllProfiles()}
          <h1 style={{ textAlign: "center" }}>PROJECTS DONE BY THIS ARTIST:</h1>
          <br />
          <button onClick = {this.goToUpload}>Upload Piece</button>
          <button onClick = {this.goToUpdate}>Edit Profile</button>
          </div>
          <p className="h1" style={{ textAlign: "center" }}></p><br />
          <h4 className=""> </h4>
          <br />
          <br />
          <div className="App container-fluid ">
          <div className="row">
            {this.getAllPosts()}
          </div>
        </div>
          <br /><br />
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div>
        
        <div className="loader"></div>
      </div>
      )
    }
  }
}

export default withTracker(() =>{
  Meteor.subscribe('files.all');
  Meteor.subscribe('posts');
  Meteor.subscribe('profiles');
  let isDataReady = Meteor.subscribe('files.all');
  return{
    posts: Posts.find().fetch(),
    profiles: Profiles.find().fetch(),    
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(ProfilePage);




// export default withTracker(() => {
//   Meteor.subscribe('posts');
//   return {
//     posts: Posts.find().fetch(),
//   }
// })(ProfilePage);





