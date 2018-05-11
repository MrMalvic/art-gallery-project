import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Pierre extends Component{
  render(){
    return(
      <div>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/44.jpg"/>
            <h5>Pierre-August Renoir</h5>
          </div><br/>
        </div>
        <div className="col-md-6">
          <div className="thumbnail">
            <p>A leading Impressionist painter, Pierre-Auguste Renoir was one of the most famous artists of the early twentieth century.<br/>
Synopsis

An innovative artist, Pierre-Auguste Renoir was born on February 25, 1841, in Limoges, France. He started out as an apprentice to a porcelain painter and studied drawing in his free time. After years as a struggling painter, Renoir helped launch an artistic movement called Impressionism in 1870s. He eventually became one of the most highly regarded artists of his time. He died in Cagnes-sur-Mer, France, in 1919.</p>
          </div>
        </div>
      </div>
    </div>
      )
    }
  }
