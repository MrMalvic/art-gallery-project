import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Newartist extends Component{
  render(){
    return(
      <div className="row">
            <div className="col-md-4">
            <div className="thumbnail">
              <img src="images/k.jpg" />
              <h4>Leonardo da Vinci</h4>
             </div>
             </div>

            <div className="col-md-6">
            <div className="thumbnail">
              <h5> <br/>Who Was Leonardo da Vinci?<br/>
                  Leonardo da Vinci (April 15, 1452 to May 2, 1519) was a painter, sculptor, architect, inventor, military engineer and draftsman —the epitome of a “Renaissance man.” With a curious mind and keen intellect, da Vinci studied the laws of science and nature, which greatly informed his work. His ideas and body of work have influenced countless artists and made da Vinci a leading light of the Italian Renaissance.<br/>
                  Leonardo da Vinci’s Paintings and Artwork
             </h5>

              </div>
              </div>



      </div>
    )
  }
}
