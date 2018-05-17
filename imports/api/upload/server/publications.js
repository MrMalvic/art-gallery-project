import { Meteor } from 'meteor/meteor';

Meteor.publish('allPosts', function(){
    return Posts.find();
  });
  
  Meteor.publish('singlePost', function(id){
    return Posts.find(id);
  });
  