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
    const users = this.props.users;
    
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <>
        <div className="row" key={post._id}>
          <div className="col-md-9  details">
            <img className="buy-art details" src={link}/>
          </div>
          <div className="col-md-3 contact-info">
            <p>By <a href="/scul1"></a></p>
            <p><strong>Name of piece: </strong>{post.pieceName}</p>
            <p><strong>Category: </strong>{post.category}</p>
            <p><strong>Price: </strong> K{post.price}</p>
            <p><strong>Phone number: </strong>{post.phoneNumber}</p>
            <p><strong>Location: </strong>{post.location}</p>
            <p><strong>Description: </strong>{post.description}</p>
          </div>
          
          </div>
          <hr/>
         </>
      )
    }
  )
}

render() {
  if (this.props.isDataReady) {
    return (
      <div>
        <Navbar2 />
        <div className="container-fluid">
            {this.getAllPosts()}
            </div>
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
})(Buy1);
