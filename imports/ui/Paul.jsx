import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';




export class Paul extends Component{
  render(){
    return(
      <div>
        <div className="row">
        <div className="col-md-4">
        <div className="thumbnail">
          <img src="images/uu.jpg" />
          <h4>Paul Cézanne</h4>
        </div>
          </div>

          <div className="col-md-6">
          <div className="thumbnail">
                <h5>Early Life<br/>
Famed painter Paul Cézanne was born on January 19, 1839, in Aix-en-Provence (also known as Aix), France. His father, Philippe Auguste, was the co-founder of a banking firm that prospered throughout the artist's life, affording him financial security that was unavailable to most of his contemporaries and eventually resulting in a large inheritanADVERTISEMENTce. In 1852, Paul Cézanne entered the Collège Bourbon, where he met and befriended Émile Zola. This friendship was decisive for both men: with youthful romanticism, they envisioned successful careers in Paris' booming art  industry—Cézanne as a painter and Zola as a writer.
</h5>
        </div>
        </div>

  </div>
  </div>
    )
  }
}
