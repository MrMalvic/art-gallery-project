import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Vincent extends Component{
  render(){
    return(

      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/00.jpg"/>
            <h5>Vincent Van Gogh</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <h5>Vincent van Gogh is considered the greatest Dutch painter after Rembrandt, although he remained poor and virtually unknown throughout his life.<br/>
Who Was Vincent Van Gogh?

Vincent Willem van Gogh (March 30, 1853 to July 29, 1890) was a post-impressionist painter whose work, notable for its beauty, emotion and color, highly influenced 20th-century art. He struggled with mental illness, and remained poor and virtually unknown throughout his life. Van Gogh died in France at age 37 from a self-inflicted gunshot wound.</h5>
        </div>
        </div>
  </div>
)
}
}
