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

<<<<<<< HEAD

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



=======
  toBuy = () =>{
    route.go('/Buy1')
  }
>>>>>>> a50b15c84091dbe59a351bc58a23a81315008465

  getAllPosts=()=>{
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
<<<<<<< HEAD
        <div key = {post._id} className="card border-primary">
        <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><strong>Piece Name:</strong> {post.postName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Catergory:</strong> {post.postCategory}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {posts.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {posts.description}</h6>
          </div>
          <div className="card-footer">
          </div>
          <div className="text-center">
            <button className="btn btn-dark btn-block adding" data-toggle="modal" data-target="#exampleModalCenter">Get Piece</button>
          </div>
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body poster">
                <h4>Contact Artist:</h4><br/>
                 <h5>Artist Name: {post.owner}</h5>
                 <h5>Number: {post.number}</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
=======
        <div key={post._id} className=" hover-over-imgs">
          <img className="thumbnail" src={link} />
          <div className=" on-hover-details">
            <a className="link-to-buy" href="/Buy1"></a>
            {/* <a className="hover-item-one">buy</a> */}
            <a className="artist-links hover-item-two" title="artist" href="/ProfilePage"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
          </div>
        </div>  
>>>>>>> a50b15c84091dbe59a351bc58a23a81315008465
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
<<<<<<< HEAD
        <div className="text-center">
          <br />
          <br />
          <br />
          <br />
          <img src="public/load.png" className="App-logo" alt="logo" />
          <h3 className="">Please wait</h3>
        </div>
=======
        <div>
        
        <div className="loader"></div>
      </div>
>>>>>>> a50b15c84091dbe59a351bc58a23a81315008465
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





