import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import {About} from '/imports/ui/About.jsx';
import {Painting} from '/imports/ui/Painting.jsx';
import {Sculpture} from '/imports/ui/Sculpture.jsx';
import {Drawing} from '/imports/ui/Drawing.jsx';
import {Craft} from '/imports/ui/Craft.jsx';
import ArtSignUp from '/imports/ui/invisNavBar/ArtSignUp.jsx';
import LogIn from '/imports/ui/invisNavBar/LogIn.jsx';


route('/', Home);
route('/contact', ContactUs);
route('/about', About);
route('/painting', Painting);
route('/sculpture', Sculpture);
route('/drawing', Drawing);
route('/craft', Craft);
route('/SignUp',ArtSignUp);
route('/LogIn',LogIn);



