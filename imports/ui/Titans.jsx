import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Titans extends Component{
  render(){
    return(

      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/ooo.jpg"/>
            <h5>Titian</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <h5>


Titian was a leading artist of the Italian Renaissance who painted works for Pope Paul III, King Philip II of Spain and Holy Roman Emperor Charles V.<br/>
Synopsis

Born sometime between 1488 and 1490, Titian became an artist's apprentice in Venice as a teenager. He worked with Sebastiano Zuccato, Giovanni Bellini and Giorgione before branching out on his own. Titian became one of Venice's leading artists around 1518 with the completion of "Assumption of the Virgin." He was soon creating for works for leading members of royalty, including King Philip II of Spain and Charles V, the Holy Roman Emperor. Pope Paul III also hired Titian to paint portraits of himself and his grandsons. Titian died on August 27, 1576.</h5>
        </div>
        </div>
  </div>
)
}
}
