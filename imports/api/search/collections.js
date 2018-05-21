import { Mongo } from 'meteor/mongo';

const Artists = new Mongo.Collection( 'artists' );
export default Artists;


if ( Meteor.isServer ) {
  Artists._ensureIndex( { name: 1, year: 1 } );
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

let AlbumsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'The name of the artist'
  },
  'year': {
    type: String,
    label: 'The year this album was released.'
  }
});

Artists.attachSchema( ArtistsSchema );
