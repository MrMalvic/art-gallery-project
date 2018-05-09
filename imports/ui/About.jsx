import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';




export class About extends Component{

  

    render(){
        return(
       
 <div className="app">
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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">painting</a>
              <a class="dropdown-item" href="#">Sculpture</a>
              <a class="dropdown-item" href="#">Drawing</a>
              <a class="dropdown-item" href="#">Craft</a>
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
          <h1>About Our Gallery Art</h1>
          <h4> 
          Gallery Art is the world’s leading
          <br></br> online art gallery, connecting people with art and artists they love.
            Gallery Art offers an<br></br>
             unparalleled selection of paintings, draence of buying and s
          wingselling art by making it easy, convenient and welcoming for both collectors and artists., sculpture and photography in a range of prices, and it provides artists from around the world with an expertly curated environment in which to exhibit and sell their work.
              Based in Lusaka, Gallery Art is redefining the  <br></br>experience of buying and selling art by making it easy, convenient and welcoming for both collectors and artists.
              </h4>
          <h1>Meet Our Team</h1>
        <div class="card-group">
      <div class="card">
    <img class="card-img-top" src="img4.jpeg" width="10%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Charles Chanda</h5>
      <p class="card-text">FullStack Developer.</p>
      <a rel="stylesheet" className="btn btn-primary" href="https://mailto:chandacharles904@gmail.com">Email:</a>
          </div>
           </div>
 
        <div class="card">
        <img class="card-img-top" src="img1.jpg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Andrew Khondowe</h5>
          <p class="card-text">Front-End full Developer.</p>
          <a rel="stylesheet" className="btn btn-primary" href="https://mailto:a@gmail.com">Email:</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img2.jpeg" width="10%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Mafwolisha Likelenge</h5>
          <p class="card-text">Manager/Developer.</p>
          <a rel="stylesheet" className="btn btn-primary" href="https://mailto:mafwolikelenge@gmail.com">Email:</a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="img3.jpg" height="50%" width="10%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">malumbo mutale</h5>
          <p class="card-text">Senior Developer/Designer.</p>
          <a rel="stylesheet" className="btn btn-primary" href="https://mailto:@gmail.com">Email:</a>
        </div>
      </div>
    </div>
    </div>
   
        );
    }
    
}