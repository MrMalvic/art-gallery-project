import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'




export class About extends Component {

  render() {
    return (

      <div className="App">
        <Navbar2 />
        <div className="mask2">
          <img src="img3.jpg" className="about-page-img" />
        </div>
        <div className="about-page-text">
          <h1>About Our Elite Gallery Art</h1>
          <h4>
            Elite Gallery Art is the world’s leading
          <br></br> online elite art gallery which is formed by small group of people which has power in terms of programming, connecting people with art and artists they love.
            Gallery Art offers an<br></br>
            unparalleled selection of paintings, draence of buying and s
         wingselling art by making it easy, convenient and welcoming for both collectors and artists., sculpture and photography in a range of prices, and it provides artists from around the world with an expertly curated environment in which to exhibit and sell their work.
              Based in Lusaka, Elite Gallery Art is redefining the  <br></br>experience of buying and selling art by making it easy, convenient and welcoming for both collectors and artists.
              </h4>
        </div>
        <h1 className="meet-the-team">Meet Our Team</h1>

        <div className="container-fluid">
          <div className="row">

            <div className="col-md-6">
              <img className="img" src="http://via.placeholder.com/200x200" alt="Card image cap"/ >
              <h5>Malumbo Mutale</h5>
              <p>Senior Developer/Designer.</p>
            </div>

            <div className="col-md-6">
            <img className="img" src="http://via.placeholder.com/200x200" alt="Card image cap"></img>
              <h5>Andrew Khondowe</h5>
              <p>Front-End full Developer.</p>
            </div>

            <div className="col-md-6">
              <img className="img" src="http://via.placeholder.com/200x200" alt="Card image cap"></img>
              <h5>Mafwolisha Likelenge</h5>
              <p>Manager/Developer.</p>
            </div>

            <div className="col-md-6">
             <img className="img" src="Developers-code-programming.jpg" alt="Card image cap"></img>
              <h5>Charles Chanda</h5>
              <p>FullStack Developer.</p>
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    );
  }

}

