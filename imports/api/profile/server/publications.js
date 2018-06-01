import { Meteor } from 'meteor/meteor';
import Profiles from '../collections.js';

Meteor.publish('profiles',()=>{
    
        return Profiles.find({});
});

