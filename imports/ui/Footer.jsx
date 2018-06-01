import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-left upper-footer">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <h4 className="footer-head">Elite Arts</h4>
                                <p>Here you can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col-md-4">
                                <h4 className="footer-head">Our Socials</h4>
                                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="#"><i className="fab fa-github fa-2x icon"></i></a>
                                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
                            </div>
                            <div className="col-md-4">
                                <h4 className="footer-head">Contact us</h4>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-phone"></i>+26094827391</li>
                                    <li><i className="far fa-envelope"></i>email@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright py-3 text-center lower-footer">
                        © 2018 Copyright :
                        <a href="https://github.com/MrMalvic/art-gallery-project"> Elite Arts</a>
                    </div>
                </footer>

            </div>
        )
    }
}