import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'insertUser': (newUserData) => {
      return Accounts.createUser(newUserData);
    }
  })