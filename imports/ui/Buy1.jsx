import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'



export class Buy1 extends Component {

  goToSculpture = () => {
    route.go('/sculpture');
  }


  render() {
    return (
      <div>
        <Navbar2 />
        <div className="container">
          <div className="row">
            <div className="col-md-8 App details">
              <img className="buy-art details" src="http://via.placeholder.com/1024x720" />
            </div>
            <div className="vr">
            </div>
            <div className="col-md-3 contact-info">
              <p>By <a href="/scul1">Artist</a></p>
              <a href="#"><i className="fas fa-user-plus"> Follow</i></a><hr />
              <h5>Contact the artist</h5>
              <form>
                <div class="form-group contact-form">
                  <input type="text" placeholder="Full name" className="contact-artist" />
                  <input type="email" placeholder="email" className="contact-artist" />
                  <textarea placeholder="messege here..." className="contact-artist messege-artist" />
                  <button type="submit" className="contact-submit">Contact seller</button>
                </div>
              </form>
            </div>
            <div className="col-md-12">
              <h1 className="App">About Artwork</h1>
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
