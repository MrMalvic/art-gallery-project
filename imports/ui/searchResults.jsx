import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import '/imports/api/search/methods.js';
import { Navbar2 } from '/imports/ui/Navbar2.jsx';


export class searchResults extends Component{
    render(){
        return(
            <div>
              <Navbar2 />
                
            </div>
        )
    }
}
