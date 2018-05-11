import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';




 export  class Edvard extends Component{
    render(){
      return(

        <div>
      <div className="row">


        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/edvard.jpg"/>
             <h4>Edvard Munch</h4>


        </div>
        </div>
        <div className="col-md-6">
        <div className="thumbnail">
          <h5>Norwegian painter Edvard Munch is widely known for his iconic pre-Expressionist painting "The Scream" ("The Cry").<br/>
Synopsis

Born in 1863 in Löten, Norway, famed painter Edvard Munch established a free-flowing, psychological-themed style all his own. His painting "The Scream" ("The Cry"; 1893), is one of the most recognizable works in the history of art. His later works proved to be less intense, but his earlier, darker paintings ensured his legacy. A testament to his importance, "The Scream" sold for more than $119 million in 2012—setting a new record.</h5>

        </div>
          </div>























        </div>
      </div>

      )
    }
  }
