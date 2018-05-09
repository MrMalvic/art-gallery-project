import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-left upper">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h4>Elite Arts</h4>
                                <p>Here you can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Our Socials</h4>
                                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                                <a href="#"><i class="fab fa-github fa-2x icon"></i></a>
                                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                            </div>
                            <div className="col-md-4">
                                <h4>Contact us</h4>
                                <ul className="list-unstyled">
                                    <li><i class="fas fa-phone"></i>+26094827391</li>
                                    <li><i class="far fa-envelope"></i>email@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright py-3 text-center lower">
                        © 2018 Copyright :
        <a href="https://github.com/MrMalvic/art-gallery-project">Malumbo mutale </a>
                    </div>
                </footer>

            </div>
        )
    }
}