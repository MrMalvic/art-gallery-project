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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <li class="nav-item">
            <a class="nav-link" href="/painting">Painting</a>
          </li>
          <a class="dropdown-item" href="#">Sculpture</a>
            <a class="dropdown-item" href="#">Drawing</a>
            <a class="dropdown-item" href="#">Craft</a>
          </div>
          <div class="row">             
      <div class="col-md-4">
    <img class="card-img-top" src="sculpture/chain.jpeg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">The sculpture painted by a famous man lives in a city of South Africa called Pretoria city.This man named:</h5>
      <p class="card-text"> <datagrid>erick P</datagrid>.</p>
      <h4>A Painter</h4>
          </div>
           </div>
        <div class="col-md-4">
        <img class="card-img-top" src="sculpture/dem.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of Madagascar called Antananalivo.This man named:</h5>
          <p class="card-text">Andrew.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="sculpture/finally.jpeg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a town of Egypt called cairo.This man named: </h5>
          <p class="card-text">Charles.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="painting/angelfish.jpg" height="50%" width="20%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called lilongwe city.This man named:</h5>
          <p class="card-text">Pop fo.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      <div class="col-md-4">
    <img class="card-img-top" src="painting/races.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">The sculpture painted by a famous man lives in a city of Nigeria called abuja city.This man named:</h5>
      <p class="card-text">Dan S.</p>
      <h4>A Painter</h4>
          </div>
           </div>
        <div class="col-md-4">
        <img class="card-img-top" src="b.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of Algeria called algers city.This man named:</h5>
          <p class="card-text">Ba D.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <img class="card-img-top" src="painting/sows.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of Morocco called rabat city.This man named:</h5>
          <p class="card-text">Martha A.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/fa.jpg" height="50%" width="20%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called  city.This man named:</h5>
          <p class="card-text">Sithe N.</p>
          <h4>A Painter</h4>
        </div>
        </div>
      <div class="col-md-4">
    <img class="card-img-top" src="painting/223.jpg" width="20%" height="50%" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called lilongwe city.This man named:</h5>
      <p class="card-text">Sam P.</p>
      <h4>A Painter</h4>
          </div>
           </div>
           </div>
           <div class="row">
        <div class="col-md-4">
        <img class="card-img-top" src="painting/con.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called lilongwe city.This man named:</h5>
          <p class="card-text">Mafwolisha L.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/billy.jpg" width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called lilongwe city.This man named:</h5>
          <p class="card-text">Malumbo m.</p>
          <h4>A Painter</h4>
        </div>
      </div>
      <div class="col-md-4">
        <img class="card-img-top" src="painting/BORN.jpg"  width="20%" height="50%" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">The sculpture painted by a famous man lives in a city of malawi called lilongwe city.This man named:</h5>
          <p class="card-text">Micheal jk.</p>
          <h4>A Painter</h4>
        </div>
        </div>
        </div>
      </div>
        );
    }
};

