import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';





export class Painting extends Component{

    goToPainting = () => {
        route.go('/painting') // pathDef, params, queryParams
      }

    render(){
        return(
      
      <div className="app">
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            </li>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <li class="nav-item">
            <a class="nav-link" href="/painting">Painting</a>
          </li>
          
          <div class="card-group">             
      <div class="card">
    <img class="card-img-top" src="img4.jpeg" width="10%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">Drawing.</p>
          </div>
           </div>
 
        <div class="card">
        <img class="card-img-top" src="img1.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Painting.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img2.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Manager/Developer.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img3.jpg" height="50%" width="20%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Senior Developer/Designer.</p>
        </div>
      </div>
      <div class="card-group">
      <div class="card">
    <img class="card-img-top" src="img4.jpeg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">FullStack Developer.</p>
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
          <p class="card-text">Senior Developer/Designer.</p>
        </div>
      </div>
      <div class="card-group">
      <div class="card">
    <img class="card-img-top" src="img4.jpeg" width="10%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">FullStack Developer.</p>
          </div>
           </div>
        <div class="card">
        <img class="card-img-top" src="img1.jpg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Front-End full Developer.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img2.jpeg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Manager/Developer.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img3.jpg" height="50%" width="10%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Senior Developer/Designer.</p>
        </div>
        </div>
      </div>
      </div>
      </div>   
  </div>
  </div>
   
        );
    }
};
