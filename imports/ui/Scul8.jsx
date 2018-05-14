import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';






export class Scul8 extends Component{
    render(){
      return(
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light navbar-two">
        <a className="navbar-brand" href="/"><img src="logo2.png" width="100px" heigDropdownht="80px" className="d-inline-block align-top" alt=""/></a>
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
      <div className="col-md-6">
        <div className="thumbnail">
            <center> <img className="size" src="images/blac.jpg"/></center>
                         <center><h5>Claude Monet</h5></center>

         <center><h5>Claude Monet was a famous French painter whose work
               gave a name to the art movement Impressionism, which was
                concerned with capturing light and natural forms.Synopsis
Claude Monet was born on November 14, 1840, in Paris, France. He enrolled 
in the Academie Suisse. After an art exhibition in 1874, a critic insultingly
 dubbed Monet's painting style "Impression," since it was more concerned with 
 form and light than realism, and the term stuck. Monet struggled with
  depression, poverty and illness throughout his life. He died in 1926.</h5></center>
  <br></br>
  <h1>PROJECTS HE HAS DONE</h1>
  <div class="row">
        <div class="col-md-4">
  <img className="size" src="painting/ak.jpeg"  width="200%" height="85%"/>
  </div>
        <div class="col-md-4">
   <img className="size" src="painting/am.jpeg"  width="200%" height="85%"/>
  </div>
        <div class="col-md-4">
  <img className="size" src="painting/ab.jpg"  width="200%" height="85%"/>
  </div>
        </div>
                <h1>EMAIL CONTACT ONLY</h1>
  <a rel="stylesheet" className="btn btn-primary" href="https://mailto:mafwolikelenge@gmail.com">Email:</a>
        </div>
      </div>
        </div>
        </div>
       
     
  
      )
    }
  }
