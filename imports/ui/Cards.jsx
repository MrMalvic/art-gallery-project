import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';





export class Cards extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="images/g.jpg"/>
            <div className="card-body">
              <h5 className="card-title"> By Leonardo da Vinci</h5>
              <p>Leonardo da Vinci was a leading artist and intellectual of the Italian Renaissance who's known for his enduring works "The Last Supper" and the "Mona Lisa."</p>
            </div>
          </div>
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="images/b.jpg"/>
            <div className="card-body">
              <h5 className="card-title"> By Raphael's La Fornarina </h5>
              <p>was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic.</p>
            </div>
          </div>
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="images/h .jpg"/>
            <div className="card-body">
              <h5 className="card-title">By Vincent van Gogh</h5>
              <p>Vincent Willem van Gogh  was a post-impressionist painter whose work, notable for its beauty, emotion and color, highly influenced 20th-century art.</p>
            </div>
          </div>
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="http://via.placeholder.com/350x450"/>
            <div className="card-body">
              <h5 className="card-title">by <a href="/scul1">Artist</a></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi voluptas eius a itaque excepturi unde eligendi inventore impedit delectus, hic fugiat quo, quis nulla similique incidunt quidem voluptatibus. Cumque?</p>
            </div>
          </div>
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="http://via.placeholder.com/350x450"/>
            <div className="card-body">
              <h5 className="card-title">by <a href="/scul1">Artist</a></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi voluptas eius a itaque excepturi unde eligendi inventore impedit delectus, hic fugiat quo, quis nulla similique incidunt quidem voluptatibus. Cumque?</p>
            </div>
          </div>
          <div className="col-md-4 card padding">
            <img className="card-img-top" src="http://via.placeholder.com/350x450"/>
            <div className="card-body">
              <h5 className="card-title">by <a href="/scul1">Artist</a></h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi voluptas eius a itaque excepturi unde eligendi inventore impedit delectus, hic fugiat quo, quis nulla similique incidunt quidem voluptatibus. Cumque?</p>
            </div>
          </div>

        </div>
      </div>





    )
  }
}
