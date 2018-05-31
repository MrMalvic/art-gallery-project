import { Meteor } from 'meteor/meteor';
import { Carousel } from './carousel.jsx';
import React, { Component } from 'react';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';

export class SearchCarousel extends Component {

  componentDidMount() {
    console.log(Meteor.users.find().fetch())
  }

  render() {
    return (
      <div className="carousel-search">
        <NavBar1 />
        <form onSubmit={this.handleSearch} >
          <input type="search" id="search-bar" name="search" placeholder="Search..." />
          <button type="submit" className="search-button"><i className="fas fa-search"></i></button>
        </form>
        <Carousel />
      </div>
    )
  }
}

/*// constructor(){
//   super();
//   this.state = {
//     search:''
//   };
// }

// updateSearch(event) {
//   this.setState({search:event.target.value.substr})
// }

// componentDidMount() {
//   console.log(Meteor.users.find().fetch())
// }

// render() {
//   let filteredArtists = this.props.artists.filter;((artist) => {
//     return artist.toLowerCase.indexOf(this.state.search.toLowerCase)!== -1
//   });
//   return (
//     <div className="carousel-search">
//       <NavBar1 />
//       <form onSubmit={this.handleSearch} >
//         <input type="search" id="search-bar" name="search" placeholder="Search..." />
//         <button type="submit" className="search-button"><i className="fas fa-search"></i></button>
//         {filteredArtists.map((artist)) => {
//           return ( < Artist artist = {artist}
//           key = {artist.id}/>
//         });
//       }

//       </form>
//       <Carousel />
//     </div>
//   )
// }
// }*/