import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import Posts from '/imports/api/blog/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import { userInfo } from 'os';



class Buy1 extends Component {

  getAllItems = () => {
    const posts = this.props.posts;
    return posts.map((post) => (
        <div key={posts._id} className="container">
          <div className="row">
            <div className="col-md-9 App details">
              <img className="buy-art details" src="http://via.placeholder.com/1024x720" />
            </div>

            <div className="col-md-3 contact-info">
              <p>By <a href="/scul1"></a></p>
              <a href="#"><i className="fas fa-user-plus"> Follow</i></a><hr />
              <p><strong>Name of piece: </strong>{posts.name}</p>
              <p><strong>Category: </strong></p>
              <p><strong>Price: </strong> K</p>
              <p><strong>Phone number: </strong></p>
              <p><strong>Location: </strong> </p> <hr />
              <h5 className="App">Contact the artist</h5>
            </div>
            <div className="col-md-12">
              <h1 className="App">Description</h1>
              <p className="App">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis qui quae at vel consequuntur ex impedit, aliquid, modi omnis quaerat doloremque, labore eos quam nulla aspernatur suscipit dolor dolorem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis qui quae at vel consequuntur ex impedit, aliquid, modi omnis quaerat doloremque, labore eos quam nulla aspernatur suscipit dolor dolorem.</p><br />
              <h1 className="App">More from this artist</h1>
              <div className="row">
                <div className="col-md-4">
                  <img className="more-work" src="http://via.placeholder.com/350x350" />
                </div>
                <div className="col-md-4">
                  <img className="more-work" src="http://via.placeholder.com/350x350" />
                </div>
                <div className="col-md-4">
                  <img className="more-work" src="http://via.placeholder.com/350x350" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
    )
  }

  

  render() {
    console.log(this.props.posts)
    if (this.props.isDataReady) {
      return (
        <div >
          <Navbar2 />
             {this.getAllItems()}
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className="App">
           <h1>It aynt working bruh</h1>
           
        </div>
      )
    }
  }
}

export default withTracker(() => {
  let handle = Meteor.subscribe('posts')
  return {
    posts: Posts.find({}),
    isDataReady: handle.ready(),
  }
})(Buy1);
