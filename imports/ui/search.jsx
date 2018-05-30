import {Meteor} from 'meteor/meteor';
import {Carousel} from './carousel.jsx';
import React, {Component} from 'react';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';

export class SearchCarousel extends Component {

 componentDidMount(){
  if (Meteor.isServer) {
    Messages._ensureIndex({
      "value": "text"
    });
  }
  
 }

 handleSearch = (e) => {
   e.preventDefault();
   const { target } = e;
   const search = target.search.value;
   const result = document.getElementById('search-result')
     Accounts.findUserByUsername = function (username) {
    return Accounts._findUserByQuery({
      username: username
    });
    console.log(username)
  };
   }
 

 

  render() {
    return (
      <div className="carousel-search">
        <NavBar1/>
        <form onSubmit={this.handleSearch} >
        <input type="search" id="search-bar" name="search" placeholder="Search..."/>
        <button type="submit"className="search-button"><i className="fas fa-search"></i></button>
        </form>
        <Carousel/>
      </div>
    )
  }
}