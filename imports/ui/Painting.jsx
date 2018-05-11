import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';





export class Painting extends Component{

    goToPainting = () => {
        route.go('/painting');
      }

    render(){
        return(
      
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-purple">
           <a className="navbar-brand" href="">Elite Art</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
                </button>
  
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/painting">Painting</a>
              <a class="dropdown-item" href="/sculpture">Sculpture</a>
              <a class="dropdown-item" href="/drawing">Drawing</a>
              <a class="dropdown-item" href="/craft">Craft</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Discovery
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Popular Artists</a>
              <a class="dropdown-item" href="#">New Artists</a>
              <a class="dropdown-item" href="#">Other Artists</a>
            </div>
          </li>
          </ul>
      </div>
    </nav>
          <div class="row">             
      <div class="col-md-4">
    <img class="card-img-top" src="painting/ab.jpg" width="200%" height="85%" alt="Card image cap"></img>
    <br>
    </br>
    <button class="btn btn-success"  onClick={this.state}>By</button>
           </div>
        <div class="col-md-4">   
     <img class="card-img-top" src="painting/ah.jpeg" width="200%" height="85%" alt="Card image cap"></img>
     <br>
     </br>
          <button class="btn btn-success"  onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="painting/ac.jpeg" width="200%" height="85%" alt="Card image cap"></img>
    <br>
    </br>
    <button class="btn btn-success" onClick={this.state}>By</button>
           </div>
           </div>
           <div class="row"> 
        <div class="col-md-4">
        <img class="card-img-top" src="painting/ad.jpg" width="200%" height="85%" alt="Card image cap"></img>
        <br>
        </br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/ae.jpg" width="20%" height="85%" alt="Card image cap"></img>
        <br>
        </br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/af.jpg"  width="200%" height="85%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="painting/ag.jpg" width="200%" height="85%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/ai.jpg"  width="200%" height="85%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="painting/aj.jpg" width="200%" height="85%" alt="Card image cap"></img>
    <br></br>
    <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      </div>
           <div class="row">
        <div class="col-md-4">
        <img class="card-img-top" src="painting/ad.jpg" width="200%" height="85%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/ab.jpg" width="200%" height="85%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>By</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/aa.jpg"  width="200%" height="85%" alt="Card image cap"></img>
        <button class="btn btn-success" onClick={this.state}>By</button>
        </div>
      </div>
      </div>
        );
    }
};

