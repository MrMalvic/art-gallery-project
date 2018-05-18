import {Meteor} from 'meteor/meteor';
import {Carousel} from './carousel.jsx';
import React, {Component} from 'react';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';

export class SearchCarousel extends Component {

 componentDidMount(){
  if (Meteor.isServer) {
    Messages._ensureIndex({
      "value": "text"
    });
  }
 }

 handleSearch(){

 }

  render() {
    return (
      <div className="carousel-search">
        <NavBar1/>
        <form onSubmit={this.handleSearch} >
        <input type="text" id="search-bar" placeholder="Search..."/>
        <button type="submit"className="search-button"><i className="fas fa-search"></i></button>
        </form>
        <Carousel/>
      </div>
    )
  }
}