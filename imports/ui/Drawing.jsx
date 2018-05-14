import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';





export class Drawing extends Component{

    goToDrawing = () => {
        route.go('/drawing');
      }

      goToPops = () => {
          route.go('/Pops');
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
             <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Discovery
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="/Pops">Popular Artists</a>
               <a class="dropdown-item" href="#">New Artists</a>
               <a class="dropdown-item" href="#">Other Artists</a>
             </div>
           </li>
           </ul>
       </div>
     </nav>
                        <h1>DRAWINGS</h1>
          <div class="row">
          <div class="col-md-4">
        <img class="card-img-top" src="drawing/3.jpeg" width="200%" height="90%" alt="Card image cap"></img>
        <button class="btn btn-success"  onClick={this.state}>Buy</button>
               </div>
            <div class="col-md-4">
         <img class="card-img-top" src="drawing/2.jpeg" width="200%" height="90%" alt="Card image cap"></img>
              <button class="btn btn-success"  onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
        <img class="card-img-top" src="drawing/5.jpeg" width="200%" height="90%" alt="Card image cap"></img>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
               </div>
               </div>
               <div class="row">
            <div class="col-md-4">
            <img class="card-img-top" src="drawing/6.jpeg" width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/7.jpeg" width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/8.jpeg"  width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          </div>
          <div class="row">
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/14.jpeg" width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/10.jpeg"  width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
        <img class="card-img-top" src="drawing/11.jpeg" width="200%" height="90%" alt="Card image cap"></img>
        <br></br>
        <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          </div>
               <div class="row">
            <div class="col-md-4">
            <img class="card-img-top" src="drawing/1.jpg" width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/13.jpeg" width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
          </div>
          <div class="col-md-4">
            <img class="card-img-top" src="drawing/9.jpeg"  width="200%" height="90%" alt="Card image cap"></img>
            <button class="btn btn-success" onClick={this.state}>Buy</button>
            </div>
          </div>
          </div>


        );
    }
};
