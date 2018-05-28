import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'
import Posts from '/imports/api/blog/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import { userInfo } from 'os';



export class Buy1 extends Component {
constructor(){
  super();
  this.state = {
    name:'',
    category:'',
    price:'',
    phone:"",
    location:''
  }
}

  componentWillMount(){
    this.setState({
    name:'',
    category:'',
    price:'',
    phone:"",
    location:''
    })
    console.log(this.state);
  }



  render() {
    return (
      <div >
        <Navbar2 />
        <div className="container">
          <div className="row">
            <div className="col-md-9 App details">
              <img className="buy-art details" src="http://via.placeholder.com/1024x720" />
            </div>
            
            <div className="col-md-3 contact-info">
              <p>By <a href="/scul1"></a></p>
              <a href="#"><i className="fas fa-user-plus"> Follow</i></a><hr/>
              <p><strong>Name of piece: </strong>{this.state.name}</p>
              <p><strong>Category: </strong>{this.state.category}</p>
              <p><strong>Price: </strong>{this.state.price}</p>
              <p><strong>Phone number: </strong>{this.state.phone}</p>
              <p><strong>Location: </strong>{this.state.location} </p> <hr/>
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
        <Footer />
      </div>




    )
  }
}

export default withTracker(() => {
  Meteor.subscribe(Posts);
  return {
    posts: Posts.find({}).fetch(),
  };
})(Buy1);
