import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';

  export class Claude extends Component{
    render(){
      return(
        <div>
        <div className="row">
          <div className="thumbnail">
            <img className="size" src="images/blac.jpg"/>
            <h5>Claude Monet</h5>
          </div><br/>

      <div className="col-md-6">
        <div className="thumbnail">
          <h5>Claude Monet was a famous French painter whose work gave a name to the art movement Impressionism, which was concerned with capturing light and natural forms.<br/><br/>
Synopsis

Claude Monet was born on November 14, 1840, in Paris, France. He enrolled in the Academie Suisse. After an art exhibition in 1874, a critic insultingly dubbed Monet's painting style "Impression," since it was more concerned with form and light than realism, and the term stuck. Monet struggled with depression, poverty and illness throughout his life. He died in 1926.</h5>
        </div>
      </div>
        </div>
      </div>
      )
    }
  }
