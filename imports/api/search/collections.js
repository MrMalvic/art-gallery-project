import { Mongo } from 'meteor/mongo';
import { WSAEUSERS } from 'constants';

  Artists = new Mongo.Collection( 'artists' );
export default Artists;


if ( Meteor.isServer ) {
  Artists._ensureIndex( { name: 1 } );
}

Artists.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Artists.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
