import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';





export class Sculpture extends Component{

    goToSculpture = () => {
        route.go('/sculpture');
      }

    render(){
        return(
      
      <div className="App">
         <nav class="navbar navbar-expand-lg navbar-light bg-purple">
           <a class="navbar-brand" href="">Elite Art</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
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
    <img class="card-img-top" src="sculpture/Af2.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Cass Opra</h5>
      <p class="card-text">Sculpture.</p>
          </div>
           </div>
        <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af3.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andy C</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af4.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af5.jpg" width="20%" height="50%"  alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="sculpture/Af6.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">San Paulo</h5>
      <p class="card-text">Sculpture.</p>
          </div>
           </div>
        <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af7.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">San Marino</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af8.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">M Likelenge</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af9.jpg" width="20%" height="50%"  alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Michel T</h5>
          <p class="card-text">Sculpture.</p>
        </div>
        </div>
      <div class="col-md-4">
    <img class="card-img-top" src="sculpture/Af10.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Olipa Z</h5>
      <p class="card-text">Sculpture.</p>
          </div>
           </div>
           <div>
           <div class="row">
        <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af11.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">GOODSON E</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af12.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Serena Luiz</h5>
          <p class="card-text">Sculpture.</p>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/Af1.JPG"  width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Maale More</h5>
          <p class="card-text">Sculpture.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
        );
    }
};
