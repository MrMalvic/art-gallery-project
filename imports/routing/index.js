import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import {About} from '/imports/ui/About.jsx';
import {Painting} from '/imports/ui/Painting.jsx';
import {Sculpture} from '/imports/ui/Sculpture.jsx';
import {Drawing} from '/imports/ui/Drawing.jsx';
import {Craft} from '/imports/ui/Craft.jsx';
import {ArtSignUp} from '/imports/ui/invisNavBar/ArtSignUp.jsx';
import LogIn from '/imports/ui/invisNavBar/LogIn.jsx';
import {UserSign} from'/imports/ui/invisNavBar/UserSign.jsx';
import ProfilePage  from '/imports/ui/ProfilePage.jsx';
import { Pops } from  '/imports/ui/Pops.jsx';
import Buy1 from '/imports/ui/Buy1.jsx';
import { Scul1 } from '/imports/ui/Scul1.jsx';
import { Upload } from '/imports/ui/invisNavBar/Upload.jsx';
import { Meteor } from 'meteor/meteor';
import { accessDenied } from '/imports/ui/accessDenied.jsx';
import { searchResults } from '/imports/ui/searchResults.jsx';






route('/', Home);
// if( Meteor.user()){
// }
// else{
//     route('/accessDenied',accessDenied);
//     route.go('/accessDenied', accessDenied);
// }
route('/about', About);
route('/painting', Painting);
route('/sculpture', Sculpture);
route('/drawing', Drawing);
route('/craft', Craft);
route('/UserSign',UserSign);
route('/ProfilePage',ProfilePage);
route('/SignUp', ArtSignUp);
route('/UserSign', UserSign);
route('/LogIn', LogIn);
route('/Pops', Pops);
route('/buy1', Buy1);
route('/scul1',Scul1);
route('/upload',Upload);
route('/searchResults', searchResults)
