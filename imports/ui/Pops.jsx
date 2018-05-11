import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';


export class Pops extends Component{
  render(){
    return(

      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/h.jpg"/>
            <a href="#"><h5>About Pierre-August Renoir</h5></a>

          </div> <br/>
        </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img className="size" src="images/e.jpg"/>
                <a href="#"><h5>About Edvard Munch</h5></a>
              </div><br/>
            </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img className="size" src="images/k.jpg"/>
                      <a href="#"><h5>About Leonardo da Vinci</h5></a>
                  </div><br/>
                </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/f.jpg"/>
                        <a href="#"><h5>About Vincent Van Gogh</h5></a>
                      </div><br/>
                    </div>
                      <div className="col-md-4">
                        <div className="thumbnail">
                          <img className="size" src="images/i.jpg"/>
                          <a href="#"><h5>About Paul Cézanne</h5></a>
                        </div><br/>
                      </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/r.jpg"/>
                        <a href="#"><h5>About Claude Monet</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/cc.jpg"/>
                        <a href="#"><h5>About Titans</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/jj.jpg"/>
                        <a href="#"><h5>About Raphael</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/n.jpg"/>
                        <a href="#"><h5>About Diego Velázquez</h5></a>

                      </div>
                    </div>
            </div>
    )
  }
}
