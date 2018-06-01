import { Meteor } from 'meteor/meteor';
import Profiles from './collections.js';
import { check } from 'meteor/check'

// Posts.allow({
//     insert: () => false,
// 	update: () => false,
// 	remove: () => false
// })

Meteor.methods({
    'profiles.create': (profile) =>{
        check(profile, Object);
        Profiles.insert(profile);
    }
});

