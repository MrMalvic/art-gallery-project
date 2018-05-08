import React, { Component } from 'react';


export class Carousel extends Component {
    render() {
        return (
            <div>

                <h1></h1>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">

                        <div className="carousel-item active mask">
                            <img className="d-block w-100" className="mask" src="https://images.unsplash.com/photo-1440916005374-25bdd8dc52ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280c01f496089ce1c3cd75126a58107b&auto=format&fit=crop&w=1359&q=80" alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                 <a href="#" name="artist">By Malumbo Mutale</a>
                             </div>
                        </div>
                        <div className="carousel-item mask">
                            <img className="d-block w-100" className="mask" src="https://images.unsplash.com/photo-1496535731694-9673400f50c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c7e164025cac92d502d67cfa58119cb&auto=format&fit=crop&w=1351&q=80" alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                 <a href="#" name="artist">By Malumbo Mutale</a>
                             </div>
                        </div>
                        <div className="carousel-item mask">
                            <img v="d-block w-100" className="mask" src="https://images.unsplash.com/photo-1488984416746-ba513675d534?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c30473dc8fcd88cf6036204e32c3a870&auto=format&fit=crop&w=1275&q=80" alt="Third slide" />
                            <div class="carousel-caption d-none d-md-block">
                                 <a href="#" name="artist">By Malumbo Mutale</a>
                             </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        )
    }
}
