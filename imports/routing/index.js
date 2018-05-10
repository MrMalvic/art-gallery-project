import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import {About} from '/imports/ui/About.jsx';
import ArtSignUp from '/imports/ui/invisNavBar/ArtSignUp.jsx';
import LogIn from '/imports/ui/invisNavBar/LogIn.jsx';


route('/', Home);
route('/contact', ContactUs);
route('/about', About);
route('/SignUp',ArtSignUp);
route('/LogIn',LogIn);



