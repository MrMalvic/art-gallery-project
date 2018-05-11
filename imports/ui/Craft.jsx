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
                      <h1>CRAFTS</h1>
    <div class="row">             
      <div class="col-md-4">
    <img class="card-img-top" src="craft/let.jpeg" width="200%" height="80%" alt="Card image cap"></img>
    <br>
    </br>
    <button class="btn btn-success"  onClick={this.state}>Buy</button>
           </div>
        <div class="col-md-4">   
     <img class="card-img-top" src="craft/awes.jpeg" width="200%" height="80%" alt="Card image cap"></img>
     <br>
     </br>
          <button class="btn btn-success"  onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="craft/super.jpeg" width="200%" height="80%" alt="Card image cap"></img>
    <br>
    </br>
    <button class="btn btn-success" onClick={this.state}>Buy</button>
           </div>
           </div>
           <div class="row"> 
        <div class="col-md-4">
        <img class="card-img-top" src="craft/less.jpeg" width="200%" height="80%" alt="Card image cap"></img>
        <br>
        </br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="craft/inde.jpeg" width="20%" height="80%" alt="Card image cap"></img>
        <br>
        </br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="craft/toot.jpeg"  width="200%" height="80%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="craft/great.jpeg" width="200%" height="80%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="craft/impo.jpeg"  width="200%" height="80%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="craft/more.jpeg" width="200%" height="80%" alt="Card image cap"></img>
    <br></br>
    <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      </div>
           <div class="row">
        <div class="col-md-4">
        <img class="card-img-top" src="craft/cool.jpeg" width="200%" height="80%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="craft/sir.jpeg" width="200%" height="80%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="craft/eat.jpeg"  width="200%" height="80%" alt="Card image cap"></img>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
        </div>
      </div>
      </div>
        );
    }
};
