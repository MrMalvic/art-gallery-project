import React, { Component } from 'react';


export class Carousel extends Component {

    

    render() {
        return (
            <div className="mask parallax" id="cards">
                <div id="carouselExampleIndicators" data-interval="7000" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.artsfon.com/large/201505/69412.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <a href="#" className="artist-link">By Malumbo Mutale</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://www.africancraftsmarket.com/images/Namchi-beaded-dolls.jpg" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <a href="#" className="artist-link">By Malumbo Mutale</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img v="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDZ7vEcj2j7cg-jM9TO5Ih06GYaCwoXDKEckWTCSMnT2N3L3l" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <a href="#" className="artist-link">By Malumbo Mutale</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
