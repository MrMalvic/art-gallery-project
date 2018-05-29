import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import NavBar1 from '/imports/ui/invisNavBar/NavBar1.jsx';
import Posts from '/imports/api/blog/collections.js';


export class Upload extends Component {

    getUploadData = (e) => {
        e.preventDefault();
        const { target } = e;
        const name = target.name.value;
        const file = target.file.value;
        const category = target.category.value;
        const location = target.location.value;
        const phoneNumber = target.phoneNumber.value;
        const price = target.price.value;
        const desc = target.desc.value;
   
    const post = {
        name,
        category,
        location,
        phoneNumber,
        price,
        desc,
    }
    Posts.insert(post);
    route.go('/')
    }

    

    render() {
        return (
            <div className="App">
                <div className="mask3">
                    <img src="img7.jpg" className="artist-signup-img" />
                </div>
                <NavBar1 />
                <div>
                    <form onSubmit={this.getUploadData} className="artist-signup-form">
                        <h1 className="upload-work App">Upload your work</h1>

                            <div className="form-group col-md-6">
                                <input type="text" name="name" placeholder="Name of piece" className="form-control2" />
                            </div>

                            <div className="form-group col-md-6">
                                <div className="upload-btn-wrapper">
                                    <button className="up-btn">upload a picture</button>
                                    <input type="file" name="file" className="form-control2" />
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <select name="category" id="inputCategory" className="form-control2">
                                    <option>Choose Category</option>
                                    <option>Crafts</option>
                                    <option>Drawings</option>
                                    <option>Paintings</option>
                                    <option>Sculpures</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <input type="text" name="location" placeholder="Location    " className="form-control2" />
                            </div>

                            <div className="form-group col-md-6">
                                <input type="number" name="phoneNumber" placeholder="Phone number" className="form-control2" />
                            </div>

                            <div className="form-group col-md-6">
                                <input type="number" name="price" placeholder="Price" className="form-control2" />
                            </div>
                        <div className="App">
                            <textarea className="form-control2 textarea" placeholder="description" name="desc" />
                        </div>
                        <button type="submit" className="btn btn-primary App ">Post</button>
                    </form>
                </div>
            
            </div>

        )
    }
}
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