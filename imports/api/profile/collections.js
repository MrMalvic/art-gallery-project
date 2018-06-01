import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Profiles = new Mongo.Collection('profiles');
export default Profiles;
