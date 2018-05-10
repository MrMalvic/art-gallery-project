import { Meteor } from 'meteor/meteor';
import { Carousel } from './carousel.jsx';
import React, { Component } from 'react';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx'; 


export class SearchCarousel extends Component{
    render(){
        return(
            <div className="carousel-search" >
            <NavBar1/>
            <input type="text" className="bar" placeholder="Search..."/>
            <Carousel/>
            </div>
        )
    }
}