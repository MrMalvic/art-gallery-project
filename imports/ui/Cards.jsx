import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';





export class Cards extends Component{
  render(){
    return(
<div className="body">
<div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="images/g.jpg" style={{height: 95 + "%"}}/>
                <div className="card-body">
                  <h5 className="card-title"> By Leonardo da Vinci</h5>
                  <p>Leonardo da Vinci was a leading artist and intellectual of the Italian Renaissance who's known for his enduring works "The Last Supper" and the "Mona Lisa."</p>
                </div>
              </div>
              <div className="card">
          <img className="card-img-top"     src="images/b.jpg"style={{height: 95+"%"}}/>
                <div className="card-body">
                  <h5 className="card-title"> By Raphael's La Fornarina </h5>
                  <p>was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/h .jpg" style={{height: 95 + "%"}} />
                <div className="card-body">
                  <h5 className="card-title">By Vincent van Gogh</h5>
                  <p>Vincent Willem van Gogh  was a post-impressionist painter whose work, notable for its beauty, emotion and color, highly influenced 20th-century art.</p>
                  </div>
                  </div>

</div>
</div>





    )
  }
}
