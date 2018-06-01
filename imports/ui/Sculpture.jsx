import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import { UserFiles } from '../api/upload/collections.js';
import { userInfo } from 'os';
import { O_SYMLINK } from 'constants';
import Posts from '../api/blog/collections.js';





class Sculpture extends Component {


  getAllPosts = () => {
    const posts = this.props.posts;
    return posts.map((post) => {
      const trial = post.imageId;
      console.log(trial);
      const link = UserFiles.findOne({ _id: trial }).link();
      if (post.category === "Sculptures") {
        $(document).ready(()=>{
          $('#nothing').hide()
        })
        return (
          <div key={post._id} className=" hover-over-imgs">
            <img className="thumbnail" src={link} />
            <div className=" on-hover-details" href="/Buy1" onClick={this.linkToBuy} >
              <a className="artist-links hover-item-two" title="artist" href="/scul1"><img src="a.jpg" className="small-img pad2" alt="artist" />Artist</a>
            </div>
          </div>
        )
      }
      else{
        $(document).ready(()=>{
          $('#nothing').show()
        })
        

      }
    }
    )
  }

  render() {
    if (this.props.isDataReady) {
      return (
        <div className="App">
          <Navbar2 />
          <h1>Sculptures</h1><hr />
          <div id="nothing">
          <img src="sadface.png"  alt="sorry" />
            <h1>there are no sculptures here,sorry</h1>
          </div>
          <div className="row">
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

export default withTracker(() => {
  Meteor.subscribe('posts');
  let isDataReady = Meteor.subscribe('files.all');
  return {
    posts: Posts.find().fetch(),
    files: UserFiles.find({}, { sort: { name: 1 } }).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Sculpture);
