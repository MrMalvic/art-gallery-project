import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Diego extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/art.jpg"/>
            <h5>Claude Monet</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <h5>Diego Velázquez was a 17th century Spanish painter who produced "Las Meninas" and many renowned portraits as a member of King Philip IV's royal court.<br/>
Synopsis

Spanish painter Diego Velázquez was born circa June 6, 1599, in Seville, Spain. Although his early paintings were religious-themed, he became renowned for his realistic, complex portraits as a member of King Philip IV's court. In his later years, the Spanish master produced a renowned portrait of Pope Innocent X and the famed "Las Meninas." He died on August 6, 1660, in Madrid.</h5>
          </div><br/>
        </div>

      </div>
    )
  }
}
