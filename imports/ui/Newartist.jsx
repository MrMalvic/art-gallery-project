import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';



export class Newartist extends Component{
  render(){
    return(
      <div className="row">
            <div className="col-md-4">
            <div className="thumbnail">
              <img src="images/k.jpg" />
             </div>
             </div>

            <div className="col-md-6">
            <div className="thumbnail">
              <h5> <br/><h3>Who Was Leonardo da Vinci?</h3><br/>
                  Leonardo da Vinci (April 15, 1452 to May 2, 1519) was a painter, sculptor, architect, inventor, military engineer and draftsman —the epitome of a “Renaissance man.” With a curious mind and keen intellect, da Vinci studied the laws of science and nature, which greatly informed his work. His ideas and body of work have influenced countless artists and made da Vinci a leading light of the Italian Renaissance.<br/>
                  <h3>Leonardo da Vinci’s Paintings and Artwork</h3> <br/>
                  Although da Vinci is known for his artistic abilities,fewer than two-dozen paintings attributed to him exist. One reason is that his interests were so varied that he wasn’t a prolific painter. Leonardo da Vinci’s most famous works include the “Vitruvian Man,” “The Last Supper” and the “Mona Lisa.” <br/><br/>
                  ‘Vitruvian Man’<br/><br/>
                  Art and science intersected perfectly in da Vinci’s sketch of “Vitruvian Man,” drawn in 1490, which depicted a male figure in two superimposed positions with his arms and legs apart inside both a square and a circle. The sketch represents Leonardo’s study of proportion as well as his desire to relate man to nature.
                  A sketch of Leonardo da Vinci.
</h5>

              </div>
            </div> <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>  <br/><br/><br/>

            <div className="col-md-4">
            <div className="thumbnail">
              <img src="images/k.jpg" />
            </div>
              </div>

              <div className="col-md-4">
              <div className="thumbnail">
                <img src="images/k.jpg" />
              </div>
            </div>

            <div className="col-md-4">
            <div className="thumbnail">
              <img src="images/k.jpg" />
            </div>
          </div>



      </div>
    )
  }
}
