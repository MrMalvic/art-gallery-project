import React, { Component } from 'react';


export class Carousel extends Component {
    render() {
        return (
            <div className="mask">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1440916005374-25bdd8dc52ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280c01f496089ce1c3cd75126a58107b&auto=format&fit=crop&w=1359&q=80" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <a href="#" className="artist-link">By Malumbo Mutale</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1496535731694-9673400f50c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c7e164025cac92d502d67cfa58119cb&auto=format&fit=crop&w=1351&q=80" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <a href="#" className="artist-link">By Malumbo Mutale</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img v="d-block w-100" src="https://images.unsplash.com/photo-1488984416746-ba513675d534?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c30473dc8fcd88cf6036204e32c3a870&auto=format&fit=crop&w=1275&q=80" alt="Third slide" />
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
