import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';




    export class Raphael extends Component{
      render(){
        returun(
          <div className="row">

            <div className="col-md-4">
            <div className="thumbnail">
              <img src="images/at.jpg" />
              <h4>Raphael Sanzio</h4>
            </div>
              </div>

              <div className="col-md-6">
              <div className="thumbnail">
                <h4>A leading figure of Italian High Renaissance classicism, Raphael is best known for his "Madonnas," including the Sistine Madonna, and for his large figure compositions in the Palace of the Vatican in Rome.<br/>
Synopsis

Raphael was born on April 6, 1483, in Urbino, Italy. He became Perugino's apprentice in 1504. Living in Florence from 1504 to 1507, he began painting a series of "Madonnas." In Rome from 1509 to 1511, he painted the Stanza della Segnatura ("Room of the Signatura") frescoes located in the Palace of the Vatican. He later painted another fresco cycle for the Vatican, in the Stanza d'Eliodoro ("Room of Heliodorus"). In 1514, Pope Julius II hired Raphael as his chief architect. Around the same time, he completed his last work in his series of the "Madonnas," an oil painting called the Sistine Madonna. Raphael died in Rome on April 6, 1520.</h4>
              </div>
              </div>
            </div>

          )
        }
      }
