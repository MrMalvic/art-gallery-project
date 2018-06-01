import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import { UserFiles } from '../api/upload/collections.js';
import { userInfo } from 'os';





export class Cards extends Component {

  getAllPosts=()=>{
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div className=" hover-over-imgs">
        <img className="thumbnail" src="a.jpg" />
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
  if (!this.props.isDataReady) {
    return (
      <div className="App container-fluid ">
        <div className="row">
        {this.getAllPosts()}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
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
})(Cards);


  