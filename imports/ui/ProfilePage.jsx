import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { Cards } from './Cards.jsx';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Featured } from '/imports/ui/Featured.jsx';
import { UserFiles } from '../api/upload/collections.js';
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
   goToProfile = () => {

    route.go('/profile')

  }

  toBuy = () =>{
    route.go('/Buy1')
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
          <img src="" alt="cover" className="cover-photo"/>
          <div className="container profile">
          <div className="App">
           <img className="img" src=" " />
            <h5></h5>
          </div>
          <h1 style={{ textAlign: "center" }}>PROJECTS DONE BY THIS ARTIST:</h1>
          <br />
          <button onClick = {this.goToUpload}>Upload Piece</button>
          <button onClick = {this.goToHome}>Edit Profile</button>
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
  Meteor.subscribe('posts');
  let isDataReady = Meteor.subscribe('files.all');
  return{
    posts: Posts.find().fetch(),
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





