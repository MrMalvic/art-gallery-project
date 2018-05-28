import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Posts = new Mongo.Collection('posts');
export default Posts;
