import { Meteor } from 'meteor/meteor';
import { Carousel } from './carousel.jsx';
import React, { Component } from 'react';


export class Search extends Component{
    render(){
        return(
            <div className="carousel-search" >
            {/* <div className="carousel-search"> */}
                <input type="text" className="bar" placeholder="Search..."/>
                {/* </div> */}
                <Carousel/>
            </div>
        )
    }
}