import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import Posts from '/imports/api/blog/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import { userInfo } from 'os';
import { UserFiles } from '../api/upload/collections.js';



class Buy1 extends Component {

  

  getAllPosts=()=>{
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key={post._id} className="container">
        <div className="row">
          <div className="col-md-9 App details">
            <img className="buy-art details" src={link}/>
          </div>

          <div className="col-md-3 contact-info">
            <p>By <a href="/scul1"></a></p>
            <a href="#"><i className="fas fa-user-plus"> Follow</i></a><hr />
            <p><strong>Name of piece: </strong>{post.pieceName}</p>
            <p><strong>Category: </strong>{post.category}</p>
            <p><strong>Price: </strong> K{post.price}</p>
            <p><strong>Phone number: </strong>{post.phoneNumber}</p>
            <p><strong>Location: </strong>{post.location}</p>
            <p><strong>Description: </strong>{post.description}</p>
          </div>
          </div>
          <hr />
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
            {this.getAllPosts()}
        <Footer />
      </div>
    )
  }
  else {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
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
})(Buy1);
