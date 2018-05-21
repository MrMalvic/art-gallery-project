import React, {Component} from 'react';


export class accessDenied extends Component{
    render(){
        return(
            <div className="App  access-denied">
                <h1 className="pad">Error 401</h1>
                <img src="accessdenied.png" alt="access denied!"/>
                <h3 className="pad">Please login first to upload.</h3>
                <h4>
                    <a className="access-denied-links" href="/">Home</a>
                    <a className="access-denied-links" href="/LogIn">Login</a>
                    <a className="access-denied-links" href="/UserSign">SignUp</a>
                </h4>
                </div>
        )
    }
}