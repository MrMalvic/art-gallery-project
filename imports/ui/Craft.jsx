import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';





export class Craft extends Component{

    goToCraft = () => {
        route.go('/craft');
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
    <div class="card-group">             
      <div class="card">
    <img class="card-img-top" src="ges.jpeg" width="10%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">Drawing.</p>
          </div>
           </div>
        <div class="card">
        <img class="card-img-top" src="i.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Painting.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="im.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Craft.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="ima.jpeg" height="50%" width="20%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Artists.</p>
        </div>
      </div>
      <div class="card-group">
      <div class="card">
    <img class="card-img-top" src="a1.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">painting.</p>
          </div>
           </div>
        <div class="card">
        <img class="card-img-top" src="img1.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Artists.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img2.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Artists.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img3.jpg" height="50%" width="10%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Drawing.</p>
        </div>
      </div>
      <div class="card">
    <img class="card-img-top" src="image.jpeg" width="10%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">painting.</p>
          </div>
           </div>
        <div class="card">
        <img class="card-img-top" src="images.jpeg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Drawing.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="love.jpeg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Craft.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="pia.jpeg" height="50%" width="10%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">csculpture.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
        );
    }
};
