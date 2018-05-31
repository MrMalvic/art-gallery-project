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
        <div key = {post._id} className="card border-primary">
        <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><strong>Piece Name:</strong> {post.pieceName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Catergory:</strong> {post.category}</h6>
            <h6 className="card-subtitle mb-2"><strong>location:</strong> {post.location}</h6>
            <h6 className="card-subtitle mb-2"><strong>phonenumber:</strong> {post.phoneNumber}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {post.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {post.description}</h6>
          </div>
          <div className="card-footer">
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-block adding" onClick={this.toBuy}>Get Item</button>
          </div>
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            {/* <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body poster">
                <h4>Contact Artist:</h4><br/>
                 <h5>Artist Name: {post.owner}</h5>
                 <h5>Email: {post.email}</h5>
                 <h5>Number: {post.number}</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div> */}
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
          <div className="container">
            <div className="card-columns">
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





