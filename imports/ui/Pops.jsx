import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';
import {Claude} from '/imports/ui/Claude.jsx';



export class Pops extends Component{

  goToPops = () => {
      route.go('/Pops');
    }
  render(){

    return(
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light navbar-two">
      <a className="navbar-brand" href=""><img src="logo2.png" width="100px" heigDropdownht="80px" className="d-inline-block align-top" alt=""/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/painting">Painting</a>
              <a className="dropdown-item" href="/sculpture">Sculpture</a>
              <a className="dropdown-item" href="/drawing">Drawing</a>
              <a className="dropdown-item" href="/craft">Craft</a>

            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Discovery
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/Pops">Popular Artists</a>
              <a className="dropdown-item" href="#">New Artists</a>
              <a className="dropdown-item" href="#">Other Artists</a>
            </div>
          </li>
          </ul>
      </div>
    </nav>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <img className="size" src="images/h.jpg"/>
            <a href="/pierre"><h5>About Pierre-August Renoir</h5></a>

          </div> <br/>
        </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img className="size" src="images/e.jpg"/>
                <a href="/edvard"><h5>About Edvard Munch</h5></a>
              </div><br/>
            </div>
                <div className="col-md-4">
                  <div className="thumbnail">
                    <img className="size" src="images/k.jpg"/>
                      <a href="/newartist"><h5>About Leonardo da Vinci</h5></a>
                  </div><br/>
                </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/f.jpg"/>
                        <a href="/vincent"><h5>About Vincent Van Gogh</h5></a>
                      </div><br/>
                    </div>
                      <div className="col-md-4">
                        <div className="thumbnail">
                          <img className="size" src="images/i.jpg"/>
                          <a href="/paul"><h5>About Paul Cézanne</h5></a>
                        </div><br/>
                      </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/r.jpg"/>
                        <a href="/claude"><h5>About Claude Monet</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                    <div className="thumbnail">
                        <img className="size" src="images/cc.jpg"/>
                        <a href="/titans"><h5>About Titans</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/jj.jpg"/>
                        <a href="/raphael"><h5>About Raphael</h5></a>
                      </div><br/>
                    </div>

                    <div className="col-md-4">
                      <div className="thumbnail">
                        <img className="size" src="images/n.jpg"/>
                        <a href="/diego"><h5>About Diego Velázquez</h5></a>
                      </div>
                      </div>
                    </div>

            </div>
    )
  }
}
