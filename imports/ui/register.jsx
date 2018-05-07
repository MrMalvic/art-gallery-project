import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';

export class Register extends Component{
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" onChange={this.handleTitleChange} value={this.state.title} />
          </label>
          <label>
            Description:
            <textarea placeholder="Description" value={this.state.desc} onChange={this.handleDescChange} />
          </label>
          <br/>
          <h1>Register</h1>
          <br/>          
          <label>
            Fullname:
            <input type="text"/>
            </label>
            <br/>
            <label>
              Email:
            <input type="text"/>              
            </label>
            <br/>
          <label>
            Password:
            <input type="password"/>
            </label>
            <br/>
            <label>
              Confirm password:
              <input type="password"/>
            </label>
            <br/>
            <label>
              Gender:
              <input type="radio" name="gender" value="male"/> Male
              <input type="radio" name="gender" value="female"/> Female
            </label>
            <br/>
            <label>
              Phone number:
              <input type="text"/>
            </label>
            <br/>
          <button type="submit">Submit</button>
        </form>
        )
    }
}