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
  //  Meteor.call('findUserByUsername', 'username', findUserByUsername)
  //  function findUserByUsername(error,users){
  //   console.log(users);
    var user = Meteor.users.findOne({"name": this.users.name});
    console.log(user)
   }
 

 

  render() {
    return (
      <div className="carousel-search">
        <NavBar1/>
        <form onSubmit={this.handleSearch} >
        <input type="search" id="search-bar" placeholder="Search..."/>
        <button type="submit"className="search-button" ><i className="fas fa-search"></i></button>
        </form>
        <Carousel/>
      </div>
    )
  }
}