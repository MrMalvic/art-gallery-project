import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';
import Profiles from '/imports/api/profile/collections.js';
import FileUpload from './invisNavBar/uploadFile.jsx';
import UserFiles from '../api/upload/collections.js';
import { Session } from 'meteor/session';


export class Update extends Component {

  constructor(props){
    super(props);
    this.state = {
      Name:'',
      phoneNumber:'',
      location:'',
    }}

    
  handleSubmit=(e)=>{
    e.preventDefault();
    const attempt = Session.get('imageId');
    const artist = Session.get('profile');
    const currentUserId = Meteor.userId()
    const profile = {
      imageId: attempt,
      owner: artist,
      Name:this.state.Name,
      phoneNumber:this.state.phoneNumber,
      location:this.state.location,
    }
    Meteor.call('profiles.create',profile );
    console.log('profiles created')
    route.go('/ProfilePage');
  }
    handleNameChange = (e) => {
    this.setState({
     name: e.target.value
    })
  }

  
  handlePhoneNumberChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  
  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  
        

    render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width:100+"px",height:100+"px"}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview<br/></div>);
    }
        return (
               
                <div>
                 <NavBar1 />
                    <form onSubmit={this.handleSubmit} className="artist-signup-form">
                        <h1 className="upload-work App">Update your Details</h1>
                        <FileUpload className="white-text" fileName = {this.state.Name} />
                            <div className="imgPreview">
                            </div>
                            <div className="form-group col-md-6">
                                <input onChange={this.handleNameChange} type="text" name="Name" placeholder="Name" className="form-control2"/>
                                    </div> 

                            <div className="form-group col-md-6">
                                <input onChange={this.handlephoneNumberChange} type="number" name="phoneNumber" placeholder="Phone number" className="form-control2" />
                            </div>

                            
                            <div className="form-group col-md-6">
                                <input onChange={this.handleLocationChange} type="text" name="location" placeholder="Location" className="form-control2" />
                            </div>

                        <button type="submit" className="btn btn-primary App ">Update</button>
                    </form>
                </div>       
        )
    }
}



export default withTracker(() =>{
  Meteor.subscribe('files.all');
  return{
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }



})(Update);


