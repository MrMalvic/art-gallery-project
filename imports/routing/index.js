import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ArtSignUp from '/imports/ui/invisNavBar/ArtSignUp.jsx';
import UserSign from '/imports/ui/invisNavBar/UserSign.jsx';
import LogIn from '/imports/ui/invisNavBar/LogIn.jsx';

route('/', Home);
route('/SignUp', ArtSignUp);
route('/Usersign', UserSign);
route('/logIn', LogIn);

