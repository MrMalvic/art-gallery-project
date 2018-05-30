import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';
import Posts from '/imports/api/blog/collections.js';
import FileUpload from './uploadFile.jsx';
import {UserFiles} from '../../api/upload/collections.js';
import { Session } from 'meteor/session';


export class Upload extends Component {

    
  handleSubmit=(e)=>{
    e.preventDefault();
    const attempt = Session.get('imageId');
    const artist = Session.get('profile');
    const currentUserId = Meteor.userId()
    const piece = {
      imageId: attempt,
      owner: artist,
      pieceName:this.state.pieceName,
      category: this.state.category,
      location:this.state.location,
      phoneNumber:this.state.phoneNumber,
      price:this.state.price,
      description:this.state.description,
      createdAt: new Date(),
      createdBy:currentUserId,
      paid: true
    }
    Meteor.call('posts.create',piece );
    console.log('piece created')
    route.go('/Buy1');
  }
    handlePieceNameChange = (e) => {
    this.setState({
     pieceName: e.target.value
    })
  }

  
  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  
  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handlephoneNumberChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  handlepriceChange = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
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
            <div className="App">
                <div className="mask3">
                    <img src="img7.jpg" className="artist-signup-img" />
                </div>
                <NavBar1 />
                <div>
                    <form onSubmit={this.handleSubmit} className="artist-signup-form">
                        <h1 className="upload-work App">Upload your work</h1>
                        <FileUpload className="white-text" fileName = {this.state.pieceName} />
                            <div className="imgPreview">
                            </div>
                            <div className="form-group col-md-6">
                                    <input onChange={this.handlePieceNameChange} type="text" name="pieceName" placeholder="Name of piece" className="form-control2" required/>
                                    </div>  
                            <div className="form-group col-md-6">
                                <select onChange={this.handleCategoryChange} name="category" id="inputCategory" className="form-control2">
                                    <option defaultValue> Choose Category</option>
                                    <option>Crafts</option>
                                    <option>Drawings</option>
                                    <option>Paintings</option>
                                    <option>Sculpures</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <input onChange={this.handleLocationChange} type="text" name="location" placeholder="Location    " className="form-control2" />
                            </div>

                            <div className="form-group col-md-6">
                                <input onChange={this.handlephoneNumberChange} type="number" name="phoneNumber" placeholder="Phone number" className="form-control2" />
                            </div>

                            <div className="form-group col-md-6">
                                <input onChange={this.handlePriceChange} type="number" name="price" placeholder="Price" className="form-control2" />
                            </div>
                        <div className="App">
                            <textarea onChange={this.handleDescriptionChange} className="form-control2 textarea" placeholder="description" name="desc" />
                        </div>
                        <button type="submit" className="btn btn-primary App ">Post</button>
                    </form>
                </div>
            
            </div>

        )
    }
}



export default withTracker(() =>{
  Meteor.subscribe('files.all');
  return{
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }

// additions

})(Upload);

var clock = new Date({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

