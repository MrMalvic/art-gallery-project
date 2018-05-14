import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';
import { Footer } from '/imports/ui/Footer.jsx'



export class Buy1 extends Component {
  render() {
    return (
      <div>
      <Navbar2 />
        <div className="container">
          <div className="row">
            <div class="col-md-8 App details">
              <img className="buy-art details" src="painting/ab.jpg" />
            </div>
            <div className="vr">
            </div>
            <div className="col-md-3 contact-info">
            <p>By <a href="#">Malumbo Mutale</a></p>
            <a href="#"><i class="fas fa-user-plus"> Follow</i></a><hr/>
            <h5>Contact the artist</h5>
              <form>
                <div class="form-group contact-form">
                  <input type="text" placeholder="Full name" className="contact-artist"/>
                  <input type="email" placeholder="email" className="contact-artist"/>
                  <textarea placeholder="messege here..." className="contact-artist messege-artist"/>
                  <button type="submit" className="contact-submit">Contact seller</button>
                </div>
              </form>
            </div>
            <div className="col-md-12">
            <h1 className="App">About painting</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis qui quae at vel consequuntur ex impedit, aliquid, modi omnis quaerat doloremque, labore eos quam nulla aspernatur suscipit dolor dolorem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis qui quae at vel consequuntur ex impedit, aliquid, modi omnis quaerat doloremque, labore eos quam nulla aspernatur suscipit dolor dolorem.</p><br/>
              <h1 className="App">More from this artist</h1>
              <div class="row">
                  <div class="col-md-4">
                    <img className="more-work" src="painting/ac.jpeg"/>
                  </div>
                  <div class="col-md-4">
                    <img className="more-work" src="painting/am.jpeg"/>
                  </div>
                  <div class="col-md-4">
                    <img className="more-work" src="painting/aa.jpg"/>
                  </div>
                </div>
              </div>
            {/* <div className="col-md-3">
              <div className="thumbnail">
                <center> <img className="size" src="images/blac.jpg" /></center>
                <center><h5>Claude Monet</h5></center>

                <center><h5>Claude Monet was a famous French painter whose work
                      gave a name to the art movement Impressionism, which was
                       concerned with capturing light and natural forms.Synopsis
       Claude Monet was born on November 14, 1840, in Paris, France. He enrolled
       in the Academie Suisse. After an art exhibition in 1874, a critic insultingly
        dubbed Monet's painting style "Impression," since it was more concerned with
        form and light than realism, and the term stuck. Monet struggled with
  depression, poverty and illness throughout his life. He died in 1926.</h5></center>
                <br></br>
                <h1>PROJECTS HE HAS DONE</h1>
                <div class="row">
                  <div class="col-md-4">
                    <img className="size" src="painting/ac.jpeg" width="200%" height="85%" />
                  </div>
                  <div class="col-md-4">
                    <img className="size" src="painting/am.jpeg" width="200%" height="85%" />
                  </div>

                </div>
                <h1>EMAIL CONTACT ONLY</h1>
                <a rel="stylesheet" className="btn btn-primary" href="https://mailto:mafwolikelenge@gmail.com">Email:</a>
              </div>
            </div> */}
          </div>
        </div> 
        <Footer/>
      </div>



    )
  }
}
