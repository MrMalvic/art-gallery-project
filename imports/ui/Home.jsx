import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';


//In a component, you can only have one default
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: 'Default Value',
      title: 'Default Title'
    }
  }

  goContacts = () => {
    route.go('/contact')
  }

  goAbout = () => {
    route.go('/about')
  }

  getAllPosts = () => {
    const mPosts = this.props.posts;
    return mPosts.map((post) => {
      return (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      )
    }
    );
  }

  handleSubmit = (e) => {
    const post = {
      title: this.state.title,
      desc: this.state.desc
    }
    Meteor.call('posts.create', post)
    e.preventDefault();
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  getUserData = (e) => {
    e.preventDefault();
    // console.log(e.target.fullname.value);
    const { target } = e;
    const name = target.fullname.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    const phoneNumber = target.phoneNumber.value;
    // console.log(name,email,password.confirmPassword,phoneNumber);
    if (password.trim() !== confirmPassword.trim()) {
      console.log("passwords dont match");
      return;
    }


    const user = {
      email,
      password,
      profile:{
        name,
        phoneNumber
      },
      createdAt: new Date()
    }
    Accounts.createUser(user,error =>{
      error ? console.log(error.reason) : console.log('Account created succesfully')
    })
  } 
  logUserIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Meteor.loginWithPassword(email, password, err => {
      error ? console.log(error.reason) : console.log('Login succesfully');
    })

  }


  render() {
    return (
      <div className="App">
      <h2>Our homepage</h2>
        <button onClick = {this.goContacts}>Contact Us</button>
        <button onClick = {this.goAbout}>About Thanos</button>
        {this.getAllPosts()} <br /><br />        
          <form onSubmit={this.getUserData}>
          <h1>Register</h1>
          <br />
          <label>
            Fullname:
            <input type="text" name="fullname" />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input type="text" name="email"/>
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" name="password"/>
          </label>
          <br />
          <br />
          <label>
            Confirm password:
              <input type="password" name="confirmPassword"/>
          </label>
          <br />
          <br />
          <label>
            Phone number:
              <input type="number" name="phoneNumber"/>
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
       
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  }
})(Home);
