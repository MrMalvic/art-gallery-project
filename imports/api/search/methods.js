import { Meteor } from 'meteor/meteor';
import Artists from './collections.js';


Meteor.methods({
    'findUserByUsername':() =>{
        const user = Accounts.findUserByUsername();
        return (
            <div id="search-results">
                test
            </div>
        );
    }
  });